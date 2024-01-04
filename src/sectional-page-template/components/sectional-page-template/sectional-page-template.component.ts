import { Component, Input, OnInit } from '@angular/core';
import { GenericRepoService } from 'common/services';
import { StateService } from '@uirouter/core';
import { CmsUtilService } from 'cms/services';
import { UrlPaths } from 'constants/routes.constants';

@Component({
  selector: 'app-sectional-page-template',
  templateUrl: './sectional-page-template.component.html',
  styleUrls: ['./sectional-page-template.component.less']
})
export class SectionalPageTemplateComponent implements OnInit {
  @Input() sectionalPageTemplateCms: any;
  public title: string;
  public subtitle: string;
  public newsDisplayDate: string;
  public category: string;
  public longDescription: string;
  public cmsPathDictionary: any;
  public shortDescription: string;
  public cmsChildSectionArray: any;
  public isHelpPage: boolean;

  constructor(
    private state: StateService,
    private genericRepoSerivice: GenericRepoService,
    private cmsUtilService: CmsUtilService,
    private urlPaths: UrlPaths
  ) { }

  async ngOnInit() {
    this.getCmsPageData();
    this.setHelpPageFlag();
  }

  private async getCmsPageData() {
    const cmsId = this.state.params.CmsId;
    const request = { ItemId: cmsId };

    const response = await this.genericRepoSerivice.dataFactory.getCmsPageById(request);

    const parsedResponse = JSON.parse(response.cmsResponse);
    const {Title, ShortDescription, LongDescription, Children} = parsedResponse;

    this.title = Title;
    this.shortDescription = ShortDescription;
    this.longDescription = LongDescription;
    this.cmsChildSectionArray = Children.map((child) => ({
      ...child,
      Image: this.cmsUtilService.generateFileSrc(child.Image),
      ItemName: child.ItemName.toLowerCase()
    }));

  }

  private setHelpPageFlag() {
    const currentPath = this.state.params.CmsId;
    const needHelpPaths = [this.urlPaths.violationInvoiceInformation, this.urlPaths.needHelpCms, this.urlPaths.whatIsEzPlateCms, this.urlPaths.eftHelp];
    for (const path of needHelpPaths) {
      if (decodeURIComponent(path).toLowerCase().endsWith(currentPath.toLowerCase())) {
        this.isHelpPage = true;
        return;
      }
    }
    this.isHelpPage = false;
  };

  closeNeedHelp() {
    window.close();
  }


}
