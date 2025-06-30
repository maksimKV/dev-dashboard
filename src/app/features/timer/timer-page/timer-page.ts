import { Component } from '@angular/core';
import { FocusTimer } from '../focus-timer/focus-timer';

@Component({
  selector: 'app-timer-page',
  standalone: true,
  imports: [FocusTimer],
  templateUrl: './timer-page.html',
  styleUrl: './timer-page.scss'
})
export class TimerPage {

}
