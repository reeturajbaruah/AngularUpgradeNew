import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WindowRef } from 'common/module';
import { ReadMoreOrLessService } from 'common/services/readMoreOrLess/readMoreOrLess.service';

@Component({
  selector: 'read-more-or-less',
  templateUrl: './readMoreOrLess.component.html',
  styleUrls: ['./readMoreOrLess.component.less']
})
export class ReadMoreOrLessComponent implements OnChanges {

  vm: any = {};

  @Input() longContent = '';
  @Input() shortContent = '';
  @Input() defaultToMore = true;
  @Input() titleName = '';
  @Input() itemId = '';
  @Input() itemPath = '';

  constructor(
    private readMoreOrLessService: ReadMoreOrLessService,
    @Inject(WindowRef) private $window: Window
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.vm = {};

    if (changes.titleName && changes.titleName.currentValue?.length > 0) {
      this.vm = this.readMoreOrLessService.getReadMoreOrLessInitialState(this.shortContent, this.longContent, this.defaultToMore, this.titleName, this.itemId, this.itemPath);
    }
  }

  expanderClicked() {
    const setToLongContent = this.vm.expanderText === this.readMoreOrLessService.readMore;
    this.vm.expanderText = setToLongContent ? this.readMoreOrLessService.readLess : this.readMoreOrLessService.readMore;
    this.vm.content = (setToLongContent ? this.longContent : this.shortContent) || this.shortContent || this.longContent || '';
  }

  goToBreakoutPage(link: string) {
    this.$window.open(link, '_blank');
  }

}
