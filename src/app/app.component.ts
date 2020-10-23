import { Component, HostListener } from '@angular/core';
import { Circle } from './circle/circle.model';
import { Rect } from "./rect/rect.model";
import { Shape } from "./shared/shape.model";
import { distinctUntilChanged } from 'rxjs/operators';
import { ChainComparer } from './shared/chain-comparer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    shapes: Shape[] = [
        new Circle({ x: 50, y: 50 }),
        new Circle({ x: 100, y: 150 }),
        new Circle({ x: 150, y: 50 }),
        new Circle({ x: 200, y: 200 }),
        new Rect({ x: 250, y: 50 }),
        new Rect({ x: 300, y: 160 }),
        new Rect({ x: 360, y: 50 }),
        new Rect({ x: 450, y: 200 }),
    ];

    constructor() {
        this.shapes.forEach(s => {
            s.isHovered.pipe(distinctUntilChanged()).subscribe(() => this.updateOrder());
            s.isDragged.pipe(distinctUntilChanged()).subscribe(() => this.updateOrder());
        })
    }

    public updateOrder() {
        if (this.shapes.find(s => s.isDragged.value)) return;

        this.shapes = this.shapes.sort((a, b) => new ChainComparer<Shape>(a, b)
            .compareBy((shape) => shape.isHovered.value)
            .compareBy((shape) => shape.x.value)
            .compareBy((shape) => shape.y.value)
            .evaluate());
    }

    @HostListener('mousemove', ['$event'])
    onmove(e: MouseEvent) {
        this.shapes.find(s => s.isDragged.value)?.mouseMove.next({ x: e.x, y: e.y });
    }

    @HostListener('mouseleave', ['$event'])
    @HostListener('mouseup', ['$event'])
    onup(e: MouseEvent) {
        this.shapes.find(s => s.isDragged.value)?.isDragged.next(false);
    }
}


