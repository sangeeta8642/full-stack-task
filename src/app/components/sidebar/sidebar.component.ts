import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  showFiller: boolean = false

  /**
   *
   */
  constructor(private router: Router) {

  }

  redirectToCreate() {
    this.router.navigateByUrl('/create')
  }
  // showFiller() {

  // }
}
