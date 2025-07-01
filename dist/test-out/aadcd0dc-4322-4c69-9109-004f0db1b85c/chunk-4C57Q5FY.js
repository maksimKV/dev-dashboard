import {
  MatSelectModule,
  init_select
} from "./chunk-RBW725AG.js";
import {
  ErrorStateMatcher,
  MAT_FORM_FIELD,
  MatButtonModule,
  MatFormFieldControl,
  MatFormFieldModule,
  MatInputModule,
  MatRippleLoader,
  _ErrorStateTracker,
  init_button,
  init_error_options_DCNQlTOA,
  init_error_state_Dtb1IHM,
  init_form_field,
  init_form_field_CFbrnFED,
  init_input,
  init_ripple_loader_BnMiRtmT
} from "./chunk-XPVP5D3K.js";
import {
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatRippleModule,
  _StructuralStylesLoader,
  _animationsDisabled,
  init_animation_DfMFjxHu,
  init_index_BFRo2fUq,
  init_ripple_BYgV4oZC,
  init_structural_styles_CObeNzjn
} from "./chunk-E5SZGRLI.js";
import {
  FormGroupDirective,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgForm,
  Validators,
  init_forms
} from "./chunk-5VCTOLDM.js";
import {
  BACKSPACE,
  DELETE,
  DOWN_ARROW,
  Directionality,
  ENTER,
  FocusKeyManager,
  FocusMonitor,
  MatCommonModule,
  MatIconModule,
  SPACE,
  TAB,
  UP_ARROW,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _VisuallyHiddenLoader,
  hasModifierKey,
  init_a11y,
  init_bidi,
  init_common_module_cKSwHniA,
  init_icon,
  init_keycodes,
  init_private
} from "./chunk-NQEXKGPT.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-3BJ3OYBN.js";
import {
  DomSanitizer,
  init_platform_browser
} from "./chunk-3YKIIKQF.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  HOST_TAG_NAME,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  QueryList,
  SecurityContext,
  Subject,
  ViewChild,
  ViewEncapsulation,
  __async,
  __decorate,
  __esm,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  afterRenderEffect,
  booleanAttribute,
  catchError,
  computed,
  core_exports,
  filter,
  firstValueFrom,
  forkJoin,
  forwardRef,
  from,
  init_common,
  init_core,
  init_esm,
  init_operators,
  init_tslib_es6,
  inject,
  input,
  isPlatformBrowser,
  map,
  merge,
  numberAttribute,
  output,
  signal,
  startWith,
  switchMap,
  takeUntil,
  tap,
  throwError,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-4OKOT362.js";

