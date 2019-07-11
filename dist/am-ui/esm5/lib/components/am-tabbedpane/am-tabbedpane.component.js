/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, QueryList, ContentChildren } from '@angular/core';
var AmTabbedpaneComponent = /** @class */ (function () {
    function AmTabbedpaneComponent() {
        this.active = false;
    }
    /**
     * @return {?}
     */
    AmTabbedpaneComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    AmTabbedpaneComponent.decorators = [
        { type: Component, args: [{
                    selector: 'am-tabbedpane',
                    template: "\n    <div [hidden]=\"!active\" class=\"tabbedpane-content\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    styles: [":host{width:100%;text-align:left}.tabbedpane-content{padding:0;width:100%;min-height:100px;background:#dbd1d1;border:1px solid;margin-top:-4px}.tabbedpanes-wrapper{border:1px solid green;width:100%}.tabheading-wrapper{border:1px solid red;width:100%}.tabheading{border:1px solid #00f;width:10%;height:35px;line-height:35px;padding:0 10px;text-align:center;display:inline-block;cursor:pointer;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;background-color:#f0f8ff}.tabheading:focus,.tabheading:hover{background-color:#aebecc}.tabheading a{color:#000;text-decoration:none}"]
                }] }
    ];
    /** @nocollapse */
    AmTabbedpaneComponent.ctorParameters = function () { return []; };
    AmTabbedpaneComponent.propDecorators = {
        title: [{ type: Input }],
        active: [{ type: Input }]
    };
    return AmTabbedpaneComponent;
}());
export { AmTabbedpaneComponent };
if (false) {
    /** @type {?} */
    AmTabbedpaneComponent.prototype.title;
    /** @type {?} */
    AmTabbedpaneComponent.prototype.active;
}
var AmTabbedpanesComponent = /** @class */ (function () {
    function AmTabbedpanesComponent() {
    }
    // contentChildren are set
    // contentChildren are set
    /**
     * @return {?}
     */
    AmTabbedpanesComponent.prototype.ngAfterContentInit = 
    // contentChildren are set
    /**
     * @return {?}
     */
    function () {
        // get all active tabs
        /** @type {?} */
        var activeTabs = this.tabs.filter((/**
         * @param {?} tab
         * @return {?}
         */
        function (tab) { return tab.active; }));
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    AmTabbedpanesComponent.prototype.selectTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        // deactivate all tabs
        this.tabs.toArray().forEach((/**
         * @param {?} tab
         * @return {?}
         */
        function (tab) { return (tab.active = false); }));
        // activate the tab the user has clicked on.
        tab.active = true;
    };
    AmTabbedpanesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'am-tabbedpanes',
                    template: "\n    <div class=\"tabbedpanes-wrapper\">\n      <div class=\"tabheading-wrapper\">\n        <span\n          tabindex=\"0\"\n          class=\"tabheading\"\n          *ngFor=\"let tab of tabs\"\n          (click)=\"selectTab(tab)\"\n          (keydown.enter)=\"selectTab(tab)\"\n          [class.active]=\"tab.active\"\n        >\n          {{ tab.title }}\n        </span>\n      </div>\n      <ng-content></ng-content>\n    </div>\n  ",
                    styles: [":host{width:100%;text-align:left}.tabbedpane-content{padding:0;width:100%;min-height:100px;background:#dbd1d1;border:1px solid;margin-top:-4px}.tabbedpanes-wrapper{border:1px solid green;width:100%}.tabheading-wrapper{border:1px solid red;width:100%}.tabheading{border:1px solid #00f;width:10%;height:35px;line-height:35px;padding:0 10px;text-align:center;display:inline-block;cursor:pointer;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;background-color:#f0f8ff}.tabheading:focus,.tabheading:hover{background-color:#aebecc}.tabheading a{color:#000;text-decoration:none}"]
                }] }
    ];
    AmTabbedpanesComponent.propDecorators = {
        tabs: [{ type: ContentChildren, args: [AmTabbedpaneComponent,] }]
    };
    return AmTabbedpanesComponent;
}());
export { AmTabbedpanesComponent };
if (false) {
    /** @type {?} */
    AmTabbedpanesComponent.prototype.tabs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW0tdGFiYmVkcGFuZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbS11aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FtLXRhYmJlZHBhbmUvYW0tdGFiYmVkcGFuZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBQ2hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBYUU7UUFGUyxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBRVQsQ0FBQzs7OztJQUVoQix3Q0FBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkFmZCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBRXpCLFFBQVEsRUFBRSxnSEFJVDs7aUJBQ0Y7Ozs7O3dCQUVFLEtBQUs7eUJBQ0wsS0FBSzs7SUFLUiw0QkFBQztDQUFBLEFBaEJELElBZ0JDO1NBUFkscUJBQXFCOzs7SUFDaEMsc0NBQXVCOztJQUN2Qix1Q0FBd0I7O0FBTzFCO0lBQUE7SUE0Q0EsQ0FBQztJQWxCQywwQkFBMEI7Ozs7O0lBQzFCLG1EQUFrQjs7Ozs7SUFBbEI7OztZQUVRLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxNQUFNLEVBQVYsQ0FBVSxFQUFDO1FBRXRELG9EQUFvRDtRQUNwRCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7O0lBRUQsMENBQVM7Ozs7SUFBVCxVQUFVLEdBQTBCO1FBQ2xDLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsRUFBQyxDQUFDO1FBRXpELDRDQUE0QztRQUM1QyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDOztnQkEzQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBRTFCLFFBQVEsRUFBRSx1YkFnQlQ7O2lCQUNGOzs7dUJBRUUsZUFBZSxTQUFDLHFCQUFxQjs7SUFzQnhDLDZCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0F2Qlksc0JBQXNCOzs7SUFDakMsc0NBRUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgQ29udGVudENoaWxkcmVuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhbS10YWJiZWRwYW5lJyxcbiAgc3R5bGVVcmxzOiBbJy4vYW0tdGFiYmVkcGFuZS5jb21wb25lbnQuY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbaGlkZGVuXT1cIiFhY3RpdmVcIiBjbGFzcz1cInRhYmJlZHBhbmUtY29udGVudFwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFtVGFiYmVkcGFuZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FtLXRhYmJlZHBhbmVzJyxcbiAgc3R5bGVVcmxzOiBbJy4vYW0tdGFiYmVkcGFuZS5jb21wb25lbnQuY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInRhYmJlZHBhbmVzLXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJoZWFkaW5nLXdyYXBwZXJcIj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgIGNsYXNzPVwidGFiaGVhZGluZ1wiXG4gICAgICAgICAgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzXCJcbiAgICAgICAgICAoY2xpY2spPVwic2VsZWN0VGFiKHRhYilcIlxuICAgICAgICAgIChrZXlkb3duLmVudGVyKT1cInNlbGVjdFRhYih0YWIpXCJcbiAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInRhYi5hY3RpdmVcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgdGFiLnRpdGxlIH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFtVGFiYmVkcGFuZXNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihBbVRhYmJlZHBhbmVDb21wb25lbnQpIHRhYnM6IFF1ZXJ5TGlzdDxcbiAgICBBbVRhYmJlZHBhbmVDb21wb25lbnRcbiAgPjtcblxuICAvLyBjb250ZW50Q2hpbGRyZW4gYXJlIHNldFxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gZ2V0IGFsbCBhY3RpdmUgdGFic1xuICAgIGNvbnN0IGFjdGl2ZVRhYnMgPSB0aGlzLnRhYnMuZmlsdGVyKHRhYiA9PiB0YWIuYWN0aXZlKTtcblxuICAgIC8vIGlmIHRoZXJlIGlzIG5vIGFjdGl2ZSB0YWIgc2V0LCBhY3RpdmF0ZSB0aGUgZmlyc3RcbiAgICBpZiAoYWN0aXZlVGFicy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2VsZWN0VGFiKHRoaXMudGFicy5maXJzdCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0VGFiKHRhYjogQW1UYWJiZWRwYW5lQ29tcG9uZW50KSB7XG4gICAgLy8gZGVhY3RpdmF0ZSBhbGwgdGFic1xuICAgIHRoaXMudGFicy50b0FycmF5KCkuZm9yRWFjaCh0YWIgPT4gKHRhYi5hY3RpdmUgPSBmYWxzZSkpO1xuXG4gICAgLy8gYWN0aXZhdGUgdGhlIHRhYiB0aGUgdXNlciBoYXMgY2xpY2tlZCBvbi5cbiAgICB0YWIuYWN0aXZlID0gdHJ1ZTtcbiAgfVxufVxuIl19