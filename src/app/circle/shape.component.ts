import { Input, OnDestroy, OnChanges } from '@angular/core';
import { Shape } from "./Shape";
import { Subscription } from 'rxjs';
import { Vect } from '../vect';

export abstract class ShapeComponent implements OnDestroy, OnChanges {
  @Input() model!: Shape;

  lastMousePosition: Vect = { x: 0, y: 0 };
  private subscription: Subscription;

  ngOnChanges(): void {
    if (!!this.subscription || !this.model)
      return;

    this.subscription = this.model.mouseMove.subscribe(mousePosition => this.onMove(mousePosition));
  }

  onMove(mousePosition: Vect) {
    this.model.x.next(this.model.x.value + mousePosition.x - this.lastMousePosition.x);
    this.model.y.next(this.model.y.value + mousePosition.y - this.lastMousePosition.y);
    this.lastMousePosition = mousePosition;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
