import { Component, Input, OnInit } from '@angular/core';
import { SiteCoreItem } from 'cms/cms.module';
import { CmsUtilService } from 'cms/services';

@Component({
  selector: 'roadside-assistance',
  templateUrl: './roadsideAssistance.component.html',
  styleUrls: ['./roadsideAssistance.component.less', '../../../styles/custom/legacy-shared.less']
})
export class RoadsideAssistanceComponent implements OnInit {

  topTitle: string;
  header: SiteCoreItem;
  contact: SiteCoreItem;
  about: SiteCoreItem;
  testimonialsHeader: SiteCoreItem;
  testimonialsList: SiteCoreItem[];
  overviewImageSrc: string;
  overviewImageAltText: string;

  @Input() pageCms: SiteCoreItem;

  constructor(private cmsUtilService: CmsUtilService) { }

  ngOnInit(): void {
    this.topTitle = this.pageCms?.Title;
    this.header = this.pageCms?.Children[0];
    if (this.header?.ItemName) { this.header.ItemName = this.header.ItemName.toLowerCase(); }
    this.contact = this.pageCms?.Children[1];
    if (this.contact?.ItemName) { this.contact.ItemName = this.contact.ItemName.toLowerCase(); }
    this.about = this.pageCms?.Children[2];
    if (this.about?.ItemName) { this.about.ItemName = this.about.ItemName.toLowerCase(); }
    this.testimonialsHeader = this.pageCms?.Children[3];
    if (this.testimonialsHeader?.ItemName) { this.testimonialsHeader.ItemName = this.testimonialsHeader.ItemName.toLowerCase(); }
    this.testimonialsList = this.pageCms?.Children[3].Children[0].Children;

    this.overviewImageSrc = this.cmsUtilService.generateFileSrc(this.header?.Image);
    this.overviewImageAltText = this.cmsUtilService.parseAltText(this.header?.Image);
  }

}
