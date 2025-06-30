import { Component } from '@angular/core';
import { FocusTimer } from '../focus-timer/focus-timer';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-timer-page',
  standalone: true,
  imports: [FocusTimer, MatIconModule],
  templateUrl: './timer-page.html',
  styleUrl: './timer-page.scss'
})
export class TimerPage {

}
