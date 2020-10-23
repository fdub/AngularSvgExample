import { Vect } from '../vect';
import { Shape } from '../shape.model';
export class Rect extends Shape {
    type = "rect";
    constructor(position: Vect) {
        super(position);
    }
}
