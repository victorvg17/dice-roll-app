import { Injectable } from '@angular/core';
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
  faL,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Injectable({ providedIn: 'root' })
export class DiceService {
  diceFaces: IconDefinition[] = [
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
  ];

  rollDice(): IconDefinition {
    const randomIndex = Math.floor(Math.random() * this.diceFaces.length);
    return this.diceFaces[randomIndex];
  }
}
