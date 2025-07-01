import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  MatSelectModule,
  OverlayConfig,
  OverlayContainer,
  OverlayModule,
  OverlayRef,
  PortalModule,
  TemplatePortal,
  createBlockScrollStrategy,
  createGlobalPositionStrategy,
  createOverlayRef,
  init_overlay,
  init_overlay_module_Bd2UplUU,
  init_portal,
  init_select
} from "./chunk-RBW725AG.js";
import {
  CdkScrollable,
  init_scrolling
} from "./chunk-II4XOFPX.js";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  init_button,
  init_form_field,
  init_input
} from "./chunk-XPVP5D3K.js";
import {
  MatRipple,
  _StructuralStylesLoader,
  _animationsDisabled,
  init_animation_DfMFjxHu,
  init_coercion,
  init_ripple_BYgV4oZC,
  init_structural_styles_CObeNzjn
} from "./chunk-E5SZGRLI.js";
import {
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  init_forms
} from "./chunk-5VCTOLDM.js";
import {
  A11yModule,
  Directionality,
  ESCAPE,
  FocusMonitor,
  FocusTrapFactory,
  InteractivityChecker,
  MatCommonModule,
  MatIconModule,
  Platform,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _getFocusedElementPierceShadowDom,
  coerceNumberProperty,
  hasModifierKey,
  init_a11y,
  init_a11y_module_DHa4AVFz,
  init_common_module_cKSwHniA,
  init_directionality_CChdj3az,
  init_focus_monitor_DLjkiju1,
  init_icon,
  init_id_generator_LuoRZSid,
  init_keycodes,
  init_keycodes_CpHkExLC,
  init_platform_DNDzkVcI,
  init_private,
  init_shadow_dom_B0oHn41l
} from "./chunk-NQEXKGPT.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-3BJ3OYBN.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  HostAttributeToken,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  Subject,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  __decorate,
  __esm,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  booleanAttribute,
  core_exports,
  defer,
  filter,
  forwardRef,
  init_common,
  init_core,
  init_esm,
  init_operators,
  init_tslib_es6,
  inject,
  isPlatformBrowser,
  merge,
  numberAttribute,
  signal,
  startWith,
  take,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-4OKOT362.js";

