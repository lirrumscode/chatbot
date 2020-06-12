var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var StatusBarOriginal = /** @class */ (function (_super) {
    __extends(StatusBarOriginal, _super);
    function StatusBarOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatusBarOriginal.prototype.overlaysWebView = function (doesOverlay) { return cordova(this, "overlaysWebView", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.styleDefault = function () { return cordova(this, "styleDefault", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.styleLightContent = function () { return cordova(this, "styleLightContent", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.styleBlackTranslucent = function () { return cordova(this, "styleBlackTranslucent", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.styleBlackOpaque = function () { return cordova(this, "styleBlackOpaque", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.backgroundColorByName = function (colorName) { return cordova(this, "backgroundColorByName", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.backgroundColorByHexString = function (hexString) { return cordova(this, "backgroundColorByHexString", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.show = function () { return cordova(this, "show", { "sync": true }, arguments); };
    Object.defineProperty(StatusBarOriginal.prototype, "isVisible", {
        get: function () { return cordovaPropertyGet(this, "isVisible"); },
        set: function (value) { cordovaPropertySet(this, "isVisible", value); },
        enumerable: true,
        configurable: true
    });
    StatusBarOriginal.pluginName = "StatusBar";
    StatusBarOriginal.plugin = "cordova-plugin-statusbar";
    StatusBarOriginal.pluginRef = "StatusBar";
    StatusBarOriginal.repo = "https://github.com/apache/cordova-plugin-statusbar";
    StatusBarOriginal.platforms = ["Android", "iOS", "Windows"];
    return StatusBarOriginal;
}(IonicNativePlugin));
var StatusBar = new StatusBarOriginal();
export { StatusBar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N0YXR1cy1iYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sc0VBQXVELE1BQU0sb0JBQW9CLENBQUM7O0lBaUMxRCw2QkFBaUI7Ozs7SUFnQjlDLG1DQUFlLGFBQUMsV0FBb0I7SUFRcEMsZ0NBQVk7SUFRWixxQ0FBaUI7SUFRakIseUNBQXFCO0lBUXJCLG9DQUFnQjtJQWFoQix5Q0FBcUIsYUFBQyxTQUFpQjtJQVl2Qyw4Q0FBMEIsYUFBQyxTQUFpQjtJQVE1Qyx3QkFBSTtJQVFKLHdCQUFJOzBCQXBGSixnQ0FBUzs7Ozs7Ozs7Ozs7b0JBdkNYO0VBa0MrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgU3RhdHVzIEJhclxuICogQGRlc2NyaXB0aW9uXG4gKiBNYW5hZ2UgdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIG5hdGl2ZSBzdGF0dXMgYmFyLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tc3RhdHVzYmFyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1N0YXR1c0JhciBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1zdGF0dXNiYXIpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zdGF0dXMtYmFyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0dXNCYXI6IFN0YXR1c0JhcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gbGV0IHN0YXR1cyBiYXIgb3ZlcmxheSB3ZWJ2aWV3XG4gKiB0aGlzLnN0YXR1c0Jhci5vdmVybGF5c1dlYlZpZXcodHJ1ZSk7XG4gKlxuICogLy8gc2V0IHN0YXR1cyBiYXIgdG8gd2hpdGVcbiAqIHRoaXMuc3RhdHVzQmFyLmJhY2tncm91bmRDb2xvckJ5SGV4U3RyaW5nKCcjZmZmZmZmJyk7XG4gKiBgYGBcbiAqXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU3RhdHVzQmFyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc3RhdHVzYmFyJyxcbiAgcGx1Z2luUmVmOiAnU3RhdHVzQmFyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tc3RhdHVzYmFyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RhdHVzQmFyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogV2hldGhlciB0aGUgU3RhdHVzQmFyIGlzIGN1cnJlbnRseSB2aXNpYmxlIG9yIG5vdC5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBpc1Zpc2libGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB3aGV0aGVyIHRoZSBzdGF0dXMgYmFyIG92ZXJsYXlzIHRoZSBtYWluIGFwcCB2aWV3LiBUaGUgZGVmYXVsdFxuICAgKiBpcyB0cnVlLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRvZXNPdmVybGF5ICBXaGV0aGVyIHRoZSBzdGF0dXMgYmFyIG92ZXJsYXlzIHRoZSBtYWluIGFwcCB2aWV3LlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIG92ZXJsYXlzV2ViVmlldyhkb2VzT3ZlcmxheTogYm9vbGVhbikge31cblxuICAvKipcbiAgICogVXNlIHRoZSBkZWZhdWx0IHN0YXR1c2JhciAoZGFyayB0ZXh0LCBmb3IgbGlnaHQgYmFja2dyb3VuZHMpLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHN0eWxlRGVmYXVsdCgpIHt9XG5cbiAgLyoqXG4gICAqIFVzZSB0aGUgbGlnaHRDb250ZW50IHN0YXR1c2JhciAobGlnaHQgdGV4dCwgZm9yIGRhcmsgYmFja2dyb3VuZHMpLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHN0eWxlTGlnaHRDb250ZW50KCkge31cblxuICAvKipcbiAgICogVXNlIHRoZSBibGFja1RyYW5zbHVjZW50IHN0YXR1c2JhciAobGlnaHQgdGV4dCwgZm9yIGRhcmsgYmFja2dyb3VuZHMpLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHN0eWxlQmxhY2tUcmFuc2x1Y2VudCgpIHt9XG5cbiAgLyoqXG4gICAqIFVzZSB0aGUgYmxhY2tPcGFxdWUgc3RhdHVzYmFyIChsaWdodCB0ZXh0LCBmb3IgZGFyayBiYWNrZ3JvdW5kcykuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc3R5bGVCbGFja09wYXF1ZSgpIHt9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3RhdHVzIGJhciB0byBhIHNwZWNpZmljIG5hbWVkIGNvbG9yLiBWYWxpZCBvcHRpb25zOlxuICAgKiBibGFjaywgZGFya0dyYXksIGxpZ2h0R3JheSwgd2hpdGUsIGdyYXksIHJlZCwgZ3JlZW4sIGJsdWUsIGN5YW4sIHllbGxvdywgbWFnZW50YSwgb3JhbmdlLCBwdXJwbGUsIGJyb3duLlxuICAgKlxuICAgKiBpT1Mgbm90ZTogeW91IG11c3QgY2FsbCBTdGF0dXNCYXIub3ZlcmxheXNXZWJWaWV3KGZhbHNlKSB0byBlbmFibGUgY29sb3IgY2hhbmdpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvck5hbWUgIFRoZSBuYW1lIG9mIHRoZSBjb2xvciAoZnJvbSBhYm92ZSlcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBiYWNrZ3JvdW5kQ29sb3JCeU5hbWUoY29sb3JOYW1lOiBzdHJpbmcpIHt9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3RhdHVzIGJhciB0byBhIHNwZWNpZmljIGhleCBjb2xvciAoQ1NTIHNob3J0aGFuZCBzdXBwb3J0ZWQhKS5cbiAgICpcbiAgICogaU9TIG5vdGU6IHlvdSBtdXN0IGNhbGwgU3RhdHVzQmFyLm92ZXJsYXlzV2ViVmlldyhmYWxzZSkgdG8gZW5hYmxlIGNvbG9yIGNoYW5naW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGV4U3RyaW5nICBUaGUgaGV4IHZhbHVlIG9mIHRoZSBjb2xvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBiYWNrZ3JvdW5kQ29sb3JCeUhleFN0cmluZyhoZXhTdHJpbmc6IHN0cmluZykge31cblxuICAvKipcbiAgICogSGlkZSB0aGUgU3RhdHVzQmFyXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgaGlkZSgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIFN0YXR1c0JhclxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNob3coKSB7fVxufVxuIl19