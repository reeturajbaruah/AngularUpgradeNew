import { Component, Input, OnInit } from '@angular/core';
import { SiteCoreItem } from 'cms/cms.module';
import { CmsImage } from 'common/interfaces';
import { CEFacadeApiService } from 'constructionAndEngineering/services/constructionAndEngineering-facade-api/constructionAndEngineering-facade-api.service';


@Component({
  selector: 'app-construction-and-engineering',
  templateUrl: './constructionAndEngineering.component.html',
  styleUrls: ['./constructionAndEngineering.component.less']
})
export class ConstructionAndEngineeringComponent implements OnInit {

  currentTab: string;
  majorProjectsCms: SiteCoreItem;
  caratCmsImage: CmsImage;

  @Input() pageCms: SiteCoreItem;

  constructor(private ceFacadeApiService: CEFacadeApiService) { }

  ngOnInit(): void {
    this.majorProjectsCms = this.pageCms?.Children.find(x => x.ItemName === 'Tabs')?.Children.find(y => y.ItemName === 'Major Projects');
    const caratCms = this.pageCms?.Children.find(x => x.ItemName === 'Caret Image');
    this.caratCmsImage = this.ceFacadeApiService.parseAllImageAttributes(caratCms?.Image) || {} as CmsImage;
  }

}
