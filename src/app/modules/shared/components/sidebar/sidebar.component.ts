import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isAdminOpen = false;

  constructor(private router: Router) {}

  toggleAdminMenu() {
    this.isAdminOpen = !this.isAdminOpen;
  }

  navigateTo(section: string) {
    this.router.navigate([`/${section}`]);
  }
}
