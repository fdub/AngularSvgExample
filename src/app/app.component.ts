import { Component, HostListener } from '@angular/core';
import { Circle } from './circle/circle.model';
import { Rect } from "./rect/rect.model";
import { Shape } from "./shape.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  circles: Shape[] = [
    new Circle ({ x: 50, y: 50}),
    new Circle ({ x: 100, y: 150}),
    new Circle ({ x: 150, y: 50}),
    new Circle ({ x: 200, y: 200}),
    new Rect ({ x: 250, y: 50}),
    new Rect ({ x: 300, y: 160}),
    new Rect ({ x: 360, y: 50}),
    new Rect ({ x: 450, y: 200}),
  ];

  constructor() { 
    this.circles.forEach(c => {
      c.isHovered.subscribe(() => this.updateOrder());
      c.isDragged.subscribe(() => this.updateOrder());
    })
  }

  public updateOrder() {
    if (this.circles.filter(c => c.isDragged.value).length) return;

    this.circles = this.circles.sort((a, b) => {
      if (a.isHovered.value < b.isHovered.value) return -1;
      if (a.isHovered.value > b.isHovered.value) return 1;
      if (a.x.value < b.x.value) return -1;
      if (a.x.value > b.x.value) return 1;
      if (a.y.value < b.y.value) return -1;
      if (a.y.value > b.y.value) return 1;
      return 0;
    });
  }

  @HostListener('mouseleave', ['$event'])
  onout(e: MouseEvent) {
    let filtered = this.circles.filter(c => c.isDragged.value);
    if (filtered.length === 1) {
      let dragged = filtered[0];
      
      dragged.isDragged.next(false);
    }
  }

  @HostListener('mousemove', ['$event'])
  onmove(e: MouseEvent) {
    let filtered = this.circles.filter(c => c.isDragged.value);
    if (filtered.length === 1) {
      let dragged = filtered[0];
      dragged.mouseMove.next({ x: e.x, y: e.y });
    }
  }
    
  @HostListener('mouseup', ['$event'])
  onup(e: MouseEvent) {
    let filtered = this.circles.filter(c => c.isDragged.value);
    if (filtered.length === 1) {
      let dragged = filtered[0];
      dragged.isDragged.next(false);
    }
  }
}
