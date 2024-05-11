const User = require('../models/user'); // Import User Model Schema
const { v4: uuidv4 } = require('uuid');
const hash = require('../config/password-hasher');
const mongoose = require('mongoose');
let bcrypt = require('bcryptjs');


const ObjectId = mongoose.Types.ObjectId;

module.exports = (router) => {

    router.get('/getAllUser', (req, res) => {

        // Search database for all blog posts
        User.find({ deleted: false }, { id: 1, email: 1, username: 1, role: 1, status: 1 }, (err, user) => {
            // Check if error was found or not
            if (err) {
                res.json({ success: false, message: err }); // Return error message
            } else {
                // Check if blogs were found in database
                if (!user) {
                    res.json({ success: false, message: 'No User found.' }); // Return error of no blogs found
                } else {
                    res.json({ success: true, user: user }); // Return success and blogs array
                }
            }
        }).sort({ '_id': -1 }); // Sort blogs from newest to oldest
    });

    router.post('/findById', (req, res) => {
        User.findOne({ id: req.body.id }, function (err, user) {
             if (err) {
                    res.json({ success: false, message: err }); // Return error message
                } else {
                    // Check if blogs were found in database
                    if (!user) {
                        res.json({ success: false, message: 'No User found.' }); // Return error of no blogs found
                    } else {
                        res.json({ success: true, user: user }); // Return success and blogs array
                    }
                }

        });
    });




    router.post('/addUser', (req, res) => {

        if (!req.body.email) {
            res.json({ success: false, message: 'You must provide an email' })
        } else {

            if (!req.body.username) {
                res.json({ success: false, message: 'You must provide an username' })
            } else {
                if (!req.body.password) {
                    res.json({ success: false, message: 'You must provide an password' })

                } else if (req.body.password !== req.body.confirm) {

                    res.json({ success: false, message: 'Password dont match' })

                } else {

                    let user = new User({
                        id: uuidv4(),
                        email: req.body.email.toLowerCase(),
                        username: req.body.username.toLowerCase(),
                        password: req.body.password,
                        role: req.body.role.toLowerCase(),
                    })

                    user.save((err, data) => {
                        if (err) {
                            if (err.code === 11000) {

                                res.json({ success: false, message: 'User name or Email already exists ', err: err.message })
                            } else {

                                if (err.errors) {
                                    //for specific error email,username and password
                                    if (err.errors.email) {
                                        res.json({ success: false, message: err.errors.email.message })
                                    } else {
                                        if (err.errors.username) {
                                            res.json({ success: false, message: err.errors.username.message })
                                        } else {
                                            if (err.errors.password) {
                                                res.json({ success: false, message: err.errors.password.message })
                                            } else {
                                                res.json({ success: false, message: err })
                                            }
                                        }
                                    }

                                } else {
                                    res.json({ success: false, message: 'Could not save user Error : ' + err })
                                }
                            }
                        } else {
                            res.json({ success: true, message: 'This user is successfully Registered ', data: { email: data.email, username: data.username } });
                            // globalconnetion.emitter('user')
                        }
                    })

                }
            }
        }

    });


    router.put('/deleteUser', (req, res) => {

        let data = req.body;

        User.deleteOne({
            id: data.id
        }, (err, user) => {
                if (err) {
                    res.json({ success: false, message: 'Could not Delete User' + err })
                } else {
                    res.json({ success: true, message:' Successfully Deleted the User', data: user });
                    // globalconnetion.emitter('user')
                }
            })


    });

    router.put('/setInactiveUser', (req, res) => {

        let data = req.body;
        
        User.findOne({
            id: data.id
        }, (err, user) => {
            if(err) throw err
            User.findOneAndUpdate({ id: data.id }, { deleted: true, status : 'inactive' }, { upsert: true }, (err, response) => {
                    if (err) return res.json({ success: false, message: err.message });
                    if (response) {
                        res.json({ success: true, message:' Successfully Delete User', data: user });
                    } else {
                        res.json({ success: false, message: 'Could Delete User' + err })
                    }
                });

            })
            
    });

    router.put('/changeUserStatus', (req, res) => {

        let data = req.body;
        
        User.findOne({
            id: data.id
        }, (err, user) => {
            let statusData = user.status === 'inactive' ? 'active': 'inactive';
            if(err) throw err
            User.findOneAndUpdate({ id: data.id }, { status: statusData }, { upsert: true }, (err, response) => {
                    if (err) return res.json({ success: false, message: err.message });
                    if (response) {
                        res.json({ success: false, message: 'Could not set User  Status' + err })
                    } else {
                        res.json({ success: true, message:' Successfully User set Status', data: user });
                    }
                });

            })
            
    });





    router.put('/updateUser', async (req, res) =>   {

        let data = req.body;
        let userData = {};

        if(data.changePassword){
            let checkPassword = await bcrypt.compare(data.old_password, docs.password); 

            if( !checkPassword){
                res.json({ success: false, message: 'Old Password Incorrect: ' + !checkPassword })
            }else{
                
                hash.encryptPassword(data.new_password).then(hash => {
                    userData.role = data.role;
                    userData.username = data.username;
                    userData.email = data.email;
                    userData.password = hash;
                    changedPassword = true;
                    User.findOneAndUpdate({ id: data.id }, userData, { upsert: true }, (err, response) => {
                        if (err) return res.json({ success: false, message: err.message });
                        if (response) {
                            res.json({ success: true, message: "User Information has been updated!", data: response });
                        } else {
                            res.json({ success: true, message: "No User has been modified!", data: response });
                        }
                    });
                }).catch(err => { console.log(err); })

            }
        }else{
            userData.role = data.role;
            userData.username = data.username;
            userData.email = data.email;
            User.findOneAndUpdate({ id: data.id }, userData, { upsert: true }, (err, response) => {
                if (err) return res.json({ success: false, message: err.message });
                if (response) {
                     res.json({ success: true, message: "User Information has been updated!", data: response  });
                } else {
                    res.json({ success: true, message: "No User has been modified!", data: response });
                }
            });
        }
    });

   router.put("/updateProfile", async (req, res) => {
    let data = req.body;
    let userData = {};
    console.log(data);

    const user = await User.findOne({ id: req.body.id });

    if (data.new_password) {
      let checkPassword = await bcrypt.compare(data.current_password, user.password);
      console.log({ checkPassword: checkPassword });
      if (!checkPassword) {
        res.json({
          success: false,
          message: "Incorrect Old Password : " + data.current_password + " for " + data.username,
        });
      } else {
        hash
          .encryptPassword(data.new_password)
          .then((hash) => {
            userData.role = data.role;
            userData.username = data.username;
            userData.email = data.email;
            userData.password = hash;
            userData.profile_pic = data.profile_pic;
            User.findOneAndUpdate(
              { id: data.id },
              userData,
              { upsert: true },
              (err, response) => {
                if (err)
                  return res.json({ success: false, message: err.message });
                if (response) {
                  res.json({
                    success: true,
                    message: "User Information has been updated!",
                    data: response,
                  });
                } else {
                  res.json({
                    success: true,
                    message: "No User has been modified!",
                    data: response,
                  });
                }
              }
            );
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      const { username, email, profile_pic, id } = req.body;

      User.findOneAndUpdate(
        { id: id },
        { username, email, profile_pic },
        { upsert: false },
        (err, response) => {
          console.log("else");
          console.log(response);
          console.log(err);

          if (err) return res.json({ success: false, message: err.message });
          if (response) {
            res.json({
              success: true,
              message: "User Information has been updated!",
              data: response,
            });
          } else {
            res.json({
              success: true,
              message: "No User has been modified!",
              data: response,
            });
          }
        }
      );
    }
  });



    router.get('/profile/:id', (req, res) => {

        User.findOne({ id: req.params.id }).select('username email profile_pic').exec((err, user) => {

            console.log(user);

          if (err) {
            res.json({ success: false, message: err.message })
          } else {
            if (!user) {
              res.json({ success: false, message: 'User not found' })
            } else {
              res.json({ success: true, user: user })
            }
          }
        });
      });


    router.get('/UserProfilePic/:id', (req, res) => {

        console.log('UserProfilePic');
        console.log(req.params);

        User.findOne({ profile_pic : req.params.id }).select('profile_pic').exec((err, user) => {

            console.log(user);

          if (err) {
            res.json({ success: false, message: err.message })
          } else {
            if (!user) {
              res.json({ success: false, message: 'UserPic not found' })
            } else {
              res.json({ success: true, picture: user })
            }
          }
        });
      });

    return router;
};


