import { Component, HostListener } from '@angular/core';
import { Circle } from './circle/circle.model';
import { Rect } from "./rect/rect.model";
import { Shape } from "./shared/shape.model";
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    circles: Shape[] = [
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
        this.circles.forEach(c => {
            c.isHovered.pipe(distinctUntilChanged()).subscribe(() => this.updateOrder());
            c.isDragged.pipe(distinctUntilChanged()).subscribe(() => this.updateOrder());
        })
    }

    public updateOrder() {
        if (this.circles.find(c => c.isDragged.value)) return;

        this.circles = this.circles.sort((a, b) => new ChainComparison<Shape>(a, b)
            .compareBy((shape) => shape.isHovered.value)
            .compareBy((shape) => shape.x.value)
            .compareBy((shape) => shape.y.value)
            .evaluate());
    }

    @HostListener('mousemove', ['$event'])
    onmove(e: MouseEvent) {
        this.circles.find(c => c.isDragged.value)?.mouseMove.next({ x: e.x, y: e.y });
    }

    @HostListener('mouseleave', ['$event'])
    @HostListener('mouseup', ['$event'])
    onup(e: MouseEvent) {
        this.circles.find(c => c.isDragged.value)?.isDragged.next(false);
    }
}

class ChainComparison<T> {
    private getTarget: (T) => unknown;
    private previous: ChainComparison<T>;
    constructor(private a: T, private b: T) {
    }

    compareBy(getTarget: (T) => unknown) {
        let result = new ChainComparison<T>(this.a, this.b);
        result.getTarget = getTarget;
        result.previous = this;
        return result;
    }
    
    evaluate(): number {
        const previous = this.previous?.evaluate();
        if (!!previous) return previous;

        if (!!this.getTarget) {
            if (this.getTarget(this.a) < this.getTarget(this.b)) return  -1;
            if (this.getTarget(this.a) > this.getTarget(this.b)) return 1;
        }
        return 0;
    }

}
