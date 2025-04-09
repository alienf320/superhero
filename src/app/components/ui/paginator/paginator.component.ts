import { Component, computed, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-paginator',
  imports: [],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  total = input.required<number>();
  pageSize = input.required<number>();
  pageIndex = signal(0);
  totalPages = computed(() => Math.ceil(this.total() / this.pageSize()))
  pageChange = output<number>();

  previous() {
    if(this.pageIndex() > 0) {
      this.pageIndex.update(i => i - 1);
      this.pageChange.emit(this.pageIndex());
    }
  }

  next() {
    if(this.pageIndex() < this.totalPages() -1) {
      this.pageIndex.update(i => i + 1);
      this.pageChange.emit(this.pageIndex())
    }
  }
}
