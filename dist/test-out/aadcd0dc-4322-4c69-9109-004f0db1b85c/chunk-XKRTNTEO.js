import {
  CdkScrollableModule,
  ScrollDispatcher,
  ViewportRuler,
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
  FormsModule,
  init_forms
} from "./chunk-5VCTOLDM.js";
import {
  Directionality,
  MatIconModule,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _getEventTarget,
  _getShadowRoot,
  coerceArray,
  coerceElement,
  coerceNumberProperty,
  init_array_I1yfCXUO,
  init_directionality_CChdj3az,
  init_element_x4z00URv,
  init_fake_event_detection_DWOdFTFz,
  init_icon,
  init_id_generator_LuoRZSid,
  init_shadow_dom_B0oHn41l,
  init_style_loader_B2sGQXxD,
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader
} from "./chunk-NQEXKGPT.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-3BJ3OYBN.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Observable,
  Output,
  PLATFORM_ID,
  RendererFactory2,
  Subject,
  Subscription,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation,
  __decorate,
  __esm,
  afterNextRender,
  animationFrameScheduler,
  booleanAttribute,
  core_exports,
  init_common,
  init_core,
  init_esm,
  init_operators,
  init_tslib_es6,
  inject,
  interval,
  isPlatformBrowser,
  map,
  merge,
  numberAttribute,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-4OKOT362.js";

// node_modules/@angular/cdk/fesm2022/drag-drop.mjs
function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll("[id]");
  const nodeName = node.nodeName.toLowerCase();
  clone.removeAttribute("id");
  for (let i = 0; i < descendantsWithId.length; i++) {
    descendantsWithId[i].removeAttribute("id");
  }
  if (nodeName === "canvas") {
    transferCanvasData(node, clone);
  } else if (nodeName === "input" || nodeName === "select" || nodeName === "textarea") {
    transferInputData(node, clone);
  }
  transferData("canvas", node, clone, transferCanvasData);
  transferData("input, textarea, select", node, clone, transferInputData);
  return clone;
}
function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);
  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);
    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
}
function transferInputData(source, clone) {
  if (clone.type !== "file") {
    clone.value = source.value;
  }
  if (clone.type === "radio" && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
function transferCanvasData(source, clone) {
  const context = clone.getContext("2d");
  if (context) {
    try {
      context.drawImage(source, 0, 0);
    } catch {
    }
  }
}
function getMutableClientRect(element) {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    x: rect.x,
    y: rect.y
  };
}
function isInsideClientRect(clientRect, x, y) {
  const { top, bottom, left, right } = clientRect;
  return y >= top && y <= bottom && x >= left && x <= right;
}
function isOverflowingParent(parentRect, childRect) {
  const isLeftOverflowing = childRect.left < parentRect.left;
  const isRightOverflowing = childRect.left + childRect.width > parentRect.right;
  const isTopOverflowing = childRect.top < parentRect.top;
  const isBottomOverflowing = childRect.top + childRect.height > parentRect.bottom;
  return isLeftOverflowing || isRightOverflowing || isTopOverflowing || isBottomOverflowing;
}
function adjustDomRect(domRect, top, left) {
  domRect.top += top;
  domRect.bottom = domRect.top + domRect.height;
  domRect.left += left;
  domRect.right = domRect.left + domRect.width;
}
function isPointerNearDomRect(rect, threshold, pointerX, pointerY) {
  const { top, right, bottom, left, width, height } = rect;
  const xThreshold = width * threshold;
  const yThreshold = height * threshold;
  return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
}
function getRootNode(viewRef, _document) {
  const rootNodes = viewRef.rootNodes;
  if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
    return rootNodes[0];
  }
  const wrapper = _document.createElement("div");
  rootNodes.forEach((node) => wrapper.appendChild(node));
  return wrapper;
}
function extendStyles(dest, source, importantProperties2) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      const value = source[key];
      if (value) {
        dest.setProperty(key, value, importantProperties2?.has(key) ? "important" : "");
      } else {
        dest.removeProperty(key);
      }
    }
  }
  return dest;
}
function toggleNativeDragInteractions(element, enable) {
  const userSelect = enable ? "" : "none";
  extendStyles(element.style, {
    "touch-action": enable ? "" : "none",
    "-webkit-user-drag": enable ? "" : "none",
    "-webkit-tap-highlight-color": enable ? "" : "transparent",
    "user-select": userSelect,
    "-ms-user-select": userSelect,
    "-webkit-user-select": userSelect,
    "-moz-user-select": userSelect
  });
}
function toggleVisibility(element, enable, importantProperties2) {
  extendStyles(element.style, {
    position: enable ? "" : "fixed",
    top: enable ? "" : "0",
    opacity: enable ? "" : "0",
    left: enable ? "" : "-999em"
  }, importantProperties2);
}
function combineTransforms(transform, initialTransform) {
  return initialTransform && initialTransform != "none" ? transform + " " + initialTransform : transform;
}
function matchElementSize(target, sourceRect) {
  target.style.width = `${sourceRect.width}px`;
  target.style.height = `${sourceRect.height}px`;
  target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}
