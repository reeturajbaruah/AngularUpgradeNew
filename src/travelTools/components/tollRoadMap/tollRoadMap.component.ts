import { Component, Input, OnInit } from '@angular/core';
import { SiteCoreItem } from 'cms/cms.module';

@Component({
  selector: 'toll-road-map',
  templateUrl: './tollRoadMap.component.html',
  styleUrls: ['./tollRoadMap.component.less', '../../../styles/custom/legacy-shared.less']
})
export class TollRoadMapComponent implements OnInit {

  topContent: SiteCoreItem;
  bottomContent: SiteCoreItem;

  @Input() pageCms: SiteCoreItem;

  constructor() { }

  ngOnInit(): void {
    this.topContent = this.pageCms?.Children[0];
    this.bottomContent = this.pageCms?.Children[1];
  }

}
