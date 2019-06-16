(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('am-ui', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['am-ui'] = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AmUiService = /** @class */ (function () {
        function AmUiService() {
        }
        AmUiService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AmUiService.ctorParameters = function () { return []; };
        /** @nocollapse */ AmUiService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AmUiService_Factory() { return new AmUiService(); }, token: AmUiService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [AmUiComponent],
                        imports: [],
                        exports: [AmUiComponent]
                    },] }
        ];
        return AmUiModule;
    }());

    exports.AmUiComponent = AmUiComponent;
    exports.AmUiModule = AmUiModule;
    exports.AmUiService = AmUiService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=am-ui.umd.js.map
