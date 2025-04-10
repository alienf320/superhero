import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  template:
    '<footer><fa-icon [icon]="faCopyright"></fa-icon> Cristian Martín Chavez</footer>',
  styles: `
  footer {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    margin: 0 auto;
    width: 100%;
    padding: 4px 0;
    color: #808080;
    gap: 10px;
  }`,
})
export class FooterComponent {
  faCopyright = faCopyright;
}
