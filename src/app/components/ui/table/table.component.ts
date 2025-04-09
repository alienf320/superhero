import { Component, input, output } from '@angular/core';
import { Hero } from '../../../shared/models/hero.model';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  heroes = input.required<Hero[]>();
  edit = output<number>();
  delete = output<number>();
}