// node_modules/@angular/material/fesm2022/chips.mjs
var MAT_CHIPS_DEFAULT_OPTIONS, MAT_CHIP_AVATAR, MAT_CHIP_TRAILING_ICON, MAT_CHIP_REMOVE, MAT_CHIP, MatChipAction, MatChipAvatar, MatChipTrailingIcon, MatChipRemove, MatChip, MatChipOption, MatChipEditInput, MatChipRow, MatChipSet, MatChipListboxChange, MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR, MatChipListbox, MatChipGridChange, MatChipGrid, MatChipInput, CHIP_DECLARATIONS, MatChipsModule;
var init_chips = __esm({
  "node_modules/@angular/material/fesm2022/chips.mjs"() {
    "use strict";
    init_a11y();
    init_keycodes();
    init_private();
    init_core();
    init_core();
    init_esm();
    init_structural_styles_CObeNzjn();
    init_ripple_BYgV4oZC();
    init_animation_DfMFjxHu();
    init_ripple_loader_BnMiRtmT();
    init_operators();
    init_bidi();
    init_forms();
    init_error_options_DCNQlTOA();
    init_error_state_Dtb1IHM();
    init_form_field_CFbrnFED();
    init_common_module_cKSwHniA();
    init_index_BFRo2fUq();
    MAT_CHIPS_DEFAULT_OPTIONS = new InjectionToken("mat-chips-default-options", {
      providedIn: "root",
      factory: () => ({
        separatorKeyCodes: [ENTER]
      })
    });
    MAT_CHIP_AVATAR = new InjectionToken("MatChipAvatar");
    MAT_CHIP_TRAILING_ICON = new InjectionToken("MatChipTrailingIcon");
    MAT_CHIP_REMOVE = new InjectionToken("MatChipRemove");
    MAT_CHIP = new InjectionToken("MatChip");
    MatChipAction = class _MatChipAction {
      _elementRef = inject(ElementRef);
      _parentChip = inject(MAT_CHIP);
      /** Whether the action is interactive. */
      isInteractive = true;
      /** Whether this is the primary action in the chip. */
      _isPrimary = true;
      /** Whether the action is disabled. */
      get disabled() {
        return this._disabled || this._parentChip?.disabled || false;
      }
      set disabled(value) {
        this._disabled = value;
      }
      _disabled = false;
      /** Tab index of the action. */
      tabIndex = -1;
      /**
       * Private API to allow focusing this chip when it is disabled.
       */
      _allowFocusWhenDisabled = false;
      /**
       * Determine the value of the disabled attribute for this chip action.
       */
      _getDisabledAttribute() {
        return this.disabled && !this._allowFocusWhenDisabled ? "" : null;
      }
      /**
       * Determine the value of the tabindex attribute for this chip action.
       */
      _getTabindex() {
        return this.disabled && !this._allowFocusWhenDisabled || !this.isInteractive ? null : this.tabIndex.toString();
      }
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
        if (this._elementRef.nativeElement.nodeName === "BUTTON") {
          this._elementRef.nativeElement.setAttribute("type", "button");
        }
      }
      focus() {
        this._elementRef.nativeElement.focus();
      }
      _handleClick(event) {
        if (!this.disabled && this.isInteractive && this._isPrimary) {
          event.preventDefault();
          this._parentChip._handlePrimaryActionInteraction();
        }
      }
      _handleKeydown(event) {
        if ((event.keyCode === ENTER || event.keyCode === SPACE) && !this.disabled && this.isInteractive && this._isPrimary && !this._parentChip._isEditing) {
          event.preventDefault();
          this._parentChip._handlePrimaryActionInteraction();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipAction, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _MatChipAction, isStandalone: true, selector: "[matChipAction]", inputs: { isInteractive: "isInteractive", disabled: ["disabled", "disabled", booleanAttribute], tabIndex: ["tabIndex", "tabIndex", (value) => value == null ? -1 : numberAttribute(value)], _allowFocusWhenDisabled: "_allowFocusWhenDisabled" }, host: { listeners: { "click": "_handleClick($event)", "keydown": "_handleKeydown($event)" }, properties: { "class.mdc-evolution-chip__action--primary": "_isPrimary", "class.mdc-evolution-chip__action--presentational": "!isInteractive", "class.mdc-evolution-chip__action--trailing": "!_isPrimary", "attr.tabindex": "_getTabindex()", "attr.disabled": "_getDisabledAttribute()", "attr.aria-disabled": "disabled" }, classAttribute: "mdc-evolution-chip__action mat-mdc-chip-action" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipAction, decorators: [{
      type: Directive,
      args: [{
        selector: "[matChipAction]",
        host: {
          "class": "mdc-evolution-chip__action mat-mdc-chip-action",
          "[class.mdc-evolution-chip__action--primary]": "_isPrimary",
          "[class.mdc-evolution-chip__action--presentational]": "!isInteractive",
          "[class.mdc-evolution-chip__action--trailing]": "!_isPrimary",
          "[attr.tabindex]": "_getTabindex()",
          "[attr.disabled]": "_getDisabledAttribute()",
          "[attr.aria-disabled]": "disabled",
          "(click)": "_handleClick($event)",
          "(keydown)": "_handleKeydown($event)"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { isInteractive: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? -1 : numberAttribute(value)
      }]
    }], _allowFocusWhenDisabled: [{
      type: Input
    }] } });
    MatChipAvatar = class _MatChipAvatar {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipAvatar, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatChipAvatar, isStandalone: true, selector: "mat-chip-avatar, [matChipAvatar]", host: { attributes: { "role": "img" }, classAttribute: "mat-mdc-chip-avatar mdc-evolution-chip__icon mdc-evolution-chip__icon--primary" }, providers: [{ provide: MAT_CHIP_AVATAR, useExisting: _MatChipAvatar }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipAvatar, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-chip-avatar, [matChipAvatar]",
        host: {
          "class": "mat-mdc-chip-avatar mdc-evolution-chip__icon mdc-evolution-chip__icon--primary",
          "role": "img"
        },
        providers: [{ provide: MAT_CHIP_AVATAR, useExisting: MatChipAvatar }]
      }]
    }] });
    MatChipTrailingIcon = class _MatChipTrailingIcon extends MatChipAction {
      /**
       * MDC considers all trailing actions as a remove icon,
       * but we support non-interactive trailing icons.
       */
      isInteractive = false;
      _isPrimary = false;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipTrailingIcon, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatChipTrailingIcon, isStandalone: true, selector: "mat-chip-trailing-icon, [matChipTrailingIcon]", host: { attributes: { "aria-hidden": "true" }, classAttribute: "mat-mdc-chip-trailing-icon mdc-evolution-chip__icon mdc-evolution-chip__icon--trailing" }, providers: [{ provide: MAT_CHIP_TRAILING_ICON, useExisting: _MatChipTrailingIcon }], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipTrailingIcon, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-chip-trailing-icon, [matChipTrailingIcon]",
        host: {
          "class": "mat-mdc-chip-trailing-icon mdc-evolution-chip__icon mdc-evolution-chip__icon--trailing",
          "aria-hidden": "true"
        },
        providers: [{ provide: MAT_CHIP_TRAILING_ICON, useExisting: MatChipTrailingIcon }]
      }]
    }] });
    MatChipRemove = class _MatChipRemove extends MatChipAction {
      _isPrimary = false;
      _handleClick(event) {
        if (!this.disabled) {
          event.stopPropagation();
          event.preventDefault();
          this._parentChip.remove();
        }
      }
      _handleKeydown(event) {
        if ((event.keyCode === ENTER || event.keyCode === SPACE) && !this.disabled) {
          event.stopPropagation();
          event.preventDefault();
          this._parentChip.remove();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipRemove, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatChipRemove, isStandalone: true, selector: "[matChipRemove]", host: { attributes: { "role": "button" }, properties: { "attr.aria-hidden": "null" }, classAttribute: "mat-mdc-chip-remove mat-mdc-chip-trailing-icon mat-focus-indicator mdc-evolution-chip__icon mdc-evolution-chip__icon--trailing" }, providers: [{ provide: MAT_CHIP_REMOVE, useExisting: _MatChipRemove }], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipRemove, decorators: [{
      type: Directive,
      args: [{
        selector: "[matChipRemove]",
        host: {
          "class": "mat-mdc-chip-remove mat-mdc-chip-trailing-icon mat-focus-indicator mdc-evolution-chip__icon mdc-evolution-chip__icon--trailing",
          "role": "button",
          "[attr.aria-hidden]": "null"
        },
        providers: [{ provide: MAT_CHIP_REMOVE, useExisting: MatChipRemove }]
      }]
    }] });
    MatChip = class _MatChip {
      _changeDetectorRef = inject(ChangeDetectorRef);
      _elementRef = inject(ElementRef);
      _tagName = inject(HOST_TAG_NAME);
      _ngZone = inject(NgZone);
      _focusMonitor = inject(FocusMonitor);
      _globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
        optional: true
      });
      _document = inject(DOCUMENT);
      /** Emits when the chip is focused. */
      _onFocus = new Subject();
      /** Emits when the chip is blurred. */
      _onBlur = new Subject();
      /** Whether this chip is a basic (unstyled) chip. */
      _isBasicChip;
      /** Role for the root of the chip. */
      role = null;
      /** Whether the chip has focus. */
      _hasFocusInternal = false;
      /** Whether moving focus into the chip is pending. */
      _pendingFocus;
      /** Subscription to changes in the chip's actions. */
      _actionChanges;
      /** Whether animations for the chip are enabled. */
      _animationsDisabled = _animationsDisabled();
      /** All avatars present in the chip. */
      _allLeadingIcons;
      /** All trailing icons present in the chip. */
      _allTrailingIcons;
      /** All remove icons present in the chip. */
      _allRemoveIcons;
      _hasFocus() {
        return this._hasFocusInternal;
      }
      /** A unique id for the chip. If none is supplied, it will be auto-generated. */
      id = inject(_IdGenerator).getId("mat-mdc-chip-");
      // TODO(#26104): Consider deprecating and using `_computeAriaAccessibleName` instead.
      // `ariaLabel` may be unnecessary, and `_computeAriaAccessibleName` only supports
      // datepicker's use case.
      /** ARIA label for the content of the chip. */
      ariaLabel = null;
      // TODO(#26104): Consider deprecating and using `_computeAriaAccessibleName` instead.
      // `ariaDescription` may be unnecessary, and `_computeAriaAccessibleName` only supports
      // datepicker's use case.
      /** ARIA description for the content of the chip. */
      ariaDescription = null;
      /** Id of a span that contains this chip's aria description. */
      _ariaDescriptionId = `${this.id}-aria-description`;
      /** Whether the chip list is disabled. */
      _chipListDisabled = false;
      _textElement;
      /**
       * The value of the chip. Defaults to the content inside
       * the `mat-mdc-chip-action-label` element.
       */
      get value() {
        return this._value !== void 0 ? this._value : this._textElement.textContent.trim();
      }
      set value(value) {
        this._value = value;
      }
      _value;
      // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
      /**
       * Theme color of the chip. This API is supported in M2 themes only, it has no
       * effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/chips/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      color;
      /**
       * Determines whether or not the chip displays the remove styling and emits (removed) events.
       */
      removable = true;
      /**
       * Colors the chip for emphasis as if it were selected.
       */
      highlighted = false;
      /** Whether the ripple effect is disabled or not. */
      disableRipple = false;
      /** Whether the chip is disabled. */
      get disabled() {
        return this._disabled || this._chipListDisabled;
      }
      set disabled(value) {
        this._disabled = value;
      }
      _disabled = false;
      /** Emitted when a chip is to be removed. */
      removed = new EventEmitter();
      /** Emitted when the chip is destroyed. */
      destroyed = new EventEmitter();
      /** The unstyled chip selector for this component. */
      basicChipAttrName = "mat-basic-chip";
      /** The chip's leading icon. */
      leadingIcon;
      /** The chip's trailing icon. */
      trailingIcon;
      /** The chip's trailing remove icon. */
      removeIcon;
      /** Action receiving the primary set of user interactions. */
      primaryAction;
      /**
       * Handles the lazy creation of the MatChip ripple.
       * Used to improve initial load time of large applications.
       */
      _rippleLoader = inject(MatRippleLoader);
      _injector = inject(Injector);
      constructor() {
        const styleLoader = inject(_CdkPrivateStyleLoader);
        styleLoader.load(_StructuralStylesLoader);
        styleLoader.load(_VisuallyHiddenLoader);
        this._monitorFocus();
        this._rippleLoader?.configureRipple(this._elementRef.nativeElement, {
          className: "mat-mdc-chip-ripple",
          disabled: this._isRippleDisabled()
        });
      }
      ngOnInit() {
        this._isBasicChip = this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName) || this._tagName.toLowerCase() === this.basicChipAttrName;
      }
      ngAfterViewInit() {
        this._textElement = this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label");
        if (this._pendingFocus) {
          this._pendingFocus = false;
          this.focus();
        }
      }
      ngAfterContentInit() {
        this._actionChanges = merge(this._allLeadingIcons.changes, this._allTrailingIcons.changes, this._allRemoveIcons.changes).subscribe(() => this._changeDetectorRef.markForCheck());
      }
      ngDoCheck() {
        this._rippleLoader.setDisabled(this._elementRef.nativeElement, this._isRippleDisabled());
      }
      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
        this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
        this._actionChanges?.unsubscribe();
        this.destroyed.emit({ chip: this });
        this.destroyed.complete();
      }
      /**
       * Allows for programmatic removal of the chip.
       *
       * Informs any listeners of the removal request. Does not remove the chip from the DOM.
       */
      remove() {
        if (this.removable) {
          this.removed.emit({ chip: this });
        }
      }
      /** Whether or not the ripple should be disabled. */
      _isRippleDisabled() {
        return this.disabled || this.disableRipple || this._animationsDisabled || this._isBasicChip || !!this._globalRippleOptions?.disabled;
      }
      /** Returns whether the chip has a trailing icon. */
      _hasTrailingIcon() {
        return !!(this.trailingIcon || this.removeIcon);
      }
      /** Handles keyboard events on the chip. */
      _handleKeydown(event) {
        if (event.keyCode === BACKSPACE && !event.repeat || event.keyCode === DELETE) {
          event.preventDefault();
          this.remove();
        }
      }
      /** Allows for programmatic focusing of the chip. */
      focus() {
        if (!this.disabled) {
          if (this.primaryAction) {
            this.primaryAction.focus();
          } else {
            this._pendingFocus = true;
          }
        }
      }
      /** Gets the action that contains a specific target node. */
      _getSourceAction(target) {
        return this._getActions().find((action) => {
          const element = action._elementRef.nativeElement;
          return element === target || element.contains(target);
        });
      }
      /** Gets all of the actions within the chip. */
      _getActions() {
        const result = [];
        if (this.primaryAction) {
          result.push(this.primaryAction);
        }
        if (this.removeIcon) {
          result.push(this.removeIcon);
        }
        if (this.trailingIcon) {
          result.push(this.trailingIcon);
        }
        return result;
      }
      /** Handles interactions with the primary action of the chip. */
      _handlePrimaryActionInteraction() {
      }
      /** Starts the focus monitoring process on the chip. */
      _monitorFocus() {
        this._focusMonitor.monitor(this._elementRef, true).subscribe((origin) => {
          const hasFocus = origin !== null;
          if (hasFocus !== this._hasFocusInternal) {
            this._hasFocusInternal = hasFocus;
            if (hasFocus) {
              this._onFocus.next({ chip: this });
            } else {
              this._changeDetectorRef.markForCheck();
              setTimeout(() => this._ngZone.run(() => this._onBlur.next({ chip: this })));
            }
          }
        });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChip, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatChip, isStandalone: true, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: { role: "role", id: "id", ariaLabel: ["aria-label", "ariaLabel"], ariaDescription: ["aria-description", "ariaDescription"], value: "value", color: "color", removable: ["removable", "removable", booleanAttribute], highlighted: ["highlighted", "highlighted", booleanAttribute], disableRipple: ["disableRipple", "disableRipple", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute] }, outputs: { removed: "removed", destroyed: "destroyed" }, host: { listeners: { "keydown": "_handleKeydown($event)" }, properties: { "class": '"mat-" + (color || "primary")', "class.mdc-evolution-chip": "!_isBasicChip", "class.mdc-evolution-chip--disabled": "disabled", "class.mdc-evolution-chip--with-trailing-action": "_hasTrailingIcon()", "class.mdc-evolution-chip--with-primary-graphic": "leadingIcon", "class.mdc-evolution-chip--with-primary-icon": "leadingIcon", "class.mdc-evolution-chip--with-avatar": "leadingIcon", "class.mat-mdc-chip-with-avatar": "leadingIcon", "class.mat-mdc-chip-highlighted": "highlighted", "class.mat-mdc-chip-disabled": "disabled", "class.mat-mdc-basic-chip": "_isBasicChip", "class.mat-mdc-standard-chip": "!_isBasicChip", "class.mat-mdc-chip-with-trailing-icon": "_hasTrailingIcon()", "class._mat-animation-noopable": "_animationsDisabled", "id": "id", "attr.role": "role", "attr.aria-label": "ariaLabel" }, classAttribute: "mat-mdc-chip" }, providers: [{ provide: MAT_CHIP, useExisting: _MatChip }], queries: [{ propertyName: "leadingIcon", first: true, predicate: MAT_CHIP_AVATAR, descendants: true }, { propertyName: "trailingIcon", first: true, predicate: MAT_CHIP_TRAILING_ICON, descendants: true }, { propertyName: "removeIcon", first: true, predicate: MAT_CHIP_REMOVE, descendants: true }, { propertyName: "_allLeadingIcons", predicate: MAT_CHIP_AVATAR, descendants: true }, { propertyName: "_allTrailingIcons", predicate: MAT_CHIP_TRAILING_ICON, descendants: true }, { propertyName: "_allRemoveIcons", predicate: MAT_CHIP_REMOVE, descendants: true }], viewQueries: [{ propertyName: "primaryAction", first: true, predicate: MatChipAction, descendants: true }], exportAs: ["matChip"], ngImport: core_exports, template: '<span class="mat-mdc-chip-focus-overlay"></span>\n\n<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary">\n  <span matChipAction [isInteractive]="false">\n    @if (leadingIcon) {\n      <span class="mdc-evolution-chip__graphic mat-mdc-chip-graphic">\n        <ng-content select="mat-chip-avatar, [matChipAvatar]"></ng-content>\n      </span>\n    }\n    <span class="mdc-evolution-chip__text-label mat-mdc-chip-action-label">\n      <ng-content></ng-content>\n      <span class="mat-mdc-chip-primary-focus-indicator mat-focus-indicator"></span>\n    </span>\n  </span>\n</span>\n\n@if (_hasTrailingIcon()) {\n  <span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing">\n    <ng-content select="mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"></ng-content>\n  </span>\n}\n', styles: ['.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}@media(forced-colors: active){.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{forced-color-adjust:none}}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-outline-width, 1px);border-radius:var(--mat-chip-container-shape-radius, 8px);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-outline-color, var(--mat-sys-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--trailing{color:var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--trailing{color:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));font-weight:var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mat-chip-with-avatar-avatar-size, 24px);height:var(--mat-chip-with-avatar-avatar-size, 24px);font-size:var(--mat-chip-with-avatar-avatar-size, 24px)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}@media(forced-colors: active){.mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mat-mdc-standard-chip{border-radius:var(--mat-chip-container-shape-radius, 8px);height:var(--mat-chip-container-height, 32px)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-container-color, transparent)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mat-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}@media(forced-colors: active){.mat-mdc-standard-chip{outline:solid 1px}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mat-chip-with-avatar-avatar-shape-radius, 24px);width:var(--mat-chip-with-icon-icon-size, 18px);height:var(--mat-chip-with-icon-icon-size, 18px);font-size:var(--mat-chip-with-icon-icon-size, 18px)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-highlighted{--mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));--mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));--mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));--mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mat-chip-with-icon-disabled-icon-opacity, 0.38)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity, 1)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity, 1)}.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity, 1)}.mat-mdc-chip-remove::after{background-color:var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background-color:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mat-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-remove::before{margin:calc(var(--mat-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-3px;bottom:-3px;left:5px;right:5px;border-radius:50%;box-sizing:border-box;padding:12px;margin:-12px;background-clip:content-box}.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}@media(forced-colors: active){.mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}}.mat-mdc-chip-action:focus .mat-focus-indicator::before{content:""}.mdc-evolution-chip__icon,.mat-mdc-chip-remove .mat-icon{min-height:fit-content}\n'], dependencies: [{ kind: "directive", type: MatChipAction, selector: "[matChipAction]", inputs: ["isInteractive", "disabled", "tabIndex", "_allowFocusWhenDisabled"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChip, decorators: [{
      type: Component,
      args: [{ selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", exportAs: "matChip", host: {
        "class": "mat-mdc-chip",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mdc-evolution-chip]": "!_isBasicChip",
        "[class.mdc-evolution-chip--disabled]": "disabled",
        "[class.mdc-evolution-chip--with-trailing-action]": "_hasTrailingIcon()",
        "[class.mdc-evolution-chip--with-primary-graphic]": "leadingIcon",
        "[class.mdc-evolution-chip--with-primary-icon]": "leadingIcon",
        "[class.mdc-evolution-chip--with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-highlighted]": "highlighted",
        "[class.mat-mdc-chip-disabled]": "disabled",
        "[class.mat-mdc-basic-chip]": "_isBasicChip",
        "[class.mat-mdc-standard-chip]": "!_isBasicChip",
        "[class.mat-mdc-chip-with-trailing-icon]": "_hasTrailingIcon()",
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[id]": "id",
        "[attr.role]": "role",
        "[attr.aria-label]": "ariaLabel",
        "(keydown)": "_handleKeydown($event)"
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [{ provide: MAT_CHIP, useExisting: MatChip }], imports: [MatChipAction], template: '<span class="mat-mdc-chip-focus-overlay"></span>\n\n<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary">\n  <span matChipAction [isInteractive]="false">\n    @if (leadingIcon) {\n      <span class="mdc-evolution-chip__graphic mat-mdc-chip-graphic">\n        <ng-content select="mat-chip-avatar, [matChipAvatar]"></ng-content>\n      </span>\n    }\n    <span class="mdc-evolution-chip__text-label mat-mdc-chip-action-label">\n      <ng-content></ng-content>\n      <span class="mat-mdc-chip-primary-focus-indicator mat-focus-indicator"></span>\n    </span>\n  </span>\n</span>\n\n@if (_hasTrailingIcon()) {\n  <span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing">\n    <ng-content select="mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"></ng-content>\n  </span>\n}\n', styles: ['.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}@media(forced-colors: active){.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{forced-color-adjust:none}}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-outline-width, 1px);border-radius:var(--mat-chip-container-shape-radius, 8px);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-outline-color, var(--mat-sys-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--trailing{color:var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--trailing{color:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));font-weight:var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mat-chip-with-avatar-avatar-size, 24px);height:var(--mat-chip-with-avatar-avatar-size, 24px);font-size:var(--mat-chip-with-avatar-avatar-size, 24px)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}@media(forced-colors: active){.mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mat-mdc-standard-chip{border-radius:var(--mat-chip-container-shape-radius, 8px);height:var(--mat-chip-container-height, 32px)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-container-color, transparent)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mat-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}@media(forced-colors: active){.mat-mdc-standard-chip{outline:solid 1px}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mat-chip-with-avatar-avatar-shape-radius, 24px);width:var(--mat-chip-with-icon-icon-size, 18px);height:var(--mat-chip-with-icon-icon-size, 18px);font-size:var(--mat-chip-with-icon-icon-size, 18px)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-highlighted{--mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));--mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));--mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));--mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mat-chip-with-icon-disabled-icon-opacity, 0.38)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity, 1)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity, 1)}.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity, 1)}.mat-mdc-chip-remove::after{background-color:var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background-color:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mat-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-remove::before{margin:calc(var(--mat-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-3px;bottom:-3px;left:5px;right:5px;border-radius:50%;box-sizing:border-box;padding:12px;margin:-12px;background-clip:content-box}.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}@media(forced-colors: active){.mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}}.mat-mdc-chip-action:focus .mat-focus-indicator::before{content:""}.mdc-evolution-chip__icon,.mat-mdc-chip-remove .mat-icon{min-height:fit-content}\n'] }]
    }], ctorParameters: () => [], propDecorators: { role: [{
      type: Input
    }], _allLeadingIcons: [{
      type: ContentChildren,
      args: [MAT_CHIP_AVATAR, { descendants: true }]
    }], _allTrailingIcons: [{
      type: ContentChildren,
      args: [MAT_CHIP_TRAILING_ICON, { descendants: true }]
    }], _allRemoveIcons: [{
      type: ContentChildren,
      args: [MAT_CHIP_REMOVE, { descendants: true }]
    }], id: [{
      type: Input
    }], ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }], ariaDescription: [{
      type: Input,
      args: ["aria-description"]
    }], value: [{
      type: Input
    }], color: [{
      type: Input
    }], removable: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], highlighted: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disableRipple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], removed: [{
      type: Output
    }], destroyed: [{
      type: Output
    }], leadingIcon: [{
      type: ContentChild,
      args: [MAT_CHIP_AVATAR]
    }], trailingIcon: [{
      type: ContentChild,
      args: [MAT_CHIP_TRAILING_ICON]
    }], removeIcon: [{
      type: ContentChild,
      args: [MAT_CHIP_REMOVE]
    }], primaryAction: [{
      type: ViewChild,
      args: [MatChipAction]
    }] } });
    MatChipOption = class _MatChipOption extends MatChip {
      /** Default chip options. */
      _defaultOptions = inject(MAT_CHIPS_DEFAULT_OPTIONS, { optional: true });
      /** Whether the chip list is selectable. */
      chipListSelectable = true;
      /** Whether the chip list is in multi-selection mode. */
      _chipListMultiple = false;
      /** Whether the chip list hides single-selection indicator. */
      _chipListHideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
      /**
       * Whether or not the chip is selectable.
       *
       * When a chip is not selectable, changes to its selected state are always
       * ignored. By default an option chip is selectable, and it becomes
       * non-selectable if its parent chip list is not selectable.
       */
      get selectable() {
        return this._selectable && this.chipListSelectable;
      }
      set selectable(value) {
        this._selectable = value;
        this._changeDetectorRef.markForCheck();
      }
      _selectable = true;
      /** Whether the chip is selected. */
      get selected() {
        return this._selected;
      }
      set selected(value) {
        this._setSelectedState(value, false, true);
      }
      _selected = false;
      /**
       * The ARIA selected applied to the chip. Conforms to WAI ARIA best practices for listbox
       * interaction patterns.
       *
       * From [WAI ARIA Listbox authoring practices guide](
       * https://www.w3.org/WAI/ARIA/apg/patterns/listbox/):
       *  "If any options are selected, each selected option has either aria-selected or aria-checked
       *  set to true. All options that are selectable but not selected have either aria-selected or
       *  aria-checked set to false."
       *
       * Set `aria-selected="false"` on not-selected listbox options that are selectable to fix
       * VoiceOver reading every option as "selected" (#25736).
       */
      get ariaSelected() {
        return this.selectable ? this.selected.toString() : null;
      }
      /** The unstyled chip selector for this component. */
      basicChipAttrName = "mat-basic-chip-option";
      /** Emitted when the chip is selected or deselected. */
      selectionChange = new EventEmitter();
      ngOnInit() {
        super.ngOnInit();
        this.role = "presentation";
      }
      /** Selects the chip. */
      select() {
        this._setSelectedState(true, false, true);
      }
      /** Deselects the chip. */
      deselect() {
        this._setSelectedState(false, false, true);
      }
      /** Selects this chip and emits userInputSelection event */
      selectViaInteraction() {
        this._setSelectedState(true, true, true);
      }
      /** Toggles the current selected state of this chip. */
      toggleSelected(isUserInput = false) {
        this._setSelectedState(!this.selected, isUserInput, true);
        return this.selected;
      }
      _handlePrimaryActionInteraction() {
        if (!this.disabled) {
          this.focus();
          if (this.selectable) {
            this.toggleSelected(true);
          }
        }
      }
      _hasLeadingGraphic() {
        if (this.leadingIcon) {
          return true;
        }
        return !this._chipListHideSingleSelectionIndicator || this._chipListMultiple;
      }
      _setSelectedState(isSelected, isUserInput, emitEvent) {
        if (isSelected !== this.selected) {
          this._selected = isSelected;
          if (emitEvent) {
            this.selectionChange.emit({
              source: this,
              isUserInput,
              selected: this.selected
            });
          }
          this._changeDetectorRef.markForCheck();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipOption, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatChipOption, isStandalone: true, selector: "mat-basic-chip-option, [mat-basic-chip-option], mat-chip-option, [mat-chip-option]", inputs: { selectable: ["selectable", "selectable", booleanAttribute], selected: ["selected", "selected", booleanAttribute] }, outputs: { selectionChange: "selectionChange" }, host: { properties: { "class.mdc-evolution-chip": "!_isBasicChip", "class.mdc-evolution-chip--filter": "!_isBasicChip", "class.mdc-evolution-chip--selectable": "!_isBasicChip", "class.mat-mdc-chip-selected": "selected", "class.mat-mdc-chip-multiple": "_chipListMultiple", "class.mat-mdc-chip-disabled": "disabled", "class.mat-mdc-chip-with-avatar": "leadingIcon", "class.mdc-evolution-chip--disabled": "disabled", "class.mdc-evolution-chip--selected": "selected", "class.mdc-evolution-chip--selecting": "!_animationsDisabled", "class.mdc-evolution-chip--with-trailing-action": "_hasTrailingIcon()", "class.mdc-evolution-chip--with-primary-icon": "leadingIcon", "class.mdc-evolution-chip--with-primary-graphic": "_hasLeadingGraphic()", "class.mdc-evolution-chip--with-avatar": "leadingIcon", "class.mat-mdc-chip-highlighted": "highlighted", "class.mat-mdc-chip-with-trailing-icon": "_hasTrailingIcon()", "attr.tabindex": "null", "attr.aria-label": "null", "attr.aria-description": "null", "attr.role": "role", "id": "id" }, classAttribute: "mat-mdc-chip mat-mdc-chip-option" }, providers: [
        { provide: MatChip, useExisting: _MatChipOption },
        { provide: MAT_CHIP, useExisting: _MatChipOption }
      ], usesInheritance: true, ngImport: core_exports, template: '<span class="mat-mdc-chip-focus-overlay"></span>\n\n<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary">\n  <button\n    matChipAction\n    [_allowFocusWhenDisabled]="true"\n    [attr.aria-selected]="ariaSelected"\n    [attr.aria-label]="ariaLabel"\n    [attr.aria-describedby]="_ariaDescriptionId"\n    role="option">\n    @if (_hasLeadingGraphic()) {\n      <span class="mdc-evolution-chip__graphic mat-mdc-chip-graphic">\n        <ng-content select="mat-chip-avatar, [matChipAvatar]"></ng-content>\n        <span class="mdc-evolution-chip__checkmark">\n          <svg\n            class="mdc-evolution-chip__checkmark-svg"\n            viewBox="-2 -3 30 30"\n            focusable="false"\n            aria-hidden="true">\n            <path class="mdc-evolution-chip__checkmark-path"\n                  fill="none" stroke="currentColor" d="M1.73,12.91 8.1,19.28 22.79,4.59" />\n          </svg>\n        </span>\n      </span>\n    }\n    <span class="mdc-evolution-chip__text-label mat-mdc-chip-action-label">\n      <ng-content></ng-content>\n      <span class="mat-mdc-chip-primary-focus-indicator mat-focus-indicator"></span>\n    </span>\n  </button>\n</span>\n\n@if (_hasTrailingIcon()) {\n  <span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing">\n    <ng-content select="mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"></ng-content>\n  </span>\n}\n\n<span class="cdk-visually-hidden" [id]="_ariaDescriptionId">{{ariaDescription}}</span>\n', styles: ['.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}@media(forced-colors: active){.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{forced-color-adjust:none}}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-outline-width, 1px);border-radius:var(--mat-chip-container-shape-radius, 8px);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-outline-color, var(--mat-sys-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--trailing{color:var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--trailing{color:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));font-weight:var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mat-chip-with-avatar-avatar-size, 24px);height:var(--mat-chip-with-avatar-avatar-size, 24px);font-size:var(--mat-chip-with-avatar-avatar-size, 24px)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}@media(forced-colors: active){.mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mat-mdc-standard-chip{border-radius:var(--mat-chip-container-shape-radius, 8px);height:var(--mat-chip-container-height, 32px)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-container-color, transparent)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mat-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}@media(forced-colors: active){.mat-mdc-standard-chip{outline:solid 1px}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mat-chip-with-avatar-avatar-shape-radius, 24px);width:var(--mat-chip-with-icon-icon-size, 18px);height:var(--mat-chip-with-icon-icon-size, 18px);font-size:var(--mat-chip-with-icon-icon-size, 18px)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-highlighted{--mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));--mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));--mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));--mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mat-chip-with-icon-disabled-icon-opacity, 0.38)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity, 1)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity, 1)}.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity, 1)}.mat-mdc-chip-remove::after{background-color:var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background-color:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mat-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-remove::before{margin:calc(var(--mat-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-3px;bottom:-3px;left:5px;right:5px;border-radius:50%;box-sizing:border-box;padding:12px;margin:-12px;background-clip:content-box}.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}@media(forced-colors: active){.mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}}.mat-mdc-chip-action:focus .mat-focus-indicator::before{content:""}.mdc-evolution-chip__icon,.mat-mdc-chip-remove .mat-icon{min-height:fit-content}\n'], dependencies: [{ kind: "directive", type: MatChipAction, selector: "[matChipAction]", inputs: ["isInteractive", "disabled", "tabIndex", "_allowFocusWhenDisabled"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipOption, decorators: [{
      type: Component,
      args: [{ selector: "mat-basic-chip-option, [mat-basic-chip-option], mat-chip-option, [mat-chip-option]", host: {
        "class": "mat-mdc-chip mat-mdc-chip-option",
        "[class.mdc-evolution-chip]": "!_isBasicChip",
        "[class.mdc-evolution-chip--filter]": "!_isBasicChip",
        "[class.mdc-evolution-chip--selectable]": "!_isBasicChip",
        "[class.mat-mdc-chip-selected]": "selected",
        "[class.mat-mdc-chip-multiple]": "_chipListMultiple",
        "[class.mat-mdc-chip-disabled]": "disabled",
        "[class.mat-mdc-chip-with-avatar]": "leadingIcon",
        "[class.mdc-evolution-chip--disabled]": "disabled",
        "[class.mdc-evolution-chip--selected]": "selected",
        // This class enables the transition on the checkmark. Usually MDC adds it when selection
        // starts and removes it once the animation is finished. We don't need to go through all
        // the trouble, because we only care about the selection animation. MDC needs to do it,
        // because they also have an exit animation that we don't care about.
        "[class.mdc-evolution-chip--selecting]": "!_animationsDisabled",
        "[class.mdc-evolution-chip--with-trailing-action]": "_hasTrailingIcon()",
        "[class.mdc-evolution-chip--with-primary-icon]": "leadingIcon",
        "[class.mdc-evolution-chip--with-primary-graphic]": "_hasLeadingGraphic()",
        "[class.mdc-evolution-chip--with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-highlighted]": "highlighted",
        "[class.mat-mdc-chip-with-trailing-icon]": "_hasTrailingIcon()",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-description]": "null",
        "[attr.role]": "role",
        "[id]": "id"
      }, providers: [
        { provide: MatChip, useExisting: MatChipOption },
        { provide: MAT_CHIP, useExisting: MatChipOption }
      ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, imports: [MatChipAction], template: '<span class="mat-mdc-chip-focus-overlay"></span>\n\n<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary">\n  <button\n    matChipAction\n    [_allowFocusWhenDisabled]="true"\n    [attr.aria-selected]="ariaSelected"\n    [attr.aria-label]="ariaLabel"\n    [attr.aria-describedby]="_ariaDescriptionId"\n    role="option">\n    @if (_hasLeadingGraphic()) {\n      <span class="mdc-evolution-chip__graphic mat-mdc-chip-graphic">\n        <ng-content select="mat-chip-avatar, [matChipAvatar]"></ng-content>\n        <span class="mdc-evolution-chip__checkmark">\n          <svg\n            class="mdc-evolution-chip__checkmark-svg"\n            viewBox="-2 -3 30 30"\n            focusable="false"\n            aria-hidden="true">\n            <path class="mdc-evolution-chip__checkmark-path"\n                  fill="none" stroke="currentColor" d="M1.73,12.91 8.1,19.28 22.79,4.59" />\n          </svg>\n        </span>\n      </span>\n    }\n    <span class="mdc-evolution-chip__text-label mat-mdc-chip-action-label">\n      <ng-content></ng-content>\n      <span class="mat-mdc-chip-primary-focus-indicator mat-focus-indicator"></span>\n    </span>\n  </button>\n</span>\n\n@if (_hasTrailingIcon()) {\n  <span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing">\n    <ng-content select="mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"></ng-content>\n  </span>\n}\n\n<span class="cdk-visually-hidden" [id]="_ariaDescriptionId">{{ariaDescription}}</span>\n', styles: ['.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}@media(forced-colors: active){.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{forced-color-adjust:none}}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-outline-width, 1px);border-radius:var(--mat-chip-container-shape-radius, 8px);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-outline-color, var(--mat-sys-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--trailing{color:var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--trailing{color:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));font-weight:var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mat-chip-with-avatar-avatar-size, 24px);height:var(--mat-chip-with-avatar-avatar-size, 24px);font-size:var(--mat-chip-with-avatar-avatar-size, 24px)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}@media(forced-colors: active){.mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mat-mdc-standard-chip{border-radius:var(--mat-chip-container-shape-radius, 8px);height:var(--mat-chip-container-height, 32px)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-container-color, transparent)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mat-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}@media(forced-colors: active){.mat-mdc-standard-chip{outline:solid 1px}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mat-chip-with-avatar-avatar-shape-radius, 24px);width:var(--mat-chip-with-icon-icon-size, 18px);height:var(--mat-chip-with-icon-icon-size, 18px);font-size:var(--mat-chip-with-icon-icon-size, 18px)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-highlighted{--mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));--mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));--mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));--mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mat-chip-with-icon-disabled-icon-opacity, 0.38)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity, 1)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity, 1)}.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity, 1)}.mat-mdc-chip-remove::after{background-color:var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background-color:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mat-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-remove::before{margin:calc(var(--mat-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-3px;bottom:-3px;left:5px;right:5px;border-radius:50%;box-sizing:border-box;padding:12px;margin:-12px;background-clip:content-box}.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}@media(forced-colors: active){.mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}}.mat-mdc-chip-action:focus .mat-focus-indicator::before{content:""}.mdc-evolution-chip__icon,.mat-mdc-chip-remove .mat-icon{min-height:fit-content}\n'] }]
    }], propDecorators: { selectable: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], selected: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], selectionChange: [{
      type: Output
    }] } });
    MatChipEditInput = class _MatChipEditInput {
      _elementRef = inject(ElementRef);
      _document = inject(DOCUMENT);
      constructor() {
      }
      initialize(initialValue) {
        this.getNativeElement().focus();
        this.setValue(initialValue);
      }
      getNativeElement() {
        return this._elementRef.nativeElement;
      }
      setValue(value) {
        this.getNativeElement().textContent = value;
        this._moveCursorToEndOfInput();
      }
      getValue() {
        return this.getNativeElement().textContent || "";
      }
      _moveCursorToEndOfInput() {
        const range = this._document.createRange();
        range.selectNodeContents(this.getNativeElement());
        range.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipEditInput, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatChipEditInput, isStandalone: true, selector: "span[matChipEditInput]", host: { attributes: { "role": "textbox", "tabindex": "-1", "contenteditable": "true" }, classAttribute: "mat-chip-edit-input" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipEditInput, decorators: [{
      type: Directive,
      args: [{
        selector: "span[matChipEditInput]",
        host: {
          "class": "mat-chip-edit-input",
          "role": "textbox",
          "tabindex": "-1",
          "contenteditable": "true"
        }
      }]
    }], ctorParameters: () => [] });
    MatChipRow = class _MatChipRow extends MatChip {
      basicChipAttrName = "mat-basic-chip-row";
      /**
       * The editing action has to be triggered in a timeout. While we're waiting on it, a blur
       * event might occur which will interrupt the editing. This flag is used to avoid interruptions
       * while the editing action is being initialized.
       */
      _editStartPending = false;
      editable = false;
      /** Emitted when the chip is edited. */
      edited = new EventEmitter();
      /** The default chip edit input that is used if none is projected into this chip row. */
      defaultEditInput;
      /** The projected chip edit input. */
      contentEditInput;
      _isEditing = false;
      constructor() {
        super();
        this.role = "row";
        this._onBlur.pipe(takeUntil(this.destroyed)).subscribe(() => {
          if (this._isEditing && !this._editStartPending) {
            this._onEditFinish();
          }
        });
      }
      _hasTrailingIcon() {
        return !this._isEditing && super._hasTrailingIcon();
      }
      /** Sends focus to the first gridcell when the user clicks anywhere inside the chip. */
      _handleFocus() {
        if (!this._isEditing && !this.disabled) {
          this.focus();
        }
      }
      _handleKeydown(event) {
        if (event.keyCode === ENTER && !this.disabled) {
          if (this._isEditing) {
            event.preventDefault();
            this._onEditFinish();
          } else if (this.editable) {
            this._startEditing(event);
          }
        } else if (this._isEditing) {
          event.stopPropagation();
        } else {
          super._handleKeydown(event);
        }
      }
      _handleDoubleclick(event) {
        if (!this.disabled && this.editable) {
          this._startEditing(event);
        }
      }
      _startEditing(event) {
        if (!this.primaryAction || this.removeIcon && this._getSourceAction(event.target) === this.removeIcon) {
          return;
        }
        const value = this.value;
        this._isEditing = this._editStartPending = true;
        afterNextRender(() => {
          this._getEditInput().initialize(value);
          this._editStartPending = false;
        }, { injector: this._injector });
      }
      _onEditFinish() {
        this._isEditing = this._editStartPending = false;
        this.edited.emit({ chip: this, value: this._getEditInput().getValue() });
        if (this._document.activeElement === this._getEditInput().getNativeElement() || this._document.activeElement === this._document.body) {
          this.primaryAction.focus();
        }
      }
      _isRippleDisabled() {
        return super._isRippleDisabled() || this._isEditing;
      }
      /**
       * Gets the projected chip edit input, or the default input if none is projected in. One of these
       * two values is guaranteed to be defined.
       */
      _getEditInput() {
        return this.contentEditInput || this.defaultEditInput;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipRow, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatChipRow, isStandalone: true, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: { editable: "editable" }, outputs: { edited: "edited" }, host: { listeners: { "focus": "_handleFocus()", "dblclick": "_handleDoubleclick($event)" }, properties: { "class.mat-mdc-chip-with-avatar": "leadingIcon", "class.mat-mdc-chip-disabled": "disabled", "class.mat-mdc-chip-editing": "_isEditing", "class.mat-mdc-chip-editable": "editable", "class.mdc-evolution-chip--disabled": "disabled", "class.mdc-evolution-chip--with-trailing-action": "_hasTrailingIcon()", "class.mdc-evolution-chip--with-primary-graphic": "leadingIcon", "class.mdc-evolution-chip--with-primary-icon": "leadingIcon", "class.mdc-evolution-chip--with-avatar": "leadingIcon", "class.mat-mdc-chip-highlighted": "highlighted", "class.mat-mdc-chip-with-trailing-icon": "_hasTrailingIcon()", "id": "id", "attr.tabindex": "disabled ? null : -1", "attr.aria-label": "null", "attr.aria-description": "null", "attr.role": "role" }, classAttribute: "mat-mdc-chip mat-mdc-chip-row mdc-evolution-chip" }, providers: [
        { provide: MatChip, useExisting: _MatChipRow },
        { provide: MAT_CHIP, useExisting: _MatChipRow }
      ], queries: [{ propertyName: "contentEditInput", first: true, predicate: MatChipEditInput, descendants: true }], viewQueries: [{ propertyName: "defaultEditInput", first: true, predicate: MatChipEditInput, descendants: true }], usesInheritance: true, ngImport: core_exports, template: '@if (!_isEditing) {\n  <span class="mat-mdc-chip-focus-overlay"></span>\n}\n\n<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary" role="gridcell"\n    matChipAction\n    [disabled]="disabled"\n    [attr.aria-label]="ariaLabel"\n    [attr.aria-describedby]="_ariaDescriptionId">\n  @if (leadingIcon) {\n    <span class="mdc-evolution-chip__graphic mat-mdc-chip-graphic">\n      <ng-content select="mat-chip-avatar, [matChipAvatar]"></ng-content>\n    </span>\n  }\n\n  <span class="mdc-evolution-chip__text-label mat-mdc-chip-action-label">\n    @if (_isEditing) {\n      @if (contentEditInput) {\n        <ng-content select="[matChipEditInput]"></ng-content>\n      } @else {\n        <span matChipEditInput></span>\n      }\n    } @else {\n      <ng-content></ng-content>\n    }\n\n    <span class="mat-mdc-chip-primary-focus-indicator mat-focus-indicator" aria-hidden="true"></span>\n  </span>\n</span>\n\n@if (_hasTrailingIcon()) {\n  <span\n    class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing"\n    role="gridcell">\n    <ng-content select="mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"></ng-content>\n  </span>\n}\n\n<span class="cdk-visually-hidden" [id]="_ariaDescriptionId">{{ariaDescription}}</span>\n', styles: ['.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}@media(forced-colors: active){.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{forced-color-adjust:none}}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-outline-width, 1px);border-radius:var(--mat-chip-container-shape-radius, 8px);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-outline-color, var(--mat-sys-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--trailing{color:var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--trailing{color:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));font-weight:var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mat-chip-with-avatar-avatar-size, 24px);height:var(--mat-chip-with-avatar-avatar-size, 24px);font-size:var(--mat-chip-with-avatar-avatar-size, 24px)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}@media(forced-colors: active){.mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mat-mdc-standard-chip{border-radius:var(--mat-chip-container-shape-radius, 8px);height:var(--mat-chip-container-height, 32px)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-container-color, transparent)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mat-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}@media(forced-colors: active){.mat-mdc-standard-chip{outline:solid 1px}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mat-chip-with-avatar-avatar-shape-radius, 24px);width:var(--mat-chip-with-icon-icon-size, 18px);height:var(--mat-chip-with-icon-icon-size, 18px);font-size:var(--mat-chip-with-icon-icon-size, 18px)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-highlighted{--mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));--mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));--mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));--mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mat-chip-with-icon-disabled-icon-opacity, 0.38)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity, 1)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity, 1)}.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity, 1)}.mat-mdc-chip-remove::after{background-color:var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background-color:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mat-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-remove::before{margin:calc(var(--mat-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-3px;bottom:-3px;left:5px;right:5px;border-radius:50%;box-sizing:border-box;padding:12px;margin:-12px;background-clip:content-box}.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}@media(forced-colors: active){.mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}}.mat-mdc-chip-action:focus .mat-focus-indicator::before{content:""}.mdc-evolution-chip__icon,.mat-mdc-chip-remove .mat-icon{min-height:fit-content}\n'], dependencies: [{ kind: "directive", type: MatChipAction, selector: "[matChipAction]", inputs: ["isInteractive", "disabled", "tabIndex", "_allowFocusWhenDisabled"] }, { kind: "directive", type: MatChipEditInput, selector: "span[matChipEditInput]" }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipRow, decorators: [{
      type: Component,
      args: [{ selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", host: {
        "class": "mat-mdc-chip mat-mdc-chip-row mdc-evolution-chip",
        "[class.mat-mdc-chip-with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-disabled]": "disabled",
        "[class.mat-mdc-chip-editing]": "_isEditing",
        "[class.mat-mdc-chip-editable]": "editable",
        "[class.mdc-evolution-chip--disabled]": "disabled",
        "[class.mdc-evolution-chip--with-trailing-action]": "_hasTrailingIcon()",
        "[class.mdc-evolution-chip--with-primary-graphic]": "leadingIcon",
        "[class.mdc-evolution-chip--with-primary-icon]": "leadingIcon",
        "[class.mdc-evolution-chip--with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-highlighted]": "highlighted",
        "[class.mat-mdc-chip-with-trailing-icon]": "_hasTrailingIcon()",
        "[id]": "id",
        // Has to have a negative tabindex in order to capture
        // focus and redirect it to the primary action.
        "[attr.tabindex]": "disabled ? null : -1",
        "[attr.aria-label]": "null",
        "[attr.aria-description]": "null",
        "[attr.role]": "role",
        "(focus)": "_handleFocus()",
        "(dblclick)": "_handleDoubleclick($event)"
      }, providers: [
        { provide: MatChip, useExisting: MatChipRow },
        { provide: MAT_CHIP, useExisting: MatChipRow }
      ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, imports: [MatChipAction, MatChipEditInput], template: '@if (!_isEditing) {\n  <span class="mat-mdc-chip-focus-overlay"></span>\n}\n\n<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary" role="gridcell"\n    matChipAction\n    [disabled]="disabled"\n    [attr.aria-label]="ariaLabel"\n    [attr.aria-describedby]="_ariaDescriptionId">\n  @if (leadingIcon) {\n    <span class="mdc-evolution-chip__graphic mat-mdc-chip-graphic">\n      <ng-content select="mat-chip-avatar, [matChipAvatar]"></ng-content>\n    </span>\n  }\n\n  <span class="mdc-evolution-chip__text-label mat-mdc-chip-action-label">\n    @if (_isEditing) {\n      @if (contentEditInput) {\n        <ng-content select="[matChipEditInput]"></ng-content>\n      } @else {\n        <span matChipEditInput></span>\n      }\n    } @else {\n      <ng-content></ng-content>\n    }\n\n    <span class="mat-mdc-chip-primary-focus-indicator mat-focus-indicator" aria-hidden="true"></span>\n  </span>\n</span>\n\n@if (_hasTrailingIcon()) {\n  <span\n    class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing"\n    role="gridcell">\n    <ng-content select="mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"></ng-content>\n  </span>\n}\n\n<span class="cdk-visually-hidden" [id]="_ariaDescriptionId">{{ariaDescription}}</span>\n', styles: ['.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}@media(forced-colors: active){.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{forced-color-adjust:none}}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-outline-width, 1px);border-radius:var(--mat-chip-container-shape-radius, 8px);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-outline-color, var(--mat-sys-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--trailing{color:var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--trailing{color:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));font-weight:var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mat-chip-with-avatar-avatar-size, 24px);height:var(--mat-chip-with-avatar-avatar-size, 24px);font-size:var(--mat-chip-with-avatar-avatar-size, 24px)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}@media(forced-colors: active){.mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mat-mdc-standard-chip{border-radius:var(--mat-chip-container-shape-radius, 8px);height:var(--mat-chip-container-height, 32px)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-container-color, transparent)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mat-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}@media(forced-colors: active){.mat-mdc-standard-chip{outline:solid 1px}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mat-chip-with-avatar-avatar-shape-radius, 24px);width:var(--mat-chip-with-icon-icon-size, 18px);height:var(--mat-chip-with-icon-icon-size, 18px);font-size:var(--mat-chip-with-icon-icon-size, 18px)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-highlighted{--mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));--mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));--mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));--mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mat-chip-with-icon-disabled-icon-opacity, 0.38)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity, 1)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity, 1)}.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity, 1)}.mat-mdc-chip-remove::after{background-color:var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background-color:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mat-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-remove::before{margin:calc(var(--mat-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-3px;bottom:-3px;left:5px;right:5px;border-radius:50%;box-sizing:border-box;padding:12px;margin:-12px;background-clip:content-box}.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}@media(forced-colors: active){.mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}}.mat-mdc-chip-action:focus .mat-focus-indicator::before{content:""}.mdc-evolution-chip__icon,.mat-mdc-chip-remove .mat-icon{min-height:fit-content}\n'] }]
    }], ctorParameters: () => [], propDecorators: { editable: [{
      type: Input
    }], edited: [{
      type: Output
    }], defaultEditInput: [{
      type: ViewChild,
      args: [MatChipEditInput]
    }], contentEditInput: [{
      type: ContentChild,
      args: [MatChipEditInput]
    }] } });
    MatChipSet = class _MatChipSet {
      _elementRef = inject(ElementRef);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _dir = inject(Directionality, { optional: true });
      /** Index of the last destroyed chip that had focus. */
      _lastDestroyedFocusedChipIndex = null;
      /** Used to manage focus within the chip list. */
      _keyManager;
      /** Subject that emits when the component has been destroyed. */
      _destroyed = new Subject();
      /** Role to use if it hasn't been overwritten by the user. */
      _defaultRole = "presentation";
      /** Combined stream of all of the child chips' focus events. */
      get chipFocusChanges() {
        return this._getChipStream((chip) => chip._onFocus);
      }
      /** Combined stream of all of the child chips' destroy events. */
      get chipDestroyedChanges() {
        return this._getChipStream((chip) => chip.destroyed);
      }
      /** Combined stream of all of the child chips' remove events. */
      get chipRemovedChanges() {
        return this._getChipStream((chip) => chip.removed);
      }
      /** Whether the chip set is disabled. */
      get disabled() {
        return this._disabled;
      }
      set disabled(value) {
        this._disabled = value;
        this._syncChipsState();
      }
      _disabled = false;
      /** Whether the chip list contains chips or not. */
      get empty() {
        return !this._chips || this._chips.length === 0;
      }
      /** The ARIA role applied to the chip set. */
      get role() {
        if (this._explicitRole) {
          return this._explicitRole;
        }
        return this.empty ? null : this._defaultRole;
      }
      /** Tabindex of the chip set. */
      tabIndex = 0;
      set role(value) {
        this._explicitRole = value;
      }
      _explicitRole = null;
      /** Whether any of the chips inside of this chip-set has focus. */
      get focused() {
        return this._hasFocusedChip();
      }
      /** The chips that are part of this chip set. */
      _chips;
      /** Flat list of all the actions contained within the chips. */
      _chipActions = new QueryList();
      constructor() {
      }
      ngAfterViewInit() {
        this._setUpFocusManagement();
        this._trackChipSetChanges();
        this._trackDestroyedFocusedChip();
      }
      ngOnDestroy() {
        this._keyManager?.destroy();
        this._chipActions.destroy();
        this._destroyed.next();
        this._destroyed.complete();
      }
      /** Checks whether any of the chips is focused. */
      _hasFocusedChip() {
        return this._chips && this._chips.some((chip) => chip._hasFocus());
      }
      /** Syncs the chip-set's state with the individual chips. */
      _syncChipsState() {
        this._chips?.forEach((chip) => {
          chip._chipListDisabled = this._disabled;
          chip._changeDetectorRef.markForCheck();
        });
      }
      /** Dummy method for subclasses to override. Base chip set cannot be focused. */
      focus() {
      }
      /** Handles keyboard events on the chip set. */
      _handleKeydown(event) {
        if (this._originatesFromChip(event)) {
          this._keyManager.onKeydown(event);
        }
      }
      /**
       * Utility to ensure all indexes are valid.
       *
       * @param index The index to be checked.
       * @returns True if the index is valid for our list of chips.
       */
      _isValidIndex(index) {
        return index >= 0 && index < this._chips.length;
      }
      /**
       * Removes the `tabindex` from the chip set and resets it back afterwards, allowing the
       * user to tab out of it. This prevents the set from capturing focus and redirecting
       * it back to the first chip, creating a focus trap, if it user tries to tab away.
       */
      _allowFocusEscape() {
        const previous = this._elementRef.nativeElement.tabIndex;
        if (previous !== -1) {
          this._elementRef.nativeElement.tabIndex = -1;
          setTimeout(() => this._elementRef.nativeElement.tabIndex = previous);
        }
      }
      /**
       * Gets a stream of events from all the chips within the set.
       * The stream will automatically incorporate any newly-added chips.
       */
      _getChipStream(mappingFunction) {
        return this._chips.changes.pipe(startWith(null), switchMap(() => merge(...this._chips.map(mappingFunction))));
      }
      /** Checks whether an event comes from inside a chip element. */
      _originatesFromChip(event) {
        let currentElement = event.target;
        while (currentElement && currentElement !== this._elementRef.nativeElement) {
          if (currentElement.classList.contains("mat-mdc-chip")) {
            return true;
          }
          currentElement = currentElement.parentElement;
        }
        return false;
      }
      /** Sets up the chip set's focus management logic. */
      _setUpFocusManagement() {
        this._chips.changes.pipe(startWith(this._chips)).subscribe((chips) => {
          const actions = [];
          chips.forEach((chip) => chip._getActions().forEach((action) => actions.push(action)));
          this._chipActions.reset(actions);
          this._chipActions.notifyOnChanges();
        });
        this._keyManager = new FocusKeyManager(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir ? this._dir.value : "ltr").withHomeAndEnd().skipPredicate((action) => this._skipPredicate(action));
        this.chipFocusChanges.pipe(takeUntil(this._destroyed)).subscribe(({ chip }) => {
          const action = chip._getSourceAction(document.activeElement);
          if (action) {
            this._keyManager.updateActiveItem(action);
          }
        });
        this._dir?.change.pipe(takeUntil(this._destroyed)).subscribe((direction) => this._keyManager.withHorizontalOrientation(direction));
      }
      /**
       * Determines if key manager should avoid putting a given chip action in the tab index. Skip
       * non-interactive and disabled actions since the user can't do anything with them.
       */
      _skipPredicate(action) {
        return !action.isInteractive || action.disabled;
      }
      /** Listens to changes in the chip set and syncs up the state of the individual chips. */
      _trackChipSetChanges() {
        this._chips.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => {
          if (this.disabled) {
            Promise.resolve().then(() => this._syncChipsState());
          }
          this._redirectDestroyedChipFocus();
        });
      }
      /** Starts tracking the destroyed chips in order to capture the focused one. */
      _trackDestroyedFocusedChip() {
        this.chipDestroyedChanges.pipe(takeUntil(this._destroyed)).subscribe((event) => {
          const chipArray = this._chips.toArray();
          const chipIndex = chipArray.indexOf(event.chip);
          if (this._isValidIndex(chipIndex) && event.chip._hasFocus()) {
            this._lastDestroyedFocusedChipIndex = chipIndex;
          }
        });
      }
      /**
       * Finds the next appropriate chip to move focus to,
       * if the currently-focused chip is destroyed.
       */
      _redirectDestroyedChipFocus() {
        if (this._lastDestroyedFocusedChipIndex == null) {
          return;
        }
        if (this._chips.length) {
          const newIndex = Math.min(this._lastDestroyedFocusedChipIndex, this._chips.length - 1);
          const chipToFocus = this._chips.toArray()[newIndex];
          if (chipToFocus.disabled) {
            if (this._chips.length === 1) {
              this.focus();
            } else {
              this._keyManager.setPreviousItemActive();
            }
          } else {
            chipToFocus.focus();
          }
        } else {
          this.focus();
        }
        this._lastDestroyedFocusedChipIndex = null;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipSet, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.0.0", type: _MatChipSet, isStandalone: true, selector: "mat-chip-set", inputs: { disabled: ["disabled", "disabled", booleanAttribute], role: "role", tabIndex: ["tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)] }, host: { listeners: { "keydown": "_handleKeydown($event)" }, properties: { "attr.role": "role" }, classAttribute: "mat-mdc-chip-set mdc-evolution-chip-set" }, queries: [{ propertyName: "_chips", predicate: MatChip, descendants: true }], ngImport: core_exports, template: `
    <div class="mdc-evolution-chip-set__chips" role="presentation">
      <ng-content></ng-content>
    </div>
  `, isInline: true, styles: [".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder{opacity:1}.mat-mdc-chip-set+input.mat-mdc-chip-input{margin-left:0;margin-right:0}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipSet, decorators: [{
      type: Component,
      args: [{ selector: "mat-chip-set", template: `
    <div class="mdc-evolution-chip-set__chips" role="presentation">
      <ng-content></ng-content>
    </div>
  `, host: {
        "class": "mat-mdc-chip-set mdc-evolution-chip-set",
        "(keydown)": "_handleKeydown($event)",
        "[attr.role]": "role"
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder{opacity:1}.mat-mdc-chip-set+input.mat-mdc-chip-input{margin-left:0;margin-right:0}\n"] }]
    }], ctorParameters: () => [], propDecorators: { disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], role: [{
      type: Input
    }], tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }], _chips: [{
      type: ContentChildren,
      args: [MatChip, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }] } });
    MatChipListboxChange = class {
      source;
      value;
      constructor(source, value) {
        this.source = source;
        this.value = value;
      }
    };
    MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MatChipListbox),
      multi: true
    };
    MatChipListbox = class _MatChipListbox extends MatChipSet {
      /**
       * Function when touched. Set as part of ControlValueAccessor implementation.
       * @docs-private
       */
      _onTouched = () => {
      };
      /**
       * Function when changed. Set as part of ControlValueAccessor implementation.
       * @docs-private
       */
      _onChange = () => {
      };
      // TODO: MDC uses `grid` here
      _defaultRole = "listbox";
      /** Default chip options. */
      _defaultOptions = inject(MAT_CHIPS_DEFAULT_OPTIONS, { optional: true });
      /** Whether the user should be allowed to select multiple chips. */
      get multiple() {
        return this._multiple;
      }
      set multiple(value) {
        this._multiple = value;
        this._syncListboxProperties();
      }
      _multiple = false;
      /** The array of selected chips inside the chip listbox. */
      get selected() {
        const selectedChips = this._chips.toArray().filter((chip) => chip.selected);
        return this.multiple ? selectedChips : selectedChips[0];
      }
      /** Orientation of the chip list. */
      ariaOrientation = "horizontal";
      /**
       * Whether or not this chip listbox is selectable.
       *
       * When a chip listbox is not selectable, the selected states for all
       * the chips inside the chip listbox are always ignored.
       */
      get selectable() {
        return this._selectable;
      }
      set selectable(value) {
        this._selectable = value;
        this._syncListboxProperties();
      }
      _selectable = true;
      /**
       * A function to compare the option values with the selected values. The first argument
       * is a value from an option. The second is a value from the selection. A boolean
       * should be returned.
       */
      compareWith = (o1, o2) => o1 === o2;
      /** Whether this chip listbox is required. */
      required = false;
      /** Whether checkmark indicator for single-selection options is hidden. */
      get hideSingleSelectionIndicator() {
        return this._hideSingleSelectionIndicator;
      }
      set hideSingleSelectionIndicator(value) {
        this._hideSingleSelectionIndicator = value;
        this._syncListboxProperties();
      }
      _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
      /** Combined stream of all of the child chips' selection change events. */
      get chipSelectionChanges() {
        return this._getChipStream((chip) => chip.selectionChange);
      }
      /** Combined stream of all of the child chips' blur events. */
      get chipBlurChanges() {
        return this._getChipStream((chip) => chip._onBlur);
      }
      /** The value of the listbox, which is the combined value of the selected chips. */
      get value() {
        return this._value;
      }
      set value(value) {
        if (this._chips && this._chips.length) {
          this._setSelectionByValue(value, false);
        }
        this._value = value;
      }
      _value;
      /** Event emitted when the selected chip listbox value has been changed by the user. */
      change = new EventEmitter();
      _chips = void 0;
      ngAfterContentInit() {
        this._chips.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => {
          if (this.value !== void 0) {
            Promise.resolve().then(() => {
              this._setSelectionByValue(this.value, false);
            });
          }
          this._syncListboxProperties();
        });
        this.chipBlurChanges.pipe(takeUntil(this._destroyed)).subscribe(() => this._blur());
        this.chipSelectionChanges.pipe(takeUntil(this._destroyed)).subscribe((event) => {
          if (!this.multiple) {
            this._chips.forEach((chip) => {
              if (chip !== event.source) {
                chip._setSelectedState(false, false, false);
              }
            });
          }
          if (event.isUserInput) {
            this._propagateChanges();
          }
        });
      }
      /**
       * Focuses the first selected chip in this chip listbox, or the first non-disabled chip when there
       * are no selected chips.
       */
      focus() {
        if (this.disabled) {
          return;
        }
        const firstSelectedChip = this._getFirstSelectedChip();
        if (firstSelectedChip && !firstSelectedChip.disabled) {
          firstSelectedChip.focus();
        } else if (this._chips.length > 0) {
          this._keyManager.setFirstItemActive();
        } else {
          this._elementRef.nativeElement.focus();
        }
      }
      /**
       * Implemented as part of ControlValueAccessor.
       * @docs-private
       */
      writeValue(value) {
        if (value != null) {
          this.value = value;
        } else {
          this.value = void 0;
        }
      }
      /**
       * Implemented as part of ControlValueAccessor.
       * @docs-private
       */
      registerOnChange(fn) {
        this._onChange = fn;
      }
      /**
       * Implemented as part of ControlValueAccessor.
       * @docs-private
       */
      registerOnTouched(fn) {
        this._onTouched = fn;
      }
      /**
       * Implemented as part of ControlValueAccessor.
       * @docs-private
       */
      setDisabledState(isDisabled) {
        this.disabled = isDisabled;
      }
      /** Selects all chips with value. */
      _setSelectionByValue(value, isUserInput = true) {
        this._clearSelection();
        if (Array.isArray(value)) {
          value.forEach((currentValue) => this._selectValue(currentValue, isUserInput));
        } else {
          this._selectValue(value, isUserInput);
        }
      }
      /** When blurred, marks the field as touched when focus moved outside the chip listbox. */
      _blur() {
        if (!this.disabled) {
          setTimeout(() => {
            if (!this.focused) {
              this._markAsTouched();
            }
          });
        }
      }
      _keydown(event) {
        if (event.keyCode === TAB) {
          super._allowFocusEscape();
        }
      }
      /** Marks the field as touched */
      _markAsTouched() {
        this._onTouched();
        this._changeDetectorRef.markForCheck();
      }
      /** Emits change event to set the model value. */
      _propagateChanges() {
        let valueToEmit = null;
        if (Array.isArray(this.selected)) {
          valueToEmit = this.selected.map((chip) => chip.value);
        } else {
          valueToEmit = this.selected ? this.selected.value : void 0;
        }
        this._value = valueToEmit;
        this.change.emit(new MatChipListboxChange(this, valueToEmit));
        this._onChange(valueToEmit);
        this._changeDetectorRef.markForCheck();
      }
      /**
       * Deselects every chip in the listbox.
       * @param skip Chip that should not be deselected.
       */
      _clearSelection(skip) {
        this._chips.forEach((chip) => {
          if (chip !== skip) {
            chip.deselect();
          }
        });
      }
      /**
       * Finds and selects the chip based on its value.
       * @returns Chip that has the corresponding value.
       */
      _selectValue(value, isUserInput) {
        const correspondingChip = this._chips.find((chip) => {
          return chip.value != null && this.compareWith(chip.value, value);
        });
        if (correspondingChip) {
          isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();
        }
        return correspondingChip;
      }
      /** Syncs the chip-listbox selection state with the individual chips. */
      _syncListboxProperties() {
        if (this._chips) {
          Promise.resolve().then(() => {
            this._chips.forEach((chip) => {
              chip._chipListMultiple = this.multiple;
              chip.chipListSelectable = this._selectable;
              chip._chipListHideSingleSelectionIndicator = this.hideSingleSelectionIndicator;
              chip._changeDetectorRef.markForCheck();
            });
          });
        }
      }
      /** Returns the first selected chip in this listbox, or undefined if no chips are selected. */
      _getFirstSelectedChip() {
        if (Array.isArray(this.selected)) {
          return this.selected.length ? this.selected[0] : void 0;
        } else {
          return this.selected;
        }
      }
      /**
       * Determines if key manager should avoid putting a given chip action in the tab index. Skip
       * non-interactive actions since the user can't do anything with them.
       */
      _skipPredicate(action) {
        return !action.isInteractive;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipListbox, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.0.0", type: _MatChipListbox, isStandalone: true, selector: "mat-chip-listbox", inputs: { multiple: ["multiple", "multiple", booleanAttribute], ariaOrientation: ["aria-orientation", "ariaOrientation"], selectable: ["selectable", "selectable", booleanAttribute], compareWith: "compareWith", required: ["required", "required", booleanAttribute], hideSingleSelectionIndicator: ["hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute], value: "value" }, outputs: { change: "change" }, host: { listeners: { "focus": "focus()", "blur": "_blur()", "keydown": "_keydown($event)" }, properties: { "attr.role": "role", "tabIndex": "(disabled || empty) ? -1 : tabIndex", "attr.aria-required": "role ? required : null", "attr.aria-disabled": "disabled.toString()", "attr.aria-multiselectable": "multiple", "attr.aria-orientation": "ariaOrientation", "class.mat-mdc-chip-list-disabled": "disabled", "class.mat-mdc-chip-list-required": "required" }, classAttribute: "mdc-evolution-chip-set mat-mdc-chip-listbox" }, providers: [MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR], queries: [{ propertyName: "_chips", predicate: MatChipOption, descendants: true }], usesInheritance: true, ngImport: core_exports, template: `
    <div class="mdc-evolution-chip-set__chips" role="presentation">
      <ng-content></ng-content>
    </div>
  `, isInline: true, styles: [".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder{opacity:1}.mat-mdc-chip-set+input.mat-mdc-chip-input{margin-left:0;margin-right:0}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipListbox, decorators: [{
      type: Component,
      args: [{ selector: "mat-chip-listbox", template: `
    <div class="mdc-evolution-chip-set__chips" role="presentation">
      <ng-content></ng-content>
    </div>
  `, host: {
        "class": "mdc-evolution-chip-set mat-mdc-chip-listbox",
        "[attr.role]": "role",
        "[tabIndex]": "(disabled || empty) ? -1 : tabIndex",
        "[attr.aria-required]": "role ? required : null",
        "[attr.aria-disabled]": "disabled.toString()",
        "[attr.aria-multiselectable]": "multiple",
        "[attr.aria-orientation]": "ariaOrientation",
        "[class.mat-mdc-chip-list-disabled]": "disabled",
        "[class.mat-mdc-chip-list-required]": "required",
        "(focus)": "focus()",
        "(blur)": "_blur()",
        "(keydown)": "_keydown($event)"
      }, providers: [MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder{opacity:1}.mat-mdc-chip-set+input.mat-mdc-chip-input{margin-left:0;margin-right:0}\n"] }]
    }], propDecorators: { multiple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], ariaOrientation: [{
      type: Input,
      args: ["aria-orientation"]
    }], selectable: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], compareWith: [{
      type: Input
    }], required: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], hideSingleSelectionIndicator: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], value: [{
      type: Input
    }], change: [{
      type: Output
    }], _chips: [{
      type: ContentChildren,
      args: [MatChipOption, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }] } });
    MatChipGridChange = class {
      source;
      value;
      constructor(source, value) {
        this.source = source;
        this.value = value;
      }
    };
    MatChipGrid = class _MatChipGrid extends MatChipSet {
      ngControl = inject(NgControl, { optional: true, self: true });
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      controlType = "mat-chip-grid";
      /** The chip input to add more chips */
      _chipInput;
      _defaultRole = "grid";
      _errorStateTracker;
      /**
       * List of element ids to propagate to the chipInput's aria-describedby attribute.
       */
      _ariaDescribedbyIds = [];
      /**
       * Function when touched. Set as part of ControlValueAccessor implementation.
       * @docs-private
       */
      _onTouched = () => {
      };
      /**
       * Function when changed. Set as part of ControlValueAccessor implementation.
       * @docs-private
       */
      _onChange = () => {
      };
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get disabled() {
        return this.ngControl ? !!this.ngControl.disabled : this._disabled;
      }
      set disabled(value) {
        this._disabled = value;
        this._syncChipsState();
        this.stateChanges.next();
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get id() {
        return this._chipInput.id;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get empty() {
        return (!this._chipInput || this._chipInput.empty) && (!this._chips || this._chips.length === 0);
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get placeholder() {
        return this._chipInput ? this._chipInput.placeholder : this._placeholder;
      }
      set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
      }
      _placeholder;
      /** Whether any chips or the matChipInput inside of this chip-grid has focus. */
      get focused() {
        return this._chipInput.focused || this._hasFocusedChip();
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get required() {
        return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
      }
      set required(value) {
        this._required = value;
        this.stateChanges.next();
      }
      _required;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get shouldLabelFloat() {
        return !this.empty || this.focused;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get value() {
        return this._value;
      }
      set value(value) {
        this._value = value;
      }
      _value = [];
      /** An object used to control when error messages are shown. */
      get errorStateMatcher() {
        return this._errorStateTracker.matcher;
      }
      set errorStateMatcher(value) {
        this._errorStateTracker.matcher = value;
      }
      /** Combined stream of all of the child chips' blur events. */
      get chipBlurChanges() {
        return this._getChipStream((chip) => chip._onBlur);
      }
      /** Emits when the chip grid value has been changed by the user. */
      change = new EventEmitter();
      /**
       * Emits whenever the raw value of the chip-grid changes. This is here primarily
       * to facilitate the two-way binding for the `value` input.
       * @docs-private
       */
      valueChange = new EventEmitter();
      _chips = void 0;
      /**
       * Emits whenever the component state changes and should cause the parent
       * form-field to update. Implemented as part of `MatFormFieldControl`.
       * @docs-private
       */
      stateChanges = new Subject();
      /** Whether the chip grid is in an error state. */
      get errorState() {
        return this._errorStateTracker.errorState;
      }
      set errorState(value) {
        this._errorStateTracker.errorState = value;
      }
      constructor() {
        super();
        const parentForm = inject(NgForm, { optional: true });
        const parentFormGroup = inject(FormGroupDirective, { optional: true });
        const defaultErrorStateMatcher = inject(ErrorStateMatcher);
        if (this.ngControl) {
          this.ngControl.valueAccessor = this;
        }
        this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
      }
      ngAfterContentInit() {
        this.chipBlurChanges.pipe(takeUntil(this._destroyed)).subscribe(() => {
          this._blur();
          this.stateChanges.next();
        });
        merge(this.chipFocusChanges, this._chips.changes).pipe(takeUntil(this._destroyed)).subscribe(() => this.stateChanges.next());
      }
      ngAfterViewInit() {
        super.ngAfterViewInit();
        if (!this._chipInput && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("mat-chip-grid must be used in combination with matChipInputFor.");
        }
      }
      ngDoCheck() {
        if (this.ngControl) {
          this.updateErrorState();
        }
      }
      ngOnDestroy() {
        super.ngOnDestroy();
        this.stateChanges.complete();
      }
      /** Associates an HTML input element with this chip grid. */
      registerInput(inputElement) {
        this._chipInput = inputElement;
        this._chipInput.setDescribedByIds(this._ariaDescribedbyIds);
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      onContainerClick(event) {
        if (!this.disabled && !this._originatesFromChip(event)) {
          this.focus();
        }
      }
      /**
       * Focuses the first chip in this chip grid, or the associated input when there
       * are no eligible chips.
       */
      focus() {
        if (this.disabled || this._chipInput.focused) {
          return;
        }
        if (!this._chips.length || this._chips.first.disabled) {
          Promise.resolve().then(() => this._chipInput.focus());
        } else {
          const activeItem = this._keyManager.activeItem;
          if (activeItem) {
            activeItem.focus();
          } else {
            this._keyManager.setFirstItemActive();
          }
        }
        this.stateChanges.next();
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get describedByIds() {
        return this._chipInput?.describedByIds || [];
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      setDescribedByIds(ids) {
        this._ariaDescribedbyIds = ids;
        this._chipInput?.setDescribedByIds(ids);
      }
      /**
       * Implemented as part of ControlValueAccessor.
       * @docs-private
       */
      writeValue(value) {
        this._value = value;
      }
      /**
       * Implemented as part of ControlValueAccessor.
       * @docs-private
       */
      registerOnChange(fn) {
        this._onChange = fn;
      }
      /**
       * Implemented as part of ControlValueAccessor.
       * @docs-private
       */
      registerOnTouched(fn) {
        this._onTouched = fn;
      }
      /**
       * Implemented as part of ControlValueAccessor.
       * @docs-private
       */
      setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.stateChanges.next();
      }
      /** Refreshes the error state of the chip grid. */
      updateErrorState() {
        this._errorStateTracker.updateErrorState();
      }
      /** When blurred, mark the field as touched when focus moved outside the chip grid. */
      _blur() {
        if (!this.disabled) {
          setTimeout(() => {
            if (!this.focused) {
              this._propagateChanges();
              this._markAsTouched();
            }
          });
        }
      }
      /**
       * Removes the `tabindex` from the chip grid and resets it back afterwards, allowing the
       * user to tab out of it. This prevents the grid from capturing focus and redirecting
       * it back to the first chip, creating a focus trap, if it user tries to tab away.
       */
      _allowFocusEscape() {
        if (!this._chipInput.focused) {
          super._allowFocusEscape();
        }
      }
      /** Handles custom keyboard events. */
      _handleKeydown(event) {
        const keyCode = event.keyCode;
        const activeItem = this._keyManager.activeItem;
        if (keyCode === TAB) {
          if (this._chipInput.focused && hasModifierKey(event, "shiftKey") && this._chips.length && !this._chips.last.disabled) {
            event.preventDefault();
            if (activeItem) {
              this._keyManager.setActiveItem(activeItem);
            } else {
              this._focusLastChip();
            }
          } else {
            super._allowFocusEscape();
          }
        } else if (!this._chipInput.focused) {
          if ((keyCode === UP_ARROW || keyCode === DOWN_ARROW) && activeItem) {
            const eligibleActions = this._chipActions.filter((action) => action._isPrimary === activeItem._isPrimary && !this._skipPredicate(action));
            const currentIndex = eligibleActions.indexOf(activeItem);
            const delta = event.keyCode === UP_ARROW ? -1 : 1;
            event.preventDefault();
            if (currentIndex > -1 && this._isValidIndex(currentIndex + delta)) {
              this._keyManager.setActiveItem(eligibleActions[currentIndex + delta]);
            }
          } else {
            super._handleKeydown(event);
          }
        }
        this.stateChanges.next();
      }
      _focusLastChip() {
        if (this._chips.length) {
          this._chips.last.focus();
        }
      }
      /** Emits change event to set the model value. */
      _propagateChanges() {
        const valueToEmit = this._chips.length ? this._chips.toArray().map((chip) => chip.value) : [];
        this._value = valueToEmit;
        this.change.emit(new MatChipGridChange(this, valueToEmit));
        this.valueChange.emit(valueToEmit);
        this._onChange(valueToEmit);
        this._changeDetectorRef.markForCheck();
      }
      /** Mark the field as touched */
      _markAsTouched() {
        this._onTouched();
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipGrid, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.0.0", type: _MatChipGrid, isStandalone: true, selector: "mat-chip-grid", inputs: { disabled: ["disabled", "disabled", booleanAttribute], placeholder: "placeholder", required: ["required", "required", booleanAttribute], value: "value", errorStateMatcher: "errorStateMatcher" }, outputs: { change: "change", valueChange: "valueChange" }, host: { listeners: { "focus": "focus()", "blur": "_blur()" }, properties: { "attr.role": "role", "attr.tabindex": "(disabled || (_chips && _chips.length === 0)) ? -1 : tabIndex", "attr.aria-disabled": "disabled.toString()", "attr.aria-invalid": "errorState", "class.mat-mdc-chip-list-disabled": "disabled", "class.mat-mdc-chip-list-invalid": "errorState", "class.mat-mdc-chip-list-required": "required" }, classAttribute: "mat-mdc-chip-set mat-mdc-chip-grid mdc-evolution-chip-set" }, providers: [{ provide: MatFormFieldControl, useExisting: _MatChipGrid }], queries: [{ propertyName: "_chips", predicate: MatChipRow, descendants: true }], usesInheritance: true, ngImport: core_exports, template: `
    <div class="mdc-evolution-chip-set__chips" role="presentation">
      <ng-content></ng-content>
    </div>
  `, isInline: true, styles: [".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder{opacity:1}.mat-mdc-chip-set+input.mat-mdc-chip-input{margin-left:0;margin-right:0}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipGrid, decorators: [{
      type: Component,
      args: [{ selector: "mat-chip-grid", template: `
    <div class="mdc-evolution-chip-set__chips" role="presentation">
      <ng-content></ng-content>
    </div>
  `, host: {
        "class": "mat-mdc-chip-set mat-mdc-chip-grid mdc-evolution-chip-set",
        "[attr.role]": "role",
        "[attr.tabindex]": "(disabled || (_chips && _chips.length === 0)) ? -1 : tabIndex",
        "[attr.aria-disabled]": "disabled.toString()",
        "[attr.aria-invalid]": "errorState",
        "[class.mat-mdc-chip-list-disabled]": "disabled",
        "[class.mat-mdc-chip-list-invalid]": "errorState",
        "[class.mat-mdc-chip-list-required]": "required",
        "(focus)": "focus()",
        "(blur)": "_blur()"
      }, providers: [{ provide: MatFormFieldControl, useExisting: MatChipGrid }], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder{opacity:1}.mat-mdc-chip-set+input.mat-mdc-chip-input{margin-left:0;margin-right:0}\n"] }]
    }], ctorParameters: () => [], propDecorators: { disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], placeholder: [{
      type: Input
    }], required: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], value: [{
      type: Input
    }], errorStateMatcher: [{
      type: Input
    }], change: [{
      type: Output
    }], valueChange: [{
      type: Output
    }], _chips: [{
      type: ContentChildren,
      args: [MatChipRow, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }] } });
    MatChipInput = class _MatChipInput {
      _elementRef = inject(ElementRef);
      /** Whether the control is focused. */
      focused = false;
      /** Register input for chip list */
      get chipGrid() {
        return this._chipGrid;
      }
      set chipGrid(value) {
        if (value) {
          this._chipGrid = value;
          this._chipGrid.registerInput(this);
        }
      }
      _chipGrid;
      /**
       * Whether or not the chipEnd event will be emitted when the input is blurred.
       */
      addOnBlur = false;
      /**
       * The list of key codes that will trigger a chipEnd event.
       *
       * Defaults to `[ENTER]`.
       */
      separatorKeyCodes;
      /** Emitted when a chip is to be added. */
      chipEnd = new EventEmitter();
      /** The input's placeholder text. */
      placeholder = "";
      /** Unique id for the input. */
      id = inject(_IdGenerator).getId("mat-mdc-chip-list-input-");
      /** Whether the input is disabled. */
      get disabled() {
        return this._disabled || this._chipGrid && this._chipGrid.disabled;
      }
      set disabled(value) {
        this._disabled = value;
      }
      _disabled = false;
      /** Whether the input is readonly. */
      readonly = false;
      /** Whether the input should remain interactive when it is disabled. */
      disabledInteractive;
      /** Whether the input is empty. */
      get empty() {
        return !this.inputElement.value;
      }
      /** The native input element to which this directive is attached. */
      inputElement;
      constructor() {
        const defaultOptions = inject(MAT_CHIPS_DEFAULT_OPTIONS);
        const formField = inject(MAT_FORM_FIELD, { optional: true });
        this.inputElement = this._elementRef.nativeElement;
        this.separatorKeyCodes = defaultOptions.separatorKeyCodes;
        this.disabledInteractive = defaultOptions.inputDisabledInteractive ?? false;
        if (formField) {
          this.inputElement.classList.add("mat-mdc-form-field-input-control");
        }
      }
      ngOnChanges() {
        this._chipGrid.stateChanges.next();
      }
      ngOnDestroy() {
        this.chipEnd.complete();
      }
      /** Utility method to make host definition/tests more clear. */
      _keydown(event) {
        if (this.empty && event.keyCode === BACKSPACE) {
          if (!event.repeat) {
            this._chipGrid._focusLastChip();
          }
          event.preventDefault();
        } else {
          this._emitChipEnd(event);
        }
      }
      /** Checks to see if the blur should emit the (chipEnd) event. */
      _blur() {
        if (this.addOnBlur) {
          this._emitChipEnd();
        }
        this.focused = false;
        if (!this._chipGrid.focused) {
          this._chipGrid._blur();
        }
        this._chipGrid.stateChanges.next();
      }
      _focus() {
        this.focused = true;
        this._chipGrid.stateChanges.next();
      }
      /** Checks to see if the (chipEnd) event needs to be emitted. */
      _emitChipEnd(event) {
        if (!event || this._isSeparatorKey(event) && !event.repeat) {
          this.chipEnd.emit({
            input: this.inputElement,
            value: this.inputElement.value,
            chipInput: this
          });
          event?.preventDefault();
        }
      }
      _onInput() {
        this._chipGrid.stateChanges.next();
      }
      /** Focuses the input. */
      focus() {
        this.inputElement.focus();
      }
      /** Clears the input */
      clear() {
        this.inputElement.value = "";
      }
      /**
       * Implemented as part of MatChipTextControl.
       * @docs-private
       */
      get describedByIds() {
        const element = this._elementRef.nativeElement;
        const existingDescribedBy = element.getAttribute("aria-describedby");
        return existingDescribedBy?.split(" ") || [];
      }
      setDescribedByIds(ids) {
        const element = this._elementRef.nativeElement;
        if (ids.length) {
          element.setAttribute("aria-describedby", ids.join(" "));
        } else {
          element.removeAttribute("aria-describedby");
        }
      }
      /** Checks whether a keycode is one of the configured separators. */
      _isSeparatorKey(event) {
        return !hasModifierKey(event) && new Set(this.separatorKeyCodes).has(event.keyCode);
      }
      /** Gets the value to set on the `readonly` attribute. */
      _getReadonlyAttribute() {
        return this.readonly || this.disabled && this.disabledInteractive ? "true" : null;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipInput, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _MatChipInput, isStandalone: true, selector: "input[matChipInputFor]", inputs: { chipGrid: ["matChipInputFor", "chipGrid"], addOnBlur: ["matChipInputAddOnBlur", "addOnBlur", booleanAttribute], separatorKeyCodes: ["matChipInputSeparatorKeyCodes", "separatorKeyCodes"], placeholder: "placeholder", id: "id", disabled: ["disabled", "disabled", booleanAttribute], readonly: ["readonly", "readonly", booleanAttribute], disabledInteractive: ["matChipInputDisabledInteractive", "disabledInteractive", booleanAttribute] }, outputs: { chipEnd: "matChipInputTokenEnd" }, host: { listeners: { "keydown": "_keydown($event)", "blur": "_blur()", "focus": "_focus()", "input": "_onInput()" }, properties: { "id": "id", "attr.disabled": 'disabled && !disabledInteractive ? "" : null', "attr.placeholder": "placeholder || null", "attr.aria-invalid": "_chipGrid && _chipGrid.ngControl ? _chipGrid.ngControl.invalid : null", "attr.aria-required": "_chipGrid && _chipGrid.required || null", "attr.aria-disabled": 'disabled && disabledInteractive ? "true" : null', "attr.readonly": "_getReadonlyAttribute()", "attr.required": "_chipGrid && _chipGrid.required || null" }, classAttribute: "mat-mdc-chip-input mat-mdc-input-element mdc-text-field__input mat-input-element" }, exportAs: ["matChipInput", "matChipInputFor"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipInput, decorators: [{
      type: Directive,
      args: [{
        selector: "input[matChipInputFor]",
        exportAs: "matChipInput, matChipInputFor",
        host: {
          // TODO: eventually we should remove `mat-input-element` from here since it comes from the
          // non-MDC version of the input. It's currently being kept for backwards compatibility, because
          // the MDC chips were landed initially with it.
          "class": "mat-mdc-chip-input mat-mdc-input-element mdc-text-field__input mat-input-element",
          "(keydown)": "_keydown($event)",
          "(blur)": "_blur()",
          "(focus)": "_focus()",
          "(input)": "_onInput()",
          "[id]": "id",
          "[attr.disabled]": 'disabled && !disabledInteractive ? "" : null',
          "[attr.placeholder]": "placeholder || null",
          "[attr.aria-invalid]": "_chipGrid && _chipGrid.ngControl ? _chipGrid.ngControl.invalid : null",
          "[attr.aria-required]": "_chipGrid && _chipGrid.required || null",
          "[attr.aria-disabled]": 'disabled && disabledInteractive ? "true" : null',
          "[attr.readonly]": "_getReadonlyAttribute()",
          "[attr.required]": "_chipGrid && _chipGrid.required || null"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { chipGrid: [{
      type: Input,
      args: ["matChipInputFor"]
    }], addOnBlur: [{
      type: Input,
      args: [{ alias: "matChipInputAddOnBlur", transform: booleanAttribute }]
    }], separatorKeyCodes: [{
      type: Input,
      args: ["matChipInputSeparatorKeyCodes"]
    }], chipEnd: [{
      type: Output,
      args: ["matChipInputTokenEnd"]
    }], placeholder: [{
      type: Input
    }], id: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], readonly: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disabledInteractive: [{
      type: Input,
      args: [{ alias: "matChipInputDisabledInteractive", transform: booleanAttribute }]
    }] } });
    CHIP_DECLARATIONS = [
      MatChip,
      MatChipAvatar,
      MatChipEditInput,
      MatChipGrid,
      MatChipInput,
      MatChipListbox,
      MatChipOption,
      MatChipRemove,
      MatChipRow,
      MatChipSet,
      MatChipTrailingIcon
    ];
    MatChipsModule = class _MatChipsModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipsModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipsModule, imports: [
        MatCommonModule,
        MatRippleModule,
        MatChipAction,
        MatChip,
        MatChipAvatar,
        MatChipEditInput,
        MatChipGrid,
        MatChipInput,
        MatChipListbox,
        MatChipOption,
        MatChipRemove,
        MatChipRow,
        MatChipSet,
        MatChipTrailingIcon
      ], exports: [
        MatCommonModule,
        MatChip,
        MatChipAvatar,
        MatChipEditInput,
        MatChipGrid,
        MatChipInput,
        MatChipListbox,
        MatChipOption,
        MatChipRemove,
        MatChipRow,
        MatChipSet,
        MatChipTrailingIcon
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipsModule, providers: [
        ErrorStateMatcher,
        {
          provide: MAT_CHIPS_DEFAULT_OPTIONS,
          useValue: {
            separatorKeyCodes: [ENTER]
          }
        }
      ], imports: [MatCommonModule, MatRippleModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipsModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatRippleModule, MatChipAction, CHIP_DECLARATIONS],
        exports: [MatCommonModule, CHIP_DECLARATIONS],
        providers: [
          ErrorStateMatcher,
          {
            provide: MAT_CHIPS_DEFAULT_OPTIONS,
            useValue: {
              separatorKeyCodes: [ENTER]
            }
          }
        ]
      }]
    }] });
  }
});

// node_modules/ngx-highlightjs/fesm2022/ngx-highlightjs.mjs
function getPolicy() {
  if (!policy) {
    try {
      policy = window?.trustedTypes?.createPolicy("ngx-highlightjs", {
        createHTML: (s) => s
      });
    } catch {
    }
  }
  return policy;
}
function trustedHTMLFromStringBypass(html) {
  return getPolicy()?.createHTML(html) || html;
}
var HIGHLIGHT_OPTIONS, LoaderErrors, _HighlightLoader, HighlightLoader, importModule, _HighlightJS, HighlightJS, policy, _HighlightBase, HighlightBase, _Highlight, Highlight, _HighlightAuto, HighlightAuto, _HighlightModule, HighlightModule;
var init_ngx_highlightjs = __esm({
  "node_modules/ngx-highlightjs/fesm2022/ngx-highlightjs.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_platform_browser();
    init_common();
    init_esm();
    HIGHLIGHT_OPTIONS = new InjectionToken("HIGHLIGHT_OPTIONS");
    (function(LoaderErrors2) {
      LoaderErrors2["FULL_WITH_CORE_LIBRARY_IMPORTS"] = "The full library and the core library were imported, only one of them should be imported!";
      LoaderErrors2["FULL_WITH_LANGUAGE_IMPORTS"] = "The highlighting languages were imported they are not needed!";
      LoaderErrors2["CORE_WITHOUT_LANGUAGE_IMPORTS"] = "The highlighting languages were not imported!";
      LoaderErrors2["LANGUAGE_WITHOUT_CORE_IMPORTS"] = "The core library was not imported!";
      LoaderErrors2["NO_FULL_AND_NO_CORE_IMPORTS"] = "Highlight.js library was not imported!";
    })(LoaderErrors || (LoaderErrors = {}));
    _HighlightLoader = class _HighlightLoader {
      constructor() {
        this.document = inject(DOCUMENT);
        this.isPlatformBrowser = isPlatformBrowser(inject(PLATFORM_ID));
        this.options = inject(HIGHLIGHT_OPTIONS, { optional: true });
        this._ready = new BehaviorSubject(null);
        this.ready = firstValueFrom(this._ready.asObservable().pipe(filter((hljs) => !!hljs)));
        if (this.isPlatformBrowser) {
          if (this.document.defaultView["hljs"]) {
            this._ready.next(this.document.defaultView["hljs"]);
          } else {
            this._loadLibrary().pipe(switchMap((hljs) => {
              if (this.options?.lineNumbersLoader) {
                this.document.defaultView["hljs"] = hljs;
                return this.loadLineNumbers().pipe(tap((plugin) => {
                  plugin.activateLineNumbers();
                  this._ready.next(hljs);
                }));
              } else {
                this._ready.next(hljs);
                return EMPTY;
              }
            }), catchError((e) => {
              console.error("[HLJS] ", e);
              this._ready.error(e);
              return EMPTY;
            })).subscribe();
          }
          if (this.options?.themePath) {
            this.loadTheme(this.options.themePath);
          }
        }
      }
      /**
       * Lazy-Load highlight.js library
       */
      _loadLibrary() {
        if (this.options) {
          if (this.options.fullLibraryLoader && this.options.coreLibraryLoader) {
            return throwError(() => LoaderErrors.FULL_WITH_CORE_LIBRARY_IMPORTS);
          }
          if (this.options.fullLibraryLoader && this.options.languages) {
            return throwError(() => LoaderErrors.FULL_WITH_LANGUAGE_IMPORTS);
          }
          if (this.options.coreLibraryLoader && !this.options.languages) {
            return throwError(() => LoaderErrors.CORE_WITHOUT_LANGUAGE_IMPORTS);
          }
          if (!this.options.coreLibraryLoader && this.options.languages) {
            return throwError(() => LoaderErrors.LANGUAGE_WITHOUT_CORE_IMPORTS);
          }
          if (this.options.fullLibraryLoader) {
            return this.loadFullLibrary();
          }
          if (this.options.coreLibraryLoader && this.options.languages && Object.keys(this.options.languages).length) {
            return this.loadCoreLibrary().pipe(switchMap((hljs) => this._loadLanguages(hljs)));
          }
        }
        return throwError(() => LoaderErrors.NO_FULL_AND_NO_CORE_IMPORTS);
      }
      /**
       * Lazy-load highlight.js languages
       */
      _loadLanguages(hljs) {
        const languages = Object.entries(this.options.languages).map(([langName, langLoader]) => importModule(langLoader()).pipe(tap((langFunc) => hljs.registerLanguage(langName, langFunc))));
        return forkJoin(languages).pipe(map(() => hljs));
      }
      /**
       * Import highlight.js core library
       */
      loadCoreLibrary() {
        return importModule(this.options.coreLibraryLoader());
      }
      /**
       * Import highlight.js library with all languages
       */
      loadFullLibrary() {
        return importModule(this.options.fullLibraryLoader());
      }
      /**
       * Import line numbers library
       */
      loadLineNumbers() {
        return from(this.options.lineNumbersLoader());
      }
      /**
       * Reload theme styles
       */
      setTheme(path) {
        if (this.isPlatformBrowser) {
          if (this._themeLinkElement) {
            this._themeLinkElement.href = path;
          } else {
            this.loadTheme(path);
          }
        }
      }
      /**
       * Load theme
       */
      loadTheme(path) {
        this._themeLinkElement = this.document.createElement("link");
        this._themeLinkElement.href = path;
        this._themeLinkElement.type = "text/css";
        this._themeLinkElement.rel = "stylesheet";
        this._themeLinkElement.media = "screen,print";
        this.document.head.appendChild(this._themeLinkElement);
      }
    };
    _HighlightLoader.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: core_exports, type: _HighlightLoader, deps: [], target: FactoryTarget.Injectable });
    _HighlightLoader.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: core_exports, type: _HighlightLoader, providedIn: "root" });
    HighlightLoader = _HighlightLoader;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: core_exports, type: HighlightLoader, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }], ctorParameters: () => [] });
    importModule = (moduleLoader) => {
      return from(moduleLoader).pipe(filter((module) => !!module?.default), map((module) => module.default));
    };
    _HighlightJS = class _HighlightJS {
      constructor() {
        this.loader = inject(HighlightLoader);
        this.options = inject(HIGHLIGHT_OPTIONS, { optional: true });
        this.hljsSignal = signal(null);
        this.hljs = computed(() => this.hljsSignal());
        this.loader.ready.then((hljs) => {
          this.hljsSignal.set(hljs);
          if (this.options?.highlightOptions) {
            hljs.configure(this.options.highlightOptions);
          }
        });
      }
      /**
       * Core highlighting function. Accepts the code to highlight (string) and a list of options (object)
       */
      highlight(code, options) {
        return __async(this, null, function* () {
          const hljs = yield this.loader.ready;
          return hljs.highlight(code, options);
        });
      }
      /**
       * Highlighting with language detection.
       */
      highlightAuto(value, languageSubset) {
        return __async(this, null, function* () {
          const hljs = yield this.loader.ready;
          return hljs.highlightAuto(value, languageSubset);
        });
      }
      /**
       * Applies highlighting to a DOM node containing code.
       * This function is the one to use to apply highlighting dynamically after page load or within initialization code of third-party JavaScript frameworks.
       * The function uses language detection by default but you can specify the language in the class attribute of the DOM node. See the scopes reference for all available language names and scopes.
       */
      highlightElement(element) {
        return __async(this, null, function* () {
          const hljs = yield this.loader.ready;
          hljs.highlightElement(element);
        });
      }
      /**
       * Applies highlighting to all elements on a page matching the configured cssSelector. The default cssSelector value is 'pre code',
       * which highlights all code blocks. This can be called before or after the page’s onload event has fired.
       */
      highlightAll() {
        return __async(this, null, function* () {
          const hljs = yield this.loader.ready;
          hljs.highlightAll();
        });
      }
      /**
       * @deprecated in version 12
       * Configures global options:
       */
      configure(config) {
        return __async(this, null, function* () {
          const hljs = yield this.loader.ready;
          hljs.configure(config);
        });
      }
      /**
       * Adds new language to the library under the specified name. Used mostly internally.
       * The function is passed the hljs object to be able to use common regular expressions defined within it.
       */
      registerLanguage(languageName, languageDefinition) {
        return __async(this, null, function* () {
          const hljs = yield this.loader.ready;
          hljs.registerLanguage(languageName, languageDefinition);
        });
      }
      /**
       * Removes a language and its aliases from the library. Used mostly internally
       */
      unregisterLanguage(languageName) {
        return __async(this, null, function* () {
          const hljs = yield this.loader.ready;
          hljs.unregisterLanguage(languageName);
        });
      }
      /**
       * Adds new language alias or aliases to the library for the specified language name defined under languageName key.
       */
      registerAliases(_0, _1) {
        return __async(this, arguments, function* (alias, { languageName }) {
          const hljs = yield this.loader.ready;
          hljs.registerAliases(alias, { languageName });
        });
      }
      /**
       * @return The languages names list.
       */
      listLanguages() {
        return __async(this, null, function* () {
          const hljs = yield this.loader.ready;
          return hljs.listLanguages();
        });
      }
      /**
       * Looks up a language by name or alias.
       */
      getLanguage(name) {
        return __async(this, null, function* () {
          const hljs = yield this.loader.ready;
          return hljs.getLanguage(name);
        });
      }
      /**
       * Enables safe mode. This is the default mode, providing the most reliable experience for production usage.
       */
      safeMode() {
        return __async(this, null, function* () {
          const hljs = yield this.loader.ready;
          hljs.safeMode();
        });
      }
      /**
       * Enables debug/development mode.
       */
      debugMode() {
        return __async(this, null, function* () {
          const hljs = yield this.loader.ready;
          hljs.debugMode();
        });
      }
      /**
       * Display line numbers
       */
      lineNumbersBlock(el, options) {
        return __async(this, null, function* () {
          const hljs = yield this.loader.ready;
          if (hljs.lineNumbersBlock) {
            hljs.lineNumbersBlock(el, options);
          }
        });
      }
    };
    _HighlightJS.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: core_exports, type: _HighlightJS, deps: [], target: FactoryTarget.Injectable });
    _HighlightJS.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: core_exports, type: _HighlightJS, providedIn: "root" });
    HighlightJS = _HighlightJS;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: core_exports, type: HighlightJS, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }], ctorParameters: () => [] });
    _HighlightBase = class _HighlightBase {
      constructor() {
        this._hljs = inject(HighlightJS);
        this._nativeElement = inject(ElementRef).nativeElement;
        this._sanitizer = inject(DomSanitizer);
        afterRenderEffect({
          write: () => {
            const code = this.code();
            this.setTextContent(code || "");
            if (code) {
              this.highlightElement(code);
            }
          }
        });
        afterRenderEffect({
          write: () => {
            const res = this.highlightResult();
            this.setInnerHTML(res?.value);
            this.highlighted.emit(res);
          }
        });
      }
      setTextContent(content) {
        requestAnimationFrame(() => this._nativeElement.textContent = content);
      }
      setInnerHTML(content) {
        requestAnimationFrame(() => this._nativeElement.innerHTML = trustedHTMLFromStringBypass(this._sanitizer.sanitize(SecurityContext.HTML, content) || ""));
      }
    };
    _HighlightBase.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: core_exports, type: _HighlightBase, deps: [], target: FactoryTarget.Directive });
    _HighlightBase.\u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "19.2.14", type: _HighlightBase, isStandalone: true, ngImport: core_exports });
    HighlightBase = _HighlightBase;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: core_exports, type: HighlightBase, decorators: [{
      type: Directive
    }], ctorParameters: () => [] });
    _Highlight = class _Highlight extends HighlightBase {
      constructor() {
        super(...arguments);
        this.code = input(null, { alias: "highlight" });
        this.highlightResult = signal(null);
        this.language = input.required();
        this.ignoreIllegals = input(void 0, {
          transform: booleanAttribute
        });
        this.highlighted = output();
      }
      highlightElement(code) {
        return __async(this, null, function* () {
          const res = yield this._hljs.highlight(code, {
            language: this.language(),
            ignoreIllegals: this.ignoreIllegals()
          });
          this.highlightResult.set(res);
        });
      }
    };
    _Highlight.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: core_exports, type: _Highlight, deps: null, target: FactoryTarget.Directive });
    _Highlight.\u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "17.1.0", version: "19.2.14", type: _Highlight, isStandalone: true, selector: "[highlight]", inputs: { code: { classPropertyName: "code", publicName: "highlight", isSignal: true, isRequired: false, transformFunction: null }, language: { classPropertyName: "language", publicName: "language", isSignal: true, isRequired: true, transformFunction: null }, ignoreIllegals: { classPropertyName: "ignoreIllegals", publicName: "ignoreIllegals", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { highlighted: "highlighted" }, host: { properties: { "class.hljs": "true" } }, providers: [{ provide: HighlightBase, useExisting: _Highlight }], usesInheritance: true, ngImport: core_exports });
    Highlight = _Highlight;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: core_exports, type: Highlight, decorators: [{
      type: Directive,
      args: [{
        selector: "[highlight]",
        providers: [{ provide: HighlightBase, useExisting: Highlight }],
        host: {
          "[class.hljs]": "true"
        }
      }]
    }] });
    _HighlightAuto = class _HighlightAuto extends HighlightBase {
      constructor() {
        super(...arguments);
        this.code = input(null, { alias: "highlightAuto" });
        this.highlightResult = signal(null);
        this.languages = input();
        this.highlighted = output();
      }
      highlightElement(code) {
        return __async(this, null, function* () {
          const res = yield this._hljs.highlightAuto(code, this.languages());
          this.highlightResult.set(res);
        });
      }
    };
    _HighlightAuto.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: core_exports, type: _HighlightAuto, deps: null, target: FactoryTarget.Directive });
    _HighlightAuto.\u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "17.1.0", version: "19.2.14", type: _HighlightAuto, isStandalone: true, selector: "[highlightAuto]", inputs: { code: { classPropertyName: "code", publicName: "highlightAuto", isSignal: true, isRequired: false, transformFunction: null }, languages: { classPropertyName: "languages", publicName: "languages", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { highlighted: "highlighted" }, host: { properties: { "class.hljs": "true" } }, providers: [{ provide: HighlightBase, useExisting: _HighlightAuto }], usesInheritance: true, ngImport: core_exports });
    HighlightAuto = _HighlightAuto;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: core_exports, type: HighlightAuto, decorators: [{
      type: Directive,
      args: [{
        selector: "[highlightAuto]",
        providers: [{ provide: HighlightBase, useExisting: HighlightAuto }],
        host: {
          "[class.hljs]": "true"
        }
      }]
    }] });
    _HighlightModule = class _HighlightModule {
    };
    _HighlightModule.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: core_exports, type: _HighlightModule, deps: [], target: FactoryTarget.NgModule });
    _HighlightModule.\u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.14", ngImport: core_exports, type: _HighlightModule, imports: [Highlight, HighlightAuto], exports: [Highlight, HighlightAuto] });
    _HighlightModule.\u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "19.2.14", ngImport: core_exports, type: _HighlightModule });
    HighlightModule = _HighlightModule;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: core_exports, type: HighlightModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Highlight, HighlightAuto],
        exports: [Highlight, HighlightAuto]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/clipboard.mjs
var PendingCopy, Clipboard, CDK_COPY_TO_CLIPBOARD_CONFIG, CdkCopyToClipboard, ClipboardModule;
var init_clipboard = __esm({
  "node_modules/@angular/cdk/fesm2022/clipboard.mjs"() {
    "use strict";
    init_core();
    init_core();
    PendingCopy = class {
      _document;
      _textarea;
      constructor(text, _document) {
        this._document = _document;
        const textarea = this._textarea = this._document.createElement("textarea");
        const styles = textarea.style;
        styles.position = "fixed";
        styles.top = styles.opacity = "0";
        styles.left = "-999em";
        textarea.setAttribute("aria-hidden", "true");
        textarea.value = text;
        textarea.readOnly = true;
        (this._document.fullscreenElement || this._document.body).appendChild(textarea);
      }
      /** Finishes copying the text. */
      copy() {
        const textarea = this._textarea;
        let successful = false;
        try {
          if (textarea) {
            const currentFocus = this._document.activeElement;
            textarea.select();
            textarea.setSelectionRange(0, textarea.value.length);
            successful = this._document.execCommand("copy");
            if (currentFocus) {
              currentFocus.focus();
            }
          }
        } catch {
        }
        return successful;
      }
      /** Cleans up DOM changes used to perform the copy operation. */
      destroy() {
        const textarea = this._textarea;
        if (textarea) {
          textarea.remove();
          this._textarea = void 0;
        }
      }
    };
    Clipboard = class _Clipboard {
      _document = inject(DOCUMENT);
      constructor() {
      }
      /**
       * Copies the provided text into the user's clipboard.
       *
       * @param text The string to copy.
       * @returns Whether the operation was successful.
       */
      copy(text) {
        const pendingCopy = this.beginCopy(text);
        const successful = pendingCopy.copy();
        pendingCopy.destroy();
        return successful;
      }
      /**
       * Prepares a string to be copied later. This is useful for large strings
       * which take too long to successfully render and be copied in the same tick.
       *
       * The caller must call `destroy` on the returned `PendingCopy`.
       *
       * @param text The string to copy.
       * @returns the pending copy operation.
       */
      beginCopy(text) {
        return new PendingCopy(text, this._document);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Clipboard, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Clipboard, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: Clipboard, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CDK_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken("CDK_COPY_TO_CLIPBOARD_CONFIG");
    CdkCopyToClipboard = class _CdkCopyToClipboard {
      _clipboard = inject(Clipboard);
      _ngZone = inject(NgZone);
      /** Content to be copied. */
      text = "";
      /**
       * How many times to attempt to copy the text. This may be necessary for longer text, because
       * the browser needs time to fill an intermediate textarea element and copy the content.
       */
      attempts = 1;
      /**
       * Emits when some text is copied to the clipboard. The
       * emitted value indicates whether copying was successful.
       */
      copied = new EventEmitter();
      /** Copies that are currently being attempted. */
      _pending = /* @__PURE__ */ new Set();
      /** Whether the directive has been destroyed. */
      _destroyed;
      /** Timeout for the current copy attempt. */
      _currentTimeout;
      constructor() {
        const config = inject(CDK_COPY_TO_CLIPBOARD_CONFIG, { optional: true });
        if (config && config.attempts != null) {
          this.attempts = config.attempts;
        }
      }
      /** Copies the current text to the clipboard. */
      copy(attempts = this.attempts) {
        if (attempts > 1) {
          let remainingAttempts = attempts;
          const pending = this._clipboard.beginCopy(this.text);
          this._pending.add(pending);
          const attempt = () => {
            const successful = pending.copy();
            if (!successful && --remainingAttempts && !this._destroyed) {
              this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
            } else {
              this._currentTimeout = null;
              this._pending.delete(pending);
              pending.destroy();
              this.copied.emit(successful);
            }
          };
          attempt();
        } else {
          this.copied.emit(this._clipboard.copy(this.text));
        }
      }
      ngOnDestroy() {
        if (this._currentTimeout) {
          clearTimeout(this._currentTimeout);
        }
        this._pending.forEach((copy) => copy.destroy());
        this._pending.clear();
        this._destroyed = true;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkCopyToClipboard, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkCopyToClipboard, isStandalone: true, selector: "[cdkCopyToClipboard]", inputs: { text: ["cdkCopyToClipboard", "text"], attempts: ["cdkCopyToClipboardAttempts", "attempts"] }, outputs: { copied: "cdkCopyToClipboardCopied" }, host: { listeners: { "click": "copy()" } }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkCopyToClipboard, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkCopyToClipboard]",
        host: {
          "(click)": "copy()"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { text: [{
      type: Input,
      args: ["cdkCopyToClipboard"]
    }], attempts: [{
      type: Input,
      args: ["cdkCopyToClipboardAttempts"]
    }], copied: [{
      type: Output,
      args: ["cdkCopyToClipboardCopied"]
    }] } });
    ClipboardModule = class _ClipboardModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ClipboardModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _ClipboardModule, imports: [CdkCopyToClipboard], exports: [CdkCopyToClipboard] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ClipboardModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: ClipboardModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [CdkCopyToClipboard],
        exports: [CdkCopyToClipboard]
      }]
    }] });
  }
});

// angular:jit:template:src\app\features\snippets\snippets-page\snippets-page.html
var snippets_page_default;
var init_snippets_page = __esm({
  "angular:jit:template:src\\app\\features\\snippets\\snippets-page\\snippets-page.html"() {
    snippets_page_default = `<div class="feature-card">\r
  <div class="feature-card-header">\r
    <mat-icon fontIcon="code"></mat-icon>\r
    <h1>Snippets</h1>\r
  </div>\r
  <div class="snippets-container">\r
    <form class="snippet-form" (ngSubmit)="addOrUpdateSnippet()">\r
      <div class="snippet-form-row">\r
        <mat-form-field appearance="outline">\r
          <mat-label>Title</mat-label>\r
          <input matInput [(ngModel)]="newSnippet.title" name="title" required />\r
        </mat-form-field>\r
        <mat-form-field appearance="outline">\r
          <mat-label>Language</mat-label>\r
          <mat-select [(ngModel)]="newSnippet.language" name="language" required>\r
            <mat-option *ngFor="let lang of languages" [value]="lang">{{ lang }}</mat-option>\r
          </mat-select>\r
        </mat-form-field>\r
        <mat-form-field appearance="outline">\r
          <mat-label>Tags</mat-label>\r
          <input matInput #tagInput (keydown.enter)="$event.preventDefault(); addTag(tagInput)" placeholder="Add tag and press Enter" />\r
        </mat-form-field>\r
      </div>\r
      <mat-chip-listbox *ngIf="newSnippet.tags?.length" multiple>\r
        <mat-chip-option *ngFor="let tag of newSnippet.tags" [selected]="true" (removed)="removeTag(tag)">\r
          {{ tag }}\r
          <mat-icon matChipRemove>cancel</mat-icon>\r
        </mat-chip-option>\r
      </mat-chip-listbox>\r
      <mat-form-field appearance="outline" class="code-field">\r
        <mat-label>Code</mat-label>\r
        <textarea matInput rows="6" [(ngModel)]="newSnippet.code" name="code" required></textarea>\r
      </mat-form-field>\r
      <div class="form-actions form-actions-block">\r
        <button mat-raised-button color="primary" type="submit">{{ editingId ? 'Update' : 'Add' }} Snippet</button>\r
        <button mat-button type="button" (click)="cancelEdit()" *ngIf="editingId">Cancel</button>\r
      </div>\r
    </form>\r
\r
    <div class="snippet-search-filter">\r
      <mat-form-field appearance="outline">\r
        <mat-label>Search</mat-label>\r
        <input matInput [(ngModel)]="search" name="search" placeholder="Search snippets..." />\r
      </mat-form-field>\r
      <mat-form-field appearance="outline">\r
        <mat-label>Language</mat-label>\r
        <mat-select [(ngModel)]="filterLang" name="filterLang">\r
          <mat-option value="">All</mat-option>\r
          <mat-option *ngFor="let lang of languages" [value]="lang">{{ lang }}</mat-option>\r
        </mat-select>\r
      </mat-form-field>\r
    </div>\r
\r
    <div *ngIf="errorMessage" class="error-message">{{ errorMessage }}</div>\r
\r
    <div class="snippets-list">\r
      <div *ngFor="let snippet of filteredSnippets" class="snippet-card">\r
        <div class="snippet-header">\r
          <div class="snippet-title">{{ snippet.title }}</div>\r
          <div class="snippet-meta">\r
            <mat-chip class="snippet-lang-chip">{{ snippet.language }}</mat-chip>\r
            <span class="snippet-tags">\r
              <mat-chip-listbox *ngIf="snippet.tags?.length" multiple>\r
                <mat-chip-option *ngFor="let tag of snippet.tags" [selected]="true">\r
                  {{ tag }}\r
                </mat-chip-option>\r
              </mat-chip-listbox>\r
            </span>\r
          </div>\r
          <div class="snippet-actions">\r
            <button mat-icon-button color="primary" (click)="copySnippet(snippet.code)" matTooltip="Copy">\r
              <mat-icon>content_copy</mat-icon>\r
            </button>\r
            <button mat-icon-button color="accent" (click)="editSnippet(snippet)" matTooltip="Edit">\r
              <mat-icon>edit</mat-icon>\r
            </button>\r
            <button mat-icon-button color="warn" (click)="deleteSnippet(snippet.id)" matTooltip="Delete">\r
              <mat-icon>delete</mat-icon>\r
            </button>\r
          </div>\r
        </div>\r
        <pre><code [highlight]="snippet.code" [language]="snippet.language"></code></pre>\r
      </div>\r
      <div *ngIf="!filteredSnippets.length" class="no-snippets">No snippets found.</div>\r
    </div>\r
  </div>\r
</div>\r
`;
  }
});

// angular:jit:style:src\app\features\snippets\snippets-page\snippets-page.scss
var snippets_page_default2;
var init_snippets_page2 = __esm({
  "angular:jit:style:src\\app\\features\\snippets\\snippets-page\\snippets-page.scss"() {
    snippets_page_default2 = "/* src/app/features/snippets/snippets-page/snippets-page.scss */\n.snippets-container {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 2rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.snippet-form {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  align-items: flex-end;\n}\n.snippet-form mat-form-field {\n  flex: 1 1 200px;\n  min-width: 180px;\n}\n.code-field {\n  flex: 2 1 400px;\n  min-width: 300px;\n}\n.form-actions {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.form-actions-block {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n.snippet-search-filter {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.snippets-list {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.snippet-card {\n  background: #fafafa;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  position: relative;\n}\n.snippet-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  position: relative;\n}\n.snippet-title {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #222;\n}\n.snippet-meta {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 0.5rem;\n}\n.snippet-lang {\n  font-size: 0.95rem;\n  color: #3f51b5;\n  font-weight: 500;\n}\n.snippet-tags mat-chip-list {\n  margin-top: 0.25rem;\n}\npre {\n  background: #23272e;\n  color: #f8f8f2;\n  border-radius: 6px;\n  padding: 1rem;\n  font-size: 1rem;\n  overflow-x: auto;\n  margin: 0;\n}\n.snippet-actions {\n  display: flex;\n  gap: 0.5rem;\n  position: static;\n  margin-left: 1rem;\n  align-items: center;\n}\n.no-snippets {\n  text-align: center;\n  color: #888;\n  font-size: 1.1rem;\n  margin-top: 2rem;\n}\n@media (max-width: 700px) {\n  .snippets-container {\n    padding: 1rem 0.25rem;\n  }\n  .snippet-form,\n  .snippet-search-filter {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .snippet-actions {\n    position: static;\n    margin-top: 1rem;\n    justify-content: flex-end;\n  }\n  .form-actions-block {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n    margin-top: 0.7rem;\n  }\n}\n.feature-card {\n  max-width: 900px;\n  margin: 2.5rem auto 0 auto;\n  background: #fff;\n  border-radius: 18px;\n  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.08), 0 1.5px 6px 0 rgba(0, 0, 0, 0.04);\n  padding: 2.5rem 2.5rem 2rem 2.5rem;\n  animation: fadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.feature-card-header {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  margin-bottom: 1.5rem;\n}\n.feature-card-header mat-icon {\n  font-size: 2.2rem;\n  height: 2.2rem;\n  width: 2.2rem;\n  min-width: 2.2rem;\n  min-height: 2.2rem;\n  color: #1976d2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  vertical-align: middle;\n  position: relative;\n  top: 0;\n}\n.feature-card-header h1 {\n  font-size: 1.7rem;\n  font-weight: 700;\n  margin: 0;\n  color: #222;\n}\n@media (max-width: 700px) {\n  .feature-card {\n    padding: 1.2rem 0.7rem 1.2rem 0.7rem;\n    max-width: 98vw;\n  }\n  .feature-card-header h1 {\n    font-size: 1.1rem;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.snippet-form-row {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.snippet-form-row mat-form-field {\n  flex: 1 1 200px;\n  min-width: 180px;\n}\n@media (max-width: 700px) {\n  .snippet-form-row {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n}\n.snippet-lang-chip {\n  background: #e3e8f0;\n  color: #1976d2;\n  font-weight: 700;\n  font-size: 1rem;\n  margin-bottom: 0.2rem;\n  margin-right: 0.7rem;\n  height: 2rem;\n  display: inline-flex;\n  align-items: center;\n  padding: 0 1rem;\n  border-radius: 16px;\n  border: 1.5px solid #b6c6e3;\n  box-shadow: 0 1px 4px rgba(25, 118, 210, 0.07);\n  letter-spacing: 0.03em;\n  transition: background 0.2s, color 0.2s;\n}\n/*# sourceMappingURL=snippets-page.css.map */\n";
  }
});

// src/app/features/snippets/snippets-page/snippets-page.ts
var SnippetsPage;
var init_snippets_page3 = __esm({
  "src/app/features/snippets/snippets-page/snippets-page.ts"() {
    "use strict";
    init_tslib_es6();
    init_snippets_page();
    init_snippets_page2();
    init_core();
    init_forms();
    init_common();
    init_form_field();
    init_input();
    init_button();
    init_icon();
    init_chips();
    init_select();
    init_ngx_highlightjs();
    init_clipboard();
    init_common();
    init_auth_service();
    SnippetsPage = class SnippetsPage2 {
      clipboard;
      platformId;
      authService;
      cdr;
      snippets = [];
      search = "";
      filterLang = "";
      editingId = null;
      newSnippet = { title: "", code: "", language: "", tags: [] };
      languages = [
        "typescript",
        "javascript",
        "python",
        "html",
        "css",
        "json",
        "bash",
        "c",
        "cpp",
        "java",
        "go",
        "php",
        "ruby",
        "sql",
        "yaml",
        "markdown"
      ];
      isBrowser;
      isLoading = false;
      errorMessage = "";
      constructor(clipboard, platformId, authService, cdr) {
        this.clipboard = clipboard;
        this.platformId = platformId;
        this.authService = authService;
        this.cdr = cdr;
        this.isBrowser = isPlatformBrowser(this.platformId);
      }
      ngOnInit() {
        this.loadSnippets();
      }
      get filteredSnippets() {
        return this.snippets.filter((s) => {
          const matchesSearch = !this.search || s.title.toLowerCase().includes(this.search.toLowerCase()) || s.code.toLowerCase().includes(this.search.toLowerCase()) || s.tags?.some((tag) => tag.toLowerCase().includes(this.search.toLowerCase()));
          const matchesLang = !this.filterLang || s.language === this.filterLang;
          return matchesSearch && matchesLang;
        });
      }
      addOrUpdateSnippet() {
        if (!this.newSnippet.title?.trim() || !this.newSnippet.code?.trim() || !this.newSnippet.language)
          return;
        if (this.editingId) {
          const idx = this.snippets.findIndex((s) => s.id === this.editingId);
          if (idx > -1) {
            this.snippets[idx] = __spreadProps(__spreadValues(__spreadValues({}, this.snippets[idx]), this.newSnippet), {
              updatedAt: Date.now()
            });
          }
        } else {
          const snippet = {
            id: Date.now().toString(),
            title: this.newSnippet.title,
            code: this.newSnippet.code,
            language: this.newSnippet.language,
            tags: this.newSnippet.tags || [],
            createdAt: Date.now(),
            updatedAt: Date.now()
          };
          this.snippets.unshift(snippet);
        }
        this.saveSnippets();
        this.cancelEdit();
      }
      editSnippet(snippet) {
        this.editingId = snippet.id;
        this.newSnippet = __spreadProps(__spreadValues({}, snippet), { tags: [...snippet.tags || []] });
      }
      deleteSnippet(id) {
        this.snippets = this.snippets.filter((s) => s.id !== id);
        this.saveSnippets();
        this.cancelEdit();
      }
      copySnippet(code) {
        this.clipboard.copy(code);
      }
      saveSnippets() {
        if (!this.isBrowser)
          return;
        this.authService.updateSnippets(this.snippets).subscribe({
          next: () => {
            localStorage.setItem("snippets", JSON.stringify(this.snippets));
          },
          error: (error) => {
            console.error("Failed to save snippets:", error);
            localStorage.setItem("snippets", JSON.stringify(this.snippets));
          }
        });
      }
      loadSnippets() {
        if (!this.isBrowser)
          return;
        this.isLoading = true;
        this.errorMessage = "";
        this.authService.getUserData().subscribe({
          next: (userData) => {
            this.snippets = userData.snippets || [];
            this.isLoading = false;
            this.cdr.detectChanges();
          },
          error: () => {
            const data = localStorage.getItem("snippets");
            if (data) {
              try {
                this.snippets = JSON.parse(data);
              } catch {
                this.snippets = [];
                this.errorMessage = "Could not load your snippets from API or local storage.";
              }
            } else {
              this.snippets = [];
              this.errorMessage = "Could not load your snippets from API or local storage.";
            }
            this.isLoading = false;
            this.cdr.detectChanges();
          }
        });
      }
      cancelEdit() {
        this.editingId = null;
        this.newSnippet = { title: "", code: "", language: "", tags: [] };
      }
      addTag(tagInput) {
        const tag = tagInput.value.trim();
        if (tag && !this.newSnippet.tags?.includes(tag)) {
          this.newSnippet.tags = [...this.newSnippet.tags || [], tag];
        }
        tagInput.value = "";
      }
      removeTag(tag) {
        this.newSnippet.tags = (this.newSnippet.tags || []).filter((t) => t !== tag);
      }
      static ctorParameters = () => [
        { type: Clipboard },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID] }] },
        { type: AuthService },
        { type: ChangeDetectorRef }
      ];
    };
    SnippetsPage = __decorate([
      Component({
        selector: "app-snippets-page",
        standalone: true,
        imports: [
          CommonModule,
          FormsModule,
          MatFormFieldModule,
          MatInputModule,
          MatButtonModule,
          MatIconModule,
          MatChipsModule,
          MatChipListbox,
          MatChipOption,
          MatSelectModule,
          HighlightModule
        ],
        template: snippets_page_default,
        styles: [snippets_page_default2]
      })
    ], SnippetsPage);
  }
});

export {
  MatChipOption,
  MatChipListbox,
  MatChipsModule,
  init_chips,
  HIGHLIGHT_OPTIONS,
  HighlightJS,
  HighlightModule,
  init_ngx_highlightjs,
  Clipboard,
  init_clipboard,
  SnippetsPage,
  init_snippets_page3 as init_snippets_page
};
//# sourceMappingURL=chunk-4C57Q5FY.js.map
