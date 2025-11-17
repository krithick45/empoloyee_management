import { Router, RouterOutlet } from '@angular/router';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faChevronCircleLeft,
  faUserCircle,
  faHouse,
  faTableCells,
  faChevronRight,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

  

   // template references
  @ViewChild('sidebar') sidebar!: ElementRef<HTMLDivElement>;
  @ViewChild('menuBtn') menuBtn!: ElementRef<HTMLDivElement>;
  faBars = faBars;
  faChevronCircleLeft = faChevronCircleLeft;
  faUserCircle = faUserCircle;
  faHouse = faHouse;
  faGrid = faTableCells;
  faChevronRight = faChevronRight;
  faDocument = faClipboardList;

    openSidebar(): void {
    this.sidebar.nativeElement.classList.add('active');
    this.menuBtn.nativeElement.style.display = 'none';
  }

  closeSidebar(): void {
    this.sidebar.nativeElement.classList.remove('active');
    this.menuBtn.nativeElement.style.display = 'block';
  }

   toggleSubmenu(containerId: string, event: Event): void {
    const container = document.getElementById(containerId);
    const btn = event.currentTarget as HTMLElement;
    const dropdown = btn.querySelector('.dropdown');

    if (container) {
      container.classList.toggle('active');
    }

    if (dropdown) {
      dropdown.classList.toggle('rotate');
    }
  }
}