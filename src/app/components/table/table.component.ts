import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
})
export class TableComponent implements OnInit {
  @Input() dataTable: any[] = [];
  @Input() list: any[] = [];
  currentPage: number = 1; // Página actual
  itemsPerPage: number = 0;
  itemPage: number[] = [0];
  currentList: any[] = []; // Lista de elementos a mostrar en la página actual
  iterator = 0;

  ngOnInit() {
    const itemsPorSegmento = 10;
    const indexSegment = 1;
    const startIndex = (indexSegment - 1) * itemsPorSegmento;
    const endIndex = startIndex + itemsPorSegmento;
    this.currentList = this.list.slice(startIndex, endIndex);
    this.itemsPerPage = this.list.length / 10;
    this.itemPage = Array.from(Array(this.itemsPerPage).keys(), (x) => x + 1);
  }

  next() {
    const itemsPorSegmento = 10;
    this.currentPage = this.currentPage + 1;
    const startIndex = (this.currentPage - 1) * itemsPorSegmento;
    const endIndex = startIndex + itemsPorSegmento;
    this.currentList = this.list.slice(startIndex, endIndex);

  }

  select(i: number) {
    const itemsPorSegmento = 10;
    this.currentPage = i;
    const startIndex = (this.currentPage - 1) * itemsPorSegmento;
    const endIndex = startIndex + itemsPorSegmento;
    this.currentList = this.list.slice(startIndex, endIndex);

  }

  previous() {
    const itemsPorSegmento = 10;
    this.currentPage = this.currentPage - 1;
    const startIndex = (this.currentPage - 1) * itemsPorSegmento;
    const endIndex = startIndex + itemsPorSegmento;
    this.currentList = this.list.slice(startIndex, endIndex);
  }
}
