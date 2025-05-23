import { Component, Input } from '@angular/core';
import { card_colours } from 'src/app/utils/constants';
import { countInterface } from 'src/app/utils/types';

@Component({
  selector: 'app-count-card',
  templateUrl: './count-card.component.html',
  styleUrls: ['./count-card.component.scss']
})
export class CountCardComponent {
  @Input() bgColour!: string
  @Input() counts!: countInterface[]

  colours = card_colours;
}
