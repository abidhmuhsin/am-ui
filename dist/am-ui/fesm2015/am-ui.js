import { Injectable, ɵɵdefineInjectable, Component, Input, ContentChildren, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AmUiService {
    constructor() { }
}
AmUiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AmUiService.ctorParameters = () => [];
/** @nocollapse */ AmUiService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AmUiService_Factory() { return new AmUiService(); }, token: AmUiService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AmUiComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
AmUiComponent.decorators = [
    { type: Component, args: [{
                selector: 'am-am-ui',
                template: `
    <p>
      am-ui library works!
    </p>
  `
            }] }
];
/** @nocollapse */
AmUiComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AmTabbedpaneComponent {
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
class AmTabbedpanesComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AmUiModule {
}
AmUiModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AmUiComponent, AmTabbedpaneComponent, AmTabbedpanesComponent],
                imports: [BrowserModule
                ],
                exports: [AmUiComponent, AmTabbedpaneComponent, AmTabbedpanesComponent]
            },] }
];

export { AmUiComponent, AmUiModule, AmUiService, AmTabbedpaneComponent as ɵa, AmTabbedpanesComponent as ɵb };
//# sourceMappingURL=am-ui.js.map
