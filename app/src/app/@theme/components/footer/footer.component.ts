import { Component } from "@angular/core";

@Component({
  selector: "ngx-footer",
  styleUrls: ["./footer.component.scss"],
  template: `
    <span class="created-by">
      &copy;
      <a href="https://www.facebook.com/queen.jonnaxx" target="_blank">
        {{ "Jonalyn" }}
      </a>
      2024
    </span>
    <div class="socials">
      <a
        href="https://www.facebook.com/queen.jonnaxx"
        target="_blank"
        class="ion ion-social-facebook"
      ></a>
      <a
        href="https://www.facebook.com/queen.jonnaxx"
        target="_blank"
        class="ionicons ion-android-globe"
      ></a>
    </div>
  `,
})
export class FooterComponent {}
