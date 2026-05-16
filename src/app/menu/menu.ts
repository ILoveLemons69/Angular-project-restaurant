import { Component } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-menu',
  imports: [Card],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {}
