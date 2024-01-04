import { AfterViewInit, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { stateNames as homeStates, urlPaths as homeRoutes } from 'home/constants';
import { urlPaths as menuRoutes } from 'menu/constants';
import { WindowRef } from 'common/module';
import { Transition, TransitionService } from '@uirouter/core';
import { wait } from '../../common/utilities';
import { Location } from '@angular/common';

@Component({
  selector: 'google-search',
  templateUrl: './googleSearch.component.html',
  styleUrls: ['./googleSearch.component.less', '../../styles/custom/legacy-shared.less']
})
export class GoogleSearchComponent implements OnInit, AfterViewInit, OnDestroy {

  private readonly componentConfig = {
    div: 'searchfield',
    tag: 'searchbox',
    gname: 'generalSearch',
    attributes: {
      queryParameterName: 'searchQuery',
      autoSearchOnLoad: true,
      enableAutoComplete: true,
      autoCompleteMatchType: 'any',
      autoCompleteMaxCompletions: 10,
      filter: '1'
    }
  };
  private readonly optComponentConfig = {
    div: 'searchResults',
    tag: 'searchresults',
    gname: 'generalSearch',
    attributes: {
      enableOrderBy: true,
      noResultsString: 'Please try searching again with different key words.'
    }
  };

  private currentUrl: any;
  private currentHash: any;

  constructor(
    @Inject('$rootScope') private rootScope: any,
    private location: Location,
    @Inject(WindowRef) private $window: Window,
    private transitionService: TransitionService
  ) {
      this.transitionService.onBefore({ to: homeStates.Frame }, (trans: Transition) => {
          wait(20);
          if (this.currentUrl.indexOf(menuRoutes.Search) > -1) {
              trans.router.stateService.target(homeStates.Frame);
          } else {
              this.location.replaceState(menuRoutes.Search + this.currentHash);
              this.currentUrl = this.$window.location.href;
          }
      });
  }

  ngOnInit(): void {
      this.rootScope.$broadcast('showGlobalSearchBar', { shouldShow: false });
  }

  ngAfterViewInit(): void {
      this.$window['google'].search.cse.element.render(this.componentConfig, this.optComponentConfig);
      this.currentUrl = location.href;
      this.currentHash = location.hash;
      const button = document.querySelector('.gsc-search-button');
      if (button) {
          button.addEventListener('click', () => {
          this.currentUrl = location.href;
          this.currentHash = location.hash;
      });
      }
  }

  ngOnDestroy(): void {
    this.rootScope.$broadcast('showGlobalSearchBar', { shouldShow: true });
  }

}
