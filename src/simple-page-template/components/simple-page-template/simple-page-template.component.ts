import { Component, Input, OnInit } from '@angular/core';
import { GenericRepoService } from 'common/services';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'app-simple-page-template',
  templateUrl: './simple-page-template.component.html',
  styleUrls: ['./simple-page-template.component.less']
})
export class SimplePageTemplateComponent implements OnInit {
  @Input() simplePageTemplateCms: any;
  public title: string;
  public subtitle: string;
  public newsDisplayDate: string;
  public category: string;
  public longDescription: string;
  public cmsPathDictionary: any;

  constructor(
    private state: StateService,
    private genericRepoSerivice: GenericRepoService
  ) { }

  async ngOnInit() {
    const cmsId = this.state.params.CmsId;

    const request = { ItemId: cmsId };

    ////send request for cms data
    const response = await this.genericRepoSerivice.dataFactory.getCmsPageById(request);

    const parsedResponse = JSON.parse(response.cmsResponse);

    this.title = parsedResponse.Title;
    this.longDescription = parsedResponse.LongDescription;
  }

}
