import { Vect } from '../vect';
import { Shape } from './Shape';
export class Rect extends Shape {
    type = "rect";
    constructor(position: Vect) {
        super(position);
    }
}
