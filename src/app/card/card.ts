import { Component, input } from '@angular/core';
import { IProduct } from '../services/restaurnt-service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  public cardData = input.required<IProduct>();
}
