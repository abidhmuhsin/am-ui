import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AmUiService = /** @class */ (function () {
    function AmUiService() {
    }
    AmUiService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AmUiService.ctorParameters = function () { return []; };
    /** @nocollapse */ AmUiService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AmUiService_Factory() { return new AmUiService(); }, token: AmUiService, providedIn: "root" });
    return AmUiService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AmUiComponent = /** @class */ (function () {
    function AmUiComponent() {
    }
    /**
     * @return {?}
     */
    AmUiComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    AmUiComponent.decorators = [
        { type: Component, args: [{
                    selector: 'am-am-ui',
                    template: "\n    <p>\n      am-ui library works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    AmUiComponent.ctorParameters = function () { return []; };
    return AmUiComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AmUiModule = /** @class */ (function () {
    function AmUiModule() {
    }
    AmUiModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AmUiComponent],
                    imports: [],
                    exports: [AmUiComponent]
                },] }
    ];
    return AmUiModule;
}());

export { AmUiComponent, AmUiModule, AmUiService };
//# sourceMappingURL=am-ui.js.map
