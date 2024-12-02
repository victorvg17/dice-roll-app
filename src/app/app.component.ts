import { Component } from '@angular/core';
import { DiceRollComponent } from './dice-roll/dice-roll.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DiceRollComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dice-roll-app';
}
