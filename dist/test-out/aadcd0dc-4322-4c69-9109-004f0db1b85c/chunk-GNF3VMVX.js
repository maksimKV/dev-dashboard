import {
  _animationsDisabled,
  init_animation_DfMFjxHu
} from "./chunk-E5SZGRLI.js";
import {
  MatCommonModule,
  init_common_module_cKSwHniA
} from "./chunk-NQEXKGPT.js";
import {
  ChangeDetectionStrategy,
  Component,
  FactoryTarget,
  Input,
  NgModule,
  Subject,
  ViewEncapsulation,
  __esm,
  core_exports,
  init_core,
  init_esm,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-4OKOT362.js";

// node_modules/@angular/cdk/fesm2022/selection-model-BCgC8uEN.mjs
function getMultipleValuesInSingleSelectionError() {
  return Error("Cannot pass multiple values into SelectionModel with single-value mode.");
}
var SelectionModel;
var init_selection_model_BCgC8uEN = __esm({
  "node_modules/@angular/cdk/fesm2022/selection-model-BCgC8uEN.mjs"() {
    "use strict";
    init_esm();
    SelectionModel = class {
      _multiple;
      _emitChanges;
      compareWith;
      /** Currently-selected values. */
      _selection = /* @__PURE__ */ new Set();
      /** Keeps track of the deselected options that haven't been emitted by the change event. */
      _deselectedToEmit = [];
      /** Keeps track of the selected options that haven't been emitted by the change event. */
      _selectedToEmit = [];
      /** Cache for the array value of the selected items. */
      _selected;
      /** Selected values. */
      get selected() {
        if (!this._selected) {
          this._selected = Array.from(this._selection.values());
        }
        return this._selected;
      }
      /** Event emitted when the value has changed. */
      changed = new Subject();
      constructor(_multiple = false, initiallySelectedValues, _emitChanges = true, compareWith) {
        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        this.compareWith = compareWith;
        if (initiallySelectedValues && initiallySelectedValues.length) {
          if (_multiple) {
            initiallySelectedValues.forEach((value) => this._markSelected(value));
          } else {
            this._markSelected(initiallySelectedValues[0]);
          }
          this._selectedToEmit.length = 0;
        }
      }
      /**
       * Selects a value or an array of values.
       * @param values The values to select
       * @return Whether the selection changed as a result of this call
       */
      select(...values) {
        this._verifyValueAssignment(values);
        values.forEach((value) => this._markSelected(value));
        const changed = this._hasQueuedChanges();
        this._emitChangeEvent();
        return changed;
      }
      /**
       * Deselects a value or an array of values.
       * @param values The values to deselect
       * @return Whether the selection changed as a result of this call
       */
      deselect(...values) {
        this._verifyValueAssignment(values);
        values.forEach((value) => this._unmarkSelected(value));
        const changed = this._hasQueuedChanges();
        this._emitChangeEvent();
        return changed;
      }
      /**
       * Sets the selected values
       * @param values The new selected values
       * @return Whether the selection changed as a result of this call
       */
      setSelection(...values) {
        this._verifyValueAssignment(values);
        const oldValues = this.selected;
        const newSelectedSet = new Set(values.map((value) => this._getConcreteValue(value)));
        values.forEach((value) => this._markSelected(value));
        oldValues.filter((value) => !newSelectedSet.has(this._getConcreteValue(value, newSelectedSet))).forEach((value) => this._unmarkSelected(value));
        const changed = this._hasQueuedChanges();
        this._emitChangeEvent();
        return changed;
      }
      /**
       * Toggles a value between selected and deselected.
       * @param value The value to toggle
       * @return Whether the selection changed as a result of this call
       */
      toggle(value) {
        return this.isSelected(value) ? this.deselect(value) : this.select(value);
      }
      /**
       * Clears all of the selected values.
       * @param flushEvent Whether to flush the changes in an event.
       *   If false, the changes to the selection will be flushed along with the next event.
       * @return Whether the selection changed as a result of this call
       */
      clear(flushEvent = true) {
        this._unmarkAll();
        const changed = this._hasQueuedChanges();
        if (flushEvent) {
          this._emitChangeEvent();
        }
        return changed;
      }
      /**
       * Determines whether a value is selected.
       */
      isSelected(value) {
        return this._selection.has(this._getConcreteValue(value));
      }
      /**
       * Determines whether the model does not have a value.
       */
      isEmpty() {
        return this._selection.size === 0;
      }
      /**
       * Determines whether the model has a value.
       */
      hasValue() {
        return !this.isEmpty();
      }
      /**
       * Sorts the selected values based on a predicate function.
       */
      sort(predicate) {
        if (this._multiple && this.selected) {
          this._selected.sort(predicate);
        }
      }
      /**
       * Gets whether multiple values can be selected.
       */
      isMultipleSelection() {
        return this._multiple;
      }
      /** Emits a change event and clears the records of selected and deselected values. */
      _emitChangeEvent() {
        this._selected = null;
        if (this._selectedToEmit.length || this._deselectedToEmit.length) {
          this.changed.next({
            source: this,
            added: this._selectedToEmit,
            removed: this._deselectedToEmit
          });
          this._deselectedToEmit = [];
          this._selectedToEmit = [];
        }
      }
      /** Selects a value. */
      _markSelected(value) {
        value = this._getConcreteValue(value);
        if (!this.isSelected(value)) {
          if (!this._multiple) {
            this._unmarkAll();
          }
          if (!this.isSelected(value)) {
            this._selection.add(value);
          }
          if (this._emitChanges) {
            this._selectedToEmit.push(value);
          }
        }
      }
      /** Deselects a value. */
      _unmarkSelected(value) {
        value = this._getConcreteValue(value);
        if (this.isSelected(value)) {
          this._selection.delete(value);
          if (this._emitChanges) {
            this._deselectedToEmit.push(value);
          }
        }
      }
      /** Clears out the selected values. */
      _unmarkAll() {
        if (!this.isEmpty()) {
          this._selection.forEach((value) => this._unmarkSelected(value));
        }
      }
      /**
       * Verifies the value assignment and throws an error if the specified value array is
       * including multiple values while the selection model is not supporting multiple values.
       */
      _verifyValueAssignment(values) {
        if (values.length > 1 && !this._multiple && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getMultipleValuesInSingleSelectionError();
        }
      }
      /** Whether there are queued up change to be emitted. */
      _hasQueuedChanges() {
        return !!(this._deselectedToEmit.length || this._selectedToEmit.length);
      }
      /** Returns a value that is comparable to inputValue by applying compareWith function, returns the same inputValue otherwise. */
      _getConcreteValue(inputValue, selection) {
        if (!this.compareWith) {
          return inputValue;
        } else {
          selection = selection ?? this._selection;
          for (let selectedValue of selection) {
            if (this.compareWith(inputValue, selectedValue)) {
              return selectedValue;
            }
          }
          return inputValue;
        }
      }
    };
  }
});

// node_modules/@angular/cdk/fesm2022/collections.mjs
var init_collections = __esm({
  "node_modules/@angular/cdk/fesm2022/collections.mjs"() {
    "use strict";
    init_selection_model_BCgC8uEN();
  }
});

// node_modules/@angular/material/fesm2022/pseudo-checkbox-DDmgx3P4.mjs
var MatPseudoCheckbox;
var init_pseudo_checkbox_DDmgx3P4 = __esm({
  "node_modules/@angular/material/fesm2022/pseudo-checkbox-DDmgx3P4.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_animation_DfMFjxHu();
    MatPseudoCheckbox = class _MatPseudoCheckbox {
      _animationsDisabled = _animationsDisabled();
      /** Display state of the checkbox. */
      state = "unchecked";
      /** Whether the checkbox is disabled. */
      disabled = false;
      /**
       * Appearance of the pseudo checkbox. Default appearance of 'full' renders a checkmark/mixedmark
       * indicator inside a square box. 'minimal' appearance only renders the checkmark/mixedmark.
       */
      appearance = "full";
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatPseudoCheckbox, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatPseudoCheckbox, isStandalone: true, selector: "mat-pseudo-checkbox", inputs: { state: "state", disabled: "disabled", appearance: "appearance" }, host: { properties: { "class.mat-pseudo-checkbox-indeterminate": 'state === "indeterminate"', "class.mat-pseudo-checkbox-checked": 'state === "checked"', "class.mat-pseudo-checkbox-disabled": "disabled", "class.mat-pseudo-checkbox-minimal": 'appearance === "minimal"', "class.mat-pseudo-checkbox-full": 'appearance === "full"', "class._mat-animation-noopable": "_animationsDisabled" }, classAttribute: "mat-pseudo-checkbox" }, ngImport: core_exports, template: "", isInline: true, styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}\n'], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatPseudoCheckbox, decorators: [{
      type: Component,
      args: [{ encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "mat-pseudo-checkbox", template: "", host: {
        "class": "mat-pseudo-checkbox",
        "[class.mat-pseudo-checkbox-indeterminate]": 'state === "indeterminate"',
        "[class.mat-pseudo-checkbox-checked]": 'state === "checked"',
        "[class.mat-pseudo-checkbox-disabled]": "disabled",
        "[class.mat-pseudo-checkbox-minimal]": 'appearance === "minimal"',
        "[class.mat-pseudo-checkbox-full]": 'appearance === "full"',
        "[class._mat-animation-noopable]": "_animationsDisabled"
      }, styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}\n'] }]
    }], ctorParameters: () => [], propDecorators: { state: [{
      type: Input
    }], disabled: [{
      type: Input
    }], appearance: [{
      type: Input
    }] } });
  }
});

// node_modules/@angular/material/fesm2022/pseudo-checkbox-module-4F8Up4PL.mjs
var MatPseudoCheckboxModule;
var init_pseudo_checkbox_module_4F8Up4PL = __esm({
  "node_modules/@angular/material/fesm2022/pseudo-checkbox-module-4F8Up4PL.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_pseudo_checkbox_DDmgx3P4();
    init_common_module_cKSwHniA();
    MatPseudoCheckboxModule = class _MatPseudoCheckboxModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatPseudoCheckboxModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatPseudoCheckboxModule, imports: [MatCommonModule, MatPseudoCheckbox], exports: [MatPseudoCheckbox] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatPseudoCheckboxModule, imports: [MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatPseudoCheckboxModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatPseudoCheckbox],
        exports: [MatPseudoCheckbox]
      }]
    }] });
  }
});

export {
  SelectionModel,
  init_collections,
  MatPseudoCheckbox,
  init_pseudo_checkbox_DDmgx3P4,
  MatPseudoCheckboxModule,
  init_pseudo_checkbox_module_4F8Up4PL
};
//# sourceMappingURL=chunk-GNF3VMVX.js.map
