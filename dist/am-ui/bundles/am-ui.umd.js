(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('am-ui', ['exports', '@angular/core', '@angular/platform-browser'], factory) :
    (global = global || self, factory(global['am-ui'] = {}, global.ng.core, global.ng.platformBrowser));
}(this, function (exports, core, platformBrowser) { 'use strict';

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
            { type: core.Component, args: [{
                        selector: 'am-tabbedpane',
                        template: "\n    <div [hidden]=\"!active\" class=\"tabbedpane-content\">\n      <ng-content></ng-content>\n    </div>\n  ",
                        styles: [":host{width:100%;text-align:left}.tabbedpane-content{padding:0;width:100%;min-height:100px;background:#dbd1d1;border:1px solid;margin-top:-4px}.tabbedpanes-wrapper{border:1px solid green;width:100%}.tabheading-wrapper{border:1px solid red;width:100%}.tabheading{border:1px solid #00f;width:10%;height:35px;line-height:35px;padding:0 10px;text-align:center;display:inline-block;cursor:pointer;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;background-color:#f0f8ff}.tabheading:focus,.tabheading:hover{background-color:#aebecc}.tabheading a{color:#000;text-decoration:none}"]
                    }] }
        ];
        /** @nocollapse */
        AmTabbedpaneComponent.ctorParameters = function () { return []; };
        AmTabbedpaneComponent.propDecorators = {
            title: [{ type: core.Input }],
            active: [{ type: core.Input }]
        };
        return AmTabbedpaneComponent;
    }());
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
            { type: core.Component, args: [{
                        selector: 'am-tabbedpanes',
                        template: "\n    <div class=\"tabbedpanes-wrapper\">\n      <div class=\"tabheading-wrapper\">\n        <span\n          tabindex=\"0\"\n          class=\"tabheading\"\n          *ngFor=\"let tab of tabs\"\n          (click)=\"selectTab(tab)\"\n          (keydown.enter)=\"selectTab(tab)\"\n          [class.active]=\"tab.active\"\n        >\n          {{ tab.title }}\n        </span>\n      </div>\n      <ng-content></ng-content>\n    </div>\n  ",
                        styles: [":host{width:100%;text-align:left}.tabbedpane-content{padding:0;width:100%;min-height:100px;background:#dbd1d1;border:1px solid;margin-top:-4px}.tabbedpanes-wrapper{border:1px solid green;width:100%}.tabheading-wrapper{border:1px solid red;width:100%}.tabheading{border:1px solid #00f;width:10%;height:35px;line-height:35px;padding:0 10px;text-align:center;display:inline-block;cursor:pointer;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;background-color:#f0f8ff}.tabheading:focus,.tabheading:hover{background-color:#aebecc}.tabheading a{color:#000;text-decoration:none}"]
                    }] }
        ];
        AmTabbedpanesComponent.propDecorators = {
            tabs: [{ type: core.ContentChildren, args: [AmTabbedpaneComponent,] }]
        };
        return AmTabbedpanesComponent;
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
                        declarations: [AmUiComponent, AmTabbedpaneComponent, AmTabbedpanesComponent],
                        imports: [platformBrowser.BrowserModule
                        ],
                        exports: [AmUiComponent, AmTabbedpaneComponent, AmTabbedpanesComponent]
                    },] }
        ];
        return AmUiModule;
    }());

    exports.AmUiComponent = AmUiComponent;
    exports.AmUiModule = AmUiModule;
    exports.AmUiService = AmUiService;
    exports.ɵa = AmTabbedpaneComponent;
    exports.ɵb = AmTabbedpanesComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=am-ui.umd.js.map
