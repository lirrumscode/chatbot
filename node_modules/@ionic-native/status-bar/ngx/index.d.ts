import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Status Bar
 * @description
 * Manage the appearance of the native status bar.
 *
 * Requires Cordova plugin: `cordova-plugin-statusbar`. For more info, please see the [StatusBar plugin docs](https://github.com/apache/cordova-plugin-statusbar).
 *
 * @usage
 * ```typescript
 * import { StatusBar } from '@ionic-native/status-bar/ngx';
 *
 * constructor(private statusBar: StatusBar) { }
 *
 * ...
 *
 * // let status bar overlay webview
 * this.statusBar.overlaysWebView(true);
 *
 * // set status bar to white
 * this.statusBar.backgroundColorByHexString('#ffffff');
 * ```
 *
 */
import * as ɵngcc0 from '@angular/core';
export declare class StatusBar extends IonicNativePlugin {
    /**
     * Whether the StatusBar is currently visible or not.
     */
    isVisible: boolean;
    /**
     * Set whether the status bar overlays the main app view. The default
     * is true.
     *
     * @param {boolean} doesOverlay  Whether the status bar overlays the main app view.
     */
    overlaysWebView(doesOverlay: boolean): void;
    /**
     * Use the default statusbar (dark text, for light backgrounds).
     */
    styleDefault(): void;
    /**
     * Use the lightContent statusbar (light text, for dark backgrounds).
     */
    styleLightContent(): void;
    /**
     * Use the blackTranslucent statusbar (light text, for dark backgrounds).
     */
    styleBlackTranslucent(): void;
    /**
     * Use the blackOpaque statusbar (light text, for dark backgrounds).
     */
    styleBlackOpaque(): void;
    /**
     * Set the status bar to a specific named color. Valid options:
     * black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown.
     *
     * iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.
     *
     * @param {string} colorName  The name of the color (from above)
     */
    backgroundColorByName(colorName: string): void;
    /**
     * Set the status bar to a specific hex color (CSS shorthand supported!).
     *
     * iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.
     *
     * @param {string} hexString  The hex value of the color.
     */
    backgroundColorByHexString(hexString: string): void;
    /**
     * Hide the StatusBar
     */
    hide(): void;
    /**
     * Show the StatusBar
     */
    show(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StatusBar, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<StatusBar>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZC50cyIsInNvdXJjZXMiOlsiaW5kZXguZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG4vKipcbiAqIEBuYW1lIFN0YXR1cyBCYXJcbiAqIEBkZXNjcmlwdGlvblxuICogTWFuYWdlIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBuYXRpdmUgc3RhdHVzIGJhci5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLXN0YXR1c2JhcmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtTdGF0dXNCYXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tc3RhdHVzYmFyKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3RhdHVzLWJhci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhdHVzQmFyOiBTdGF0dXNCYXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIGxldCBzdGF0dXMgYmFyIG92ZXJsYXkgd2Vidmlld1xuICogdGhpcy5zdGF0dXNCYXIub3ZlcmxheXNXZWJWaWV3KHRydWUpO1xuICpcbiAqIC8vIHNldCBzdGF0dXMgYmFyIHRvIHdoaXRlXG4gKiB0aGlzLnN0YXR1c0Jhci5iYWNrZ3JvdW5kQ29sb3JCeUhleFN0cmluZygnI2ZmZmZmZicpO1xuICogYGBgXG4gKlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTdGF0dXNCYXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgU3RhdHVzQmFyIGlzIGN1cnJlbnRseSB2aXNpYmxlIG9yIG5vdC5cbiAgICAgKi9cbiAgICBpc1Zpc2libGU6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogU2V0IHdoZXRoZXIgdGhlIHN0YXR1cyBiYXIgb3ZlcmxheXMgdGhlIG1haW4gYXBwIHZpZXcuIFRoZSBkZWZhdWx0XG4gICAgICogaXMgdHJ1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZG9lc092ZXJsYXkgIFdoZXRoZXIgdGhlIHN0YXR1cyBiYXIgb3ZlcmxheXMgdGhlIG1haW4gYXBwIHZpZXcuXG4gICAgICovXG4gICAgb3ZlcmxheXNXZWJWaWV3KGRvZXNPdmVybGF5OiBib29sZWFuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBVc2UgdGhlIGRlZmF1bHQgc3RhdHVzYmFyIChkYXJrIHRleHQsIGZvciBsaWdodCBiYWNrZ3JvdW5kcykuXG4gICAgICovXG4gICAgc3R5bGVEZWZhdWx0KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVXNlIHRoZSBsaWdodENvbnRlbnQgc3RhdHVzYmFyIChsaWdodCB0ZXh0LCBmb3IgZGFyayBiYWNrZ3JvdW5kcykuXG4gICAgICovXG4gICAgc3R5bGVMaWdodENvbnRlbnQoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBVc2UgdGhlIGJsYWNrVHJhbnNsdWNlbnQgc3RhdHVzYmFyIChsaWdodCB0ZXh0LCBmb3IgZGFyayBiYWNrZ3JvdW5kcykuXG4gICAgICovXG4gICAgc3R5bGVCbGFja1RyYW5zbHVjZW50KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVXNlIHRoZSBibGFja09wYXF1ZSBzdGF0dXNiYXIgKGxpZ2h0IHRleHQsIGZvciBkYXJrIGJhY2tncm91bmRzKS5cbiAgICAgKi9cbiAgICBzdHlsZUJsYWNrT3BhcXVlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBzdGF0dXMgYmFyIHRvIGEgc3BlY2lmaWMgbmFtZWQgY29sb3IuIFZhbGlkIG9wdGlvbnM6XG4gICAgICogYmxhY2ssIGRhcmtHcmF5LCBsaWdodEdyYXksIHdoaXRlLCBncmF5LCByZWQsIGdyZWVuLCBibHVlLCBjeWFuLCB5ZWxsb3csIG1hZ2VudGEsIG9yYW5nZSwgcHVycGxlLCBicm93bi5cbiAgICAgKlxuICAgICAqIGlPUyBub3RlOiB5b3UgbXVzdCBjYWxsIFN0YXR1c0Jhci5vdmVybGF5c1dlYlZpZXcoZmFsc2UpIHRvIGVuYWJsZSBjb2xvciBjaGFuZ2luZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvck5hbWUgIFRoZSBuYW1lIG9mIHRoZSBjb2xvciAoZnJvbSBhYm92ZSlcbiAgICAgKi9cbiAgICBiYWNrZ3JvdW5kQ29sb3JCeU5hbWUoY29sb3JOYW1lOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgc3RhdHVzIGJhciB0byBhIHNwZWNpZmljIGhleCBjb2xvciAoQ1NTIHNob3J0aGFuZCBzdXBwb3J0ZWQhKS5cbiAgICAgKlxuICAgICAqIGlPUyBub3RlOiB5b3UgbXVzdCBjYWxsIFN0YXR1c0Jhci5vdmVybGF5c1dlYlZpZXcoZmFsc2UpIHRvIGVuYWJsZSBjb2xvciBjaGFuZ2luZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBoZXhTdHJpbmcgIFRoZSBoZXggdmFsdWUgb2YgdGhlIGNvbG9yLlxuICAgICAqL1xuICAgIGJhY2tncm91bmRDb2xvckJ5SGV4U3RyaW5nKGhleFN0cmluZzogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBIaWRlIHRoZSBTdGF0dXNCYXJcbiAgICAgKi9cbiAgICBoaWRlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU2hvdyB0aGUgU3RhdHVzQmFyXG4gICAgICovXG4gICAgc2hvdygpOiB2b2lkO1xufVxuIl19