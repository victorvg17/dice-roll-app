import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { DiceService } from './dice.service';

@Component({
  selector: 'app-dice-roll',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.css'],
})
export class DiceRollComponent implements OnInit {
  currentFace!: IconDefinition;
  isRolling: boolean = false;
  result: string = '';

  constructor(private diceService: DiceService) {}

  ngOnInit(): void {
    this.currentFace = this.diceService.diceFaces[0];
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async rollDice() {
    if (this.isRolling) return;
    this.isRolling = true;
    this.result = '';

    await this.delay(100);
    await this.delay(1500);

    this.currentFace = this.diceService.rollDice();
    this.result = `You rolled a ${
      this.diceService.diceFaces.indexOf(this.currentFace) + 1
    }!`;
    this.isRolling = false;
  }
}