// node_modules/@angular/material/fesm2022/card.mjs
var MAT_CARD_CONFIG, MatCard, MatCardTitle, MatCardTitleGroup, MatCardContent, MatCardSubtitle, MatCardActions, MatCardHeader, MatCardFooter, MatCardImage, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardXlImage, MatCardAvatar, CARD_DIRECTIVES, MatCardModule;
var init_card = __esm({
  "node_modules/@angular/material/fesm2022/card.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common_module_cKSwHniA();
    MAT_CARD_CONFIG = new InjectionToken("MAT_CARD_CONFIG");
    MatCard = class _MatCard {
      appearance;
      constructor() {
        const config = inject(MAT_CARD_CONFIG, { optional: true });
        this.appearance = config?.appearance || "raised";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCard, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatCard, isStandalone: true, selector: "mat-card", inputs: { appearance: "appearance" }, host: { properties: { "class.mat-mdc-card-outlined": 'appearance === "outlined"', "class.mdc-card--outlined": 'appearance === "outlined"', "class.mat-mdc-card-filled": 'appearance === "filled"', "class.mdc-card--filled": 'appearance === "filled"' }, classAttribute: "mat-mdc-card mdc-card" }, exportAs: ["matCard"], ngImport: core_exports, template: "<ng-content></ng-content>\n", styles: ['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-elevated-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mat-card-outlined-container-color, var(--mat-sys-surface));border-radius:var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));border-width:var(--mat-card-outlined-outline-width, 1px);border-color:var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mat-card-outlined-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mat-mdc-card-filled{background-color:var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));border-radius:var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-filled-container-elevation, var(--mat-sys-level0))}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}\n'], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCard, decorators: [{
      type: Component,
      args: [{ selector: "mat-card", host: {
        "class": "mat-mdc-card mdc-card",
        "[class.mat-mdc-card-outlined]": 'appearance === "outlined"',
        "[class.mdc-card--outlined]": 'appearance === "outlined"',
        "[class.mat-mdc-card-filled]": 'appearance === "filled"',
        "[class.mdc-card--filled]": 'appearance === "filled"'
      }, exportAs: "matCard", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>\n", styles: ['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-elevated-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mat-card-outlined-container-color, var(--mat-sys-surface));border-radius:var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));border-width:var(--mat-card-outlined-outline-width, 1px);border-color:var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mat-card-outlined-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mat-mdc-card-filled{background-color:var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));border-radius:var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-filled-container-elevation, var(--mat-sys-level0))}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}\n'] }]
    }], ctorParameters: () => [], propDecorators: { appearance: [{
      type: Input
    }] } });
    MatCardTitle = class _MatCardTitle {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardTitle, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardTitle, isStandalone: true, selector: "mat-card-title, [mat-card-title], [matCardTitle]", host: { classAttribute: "mat-mdc-card-title" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardTitle, decorators: [{
      type: Directive,
      args: [{
        selector: `mat-card-title, [mat-card-title], [matCardTitle]`,
        host: { "class": "mat-mdc-card-title" }
      }]
    }] });
    MatCardTitleGroup = class _MatCardTitleGroup {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardTitleGroup, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardTitleGroup, isStandalone: true, selector: "mat-card-title-group", host: { classAttribute: "mat-mdc-card-title-group" }, ngImport: core_exports, template: '<div>\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content select="[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]"></ng-content>\n<ng-content></ng-content>\n', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardTitleGroup, decorators: [{
      type: Component,
      args: [{ selector: "mat-card-title-group", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: { "class": "mat-mdc-card-title-group" }, template: '<div>\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content select="[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]"></ng-content>\n<ng-content></ng-content>\n' }]
    }] });
    MatCardContent = class _MatCardContent {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardContent, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardContent, isStandalone: true, selector: "mat-card-content", host: { classAttribute: "mat-mdc-card-content" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardContent, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-card-content",
        host: { "class": "mat-mdc-card-content" }
      }]
    }] });
    MatCardSubtitle = class _MatCardSubtitle {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardSubtitle, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardSubtitle, isStandalone: true, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]", host: { classAttribute: "mat-mdc-card-subtitle" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardSubtitle, decorators: [{
      type: Directive,
      args: [{
        selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]`,
        host: { "class": "mat-mdc-card-subtitle" }
      }]
    }] });
    MatCardActions = class _MatCardActions {
      // TODO(jelbourn): deprecate `align` in favor of `actionPosition` or `actionAlignment`
      // as to not conflict with the native `align` attribute.
      /** Position of the actions inside the card. */
      align = "start";
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardActions, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardActions, isStandalone: true, selector: "mat-card-actions", inputs: { align: "align" }, host: { properties: { "class.mat-mdc-card-actions-align-end": 'align === "end"' }, classAttribute: "mat-mdc-card-actions mdc-card__actions" }, exportAs: ["matCardActions"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardActions, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-card-actions",
        exportAs: "matCardActions",
        host: {
          "class": "mat-mdc-card-actions mdc-card__actions",
          "[class.mat-mdc-card-actions-align-end]": 'align === "end"'
        }
      }]
    }], propDecorators: { align: [{
      type: Input
    }] } });
    MatCardHeader = class _MatCardHeader {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardHeader, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardHeader, isStandalone: true, selector: "mat-card-header", host: { classAttribute: "mat-mdc-card-header" }, ngImport: core_exports, template: '<ng-content select="[mat-card-avatar], [matCardAvatar]"></ng-content>\n<div class="mat-mdc-card-header-text">\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content></ng-content>\n', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardHeader, decorators: [{
      type: Component,
      args: [{ selector: "mat-card-header", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: { "class": "mat-mdc-card-header" }, template: '<ng-content select="[mat-card-avatar], [matCardAvatar]"></ng-content>\n<div class="mat-mdc-card-header-text">\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content></ng-content>\n' }]
    }] });
    MatCardFooter = class _MatCardFooter {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardFooter, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardFooter, isStandalone: true, selector: "mat-card-footer", host: { classAttribute: "mat-mdc-card-footer" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardFooter, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-card-footer",
        host: { "class": "mat-mdc-card-footer" }
      }]
    }] });
    MatCardImage = class _MatCardImage {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardImage, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardImage, isStandalone: true, selector: "[mat-card-image], [matCardImage]", host: { classAttribute: "mat-mdc-card-image mdc-card__media" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardImage, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-card-image], [matCardImage]",
        host: { "class": "mat-mdc-card-image mdc-card__media" }
      }]
    }] });
    MatCardSmImage = class _MatCardSmImage {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardSmImage, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardSmImage, isStandalone: true, selector: "[mat-card-sm-image], [matCardImageSmall]", host: { classAttribute: "mat-mdc-card-sm-image mdc-card__media" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardSmImage, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-card-sm-image], [matCardImageSmall]",
        host: { "class": "mat-mdc-card-sm-image mdc-card__media" }
      }]
    }] });
    MatCardMdImage = class _MatCardMdImage {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardMdImage, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardMdImage, isStandalone: true, selector: "[mat-card-md-image], [matCardImageMedium]", host: { classAttribute: "mat-mdc-card-md-image mdc-card__media" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardMdImage, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-card-md-image], [matCardImageMedium]",
        host: { "class": "mat-mdc-card-md-image mdc-card__media" }
      }]
    }] });
    MatCardLgImage = class _MatCardLgImage {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardLgImage, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardLgImage, isStandalone: true, selector: "[mat-card-lg-image], [matCardImageLarge]", host: { classAttribute: "mat-mdc-card-lg-image mdc-card__media" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardLgImage, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-card-lg-image], [matCardImageLarge]",
        host: { "class": "mat-mdc-card-lg-image mdc-card__media" }
      }]
    }] });
    MatCardXlImage = class _MatCardXlImage {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardXlImage, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardXlImage, isStandalone: true, selector: "[mat-card-xl-image], [matCardImageXLarge]", host: { classAttribute: "mat-mdc-card-xl-image mdc-card__media" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardXlImage, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-card-xl-image], [matCardImageXLarge]",
        host: { "class": "mat-mdc-card-xl-image mdc-card__media" }
      }]
    }] });
    MatCardAvatar = class _MatCardAvatar {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardAvatar, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardAvatar, isStandalone: true, selector: "[mat-card-avatar], [matCardAvatar]", host: { classAttribute: "mat-mdc-card-avatar" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardAvatar, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-card-avatar], [matCardAvatar]",
        host: { "class": "mat-mdc-card-avatar" }
      }]
    }] });
    CARD_DIRECTIVES = [
      MatCard,
      MatCardActions,
      MatCardAvatar,
      MatCardContent,
      MatCardFooter,
      MatCardHeader,
      MatCardImage,
      MatCardLgImage,
      MatCardMdImage,
      MatCardSmImage,
      MatCardSubtitle,
      MatCardTitle,
      MatCardTitleGroup,
      MatCardXlImage
    ];
    MatCardModule = class _MatCardModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardModule, imports: [
        MatCommonModule,
        MatCard,
        MatCardActions,
        MatCardAvatar,
        MatCardContent,
        MatCardFooter,
        MatCardHeader,
        MatCardImage,
        MatCardLgImage,
        MatCardMdImage,
        MatCardSmImage,
        MatCardSubtitle,
        MatCardTitle,
        MatCardTitleGroup,
        MatCardXlImage
      ], exports: [
        MatCard,
        MatCardActions,
        MatCardAvatar,
        MatCardContent,
        MatCardFooter,
        MatCardHeader,
        MatCardImage,
        MatCardLgImage,
        MatCardMdImage,
        MatCardSmImage,
        MatCardSubtitle,
        MatCardTitle,
        MatCardTitleGroup,
        MatCardXlImage,
        MatCommonModule
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardModule, imports: [MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, ...CARD_DIRECTIVES],
        exports: [CARD_DIRECTIVES, MatCommonModule]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/dialog.mjs
function throwDialogContentAlreadyAttachedError() {
  throw Error("Attempting to attach dialog content after content is already attached");
}
function getDirectionality(value) {
  const valueSignal = signal(value);
  const change = new EventEmitter();
  return {
    valueSignal,
    get value() {
      return valueSignal();
    },
    change,
    ngOnDestroy() {
      change.complete();
    }
  };
}
function reverseForEach(items, callback) {
  let i = items.length;
  while (i--) {
    callback(items[i]);
  }
}
var DialogConfig, CdkDialogContainer, DialogRef, DIALOG_SCROLL_STRATEGY, DIALOG_DATA, DEFAULT_DIALOG_CONFIG, Dialog, DialogModule;
var init_dialog = __esm({
  "node_modules/@angular/cdk/fesm2022/dialog.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_portal();
    init_a11y_module_DHa4AVFz();
    init_focus_monitor_DLjkiju1();
    init_platform_DNDzkVcI();
    init_shadow_dom_B0oHn41l();
    init_esm();
    init_keycodes_CpHkExLC();
    init_keycodes();
    init_operators();
    init_overlay_module_Bd2UplUU();
    init_id_generator_LuoRZSid();
    init_directionality_CChdj3az();
    DialogConfig = class {
      /**
       * Where the attached component should live in Angular's *logical* component tree.
       * This affects what is available for injection and the change detection order for the
       * component instantiated inside of the dialog. This does not affect where the dialog
       * content will be rendered.
       */
      viewContainerRef;
      /**
       * Injector used for the instantiation of the component to be attached. If provided,
       * takes precedence over the injector indirectly provided by `ViewContainerRef`.
       */
      injector;
      /** ID for the dialog. If omitted, a unique one will be generated. */
      id;
      /** The ARIA role of the dialog element. */
      role = "dialog";
      /** Optional CSS class or classes applied to the overlay panel. */
      panelClass = "";
      /** Whether the dialog has a backdrop. */
      hasBackdrop = true;
      /** Optional CSS class or classes applied to the overlay backdrop. */
      backdropClass = "";
      /** Whether the dialog closes with the escape key or pointer events outside the panel element. */
      disableClose = false;
      /** Function used to determine whether the dialog is allowed to close. */
      closePredicate;
      /** Width of the dialog. */
      width = "";
      /** Height of the dialog. */
      height = "";
      /** Min-width of the dialog. If a number is provided, assumes pixel units. */
      minWidth;
      /** Min-height of the dialog. If a number is provided, assumes pixel units. */
      minHeight;
      /** Max-width of the dialog. If a number is provided, assumes pixel units. */
      maxWidth;
      /** Max-height of the dialog. If a number is provided, assumes pixel units. */
      maxHeight;
      /** Strategy to use when positioning the dialog. Defaults to centering it on the page. */
      positionStrategy;
      /** Data being injected into the child component. */
      data = null;
      /** Layout direction for the dialog's content. */
      direction;
      /** ID of the element that describes the dialog. */
      ariaDescribedBy = null;
      /** ID of the element that labels the dialog. */
      ariaLabelledBy = null;
      /** Dialog label applied via `aria-label` */
      ariaLabel = null;
      /**
       * Whether this is a modal dialog. Used to set the `aria-modal` attribute. Off by default,
       * because it can interfere with other overlay-based components (e.g. `mat-select`) and because
       * it is redundant since the dialog marks all outside content as `aria-hidden` anyway.
       */
      ariaModal = false;
      /**
       * Where the dialog should focus on open.
       * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
       * AutoFocusTarget instead.
       */
      autoFocus = "first-tabbable";
      /**
       * Whether the dialog should restore focus to the previously-focused element upon closing.
       * Has the following behavior based on the type that is passed in:
       * - `boolean` - when true, will return focus to the element that was focused before the dialog
       *    was opened, otherwise won't restore focus at all.
       * - `string` - focus will be restored to the first element that matches the CSS selector.
       * - `HTMLElement` - focus will be restored to the specific element.
       */
      restoreFocus = true;
      /**
       * Scroll strategy to be used for the dialog. This determines how
       * the dialog responds to scrolling underneath the panel element.
       */
      scrollStrategy;
      /**
       * Whether the dialog should close when the user navigates backwards or forwards through browser
       * history. This does not apply to navigation via anchor element unless using URL-hash based
       * routing (`HashLocationStrategy` in the Angular router).
       */
      closeOnNavigation = true;
      /**
       * Whether the dialog should close when the dialog service is destroyed. This is useful if
       * another service is wrapping the dialog and is managing the destruction instead.
       */
      closeOnDestroy = true;
      /**
       * Whether the dialog should close when the underlying overlay is detached. This is useful if
       * another service is wrapping the dialog and is managing the destruction instead. E.g. an
       * external detachment can happen as a result of a scroll strategy triggering it or when the
       * browser location changes.
       */
      closeOnOverlayDetachments = true;
      /**
       * Whether the built-in overlay animations should be disabled.
       */
      disableAnimations = false;
      /**
       * Providers that will be exposed to the contents of the dialog. Can also
       * be provided as a function in order to generate the providers lazily.
       */
      providers;
      /**
       * Component into which the dialog content will be rendered. Defaults to `CdkDialogContainer`.
       * A configuration object can be passed in to customize the providers that will be exposed
       * to the dialog container.
       */
      container;
      /**
       * Context that will be passed to template-based dialogs.
       * A function can be passed in to resolve the context lazily.
       */
      templateContext;
    };
    CdkDialogContainer = class _CdkDialogContainer extends BasePortalOutlet {
      _elementRef = inject(ElementRef);
      _focusTrapFactory = inject(FocusTrapFactory);
      _config;
      _interactivityChecker = inject(InteractivityChecker);
      _ngZone = inject(NgZone);
      _focusMonitor = inject(FocusMonitor);
      _renderer = inject(Renderer2);
      _platform = inject(Platform);
      _document = inject(DOCUMENT, { optional: true });
      /** The portal outlet inside of this container into which the dialog content will be loaded. */
      _portalOutlet;
      /** The class that traps and manages focus within the dialog. */
      _focusTrap = null;
      /** Element that was focused before the dialog was opened. Save this to restore upon close. */
      _elementFocusedBeforeDialogWasOpened = null;
      /**
       * Type of interaction that led to the dialog being closed. This is used to determine
       * whether the focus style will be applied when returning focus to its original location
       * after the dialog is closed.
       */
      _closeInteractionType = null;
      /**
       * Queue of the IDs of the dialog's label element, based on their definition order. The first
       * ID will be used as the `aria-labelledby` value. We use a queue here to handle the case
       * where there are two or more titles in the DOM at a time and the first one is destroyed while
       * the rest are present.
       */
      _ariaLabelledByQueue = [];
      _changeDetectorRef = inject(ChangeDetectorRef);
      _injector = inject(Injector);
      _isDestroyed = false;
      constructor() {
        super();
        this._config = inject(DialogConfig, { optional: true }) || new DialogConfig();
        if (this._config.ariaLabelledBy) {
          this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
        }
      }
      _addAriaLabelledBy(id) {
        this._ariaLabelledByQueue.push(id);
        this._changeDetectorRef.markForCheck();
      }
      _removeAriaLabelledBy(id) {
        const index = this._ariaLabelledByQueue.indexOf(id);
        if (index > -1) {
          this._ariaLabelledByQueue.splice(index, 1);
          this._changeDetectorRef.markForCheck();
        }
      }
      _contentAttached() {
        this._initializeFocusTrap();
        this._captureInitialFocus();
      }
      /**
       * Can be used by child classes to customize the initial focus
       * capturing behavior (e.g. if it's tied to an animation).
       */
      _captureInitialFocus() {
        this._trapFocus();
      }
      ngOnDestroy() {
        this._isDestroyed = true;
        this._restoreFocus();
      }
      /**
       * Attach a ComponentPortal as content to this dialog container.
       * @param portal Portal to be attached as the dialog content.
       */
      attachComponentPortal(portal) {
        if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwDialogContentAlreadyAttachedError();
        }
        const result = this._portalOutlet.attachComponentPortal(portal);
        this._contentAttached();
        return result;
      }
      /**
       * Attach a TemplatePortal as content to this dialog container.
       * @param portal Portal to be attached as the dialog content.
       */
      attachTemplatePortal(portal) {
        if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwDialogContentAlreadyAttachedError();
        }
        const result = this._portalOutlet.attachTemplatePortal(portal);
        this._contentAttached();
        return result;
      }
      /**
       * Attaches a DOM portal to the dialog container.
       * @param portal Portal to be attached.
       * @deprecated To be turned into a method.
       * @breaking-change 10.0.0
       */
      attachDomPortal = (portal) => {
        if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwDialogContentAlreadyAttachedError();
        }
        const result = this._portalOutlet.attachDomPortal(portal);
        this._contentAttached();
        return result;
      };
      // TODO(crisbeto): this shouldn't be exposed, but there are internal references to it.
      /** Captures focus if it isn't already inside the dialog. */
      _recaptureFocus() {
        if (!this._containsFocus()) {
          this._trapFocus();
        }
      }
      /**
       * Focuses the provided element. If the element is not focusable, it will add a tabIndex
       * attribute to forcefully focus it. The attribute is removed after focus is moved.
       * @param element The element to focus.
       */
      _forceFocus(element, options) {
        if (!this._interactivityChecker.isFocusable(element)) {
          element.tabIndex = -1;
          this._ngZone.runOutsideAngular(() => {
            const callback = () => {
              deregisterBlur();
              deregisterMousedown();
              element.removeAttribute("tabindex");
            };
            const deregisterBlur = this._renderer.listen(element, "blur", callback);
            const deregisterMousedown = this._renderer.listen(element, "mousedown", callback);
          });
        }
        element.focus(options);
      }
      /**
       * Focuses the first element that matches the given selector within the focus trap.
       * @param selector The CSS selector for the element to set focus to.
       */
      _focusByCssSelector(selector, options) {
        let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
        if (elementToFocus) {
          this._forceFocus(elementToFocus, options);
        }
      }
      /**
       * Moves the focus inside the focus trap. When autoFocus is not set to 'dialog', if focus
       * cannot be moved then focus will go to the dialog container.
       */
      _trapFocus(options) {
        if (this._isDestroyed) {
          return;
        }
        afterNextRender(() => {
          const element = this._elementRef.nativeElement;
          switch (this._config.autoFocus) {
            case false:
            case "dialog":
              if (!this._containsFocus()) {
                element.focus(options);
              }
              break;
            case true:
            case "first-tabbable":
              const focusedSuccessfully = this._focusTrap?.focusInitialElement(options);
              if (!focusedSuccessfully) {
                this._focusDialogContainer(options);
              }
              break;
            case "first-heading":
              this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]', options);
              break;
            default:
              this._focusByCssSelector(this._config.autoFocus, options);
              break;
          }
        }, { injector: this._injector });
      }
      /** Restores focus to the element that was focused before the dialog opened. */
      _restoreFocus() {
        const focusConfig = this._config.restoreFocus;
        let focusTargetElement = null;
        if (typeof focusConfig === "string") {
          focusTargetElement = this._document.querySelector(focusConfig);
        } else if (typeof focusConfig === "boolean") {
          focusTargetElement = focusConfig ? this._elementFocusedBeforeDialogWasOpened : null;
        } else if (focusConfig) {
          focusTargetElement = focusConfig;
        }
        if (this._config.restoreFocus && focusTargetElement && typeof focusTargetElement.focus === "function") {
          const activeElement = _getFocusedElementPierceShadowDom();
          const element = this._elementRef.nativeElement;
          if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
            if (this._focusMonitor) {
              this._focusMonitor.focusVia(focusTargetElement, this._closeInteractionType);
              this._closeInteractionType = null;
            } else {
              focusTargetElement.focus();
            }
          }
        }
        if (this._focusTrap) {
          this._focusTrap.destroy();
        }
      }
      /** Focuses the dialog container. */
      _focusDialogContainer(options) {
        this._elementRef.nativeElement.focus?.(options);
      }
      /** Returns whether focus is inside the dialog. */
      _containsFocus() {
        const element = this._elementRef.nativeElement;
        const activeElement = _getFocusedElementPierceShadowDom();
        return element === activeElement || element.contains(activeElement);
      }
      /** Sets up the focus trap. */
      _initializeFocusTrap() {
        if (this._platform.isBrowser) {
          this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
          if (this._document) {
            this._elementFocusedBeforeDialogWasOpened = _getFocusedElementPierceShadowDom();
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkDialogContainer, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _CdkDialogContainer, isStandalone: true, selector: "cdk-dialog-container", host: { attributes: { "tabindex": "-1" }, properties: { "attr.id": "_config.id || null", "attr.role": "_config.role", "attr.aria-modal": "_config.ariaModal", "attr.aria-labelledby": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]", "attr.aria-label": "_config.ariaLabel", "attr.aria-describedby": "_config.ariaDescribedBy || null" }, classAttribute: "cdk-dialog-container" }, viewQueries: [{ propertyName: "_portalOutlet", first: true, predicate: CdkPortalOutlet, descendants: true, static: true }], usesInheritance: true, ngImport: core_exports, template: "<ng-template cdkPortalOutlet />\n", styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}\n"], dependencies: [{ kind: "directive", type: CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }], changeDetection: ChangeDetectionStrategy.Default, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkDialogContainer, decorators: [{
      type: Component,
      args: [{ selector: "cdk-dialog-container", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.Default, imports: [CdkPortalOutlet], host: {
        "class": "cdk-dialog-container",
        "tabindex": "-1",
        "[attr.id]": "_config.id || null",
        "[attr.role]": "_config.role",
        "[attr.aria-modal]": "_config.ariaModal",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null"
      }, template: "<ng-template cdkPortalOutlet />\n", styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}\n"] }]
    }], ctorParameters: () => [], propDecorators: { _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, { static: true }]
    }] } });
    DialogRef = class {
      overlayRef;
      config;
      /**
       * Instance of component opened into the dialog. Will be
       * null when the dialog is opened using a `TemplateRef`.
       */
      componentInstance;
      /**
       * `ComponentRef` of the component opened into the dialog. Will be
       * null when the dialog is opened using a `TemplateRef`.
       */
      componentRef;
      /** Instance of the container that is rendering out the dialog content. */
      containerInstance;
      /** Whether the user is allowed to close the dialog. */
      disableClose;
      /** Emits when the dialog has been closed. */
      closed = new Subject();
      /** Emits when the backdrop of the dialog is clicked. */
      backdropClick;
      /** Emits when on keyboard events within the dialog. */
      keydownEvents;
      /** Emits on pointer events that happen outside of the dialog. */
      outsidePointerEvents;
      /** Unique ID for the dialog. */
      id;
      /** Subscription to external detachments of the dialog. */
      _detachSubscription;
      constructor(overlayRef, config) {
        this.overlayRef = overlayRef;
        this.config = config;
        this.disableClose = config.disableClose;
        this.backdropClick = overlayRef.backdropClick();
        this.keydownEvents = overlayRef.keydownEvents();
        this.outsidePointerEvents = overlayRef.outsidePointerEvents();
        this.id = config.id;
        this.keydownEvents.subscribe((event) => {
          if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
            event.preventDefault();
            this.close(void 0, { focusOrigin: "keyboard" });
          }
        });
        this.backdropClick.subscribe(() => {
          if (!this.disableClose && this._canClose()) {
            this.close(void 0, { focusOrigin: "mouse" });
          } else {
            this.containerInstance._recaptureFocus?.();
          }
        });
        this._detachSubscription = overlayRef.detachments().subscribe(() => {
          if (config.closeOnOverlayDetachments !== false) {
            this.close();
          }
        });
      }
      /**
       * Close the dialog.
       * @param result Optional result to return to the dialog opener.
       * @param options Additional options to customize the closing behavior.
       */
      close(result, options) {
        if (this._canClose(result)) {
          const closedSubject = this.closed;
          this.containerInstance._closeInteractionType = options?.focusOrigin || "program";
          this._detachSubscription.unsubscribe();
          this.overlayRef.dispose();
          closedSubject.next(result);
          closedSubject.complete();
          this.componentInstance = this.containerInstance = null;
        }
      }
      /** Updates the position of the dialog based on the current position strategy. */
      updatePosition() {
        this.overlayRef.updatePosition();
        return this;
      }
      /**
       * Updates the dialog's width and height.
       * @param width New width of the dialog.
       * @param height New height of the dialog.
       */
      updateSize(width = "", height = "") {
        this.overlayRef.updateSize({ width, height });
        return this;
      }
      /** Add a CSS class or an array of classes to the overlay pane. */
      addPanelClass(classes) {
        this.overlayRef.addPanelClass(classes);
        return this;
      }
      /** Remove a CSS class or an array of classes from the overlay pane. */
      removePanelClass(classes) {
        this.overlayRef.removePanelClass(classes);
        return this;
      }
      /** Whether the dialog is allowed to close. */
      _canClose(result) {
        const config = this.config;
        return !!this.containerInstance && (!config.closePredicate || config.closePredicate(result, config, this.componentInstance));
      }
    };
    DIALOG_SCROLL_STRATEGY = new InjectionToken("DialogScrollStrategy", {
      providedIn: "root",
      factory: () => {
        const injector = inject(Injector);
        return () => createBlockScrollStrategy(injector);
      }
    });
    DIALOG_DATA = new InjectionToken("DialogData");
    DEFAULT_DIALOG_CONFIG = new InjectionToken("DefaultDialogConfig");
    Dialog = class _Dialog {
      _injector = inject(Injector);
      _defaultOptions = inject(DEFAULT_DIALOG_CONFIG, { optional: true });
      _parentDialog = inject(_Dialog, { optional: true, skipSelf: true });
      _overlayContainer = inject(OverlayContainer);
      _idGenerator = inject(_IdGenerator);
      _openDialogsAtThisLevel = [];
      _afterAllClosedAtThisLevel = new Subject();
      _afterOpenedAtThisLevel = new Subject();
      _ariaHiddenElements = /* @__PURE__ */ new Map();
      _scrollStrategy = inject(DIALOG_SCROLL_STRATEGY);
      /** Keeps track of the currently-open dialogs. */
      get openDialogs() {
        return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
      }
      /** Stream that emits when a dialog has been opened. */
      get afterOpened() {
        return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
      }
      /**
       * Stream that emits when all open dialog have finished closing.
       * Will emit on subscribe if there are no open dialogs to begin with.
       */
      afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
      constructor() {
      }
      open(componentOrTemplateRef, config) {
        const defaults = this._defaultOptions || new DialogConfig();
        config = __spreadValues(__spreadValues({}, defaults), config);
        config.id = config.id || this._idGenerator.getId("cdk-dialog-");
        if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
        }
        const overlayConfig = this._getOverlayConfig(config);
        const overlayRef = createOverlayRef(this._injector, overlayConfig);
        const dialogRef = new DialogRef(overlayRef, config);
        const dialogContainer = this._attachContainer(overlayRef, dialogRef, config);
        dialogRef.containerInstance = dialogContainer;
        this._attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config);
        if (!this.openDialogs.length) {
          this._hideNonDialogContentFromAssistiveTechnology();
        }
        this.openDialogs.push(dialogRef);
        dialogRef.closed.subscribe(() => this._removeOpenDialog(dialogRef, true));
        this.afterOpened.next(dialogRef);
        return dialogRef;
      }
      /**
       * Closes all of the currently-open dialogs.
       */
      closeAll() {
        reverseForEach(this.openDialogs, (dialog) => dialog.close());
      }
      /**
       * Finds an open dialog by its id.
       * @param id ID to use when looking up the dialog.
       */
      getDialogById(id) {
        return this.openDialogs.find((dialog) => dialog.id === id);
      }
      ngOnDestroy() {
        reverseForEach(this._openDialogsAtThisLevel, (dialog) => {
          if (dialog.config.closeOnDestroy === false) {
            this._removeOpenDialog(dialog, false);
          }
        });
        reverseForEach(this._openDialogsAtThisLevel, (dialog) => dialog.close());
        this._afterAllClosedAtThisLevel.complete();
        this._afterOpenedAtThisLevel.complete();
        this._openDialogsAtThisLevel = [];
      }
      /**
       * Creates an overlay config from a dialog config.
       * @param config The dialog configuration.
       * @returns The overlay configuration.
       */
      _getOverlayConfig(config) {
        const state = new OverlayConfig({
          positionStrategy: config.positionStrategy || createGlobalPositionStrategy().centerHorizontally().centerVertically(),
          scrollStrategy: config.scrollStrategy || this._scrollStrategy(),
          panelClass: config.panelClass,
          hasBackdrop: config.hasBackdrop,
          direction: config.direction,
          minWidth: config.minWidth,
          minHeight: config.minHeight,
          maxWidth: config.maxWidth,
          maxHeight: config.maxHeight,
          width: config.width,
          height: config.height,
          disposeOnNavigation: config.closeOnNavigation,
          disableAnimations: config.disableAnimations
        });
        if (config.backdropClass) {
          state.backdropClass = config.backdropClass;
        }
        return state;
      }
      /**
       * Attaches a dialog container to a dialog's already-created overlay.
       * @param overlay Reference to the dialog's underlying overlay.
       * @param config The dialog configuration.
       * @returns A promise resolving to a ComponentRef for the attached container.
       */
      _attachContainer(overlay, dialogRef, config) {
        const userInjector = config.injector || config.viewContainerRef?.injector;
        const providers = [
          { provide: DialogConfig, useValue: config },
          { provide: DialogRef, useValue: dialogRef },
          { provide: OverlayRef, useValue: overlay }
        ];
        let containerType;
        if (config.container) {
          if (typeof config.container === "function") {
            containerType = config.container;
          } else {
            containerType = config.container.type;
            providers.push(...config.container.providers(config));
          }
        } else {
          containerType = CdkDialogContainer;
        }
        const containerPortal = new ComponentPortal(containerType, config.viewContainerRef, Injector.create({ parent: userInjector || this._injector, providers }));
        const containerRef = overlay.attach(containerPortal);
        return containerRef.instance;
      }
      /**
       * Attaches the user-provided component to the already-created dialog container.
       * @param componentOrTemplateRef The type of component being loaded into the dialog,
       *     or a TemplateRef to instantiate as the content.
       * @param dialogRef Reference to the dialog being opened.
       * @param dialogContainer Component that is going to wrap the dialog content.
       * @param config Configuration used to open the dialog.
       */
      _attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config) {
        if (componentOrTemplateRef instanceof TemplateRef) {
          const injector = this._createInjector(config, dialogRef, dialogContainer, void 0);
          let context = { $implicit: config.data, dialogRef };
          if (config.templateContext) {
            context = __spreadValues(__spreadValues({}, context), typeof config.templateContext === "function" ? config.templateContext() : config.templateContext);
          }
          dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, context, injector));
        } else {
          const injector = this._createInjector(config, dialogRef, dialogContainer, this._injector);
          const contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, config.viewContainerRef, injector));
          dialogRef.componentRef = contentRef;
          dialogRef.componentInstance = contentRef.instance;
        }
      }
      /**
       * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
       * of a dialog to close itself and, optionally, to return a value.
       * @param config Config object that is used to construct the dialog.
       * @param dialogRef Reference to the dialog being opened.
       * @param dialogContainer Component that is going to wrap the dialog content.
       * @param fallbackInjector Injector to use as a fallback when a lookup fails in the custom
       * dialog injector, if the user didn't provide a custom one.
       * @returns The custom injector that can be used inside the dialog.
       */
      _createInjector(config, dialogRef, dialogContainer, fallbackInjector) {
        const userInjector = config.injector || config.viewContainerRef?.injector;
        const providers = [
          { provide: DIALOG_DATA, useValue: config.data },
          { provide: DialogRef, useValue: dialogRef }
        ];
        if (config.providers) {
          if (typeof config.providers === "function") {
            providers.push(...config.providers(dialogRef, config, dialogContainer));
          } else {
            providers.push(...config.providers);
          }
        }
        if (config.direction && (!userInjector || !userInjector.get(Directionality, null, { optional: true }))) {
          providers.push({
            provide: Directionality,
            useValue: getDirectionality(config.direction)
          });
        }
        return Injector.create({ parent: userInjector || fallbackInjector, providers });
      }
      /**
       * Removes a dialog from the array of open dialogs.
       * @param dialogRef Dialog to be removed.
       * @param emitEvent Whether to emit an event if this is the last dialog.
       */
      _removeOpenDialog(dialogRef, emitEvent) {
        const index = this.openDialogs.indexOf(dialogRef);
        if (index > -1) {
          this.openDialogs.splice(index, 1);
          if (!this.openDialogs.length) {
            this._ariaHiddenElements.forEach((previousValue, element) => {
              if (previousValue) {
                element.setAttribute("aria-hidden", previousValue);
              } else {
                element.removeAttribute("aria-hidden");
              }
            });
            this._ariaHiddenElements.clear();
            if (emitEvent) {
              this._getAfterAllClosed().next();
            }
          }
        }
      }
      /** Hides all of the content that isn't an overlay from assistive technology. */
      _hideNonDialogContentFromAssistiveTechnology() {
        const overlayContainer = this._overlayContainer.getContainerElement();
        if (overlayContainer.parentElement) {
          const siblings = overlayContainer.parentElement.children;
          for (let i = siblings.length - 1; i > -1; i--) {
            const sibling = siblings[i];
            if (sibling !== overlayContainer && sibling.nodeName !== "SCRIPT" && sibling.nodeName !== "STYLE" && !sibling.hasAttribute("aria-live")) {
              this._ariaHiddenElements.set(sibling, sibling.getAttribute("aria-hidden"));
              sibling.setAttribute("aria-hidden", "true");
            }
          }
        }
      }
      _getAfterAllClosed() {
        const parent = this._parentDialog;
        return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Dialog, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Dialog, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: Dialog, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    DialogModule = class _DialogModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _DialogModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _DialogModule, imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer], exports: [
        // Re-export the PortalModule so that people extending the `CdkDialogContainer`
        // don't have to remember to import it or be faced with an unhelpful error.
        PortalModule,
        CdkDialogContainer
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _DialogModule, providers: [Dialog], imports: [
        OverlayModule,
        PortalModule,
        A11yModule,
        // Re-export the PortalModule so that people extending the `CdkDialogContainer`
        // don't have to remember to import it or be faced with an unhelpful error.
        PortalModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: DialogModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer],
        exports: [
          // Re-export the PortalModule so that people extending the `CdkDialogContainer`
          // don't have to remember to import it or be faced with an unhelpful error.
          PortalModule,
          CdkDialogContainer
        ],
        providers: [Dialog]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/module-Ce6F7TNm.mjs
function parseCssTime(time) {
  if (time == null) {
    return null;
  }
  if (typeof time === "number") {
    return time;
  }
  if (time.endsWith("ms")) {
    return coerceNumberProperty(time.substring(0, time.length - 2));
  }
  if (time.endsWith("s")) {
    return coerceNumberProperty(time.substring(0, time.length - 1)) * 1e3;
  }
  if (time === "0") {
    return 0;
  }
  return null;
}
function _closeDialogVia(ref, interactionType, result) {
  ref._closeInteractionType = interactionType;
  return ref.close(result);
}
function getClosestDialog(element, openDialogs) {
  let parent = element.nativeElement.parentElement;
  while (parent && !parent.classList.contains("mat-mdc-dialog-container")) {
    parent = parent.parentElement;
  }
  return parent ? openDialogs.find((dialog) => dialog.id === parent.id) : null;
}
var MatDialogConfig, OPEN_CLASS, OPENING_CLASS, CLOSING_CLASS, OPEN_ANIMATION_DURATION, CLOSE_ANIMATION_DURATION, MatDialogContainer, TRANSITION_DURATION_PROPERTY, MatDialogState, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MatDialog, MatDialogClose, MatDialogLayoutSection, MatDialogTitle, MatDialogContent, MatDialogActions, DIRECTIVES, MatDialogModule;
var init_module_Ce6F7TNm = __esm({
  "node_modules/@angular/material/fesm2022/module-Ce6F7TNm.mjs"() {
    "use strict";
    init_dialog();
    init_overlay();
    init_portal();
    init_core();
    init_core();
    init_coercion();
    init_animation_DfMFjxHu();
    init_esm();
    init_operators();
    init_keycodes();
    init_a11y();
    init_scrolling();
    init_scrolling();
    init_common_module_cKSwHniA();
    MatDialogConfig = class {
      /**
       * Where the attached component should live in Angular's *logical* component tree.
       * This affects what is available for injection and the change detection order for the
       * component instantiated inside of the dialog. This does not affect where the dialog
       * content will be rendered.
       */
      viewContainerRef;
      /**
       * Injector used for the instantiation of the component to be attached. If provided,
       * takes precedence over the injector indirectly provided by `ViewContainerRef`.
       */
      injector;
      /** ID for the dialog. If omitted, a unique one will be generated. */
      id;
      /** The ARIA role of the dialog element. */
      role = "dialog";
      /** Custom class for the overlay pane. */
      panelClass = "";
      /** Whether the dialog has a backdrop. */
      hasBackdrop = true;
      /** Custom class for the backdrop. */
      backdropClass = "";
      /** Whether the user can use escape or clicking on the backdrop to close the modal. */
      disableClose = false;
      /** Function used to determine whether the dialog is allowed to close. */
      closePredicate;
      /** Width of the dialog. */
      width = "";
      /** Height of the dialog. */
      height = "";
      /** Min-width of the dialog. If a number is provided, assumes pixel units. */
      minWidth;
      /** Min-height of the dialog. If a number is provided, assumes pixel units. */
      minHeight;
      /** Max-width of the dialog. If a number is provided, assumes pixel units. */
      maxWidth;
      /** Max-height of the dialog. If a number is provided, assumes pixel units. */
      maxHeight;
      /** Position overrides. */
      position;
      /** Data being injected into the child component. */
      data = null;
      /** Layout direction for the dialog's content. */
      direction;
      /** ID of the element that describes the dialog. */
      ariaDescribedBy = null;
      /** ID of the element that labels the dialog. */
      ariaLabelledBy = null;
      /** Aria label to assign to the dialog element. */
      ariaLabel = null;
      /**
       * Whether this is a modal dialog. Used to set the `aria-modal` attribute. Off by default,
       * because it can interfere with other overlay-based components (e.g. `mat-select`) and because
       * it is redundant since the dialog marks all outside content as `aria-hidden` anyway.
       */
      ariaModal = false;
      /**
       * Where the dialog should focus on open.
       * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
       * AutoFocusTarget instead.
       */
      autoFocus = "first-tabbable";
      /**
       * Whether the dialog should restore focus to the
       * previously-focused element, after it's closed.
       */
      restoreFocus = true;
      /** Whether to wait for the opening animation to finish before trapping focus. */
      delayFocusTrap = true;
      /** Scroll strategy to be used for the dialog. */
      scrollStrategy;
      /**
       * Whether the dialog should close when the user goes backwards/forwards in history.
       * Note that this usually doesn't include clicking on links (unless the user is using
       * the `HashLocationStrategy`).
       */
      closeOnNavigation = true;
      /**
       * Duration of the enter animation in ms.
       * Should be a number, string type is deprecated.
       * @breaking-change 17.0.0 Remove string signature.
       */
      enterAnimationDuration;
      /**
       * Duration of the exit animation in ms.
       * Should be a number, string type is deprecated.
       * @breaking-change 17.0.0 Remove string signature.
       */
      exitAnimationDuration;
    };
    OPEN_CLASS = "mdc-dialog--open";
    OPENING_CLASS = "mdc-dialog--opening";
    CLOSING_CLASS = "mdc-dialog--closing";
    OPEN_ANIMATION_DURATION = 150;
    CLOSE_ANIMATION_DURATION = 75;
    MatDialogContainer = class _MatDialogContainer extends CdkDialogContainer {
      /** Emits when an animation state changes. */
      _animationStateChanged = new EventEmitter();
      /** Whether animations are enabled. */
      _animationsEnabled = !_animationsDisabled();
      /** Number of actions projected in the dialog. */
      _actionSectionCount = 0;
      /** Host element of the dialog container component. */
      _hostElement = this._elementRef.nativeElement;
      /** Duration of the dialog open animation. */
      _enterAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.enterAnimationDuration) ?? OPEN_ANIMATION_DURATION : 0;
      /** Duration of the dialog close animation. */
      _exitAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.exitAnimationDuration) ?? CLOSE_ANIMATION_DURATION : 0;
      /** Current timer for dialog animations. */
      _animationTimer = null;
      _contentAttached() {
        super._contentAttached();
        this._startOpenAnimation();
      }
      /** Starts the dialog open animation if enabled. */
      _startOpenAnimation() {
        this._animationStateChanged.emit({ state: "opening", totalTime: this._enterAnimationDuration });
        if (this._animationsEnabled) {
          this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._enterAnimationDuration}ms`);
          this._requestAnimationFrame(() => this._hostElement.classList.add(OPENING_CLASS, OPEN_CLASS));
          this._waitForAnimationToComplete(this._enterAnimationDuration, this._finishDialogOpen);
        } else {
          this._hostElement.classList.add(OPEN_CLASS);
          Promise.resolve().then(() => this._finishDialogOpen());
        }
      }
      /**
       * Starts the exit animation of the dialog if enabled. This method is
       * called by the dialog ref.
       */
      _startExitAnimation() {
        this._animationStateChanged.emit({ state: "closing", totalTime: this._exitAnimationDuration });
        this._hostElement.classList.remove(OPEN_CLASS);
        if (this._animationsEnabled) {
          this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._exitAnimationDuration}ms`);
          this._requestAnimationFrame(() => this._hostElement.classList.add(CLOSING_CLASS));
          this._waitForAnimationToComplete(this._exitAnimationDuration, this._finishDialogClose);
        } else {
          Promise.resolve().then(() => this._finishDialogClose());
        }
      }
      /**
       * Updates the number action sections.
       * @param delta Increase/decrease in the number of sections.
       */
      _updateActionSectionCount(delta) {
        this._actionSectionCount += delta;
        this._changeDetectorRef.markForCheck();
      }
      /**
       * Completes the dialog open by clearing potential animation classes, trapping
       * focus and emitting an opened event.
       */
      _finishDialogOpen = () => {
        this._clearAnimationClasses();
        this._openAnimationDone(this._enterAnimationDuration);
      };
      /**
       * Completes the dialog close by clearing potential animation classes, restoring
       * focus and emitting a closed event.
       */
      _finishDialogClose = () => {
        this._clearAnimationClasses();
        this._animationStateChanged.emit({ state: "closed", totalTime: this._exitAnimationDuration });
      };
      /** Clears all dialog animation classes. */
      _clearAnimationClasses() {
        this._hostElement.classList.remove(OPENING_CLASS, CLOSING_CLASS);
      }
      _waitForAnimationToComplete(duration, callback) {
        if (this._animationTimer !== null) {
          clearTimeout(this._animationTimer);
        }
        this._animationTimer = setTimeout(callback, duration);
      }
      /** Runs a callback in `requestAnimationFrame`, if available. */
      _requestAnimationFrame(callback) {
        this._ngZone.runOutsideAngular(() => {
          if (typeof requestAnimationFrame === "function") {
            requestAnimationFrame(callback);
          } else {
            callback();
          }
        });
      }
      _captureInitialFocus() {
        if (!this._config.delayFocusTrap) {
          this._trapFocus();
        }
      }
      /**
       * Callback for when the open dialog animation has finished. Intended to
       * be called by sub-classes that use different animation implementations.
       */
      _openAnimationDone(totalTime) {
        if (this._config.delayFocusTrap) {
          this._trapFocus();
        }
        this._animationStateChanged.next({ state: "opened", totalTime });
      }
      ngOnDestroy() {
        super.ngOnDestroy();
        if (this._animationTimer !== null) {
          clearTimeout(this._animationTimer);
        }
      }
      attachComponentPortal(portal) {
        const ref = super.attachComponentPortal(portal);
        ref.location.nativeElement.classList.add("mat-mdc-dialog-component-host");
        return ref;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDialogContainer, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatDialogContainer, isStandalone: true, selector: "mat-dialog-container", host: { attributes: { "tabindex": "-1" }, properties: { "attr.aria-modal": "_config.ariaModal", "id": "_config.id", "attr.role": "_config.role", "attr.aria-labelledby": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]", "attr.aria-label": "_config.ariaLabel", "attr.aria-describedby": "_config.ariaDescribedBy || null", "class._mat-animation-noopable": "!_animationsEnabled", "class.mat-mdc-dialog-container-with-actions": "_actionSectionCount > 0" }, classAttribute: "mat-mdc-dialog-container mdc-dialog" }, usesInheritance: true, ngImport: core_exports, template: '<div class="mat-mdc-dialog-inner-container mdc-dialog__container">\n  <div class="mat-mdc-dialog-surface mdc-dialog__surface">\n    <ng-template cdkPortalOutlet />\n  </div>\n</div>\n', styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mat-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;box-sizing:border-box;min-height:52px;margin:0;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}\n'], dependencies: [{ kind: "directive", type: CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }], changeDetection: ChangeDetectionStrategy.Default, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDialogContainer, decorators: [{
      type: Component,
      args: [{ selector: "mat-dialog-container", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.Default, imports: [CdkPortalOutlet], host: {
        "class": "mat-mdc-dialog-container mdc-dialog",
        "tabindex": "-1",
        "[attr.aria-modal]": "_config.ariaModal",
        "[id]": "_config.id",
        "[attr.role]": "_config.role",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null",
        "[class._mat-animation-noopable]": "!_animationsEnabled",
        "[class.mat-mdc-dialog-container-with-actions]": "_actionSectionCount > 0"
      }, template: '<div class="mat-mdc-dialog-inner-container mdc-dialog__container">\n  <div class="mat-mdc-dialog-surface mdc-dialog__surface">\n    <ng-template cdkPortalOutlet />\n  </div>\n</div>\n', styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mat-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;box-sizing:border-box;min-height:52px;margin:0;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}\n'] }]
    }] });
    TRANSITION_DURATION_PROPERTY = "--mat-dialog-transition-duration";
    (function(MatDialogState2) {
      MatDialogState2[MatDialogState2["OPEN"] = 0] = "OPEN";
      MatDialogState2[MatDialogState2["CLOSING"] = 1] = "CLOSING";
      MatDialogState2[MatDialogState2["CLOSED"] = 2] = "CLOSED";
    })(MatDialogState || (MatDialogState = {}));
    MatDialogRef = class {
      _ref;
      _config;
      _containerInstance;
      /** The instance of component opened into the dialog. */
      componentInstance;
      /**
       * `ComponentRef` of the component opened into the dialog. Will be
       * null when the dialog is opened using a `TemplateRef`.
       */
      componentRef;
      /** Whether the user is allowed to close the dialog. */
      disableClose;
      /** Unique ID for the dialog. */
      id;
      /** Subject for notifying the user that the dialog has finished opening. */
      _afterOpened = new Subject();
      /** Subject for notifying the user that the dialog has started closing. */
      _beforeClosed = new Subject();
      /** Result to be passed to afterClosed. */
      _result;
      /** Handle to the timeout that's running as a fallback in case the exit animation doesn't fire. */
      _closeFallbackTimeout;
      /** Current state of the dialog. */
      _state = MatDialogState.OPEN;
      // TODO(crisbeto): we shouldn't have to declare this property, because `DialogRef.close`
      // already has a second `options` parameter that we can use. The problem is that internal tests
      // have assertions like `expect(MatDialogRef.close).toHaveBeenCalledWith(foo)` which will break,
      // because it'll be called with two arguments by things like `MatDialogClose`.
      /** Interaction that caused the dialog to close. */
      _closeInteractionType;
      constructor(_ref, _config, _containerInstance) {
        this._ref = _ref;
        this._config = _config;
        this._containerInstance = _containerInstance;
        this.disableClose = _config.disableClose;
        this.id = _ref.id;
        _ref.addPanelClass("mat-mdc-dialog-panel");
        _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "opened"), take(1)).subscribe(() => {
          this._afterOpened.next();
          this._afterOpened.complete();
        });
        _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closed"), take(1)).subscribe(() => {
          clearTimeout(this._closeFallbackTimeout);
          this._finishDialogClose();
        });
        _ref.overlayRef.detachments().subscribe(() => {
          this._beforeClosed.next(this._result);
          this._beforeClosed.complete();
          this._finishDialogClose();
        });
        merge(this.backdropClick(), this.keydownEvents().pipe(filter((event) => event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)))).subscribe((event) => {
          if (!this.disableClose) {
            event.preventDefault();
            _closeDialogVia(this, event.type === "keydown" ? "keyboard" : "mouse");
          }
        });
      }
      /**
       * Close the dialog.
       * @param dialogResult Optional result to return to the dialog opener.
       */
      close(dialogResult) {
        const closePredicate = this._config.closePredicate;
        if (closePredicate && !closePredicate(dialogResult, this._config, this.componentInstance)) {
          return;
        }
        this._result = dialogResult;
        this._containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closing"), take(1)).subscribe((event) => {
          this._beforeClosed.next(dialogResult);
          this._beforeClosed.complete();
          this._ref.overlayRef.detachBackdrop();
          this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), event.totalTime + 100);
        });
        this._state = MatDialogState.CLOSING;
        this._containerInstance._startExitAnimation();
      }
      /**
       * Gets an observable that is notified when the dialog is finished opening.
       */
      afterOpened() {
        return this._afterOpened;
      }
      /**
       * Gets an observable that is notified when the dialog is finished closing.
       */
      afterClosed() {
        return this._ref.closed;
      }
      /**
       * Gets an observable that is notified when the dialog has started closing.
       */
      beforeClosed() {
        return this._beforeClosed;
      }
      /**
       * Gets an observable that emits when the overlay's backdrop has been clicked.
       */
      backdropClick() {
        return this._ref.backdropClick;
      }
      /**
       * Gets an observable that emits when keydown events are targeted on the overlay.
       */
      keydownEvents() {
        return this._ref.keydownEvents;
      }
      /**
       * Updates the dialog's position.
       * @param position New dialog position.
       */
      updatePosition(position) {
        let strategy = this._ref.config.positionStrategy;
        if (position && (position.left || position.right)) {
          position.left ? strategy.left(position.left) : strategy.right(position.right);
        } else {
          strategy.centerHorizontally();
        }
        if (position && (position.top || position.bottom)) {
          position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
        } else {
          strategy.centerVertically();
        }
        this._ref.updatePosition();
        return this;
      }
      /**
       * Updates the dialog's width and height.
       * @param width New width of the dialog.
       * @param height New height of the dialog.
       */
      updateSize(width = "", height = "") {
        this._ref.updateSize(width, height);
        return this;
      }
      /** Add a CSS class or an array of classes to the overlay pane. */
      addPanelClass(classes) {
        this._ref.addPanelClass(classes);
        return this;
      }
      /** Remove a CSS class or an array of classes from the overlay pane. */
      removePanelClass(classes) {
        this._ref.removePanelClass(classes);
        return this;
      }
      /** Gets the current state of the dialog's lifecycle. */
      getState() {
        return this._state;
      }
      /**
       * Finishes the dialog close by updating the state of the dialog
       * and disposing the overlay.
       */
      _finishDialogClose() {
        this._state = MatDialogState.CLOSED;
        this._ref.close(this._result, { focusOrigin: this._closeInteractionType });
        this.componentInstance = null;
      }
    };
    MAT_DIALOG_DATA = new InjectionToken("MatMdcDialogData");
    MAT_DIALOG_DEFAULT_OPTIONS = new InjectionToken("mat-mdc-dialog-default-options");
    MAT_DIALOG_SCROLL_STRATEGY = new InjectionToken("mat-mdc-dialog-scroll-strategy", {
      providedIn: "root",
      factory: () => {
        const injector = inject(Injector);
        return () => createBlockScrollStrategy(injector);
      }
    });
    MatDialog = class _MatDialog {
      _defaultOptions = inject(MAT_DIALOG_DEFAULT_OPTIONS, { optional: true });
      _scrollStrategy = inject(MAT_DIALOG_SCROLL_STRATEGY);
      _parentDialog = inject(_MatDialog, { optional: true, skipSelf: true });
      _idGenerator = inject(_IdGenerator);
      _injector = inject(Injector);
      _dialog = inject(Dialog);
      _animationsDisabled = _animationsDisabled();
      _openDialogsAtThisLevel = [];
      _afterAllClosedAtThisLevel = new Subject();
      _afterOpenedAtThisLevel = new Subject();
      dialogConfigClass = MatDialogConfig;
      _dialogRefConstructor;
      _dialogContainerType;
      _dialogDataToken;
      /** Keeps track of the currently-open dialogs. */
      get openDialogs() {
        return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
      }
      /** Stream that emits when a dialog has been opened. */
      get afterOpened() {
        return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
      }
      _getAfterAllClosed() {
        const parent = this._parentDialog;
        return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
      }
      /**
       * Stream that emits when all open dialog have finished closing.
       * Will emit on subscribe if there are no open dialogs to begin with.
       */
      afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
      constructor() {
        this._dialogRefConstructor = MatDialogRef;
        this._dialogContainerType = MatDialogContainer;
        this._dialogDataToken = MAT_DIALOG_DATA;
      }
      open(componentOrTemplateRef, config) {
        let dialogRef;
        config = __spreadValues(__spreadValues({}, this._defaultOptions || new MatDialogConfig()), config);
        config.id = config.id || this._idGenerator.getId("mat-mdc-dialog-");
        config.scrollStrategy = config.scrollStrategy || this._scrollStrategy();
        const cdkRef = this._dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, config), {
          positionStrategy: createGlobalPositionStrategy(this._injector).centerHorizontally().centerVertically(),
          // Disable closing since we need to sync it up to the animation ourselves.
          disableClose: true,
          // Closing is tied to our animation so the close predicate has to be implemented separately.
          closePredicate: void 0,
          // Disable closing on destroy, because this service cleans up its open dialogs as well.
          // We want to do the cleanup here, rather than the CDK service, because the CDK destroys
          // the dialogs immediately whereas we want it to wait for the animations to finish.
          closeOnDestroy: false,
          // Disable closing on detachments so that we can sync up the animation.
          // The Material dialog ref handles this manually.
          closeOnOverlayDetachments: false,
          disableAnimations: this._animationsDisabled || config.enterAnimationDuration?.toLocaleString() === "0" || config.exitAnimationDuration?.toString() === "0",
          container: {
            type: this._dialogContainerType,
            providers: () => [
              // Provide our config as the CDK config as well since it has the same interface as the
              // CDK one, but it contains the actual values passed in by the user for things like
              // `disableClose` which we disable for the CDK dialog since we handle it ourselves.
              { provide: this.dialogConfigClass, useValue: config },
              { provide: DialogConfig, useValue: config }
            ]
          },
          templateContext: () => ({ dialogRef }),
          providers: (ref, cdkConfig, dialogContainer) => {
            dialogRef = new this._dialogRefConstructor(ref, config, dialogContainer);
            dialogRef.updatePosition(config?.position);
            return [
              { provide: this._dialogContainerType, useValue: dialogContainer },
              { provide: this._dialogDataToken, useValue: cdkConfig.data },
              { provide: this._dialogRefConstructor, useValue: dialogRef }
            ];
          }
        }));
        dialogRef.componentRef = cdkRef.componentRef;
        dialogRef.componentInstance = cdkRef.componentInstance;
        this.openDialogs.push(dialogRef);
        this.afterOpened.next(dialogRef);
        dialogRef.afterClosed().subscribe(() => {
          const index = this.openDialogs.indexOf(dialogRef);
          if (index > -1) {
            this.openDialogs.splice(index, 1);
            if (!this.openDialogs.length) {
              this._getAfterAllClosed().next();
            }
          }
        });
        return dialogRef;
      }
      /**
       * Closes all of the currently-open dialogs.
       */
      closeAll() {
        this._closeDialogs(this.openDialogs);
      }
      /**
       * Finds an open dialog by its id.
       * @param id ID to use when looking up the dialog.
       */
      getDialogById(id) {
        return this.openDialogs.find((dialog) => dialog.id === id);
      }
      ngOnDestroy() {
        this._closeDialogs(this._openDialogsAtThisLevel);
        this._afterAllClosedAtThisLevel.complete();
        this._afterOpenedAtThisLevel.complete();
      }
      _closeDialogs(dialogs) {
        let i = dialogs.length;
        while (i--) {
          dialogs[i].close();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDialog, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDialog, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDialog, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    MatDialogClose = class _MatDialogClose {
      dialogRef = inject(MatDialogRef, { optional: true });
      _elementRef = inject(ElementRef);
      _dialog = inject(MatDialog);
      /** Screen-reader label for the button. */
      ariaLabel;
      /** Default to "button" to prevents accidental form submits. */
      type = "button";
      /** Dialog close input. */
      dialogResult;
      _matDialogClose;
      constructor() {
      }
      ngOnInit() {
        if (!this.dialogRef) {
          this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
        }
      }
      ngOnChanges(changes) {
        const proxiedChange = changes["_matDialogClose"] || changes["_matDialogCloseResult"];
        if (proxiedChange) {
          this.dialogResult = proxiedChange.currentValue;
        }
      }
      _onButtonClick(event) {
        _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? "keyboard" : "mouse", this.dialogResult);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDialogClose, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatDialogClose, isStandalone: true, selector: "[mat-dialog-close], [matDialogClose]", inputs: { ariaLabel: ["aria-label", "ariaLabel"], type: "type", dialogResult: ["mat-dialog-close", "dialogResult"], _matDialogClose: ["matDialogClose", "_matDialogClose"] }, host: { listeners: { "click": "_onButtonClick($event)" }, properties: { "attr.aria-label": "ariaLabel || null", "attr.type": "type" } }, exportAs: ["matDialogClose"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDialogClose, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-dialog-close], [matDialogClose]",
        exportAs: "matDialogClose",
        host: {
          "(click)": "_onButtonClick($event)",
          "[attr.aria-label]": "ariaLabel || null",
          "[attr.type]": "type"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }], type: [{
      type: Input
    }], dialogResult: [{
      type: Input,
      args: ["mat-dialog-close"]
    }], _matDialogClose: [{
      type: Input,
      args: ["matDialogClose"]
    }] } });
    MatDialogLayoutSection = class _MatDialogLayoutSection {
      _dialogRef = inject(MatDialogRef, { optional: true });
      _elementRef = inject(ElementRef);
      _dialog = inject(MatDialog);
      constructor() {
      }
      ngOnInit() {
        if (!this._dialogRef) {
          this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
        }
        if (this._dialogRef) {
          Promise.resolve().then(() => {
            this._onAdd();
          });
        }
      }
      ngOnDestroy() {
        const instance = this._dialogRef?._containerInstance;
        if (instance) {
          Promise.resolve().then(() => {
            this._onRemove();
          });
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDialogLayoutSection, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatDialogLayoutSection, isStandalone: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDialogLayoutSection, decorators: [{
      type: Directive
    }], ctorParameters: () => [] });
    MatDialogTitle = class _MatDialogTitle extends MatDialogLayoutSection {
      id = inject(_IdGenerator).getId("mat-mdc-dialog-title-");
      _onAdd() {
        this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id);
      }
      _onRemove() {
        this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDialogTitle, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatDialogTitle, isStandalone: true, selector: "[mat-dialog-title], [matDialogTitle]", inputs: { id: "id" }, host: { properties: { "id": "id" }, classAttribute: "mat-mdc-dialog-title mdc-dialog__title" }, exportAs: ["matDialogTitle"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDialogTitle, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-dialog-title], [matDialogTitle]",
        exportAs: "matDialogTitle",
        host: {
          "class": "mat-mdc-dialog-title mdc-dialog__title",
          "[id]": "id"
        }
      }]
    }], propDecorators: { id: [{
      type: Input
    }] } });
    MatDialogContent = class _MatDialogContent {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDialogContent, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatDialogContent, isStandalone: true, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]", host: { classAttribute: "mat-mdc-dialog-content mdc-dialog__content" }, hostDirectives: [{ directive: CdkScrollable }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDialogContent, decorators: [{
      type: Directive,
      args: [{
        selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
        host: { "class": "mat-mdc-dialog-content mdc-dialog__content" },
        hostDirectives: [CdkScrollable]
      }]
    }] });
    MatDialogActions = class _MatDialogActions extends MatDialogLayoutSection {
      /**
       * Horizontal alignment of action buttons.
       */
      align;
      _onAdd() {
        this._dialogRef._containerInstance?._updateActionSectionCount?.(1);
      }
      _onRemove() {
        this._dialogRef._containerInstance?._updateActionSectionCount?.(-1);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDialogActions, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatDialogActions, isStandalone: true, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: { align: "align" }, host: { properties: { "class.mat-mdc-dialog-actions-align-start": 'align === "start"', "class.mat-mdc-dialog-actions-align-center": 'align === "center"', "class.mat-mdc-dialog-actions-align-end": 'align === "end"' }, classAttribute: "mat-mdc-dialog-actions mdc-dialog__actions" }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDialogActions, decorators: [{
      type: Directive,
      args: [{
        selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
        host: {
          "class": "mat-mdc-dialog-actions mdc-dialog__actions",
          "[class.mat-mdc-dialog-actions-align-start]": 'align === "start"',
          "[class.mat-mdc-dialog-actions-align-center]": 'align === "center"',
          "[class.mat-mdc-dialog-actions-align-end]": 'align === "end"'
        }
      }]
    }], propDecorators: { align: [{
      type: Input
    }] } });
    DIRECTIVES = [
      MatDialogContainer,
      MatDialogClose,
      MatDialogTitle,
      MatDialogActions,
      MatDialogContent
    ];
    MatDialogModule = class _MatDialogModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDialogModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDialogModule, imports: [
        DialogModule,
        OverlayModule,
        PortalModule,
        MatCommonModule,
        MatDialogContainer,
        MatDialogClose,
        MatDialogTitle,
        MatDialogActions,
        MatDialogContent
      ], exports: [
        MatCommonModule,
        MatDialogContainer,
        MatDialogClose,
        MatDialogTitle,
        MatDialogActions,
        MatDialogContent
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDialogModule, providers: [MatDialog], imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDialogModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, ...DIRECTIVES],
        exports: [MatCommonModule, ...DIRECTIVES],
        providers: [MatDialog]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/dialog.mjs
var init_dialog2 = __esm({
  "node_modules/@angular/material/fesm2022/dialog.mjs"() {
    "use strict";
    init_module_Ce6F7TNm();
  }
});

// node_modules/@angular/material/fesm2022/internal-form-field-D5iFxU6d.mjs
var _MatInternalFormField;
var init_internal_form_field_D5iFxU6d = __esm({
  "node_modules/@angular/material/fesm2022/internal-form-field-D5iFxU6d.mjs"() {
    "use strict";
    init_core();
    init_core();
    _MatInternalFormField = class __MatInternalFormField {
      /** Position of the label relative to the content. */
      labelPosition;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __MatInternalFormField, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: __MatInternalFormField, isStandalone: true, selector: "div[mat-internal-form-field]", inputs: { labelPosition: "labelPosition" }, host: { properties: { "class.mdc-form-field--align-end": 'labelPosition === "before"' }, classAttribute: "mdc-form-field mat-internal-form-field" }, ngImport: core_exports, template: "<ng-content></ng-content>", isInline: true, styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatInternalFormField, decorators: [{
      type: Component,
      args: [{ selector: "div[mat-internal-form-field]", template: "<ng-content></ng-content>", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
        "class": "mdc-form-field mat-internal-form-field",
        "[class.mdc-form-field--align-end]": 'labelPosition === "before"'
      }, styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"] }]
    }], propDecorators: { labelPosition: [{
      type: Input,
      args: [{ required: true }]
    }] } });
  }
});

// node_modules/@angular/material/fesm2022/slide-toggle.mjs
var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, MatSlideToggleChange, MatSlideToggle, MatSlideToggleModule;
var init_slide_toggle = __esm({
  "node_modules/@angular/material/fesm2022/slide-toggle.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_forms();
    init_a11y();
    init_private();
    init_animation_DfMFjxHu();
    init_structural_styles_CObeNzjn();
    init_ripple_BYgV4oZC();
    init_internal_form_field_D5iFxU6d();
    init_common_module_cKSwHniA();
    MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("mat-slide-toggle-default-options", {
      providedIn: "root",
      factory: () => ({ disableToggleValue: false, hideIcon: false, disabledInteractive: false })
    });
    MatSlideToggleChange = class {
      source;
      checked;
      constructor(source, checked) {
        this.source = source;
        this.checked = checked;
      }
    };
    MatSlideToggle = class _MatSlideToggle {
      _elementRef = inject(ElementRef);
      _focusMonitor = inject(FocusMonitor);
      _changeDetectorRef = inject(ChangeDetectorRef);
      defaults = inject(MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS);
      _onChange = (_) => {
      };
      _onTouched = () => {
      };
      _validatorOnChange = () => {
      };
      _uniqueId;
      _checked = false;
      _createChangeEvent(isChecked) {
        return new MatSlideToggleChange(this, isChecked);
      }
      /** Unique ID for the label element. */
      _labelId;
      /** Returns the unique id for the visual hidden button. */
      get buttonId() {
        return `${this.id || this._uniqueId}-button`;
      }
      /** Reference to the MDC switch element. */
      _switchElement;
      /** Focuses the slide-toggle. */
      focus() {
        this._switchElement.nativeElement.focus();
      }
      /** Whether noop animations are enabled. */
      _noopAnimations = _animationsDisabled();
      /** Whether the slide toggle is currently focused. */
      _focused;
      /** Name value will be applied to the input element if present. */
      name = null;
      /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */
      id;
      /** Whether the label should appear after or before the slide-toggle. Defaults to 'after'. */
      labelPosition = "after";
      /** Used to set the aria-label attribute on the underlying input element. */
      ariaLabel = null;
      /** Used to set the aria-labelledby attribute on the underlying input element. */
      ariaLabelledby = null;
      /** Used to set the aria-describedby attribute on the underlying input element. */
      ariaDescribedby;
      /** Whether the slide-toggle is required. */
      required;
      // TODO(crisbeto): this should be a ThemePalette, but some internal apps were abusing
      // the lack of type checking previously and assigning random strings.
      /**
       * Theme color of the slide toggle. This API is supported in M2 themes only,
       * it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/slide-toggle/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      color;
      /** Whether the slide toggle is disabled. */
      disabled = false;
      /** Whether the slide toggle has a ripple. */
      disableRipple = false;
      /** Tabindex of slide toggle. */
      tabIndex = 0;
      /** Whether the slide-toggle element is checked or not. */
      get checked() {
        return this._checked;
      }
      set checked(value) {
        this._checked = value;
        this._changeDetectorRef.markForCheck();
      }
      /** Whether to hide the icon inside of the slide toggle. */
      hideIcon;
      /** Whether the slide toggle should remain interactive when it is disabled. */
      disabledInteractive;
      /** An event will be dispatched each time the slide-toggle changes its value. */
      change = new EventEmitter();
      /**
       * An event will be dispatched each time the slide-toggle input is toggled.
       * This event is always emitted when the user toggles the slide toggle, but this does not mean
       * the slide toggle's value has changed.
       */
      toggleChange = new EventEmitter();
      /** Returns the unique id for the visual hidden input. */
      get inputId() {
        return `${this.id || this._uniqueId}-input`;
      }
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
        const tabIndex = inject(new HostAttributeToken("tabindex"), { optional: true });
        const defaults = this.defaults;
        this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
        this.color = defaults.color || "accent";
        this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-slide-toggle-");
        this.hideIcon = defaults.hideIcon ?? false;
        this.disabledInteractive = defaults.disabledInteractive ?? false;
        this._labelId = this._uniqueId + "-label";
      }
      ngAfterContentInit() {
        this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
          if (focusOrigin === "keyboard" || focusOrigin === "program") {
            this._focused = true;
            this._changeDetectorRef.markForCheck();
          } else if (!focusOrigin) {
            Promise.resolve().then(() => {
              this._focused = false;
              this._onTouched();
              this._changeDetectorRef.markForCheck();
            });
          }
        });
      }
      ngOnChanges(changes) {
        if (changes["required"]) {
          this._validatorOnChange();
        }
      }
      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
      }
      /** Implemented as part of ControlValueAccessor. */
      writeValue(value) {
        this.checked = !!value;
      }
      /** Implemented as part of ControlValueAccessor. */
      registerOnChange(fn) {
        this._onChange = fn;
      }
      /** Implemented as part of ControlValueAccessor. */
      registerOnTouched(fn) {
        this._onTouched = fn;
      }
      /** Implemented as a part of Validator. */
      validate(control) {
        return this.required && control.value !== true ? { "required": true } : null;
      }
      /** Implemented as a part of Validator. */
      registerOnValidatorChange(fn) {
        this._validatorOnChange = fn;
      }
      /** Implemented as a part of ControlValueAccessor. */
      setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
      }
      /** Toggles the checked state of the slide-toggle. */
      toggle() {
        this.checked = !this.checked;
        this._onChange(this.checked);
      }
      /**
       * Emits a change event on the `change` output. Also notifies the FormControl about the change.
       */
      _emitChangeEvent() {
        this._onChange(this.checked);
        this.change.emit(this._createChangeEvent(this.checked));
      }
      /** Method being called whenever the underlying button is clicked. */
      _handleClick() {
        if (!this.disabled) {
          this.toggleChange.emit();
          if (!this.defaults.disableToggleValue) {
            this.checked = !this.checked;
            this._onChange(this.checked);
            this.change.emit(new MatSlideToggleChange(this, this.checked));
          }
        }
      }
      _getAriaLabelledBy() {
        if (this.ariaLabelledby) {
          return this.ariaLabelledby;
        }
        return this.ariaLabel ? null : this._labelId;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSlideToggle, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatSlideToggle, isStandalone: true, selector: "mat-slide-toggle", inputs: { name: "name", id: "id", labelPosition: "labelPosition", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], ariaDescribedby: ["aria-describedby", "ariaDescribedby"], required: ["required", "required", booleanAttribute], color: "color", disabled: ["disabled", "disabled", booleanAttribute], disableRipple: ["disableRipple", "disableRipple", booleanAttribute], tabIndex: ["tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)], checked: ["checked", "checked", booleanAttribute], hideIcon: ["hideIcon", "hideIcon", booleanAttribute], disabledInteractive: ["disabledInteractive", "disabledInteractive", booleanAttribute] }, outputs: { change: "change", toggleChange: "toggleChange" }, host: { properties: { "id": "id", "attr.tabindex": "null", "attr.aria-label": "null", "attr.name": "null", "attr.aria-labelledby": "null", "class.mat-mdc-slide-toggle-focused": "_focused", "class.mat-mdc-slide-toggle-checked": "checked", "class._mat-animation-noopable": "_noopAnimations", "class": 'color ? "mat-" + color : ""' }, classAttribute: "mat-mdc-slide-toggle" }, providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => _MatSlideToggle),
          multi: true
        },
        {
          provide: NG_VALIDATORS,
          useExisting: _MatSlideToggle,
          multi: true
        }
      ], viewQueries: [{ propertyName: "_switchElement", first: true, predicate: ["switch"], descendants: true }], exportAs: ["matSlideToggle"], usesOnChanges: true, ngImport: core_exports, template: `<div mat-internal-form-field [labelPosition]="labelPosition">
  <button
    class="mdc-switch"
    role="switch"
    type="button"
    [class.mdc-switch--selected]="checked"
    [class.mdc-switch--unselected]="!checked"
    [class.mdc-switch--checked]="checked"
    [class.mdc-switch--disabled]="disabled"
    [class.mat-mdc-slide-toggle-disabled-interactive]="disabledInteractive"
    [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
    [disabled]="disabled && !disabledInteractive"
    [attr.id]="buttonId"
    [attr.name]="name"
    [attr.aria-label]="ariaLabel"
    [attr.aria-labelledby]="_getAriaLabelledBy()"
    [attr.aria-describedby]="ariaDescribedby"
    [attr.aria-required]="required || null"
    [attr.aria-checked]="checked"
    [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
    (click)="_handleClick()"
    #switch>
    <span class="mdc-switch__track"></span>
    <span class="mdc-switch__handle-track">
      <span class="mdc-switch__handle">
        <span class="mdc-switch__shadow">
          <span class="mdc-elevation-overlay"></span>
        </span>
        <span class="mdc-switch__ripple">
          <span class="mat-mdc-slide-toggle-ripple mat-focus-indicator" mat-ripple
            [matRippleTrigger]="switch"
            [matRippleDisabled]="disableRipple || disabled"
            [matRippleCentered]="true"></span>
        </span>
        @if (!hideIcon) {
          <span class="mdc-switch__icons">
            <svg
              class="mdc-switch__icon mdc-switch__icon--on"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
            </svg>
            <svg
              class="mdc-switch__icon mdc-switch__icon--off"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M20 13H4v-2h16v2z" />
            </svg>
          </span>
        }
      </span>
    </span>
  </button>

  <!--
    Clicking on the label will trigger another click event from the button.
    Stop propagation here so other listeners further up in the DOM don't execute twice.
  -->
  <label class="mdc-label" [for]="buttonId" [attr.id]="_labelId" (click)="$event.stopPropagation()">
    <ng-content></ng-content>
  </label>
</div>
`, styles: ['.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative;width:var(--mat-slide-toggle-track-width, 52px)}.mdc-switch.mdc-switch--disabled{cursor:default;pointer-events:none}.mdc-switch.mat-mdc-slide-toggle-disabled-interactive{pointer-events:auto}.mdc-switch__track{overflow:hidden;position:relative;width:100%;height:var(--mat-slide-toggle-track-height, 32px);border-radius:var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full))}.mdc-switch--disabled.mdc-switch .mdc-switch__track{opacity:var(--mat-slide-toggle-disabled-track-opacity, 0.12)}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%;border-width:var(--mat-slide-toggle-track-outline-width, 2px);border-color:var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline))}.mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track::after{border-width:var(--mat-slide-toggle-selected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-selected-track-outline-color, transparent)}.mdc-switch--disabled .mdc-switch__track::before,.mdc-switch--disabled .mdc-switch__track::after{border-width:var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface))}@media(forced-colors: active){.mdc-switch__track{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0);background:var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before,.mdc-switch.mdc-switch--disabled .mdc-switch__track::before{background:var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch__track::after{transform:translateX(-100%);background:var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary))}[dir=rtl] .mdc-switch__track::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::after{transform:translateX(0)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after,.mdc-switch.mdc-switch--disabled .mdc-switch__track::after{background:var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface))}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0);width:calc(100% - var(--mat-slide-toggle-handle-width))}[dir=rtl] .mdc-switch__handle-track{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto;transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1);width:var(--mat-slide-toggle-handle-width);height:var(--mat-slide-toggle-handle-height);border-radius:var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full))}[dir=rtl] .mdc-switch__handle{left:auto;right:0}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-slide-toggle-unselected-handle-size, 16px);height:var(--mat-slide-toggle-unselected-handle-size, 16px);margin:var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-slide-toggle-selected-handle-size, 24px);height:var(--mat-slide-toggle-selected-handle-size, 24px);margin:var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-slide-toggle-with-icon-handle-size, 24px);height:var(--mat-slide-toggle-with-icon-handle-size, 24px)}.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-slide-toggle-pressed-handle-size, 28px);height:var(--mat-slide-toggle-pressed-handle-size, 28px)}.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px)}.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-selected-handle-opacity, 1)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38)}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media(forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary))}.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after,.mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface))}.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline))}.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface))}.mdc-switch__handle::before{background:var(--mat-slide-toggle-handle-surface-color)}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-handle-elevation-shadow)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow,.mdc-switch.mdc-switch--disabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-disabled-handle-elevation-shadow)}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1;width:var(--mat-slide-toggle-state-layer-size, 40px);height:var(--mat-slide-toggle-state-layer-size, 40px)}.mdc-switch__ripple::after{content:"";opacity:0}.mdc-switch--disabled .mdc-switch__ripple::after{display:none}.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after{display:block}.mdc-switch:hover .mdc-switch__ripple::after{transition:75ms opacity cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after,.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch__icons{position:relative;height:100%;width:100%;z-index:1;transform:translateZ(0)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38)}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--unselected .mdc-switch__icon{width:var(--mat-slide-toggle-unselected-icon-size, 16px);height:var(--mat-slide-toggle-unselected-icon-size, 16px);fill:var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__icon{width:var(--mat-slide-toggle-selected-icon-size, 16px);height:var(--mat-slide-toggle-selected-icon-size, 16px);fill:var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container))}.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface))}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{-webkit-user-select:none;user-select:none;display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-internal-form-field{color:var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mat-slide-toggle-disabled-label-text-color)}\n'], dependencies: [{ kind: "directive", type: MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }, { kind: "component", type: _MatInternalFormField, selector: "div[mat-internal-form-field]", inputs: ["labelPosition"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSlideToggle, decorators: [{
      type: Component,
      args: [{ selector: "mat-slide-toggle", host: {
        "class": "mat-mdc-slide-toggle",
        "[id]": "id",
        // Needs to be removed since it causes some a11y issues (see #21266).
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.name]": "null",
        "[attr.aria-labelledby]": "null",
        "[class.mat-mdc-slide-toggle-focused]": "_focused",
        "[class.mat-mdc-slide-toggle-checked]": "checked",
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[class]": 'color ? "mat-" + color : ""'
      }, exportAs: "matSlideToggle", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => MatSlideToggle),
          multi: true
        },
        {
          provide: NG_VALIDATORS,
          useExisting: MatSlideToggle,
          multi: true
        }
      ], imports: [MatRipple, _MatInternalFormField], template: `<div mat-internal-form-field [labelPosition]="labelPosition">
  <button
    class="mdc-switch"
    role="switch"
    type="button"
    [class.mdc-switch--selected]="checked"
    [class.mdc-switch--unselected]="!checked"
    [class.mdc-switch--checked]="checked"
    [class.mdc-switch--disabled]="disabled"
    [class.mat-mdc-slide-toggle-disabled-interactive]="disabledInteractive"
    [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
    [disabled]="disabled && !disabledInteractive"
    [attr.id]="buttonId"
    [attr.name]="name"
    [attr.aria-label]="ariaLabel"
    [attr.aria-labelledby]="_getAriaLabelledBy()"
    [attr.aria-describedby]="ariaDescribedby"
    [attr.aria-required]="required || null"
    [attr.aria-checked]="checked"
    [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
    (click)="_handleClick()"
    #switch>
    <span class="mdc-switch__track"></span>
    <span class="mdc-switch__handle-track">
      <span class="mdc-switch__handle">
        <span class="mdc-switch__shadow">
          <span class="mdc-elevation-overlay"></span>
        </span>
        <span class="mdc-switch__ripple">
          <span class="mat-mdc-slide-toggle-ripple mat-focus-indicator" mat-ripple
            [matRippleTrigger]="switch"
            [matRippleDisabled]="disableRipple || disabled"
            [matRippleCentered]="true"></span>
        </span>
        @if (!hideIcon) {
          <span class="mdc-switch__icons">
            <svg
              class="mdc-switch__icon mdc-switch__icon--on"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
            </svg>
            <svg
              class="mdc-switch__icon mdc-switch__icon--off"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M20 13H4v-2h16v2z" />
            </svg>
          </span>
        }
      </span>
    </span>
  </button>

  <!--
    Clicking on the label will trigger another click event from the button.
    Stop propagation here so other listeners further up in the DOM don't execute twice.
  -->
  <label class="mdc-label" [for]="buttonId" [attr.id]="_labelId" (click)="$event.stopPropagation()">
    <ng-content></ng-content>
  </label>
</div>
`, styles: ['.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative;width:var(--mat-slide-toggle-track-width, 52px)}.mdc-switch.mdc-switch--disabled{cursor:default;pointer-events:none}.mdc-switch.mat-mdc-slide-toggle-disabled-interactive{pointer-events:auto}.mdc-switch__track{overflow:hidden;position:relative;width:100%;height:var(--mat-slide-toggle-track-height, 32px);border-radius:var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full))}.mdc-switch--disabled.mdc-switch .mdc-switch__track{opacity:var(--mat-slide-toggle-disabled-track-opacity, 0.12)}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%;border-width:var(--mat-slide-toggle-track-outline-width, 2px);border-color:var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline))}.mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track::after{border-width:var(--mat-slide-toggle-selected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-selected-track-outline-color, transparent)}.mdc-switch--disabled .mdc-switch__track::before,.mdc-switch--disabled .mdc-switch__track::after{border-width:var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface))}@media(forced-colors: active){.mdc-switch__track{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0);background:var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before,.mdc-switch.mdc-switch--disabled .mdc-switch__track::before{background:var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch__track::after{transform:translateX(-100%);background:var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary))}[dir=rtl] .mdc-switch__track::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::after{transform:translateX(0)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after,.mdc-switch.mdc-switch--disabled .mdc-switch__track::after{background:var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface))}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0);width:calc(100% - var(--mat-slide-toggle-handle-width))}[dir=rtl] .mdc-switch__handle-track{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto;transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1);width:var(--mat-slide-toggle-handle-width);height:var(--mat-slide-toggle-handle-height);border-radius:var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full))}[dir=rtl] .mdc-switch__handle{left:auto;right:0}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-slide-toggle-unselected-handle-size, 16px);height:var(--mat-slide-toggle-unselected-handle-size, 16px);margin:var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-slide-toggle-selected-handle-size, 24px);height:var(--mat-slide-toggle-selected-handle-size, 24px);margin:var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-slide-toggle-with-icon-handle-size, 24px);height:var(--mat-slide-toggle-with-icon-handle-size, 24px)}.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-slide-toggle-pressed-handle-size, 28px);height:var(--mat-slide-toggle-pressed-handle-size, 28px)}.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px)}.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-selected-handle-opacity, 1)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38)}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media(forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary))}.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after,.mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface))}.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline))}.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface))}.mdc-switch__handle::before{background:var(--mat-slide-toggle-handle-surface-color)}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-handle-elevation-shadow)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow,.mdc-switch.mdc-switch--disabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-disabled-handle-elevation-shadow)}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1;width:var(--mat-slide-toggle-state-layer-size, 40px);height:var(--mat-slide-toggle-state-layer-size, 40px)}.mdc-switch__ripple::after{content:"";opacity:0}.mdc-switch--disabled .mdc-switch__ripple::after{display:none}.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after{display:block}.mdc-switch:hover .mdc-switch__ripple::after{transition:75ms opacity cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after,.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch__icons{position:relative;height:100%;width:100%;z-index:1;transform:translateZ(0)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38)}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--unselected .mdc-switch__icon{width:var(--mat-slide-toggle-unselected-icon-size, 16px);height:var(--mat-slide-toggle-unselected-icon-size, 16px);fill:var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__icon{width:var(--mat-slide-toggle-selected-icon-size, 16px);height:var(--mat-slide-toggle-selected-icon-size, 16px);fill:var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container))}.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface))}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{-webkit-user-select:none;user-select:none;display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-internal-form-field{color:var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mat-slide-toggle-disabled-label-text-color)}\n'] }]
    }], ctorParameters: () => [], propDecorators: { _switchElement: [{
      type: ViewChild,
      args: ["switch"]
    }], name: [{
      type: Input
    }], id: [{
      type: Input
    }], labelPosition: [{
      type: Input
    }], ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }], ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }], ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }], required: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], color: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disableRipple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], tabIndex: [{
      type: Input,
      args: [{ transform: (value) => value == null ? 0 : numberAttribute(value) }]
    }], checked: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], hideIcon: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disabledInteractive: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], change: [{
      type: Output
    }], toggleChange: [{
      type: Output
    }] } });
    MatSlideToggleModule = class _MatSlideToggleModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSlideToggleModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSlideToggleModule, imports: [MatSlideToggle, MatCommonModule], exports: [MatSlideToggle, MatCommonModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSlideToggleModule, imports: [MatSlideToggle, MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSlideToggleModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatSlideToggle, MatCommonModule],
        exports: [MatSlideToggle, MatCommonModule]
      }]
    }] });
  }
});

// angular:jit:template:src\app\features\settings\settings-page\settings-page.html
var settings_page_default;
var init_settings_page = __esm({
  "angular:jit:template:src\\app\\features\\settings\\settings-page\\settings-page.html"() {
    settings_page_default = '<div class="feature-card">\r\n  <div class="feature-card-header">\r\n    <mat-icon fontIcon="settings"></mat-icon>\r\n    <h1>Settings</h1>\r\n  </div>\r\n  <mat-card class="settings-section">\r\n    <h2>Data Management</h2>\r\n    <div class="settings-actions">\r\n      <button mat-raised-button color="primary" (click)="exportData()">Export Data</button>\r\n      <label mat-raised-button color="accent" style="margin-left: 1rem;">\r\n        Import Data\r\n        <input type="file" accept="application/json" (change)="importData($event)" style="display:none;" />\r\n      </label>\r\n      <button mat-raised-button color="warn" style="margin-left: 1rem;" (click)="clearAllData()">Clear All Data</button>\r\n    </div>\r\n    <p class="settings-hint">Export or import your tasks, notes, snippets, and timer data as a JSON backup. Clearing data cannot be undone.</p>\r\n  </mat-card>\r\n\r\n  <mat-card class="settings-section">\r\n    <h2>Productivity Preferences</h2>\r\n    <form (ngSubmit)="saveProductivityPrefs()" #prefsForm="ngForm">\r\n      <mat-form-field appearance="fill" style="min-width: 220px; margin-right: 2rem;">\r\n        <mat-label>Default Landing Page</mat-label>\r\n        <mat-select [(ngModel)]="defaultLandingPage" name="defaultLandingPage">\r\n          <mat-option *ngFor="let page of landingPages" [value]="page.value">{{ page.label }}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-form-field appearance="fill" style="width: 120px; margin-right: 1rem;">\r\n        <mat-label>Focus (min)</mat-label>\r\n        <input matInput type="number" min="1" [(ngModel)]="focusDuration" name="focusDuration">\r\n      </mat-form-field>\r\n      <mat-form-field appearance="fill" style="width: 120px; margin-right: 2rem;">\r\n        <mat-label>Break (min)</mat-label>\r\n        <input matInput type="number" min="1" [(ngModel)]="breakDuration" name="breakDuration">\r\n      </mat-form-field>\r\n      <div class="feature-toggles">\r\n        <mat-slide-toggle [(ngModel)]="features.tasks" name="featureTasks">Tasks</mat-slide-toggle>\r\n        <mat-slide-toggle [(ngModel)]="features.notes" name="featureNotes">Notes</mat-slide-toggle>\r\n        <mat-slide-toggle [(ngModel)]="features.timer" name="featureTimer">Focus Timer</mat-slide-toggle>\r\n        <mat-slide-toggle [(ngModel)]="features.snippets" name="featureSnippets">Snippets</mat-slide-toggle>\r\n        <mat-slide-toggle [(ngModel)]="features.stats" name="featureStats">Stats</mat-slide-toggle>\r\n      </div>\r\n      <button mat-raised-button color="primary" type="submit" style="margin-top: 1rem;">Save Preferences</button>\r\n    </form>\r\n    <p class="settings-hint">Choose your default landing page, set timer defaults, and toggle feature visibility.</p>\r\n  </mat-card>\r\n\r\n  <mat-card class="settings-section">\r\n    <h2>UI Preferences</h2>\r\n    <form (ngSubmit)="saveUiPrefs()" #uiForm="ngForm">\r\n      <div class="ui-prefs-row">\r\n        <mat-form-field appearance="fill" style="min-width: 180px; margin-right: 2rem;">\r\n          <mat-label>Sidebar Position</mat-label>\r\n          <mat-select [(ngModel)]="sidebarPosition" name="sidebarPosition">\r\n            <mat-option *ngFor="let pos of sidebarPositions" [value]="pos.value">{{ pos.label }}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-slide-toggle [(ngModel)]="compactMode" name="compactMode" style="margin-right: 2rem;">Compact Mode</mat-slide-toggle>\r\n        <mat-form-field appearance="fill" style="min-width: 140px;">\r\n          <mat-label>Font Size</mat-label>\r\n          <mat-select [(ngModel)]="fontSize" name="fontSize">\r\n            <mat-option *ngFor="let size of fontSizes" [value]="size.value">{{ size.label }}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class="form-actions-block">\r\n        <button mat-raised-button color="primary" type="submit">Save UI Preferences</button>\r\n      </div>\r\n    </form>\r\n    <p class="settings-hint">Customize sidebar position, enable compact mode, and adjust font size for your dashboard.</p>\r\n  </mat-card>\r\n\r\n  <mat-card class="settings-section">\r\n    <h2>Accessibility</h2>\r\n    <form (ngSubmit)="saveAccessibilityPrefs()" #accessForm="ngForm">\r\n      <div class="accessibility-row">\r\n        <mat-slide-toggle [(ngModel)]="highContrast" name="highContrast" style="margin-right: 2rem;">High Contrast Mode</mat-slide-toggle>\r\n        <mat-slide-toggle [(ngModel)]="keyboardShortcuts" name="keyboardShortcuts">Enable Keyboard Shortcuts</mat-slide-toggle>\r\n      </div>\r\n      <div class="form-actions-block">\r\n        <button mat-raised-button color="primary" type="submit">Save Accessibility</button>\r\n      </div>\r\n    </form>\r\n    <p class="settings-hint">High contrast mode improves visibility. Keyboard shortcuts help power users navigate and control the app.</p>\r\n  </mat-card>\r\n\r\n  <mat-card class="settings-section">\r\n    <h2>About</h2>\r\n    <div class="about-info">\r\n      <div><strong>App Version:</strong> {{ appVersion }}</div>\r\n      <div><strong>Author:</strong> {{ author }}</div>\r\n      <div><strong>GitHub:</strong> <a href="{{ repoUrl }}" target="_blank" rel="noopener">{{ repoUrl }}</a></div>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\features\settings\settings-page\settings-page.scss
var settings_page_default2;
var init_settings_page2 = __esm({
  "angular:jit:style:src\\app\\features\\settings\\settings-page\\settings-page.scss"() {
    settings_page_default2 = "/* src/app/features/settings/settings-page/settings-page.scss */\n.settings-section {\n  margin-bottom: 2rem;\n  padding: 2rem;\n}\n.settings-actions {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.settings-hint {\n  color: #666;\n  font-size: 0.95rem;\n  margin-top: 0.5rem;\n}\n.feature-toggles {\n  display: flex;\n  gap: 1.5rem;\n  margin: 1rem 0 0.5rem 0;\n}\n.about-info {\n  margin-top: 1rem;\n  font-size: 1rem;\n  line-height: 1.7;\n}\n.about-info a {\n  color: #1976d2;\n  text-decoration: underline;\n}\n.feature-card {\n  max-width: 900px;\n  margin: 2.5rem auto 0 auto;\n  background: #fff;\n  border-radius: 18px;\n  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.08), 0 1.5px 6px 0 rgba(0, 0, 0, 0.04);\n  padding: 2.5rem 2.5rem 2rem 2.5rem;\n  animation: fadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.feature-card-header {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  margin-bottom: 1.5rem;\n}\n.feature-card-header mat-icon {\n  font-size: 2.2rem;\n  height: 2.2rem;\n  width: 2.2rem;\n  min-width: 2.2rem;\n  min-height: 2.2rem;\n  color: #1976d2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  vertical-align: middle;\n  position: relative;\n  top: 0;\n}\n.feature-card-header h1 {\n  font-size: 1.7rem;\n  font-weight: 700;\n  margin: 0;\n  color: #222;\n}\n@media (max-width: 700px) {\n  .feature-card {\n    padding: 1.2rem 0.7rem 1.2rem 0.7rem;\n    max-width: 98vw;\n  }\n  .feature-card-header h1 {\n    font-size: 1.1rem;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.ui-prefs-row,\n.accessibility-row {\n  display: flex;\n  gap: 1.5rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.form-actions-block {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n@media (max-width: 700px) {\n  .ui-prefs-row,\n  .accessibility-row {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.7rem;\n  }\n  .form-actions-block {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n    margin-top: 0.7rem;\n  }\n}\n/*# sourceMappingURL=settings-page.css.map */\n";
  }
});

// src/app/features/settings/settings-page/settings-page.ts
var environment, SettingsPage;
var init_settings_page3 = __esm({
  "src/app/features/settings/settings-page/settings-page.ts"() {
    "use strict";
    init_tslib_es6();
    init_settings_page();
    init_settings_page2();
    init_core();
    init_common();
    init_card();
    init_button();
    init_dialog2();
    init_form_field();
    init_select();
    init_input();
    init_slide_toggle();
    init_forms();
    init_icon();
    init_auth_service();
    environment = {
      appVersion: "1.0.1",
      author: "Maksim Kanev"
    };
    SettingsPage = class SettingsPage2 {
      platformId;
      authService;
      isBrowser;
      // Export all relevant app data as JSON
      exportData() {
        if (!this.isBrowser)
          return;
        let kanban = { todo: [], inProgress: [], done: [] };
        let timer = {};
        let snippets = [];
        try {
          kanban = JSON.parse(localStorage.getItem("kanban-tasks") || '{"todo":[],"inProgress":[],"done":[]}');
        } catch (e) {
          console.error("Failed to parse kanban-tasks:", e);
        }
        try {
          timer = JSON.parse(localStorage.getItem("focus-timer") || "{}");
        } catch (e) {
          console.error("Failed to parse focus-timer:", e);
        }
        try {
          snippets = JSON.parse(localStorage.getItem("snippets") || "[]");
        } catch (e) {
          console.error("Failed to parse snippets:", e);
        }
        const data = {
          kanban,
          timer,
          notes: localStorage.getItem("markdown-note") || "",
          snippets
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "dev-dashboard-backup.json";
        a.click();
        URL.revokeObjectURL(url);
      }
      // Import data from JSON file
      importData(event) {
        if (!this.isBrowser)
          return;
        const input = event.target;
        if (!input.files?.length)
          return;
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const data = JSON.parse(reader.result);
            if (data.kanban)
              localStorage.setItem("kanban-tasks", JSON.stringify(data.kanban));
            if (data.timer)
              localStorage.setItem("focus-timer", JSON.stringify(data.timer));
            if (typeof data.notes === "string")
              localStorage.setItem("markdown-note", data.notes);
            if (data.snippets)
              localStorage.setItem("snippets", JSON.stringify(data.snippets));
            alert("Data imported successfully!");
          } catch (e) {
            alert("Invalid file or format.");
            console.error("Failed to parse imported data:", e);
          }
        };
        reader.readAsText(file);
        input.value = "";
      }
      // Clear all app data with confirmation
      clearAllData() {
        if (!this.isBrowser)
          return;
        if (confirm("Are you sure you want to clear all app data? This cannot be undone.")) {
          localStorage.removeItem("kanban-tasks");
          localStorage.removeItem("focus-timer");
          localStorage.removeItem("markdown-note");
          localStorage.removeItem("snippets");
          alert("All app data cleared.");
        }
      }
      // Productivity Preferences state
      landingPages = [
        { value: "dashboard", label: "Dashboard" },
        { value: "tasks", label: "Kanban Board" },
        { value: "notes", label: "Notes" },
        { value: "timer", label: "Focus Timer" },
        { value: "snippets", label: "Snippets" },
        { value: "stats", label: "Stats Dashboard" }
      ];
      defaultLandingPage = "dashboard";
      focusDuration = 25;
      breakDuration = 5;
      features = {
        tasks: true,
        notes: true,
        timer: true,
        snippets: true,
        stats: true
      };
      // UI Preferences state
      sidebarPositions = [
        { value: "left", label: "Left" },
        { value: "right", label: "Right" }
      ];
      sidebarPosition = "left";
      compactMode = false;
      fontSizes = [
        { value: "small", label: "Small" },
        { value: "medium", label: "Medium" },
        { value: "large", label: "Large" }
      ];
      fontSize = "medium";
      // About/Info section state
      appVersion = environment.appVersion;
      author = environment.author;
      repoUrl = "https://github.com/maksimKV/dev-dashboard";
      // Accessibility state
      highContrast = false;
      keyboardShortcuts = true;
      constructor(platformId, authService) {
        this.platformId = platformId;
        this.authService = authService;
        this.isBrowser = isPlatformBrowser(this.platformId);
        if (this.isBrowser) {
          this.loadProductivityPrefs();
          this.loadUiPrefs();
          this.loadAccessibilityPrefs();
        }
      }
      ngOnInit() {
      }
      loadProductivityPrefs() {
        if (!this.isBrowser)
          return;
        this.defaultLandingPage = localStorage.getItem("default-landing-page") || "dashboard";
        this.focusDuration = +(localStorage.getItem("focus-timer-duration") || 25);
        this.breakDuration = +(localStorage.getItem("focus-break-duration") || 5);
        const features = localStorage.getItem("enabled-features");
        if (features) {
          try {
            this.features = __spreadValues(__spreadValues({}, this.features), JSON.parse(features));
          } catch (e) {
            this.features = {
              tasks: true,
              notes: true,
              timer: true,
              snippets: true,
              stats: true
            };
            console.error("Failed to parse enabled-features:", e);
          }
        }
      }
      saveProductivityPrefs() {
        if (!this.isBrowser)
          return;
        localStorage.setItem("default-landing-page", this.defaultLandingPage);
        localStorage.setItem("focus-timer-duration", String(this.focusDuration));
        localStorage.setItem("focus-break-duration", String(this.breakDuration));
        localStorage.setItem("enabled-features", JSON.stringify(this.features));
        window.dispatchEvent(new StorageEvent("storage", { key: "enabled-features" }));
        this.saveAllPrefsToBackend();
        alert("Productivity preferences saved!");
      }
      loadUiPrefs() {
        if (!this.isBrowser)
          return;
        this.sidebarPosition = localStorage.getItem("sidebar-position") || "left";
        this.compactMode = localStorage.getItem("compact-mode") === "true";
        this.fontSize = localStorage.getItem("font-size") || "medium";
      }
      saveUiPrefs() {
        if (!this.isBrowser)
          return;
        localStorage.setItem("sidebar-position", this.sidebarPosition);
        localStorage.setItem("compact-mode", String(this.compactMode));
        localStorage.setItem("font-size", this.fontSize);
        window.dispatchEvent(new StorageEvent("storage", { key: "sidebar-position" }));
        this.saveAllPrefsToBackend();
        alert("UI preferences saved!");
      }
      loadAccessibilityPrefs() {
        if (!this.isBrowser)
          return;
        this.highContrast = localStorage.getItem("high-contrast") === "true";
        this.keyboardShortcuts = localStorage.getItem("keyboard-shortcuts") !== "false";
      }
      saveAccessibilityPrefs() {
        if (!this.isBrowser)
          return;
        localStorage.setItem("high-contrast", String(this.highContrast));
        localStorage.setItem("keyboard-shortcuts", String(this.keyboardShortcuts));
        this.saveAllPrefsToBackend();
        alert("Accessibility preferences saved!");
      }
      saveAllPrefsToBackend() {
        const preferences = {
          defaultLandingPage: this.defaultLandingPage,
          focusDuration: this.focusDuration,
          breakDuration: this.breakDuration,
          features: this.features,
          sidebarPosition: this.sidebarPosition,
          compactMode: this.compactMode,
          fontSize: this.fontSize,
          highContrast: this.highContrast,
          keyboardShortcuts: this.keyboardShortcuts
        };
        this.authService.updatePreferences(preferences).subscribe({
          next: () => {
          },
          error: (err) => {
            alert("Failed to save preferences to backend.");
            console.error("Failed to save preferences to backend:", err);
          }
        });
      }
      static ctorParameters = () => [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID] }] },
        { type: AuthService }
      ];
    };
    SettingsPage = __decorate([
      Component({
        selector: "app-settings-page",
        standalone: true,
        imports: [CommonModule, MatCardModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatSlideToggleModule, FormsModule, MatIconModule],
        template: settings_page_default,
        styles: [settings_page_default2]
      })
    ], SettingsPage);
  }
});

export {
  MatCardModule,
  init_card,
  MatDialogModule,
  init_dialog2 as init_dialog,
  MatSlideToggleModule,
  init_slide_toggle,
  SettingsPage,
  init_settings_page3 as init_settings_page
};
//# sourceMappingURL=chunk-Y5MD4PAT.js.map
