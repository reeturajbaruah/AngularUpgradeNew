import { Component, Input, OnInit } from '@angular/core';
import { SiteCoreItem } from 'cms/cms.module';
import { CmsImage } from 'common/interfaces';
import { IBDConfig, IBDHeader, IBDRow } from 'common/ui/containers/bottomdrawer-container/bottomdrawer-container.model';


@Component({
  selector: 'app-major-projects',
  templateUrl: './majorProjects.component.html',
  styleUrls: ['./majorProjects.component.less']
})
export class MajorProjectsComponent implements OnInit {

  bannerHtml: string;
  bannerSubText: string;
  bdConfig: IBDConfig;

  @Input() tabCms: SiteCoreItem;
  @Input() caretCmsImage: CmsImage;
  footerText: string;

  constructor() { }

  ngOnInit(): void {
    this.setUpTab();
  }

  private setUpTab(): void {
    const banner = this.tabCms?.Children.find(x => x.ItemName === 'Banner');
    const content = this.tabCms?.Children.find(x => x.ItemName === 'Drawer Content');
    const headers = content?.Children.find(x => x.ItemName === 'Projects Headers');
    const projects = content?.Children.find(x => x.ItemName === 'Projects');

    this.bannerHtml = banner?.LongDescription;
    this.bannerSubText = banner?.ShortDescription;
    this.footerText = this.tabCms?.ShortDescription;
    this.setUpRows(headers, projects);
  }

  private setUpRows(projHeaders: SiteCoreItem, projects: SiteCoreItem): void {
    const headers: IBDHeader[] = [];
    const data: IBDRow[] = [];

    projHeaders?.Children.sort((a, b) => a[`position`] - b[`position`]);

    projHeaders?.Children.forEach(x => {
      headers.push({
        label: x.Title,
        fxFlexValue: x[`fxFlexValue`],
        position: x[`position`],
        isPrimary: x[`isPrimary`] === 'true'
      });
    });

    const primaryIndex = headers.findIndex(x => x.isPrimary);

    projects?.Children.forEach(x => {
      data.push({
        columns: [
          { label: x.Title, isPrimary: false },
          { label: x[`RoadsImpacted`], isPrimary: false },
          { label: this.unCamelCaser(x[`Status`]), isPrimary: false }
        ],
        content: x.LongDescription,
        isSelected: false
      });
    });

    data.forEach(d => d.columns.forEach((l, i) => {
      l.isPrimary = i === primaryIndex;
    }));

    this.bdConfig = {
      headers,
      data
    };
  }

  private unCamelCaser(text: string): string {
    return text?.replace(/([A-Z])/g, ' $1').trim();
  }

}
