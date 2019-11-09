# Tabbed Pane

## test
```typescript
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
```
```html
<div class="tabbedpanes-wrapper">
  <div class="tabheading-wrapper">
    <span
      class="tabheading"
      *ngFor="let tab of tabComponents"
      (click)="selectTab(tab)"
      [class.active]="tab.active"
    >
      <a href="#">{{ tab.title }}</a>
    </span>
  </div>
  <ng-content></ng-content>
</div>
```

Now lets remove `<a href="#">` tag for heading and use a `div` with keyboard navigation support.  
Added `tabindex="0"` and `(keydown.enter)="selectTab(tab)"`

```html
 <div class="tabbedpanes-wrapper">
      <div class="tabheading-wrapper">
        <span
          tabindex="0"
          class="tabheading"
          *ngFor="let tab of tabComponents"
          (click)="selectTab(tab)"
          (keydown.enter)="selectTab(tab)"
          [class.active]="tab.active"
        >
          {{ tab.title }}
        </span>
      </div>
      <ng-content></ng-content>
    </div>
```

```typescript
export class AmTabbedpanesComponent implements AfterContentInit {
  @ContentChildren(AmTabbedpaneComponent) tabComponents:QueryList<AmTabbedpaneComponent>;

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

    // activate the tab the user has clicked on.
    tabComponent.active = true;
  }
}
```
