import { Vect } from '../shared/vect';
import { Shape } from '../shared/shape.model';

export class Circle extends Shape {
    type = "circle"
    constructor(position: Vect) {
        super(position);
    }
}
