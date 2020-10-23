import { Vect } from './vect';
import { BehaviorSubject } from 'rxjs';

export abstract class Shape {
    abstract type: string;
    x = new BehaviorSubject<number>(0);
    y = new BehaviorSubject<number>(0);
    isHovered = new BehaviorSubject<boolean>(false);
    isDragged = new BehaviorSubject<boolean>(false);
    mouseMove = new BehaviorSubject<Vect>({ x: 0, y: 0 });

    constructor(position: Vect) {
        this.x.next(position.x);
        this.y.next(position.y);
    }
}
