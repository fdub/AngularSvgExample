import { Component, EventEmitter, SimpleChanges } from '@angular/core';
import { ShapeComponent } from '../shared/shape.component';

@Component({
  selector: '[app-circle]',
  templateUrl: './circle.component.svg',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent extends ShapeComponent {
}


