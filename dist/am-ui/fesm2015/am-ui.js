import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

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
class AmUiModule {
}
AmUiModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AmUiComponent],
                imports: [],
                exports: [AmUiComponent]
            },] }
];

export { AmUiComponent, AmUiModule, AmUiService };
//# sourceMappingURL=am-ui.js.map
