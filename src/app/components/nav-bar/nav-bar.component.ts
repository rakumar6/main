import { Component } from '@angular/core';
import { UserMenuComponent } from "./components/user-menu.component";
import { SideMenuComponent } from "./components/side-menu.component";
import { MainMenuComponent } from "./components/main-menu.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [UserMenuComponent, SideMenuComponent, MainMenuComponent],
  template: `
    <div class="navbar bg-base-100">
  <div class="navbar-start">
    <app-side-menu />
    <a class="btn btn-ghost text-xl">HelpDesk</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <app-main-menu />
  </div>
  <div class="navbar-end">
    <app-user-menu />
  </div>
</div>
  `,
  styles: ``
})
export class NavBarComponent {

}
