import { Component, OnInit } from '@angular/core';
import { isString } from 'lodash';
import { urlPaths as homeRoutes } from '../../../home/constants';
import { UrlService } from '@uirouter/angular';

@Component({
  selector: 'mobile-app-redirect',
  templateUrl: './mobileAppRedirect.component.html'
})
export class MobileAppRedirectComponent implements OnInit {

  constructor(private $window: Window, private urlService: UrlService) { }

  ngOnInit(): void {
    const urlParams = this.urlService.search();

    if (urlParams && urlParams.webUrl && (isString(urlParams.webUrl))) {
      this.$window.location.href = urlParams.webUrl;

      return;
    }

    this.urlService.url(homeRoutes.Frame);
  }

}
