import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faHouse, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'com-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule, RouterOutlet, FontAwesomeModule],
  standalone: true

})
export class SidebarComponent {
  isSidebarOpen: boolean = false;
  house = faHouse;
  bars =  faBars;
  showSecondElements: boolean = false;
  content: { icon: IconDefinition; name: string; }[] = [];

  ngOnInit() {
    this.content = [
      {
        icon: this.house,
        name: 'Home'
      },
      {
        icon: this.house,
        name: 'users'
      }
    ];
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleElements() {
    this.showSecondElements = !this.showSecondElements;
  }
}

export class SidebarModule {}
