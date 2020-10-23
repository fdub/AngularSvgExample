import { Vect } from '../vect';
import { Shape } from './Shape';

export class Circle extends Shape {
    type = "circle"
    constructor(position: Vect) {
        super(position);
    }
}
