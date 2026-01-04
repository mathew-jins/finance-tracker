import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCategoryColor]',
  standalone: true
})
export class CategoryColorDirective implements OnChanges {
  @Input('appCategoryColor') category: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category']) {
      this.updateBackgroundColor();
    }
  }

  private updateBackgroundColor() {
    let color = '#ffffff'; // Default white

    switch (this.category) {
      case 'Income':
        color = '#e8f5e9'; // Light Green
        break;
      case 'Expense':
        color = '#ffebee'; // Light Red
        break;
      case 'Investment':
        color = '#e3f2fd'; // Light Blue
        break;
    }

    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
