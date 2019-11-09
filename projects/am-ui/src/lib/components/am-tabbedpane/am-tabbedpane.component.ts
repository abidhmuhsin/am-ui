import {
  Component,
  OnInit,
  Input,
  AfterContentInit,
  QueryList,
  ContentChildren,
  Output,
  EventEmitter
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

  constructor() { }

  ngOnInit() { }
}

@Component({
  selector: 'am-tabbedpanes',
  styleUrls: ['./am-tabbedpane.component.css'],
  template: `
    <div class="tabbedpanes-wrapper">
      <div class="tabheading-wrapper">
        <div
          tabindex="0"
          class="tabheading"
          *ngFor="let tab of tabComponents"
          (click)="selectTab(tab)"
          (keydown.enter)="selectTab(tab)"
          [class.active]="tab.active"
        >
          {{ tab.title }}
        </div>
      </div>
      <ng-content></ng-content>
    </div>
  `
})
export class AmTabbedpanesComponent implements AfterContentInit {
  @ContentChildren(AmTabbedpaneComponent) tabComponents: QueryList<AmTabbedpaneComponent>;
  @Output() tabChanged: EventEmitter<string> = new EventEmitter(); // to notify tab change

  // ContentChildren will be set once AfterContentInit is called
  ngAfterContentInit() {
    // Retrieve active tabs if any
    const activeTabs = this.tabComponents.filter(tab => tab.active);

    // If no active tab set, activate the first tab.
    if (activeTabs.length === 0) {
      this.selectTab(this.tabComponents.first);
    }
  }

  selectTab(tabComponent: AmTabbedpaneComponent) {
    // deactivate all tabs
    this.tabComponents.toArray().forEach(tab => (tab.active = false));

    // emit tabChangedEvent
    this.tabChanged.emit(tabComponent.title);
    // activate the tab the user has clicked on.
    tabComponent.active = true;
  }
}