function getTransform(x, y) {
  return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
function parseCssTimeUnitsToMs(value) {
  const multiplier = value.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3;
  return parseFloat(value) * multiplier;
}
function getTransformTransitionDurationInMs(element) {
  const computedStyle = getComputedStyle(element);
  const transitionedProperties = parseCssPropertyValue(computedStyle, "transition-property");
  const property = transitionedProperties.find((prop) => prop === "transform" || prop === "all");
  if (!property) {
    return 0;
  }
  const propertyIndex = transitionedProperties.indexOf(property);
  const rawDurations = parseCssPropertyValue(computedStyle, "transition-duration");
  const rawDelays = parseCssPropertyValue(computedStyle, "transition-delay");
  return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
function parseCssPropertyValue(computedStyle, name) {
  const value = computedStyle.getPropertyValue(name);
  return value.split(",").map((part) => part.trim());
}
function supportsPopover(element) {
  return "showPopover" in element;
}
function clamp$1(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function isTouchEvent(event) {
  return event.type[0] === "t";
}
function shadowDomSelectStart(event) {
  event.preventDefault();
}
function moveItemInArray(array, fromIndex, toIndex) {
  const from = clamp(fromIndex, array.length - 1);
  const to = clamp(toIndex, array.length - 1);
  if (from === to) {
    return;
  }
  const target = array[from];
  const delta = to < from ? -1 : 1;
  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
  }
  array[to] = target;
}
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
  const from = clamp(currentIndex, currentArray.length - 1);
  const to = clamp(targetIndex, targetArray.length);
  if (currentArray.length) {
    targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
  }
}
function clamp(value, max) {
  return Math.max(0, Math.min(max, value));
}
function getVerticalScrollDirection(clientRect, pointerY) {
  const { top, bottom, height } = clientRect;
  const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
    return AutoScrollVerticalDirection.UP;
  } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
    return AutoScrollVerticalDirection.DOWN;
  }
  return AutoScrollVerticalDirection.NONE;
}
function getHorizontalScrollDirection(clientRect, pointerX) {
  const { left, right, width } = clientRect;
  const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
    return AutoScrollHorizontalDirection.LEFT;
  } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
    return AutoScrollHorizontalDirection.RIGHT;
  }
  return AutoScrollHorizontalDirection.NONE;
}
function getElementScrollDirections(element, clientRect, direction, pointerX, pointerY) {
  const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
  const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
  let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  if (computedVertical) {
    const scrollTop = element.scrollTop;
    if (computedVertical === AutoScrollVerticalDirection.UP) {
      if (scrollTop > 0) {
        verticalScrollDirection = AutoScrollVerticalDirection.UP;
      }
    } else if (element.scrollHeight - scrollTop > element.clientHeight) {
      verticalScrollDirection = AutoScrollVerticalDirection.DOWN;
    }
  }
  if (computedHorizontal) {
    const scrollLeft = element.scrollLeft;
    if (direction === "rtl") {
      if (computedHorizontal === AutoScrollHorizontalDirection.RIGHT) {
        if (scrollLeft < 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
        }
      } else if (element.scrollWidth + scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
      }
    } else {
      if (computedHorizontal === AutoScrollHorizontalDirection.LEFT) {
        if (scrollLeft > 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
        }
      } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
      }
    }
  }
  return [verticalScrollDirection, horizontalScrollDirection];
}
function assertElementNode(node, name) {
  if (node.nodeType !== 1) {
    throw Error(`${name} must be attached to an element node. Currently attached to "${node.nodeName}".`);
  }
}
var cloneUniqueId, ParentPositionTracker, importantProperties, PreviewRef, passiveEventListenerOptions, activeEventListenerOptions, activeCapturingEventOptions$1, MOUSE_EVENT_IGNORE_TIME, dragImportantProperties, DragRef, SingleAxisSortStrategy, MixedSortStrategy, DROP_PROXIMITY_THRESHOLD, SCROLL_PROXIMITY_THRESHOLD, AutoScrollVerticalDirection, AutoScrollHorizontalDirection, DropListRef, capturingEventOptions, activeCapturingEventOptions, _ResetsLoader, DragDropRegistry, DEFAULT_CONFIG, DragDrop, CDK_DRAG_PARENT, CDK_DRAG_HANDLE, CdkDragHandle, CDK_DRAG_CONFIG, CDK_DROP_LIST, CdkDrag, CDK_DROP_LIST_GROUP, CdkDropListGroup, CdkDropList, CDK_DRAG_PREVIEW, CdkDragPreview, CDK_DRAG_PLACEHOLDER, CdkDragPlaceholder, DRAG_DROP_DIRECTIVES, DragDropModule;
var init_drag_drop = __esm({
  "node_modules/@angular/cdk/fesm2022/drag-drop.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_shadow_dom_B0oHn41l();
    init_fake_event_detection_DWOdFTFz();
    init_element_x4z00URv();
    init_operators();
    init_style_loader_B2sGQXxD();
    init_scrolling();
    init_directionality_CChdj3az();
    init_id_generator_LuoRZSid();
    init_array_I1yfCXUO();
    cloneUniqueId = 0;
    ParentPositionTracker = class {
      _document;
      /** Cached positions of the scrollable parent elements. */
      positions = /* @__PURE__ */ new Map();
      constructor(_document) {
        this._document = _document;
      }
      /** Clears the cached positions. */
      clear() {
        this.positions.clear();
      }
      /** Caches the positions. Should be called at the beginning of a drag sequence. */
      cache(elements) {
        this.clear();
        this.positions.set(this._document, {
          scrollPosition: this.getViewportScrollPosition()
        });
        elements.forEach((element) => {
          this.positions.set(element, {
            scrollPosition: { top: element.scrollTop, left: element.scrollLeft },
            clientRect: getMutableClientRect(element)
          });
        });
      }
      /** Handles scrolling while a drag is taking place. */
      handleScroll(event) {
        const target = _getEventTarget(event);
        const cachedPosition = this.positions.get(target);
        if (!cachedPosition) {
          return null;
        }
        const scrollPosition = cachedPosition.scrollPosition;
        let newTop;
        let newLeft;
        if (target === this._document) {
          const viewportScrollPosition = this.getViewportScrollPosition();
          newTop = viewportScrollPosition.top;
          newLeft = viewportScrollPosition.left;
        } else {
          newTop = target.scrollTop;
          newLeft = target.scrollLeft;
        }
        const topDifference = scrollPosition.top - newTop;
        const leftDifference = scrollPosition.left - newLeft;
        this.positions.forEach((position, node) => {
          if (position.clientRect && target !== node && target.contains(node)) {
            adjustDomRect(position.clientRect, topDifference, leftDifference);
          }
        });
        scrollPosition.top = newTop;
        scrollPosition.left = newLeft;
        return { top: topDifference, left: leftDifference };
      }
      /**
       * Gets the scroll position of the viewport. Note that we use the scrollX and scrollY directly,
       * instead of going through the `ViewportRuler`, because the first value the ruler looks at is
       * the top/left offset of the `document.documentElement` which works for most cases, but breaks
       * if the element is offset by something like the `BlockScrollStrategy`.
       */
      getViewportScrollPosition() {
        return { top: window.scrollY, left: window.scrollX };
      }
    };
    importantProperties = /* @__PURE__ */ new Set([
      // Needs to be important, because some `mat-table` sets `position: sticky !important`. See #22781.
      "position"
    ]);
    PreviewRef = class {
      _document;
      _rootElement;
      _direction;
      _initialDomRect;
      _previewTemplate;
      _previewClass;
      _pickupPositionOnPage;
      _initialTransform;
      _zIndex;
      _renderer;
      /** Reference to the view of the preview element. */
      _previewEmbeddedView;
      /** Reference to the preview element. */
      _preview;
      get element() {
        return this._preview;
      }
      constructor(_document, _rootElement, _direction, _initialDomRect, _previewTemplate, _previewClass, _pickupPositionOnPage, _initialTransform, _zIndex, _renderer) {
        this._document = _document;
        this._rootElement = _rootElement;
        this._direction = _direction;
        this._initialDomRect = _initialDomRect;
        this._previewTemplate = _previewTemplate;
        this._previewClass = _previewClass;
        this._pickupPositionOnPage = _pickupPositionOnPage;
        this._initialTransform = _initialTransform;
        this._zIndex = _zIndex;
        this._renderer = _renderer;
      }
      attach(parent) {
        this._preview = this._createPreview();
        parent.appendChild(this._preview);
        if (supportsPopover(this._preview)) {
          this._preview["showPopover"]();
        }
      }
      destroy() {
        this._preview.remove();
        this._previewEmbeddedView?.destroy();
        this._preview = this._previewEmbeddedView = null;
      }
      setTransform(value) {
        this._preview.style.transform = value;
      }
      getBoundingClientRect() {
        return this._preview.getBoundingClientRect();
      }
      addClass(className) {
        this._preview.classList.add(className);
      }
      getTransitionDuration() {
        return getTransformTransitionDurationInMs(this._preview);
      }
      addEventListener(name, handler) {
        return this._renderer.listen(this._preview, name, handler);
      }
      _createPreview() {
        const previewConfig = this._previewTemplate;
        const previewClass = this._previewClass;
        const previewTemplate = previewConfig ? previewConfig.template : null;
        let preview;
        if (previewTemplate && previewConfig) {
          const rootRect = previewConfig.matchSize ? this._initialDomRect : null;
          const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
          viewRef.detectChanges();
          preview = getRootNode(viewRef, this._document);
          this._previewEmbeddedView = viewRef;
          if (previewConfig.matchSize) {
            matchElementSize(preview, rootRect);
          } else {
            preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
          }
        } else {
          preview = deepCloneNode(this._rootElement);
          matchElementSize(preview, this._initialDomRect);
          if (this._initialTransform) {
            preview.style.transform = this._initialTransform;
          }
        }
        extendStyles(preview.style, {
          // It's important that we disable the pointer events on the preview, because
          // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
          "pointer-events": "none",
          // If the preview has a margin, it can throw off our positioning so we reset it. The reset
          // value for `margin-right` needs to be `auto` when opened as a popover, because our
          // positioning is always top/left based, but native popover seems to position itself
          // to the top/right if `<html>` or `<body>` have `dir="rtl"` (see #29604). Setting it
          // to `auto` pushed it to the top/left corner in RTL and is a noop in LTR.
          "margin": supportsPopover(preview) ? "0 auto 0 0" : "0",
          "position": "fixed",
          "top": "0",
          "left": "0",
          "z-index": this._zIndex + ""
        }, importantProperties);
        toggleNativeDragInteractions(preview, false);
        preview.classList.add("cdk-drag-preview");
        preview.setAttribute("popover", "manual");
        preview.setAttribute("dir", this._direction);
        if (previewClass) {
          if (Array.isArray(previewClass)) {
            previewClass.forEach((className) => preview.classList.add(className));
          } else {
            preview.classList.add(previewClass);
          }
        }
        return preview;
      }
    };
    passiveEventListenerOptions = { passive: true };
    activeEventListenerOptions = { passive: false };
    activeCapturingEventOptions$1 = {
      passive: false,
      capture: true
    };
    MOUSE_EVENT_IGNORE_TIME = 800;
    dragImportantProperties = /* @__PURE__ */ new Set([
      // Needs to be important, because some `mat-table` sets `position: sticky !important`. See #22781.
      "position"
    ]);
    DragRef = class {
      _config;
      _document;
      _ngZone;
      _viewportRuler;
      _dragDropRegistry;
      _renderer;
      _rootElementCleanups;
      _cleanupShadowRootSelectStart;
      /** Element displayed next to the user's pointer while the element is dragged. */
      _preview;
      /** Container into which to insert the preview. */
      _previewContainer;
      /** Reference to the view of the placeholder element. */
      _placeholderRef;
      /** Element that is rendered instead of the draggable item while it is being sorted. */
      _placeholder;
      /** Coordinates within the element at which the user picked up the element. */
      _pickupPositionInElement;
      /** Coordinates on the page at which the user picked up the element. */
      _pickupPositionOnPage;
      /**
       * Anchor node used to save the place in the DOM where the element was
       * picked up so that it can be restored at the end of the drag sequence.
       */
      _anchor;
      /**
       * CSS `transform` applied to the element when it isn't being dragged. We need a
       * passive transform in order for the dragged element to retain its new position
       * after the user has stopped dragging and because we need to know the relative
       * position in case they start dragging again. This corresponds to `element.style.transform`.
       */
      _passiveTransform = { x: 0, y: 0 };
      /** CSS `transform` that is applied to the element while it's being dragged. */
      _activeTransform = { x: 0, y: 0 };
      /** Inline `transform` value that the element had before the first dragging sequence. */
      _initialTransform;
      /**
       * Whether the dragging sequence has been started. Doesn't
       * necessarily mean that the element has been moved.
       */
      _hasStartedDragging = signal(false);
      /** Whether the element has moved since the user started dragging it. */
      _hasMoved;
      /** Drop container in which the DragRef resided when dragging began. */
      _initialContainer;
      /** Index at which the item started in its initial container. */
      _initialIndex;
      /** Cached positions of scrollable parent elements. */
      _parentPositions;
      /** Emits when the item is being moved. */
      _moveEvents = new Subject();
      /** Keeps track of the direction in which the user is dragging along each axis. */
      _pointerDirectionDelta;
      /** Pointer position at which the last change in the delta occurred. */
      _pointerPositionAtLastDirectionChange;
      /** Position of the pointer at the last pointer event. */
      _lastKnownPointerPosition;
      /**
       * Root DOM node of the drag instance. This is the element that will
       * be moved around as the user is dragging.
       */
      _rootElement;
      /**
       * Nearest ancestor SVG, relative to which coordinates are calculated if dragging SVGElement
       */
      _ownerSVGElement;
      /**
       * Inline style value of `-webkit-tap-highlight-color` at the time the
       * dragging was started. Used to restore the value once we're done dragging.
       */
      _rootElementTapHighlight;
      /** Subscription to pointer movement events. */
      _pointerMoveSubscription = Subscription.EMPTY;
      /** Subscription to the event that is dispatched when the user lifts their pointer. */
      _pointerUpSubscription = Subscription.EMPTY;
      /** Subscription to the viewport being scrolled. */
      _scrollSubscription = Subscription.EMPTY;
      /** Subscription to the viewport being resized. */
      _resizeSubscription = Subscription.EMPTY;
      /**
       * Time at which the last touch event occurred. Used to avoid firing the same
       * events multiple times on touch devices where the browser will fire a fake
       * mouse event for each touch event, after a certain time.
       */
      _lastTouchEventTime;
      /** Time at which the last dragging sequence was started. */
      _dragStartTime;
      /** Cached reference to the boundary element. */
      _boundaryElement = null;
      /** Whether the native dragging interactions have been enabled on the root element. */
      _nativeInteractionsEnabled = true;
      /** Client rect of the root element when the dragging sequence has started. */
      _initialDomRect;
      /** Cached dimensions of the preview element. Should be read via `_getPreviewRect`. */
      _previewRect;
      /** Cached dimensions of the boundary element. */
      _boundaryRect;
      /** Element that will be used as a template to create the draggable item's preview. */
      _previewTemplate;
      /** Template for placeholder element rendered to show where a draggable would be dropped. */
      _placeholderTemplate;
      /** Elements that can be used to drag the draggable item. */
      _handles = [];
      /** Registered handles that are currently disabled. */
      _disabledHandles = /* @__PURE__ */ new Set();
      /** Droppable container that the draggable is a part of. */
      _dropContainer;
      /** Layout direction of the item. */
      _direction = "ltr";
      /** Ref that the current drag item is nested in. */
      _parentDragRef;
      /**
       * Cached shadow root that the element is placed in. `null` means that the element isn't in
       * the shadow DOM and `undefined` means that it hasn't been resolved yet. Should be read via
       * `_getShadowRoot`, not directly.
       */
      _cachedShadowRoot;
      /** Axis along which dragging is locked. */
      lockAxis;
      /**
       * Amount of milliseconds to wait after the user has put their
       * pointer down before starting to drag the element.
       */
      dragStartDelay = 0;
      /** Class to be added to the preview element. */
      previewClass;
      /**
       * If the parent of the dragged element has a `scale` transform, it can throw off the
       * positioning when the user starts dragging. Use this input to notify the CDK of the scale.
       */
      scale = 1;
      /** Whether starting to drag this element is disabled. */
      get disabled() {
        return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
      }
      set disabled(value) {
        if (value !== this._disabled) {
          this._disabled = value;
          this._toggleNativeDragInteractions();
          this._handles.forEach((handle) => toggleNativeDragInteractions(handle, value));
        }
      }
      _disabled = false;
      /** Emits as the drag sequence is being prepared. */
      beforeStarted = new Subject();
      /** Emits when the user starts dragging the item. */
      started = new Subject();
      /** Emits when the user has released a drag item, before any animations have started. */
      released = new Subject();
      /** Emits when the user stops dragging an item in the container. */
      ended = new Subject();
      /** Emits when the user has moved the item into a new container. */
      entered = new Subject();
      /** Emits when the user removes the item its container by dragging it into another container. */
      exited = new Subject();
      /** Emits when the user drops the item inside a container. */
      dropped = new Subject();
      /**
       * Emits as the user is dragging the item. Use with caution,
       * because this event will fire for every pixel that the user has dragged.
       */
      moved = this._moveEvents;
      /** Arbitrary data that can be attached to the drag item. */
      data;
      /**
       * Function that can be used to customize the logic of how the position of the drag item
       * is limited while it's being dragged. Gets called with a point containing the current position
       * of the user's pointer on the page, a reference to the item being dragged and its dimensions.
       * Should return a point describing where the item should be rendered.
       */
      constrainPosition;
      constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry, _renderer) {
        this._config = _config;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
        this._renderer = _renderer;
        this.withRootElement(element).withParent(_config.parentDragRef || null);
        this._parentPositions = new ParentPositionTracker(_document);
        _dragDropRegistry.registerDragItem(this);
      }
      /**
       * Returns the element that is being used as a placeholder
       * while the current element is being dragged.
       */
      getPlaceholderElement() {
        return this._placeholder;
      }
      /** Returns the root draggable element. */
      getRootElement() {
        return this._rootElement;
      }
      /**
       * Gets the currently-visible element that represents the drag item.
       * While dragging this is the placeholder, otherwise it's the root element.
       */
      getVisibleElement() {
        return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
      }
      /** Registers the handles that can be used to drag the element. */
      withHandles(handles) {
        this._handles = handles.map((handle) => coerceElement(handle));
        this._handles.forEach((handle) => toggleNativeDragInteractions(handle, this.disabled));
        this._toggleNativeDragInteractions();
        const disabledHandles = /* @__PURE__ */ new Set();
        this._disabledHandles.forEach((handle) => {
          if (this._handles.indexOf(handle) > -1) {
            disabledHandles.add(handle);
          }
        });
        this._disabledHandles = disabledHandles;
        return this;
      }
      /**
       * Registers the template that should be used for the drag preview.
       * @param template Template that from which to stamp out the preview.
       */
      withPreviewTemplate(template) {
        this._previewTemplate = template;
        return this;
      }
      /**
       * Registers the template that should be used for the drag placeholder.
       * @param template Template that from which to stamp out the placeholder.
       */
      withPlaceholderTemplate(template) {
        this._placeholderTemplate = template;
        return this;
      }
      /**
       * Sets an alternate drag root element. The root element is the element that will be moved as
       * the user is dragging. Passing an alternate root element is useful when trying to enable
       * dragging on an element that you might not have access to.
       */
      withRootElement(rootElement) {
        const element = coerceElement(rootElement);
        if (element !== this._rootElement) {
          this._removeRootElementListeners();
          const renderer = this._renderer;
          this._rootElementCleanups = this._ngZone.runOutsideAngular(() => [
            renderer.listen(element, "mousedown", this._pointerDown, activeEventListenerOptions),
            renderer.listen(element, "touchstart", this._pointerDown, passiveEventListenerOptions),
            renderer.listen(element, "dragstart", this._nativeDragStart, activeEventListenerOptions)
          ]);
          this._initialTransform = void 0;
          this._rootElement = element;
        }
        if (typeof SVGElement !== "undefined" && this._rootElement instanceof SVGElement) {
          this._ownerSVGElement = this._rootElement.ownerSVGElement;
        }
        return this;
      }
      /**
       * Element to which the draggable's position will be constrained.
       */
      withBoundaryElement(boundaryElement) {
        this._boundaryElement = boundaryElement ? coerceElement(boundaryElement) : null;
        this._resizeSubscription.unsubscribe();
        if (boundaryElement) {
          this._resizeSubscription = this._viewportRuler.change(10).subscribe(() => this._containInsideBoundaryOnResize());
        }
        return this;
      }
      /** Sets the parent ref that the ref is nested in.  */
      withParent(parent) {
        this._parentDragRef = parent;
        return this;
      }
      /** Removes the dragging functionality from the DOM element. */
      dispose() {
        this._removeRootElementListeners();
        if (this.isDragging()) {
          this._rootElement?.remove();
        }
        this._anchor?.remove();
        this._destroyPreview();
        this._destroyPlaceholder();
        this._dragDropRegistry.removeDragItem(this);
        this._removeListeners();
        this.beforeStarted.complete();
        this.started.complete();
        this.released.complete();
        this.ended.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this._moveEvents.complete();
        this._handles = [];
        this._disabledHandles.clear();
        this._dropContainer = void 0;
        this._resizeSubscription.unsubscribe();
        this._parentPositions.clear();
        this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = this._parentDragRef = null;
      }
      /** Checks whether the element is currently being dragged. */
      isDragging() {
        return this._hasStartedDragging() && this._dragDropRegistry.isDragging(this);
      }
      /** Resets a standalone drag item to its initial position. */
      reset() {
        this._rootElement.style.transform = this._initialTransform || "";
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform = { x: 0, y: 0 };
      }
      /** Resets drag item to end of boundary element. */
      resetToBoundary() {
        if (
          // can be null if the drag item was never dragged.
          this._boundaryElement && this._rootElement && // check if we are overflowing off our boundary element
          isOverflowingParent(this._boundaryElement.getBoundingClientRect(), this._rootElement.getBoundingClientRect())
        ) {
          const parentRect = this._boundaryElement.getBoundingClientRect();
          const childRect = this._rootElement.getBoundingClientRect();
          let offsetX = 0;
          let offsetY = 0;
          if (childRect.left < parentRect.left) {
            offsetX = parentRect.left - childRect.left;
          } else if (childRect.right > parentRect.right) {
            offsetX = parentRect.right - childRect.right;
          }
          if (childRect.top < parentRect.top) {
            offsetY = parentRect.top - childRect.top;
          } else if (childRect.bottom > parentRect.bottom) {
            offsetY = parentRect.bottom - childRect.bottom;
          }
          const currentLeft = this._activeTransform.x;
          const currentTop = this._activeTransform.y;
          let x = currentLeft + offsetX, y = currentTop + offsetY;
          this._rootElement.style.transform = getTransform(x, y);
          this._activeTransform = { x, y };
          this._passiveTransform = { x, y };
        }
      }
      /**
       * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
       * @param handle Handle element that should be disabled.
       */
      disableHandle(handle) {
        if (!this._disabledHandles.has(handle) && this._handles.indexOf(handle) > -1) {
          this._disabledHandles.add(handle);
          toggleNativeDragInteractions(handle, true);
        }
      }
      /**
       * Enables a handle, if it has been disabled.
       * @param handle Handle element to be enabled.
       */
      enableHandle(handle) {
        if (this._disabledHandles.has(handle)) {
          this._disabledHandles.delete(handle);
          toggleNativeDragInteractions(handle, this.disabled);
        }
      }
      /** Sets the layout direction of the draggable item. */
      withDirection(direction) {
        this._direction = direction;
        return this;
      }
      /** Sets the container that the item is part of. */
      _withDropContainer(container) {
        this._dropContainer = container;
      }
      /**
       * Gets the current position in pixels the draggable outside of a drop container.
       */
      getFreeDragPosition() {
        const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
        return { x: position.x, y: position.y };
      }
      /**
       * Sets the current position in pixels the draggable outside of a drop container.
       * @param value New position to be set.
       */
      setFreeDragPosition(value) {
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform.x = value.x;
        this._passiveTransform.y = value.y;
        if (!this._dropContainer) {
          this._applyRootElementTransform(value.x, value.y);
        }
        return this;
      }
      /**
       * Sets the container into which to insert the preview element.
       * @param value Container into which to insert the preview.
       */
      withPreviewContainer(value) {
        this._previewContainer = value;
        return this;
      }
      /** Updates the item's sort order based on the last-known pointer position. */
      _sortFromLastPointerPosition() {
        const position = this._lastKnownPointerPosition;
        if (position && this._dropContainer) {
          this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
        }
      }
      /** Unsubscribes from the global subscriptions. */
      _removeListeners() {
        this._pointerMoveSubscription.unsubscribe();
        this._pointerUpSubscription.unsubscribe();
        this._scrollSubscription.unsubscribe();
        this._cleanupShadowRootSelectStart?.();
        this._cleanupShadowRootSelectStart = void 0;
      }
      /** Destroys the preview element and its ViewRef. */
      _destroyPreview() {
        this._preview?.destroy();
        this._preview = null;
      }
      /** Destroys the placeholder element and its ViewRef. */
      _destroyPlaceholder() {
        this._placeholder?.remove();
        this._placeholderRef?.destroy();
        this._placeholder = this._placeholderRef = null;
      }
      /** Handler for the `mousedown`/`touchstart` events. */
      _pointerDown = (event) => {
        this.beforeStarted.next();
        if (this._handles.length) {
          const targetHandle = this._getTargetHandle(event);
          if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
            this._initializeDragSequence(targetHandle, event);
          }
        } else if (!this.disabled) {
          this._initializeDragSequence(this._rootElement, event);
        }
      };
      /** Handler that is invoked when the user moves their pointer after they've initiated a drag. */
      _pointerMove = (event) => {
        const pointerPosition = this._getPointerPositionOnPage(event);
        if (!this._hasStartedDragging()) {
          const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
          const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
          const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
          if (isOverThreshold) {
            const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);
            const container = this._dropContainer;
            if (!isDelayElapsed) {
              this._endDragSequence(event);
              return;
            }
            if (!container || !container.isDragging() && !container.isReceiving()) {
              if (event.cancelable) {
                event.preventDefault();
              }
              this._hasStartedDragging.set(true);
              this._ngZone.run(() => this._startDragSequence(event));
            }
          }
          return;
        }
        if (event.cancelable) {
          event.preventDefault();
        }
        const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);
        this._hasMoved = true;
        this._lastKnownPointerPosition = pointerPosition;
        this._updatePointerDirectionDelta(constrainedPointerPosition);
        if (this._dropContainer) {
          this._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
        } else {
          const offset = this.constrainPosition ? this._initialDomRect : this._pickupPositionOnPage;
          const activeTransform = this._activeTransform;
          activeTransform.x = constrainedPointerPosition.x - offset.x + this._passiveTransform.x;
          activeTransform.y = constrainedPointerPosition.y - offset.y + this._passiveTransform.y;
          this._applyRootElementTransform(activeTransform.x, activeTransform.y);
        }
        if (this._moveEvents.observers.length) {
          this._ngZone.run(() => {
            this._moveEvents.next({
              source: this,
              pointerPosition: constrainedPointerPosition,
              event,
              distance: this._getDragDistance(constrainedPointerPosition),
              delta: this._pointerDirectionDelta
            });
          });
        }
      };
      /** Handler that is invoked when the user lifts their pointer up, after initiating a drag. */
      _pointerUp = (event) => {
        this._endDragSequence(event);
      };
      /**
       * Clears subscriptions and stops the dragging sequence.
       * @param event Browser event object that ended the sequence.
       */
      _endDragSequence(event) {
        if (!this._dragDropRegistry.isDragging(this)) {
          return;
        }
        this._removeListeners();
        this._dragDropRegistry.stopDragging(this);
        this._toggleNativeDragInteractions();
        if (this._handles) {
          this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
        }
        if (!this._hasStartedDragging()) {
          return;
        }
        this.released.next({ source: this, event });
        if (this._dropContainer) {
          this._dropContainer._stopScrolling();
          this._animatePreviewToPlaceholder().then(() => {
            this._cleanupDragArtifacts(event);
            this._cleanupCachedDimensions();
            this._dragDropRegistry.stopDragging(this);
          });
        } else {
          this._passiveTransform.x = this._activeTransform.x;
          const pointerPosition = this._getPointerPositionOnPage(event);
          this._passiveTransform.y = this._activeTransform.y;
          this._ngZone.run(() => {
            this.ended.next({
              source: this,
              distance: this._getDragDistance(pointerPosition),
              dropPoint: pointerPosition,
              event
            });
          });
          this._cleanupCachedDimensions();
          this._dragDropRegistry.stopDragging(this);
        }
      }
      /** Starts the dragging sequence. */
      _startDragSequence(event) {
        if (isTouchEvent(event)) {
          this._lastTouchEventTime = Date.now();
        }
        this._toggleNativeDragInteractions();
        const shadowRoot = this._getShadowRoot();
        const dropContainer = this._dropContainer;
        if (shadowRoot) {
          this._ngZone.runOutsideAngular(() => {
            this._cleanupShadowRootSelectStart = this._renderer.listen(shadowRoot, "selectstart", shadowDomSelectStart, activeCapturingEventOptions$1);
          });
        }
        if (dropContainer) {
          const element = this._rootElement;
          const parent = element.parentNode;
          const placeholder = this._placeholder = this._createPlaceholderElement();
          const anchor = this._anchor = this._anchor || this._document.createComment(typeof ngDevMode === "undefined" || ngDevMode ? "cdk-drag-anchor" : "");
          parent.insertBefore(anchor, element);
          this._initialTransform = element.style.transform || "";
          this._preview = new PreviewRef(this._document, this._rootElement, this._direction, this._initialDomRect, this._previewTemplate || null, this.previewClass || null, this._pickupPositionOnPage, this._initialTransform, this._config.zIndex || 1e3, this._renderer);
          this._preview.attach(this._getPreviewInsertionPoint(parent, shadowRoot));
          toggleVisibility(element, false, dragImportantProperties);
          this._document.body.appendChild(parent.replaceChild(placeholder, element));
          this.started.next({ source: this, event });
          dropContainer.start();
          this._initialContainer = dropContainer;
          this._initialIndex = dropContainer.getItemIndex(this);
        } else {
          this.started.next({ source: this, event });
          this._initialContainer = this._initialIndex = void 0;
        }
        this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
      }
      /**
       * Sets up the different variables and subscriptions
       * that will be necessary for the dragging sequence.
       * @param referenceElement Element that started the drag sequence.
       * @param event Browser event object that started the sequence.
       */
      _initializeDragSequence(referenceElement, event) {
        if (this._parentDragRef) {
          event.stopPropagation();
        }
        const isDragging = this.isDragging();
        const isTouchSequence = isTouchEvent(event);
        const isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
        const rootElement = this._rootElement;
        const target = _getEventTarget(event);
        const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
        const isFakeEvent = isTouchSequence ? isFakeTouchstartFromScreenReader(event) : isFakeMousedownFromScreenReader(event);
        if (target && target.draggable && event.type === "mousedown") {
          event.preventDefault();
        }
        if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent || isFakeEvent) {
          return;
        }
        if (this._handles.length) {
          const rootStyles = rootElement.style;
          this._rootElementTapHighlight = rootStyles.webkitTapHighlightColor || "";
          rootStyles.webkitTapHighlightColor = "transparent";
        }
        this._hasMoved = false;
        this._hasStartedDragging.set(this._hasMoved);
        this._removeListeners();
        this._initialDomRect = this._rootElement.getBoundingClientRect();
        this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
        this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
        this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((scrollEvent) => this._updateOnScroll(scrollEvent));
        if (this._boundaryElement) {
          this._boundaryRect = getMutableClientRect(this._boundaryElement);
        }
        const previewTemplate = this._previewTemplate;
        this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? { x: 0, y: 0 } : this._getPointerPositionInElement(this._initialDomRect, referenceElement, event);
        const pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);
        this._pointerDirectionDelta = { x: 0, y: 0 };
        this._pointerPositionAtLastDirectionChange = { x: pointerPosition.x, y: pointerPosition.y };
        this._dragStartTime = Date.now();
        this._dragDropRegistry.startDragging(this, event);
      }
      /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
      _cleanupDragArtifacts(event) {
        toggleVisibility(this._rootElement, true, dragImportantProperties);
        this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);
        this._destroyPreview();
        this._destroyPlaceholder();
        this._initialDomRect = this._boundaryRect = this._previewRect = this._initialTransform = void 0;
        this._ngZone.run(() => {
          const container = this._dropContainer;
          const currentIndex = container.getItemIndex(this);
          const pointerPosition = this._getPointerPositionOnPage(event);
          const distance = this._getDragDistance(pointerPosition);
          const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
          this.ended.next({ source: this, distance, dropPoint: pointerPosition, event });
          this.dropped.next({
            item: this,
            currentIndex,
            previousIndex: this._initialIndex,
            container,
            previousContainer: this._initialContainer,
            isPointerOverContainer,
            distance,
            dropPoint: pointerPosition,
            event
          });
          container.drop(this, currentIndex, this._initialIndex, this._initialContainer, isPointerOverContainer, distance, pointerPosition, event);
          this._dropContainer = this._initialContainer;
        });
      }
      /**
       * Updates the item's position in its drop container, or moves it
       * into a new one, depending on its current drag position.
       */
      _updateActiveDropContainer({ x, y }, { x: rawX, y: rawY }) {
        let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
        if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
          newContainer = this._initialContainer;
        }
        if (newContainer && newContainer !== this._dropContainer) {
          this._ngZone.run(() => {
            this.exited.next({ item: this, container: this._dropContainer });
            this._dropContainer.exit(this);
            this._dropContainer = newContainer;
            this._dropContainer.enter(this, x, y, newContainer === this._initialContainer && // If we're re-entering the initial container and sorting is disabled,
            // put item the into its starting index to begin with.
            newContainer.sortingDisabled ? this._initialIndex : void 0);
            this.entered.next({
              item: this,
              container: newContainer,
              currentIndex: newContainer.getItemIndex(this)
            });
          });
        }
        if (this.isDragging()) {
          this._dropContainer._startScrollingIfNecessary(rawX, rawY);
          this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);
          if (this.constrainPosition) {
            this._applyPreviewTransform(x, y);
          } else {
            this._applyPreviewTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
          }
        }
      }
      /**
       * Animates the preview element from its current position to the location of the drop placeholder.
       * @returns Promise that resolves when the animation completes.
       */
      _animatePreviewToPlaceholder() {
        if (!this._hasMoved) {
          return Promise.resolve();
        }
        const placeholderRect = this._placeholder.getBoundingClientRect();
        this._preview.addClass("cdk-drag-animating");
        this._applyPreviewTransform(placeholderRect.left, placeholderRect.top);
        const duration = this._preview.getTransitionDuration();
        if (duration === 0) {
          return Promise.resolve();
        }
        return this._ngZone.runOutsideAngular(() => {
          return new Promise((resolve) => {
            const handler = (event) => {
              if (!event || this._preview && _getEventTarget(event) === this._preview.element && event.propertyName === "transform") {
                cleanupListener();
                resolve();
                clearTimeout(timeout);
              }
            };
            const timeout = setTimeout(handler, duration * 1.5);
            const cleanupListener = this._preview.addEventListener("transitionend", handler);
          });
        });
      }
      /** Creates an element that will be shown instead of the current element while dragging. */
      _createPlaceholderElement() {
        const placeholderConfig = this._placeholderTemplate;
        const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
        let placeholder;
        if (placeholderTemplate) {
          this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);
          this._placeholderRef.detectChanges();
          placeholder = getRootNode(this._placeholderRef, this._document);
        } else {
          placeholder = deepCloneNode(this._rootElement);
        }
        placeholder.style.pointerEvents = "none";
        placeholder.classList.add("cdk-drag-placeholder");
        return placeholder;
      }
      /**
       * Figures out the coordinates at which an element was picked up.
       * @param referenceElement Element that initiated the dragging.
       * @param event Event that initiated the dragging.
       */
      _getPointerPositionInElement(elementRect, referenceElement, event) {
        const handleElement = referenceElement === this._rootElement ? null : referenceElement;
        const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
        const point = isTouchEvent(event) ? event.targetTouches[0] : event;
        const scrollPosition = this._getViewportScrollPosition();
        const x = point.pageX - referenceRect.left - scrollPosition.left;
        const y = point.pageY - referenceRect.top - scrollPosition.top;
        return {
          x: referenceRect.left - elementRect.left + x,
          y: referenceRect.top - elementRect.top + y
        };
      }
      /** Determines the point of the page that was touched by the user. */
      _getPointerPositionOnPage(event) {
        const scrollPosition = this._getViewportScrollPosition();
        const point = isTouchEvent(event) ? (
          // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
          // Also note that on real devices we're guaranteed for either `touches` or `changedTouches`
          // to have a value, but Firefox in device emulation mode has a bug where both can be empty
          // for `touchstart` and `touchend` so we fall back to a dummy object in order to avoid
          // throwing an error. The value returned here will be incorrect, but since this only
          // breaks inside a developer tool and the value is only used for secondary information,
          // we can get away with it. See https://bugzilla.mozilla.org/show_bug.cgi?id=1615824.
          event.touches[0] || event.changedTouches[0] || { pageX: 0, pageY: 0 }
        ) : event;
        const x = point.pageX - scrollPosition.left;
        const y = point.pageY - scrollPosition.top;
        if (this._ownerSVGElement) {
          const svgMatrix = this._ownerSVGElement.getScreenCTM();
          if (svgMatrix) {
            const svgPoint = this._ownerSVGElement.createSVGPoint();
            svgPoint.x = x;
            svgPoint.y = y;
            return svgPoint.matrixTransform(svgMatrix.inverse());
          }
        }
        return { x, y };
      }
      /** Gets the pointer position on the page, accounting for any position constraints. */
      _getConstrainedPointerPosition(point) {
        const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
        let { x, y } = this.constrainPosition ? this.constrainPosition(point, this, this._initialDomRect, this._pickupPositionInElement) : point;
        if (this.lockAxis === "x" || dropContainerLock === "x") {
          y = this._pickupPositionOnPage.y - (this.constrainPosition ? this._pickupPositionInElement.y : 0);
        } else if (this.lockAxis === "y" || dropContainerLock === "y") {
          x = this._pickupPositionOnPage.x - (this.constrainPosition ? this._pickupPositionInElement.x : 0);
        }
        if (this._boundaryRect) {
          const { x: pickupX, y: pickupY } = !this.constrainPosition ? this._pickupPositionInElement : { x: 0, y: 0 };
          const boundaryRect = this._boundaryRect;
          const { width: previewWidth, height: previewHeight } = this._getPreviewRect();
          const minY = boundaryRect.top + pickupY;
          const maxY = boundaryRect.bottom - (previewHeight - pickupY);
          const minX = boundaryRect.left + pickupX;
          const maxX = boundaryRect.right - (previewWidth - pickupX);
          x = clamp$1(x, minX, maxX);
          y = clamp$1(y, minY, maxY);
        }
        return { x, y };
      }
      /** Updates the current drag delta, based on the user's current pointer position on the page. */
      _updatePointerDirectionDelta(pointerPositionOnPage) {
        const { x, y } = pointerPositionOnPage;
        const delta = this._pointerDirectionDelta;
        const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
        const changeX = Math.abs(x - positionSinceLastChange.x);
        const changeY = Math.abs(y - positionSinceLastChange.y);
        if (changeX > this._config.pointerDirectionChangeThreshold) {
          delta.x = x > positionSinceLastChange.x ? 1 : -1;
          positionSinceLastChange.x = x;
        }
        if (changeY > this._config.pointerDirectionChangeThreshold) {
          delta.y = y > positionSinceLastChange.y ? 1 : -1;
          positionSinceLastChange.y = y;
        }
        return delta;
      }
      /** Toggles the native drag interactions, based on how many handles are registered. */
      _toggleNativeDragInteractions() {
        if (!this._rootElement || !this._handles) {
          return;
        }
        const shouldEnable = this._handles.length > 0 || !this.isDragging();
        if (shouldEnable !== this._nativeInteractionsEnabled) {
          this._nativeInteractionsEnabled = shouldEnable;
          toggleNativeDragInteractions(this._rootElement, shouldEnable);
        }
      }
      /** Removes the manually-added event listeners from the root element. */
      _removeRootElementListeners() {
        this._rootElementCleanups?.forEach((cleanup) => cleanup());
        this._rootElementCleanups = void 0;
      }
      /**
       * Applies a `transform` to the root element, taking into account any existing transforms on it.
       * @param x New transform value along the X axis.
       * @param y New transform value along the Y axis.
       */
      _applyRootElementTransform(x, y) {
        const scale = 1 / this.scale;
        const transform = getTransform(x * scale, y * scale);
        const styles = this._rootElement.style;
        if (this._initialTransform == null) {
          this._initialTransform = styles.transform && styles.transform != "none" ? styles.transform : "";
        }
        styles.transform = combineTransforms(transform, this._initialTransform);
      }
      /**
       * Applies a `transform` to the preview, taking into account any existing transforms on it.
       * @param x New transform value along the X axis.
       * @param y New transform value along the Y axis.
       */
      _applyPreviewTransform(x, y) {
        const initialTransform = this._previewTemplate?.template ? void 0 : this._initialTransform;
        const transform = getTransform(x, y);
        this._preview.setTransform(combineTransforms(transform, initialTransform));
      }
      /**
       * Gets the distance that the user has dragged during the current drag sequence.
       * @param currentPosition Current position of the user's pointer.
       */
      _getDragDistance(currentPosition) {
        const pickupPosition = this._pickupPositionOnPage;
        if (pickupPosition) {
          return { x: currentPosition.x - pickupPosition.x, y: currentPosition.y - pickupPosition.y };
        }
        return { x: 0, y: 0 };
      }
      /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */
      _cleanupCachedDimensions() {
        this._boundaryRect = this._previewRect = void 0;
        this._parentPositions.clear();
      }
      /**
       * Checks whether the element is still inside its boundary after the viewport has been resized.
       * If not, the position is adjusted so that the element fits again.
       */
      _containInsideBoundaryOnResize() {
        let { x, y } = this._passiveTransform;
        if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
          return;
        }
        const elementRect = this._rootElement.getBoundingClientRect();
        const boundaryRect = this._boundaryElement.getBoundingClientRect();
        if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
          return;
        }
        const leftOverflow = boundaryRect.left - elementRect.left;
        const rightOverflow = elementRect.right - boundaryRect.right;
        const topOverflow = boundaryRect.top - elementRect.top;
        const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
        if (boundaryRect.width > elementRect.width) {
          if (leftOverflow > 0) {
            x += leftOverflow;
          }
          if (rightOverflow > 0) {
            x -= rightOverflow;
          }
        } else {
          x = 0;
        }
        if (boundaryRect.height > elementRect.height) {
          if (topOverflow > 0) {
            y += topOverflow;
          }
          if (bottomOverflow > 0) {
            y -= bottomOverflow;
          }
        } else {
          y = 0;
        }
        if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
          this.setFreeDragPosition({ y, x });
        }
      }
      /** Gets the drag start delay, based on the event type. */
      _getDragStartDelay(event) {
        const value = this.dragStartDelay;
        if (typeof value === "number") {
          return value;
        } else if (isTouchEvent(event)) {
          return value.touch;
        }
        return value ? value.mouse : 0;
      }
      /** Updates the internal state of the draggable element when scrolling has occurred. */
      _updateOnScroll(event) {
        const scrollDifference = this._parentPositions.handleScroll(event);
        if (scrollDifference) {
          const target = _getEventTarget(event);
          if (this._boundaryRect && target !== this._boundaryElement && target.contains(this._boundaryElement)) {
            adjustDomRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
          }
          this._pickupPositionOnPage.x += scrollDifference.left;
          this._pickupPositionOnPage.y += scrollDifference.top;
          if (!this._dropContainer) {
            this._activeTransform.x -= scrollDifference.left;
            this._activeTransform.y -= scrollDifference.top;
            this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
          }
        }
      }
      /** Gets the scroll position of the viewport. */
      _getViewportScrollPosition() {
        return this._parentPositions.positions.get(this._document)?.scrollPosition || this._parentPositions.getViewportScrollPosition();
      }
      /**
       * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
       * than saving it in property directly on init, because we want to resolve it as late as possible
       * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
       * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
       */
      _getShadowRoot() {
        if (this._cachedShadowRoot === void 0) {
          this._cachedShadowRoot = _getShadowRoot(this._rootElement);
        }
        return this._cachedShadowRoot;
      }
      /** Gets the element into which the drag preview should be inserted. */
      _getPreviewInsertionPoint(initialParent, shadowRoot) {
        const previewContainer = this._previewContainer || "global";
        if (previewContainer === "parent") {
          return initialParent;
        }
        if (previewContainer === "global") {
          const documentRef = this._document;
          return shadowRoot || documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
        }
        return coerceElement(previewContainer);
      }
      /** Lazily resolves and returns the dimensions of the preview. */
      _getPreviewRect() {
        if (!this._previewRect || !this._previewRect.width && !this._previewRect.height) {
          this._previewRect = this._preview ? this._preview.getBoundingClientRect() : this._initialDomRect;
        }
        return this._previewRect;
      }
      /** Handles a native `dragstart` event. */
      _nativeDragStart = (event) => {
        if (this._handles.length) {
          const targetHandle = this._getTargetHandle(event);
          if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
            event.preventDefault();
          }
        } else if (!this.disabled) {
          event.preventDefault();
        }
      };
      /** Gets a handle that is the target of an event. */
      _getTargetHandle(event) {
        return this._handles.find((handle) => {
          return event.target && (event.target === handle || handle.contains(event.target));
        });
      }
    };
    SingleAxisSortStrategy = class {
      _dragDropRegistry;
      /** Root element container of the drop list. */
      _element;
      /** Function used to determine if an item can be sorted into a specific index. */
      _sortPredicate;
      /** Cache of the dimensions of all the items inside the container. */
      _itemPositions = [];
      /**
       * Draggable items that are currently active inside the container. Includes the items
       * that were there at the start of the sequence, as well as any items that have been dragged
       * in, but haven't been dropped yet.
       */
      _activeDraggables;
      /** Direction in which the list is oriented. */
      orientation = "vertical";
      /** Layout direction of the drop list. */
      direction;
      constructor(_dragDropRegistry) {
        this._dragDropRegistry = _dragDropRegistry;
      }
      /**
       * Keeps track of the item that was last swapped with the dragged item, as well as what direction
       * the pointer was moving in when the swap occurred and whether the user's pointer continued to
       * overlap with the swapped item after the swapping occurred.
       */
      _previousSwap = {
        drag: null,
        delta: 0,
        overlaps: false
      };
      /**
       * To be called when the drag sequence starts.
       * @param items Items that are currently in the list.
       */
      start(items) {
        this.withItems(items);
      }
      /**
       * To be called when an item is being sorted.
       * @param item Item to be sorted.
       * @param pointerX Position of the item along the X axis.
       * @param pointerY Position of the item along the Y axis.
       * @param pointerDelta Direction in which the pointer is moving along each axis.
       */
      sort(item, pointerX, pointerY, pointerDelta) {
        const siblings = this._itemPositions;
        const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
        if (newIndex === -1 && siblings.length > 0) {
          return null;
        }
        const isHorizontal = this.orientation === "horizontal";
        const currentIndex = siblings.findIndex((currentItem) => currentItem.drag === item);
        const siblingAtNewPosition = siblings[newIndex];
        const currentPosition = siblings[currentIndex].clientRect;
        const newPosition = siblingAtNewPosition.clientRect;
        const delta = currentIndex > newIndex ? 1 : -1;
        const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
        const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
        const oldOrder = siblings.slice();
        moveItemInArray(siblings, currentIndex, newIndex);
        siblings.forEach((sibling, index) => {
          if (oldOrder[index] === sibling) {
            return;
          }
          const isDraggedItem = sibling.drag === item;
          const offset = isDraggedItem ? itemOffset : siblingOffset;
          const elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement();
          sibling.offset += offset;
          const transformAmount = Math.round(sibling.offset * (1 / sibling.drag.scale));
          if (isHorizontal) {
            elementToOffset.style.transform = combineTransforms(`translate3d(${transformAmount}px, 0, 0)`, sibling.initialTransform);
            adjustDomRect(sibling.clientRect, 0, offset);
          } else {
            elementToOffset.style.transform = combineTransforms(`translate3d(0, ${transformAmount}px, 0)`, sibling.initialTransform);
            adjustDomRect(sibling.clientRect, offset, 0);
          }
        });
        this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
        this._previousSwap.drag = siblingAtNewPosition.drag;
        this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
        return { previousIndex: currentIndex, currentIndex: newIndex };
      }
      /**
       * Called when an item is being moved into the container.
       * @param item Item that was moved into the container.
       * @param pointerX Position of the item along the X axis.
       * @param pointerY Position of the item along the Y axis.
       * @param index Index at which the item entered. If omitted, the container will try to figure it
       *   out automatically.
       */
      enter(item, pointerX, pointerY, index) {
        const newIndex = index == null || index < 0 ? (
          // We use the coordinates of where the item entered the drop
          // zone to figure out at which index it should be inserted.
          this._getItemIndexFromPointerPosition(item, pointerX, pointerY)
        ) : index;
        const activeDraggables = this._activeDraggables;
        const currentIndex = activeDraggables.indexOf(item);
        const placeholder = item.getPlaceholderElement();
        let newPositionReference = activeDraggables[newIndex];
        if (newPositionReference === item) {
          newPositionReference = activeDraggables[newIndex + 1];
        }
        if (!newPositionReference && (newIndex == null || newIndex === -1 || newIndex < activeDraggables.length - 1) && this._shouldEnterAsFirstChild(pointerX, pointerY)) {
          newPositionReference = activeDraggables[0];
        }
        if (currentIndex > -1) {
          activeDraggables.splice(currentIndex, 1);
        }
        if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
          const element = newPositionReference.getRootElement();
          element.parentElement.insertBefore(placeholder, element);
          activeDraggables.splice(newIndex, 0, item);
        } else {
          this._element.appendChild(placeholder);
          activeDraggables.push(item);
        }
        placeholder.style.transform = "";
        this._cacheItemPositions();
      }
      /** Sets the items that are currently part of the list. */
      withItems(items) {
        this._activeDraggables = items.slice();
        this._cacheItemPositions();
      }
      /** Assigns a sort predicate to the strategy. */
      withSortPredicate(predicate) {
        this._sortPredicate = predicate;
      }
      /** Resets the strategy to its initial state before dragging was started. */
      reset() {
        this._activeDraggables?.forEach((item) => {
          const rootElement = item.getRootElement();
          if (rootElement) {
            const initialTransform = this._itemPositions.find((p) => p.drag === item)?.initialTransform;
            rootElement.style.transform = initialTransform || "";
          }
        });
        this._itemPositions = [];
        this._activeDraggables = [];
        this._previousSwap.drag = null;
        this._previousSwap.delta = 0;
        this._previousSwap.overlaps = false;
      }
      /**
       * Gets a snapshot of items currently in the list.
       * Can include items that we dragged in from another list.
       */
      getActiveItemsSnapshot() {
        return this._activeDraggables;
      }
      /** Gets the index of a specific item. */
      getItemIndex(item) {
        const items = this.orientation === "horizontal" && this.direction === "rtl" ? this._itemPositions.slice().reverse() : this._itemPositions;
        return items.findIndex((currentItem) => currentItem.drag === item);
      }
      /** Used to notify the strategy that the scroll position has changed. */
      updateOnScroll(topDifference, leftDifference) {
        this._itemPositions.forEach(({ clientRect }) => {
          adjustDomRect(clientRect, topDifference, leftDifference);
        });
        this._itemPositions.forEach(({ drag }) => {
          if (this._dragDropRegistry.isDragging(drag)) {
            drag._sortFromLastPointerPosition();
          }
        });
      }
      withElementContainer(container) {
        this._element = container;
      }
      /** Refreshes the position cache of the items and sibling containers. */
      _cacheItemPositions() {
        const isHorizontal = this.orientation === "horizontal";
        this._itemPositions = this._activeDraggables.map((drag) => {
          const elementToMeasure = drag.getVisibleElement();
          return {
            drag,
            offset: 0,
            initialTransform: elementToMeasure.style.transform || "",
            clientRect: getMutableClientRect(elementToMeasure)
          };
        }).sort((a, b) => {
          return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
        });
      }
      /**
       * Gets the offset in pixels by which the item that is being dragged should be moved.
       * @param currentPosition Current position of the item.
       * @param newPosition Position of the item where the current item should be moved.
       * @param delta Direction in which the user is moving.
       */
      _getItemOffsetPx(currentPosition, newPosition, delta) {
        const isHorizontal = this.orientation === "horizontal";
        let itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top;
        if (delta === -1) {
          itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
        }
        return itemOffset;
      }
      /**
       * Gets the offset in pixels by which the items that aren't being dragged should be moved.
       * @param currentIndex Index of the item currently being dragged.
       * @param siblings All of the items in the list.
       * @param delta Direction in which the user is moving.
       */
      _getSiblingOffsetPx(currentIndex, siblings, delta) {
        const isHorizontal = this.orientation === "horizontal";
        const currentPosition = siblings[currentIndex].clientRect;
        const immediateSibling = siblings[currentIndex + delta * -1];
        let siblingOffset = currentPosition[isHorizontal ? "width" : "height"] * delta;
        if (immediateSibling) {
          const start = isHorizontal ? "left" : "top";
          const end = isHorizontal ? "right" : "bottom";
          if (delta === -1) {
            siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
          } else {
            siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
          }
        }
        return siblingOffset;
      }
      /**
       * Checks if pointer is entering in the first position
       * @param pointerX Position of the user's pointer along the X axis.
       * @param pointerY Position of the user's pointer along the Y axis.
       */
      _shouldEnterAsFirstChild(pointerX, pointerY) {
        if (!this._activeDraggables.length) {
          return false;
        }
        const itemPositions = this._itemPositions;
        const isHorizontal = this.orientation === "horizontal";
        const reversed = itemPositions[0].drag !== this._activeDraggables[0];
        if (reversed) {
          const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
          return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
        } else {
          const firstItemRect = itemPositions[0].clientRect;
          return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
        }
      }
      /**
       * Gets the index of an item in the drop container, based on the position of the user's pointer.
       * @param item Item that is being sorted.
       * @param pointerX Position of the user's pointer along the X axis.
       * @param pointerY Position of the user's pointer along the Y axis.
       * @param delta Direction in which the user is moving their pointer.
       */
      _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
        const isHorizontal = this.orientation === "horizontal";
        const index = this._itemPositions.findIndex(({ drag, clientRect }) => {
          if (drag === item) {
            return false;
          }
          if (delta) {
            const direction = isHorizontal ? delta.x : delta.y;
            if (drag === this._previousSwap.drag && this._previousSwap.overlaps && direction === this._previousSwap.delta) {
              return false;
            }
          }
          return isHorizontal ? (
            // Round these down since most browsers report client rects with
            // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
            pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right)
          ) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
        });
        return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
      }
    };
    MixedSortStrategy = class {
      _document;
      _dragDropRegistry;
      /** Root element container of the drop list. */
      _element;
      /** Function used to determine if an item can be sorted into a specific index. */
      _sortPredicate;
      /** Lazily-resolved root node containing the list. Use `_getRootNode` to read this. */
      _rootNode;
      /**
       * Draggable items that are currently active inside the container. Includes the items
       * that were there at the start of the sequence, as well as any items that have been dragged
       * in, but haven't been dropped yet.
       */
      _activeItems;
      /**
       * Keeps track of the item that was last swapped with the dragged item, as well as what direction
       * the pointer was moving in when the swap occurred and whether the user's pointer continued to
       * overlap with the swapped item after the swapping occurred.
       */
      _previousSwap = {
        drag: null,
        deltaX: 0,
        deltaY: 0,
        overlaps: false
      };
      /**
       * Keeps track of the relationship between a node and its next sibling. This information
       * is used to restore the DOM to the order it was in before dragging started.
       */
      _relatedNodes = [];
      constructor(_document, _dragDropRegistry) {
        this._document = _document;
        this._dragDropRegistry = _dragDropRegistry;
      }
      /**
       * To be called when the drag sequence starts.
       * @param items Items that are currently in the list.
       */
      start(items) {
        const childNodes = this._element.childNodes;
        this._relatedNodes = [];
        for (let i = 0; i < childNodes.length; i++) {
          const node = childNodes[i];
          this._relatedNodes.push([node, node.nextSibling]);
        }
        this.withItems(items);
      }
      /**
       * To be called when an item is being sorted.
       * @param item Item to be sorted.
       * @param pointerX Position of the item along the X axis.
       * @param pointerY Position of the item along the Y axis.
       * @param pointerDelta Direction in which the pointer is moving along each axis.
       */
      sort(item, pointerX, pointerY, pointerDelta) {
        const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
        const previousSwap = this._previousSwap;
        if (newIndex === -1 || this._activeItems[newIndex] === item) {
          return null;
        }
        const toSwapWith = this._activeItems[newIndex];
        if (previousSwap.drag === toSwapWith && previousSwap.overlaps && previousSwap.deltaX === pointerDelta.x && previousSwap.deltaY === pointerDelta.y) {
          return null;
        }
        const previousIndex = this.getItemIndex(item);
        const current = item.getPlaceholderElement();
        const overlapElement = toSwapWith.getRootElement();
        if (newIndex > previousIndex) {
          overlapElement.after(current);
        } else {
          overlapElement.before(current);
        }
        moveItemInArray(this._activeItems, previousIndex, newIndex);
        const newOverlapElement = this._getRootNode().elementFromPoint(pointerX, pointerY);
        previousSwap.deltaX = pointerDelta.x;
        previousSwap.deltaY = pointerDelta.y;
        previousSwap.drag = toSwapWith;
        previousSwap.overlaps = overlapElement === newOverlapElement || overlapElement.contains(newOverlapElement);
        return {
          previousIndex,
          currentIndex: newIndex
        };
      }
      /**
       * Called when an item is being moved into the container.
       * @param item Item that was moved into the container.
       * @param pointerX Position of the item along the X axis.
       * @param pointerY Position of the item along the Y axis.
       * @param index Index at which the item entered. If omitted, the container will try to figure it
       *   out automatically.
       */
      enter(item, pointerX, pointerY, index) {
        let enterIndex = index == null || index < 0 ? this._getItemIndexFromPointerPosition(item, pointerX, pointerY) : index;
        if (enterIndex === -1) {
          enterIndex = this._getClosestItemIndexToPointer(item, pointerX, pointerY);
        }
        const targetItem = this._activeItems[enterIndex];
        const currentIndex = this._activeItems.indexOf(item);
        if (currentIndex > -1) {
          this._activeItems.splice(currentIndex, 1);
        }
        if (targetItem && !this._dragDropRegistry.isDragging(targetItem)) {
          this._activeItems.splice(enterIndex, 0, item);
          targetItem.getRootElement().before(item.getPlaceholderElement());
        } else {
          this._activeItems.push(item);
          this._element.appendChild(item.getPlaceholderElement());
        }
      }
      /** Sets the items that are currently part of the list. */
      withItems(items) {
        this._activeItems = items.slice();
      }
      /** Assigns a sort predicate to the strategy. */
      withSortPredicate(predicate) {
        this._sortPredicate = predicate;
      }
      /** Resets the strategy to its initial state before dragging was started. */
      reset() {
        const root = this._element;
        const previousSwap = this._previousSwap;
        for (let i = this._relatedNodes.length - 1; i > -1; i--) {
          const [node, nextSibling] = this._relatedNodes[i];
          if (node.parentNode === root && node.nextSibling !== nextSibling) {
            if (nextSibling === null) {
              root.appendChild(node);
            } else if (nextSibling.parentNode === root) {
              root.insertBefore(node, nextSibling);
            }
          }
        }
        this._relatedNodes = [];
        this._activeItems = [];
        previousSwap.drag = null;
        previousSwap.deltaX = previousSwap.deltaY = 0;
        previousSwap.overlaps = false;
      }
      /**
       * Gets a snapshot of items currently in the list.
       * Can include items that we dragged in from another list.
       */
      getActiveItemsSnapshot() {
        return this._activeItems;
      }
      /** Gets the index of a specific item. */
      getItemIndex(item) {
        return this._activeItems.indexOf(item);
      }
      /** Used to notify the strategy that the scroll position has changed. */
      updateOnScroll() {
        this._activeItems.forEach((item) => {
          if (this._dragDropRegistry.isDragging(item)) {
            item._sortFromLastPointerPosition();
          }
        });
      }
      withElementContainer(container) {
        if (container !== this._element) {
          this._element = container;
          this._rootNode = void 0;
        }
      }
      /**
       * Gets the index of an item in the drop container, based on the position of the user's pointer.
       * @param item Item that is being sorted.
       * @param pointerX Position of the user's pointer along the X axis.
       * @param pointerY Position of the user's pointer along the Y axis.
       * @param delta Direction in which the user is moving their pointer.
       */
      _getItemIndexFromPointerPosition(item, pointerX, pointerY) {
        const elementAtPoint = this._getRootNode().elementFromPoint(Math.floor(pointerX), Math.floor(pointerY));
        const index = elementAtPoint ? this._activeItems.findIndex((item2) => {
          const root = item2.getRootElement();
          return elementAtPoint === root || root.contains(elementAtPoint);
        }) : -1;
        return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
      }
      /** Lazily resolves the list's root node. */
      _getRootNode() {
        if (!this._rootNode) {
          this._rootNode = _getShadowRoot(this._element) || this._document;
        }
        return this._rootNode;
      }
      /**
       * Finds the index of the item that's closest to the item being dragged.
       * @param item Item being dragged.
       * @param pointerX Position of the user's pointer along the X axis.
       * @param pointerY Position of the user's pointer along the Y axis.
       */
      _getClosestItemIndexToPointer(item, pointerX, pointerY) {
        if (this._activeItems.length === 0) {
          return -1;
        }
        if (this._activeItems.length === 1) {
          return 0;
        }
        let minDistance = Infinity;
        let minIndex = -1;
        for (let i = 0; i < this._activeItems.length; i++) {
          const current = this._activeItems[i];
          if (current !== item) {
            const { x, y } = current.getRootElement().getBoundingClientRect();
            const distance = Math.hypot(pointerX - x, pointerY - y);
            if (distance < minDistance) {
              minDistance = distance;
              minIndex = i;
            }
          }
        }
        return minIndex;
      }
    };
    DROP_PROXIMITY_THRESHOLD = 0.05;
    SCROLL_PROXIMITY_THRESHOLD = 0.05;
    (function(AutoScrollVerticalDirection2) {
      AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["NONE"] = 0] = "NONE";
      AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["UP"] = 1] = "UP";
      AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["DOWN"] = 2] = "DOWN";
    })(AutoScrollVerticalDirection || (AutoScrollVerticalDirection = {}));
    (function(AutoScrollHorizontalDirection2) {
      AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["NONE"] = 0] = "NONE";
      AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["LEFT"] = 1] = "LEFT";
      AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["RIGHT"] = 2] = "RIGHT";
    })(AutoScrollHorizontalDirection || (AutoScrollHorizontalDirection = {}));
    DropListRef = class {
      _dragDropRegistry;
      _ngZone;
      _viewportRuler;
      /** Element that the drop list is attached to. */
      element;
      /** Whether starting a dragging sequence from this container is disabled. */
      disabled = false;
      /** Whether sorting items within the list is disabled. */
      sortingDisabled = false;
      /** Locks the position of the draggable elements inside the container along the specified axis. */
      lockAxis;
      /**
       * Whether auto-scrolling the view when the user
       * moves their pointer close to the edges is disabled.
       */
      autoScrollDisabled = false;
      /** Number of pixels to scroll for each frame when auto-scrolling an element. */
      autoScrollStep = 2;
      /**
       * Function that is used to determine whether an item
       * is allowed to be moved into a drop container.
       */
      enterPredicate = () => true;
      /** Function that is used to determine whether an item can be sorted into a particular index. */
      sortPredicate = () => true;
      /** Emits right before dragging has started. */
      beforeStarted = new Subject();
      /**
       * Emits when the user has moved a new drag item into this container.
       */
      entered = new Subject();
      /**
       * Emits when the user removes an item from the container
       * by dragging it into another container.
       */
      exited = new Subject();
      /** Emits when the user drops an item inside the container. */
      dropped = new Subject();
      /** Emits as the user is swapping items while actively dragging. */
      sorted = new Subject();
      /** Emits when a dragging sequence is started in a list connected to the current one. */
      receivingStarted = new Subject();
      /** Emits when a dragging sequence is stopped from a list connected to the current one. */
      receivingStopped = new Subject();
      /** Arbitrary data that can be attached to the drop list. */
      data;
      /** Element that is the direct parent of the drag items. */
      _container;
      /** Whether an item in the list is being dragged. */
      _isDragging = false;
      /** Keeps track of the positions of any parent scrollable elements. */
      _parentPositions;
      /** Strategy being used to sort items within the list. */
      _sortStrategy;
      /** Cached `DOMRect` of the drop list. */
      _domRect;
      /** Draggable items in the container. */
      _draggables = [];
      /** Drop lists that are connected to the current one. */
      _siblings = [];
      /** Connected siblings that currently have a dragged item. */
      _activeSiblings = /* @__PURE__ */ new Set();
      /** Subscription to the window being scrolled. */
      _viewportScrollSubscription = Subscription.EMPTY;
      /** Vertical direction in which the list is currently scrolling. */
      _verticalScrollDirection = AutoScrollVerticalDirection.NONE;
      /** Horizontal direction in which the list is currently scrolling. */
      _horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
      /** Node that is being auto-scrolled. */
      _scrollNode;
      /** Used to signal to the current auto-scroll sequence when to stop. */
      _stopScrollTimers = new Subject();
      /** Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly. */
      _cachedShadowRoot = null;
      /** Reference to the document. */
      _document;
      /** Elements that can be scrolled while the user is dragging. */
      _scrollableElements = [];
      /** Initial value for the element's `scroll-snap-type` style. */
      _initialScrollSnap;
      /** Direction of the list's layout. */
      _direction = "ltr";
      constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
        this._dragDropRegistry = _dragDropRegistry;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        const coercedElement = this.element = coerceElement(element);
        this._document = _document;
        this.withOrientation("vertical").withElementContainer(coercedElement);
        _dragDropRegistry.registerDropContainer(this);
        this._parentPositions = new ParentPositionTracker(_document);
      }
      /** Removes the drop list functionality from the DOM element. */
      dispose() {
        this._stopScrolling();
        this._stopScrollTimers.complete();
        this._viewportScrollSubscription.unsubscribe();
        this.beforeStarted.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this.sorted.complete();
        this.receivingStarted.complete();
        this.receivingStopped.complete();
        this._activeSiblings.clear();
        this._scrollNode = null;
        this._parentPositions.clear();
        this._dragDropRegistry.removeDropContainer(this);
      }
      /** Whether an item from this list is currently being dragged. */
      isDragging() {
        return this._isDragging;
      }
      /** Starts dragging an item. */
      start() {
        this._draggingStarted();
        this._notifyReceivingSiblings();
      }
      /**
       * Attempts to move an item into the container.
       * @param item Item that was moved into the container.
       * @param pointerX Position of the item along the X axis.
       * @param pointerY Position of the item along the Y axis.
       * @param index Index at which the item entered. If omitted, the container will try to figure it
       *   out automatically.
       */
      enter(item, pointerX, pointerY, index) {
        this._draggingStarted();
        if (index == null && this.sortingDisabled) {
          index = this._draggables.indexOf(item);
        }
        this._sortStrategy.enter(item, pointerX, pointerY, index);
        this._cacheParentPositions();
        this._notifyReceivingSiblings();
        this.entered.next({ item, container: this, currentIndex: this.getItemIndex(item) });
      }
      /**
       * Removes an item from the container after it was dragged into another container by the user.
       * @param item Item that was dragged out.
       */
      exit(item) {
        this._reset();
        this.exited.next({ item, container: this });
      }
      /**
       * Drops an item into this container.
       * @param item Item being dropped into the container.
       * @param currentIndex Index at which the item should be inserted.
       * @param previousIndex Index of the item when dragging started.
       * @param previousContainer Container from which the item got dragged in.
       * @param isPointerOverContainer Whether the user's pointer was over the
       *    container when the item was dropped.
       * @param distance Distance the user has dragged since the start of the dragging sequence.
       * @param event Event that triggered the dropping sequence.
       *
       * @breaking-change 15.0.0 `previousIndex` and `event` parameters to become required.
       */
      drop(item, currentIndex, previousIndex, previousContainer, isPointerOverContainer, distance, dropPoint, event = {}) {
        this._reset();
        this.dropped.next({
          item,
          currentIndex,
          previousIndex,
          container: this,
          previousContainer,
          isPointerOverContainer,
          distance,
          dropPoint,
          event
        });
      }
      /**
       * Sets the draggable items that are a part of this list.
       * @param items Items that are a part of this list.
       */
      withItems(items) {
        const previousItems = this._draggables;
        this._draggables = items;
        items.forEach((item) => item._withDropContainer(this));
        if (this.isDragging()) {
          const draggedItems = previousItems.filter((item) => item.isDragging());
          if (draggedItems.every((item) => items.indexOf(item) === -1)) {
            this._reset();
          } else {
            this._sortStrategy.withItems(this._draggables);
          }
        }
        return this;
      }
      /** Sets the layout direction of the drop list. */
      withDirection(direction) {
        this._direction = direction;
        if (this._sortStrategy instanceof SingleAxisSortStrategy) {
          this._sortStrategy.direction = direction;
        }
        return this;
      }
      /**
       * Sets the containers that are connected to this one. When two or more containers are
       * connected, the user will be allowed to transfer items between them.
       * @param connectedTo Other containers that the current containers should be connected to.
       */
      connectedTo(connectedTo) {
        this._siblings = connectedTo.slice();
        return this;
      }
      /**
       * Sets the orientation of the container.
       * @param orientation New orientation for the container.
       */
      withOrientation(orientation) {
        if (orientation === "mixed") {
          this._sortStrategy = new MixedSortStrategy(this._document, this._dragDropRegistry);
        } else {
          const strategy = new SingleAxisSortStrategy(this._dragDropRegistry);
          strategy.direction = this._direction;
          strategy.orientation = orientation;
          this._sortStrategy = strategy;
        }
        this._sortStrategy.withElementContainer(this._container);
        this._sortStrategy.withSortPredicate((index, item) => this.sortPredicate(index, item, this));
        return this;
      }
      /**
       * Sets which parent elements are can be scrolled while the user is dragging.
       * @param elements Elements that can be scrolled.
       */
      withScrollableParents(elements) {
        const element = this._container;
        this._scrollableElements = elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
        return this;
      }
      /**
       * Configures the drop list so that a different element is used as the container for the
       * dragged items. This is useful for the cases when one might not have control over the
       * full DOM that sets up the dragging.
       * Note that the alternate container needs to be a descendant of the drop list.
       * @param container New element container to be assigned.
       */
      withElementContainer(container) {
        if (container === this._container) {
          return this;
        }
        const element = coerceElement(this.element);
        if ((typeof ngDevMode === "undefined" || ngDevMode) && container !== element && !element.contains(container)) {
          throw new Error("Invalid DOM structure for drop list. Alternate container element must be a descendant of the drop list.");
        }
        const oldContainerIndex = this._scrollableElements.indexOf(this._container);
        const newContainerIndex = this._scrollableElements.indexOf(container);
        if (oldContainerIndex > -1) {
          this._scrollableElements.splice(oldContainerIndex, 1);
        }
        if (newContainerIndex > -1) {
          this._scrollableElements.splice(newContainerIndex, 1);
        }
        if (this._sortStrategy) {
          this._sortStrategy.withElementContainer(container);
        }
        this._cachedShadowRoot = null;
        this._scrollableElements.unshift(container);
        this._container = container;
        return this;
      }
      /** Gets the scrollable parents that are registered with this drop container. */
      getScrollableParents() {
        return this._scrollableElements;
      }
      /**
       * Figures out the index of an item in the container.
       * @param item Item whose index should be determined.
       */
      getItemIndex(item) {
        return this._isDragging ? this._sortStrategy.getItemIndex(item) : this._draggables.indexOf(item);
      }
      /**
       * Whether the list is able to receive the item that
       * is currently being dragged inside a connected drop list.
       */
      isReceiving() {
        return this._activeSiblings.size > 0;
      }
      /**
       * Sorts an item inside the container based on its position.
       * @param item Item to be sorted.
       * @param pointerX Position of the item along the X axis.
       * @param pointerY Position of the item along the Y axis.
       * @param pointerDelta Direction in which the pointer is moving along each axis.
       */
      _sortItem(item, pointerX, pointerY, pointerDelta) {
        if (this.sortingDisabled || !this._domRect || !isPointerNearDomRect(this._domRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
          return;
        }
        const result = this._sortStrategy.sort(item, pointerX, pointerY, pointerDelta);
        if (result) {
          this.sorted.next({
            previousIndex: result.previousIndex,
            currentIndex: result.currentIndex,
            container: this,
            item
          });
        }
      }
      /**
       * Checks whether the user's pointer is close to the edges of either the
       * viewport or the drop list and starts the auto-scroll sequence.
       * @param pointerX User's pointer position along the x axis.
       * @param pointerY User's pointer position along the y axis.
       */
      _startScrollingIfNecessary(pointerX, pointerY) {
        if (this.autoScrollDisabled) {
          return;
        }
        let scrollNode;
        let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
        let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
        this._parentPositions.positions.forEach((position, element) => {
          if (element === this._document || !position.clientRect || scrollNode) {
            return;
          }
          if (isPointerNearDomRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
            [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections(element, position.clientRect, this._direction, pointerX, pointerY);
            if (verticalScrollDirection || horizontalScrollDirection) {
              scrollNode = element;
            }
          }
        });
        if (!verticalScrollDirection && !horizontalScrollDirection) {
          const { width, height } = this._viewportRuler.getViewportSize();
          const domRect = {
            width,
            height,
            top: 0,
            right: width,
            bottom: height,
            left: 0
          };
          verticalScrollDirection = getVerticalScrollDirection(domRect, pointerY);
          horizontalScrollDirection = getHorizontalScrollDirection(domRect, pointerX);
          scrollNode = window;
        }
        if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
          this._verticalScrollDirection = verticalScrollDirection;
          this._horizontalScrollDirection = horizontalScrollDirection;
          this._scrollNode = scrollNode;
          if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
            this._ngZone.runOutsideAngular(this._startScrollInterval);
          } else {
            this._stopScrolling();
          }
        }
      }
      /** Stops any currently-running auto-scroll sequences. */
      _stopScrolling() {
        this._stopScrollTimers.next();
      }
      /** Starts the dragging sequence within the list. */
      _draggingStarted() {
        const styles = this._container.style;
        this.beforeStarted.next();
        this._isDragging = true;
        if ((typeof ngDevMode === "undefined" || ngDevMode) && // Prevent the check from running on apps not using an alternate container. Ideally we
        // would always run it, but introducing it at this stage would be a breaking change.
        this._container !== coerceElement(this.element)) {
          for (const drag of this._draggables) {
            if (!drag.isDragging() && drag.getVisibleElement().parentNode !== this._container) {
              throw new Error("Invalid DOM structure for drop list. All items must be placed directly inside of the element container.");
            }
          }
        }
        this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || "";
        styles.scrollSnapType = styles.msScrollSnapType = "none";
        this._sortStrategy.start(this._draggables);
        this._cacheParentPositions();
        this._viewportScrollSubscription.unsubscribe();
        this._listenToScrollEvents();
      }
      /** Caches the positions of the configured scrollable parents. */
      _cacheParentPositions() {
        this._parentPositions.cache(this._scrollableElements);
        this._domRect = this._parentPositions.positions.get(this._container).clientRect;
      }
      /** Resets the container to its initial state. */
      _reset() {
        this._isDragging = false;
        const styles = this._container.style;
        styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap;
        this._siblings.forEach((sibling) => sibling._stopReceiving(this));
        this._sortStrategy.reset();
        this._stopScrolling();
        this._viewportScrollSubscription.unsubscribe();
        this._parentPositions.clear();
      }
      /** Starts the interval that'll auto-scroll the element. */
      _startScrollInterval = () => {
        this._stopScrolling();
        interval(0, animationFrameScheduler).pipe(takeUntil(this._stopScrollTimers)).subscribe(() => {
          const node = this._scrollNode;
          const scrollStep = this.autoScrollStep;
          if (this._verticalScrollDirection === AutoScrollVerticalDirection.UP) {
            node.scrollBy(0, -scrollStep);
          } else if (this._verticalScrollDirection === AutoScrollVerticalDirection.DOWN) {
            node.scrollBy(0, scrollStep);
          }
          if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.LEFT) {
            node.scrollBy(-scrollStep, 0);
          } else if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.RIGHT) {
            node.scrollBy(scrollStep, 0);
          }
        });
      };
      /**
       * Checks whether the user's pointer is positioned over the container.
       * @param x Pointer position along the X axis.
       * @param y Pointer position along the Y axis.
       */
      _isOverContainer(x, y) {
        return this._domRect != null && isInsideClientRect(this._domRect, x, y);
      }
      /**
       * Figures out whether an item should be moved into a sibling
       * drop container, based on its current position.
       * @param item Drag item that is being moved.
       * @param x Position of the item along the X axis.
       * @param y Position of the item along the Y axis.
       */
      _getSiblingContainerFromPosition(item, x, y) {
        return this._siblings.find((sibling) => sibling._canReceive(item, x, y));
      }
      /**
       * Checks whether the drop list can receive the passed-in item.
       * @param item Item that is being dragged into the list.
       * @param x Position of the item along the X axis.
       * @param y Position of the item along the Y axis.
       */
      _canReceive(item, x, y) {
        if (!this._domRect || !isInsideClientRect(this._domRect, x, y) || !this.enterPredicate(item, this)) {
          return false;
        }
        const elementFromPoint = this._getShadowRoot().elementFromPoint(x, y);
        if (!elementFromPoint) {
          return false;
        }
        return elementFromPoint === this._container || this._container.contains(elementFromPoint);
      }
      /**
       * Called by one of the connected drop lists when a dragging sequence has started.
       * @param sibling Sibling in which dragging has started.
       */
      _startReceiving(sibling, items) {
        const activeSiblings = this._activeSiblings;
        if (!activeSiblings.has(sibling) && items.every((item) => {
          return this.enterPredicate(item, this) || this._draggables.indexOf(item) > -1;
        })) {
          activeSiblings.add(sibling);
          this._cacheParentPositions();
          this._listenToScrollEvents();
          this.receivingStarted.next({
            initiator: sibling,
            receiver: this,
            items
          });
        }
      }
      /**
       * Called by a connected drop list when dragging has stopped.
       * @param sibling Sibling whose dragging has stopped.
       */
      _stopReceiving(sibling) {
        this._activeSiblings.delete(sibling);
        this._viewportScrollSubscription.unsubscribe();
        this.receivingStopped.next({ initiator: sibling, receiver: this });
      }
      /**
       * Starts listening to scroll events on the viewport.
       * Used for updating the internal state of the list.
       */
      _listenToScrollEvents() {
        this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((event) => {
          if (this.isDragging()) {
            const scrollDifference = this._parentPositions.handleScroll(event);
            if (scrollDifference) {
              this._sortStrategy.updateOnScroll(scrollDifference.top, scrollDifference.left);
            }
          } else if (this.isReceiving()) {
            this._cacheParentPositions();
          }
        });
      }
      /**
       * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
       * than saving it in property directly on init, because we want to resolve it as late as possible
       * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
       * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
       */
      _getShadowRoot() {
        if (!this._cachedShadowRoot) {
          const shadowRoot = _getShadowRoot(this._container);
          this._cachedShadowRoot = shadowRoot || this._document;
        }
        return this._cachedShadowRoot;
      }
      /** Notifies any siblings that may potentially receive the item. */
      _notifyReceivingSiblings() {
        const draggedItems = this._sortStrategy.getActiveItemsSnapshot().filter((item) => item.isDragging());
        this._siblings.forEach((sibling) => sibling._startReceiving(this, draggedItems));
      }
    };
    capturingEventOptions = {
      capture: true
    };
    activeCapturingEventOptions = {
      passive: false,
      capture: true
    };
    _ResetsLoader = class __ResetsLoader {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __ResetsLoader, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: __ResetsLoader, isStandalone: true, selector: "ng-component", host: { attributes: { "cdk-drag-resets-container": "" } }, ngImport: core_exports, template: "", isInline: true, styles: ["@layer cdk-resets{.cdk-drag-preview{background:none;border:none;padding:0;color:inherit;inset:auto}}.cdk-drag-placeholder *,.cdk-drag-preview *{pointer-events:none !important}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ResetsLoader, decorators: [{
      type: Component,
      args: [{ encapsulation: ViewEncapsulation.None, template: "", changeDetection: ChangeDetectionStrategy.OnPush, host: { "cdk-drag-resets-container": "" }, styles: ["@layer cdk-resets{.cdk-drag-preview{background:none;border:none;padding:0;color:inherit;inset:auto}}.cdk-drag-placeholder *,.cdk-drag-preview *{pointer-events:none !important}\n"] }]
    }] });
    DragDropRegistry = class _DragDropRegistry {
      _ngZone = inject(NgZone);
      _document = inject(DOCUMENT);
      _styleLoader = inject(_CdkPrivateStyleLoader);
      _renderer = inject(RendererFactory2).createRenderer(null, null);
      _cleanupDocumentTouchmove;
      _scroll = new Subject();
      /** Registered drop container instances. */
      _dropInstances = /* @__PURE__ */ new Set();
      /** Registered drag item instances. */
      _dragInstances = /* @__PURE__ */ new Set();
      /** Drag item instances that are currently being dragged. */
      _activeDragInstances = signal([]);
      /** Keeps track of the event listeners that we've bound to the `document`. */
      _globalListeners;
      /**
       * Predicate function to check if an item is being dragged.  Moved out into a property,
       * because it'll be called a lot and we don't want to create a new function every time.
       */
      _draggingPredicate = (item) => item.isDragging();
      /**
       * Map tracking DOM nodes and their corresponding drag directives. Note that this is different
       * from looking through the `_dragInstances` and getting their root node, because the root node
       * isn't necessarily the node that the directive is set on.
       */
      _domNodesToDirectives = null;
      /**
       * Emits the `touchmove` or `mousemove` events that are dispatched
       * while the user is dragging a drag item instance.
       */
      pointerMove = new Subject();
      /**
       * Emits the `touchend` or `mouseup` events that are dispatched
       * while the user is dragging a drag item instance.
       */
      pointerUp = new Subject();
      constructor() {
      }
      /** Adds a drop container to the registry. */
      registerDropContainer(drop) {
        if (!this._dropInstances.has(drop)) {
          this._dropInstances.add(drop);
        }
      }
      /** Adds a drag item instance to the registry. */
      registerDragItem(drag) {
        this._dragInstances.add(drag);
        if (this._dragInstances.size === 1) {
          this._ngZone.runOutsideAngular(() => {
            this._cleanupDocumentTouchmove?.();
            this._cleanupDocumentTouchmove = this._renderer.listen(this._document, "touchmove", this._persistentTouchmoveListener, activeCapturingEventOptions);
          });
        }
      }
      /** Removes a drop container from the registry. */
      removeDropContainer(drop) {
        this._dropInstances.delete(drop);
      }
      /** Removes a drag item instance from the registry. */
      removeDragItem(drag) {
        this._dragInstances.delete(drag);
        this.stopDragging(drag);
        if (this._dragInstances.size === 0) {
          this._cleanupDocumentTouchmove?.();
        }
      }
      /**
       * Starts the dragging sequence for a drag instance.
       * @param drag Drag instance which is being dragged.
       * @param event Event that initiated the dragging.
       */
      startDragging(drag, event) {
        if (this._activeDragInstances().indexOf(drag) > -1) {
          return;
        }
        this._styleLoader.load(_ResetsLoader);
        this._activeDragInstances.update((instances) => [...instances, drag]);
        if (this._activeDragInstances().length === 1) {
          const isTouchEvent2 = event.type.startsWith("touch");
          const endEventHandler = (e) => this.pointerUp.next(e);
          const toBind = [
            // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
            // the document. See https://github.com/angular/components/issues/17144.
            ["scroll", (e) => this._scroll.next(e), capturingEventOptions],
            // Preventing the default action on `mousemove` isn't enough to disable text selection
            // on Safari so we need to prevent the selection event as well. Alternatively this can
            // be done by setting `user-select: none` on the `body`, however it has causes a style
            // recalculation which can be expensive on pages with a lot of elements.
            ["selectstart", this._preventDefaultWhileDragging, activeCapturingEventOptions]
          ];
          if (isTouchEvent2) {
            toBind.push(["touchend", endEventHandler, capturingEventOptions], ["touchcancel", endEventHandler, capturingEventOptions]);
          } else {
            toBind.push(["mouseup", endEventHandler, capturingEventOptions]);
          }
          if (!isTouchEvent2) {
            toBind.push([
              "mousemove",
              (e) => this.pointerMove.next(e),
              activeCapturingEventOptions
            ]);
          }
          this._ngZone.runOutsideAngular(() => {
            this._globalListeners = toBind.map(([name, handler, options]) => this._renderer.listen(this._document, name, handler, options));
          });
        }
      }
      /** Stops dragging a drag item instance. */
      stopDragging(drag) {
        this._activeDragInstances.update((instances) => {
          const index = instances.indexOf(drag);
          if (index > -1) {
            instances.splice(index, 1);
            return [...instances];
          }
          return instances;
        });
        if (this._activeDragInstances().length === 0) {
          this._clearGlobalListeners();
        }
      }
      /** Gets whether a drag item instance is currently being dragged. */
      isDragging(drag) {
        return this._activeDragInstances().indexOf(drag) > -1;
      }
      /**
       * Gets a stream that will emit when any element on the page is scrolled while an item is being
       * dragged.
       * @param shadowRoot Optional shadow root that the current dragging sequence started from.
       *   Top-level listeners won't pick up events coming from the shadow DOM so this parameter can
       *   be used to include an additional top-level listener at the shadow root level.
       */
      scrolled(shadowRoot) {
        const streams = [this._scroll];
        if (shadowRoot && shadowRoot !== this._document) {
          streams.push(new Observable((observer) => {
            return this._ngZone.runOutsideAngular(() => {
              const cleanup = this._renderer.listen(shadowRoot, "scroll", (event) => {
                if (this._activeDragInstances().length) {
                  observer.next(event);
                }
              }, capturingEventOptions);
              return () => {
                cleanup();
              };
            });
          }));
        }
        return merge(...streams);
      }
      /**
       * Tracks the DOM node which has a draggable directive.
       * @param node Node to track.
       * @param dragRef Drag directive set on the node.
       */
      registerDirectiveNode(node, dragRef) {
        this._domNodesToDirectives ??= /* @__PURE__ */ new WeakMap();
        this._domNodesToDirectives.set(node, dragRef);
      }
      /**
       * Stops tracking a draggable directive node.
       * @param node Node to stop tracking.
       */
      removeDirectiveNode(node) {
        this._domNodesToDirectives?.delete(node);
      }
      /**
       * Gets the drag directive corresponding to a specific DOM node, if any.
       * @param node Node for which to do the lookup.
       */
      getDragDirectiveForNode(node) {
        return this._domNodesToDirectives?.get(node) || null;
      }
      ngOnDestroy() {
        this._dragInstances.forEach((instance) => this.removeDragItem(instance));
        this._dropInstances.forEach((instance) => this.removeDropContainer(instance));
        this._domNodesToDirectives = null;
        this._clearGlobalListeners();
        this.pointerMove.complete();
        this.pointerUp.complete();
      }
      /**
       * Event listener that will prevent the default browser action while the user is dragging.
       * @param event Event whose default action should be prevented.
       */
      _preventDefaultWhileDragging = (event) => {
        if (this._activeDragInstances().length > 0) {
          event.preventDefault();
        }
      };
      /** Event listener for `touchmove` that is bound even if no dragging is happening. */
      _persistentTouchmoveListener = (event) => {
        if (this._activeDragInstances().length > 0) {
          if (this._activeDragInstances().some(this._draggingPredicate)) {
            event.preventDefault();
          }
          this.pointerMove.next(event);
        }
      };
      /** Clears out the global event listeners from the `document`. */
      _clearGlobalListeners() {
        this._globalListeners?.forEach((cleanup) => cleanup());
        this._globalListeners = void 0;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _DragDropRegistry, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _DragDropRegistry, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: DragDropRegistry, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    DEFAULT_CONFIG = {
      dragStartThreshold: 5,
      pointerDirectionChangeThreshold: 5
    };
    DragDrop = class _DragDrop {
      _document = inject(DOCUMENT);
      _ngZone = inject(NgZone);
      _viewportRuler = inject(ViewportRuler);
      _dragDropRegistry = inject(DragDropRegistry);
      _renderer = inject(RendererFactory2).createRenderer(null, null);
      constructor() {
      }
      /**
       * Turns an element into a draggable item.
       * @param element Element to which to attach the dragging functionality.
       * @param config Object used to configure the dragging behavior.
       */
      createDrag(element, config = DEFAULT_CONFIG) {
        return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry, this._renderer);
      }
      /**
       * Turns an element into a drop list.
       * @param element Element to which to attach the drop list functionality.
       */
      createDropList(element) {
        return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _DragDrop, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _DragDrop, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: DragDrop, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CDK_DRAG_PARENT = new InjectionToken("CDK_DRAG_PARENT");
    CDK_DRAG_HANDLE = new InjectionToken("CdkDragHandle");
    CdkDragHandle = class _CdkDragHandle {
      element = inject(ElementRef);
      _parentDrag = inject(CDK_DRAG_PARENT, { optional: true, skipSelf: true });
      _dragDropRegistry = inject(DragDropRegistry);
      /** Emits when the state of the handle has changed. */
      _stateChanges = new Subject();
      /** Whether starting to drag through this handle is disabled. */
      get disabled() {
        return this._disabled;
      }
      set disabled(value) {
        this._disabled = value;
        this._stateChanges.next(this);
      }
      _disabled = false;
      constructor() {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          assertElementNode(this.element.nativeElement, "cdkDragHandle");
        }
        this._parentDrag?._addHandle(this);
      }
      ngAfterViewInit() {
        if (!this._parentDrag) {
          let parent = this.element.nativeElement.parentElement;
          while (parent) {
            const ref = this._dragDropRegistry.getDragDirectiveForNode(parent);
            if (ref) {
              this._parentDrag = ref;
              ref._addHandle(this);
              break;
            }
            parent = parent.parentElement;
          }
        }
      }
      ngOnDestroy() {
        this._parentDrag?._removeHandle(this);
        this._stateChanges.complete();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkDragHandle, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _CdkDragHandle, isStandalone: true, selector: "[cdkDragHandle]", inputs: { disabled: ["cdkDragHandleDisabled", "disabled", booleanAttribute] }, host: { classAttribute: "cdk-drag-handle" }, providers: [{ provide: CDK_DRAG_HANDLE, useExisting: _CdkDragHandle }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkDragHandle, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkDragHandle]",
        host: {
          "class": "cdk-drag-handle"
        },
        providers: [{ provide: CDK_DRAG_HANDLE, useExisting: CdkDragHandle }]
      }]
    }], ctorParameters: () => [], propDecorators: { disabled: [{
      type: Input,
      args: [{ alias: "cdkDragHandleDisabled", transform: booleanAttribute }]
    }] } });
    CDK_DRAG_CONFIG = new InjectionToken("CDK_DRAG_CONFIG");
    CDK_DROP_LIST = new InjectionToken("CdkDropList");
    CdkDrag = class _CdkDrag {
      element = inject(ElementRef);
      dropContainer = inject(CDK_DROP_LIST, { optional: true, skipSelf: true });
      _ngZone = inject(NgZone);
      _viewContainerRef = inject(ViewContainerRef);
      _dir = inject(Directionality, { optional: true });
      _changeDetectorRef = inject(ChangeDetectorRef);
      _selfHandle = inject(CDK_DRAG_HANDLE, { optional: true, self: true });
      _parentDrag = inject(CDK_DRAG_PARENT, { optional: true, skipSelf: true });
      _dragDropRegistry = inject(DragDropRegistry);
      _destroyed = new Subject();
      _handles = new BehaviorSubject([]);
      _previewTemplate;
      _placeholderTemplate;
      /** Reference to the underlying drag instance. */
      _dragRef;
      /** Arbitrary data to attach to this drag instance. */
      data;
      /** Locks the position of the dragged element along the specified axis. */
      lockAxis;
      /**
       * Selector that will be used to determine the root draggable element, starting from
       * the `cdkDrag` element and going up the DOM. Passing an alternate root element is useful
       * when trying to enable dragging on an element that you might not have access to.
       */
      rootElementSelector;
      /**
       * Node or selector that will be used to determine the element to which the draggable's
       * position will be constrained. If a string is passed in, it'll be used as a selector that
       * will be matched starting from the element's parent and going up the DOM until a match
       * has been found.
       */
      boundaryElement;
      /**
       * Amount of milliseconds to wait after the user has put their
       * pointer down before starting to drag the element.
       */
      dragStartDelay;
      /**
       * Sets the position of a `CdkDrag` that is outside of a drop container.
       * Can be used to restore the element's position for a returning user.
       */
      freeDragPosition;
      /** Whether starting to drag this element is disabled. */
      get disabled() {
        return this._disabled || !!(this.dropContainer && this.dropContainer.disabled);
      }
      set disabled(value) {
        this._disabled = value;
        this._dragRef.disabled = this._disabled;
      }
      _disabled;
      /**
       * Function that can be used to customize the logic of how the position of the drag item
       * is limited while it's being dragged. Gets called with a point containing the current position
       * of the user's pointer on the page, a reference to the item being dragged and its dimensions.
       * Should return a point describing where the item should be rendered.
       */
      constrainPosition;
      /** Class to be added to the preview element. */
      previewClass;
      /**
       * Configures the place into which the preview of the item will be inserted. Can be configured
       * globally through `CDK_DROP_LIST`. Possible values:
       * - `global` - Preview will be inserted at the bottom of the `<body>`. The advantage is that
       * you don't have to worry about `overflow: hidden` or `z-index`, but the item won't retain
       * its inherited styles.
       * - `parent` - Preview will be inserted into the parent of the drag item. The advantage is that
       * inherited styles will be preserved, but it may be clipped by `overflow: hidden` or not be
       * visible due to `z-index`. Furthermore, the preview is going to have an effect over selectors
       * like `:nth-child` and some flexbox configurations.
       * - `ElementRef<HTMLElement> | HTMLElement` - Preview will be inserted into a specific element.
       * Same advantages and disadvantages as `parent`.
       */
      previewContainer;
      /**
       * If the parent of the dragged element has a `scale` transform, it can throw off the
       * positioning when the user starts dragging. Use this input to notify the CDK of the scale.
       */
      scale = 1;
      /** Emits when the user starts dragging the item. */
      started = new EventEmitter();
      /** Emits when the user has released a drag item, before any animations have started. */
      released = new EventEmitter();
      /** Emits when the user stops dragging an item in the container. */
      ended = new EventEmitter();
      /** Emits when the user has moved the item into a new container. */
      entered = new EventEmitter();
      /** Emits when the user removes the item its container by dragging it into another container. */
      exited = new EventEmitter();
      /** Emits when the user drops the item inside a container. */
      dropped = new EventEmitter();
      /**
       * Emits as the user is dragging the item. Use with caution,
       * because this event will fire for every pixel that the user has dragged.
       */
      moved = new Observable((observer) => {
        const subscription = this._dragRef.moved.pipe(map((movedEvent) => ({
          source: this,
          pointerPosition: movedEvent.pointerPosition,
          event: movedEvent.event,
          delta: movedEvent.delta,
          distance: movedEvent.distance
        }))).subscribe(observer);
        return () => {
          subscription.unsubscribe();
        };
      });
      _injector = inject(Injector);
      constructor() {
        const dropContainer = this.dropContainer;
        const config = inject(CDK_DRAG_CONFIG, { optional: true });
        const dragDrop = inject(DragDrop);
        this._dragRef = dragDrop.createDrag(this.element, {
          dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
          pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
          zIndex: config?.zIndex
        });
        this._dragRef.data = this;
        this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement, this);
        if (config) {
          this._assignDefaults(config);
        }
        if (dropContainer) {
          this._dragRef._withDropContainer(dropContainer._dropListRef);
          dropContainer.addItem(this);
          dropContainer._dropListRef.beforeStarted.pipe(takeUntil(this._destroyed)).subscribe(() => {
            this._dragRef.scale = this.scale;
          });
        }
        this._syncInputs(this._dragRef);
        this._handleEvents(this._dragRef);
      }
      /**
       * Returns the element that is being used as a placeholder
       * while the current element is being dragged.
       */
      getPlaceholderElement() {
        return this._dragRef.getPlaceholderElement();
      }
      /** Returns the root draggable element. */
      getRootElement() {
        return this._dragRef.getRootElement();
      }
      /** Resets a standalone drag item to its initial position. */
      reset() {
        this._dragRef.reset();
      }
      /** Resets drag item to end of boundary element. */
      resetToBoundary() {
        this._dragRef.resetToBoundary();
      }
      /**
       * Gets the pixel coordinates of the draggable outside of a drop container.
       */
      getFreeDragPosition() {
        return this._dragRef.getFreeDragPosition();
      }
      /**
       * Sets the current position in pixels the draggable outside of a drop container.
       * @param value New position to be set.
       */
      setFreeDragPosition(value) {
        this._dragRef.setFreeDragPosition(value);
      }
      ngAfterViewInit() {
        afterNextRender(() => {
          this._updateRootElement();
          this._setupHandlesListener();
          this._dragRef.scale = this.scale;
          if (this.freeDragPosition) {
            this._dragRef.setFreeDragPosition(this.freeDragPosition);
          }
        }, { injector: this._injector });
      }
      ngOnChanges(changes) {
        const rootSelectorChange = changes["rootElementSelector"];
        const positionChange = changes["freeDragPosition"];
        if (rootSelectorChange && !rootSelectorChange.firstChange) {
          this._updateRootElement();
        }
        this._dragRef.scale = this.scale;
        if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
          this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
      }
      ngOnDestroy() {
        if (this.dropContainer) {
          this.dropContainer.removeItem(this);
        }
        this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement);
        this._ngZone.runOutsideAngular(() => {
          this._handles.complete();
          this._destroyed.next();
          this._destroyed.complete();
          this._dragRef.dispose();
        });
      }
      _addHandle(handle) {
        const handles = this._handles.getValue();
        handles.push(handle);
        this._handles.next(handles);
      }
      _removeHandle(handle) {
        const handles = this._handles.getValue();
        const index = handles.indexOf(handle);
        if (index > -1) {
          handles.splice(index, 1);
          this._handles.next(handles);
        }
      }
      _setPreviewTemplate(preview) {
        this._previewTemplate = preview;
      }
      _resetPreviewTemplate(preview) {
        if (preview === this._previewTemplate) {
          this._previewTemplate = null;
        }
      }
      _setPlaceholderTemplate(placeholder) {
        this._placeholderTemplate = placeholder;
      }
      _resetPlaceholderTemplate(placeholder) {
        if (placeholder === this._placeholderTemplate) {
          this._placeholderTemplate = null;
        }
      }
      /** Syncs the root element with the `DragRef`. */
      _updateRootElement() {
        const element = this.element.nativeElement;
        let rootElement = element;
        if (this.rootElementSelector) {
          rootElement = element.closest !== void 0 ? element.closest(this.rootElementSelector) : (
            // Comment tag doesn't have closest method, so use parent's one.
            element.parentElement?.closest(this.rootElementSelector)
          );
        }
        if (rootElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
          assertElementNode(rootElement, "cdkDrag");
        }
        this._dragRef.withRootElement(rootElement || element);
      }
      /** Gets the boundary element, based on the `boundaryElement` value. */
      _getBoundaryElement() {
        const boundary = this.boundaryElement;
        if (!boundary) {
          return null;
        }
        if (typeof boundary === "string") {
          return this.element.nativeElement.closest(boundary);
        }
        return coerceElement(boundary);
      }
      /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
      _syncInputs(ref) {
        ref.beforeStarted.subscribe(() => {
          if (!ref.isDragging()) {
            const dir = this._dir;
            const dragStartDelay = this.dragStartDelay;
            const placeholder = this._placeholderTemplate ? {
              template: this._placeholderTemplate.templateRef,
              context: this._placeholderTemplate.data,
              viewContainer: this._viewContainerRef
            } : null;
            const preview = this._previewTemplate ? {
              template: this._previewTemplate.templateRef,
              context: this._previewTemplate.data,
              matchSize: this._previewTemplate.matchSize,
              viewContainer: this._viewContainerRef
            } : null;
            ref.disabled = this.disabled;
            ref.lockAxis = this.lockAxis;
            ref.scale = this.scale;
            ref.dragStartDelay = typeof dragStartDelay === "object" && dragStartDelay ? dragStartDelay : coerceNumberProperty(dragStartDelay);
            ref.constrainPosition = this.constrainPosition;
            ref.previewClass = this.previewClass;
            ref.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview).withPreviewContainer(this.previewContainer || "global");
            if (dir) {
              ref.withDirection(dir.value);
            }
          }
        });
        ref.beforeStarted.pipe(take(1)).subscribe(() => {
          if (this._parentDrag) {
            ref.withParent(this._parentDrag._dragRef);
            return;
          }
          let parent = this.element.nativeElement.parentElement;
          while (parent) {
            const parentDrag = this._dragDropRegistry.getDragDirectiveForNode(parent);
            if (parentDrag) {
              ref.withParent(parentDrag._dragRef);
              break;
            }
            parent = parent.parentElement;
          }
        });
      }
      /** Handles the events from the underlying `DragRef`. */
      _handleEvents(ref) {
        ref.started.subscribe((startEvent) => {
          this.started.emit({ source: this, event: startEvent.event });
          this._changeDetectorRef.markForCheck();
        });
        ref.released.subscribe((releaseEvent) => {
          this.released.emit({ source: this, event: releaseEvent.event });
        });
        ref.ended.subscribe((endEvent) => {
          this.ended.emit({
            source: this,
            distance: endEvent.distance,
            dropPoint: endEvent.dropPoint,
            event: endEvent.event
          });
          this._changeDetectorRef.markForCheck();
        });
        ref.entered.subscribe((enterEvent) => {
          this.entered.emit({
            container: enterEvent.container.data,
            item: this,
            currentIndex: enterEvent.currentIndex
          });
        });
        ref.exited.subscribe((exitEvent) => {
          this.exited.emit({
            container: exitEvent.container.data,
            item: this
          });
        });
        ref.dropped.subscribe((dropEvent) => {
          this.dropped.emit({
            previousIndex: dropEvent.previousIndex,
            currentIndex: dropEvent.currentIndex,
            previousContainer: dropEvent.previousContainer.data,
            container: dropEvent.container.data,
            isPointerOverContainer: dropEvent.isPointerOverContainer,
            item: this,
            distance: dropEvent.distance,
            dropPoint: dropEvent.dropPoint,
            event: dropEvent.event
          });
        });
      }
      /** Assigns the default input values based on a provided config object. */
      _assignDefaults(config) {
        const { lockAxis, dragStartDelay, constrainPosition, previewClass, boundaryElement, draggingDisabled, rootElementSelector, previewContainer } = config;
        this.disabled = draggingDisabled == null ? false : draggingDisabled;
        this.dragStartDelay = dragStartDelay || 0;
        if (lockAxis) {
          this.lockAxis = lockAxis;
        }
        if (constrainPosition) {
          this.constrainPosition = constrainPosition;
        }
        if (previewClass) {
          this.previewClass = previewClass;
        }
        if (boundaryElement) {
          this.boundaryElement = boundaryElement;
        }
        if (rootElementSelector) {
          this.rootElementSelector = rootElementSelector;
        }
        if (previewContainer) {
          this.previewContainer = previewContainer;
        }
      }
      /** Sets up the listener that syncs the handles with the drag ref. */
      _setupHandlesListener() {
        this._handles.pipe(
          // Sync the new handles with the DragRef.
          tap((handles) => {
            const handleElements = handles.map((handle) => handle.element);
            if (this._selfHandle && this.rootElementSelector) {
              handleElements.push(this.element);
            }
            this._dragRef.withHandles(handleElements);
          }),
          // Listen if the state of any of the handles changes.
          switchMap((handles) => {
            return merge(...handles.map((item) => item._stateChanges.pipe(startWith(item))));
          }),
          takeUntil(this._destroyed)
        ).subscribe((handleInstance) => {
          const dragRef = this._dragRef;
          const handle = handleInstance.element.nativeElement;
          handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
        });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkDrag, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _CdkDrag, isStandalone: true, selector: "[cdkDrag]", inputs: { data: ["cdkDragData", "data"], lockAxis: ["cdkDragLockAxis", "lockAxis"], rootElementSelector: ["cdkDragRootElement", "rootElementSelector"], boundaryElement: ["cdkDragBoundary", "boundaryElement"], dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"], freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"], disabled: ["cdkDragDisabled", "disabled", booleanAttribute], constrainPosition: ["cdkDragConstrainPosition", "constrainPosition"], previewClass: ["cdkDragPreviewClass", "previewClass"], previewContainer: ["cdkDragPreviewContainer", "previewContainer"], scale: ["cdkDragScale", "scale", numberAttribute] }, outputs: { started: "cdkDragStarted", released: "cdkDragReleased", ended: "cdkDragEnded", entered: "cdkDragEntered", exited: "cdkDragExited", dropped: "cdkDragDropped", moved: "cdkDragMoved" }, host: { properties: { "class.cdk-drag-disabled": "disabled", "class.cdk-drag-dragging": "_dragRef.isDragging()" }, classAttribute: "cdk-drag" }, providers: [{ provide: CDK_DRAG_PARENT, useExisting: _CdkDrag }], exportAs: ["cdkDrag"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkDrag, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkDrag]",
        exportAs: "cdkDrag",
        host: {
          "class": "cdk-drag",
          "[class.cdk-drag-disabled]": "disabled",
          "[class.cdk-drag-dragging]": "_dragRef.isDragging()"
        },
        providers: [{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]
      }]
    }], ctorParameters: () => [], propDecorators: { data: [{
      type: Input,
      args: ["cdkDragData"]
    }], lockAxis: [{
      type: Input,
      args: ["cdkDragLockAxis"]
    }], rootElementSelector: [{
      type: Input,
      args: ["cdkDragRootElement"]
    }], boundaryElement: [{
      type: Input,
      args: ["cdkDragBoundary"]
    }], dragStartDelay: [{
      type: Input,
      args: ["cdkDragStartDelay"]
    }], freeDragPosition: [{
      type: Input,
      args: ["cdkDragFreeDragPosition"]
    }], disabled: [{
      type: Input,
      args: [{ alias: "cdkDragDisabled", transform: booleanAttribute }]
    }], constrainPosition: [{
      type: Input,
      args: ["cdkDragConstrainPosition"]
    }], previewClass: [{
      type: Input,
      args: ["cdkDragPreviewClass"]
    }], previewContainer: [{
      type: Input,
      args: ["cdkDragPreviewContainer"]
    }], scale: [{
      type: Input,
      args: [{ alias: "cdkDragScale", transform: numberAttribute }]
    }], started: [{
      type: Output,
      args: ["cdkDragStarted"]
    }], released: [{
      type: Output,
      args: ["cdkDragReleased"]
    }], ended: [{
      type: Output,
      args: ["cdkDragEnded"]
    }], entered: [{
      type: Output,
      args: ["cdkDragEntered"]
    }], exited: [{
      type: Output,
      args: ["cdkDragExited"]
    }], dropped: [{
      type: Output,
      args: ["cdkDragDropped"]
    }], moved: [{
      type: Output,
      args: ["cdkDragMoved"]
    }] } });
    CDK_DROP_LIST_GROUP = new InjectionToken("CdkDropListGroup");
    CdkDropListGroup = class _CdkDropListGroup {
      /** Drop lists registered inside the group. */
      _items = /* @__PURE__ */ new Set();
      /** Whether starting a dragging sequence from inside this group is disabled. */
      disabled = false;
      ngOnDestroy() {
        this._items.clear();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkDropListGroup, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _CdkDropListGroup, isStandalone: true, selector: "[cdkDropListGroup]", inputs: { disabled: ["cdkDropListGroupDisabled", "disabled", booleanAttribute] }, providers: [{ provide: CDK_DROP_LIST_GROUP, useExisting: _CdkDropListGroup }], exportAs: ["cdkDropListGroup"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkDropListGroup, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkDropListGroup]",
        exportAs: "cdkDropListGroup",
        providers: [{ provide: CDK_DROP_LIST_GROUP, useExisting: CdkDropListGroup }]
      }]
    }], propDecorators: { disabled: [{
      type: Input,
      args: [{ alias: "cdkDropListGroupDisabled", transform: booleanAttribute }]
    }] } });
    CdkDropList = class _CdkDropList {
      element = inject(ElementRef);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _scrollDispatcher = inject(ScrollDispatcher);
      _dir = inject(Directionality, { optional: true });
      _group = inject(CDK_DROP_LIST_GROUP, {
        optional: true,
        skipSelf: true
      });
      /** Refs that have been synced with the drop ref most recently. */
      _latestSortedRefs;
      /** Emits when the list has been destroyed. */
      _destroyed = new Subject();
      /** Whether the element's scrollable parents have been resolved. */
      _scrollableParentsResolved;
      /** Keeps track of the drop lists that are currently on the page. */
      static _dropLists = [];
      /** Reference to the underlying drop list instance. */
      _dropListRef;
      /**
       * Other draggable containers that this container is connected to and into which the
       * container's items can be transferred. Can either be references to other drop containers,
       * or their unique IDs.
       */
      connectedTo = [];
      /** Arbitrary data to attach to this container. */
      data;
      /** Direction in which the list is oriented. */
      orientation;
      /**
       * Unique ID for the drop zone. Can be used as a reference
       * in the `connectedTo` of another `CdkDropList`.
       */
      id = inject(_IdGenerator).getId("cdk-drop-list-");
      /** Locks the position of the draggable elements inside the container along the specified axis. */
      lockAxis;
      /** Whether starting a dragging sequence from this container is disabled. */
      get disabled() {
        return this._disabled || !!this._group && this._group.disabled;
      }
      set disabled(value) {
        this._dropListRef.disabled = this._disabled = value;
      }
      _disabled;
      /** Whether sorting within this drop list is disabled. */
      sortingDisabled;
      /**
       * Function that is used to determine whether an item
       * is allowed to be moved into a drop container.
       */
      enterPredicate = () => true;
      /** Functions that is used to determine whether an item can be sorted into a particular index. */
      sortPredicate = () => true;
      /** Whether to auto-scroll the view when the user moves their pointer close to the edges. */
      autoScrollDisabled;
      /** Number of pixels to scroll for each frame when auto-scrolling an element. */
      autoScrollStep;
      /**
       * Selector that will be used to resolve an alternate element container for the drop list.
       * Passing an alternate container is useful for the cases where one might not have control
       * over the parent node of the draggable items within the list (e.g. due to content projection).
       * This allows for usages like:
       *
       * ```
       * <div cdkDropList cdkDropListElementContainer=".inner">
       *   <div class="inner">
       *     <div cdkDrag></div>
       *   </div>
       * </div>
       * ```
       */
      elementContainerSelector;
      /** Emits when the user drops an item inside the container. */
      dropped = new EventEmitter();
      /**
       * Emits when the user has moved a new drag item into this container.
       */
      entered = new EventEmitter();
      /**
       * Emits when the user removes an item from the container
       * by dragging it into another container.
       */
      exited = new EventEmitter();
      /** Emits as the user is swapping items while actively dragging. */
      sorted = new EventEmitter();
      /**
       * Keeps track of the items that are registered with this container. Historically we used to
       * do this with a `ContentChildren` query, however queries don't handle transplanted views very
       * well which means that we can't handle cases like dragging the headers of a `mat-table`
       * correctly. What we do instead is to have the items register themselves with the container
       * and then we sort them based on their position in the DOM.
       */
      _unsortedItems = /* @__PURE__ */ new Set();
      constructor() {
        const dragDrop = inject(DragDrop);
        const config = inject(CDK_DRAG_CONFIG, { optional: true });
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          assertElementNode(this.element.nativeElement, "cdkDropList");
        }
        this._dropListRef = dragDrop.createDropList(this.element);
        this._dropListRef.data = this;
        if (config) {
          this._assignDefaults(config);
        }
        this._dropListRef.enterPredicate = (drag, drop) => {
          return this.enterPredicate(drag.data, drop.data);
        };
        this._dropListRef.sortPredicate = (index, drag, drop) => {
          return this.sortPredicate(index, drag.data, drop.data);
        };
        this._setupInputSyncSubscription(this._dropListRef);
        this._handleEvents(this._dropListRef);
        _CdkDropList._dropLists.push(this);
        if (this._group) {
          this._group._items.add(this);
        }
      }
      /** Registers an items with the drop list. */
      addItem(item) {
        this._unsortedItems.add(item);
        if (this._dropListRef.isDragging()) {
          this._syncItemsWithRef(this.getSortedItems().map((item2) => item2._dragRef));
        }
      }
      /** Removes an item from the drop list. */
      removeItem(item) {
        this._unsortedItems.delete(item);
        if (this._latestSortedRefs) {
          const index = this._latestSortedRefs.indexOf(item._dragRef);
          if (index > -1) {
            this._latestSortedRefs.splice(index, 1);
            this._syncItemsWithRef(this._latestSortedRefs);
          }
        }
      }
      /** Gets the registered items in the list, sorted by their position in the DOM. */
      getSortedItems() {
        return Array.from(this._unsortedItems).sort((a, b) => {
          const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
          return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
        });
      }
      ngOnDestroy() {
        const index = _CdkDropList._dropLists.indexOf(this);
        if (index > -1) {
          _CdkDropList._dropLists.splice(index, 1);
        }
        if (this._group) {
          this._group._items.delete(this);
        }
        this._latestSortedRefs = void 0;
        this._unsortedItems.clear();
        this._dropListRef.dispose();
        this._destroyed.next();
        this._destroyed.complete();
      }
      /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
      _setupInputSyncSubscription(ref) {
        if (this._dir) {
          this._dir.change.pipe(startWith(this._dir.value), takeUntil(this._destroyed)).subscribe((value) => ref.withDirection(value));
        }
        ref.beforeStarted.subscribe(() => {
          const siblings = coerceArray(this.connectedTo).map((drop) => {
            if (typeof drop === "string") {
              const correspondingDropList = _CdkDropList._dropLists.find((list) => list.id === drop);
              if (!correspondingDropList && (typeof ngDevMode === "undefined" || ngDevMode)) {
                console.warn(`CdkDropList could not find connected drop list with id "${drop}"`);
              }
              return correspondingDropList;
            }
            return drop;
          });
          if (this._group) {
            this._group._items.forEach((drop) => {
              if (siblings.indexOf(drop) === -1) {
                siblings.push(drop);
              }
            });
          }
          if (!this._scrollableParentsResolved) {
            const scrollableParents = this._scrollDispatcher.getAncestorScrollContainers(this.element).map((scrollable) => scrollable.getElementRef().nativeElement);
            this._dropListRef.withScrollableParents(scrollableParents);
            this._scrollableParentsResolved = true;
          }
          if (this.elementContainerSelector) {
            const container = this.element.nativeElement.querySelector(this.elementContainerSelector);
            if (!container && (typeof ngDevMode === "undefined" || ngDevMode)) {
              throw new Error(`CdkDropList could not find an element container matching the selector "${this.elementContainerSelector}"`);
            }
            ref.withElementContainer(container);
          }
          ref.disabled = this.disabled;
          ref.lockAxis = this.lockAxis;
          ref.sortingDisabled = this.sortingDisabled;
          ref.autoScrollDisabled = this.autoScrollDisabled;
          ref.autoScrollStep = coerceNumberProperty(this.autoScrollStep, 2);
          ref.connectedTo(siblings.filter((drop) => drop && drop !== this).map((list) => list._dropListRef)).withOrientation(this.orientation);
        });
      }
      /** Handles events from the underlying DropListRef. */
      _handleEvents(ref) {
        ref.beforeStarted.subscribe(() => {
          this._syncItemsWithRef(this.getSortedItems().map((item) => item._dragRef));
          this._changeDetectorRef.markForCheck();
        });
        ref.entered.subscribe((event) => {
          this.entered.emit({
            container: this,
            item: event.item.data,
            currentIndex: event.currentIndex
          });
        });
        ref.exited.subscribe((event) => {
          this.exited.emit({
            container: this,
            item: event.item.data
          });
          this._changeDetectorRef.markForCheck();
        });
        ref.sorted.subscribe((event) => {
          this.sorted.emit({
            previousIndex: event.previousIndex,
            currentIndex: event.currentIndex,
            container: this,
            item: event.item.data
          });
        });
        ref.dropped.subscribe((dropEvent) => {
          this.dropped.emit({
            previousIndex: dropEvent.previousIndex,
            currentIndex: dropEvent.currentIndex,
            previousContainer: dropEvent.previousContainer.data,
            container: dropEvent.container.data,
            item: dropEvent.item.data,
            isPointerOverContainer: dropEvent.isPointerOverContainer,
            distance: dropEvent.distance,
            dropPoint: dropEvent.dropPoint,
            event: dropEvent.event
          });
          this._changeDetectorRef.markForCheck();
        });
        merge(ref.receivingStarted, ref.receivingStopped).subscribe(() => this._changeDetectorRef.markForCheck());
      }
      /** Assigns the default input values based on a provided config object. */
      _assignDefaults(config) {
        const { lockAxis, draggingDisabled, sortingDisabled, listAutoScrollDisabled, listOrientation } = config;
        this.disabled = draggingDisabled == null ? false : draggingDisabled;
        this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
        this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
        this.orientation = listOrientation || "vertical";
        if (lockAxis) {
          this.lockAxis = lockAxis;
        }
      }
      /** Syncs up the registered drag items with underlying drop list ref. */
      _syncItemsWithRef(items) {
        this._latestSortedRefs = items;
        this._dropListRef.withItems(items);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkDropList, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _CdkDropList, isStandalone: true, selector: "[cdkDropList], cdk-drop-list", inputs: { connectedTo: ["cdkDropListConnectedTo", "connectedTo"], data: ["cdkDropListData", "data"], orientation: ["cdkDropListOrientation", "orientation"], id: "id", lockAxis: ["cdkDropListLockAxis", "lockAxis"], disabled: ["cdkDropListDisabled", "disabled", booleanAttribute], sortingDisabled: ["cdkDropListSortingDisabled", "sortingDisabled", booleanAttribute], enterPredicate: ["cdkDropListEnterPredicate", "enterPredicate"], sortPredicate: ["cdkDropListSortPredicate", "sortPredicate"], autoScrollDisabled: ["cdkDropListAutoScrollDisabled", "autoScrollDisabled", booleanAttribute], autoScrollStep: ["cdkDropListAutoScrollStep", "autoScrollStep"], elementContainerSelector: ["cdkDropListElementContainer", "elementContainerSelector"] }, outputs: { dropped: "cdkDropListDropped", entered: "cdkDropListEntered", exited: "cdkDropListExited", sorted: "cdkDropListSorted" }, host: { properties: { "attr.id": "id", "class.cdk-drop-list-disabled": "disabled", "class.cdk-drop-list-dragging": "_dropListRef.isDragging()", "class.cdk-drop-list-receiving": "_dropListRef.isReceiving()" }, classAttribute: "cdk-drop-list" }, providers: [
        // Prevent child drop lists from picking up the same group as their parent.
        { provide: CDK_DROP_LIST_GROUP, useValue: void 0 },
        { provide: CDK_DROP_LIST, useExisting: _CdkDropList }
      ], exportAs: ["cdkDropList"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkDropList, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkDropList], cdk-drop-list",
        exportAs: "cdkDropList",
        providers: [
          // Prevent child drop lists from picking up the same group as their parent.
          { provide: CDK_DROP_LIST_GROUP, useValue: void 0 },
          { provide: CDK_DROP_LIST, useExisting: CdkDropList }
        ],
        host: {
          "class": "cdk-drop-list",
          "[attr.id]": "id",
          "[class.cdk-drop-list-disabled]": "disabled",
          "[class.cdk-drop-list-dragging]": "_dropListRef.isDragging()",
          "[class.cdk-drop-list-receiving]": "_dropListRef.isReceiving()"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { connectedTo: [{
      type: Input,
      args: ["cdkDropListConnectedTo"]
    }], data: [{
      type: Input,
      args: ["cdkDropListData"]
    }], orientation: [{
      type: Input,
      args: ["cdkDropListOrientation"]
    }], id: [{
      type: Input
    }], lockAxis: [{
      type: Input,
      args: ["cdkDropListLockAxis"]
    }], disabled: [{
      type: Input,
      args: [{ alias: "cdkDropListDisabled", transform: booleanAttribute }]
    }], sortingDisabled: [{
      type: Input,
      args: [{ alias: "cdkDropListSortingDisabled", transform: booleanAttribute }]
    }], enterPredicate: [{
      type: Input,
      args: ["cdkDropListEnterPredicate"]
    }], sortPredicate: [{
      type: Input,
      args: ["cdkDropListSortPredicate"]
    }], autoScrollDisabled: [{
      type: Input,
      args: [{ alias: "cdkDropListAutoScrollDisabled", transform: booleanAttribute }]
    }], autoScrollStep: [{
      type: Input,
      args: ["cdkDropListAutoScrollStep"]
    }], elementContainerSelector: [{
      type: Input,
      args: ["cdkDropListElementContainer"]
    }], dropped: [{
      type: Output,
      args: ["cdkDropListDropped"]
    }], entered: [{
      type: Output,
      args: ["cdkDropListEntered"]
    }], exited: [{
      type: Output,
      args: ["cdkDropListExited"]
    }], sorted: [{
      type: Output,
      args: ["cdkDropListSorted"]
    }] } });
    CDK_DRAG_PREVIEW = new InjectionToken("CdkDragPreview");
    CdkDragPreview = class _CdkDragPreview {
      templateRef = inject(TemplateRef);
      _drag = inject(CDK_DRAG_PARENT, { optional: true });
      /** Context data to be added to the preview template instance. */
      data;
      /** Whether the preview should preserve the same size as the item that is being dragged. */
      matchSize = false;
      constructor() {
        this._drag?._setPreviewTemplate(this);
      }
      ngOnDestroy() {
        this._drag?._resetPreviewTemplate(this);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkDragPreview, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _CdkDragPreview, isStandalone: true, selector: "ng-template[cdkDragPreview]", inputs: { data: "data", matchSize: ["matchSize", "matchSize", booleanAttribute] }, providers: [{ provide: CDK_DRAG_PREVIEW, useExisting: _CdkDragPreview }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkDragPreview, decorators: [{
      type: Directive,
      args: [{
        selector: "ng-template[cdkDragPreview]",
        providers: [{ provide: CDK_DRAG_PREVIEW, useExisting: CdkDragPreview }]
      }]
    }], ctorParameters: () => [], propDecorators: { data: [{
      type: Input
    }], matchSize: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    CDK_DRAG_PLACEHOLDER = new InjectionToken("CdkDragPlaceholder");
    CdkDragPlaceholder = class _CdkDragPlaceholder {
      templateRef = inject(TemplateRef);
      _drag = inject(CDK_DRAG_PARENT, { optional: true });
      /** Context data to be added to the placeholder template instance. */
      data;
      constructor() {
        this._drag?._setPlaceholderTemplate(this);
      }
      ngOnDestroy() {
        this._drag?._resetPlaceholderTemplate(this);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkDragPlaceholder, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkDragPlaceholder, isStandalone: true, selector: "ng-template[cdkDragPlaceholder]", inputs: { data: "data" }, providers: [{ provide: CDK_DRAG_PLACEHOLDER, useExisting: _CdkDragPlaceholder }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkDragPlaceholder, decorators: [{
      type: Directive,
      args: [{
        selector: "ng-template[cdkDragPlaceholder]",
        providers: [{ provide: CDK_DRAG_PLACEHOLDER, useExisting: CdkDragPlaceholder }]
      }]
    }], ctorParameters: () => [], propDecorators: { data: [{
      type: Input
    }] } });
    DRAG_DROP_DIRECTIVES = [
      CdkDropList,
      CdkDropListGroup,
      CdkDrag,
      CdkDragHandle,
      CdkDragPreview,
      CdkDragPlaceholder
    ];
    DragDropModule = class _DragDropModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _DragDropModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _DragDropModule, imports: [
        CdkDropList,
        CdkDropListGroup,
        CdkDrag,
        CdkDragHandle,
        CdkDragPreview,
        CdkDragPlaceholder
      ], exports: [
        CdkScrollableModule,
        CdkDropList,
        CdkDropListGroup,
        CdkDrag,
        CdkDragHandle,
        CdkDragPreview,
        CdkDragPlaceholder
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _DragDropModule, providers: [DragDrop], imports: [CdkScrollableModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: DragDropModule, decorators: [{
      type: NgModule,
      args: [{
        imports: DRAG_DROP_DIRECTIVES,
        exports: [CdkScrollableModule, ...DRAG_DROP_DIRECTIVES],
        providers: [DragDrop]
      }]
    }] });
  }
});

// angular:jit:template:src\app\features\tasks\kanban-board\kanban-board.html
var kanban_board_default;
var init_kanban_board = __esm({
  "angular:jit:template:src\\app\\features\\tasks\\kanban-board\\kanban-board.html"() {
    kanban_board_default = '<div class="kanban-board">\r\n  <form class="add-task-form" (ngSubmit)="addTask()">\r\n    <mat-form-field appearance="outline">\r\n      <input matInput placeholder="Task title" [(ngModel)]="newTaskTitle" name="title" required />\r\n    </mat-form-field>\r\n    <mat-form-field appearance="outline">\r\n      <textarea matInput placeholder="Description (optional)" [(ngModel)]="newTaskDescription" name="description"></textarea>\r\n    </mat-form-field>\r\n    <button mat-raised-button color="primary" type="submit">Add Task</button>\r\n  </form>\r\n\r\n  <div class="columns">\r\n    <div class="column">\r\n      <h3>To Do</h3>\r\n      <div cdkDropList #todoList="cdkDropList" [cdkDropListData]="todo" [cdkDropListConnectedTo]="[inProgressList, doneList]" class="task-list" (cdkDropListDropped)="drop($event)">\r\n        <div *ngFor="let task of todo; let i = index" cdkDrag class="task-card">\r\n          <div class="task-title">{{ task.title }}</div>\r\n          <div class="task-desc" *ngIf="task.description">{{ task.description }}</div>\r\n          <button mat-icon-button color="warn" (click)="deleteTask(todo, i)"><mat-icon>delete</mat-icon></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="column">\r\n      <h3>In Progress</h3>\r\n      <div cdkDropList #inProgressList="cdkDropList" [cdkDropListData]="inProgress" [cdkDropListConnectedTo]="[todoList, doneList]" class="task-list" (cdkDropListDropped)="drop($event)">\r\n        <div *ngFor="let task of inProgress; let i = index" cdkDrag class="task-card">\r\n          <div class="task-title">{{ task.title }}</div>\r\n          <div class="task-desc" *ngIf="task.description">{{ task.description }}</div>\r\n          <button mat-icon-button color="warn" (click)="deleteTask(inProgress, i)"><mat-icon>delete</mat-icon></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="column">\r\n      <h3>Done</h3>\r\n      <div cdkDropList #doneList="cdkDropList" [cdkDropListData]="done" [cdkDropListConnectedTo]="[todoList, inProgressList]" class="task-list" (cdkDropListDropped)="drop($event)">\r\n        <div *ngFor="let task of done; let i = index" cdkDrag class="task-card">\r\n          <div class="task-title">{{ task.title }}</div>\r\n          <div class="task-desc" *ngIf="task.description">{{ task.description }}</div>\r\n          <button mat-icon-button color="warn" (click)="deleteTask(done, i)"><mat-icon>delete</mat-icon></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\features\tasks\kanban-board\kanban-board.scss
var kanban_board_default2;
var init_kanban_board2 = __esm({
  "angular:jit:style:src\\app\\features\\tasks\\kanban-board\\kanban-board.scss"() {
    kanban_board_default2 = "/* src/app/features/tasks/kanban-board/kanban-board.scss */\n.kanban-board {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.add-task-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  align-items: stretch;\n}\n.columns {\n  display: flex;\n  gap: 2rem;\n  justify-content: space-between;\n}\n.column {\n  background: #fafafa;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  padding: 1rem;\n  flex: 1 1 0;\n  min-width: 260px;\n  max-width: 350px;\n  display: flex;\n  flex-direction: column;\n}\n.column h3 {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-weight: 600;\n  color: #3f51b5;\n}\n.task-list {\n  min-height: 60px;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.task-card {\n  background: #fff;\n  border-radius: 6px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  position: relative;\n  cursor: grab;\n  transition: box-shadow 0.2s;\n}\n.task-card:active {\n  cursor: grabbing;\n  box-shadow: 0 4px 12px rgba(63, 81, 181, 0.12);\n}\n.task-title {\n  font-weight: 500;\n  font-size: 1.1rem;\n  color: #222;\n}\n.task-desc {\n  color: #666;\n  font-size: 0.95rem;\n}\nbutton[mat-icon-button] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n@media (max-width: 900px) {\n  .columns {\n    flex-direction: column;\n    gap: 1.5rem;\n  }\n  .column {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=kanban-board.css.map */\n";
  }
});

// src/app/features/tasks/kanban-board/kanban-board.ts
var KanbanBoard;
var init_kanban_board3 = __esm({
  "src/app/features/tasks/kanban-board/kanban-board.ts"() {
    "use strict";
    init_tslib_es6();
    init_kanban_board();
    init_kanban_board2();
    init_core();
    init_common();
    init_drag_drop();
    init_form_field();
    init_input();
    init_button();
    init_icon();
    init_forms();
    init_auth_service();
    KanbanBoard = class KanbanBoard2 {
      platformId;
      authService;
      cdr;
      todo = [];
      inProgress = [];
      done = [];
      newTaskTitle = "";
      newTaskDescription = "";
      isBrowser;
      isLoading = false;
      authSub;
      constructor(platformId, authService, cdr) {
        this.platformId = platformId;
        this.authService = authService;
        this.cdr = cdr;
        this.isBrowser = isPlatformBrowser(this.platformId);
      }
      ngOnInit() {
        if (this.isBrowser) {
          this.loadTasks();
          this.authSub = this.authService.isAuthenticated$.subscribe((isAuth) => {
            if (isAuth) {
              this.loadTasks();
            }
          });
        }
      }
      ngOnDestroy() {
        if (this.authSub) {
          this.authSub.unsubscribe();
        }
      }
      drop(event) {
        if (event.previousContainer === event.container) {
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
          transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        this.saveTasks();
      }
      addTask() {
        if (!this.newTaskTitle.trim())
          return;
        const newTask = {
          id: Date.now().toString(),
          title: this.newTaskTitle,
          description: this.newTaskDescription
        };
        this.todo.push(newTask);
        this.newTaskTitle = "";
        this.newTaskDescription = "";
        this.saveTasks();
      }
      deleteTask(list, index) {
        list.splice(index, 1);
        this.saveTasks();
      }
      saveTasks() {
        if (!this.isBrowser)
          return;
        const data = {
          todo: this.todo,
          inProgress: this.inProgress,
          done: this.done
        };
        this.authService.updateKanbanTasks(data).subscribe({
          next: () => {
            localStorage.setItem("kanban-tasks", JSON.stringify(data));
          },
          error: (error) => {
            console.error("Failed to save tasks:", error);
            localStorage.setItem("kanban-tasks", JSON.stringify(data));
          }
        });
      }
      loadTasks() {
        if (!this.isBrowser)
          return;
        this.isLoading = true;
        this.authService.getUserData().subscribe({
          next: (userData) => {
            this.todo = userData.kanbanTasks?.todo || [];
            this.inProgress = userData.kanbanTasks?.inProgress || [];
            this.done = userData.kanbanTasks?.done || [];
            this.isLoading = false;
            this.cdr.detectChanges();
          },
          error: (error) => {
            console.error("Failed to load tasks from API:", error);
            const data = localStorage.getItem("kanban-tasks");
            if (data) {
              try {
                const parsed = JSON.parse(data);
                this.todo = parsed.todo || [];
                this.inProgress = parsed.inProgress || [];
                this.done = parsed.done || [];
              } catch (e) {
                this.todo = [];
                this.inProgress = [];
                this.done = [];
                console.error("Failed to parse kanban-tasks:", e);
              }
            }
            this.isLoading = false;
            this.cdr.detectChanges();
          }
        });
      }
      static ctorParameters = () => [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID] }] },
        { type: AuthService },
        { type: ChangeDetectorRef }
      ];
    };
    KanbanBoard = __decorate([
      Component({
        selector: "app-kanban-board",
        standalone: true,
        imports: [
          CommonModule,
          DragDropModule,
          MatFormFieldModule,
          MatInputModule,
          MatButtonModule,
          MatIconModule,
          FormsModule
        ],
        template: kanban_board_default,
        styles: [kanban_board_default2]
      })
    ], KanbanBoard);
  }
});

export {
  DragDropModule,
  init_drag_drop,
  KanbanBoard,
  init_kanban_board3 as init_kanban_board
};
//# sourceMappingURL=chunk-XKRTNTEO.js.map
