/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, QueryList, ContentChildren } from '@angular/core';
export class AmTabbedpaneComponent {
    constructor() {
        this.active = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
AmTabbedpaneComponent.decorators = [
    { type: Component, args: [{
                selector: 'am-tabbedpane',
                template: `
    <div [hidden]="!active" class="tabbedpane-content">
      <ng-content></ng-content>
    </div>
  `,
                styles: [":host{width:100%;text-align:left}.tabbedpane-content{padding:0;width:100%;min-height:100px;background:#dbd1d1;border:1px solid;margin-top:-4px}.tabbedpanes-wrapper{border:1px solid green;width:100%}.tabheading-wrapper{border:1px solid red;width:100%}.tabheading{border:1px solid #00f;width:10%;height:35px;line-height:35px;padding:0 10px;text-align:center;display:inline-block;cursor:pointer;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;background-color:#f0f8ff}.tabheading:focus,.tabheading:hover{background-color:#aebecc}.tabheading a{color:#000;text-decoration:none}"]
            }] }
];
/** @nocollapse */
AmTabbedpaneComponent.ctorParameters = () => [];
AmTabbedpaneComponent.propDecorators = {
    title: [{ type: Input }],
    active: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AmTabbedpaneComponent.prototype.title;
    /** @type {?} */
    AmTabbedpaneComponent.prototype.active;
}
export class AmTabbedpanesComponent {
    // contentChildren are set
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // get all active tabs
        /** @type {?} */
        const activeTabs = this.tabs.filter((/**
         * @param {?} tab
         * @return {?}
         */
        tab => tab.active));
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    selectTab(tab) {
        // deactivate all tabs
        this.tabs.toArray().forEach((/**
         * @param {?} tab
         * @return {?}
         */
        tab => (tab.active = false)));
        // activate the tab the user has clicked on.
        tab.active = true;
    }
}
AmTabbedpanesComponent.decorators = [
    { type: Component, args: [{
                selector: 'am-tabbedpanes',
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
  `,
                styles: [":host{width:100%;text-align:left}.tabbedpane-content{padding:0;width:100%;min-height:100px;background:#dbd1d1;border:1px solid;margin-top:-4px}.tabbedpanes-wrapper{border:1px solid green;width:100%}.tabheading-wrapper{border:1px solid red;width:100%}.tabheading{border:1px solid #00f;width:10%;height:35px;line-height:35px;padding:0 10px;text-align:center;display:inline-block;cursor:pointer;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;background-color:#f0f8ff}.tabheading:focus,.tabheading:hover{background-color:#aebecc}.tabheading a{color:#000;text-decoration:none}"]
            }] }
];
AmTabbedpanesComponent.propDecorators = {
    tabs: [{ type: ContentChildren, args: [AmTabbedpaneComponent,] }]
};
if (false) {
    /** @type {?} */
    AmTabbedpanesComponent.prototype.tabs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW0tdGFiYmVkcGFuZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbS11aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FtLXRhYmJlZHBhbmUvYW0tdGFiYmVkcGFuZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBQ2hCLE1BQU0sZUFBZSxDQUFDO0FBV3ZCLE1BQU0sT0FBTyxxQkFBcUI7SUFJaEM7UUFGUyxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBRVQsQ0FBQzs7OztJQUVoQixRQUFRLEtBQUksQ0FBQzs7O1lBZmQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUV6QixRQUFRLEVBQUU7Ozs7R0FJVDs7YUFDRjs7Ozs7b0JBRUUsS0FBSztxQkFDTCxLQUFLOzs7O0lBRE4sc0NBQXVCOztJQUN2Qix1Q0FBd0I7O0FBNEIxQixNQUFNLE9BQU8sc0JBQXNCOzs7OztJQU1qQyxrQkFBa0I7OztjQUVWLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUM7UUFFdEQsb0RBQW9EO1FBQ3BELElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBMEI7UUFDbEMsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxFQUFDLENBQUM7UUFFekQsNENBQTRDO1FBQzVDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7OztZQTNDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFFMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JUOzthQUNGOzs7bUJBRUUsZUFBZSxTQUFDLHFCQUFxQjs7OztJQUF0QyxzQ0FFRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgUXVlcnlMaXN0LFxuICBDb250ZW50Q2hpbGRyZW5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FtLXRhYmJlZHBhbmUnLFxuICBzdHlsZVVybHM6IFsnLi9hbS10YWJiZWRwYW5lLmNvbXBvbmVudC5jc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtoaWRkZW5dPVwiIWFjdGl2ZVwiIGNsYXNzPVwidGFiYmVkcGFuZS1jb250ZW50XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQW1UYWJiZWRwYW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgYWN0aXZlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW0tdGFiYmVkcGFuZXMnLFxuICBzdHlsZVVybHM6IFsnLi9hbS10YWJiZWRwYW5lLmNvbXBvbmVudC5jc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFiYmVkcGFuZXMtd3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRhYmhlYWRpbmctd3JhcHBlclwiPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgY2xhc3M9XCJ0YWJoZWFkaW5nXCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnNcIlxuICAgICAgICAgIChjbGljayk9XCJzZWxlY3RUYWIodGFiKVwiXG4gICAgICAgICAgKGtleWRvd24uZW50ZXIpPVwic2VsZWN0VGFiKHRhYilcIlxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwidGFiLmFjdGl2ZVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyB0YWIudGl0bGUgfX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQW1UYWJiZWRwYW5lc0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkcmVuKEFtVGFiYmVkcGFuZUNvbXBvbmVudCkgdGFiczogUXVlcnlMaXN0PFxuICAgIEFtVGFiYmVkcGFuZUNvbXBvbmVudFxuICA+O1xuXG4gIC8vIGNvbnRlbnRDaGlsZHJlbiBhcmUgc2V0XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAvLyBnZXQgYWxsIGFjdGl2ZSB0YWJzXG4gICAgY29uc3QgYWN0aXZlVGFicyA9IHRoaXMudGFicy5maWx0ZXIodGFiID0+IHRhYi5hY3RpdmUpO1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gYWN0aXZlIHRhYiBzZXQsIGFjdGl2YXRlIHRoZSBmaXJzdFxuICAgIGlmIChhY3RpdmVUYWJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zZWxlY3RUYWIodGhpcy50YWJzLmZpcnN0KTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RUYWIodGFiOiBBbVRhYmJlZHBhbmVDb21wb25lbnQpIHtcbiAgICAvLyBkZWFjdGl2YXRlIGFsbCB0YWJzXG4gICAgdGhpcy50YWJzLnRvQXJyYXkoKS5mb3JFYWNoKHRhYiA9PiAodGFiLmFjdGl2ZSA9IGZhbHNlKSk7XG5cbiAgICAvLyBhY3RpdmF0ZSB0aGUgdGFiIHRoZSB1c2VyIGhhcyBjbGlja2VkIG9uLlxuICAgIHRhYi5hY3RpdmUgPSB0cnVlO1xuICB9XG59XG4iXX0=