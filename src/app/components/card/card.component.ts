import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = 'title';
  @Input() width: string = '600';
  @Input() height: string = '120';
  @Input() color: string = '#A6B91A';

  ngOnChanges() {
    console.log('Color:', this.color);
  }
}

