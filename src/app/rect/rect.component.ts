import { Component } from '@angular/core';
import { ShapeComponent } from "../shared/shape.component";

@Component({
  selector: '[app-rect]',
  templateUrl: './rect.component.svg',
  styleUrls: ['./rect.component.css']
})
export class RectComponent extends ShapeComponent {
}
