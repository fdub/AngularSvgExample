import { Vect } from '../vect';
import { Shape } from '../shape.model';

export class Circle extends Shape {
    type = "circle"
    constructor(position: Vect) {
        super(position);
    }
}
