import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({ selector: 'app-root', standalone: true, imports: [CommonModule, FormsModule], templateUrl: './app.component.html' })
export class AppComponent {
  isLight = false;
  menuOpen = false;
  activeSection = 'overview';
  contact = { name: '', email: '', message: '' };
  sent = false;
  readonly email = 'manibharathi.contact@gmail.com';
  readonly linkedin = 'https://linkedin.com/in/manibharathi-devx';
  readonly skills = [
    { name: 'Angular', detail: 'v11–20', icon: 'A', color: 'red' },
    { name: 'TypeScript', detail: 'Language', icon: 'TS', color: 'blue' },
    { name: 'RxJS', detail: 'Reactive', icon: 'Rx', color: 'pink' },
    { name: 'NgRx / Signals', detail: 'State', icon: 'N', color: 'purple' },
    { name: 'Syncfusion EJ2', detail: 'UI toolkit', icon: 'S', color: 'cyan' },
    { name: 'DevExtreme', detail: 'UI toolkit', icon: 'DX', color: 'orange' },
    { name: 'ASP.NET Core', detail: 'API integration', icon: '.NET', color: 'violet' },
    { name: 'SQL Server', detail: 'Database', icon: 'SQL', color: 'blue' }
  ];
  readonly responsibilities = [
    'Designed, developed, tested, and maintained scalable enterprise web applications using Angular, TypeScript, HTML5, CSS3, and SCSS.',
    'Integrated DevExtreme data visualization components, including interactive charts and metric widgets, for form-data analysis.',
    'Developed responsive dynamic forms and configurable workflows for varied business requirements.',
    'Built reusable Angular components and a Configurations module to improve maintainability and flexibility.',
    'Integrated REST APIs using Angular HttpClient and implemented asynchronous UI behavior with RxJS.',
    'Applied NgRx, Signals, Signal Store, reactive forms, validation, debugging, testing, and production support.'
  ];
  toggleTheme(): void { this.isLight = !this.isLight; document.documentElement.classList.toggle('light-theme', this.isLight); }
  scrollTo(id: string): void { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); this.activeSection = id; this.menuOpen = false; }
  submitContact(): void {
    if (!this.contact.name.trim() || !this.contact.email.trim() || !this.contact.message.trim()) return;
    const subject = encodeURIComponent(`Portfolio enquiry from ${this.contact.name}`);
    const body = encodeURIComponent(`Name: ${this.contact.name}\nEmail: ${this.contact.email}\n\n${this.contact.message}`);
    window.location.href = `mailto:${this.email}?subject=${subject}&body=${body}`;
    this.sent = true;
  }
  @HostListener('window:scroll') onScroll(): void {
    const sections = ['overview', 'experience', 'skills', 'projects', 'education', 'contact'];
    for (const id of sections) { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < 180) this.activeSection = id; }
  }
}
