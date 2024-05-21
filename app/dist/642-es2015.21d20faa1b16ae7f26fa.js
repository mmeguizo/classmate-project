"use strict";(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[642],{31642:function(t,e,n){n.r(e),n.d(e,{LoginModule:function(){return h}});var o=n(38583),r=n(39895),i=n(3679),a=n(48248),s=n(37716),l=n(98934),c=n(8156),d=n(65181);function m(t,e){1&t&&(s.\u0275\u0275elementStart(0,"span",12),s.\u0275\u0275text(1," This field is required. "),s.\u0275\u0275elementEnd())}function u(t,e){1&t&&(s.\u0275\u0275elementStart(0,"span",12),s.\u0275\u0275text(1," This field is required. "),s.\u0275\u0275elementEnd())}const p=function(t,e){return{"has-error":t,"has-success":e}},g=[{path:"",component:(()=>{class t{constructor(t,e,n,o){this.cs=t,this.formBuilder=e,this.authService=n,this.router=o,this.loader=!1,this.processing=!1}ngOnInit(){this.createForm()}createForm(){this.form=this.formBuilder.group({username:["",i.kI.required],password:["",i.kI.required]})}enableForm(){this.form.controls.username.enable(),this.form.controls.password.enable()}disableForm(){this.form.controls.username.disable(),this.form.controls.password.disable()}Submit(){}onLoginSubmit(){this.processing=!0,this.disableForm();const t={username:this.form.get("username").value,password:this.form.get("password").value};this.authService.login(t).subscribe(t=>{if(t.success){let e=(0,a.Z)(t.token);this.authService.makeToast("success","Success",t.message),this.authService.storeUserData(t.token,e),this.authService.CurrentlyloggedIn()?this.router.navigate(["admin"]):(this.authService.logout(),this.router.navigate(["login"]))}else this.authService.makeToast("danger","Failed Logging in",t.message),this.processing=!1,this.enableForm()})}}return t.\u0275fac=function(e){return new(e||t)(s.\u0275\u0275directiveInject(l.M),s.\u0275\u0275directiveInject(i.qu),s.\u0275\u0275directiveInject(c.e),s.\u0275\u0275directiveInject(r.F0))},t.\u0275cmp=s.\u0275\u0275defineComponent({type:t,selectors:[["app-login"]],decls:23,vars:12,consts:[[1,"wrapper","login-background",2,"background","url('https://source.unsplash.com/3tYZjGSBwbk'),\n          no-repeat center center fixed","background-size","cover"],[1,"login-form","container"],[3,"formGroup","submit"],[1,"form-group"],["for","username",2,"color","white"],[3,"ngClass"],["type","text","name","username","formControlName","username","autocomplete","off","webauthn","",1,"form-control"],[1,"help-block"],["style","color: red",4,"ngIf"],["for","password",2,"color","white"],["type","password","name","password","formControlName","password","autocomplete","new-password","webauthn","",1,"form-control"],["type","submit","value","Login",1,"btn","btn-primary",3,"disabled"],[2,"color","red"]],template:function(t,e){1&t&&(s.\u0275\u0275elementStart(0,"nb-layout"),s.\u0275\u0275elementStart(1,"nb-layout-column"),s.\u0275\u0275elementStart(2,"div",0),s.\u0275\u0275elementStart(3,"div",1),s.\u0275\u0275elementStart(4,"h2"),s.\u0275\u0275text(5,"Personal File Drive"),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementStart(6,"form",2),s.\u0275\u0275listener("submit",function(){return e.onLoginSubmit()}),s.\u0275\u0275elementStart(7,"div",3),s.\u0275\u0275elementStart(8,"label",4),s.\u0275\u0275text(9,"Username"),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementStart(10,"div",5),s.\u0275\u0275element(11,"input",6),s.\u0275\u0275elementStart(12,"ul",7),s.\u0275\u0275template(13,m,2,0,"span",8),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementStart(14,"div",3),s.\u0275\u0275elementStart(15,"label",9),s.\u0275\u0275text(16,"Password"),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementStart(17,"div",5),s.\u0275\u0275element(18,"input",10),s.\u0275\u0275elementStart(19,"ul",7),s.\u0275\u0275template(20,u,2,0,"span",8),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementStart(21,"button",11),s.\u0275\u0275text(22," Login "),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd()),2&t&&(s.\u0275\u0275advance(6),s.\u0275\u0275property("formGroup",e.form),s.\u0275\u0275advance(4),s.\u0275\u0275property("ngClass",s.\u0275\u0275pureFunction2(6,p,e.form.controls.username.errors&&e.form.controls.username.dirty,e.form.controls.username.valid&&e.form.controls.username.dirty)),s.\u0275\u0275advance(3),s.\u0275\u0275property("ngIf",(null==e.form.controls.username.errors?null:e.form.controls.username.errors.required)&&e.form.controls.username.dirty),s.\u0275\u0275advance(4),s.\u0275\u0275property("ngClass",s.\u0275\u0275pureFunction2(9,p,e.form.controls.password.errors&&e.form.controls.password.dirty,e.form.controls.password.valid&&e.form.controls.password.dirty)),s.\u0275\u0275advance(3),s.\u0275\u0275property("ngIf",(null==e.form.controls.password.errors?null:e.form.controls.password.errors.required)&&e.form.controls.password.dirty),s.\u0275\u0275advance(1),s.\u0275\u0275property("disabled",!e.form.valid||e.processing))},directives:[d.Aqw,d.dP_,i._Y,i.JL,i.sg,o.mk,i.Fj,i.JJ,i.u,o.O5],styles:['@import"https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300";h2[_ngcontent-%COMP%]{font-family:"Archivo Black",sans-serif;color:#fff;margin-left:auto;margin-right:auto;font-style:italic;font-weight:bold;margin-top:2px}.error[_ngcontent-%COMP%]{text-align:center;color:red}.tinker-logo[_ngcontent-%COMP%]{padding-top:30px;width:120px;margin:0 auto}.chmsc-logo[_ngcontent-%COMP%]{padding-top:30px;width:39%;margin:0 auto}.wrapper[_ngcontent-%COMP%]{background:#ffaa00;background:linear-gradient(to bottom right,#ffaa00 0%,#7a1bff 100%);position:absolute;top:29%;left:0;width:100%;height:100%;margin-top:-215px;overflow:hidden}.wrapper.form-success[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{transform:translateY(85px)}.container[_ngcontent-%COMP%]{max-width:600px;padding-top:20%;height:400px;text-align:center}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:40px;transition-duration:1s;transition-timing-function:ease-in-put;font-weight:200}form[_ngcontent-%COMP%]{padding:20px 0;position:relative;z-index:2}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;border:0;border-bottom:1px solid white;background-color:transparent;width:250px;border-radius:3px;padding:10px 15px;margin:0 auto 10px;display:block;text-align:center;font-size:18px;color:#fff;transition-duration:.25s;font-weight:300}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover{background-color:rgba(255,255,255,.1)}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{background-color:rgba(255,255,255,.1);width:300px;border-bottom-color:#222b45;color:#222b45}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:focus):not(:hover){border-bottom-color:#fff}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;background-color:#fff;border:0;padding:10px 15px;color:#222b45;border-radius:3px;width:250px;cursor:pointer;font-size:18px;transition-duration:.25s}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#f5f7f9}.bg-bubbles[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1}.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:absolute;list-style:none;display:block;width:40px;height:40px;background-color:#7716ff;bottom:-160px;-webkit-animation:square 25s infinite;animation:square 25s infinite;transition-timing-function:linear}.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1){left:10%}.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){left:20%;width:80px;height:80px;-webkit-animation-delay:2s;animation-delay:2s;-webkit-animation-duration:17s;animation-duration:17s}.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3){left:25%;-webkit-animation-delay:4s;animation-delay:4s}.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4){left:40%;width:60px;height:60px;-webkit-animation-duration:22s;animation-duration:22s;background-color:fade(white,25%)}.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5){left:70%}.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6){left:80%;width:120px;height:120px;-webkit-animation-delay:3s;animation-delay:3s;background-color:fade(white,20%)}.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7){left:32%;width:160px;height:160px;-webkit-animation-delay:7s;animation-delay:7s}.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(8){left:55%;width:20px;height:20px;-webkit-animation-delay:15s;animation-delay:15s;-webkit-animation-duration:40s;animation-duration:40s}.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(9){left:25%;width:10px;height:10px;-webkit-animation-delay:2s;animation-delay:2s;-webkit-animation-duration:40s;animation-duration:40s;background-color:fade(white,30%)}.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(10){left:90%;width:160px;height:160px;-webkit-animation-delay:11s;animation-delay:11s}@-webkit-keyframes square{0%{transform:translateY(0)}to{transform:translateY(-700px) rotate(600deg)}}@keyframes square{0%{transform:translateY(0)}to{transform:translateY(-700px) rotate(600deg)}}[_ngcontent-%COMP%]::-moz-placeholder{color:#fff;opacity:1}[_ngcontent-%COMP%]:-ms-input-placeholder{color:#fff;opacity:1}[_ngcontent-%COMP%]::placeholder{color:#fff;opacity:1}']}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=s.\u0275\u0275defineInjector({imports:[[r.Bz.forChild(g)],r.Bz]}),t})();var b=n(59770);let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=s.\u0275\u0275defineInjector({imports:[[o.ez,f,b.O,d.uuI,d.zyh,d.BW0,i.u5,i.UX,d.T2N]]}),t})()}}]);