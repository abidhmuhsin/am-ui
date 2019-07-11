import {
  Component,
  OnInit,
  Input,
  AfterContentInit,
  QueryList,
  ContentChildren
} from '@angular/core';

@Component({
  selector: 'am-tabbedpane',
  styleUrls: ['./am-tabbedpane.component.css'],
  template: `
    <div [hidden]="!active" class="tabbedpane-content">
      <ng-content></ng-content>
    </div>
  `
})
export class AmTabbedpaneComponent implements OnInit {
  @Input() title: string;
  @Input() active = false;

  constructor() {}

  ngOnInit() {}
}

@Component({
  selector: 'am-tabbedpanes',
  styleUrls: ['./am-tabbedpane.component.css'],
  template: `
    <div class="tabbedpanes-wrapper">
      <div class="tabheading-wrapper">
        <span
          tabindex="0"
          class="tabheading"
          *ngFor="let tab of tabs"
          (click)="selectTab(tab)"
          (keydown.enter)="selectTab(tab)"
          [class.active]="tab.active"
        >
          {{ tab.title }}
        </span>
      </div>
      <ng-content></ng-content>
    </div>
  `
})
export class AmTabbedpanesComponent implements AfterContentInit {
  @ContentChildren(AmTabbedpaneComponent) tabs: QueryList<
    AmTabbedpaneComponent
  >;

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter(tab => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: AmTabbedpaneComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => (tab.active = false));

    // activate the tab the user has clicked on.
    tab.active = true;
  }
}
