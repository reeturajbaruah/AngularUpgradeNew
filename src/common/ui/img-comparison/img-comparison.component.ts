import { Component, Input } from '@angular/core';
import 'img-comparison-slider';

@Component({
  selector: 'app-img-comparison',
  templateUrl: './img-comparison.component.html',
  styleUrls: ['./img-comparison.component.less']
})
export class ImgComparisonComponent {
  
  @Input() LeftImage: string;
  @Input() RightImage: string;
  @Input() SliderTab: string;
  
}
