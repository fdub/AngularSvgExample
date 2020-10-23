import { Vect } from '../shared/vect';
import { Shape } from '../shared/shape.model';
export class Rect extends Shape {
    type = "rect";
    constructor(position: Vect) {
        super(position);
    }
}
