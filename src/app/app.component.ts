import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <main class="container mx-auto">
      <app-nav-bar />
    </main>
  `,
    styles: [],
    imports: [RouterOutlet, NavBarComponent]
})
export class AppComponent {}
