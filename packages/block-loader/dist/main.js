(function (blocks) {
  'use strict';

  var e = [],
    t = [];
  function n(n, r) {
    if (n && "undefined" != typeof document) {
      var a,
        s = !0 === r.prepend ? "prepend" : "append",
        d = !0 === r.singleTag,
        i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];
      if (d) {
        var u = e.indexOf(i);
        -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
      } else a = c();
      65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
    }
    function c() {
      var e = document.createElement("style");
      if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
      var a = "prepend" === s ? "afterbegin" : "beforeend";
      return i.insertAdjacentElement(a, e), e;
    }
  }

  var css$d = ":root {\n  --blueprint-blocks-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  --blueprint-blocks-border: 1px solid var(--blueprint-blocks-color-gray);\n  --blueprint-blocks-border-radius: 2px;\n  --blueprint-blocks-color: #2c3338;\n  --blueprint-blocks-color-accent: var(--wp-components-color-accent, var(--wp-admin-theme-color, #007cba));\n  --blueprint-blocks-color-gray: #949494;\n  --blueprint-blocks-color-light-gray: var(--wp-components-color-gray-300, #ddd);\n  --blueprint-blocks-color-lightest-gray: #e6eaf0;\n  --blueprint-blocks-color-white: #fff;\n  --blueprint-blocks-font-size: 13px;\n}";
  n(css$d,{});

  function _iterableToArrayLimit$1(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function ownKeys$2(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2$2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) {
        _defineProperty$2(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _typeof$4(o) {
    "@babel/helpers - typeof";

    return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$4(o);
  }
  function _defineProperty$2(obj, key, value) {
    key = _toPropertyKey$2(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _extends$1() {
    _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends$1.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties$1(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$1(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _slicedToArray$1(arr, i) {
    return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
  }
  function _toConsumableArray$3(arr) {
    return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
  }
  function _arrayWithoutHoles$1(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
  }
  function _arrayWithHoles$1(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray$1(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
  }
  function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread$1() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest$1() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive$2(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey$2(arg) {
    var key = _toPrimitive$2(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function ownKeys$1(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2$1(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) {
        _defineProperty$1(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _typeof$3(o) {
    "@babel/helpers - typeof";

    return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$3(o);
  }
  function _defineProperty$1(obj, key, value) {
    key = _toPropertyKey$1(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray$2(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive$1(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey$1(arg) {
    var key = _toPrimitive$1(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
  function getDefaultExportFromCjs$1(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }
  var classnames$1 = {
    exports: {}
  };

  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */

  (function (module) {
    /* global define */

    (function () {
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg) continue;
          var argType = typeof arg;
          if (argType === 'string' || argType === 'number') {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === 'object') {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(' ');
      }
      if (module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames$1);
  var classnamesExports$1 = classnames$1.exports;
  var npmClassNames = /*@__PURE__*/getDefaultExportFromCjs$1(classnamesExports$1);

  /**
   * @constant DEFAULT_OPTIONS_KEYS the default options keys
   */
  var DEFAULT_OPTIONS_KEYS$1 = {
    isEqual: true,
    isMatchingKey: true,
    isPromise: true,
    maxSize: true,
    onCacheAdd: true,
    onCacheChange: true,
    onCacheHit: true,
    transformKey: true
  };
  /**
   * @function slice
   *
   * @description
   * slice.call() pre-bound
   */
  var slice$1 = Array.prototype.slice;
  /**
   * @function cloneArray
   *
   * @description
   * clone the array-like object and return the new array
   *
   * @param arrayLike the array-like object to clone
   * @returns the clone as an array
   */
  function cloneArray$1(arrayLike) {
    var length = arrayLike.length;
    if (!length) {
      return [];
    }
    if (length === 1) {
      return [arrayLike[0]];
    }
    if (length === 2) {
      return [arrayLike[0], arrayLike[1]];
    }
    if (length === 3) {
      return [arrayLike[0], arrayLike[1], arrayLike[2]];
    }
    return slice$1.call(arrayLike, 0);
  }
  /**
   * @function getCustomOptions
   *
   * @description
   * get the custom options on the object passed
   *
   * @param options the memoization options passed
   * @returns the custom options passed
   */
  function getCustomOptions$1(options) {
    var customOptions = {};
    /* eslint-disable no-restricted-syntax */
    for (var key in options) {
      if (!DEFAULT_OPTIONS_KEYS$1[key]) {
        customOptions[key] = options[key];
      }
    }
    /* eslint-enable */
    return customOptions;
  }
  /**
   * @function isMemoized
   *
   * @description
   * is the function passed already memoized
   *
   * @param fn the function to test
   * @returns is the function already memoized
   */
  function isMemoized$1(fn) {
    return typeof fn === 'function' && fn.isMemoized;
  }
  /**
   * @function isSameValueZero
   *
   * @description
   * are the objects equal based on SameValueZero equality
   *
   * @param object1 the first object to compare
   * @param object2 the second object to compare
   * @returns are the two objects equal
   */
  function isSameValueZero$1(object1, object2) {
    // eslint-disable-next-line no-self-compare
    return object1 === object2 || object1 !== object1 && object2 !== object2;
  }
  /**
   * @function mergeOptions
   *
   * @description
   * merge the options into the target
   *
   * @param existingOptions the options provided
   * @param newOptions the options to include
   * @returns the merged options
   */
  function mergeOptions$1(existingOptions, newOptions) {
    var target = {};
    /* eslint-disable no-restricted-syntax */
    for (var key in existingOptions) {
      target[key] = existingOptions[key];
    }
    for (var key in newOptions) {
      target[key] = newOptions[key];
    }
    /* eslint-enable */
    return target;
  }

  // utils
  var Cache$1 = /** @class */function () {
    function Cache(options) {
      this.keys = [];
      this.values = [];
      this.options = options;
      var isMatchingKeyFunction = typeof options.isMatchingKey === 'function';
      if (isMatchingKeyFunction) {
        this.getKeyIndex = this._getKeyIndexFromMatchingKey;
      } else if (options.maxSize > 1) {
        this.getKeyIndex = this._getKeyIndexForMany;
      } else {
        this.getKeyIndex = this._getKeyIndexForSingle;
      }
      this.canTransformKey = typeof options.transformKey === 'function';
      this.shouldCloneArguments = this.canTransformKey || isMatchingKeyFunction;
      this.shouldUpdateOnAdd = typeof options.onCacheAdd === 'function';
      this.shouldUpdateOnChange = typeof options.onCacheChange === 'function';
      this.shouldUpdateOnHit = typeof options.onCacheHit === 'function';
    }
    Object.defineProperty(Cache.prototype, "size", {
      /**
       * The number of cached [key,value] results.
       */
      get: function () {
        return this.keys.length;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Cache.prototype, "snapshot", {
      /**
       * A copy of the cache at a moment in time. This is useful
       * to compare changes over time, since the cache mutates
       * internally for performance reasons.
       */
      get: function () {
        return {
          keys: cloneArray$1(this.keys),
          size: this.size,
          values: cloneArray$1(this.values)
        };
      },
      enumerable: false,
      configurable: true
    });
    /**
     * Gets the matching key index when a custom key matcher is used.
     */
    Cache.prototype._getKeyIndexFromMatchingKey = function (keyToMatch) {
      var _a = this.options,
        isMatchingKey = _a.isMatchingKey,
        maxSize = _a.maxSize;
      var keys = this.keys;
      var keysLength = keys.length;
      if (!keysLength) {
        return -1;
      }
      if (isMatchingKey(keys[0], keyToMatch)) {
        return 0;
      }
      if (maxSize > 1) {
        for (var index = 1; index < keysLength; index++) {
          if (isMatchingKey(keys[index], keyToMatch)) {
            return index;
          }
        }
      }
      return -1;
    };
    /**
     * Gets the matching key index when multiple keys are used.
     */
    Cache.prototype._getKeyIndexForMany = function (keyToMatch) {
      var isEqual = this.options.isEqual;
      var keys = this.keys;
      var keysLength = keys.length;
      if (!keysLength) {
        return -1;
      }
      if (keysLength === 1) {
        return this._getKeyIndexForSingle(keyToMatch);
      }
      var keyLength = keyToMatch.length;
      var existingKey;
      var argIndex;
      if (keyLength > 1) {
        for (var index = 0; index < keysLength; index++) {
          existingKey = keys[index];
          if (existingKey.length === keyLength) {
            argIndex = 0;
            for (; argIndex < keyLength; argIndex++) {
              if (!isEqual(existingKey[argIndex], keyToMatch[argIndex])) {
                break;
              }
            }
            if (argIndex === keyLength) {
              return index;
            }
          }
        }
      } else {
        for (var index = 0; index < keysLength; index++) {
          existingKey = keys[index];
          if (existingKey.length === keyLength && isEqual(existingKey[0], keyToMatch[0])) {
            return index;
          }
        }
      }
      return -1;
    };
    /**
     * Gets the matching key index when a single key is used.
     */
    Cache.prototype._getKeyIndexForSingle = function (keyToMatch) {
      var keys = this.keys;
      if (!keys.length) {
        return -1;
      }
      var existingKey = keys[0];
      var length = existingKey.length;
      if (keyToMatch.length !== length) {
        return -1;
      }
      var isEqual = this.options.isEqual;
      if (length > 1) {
        for (var index = 0; index < length; index++) {
          if (!isEqual(existingKey[index], keyToMatch[index])) {
            return -1;
          }
        }
        return 0;
      }
      return isEqual(existingKey[0], keyToMatch[0]) ? 0 : -1;
    };
    /**
     * Order the array based on a Least-Recently-Used basis.
     */
    Cache.prototype.orderByLru = function (key, value, startingIndex) {
      var keys = this.keys;
      var values = this.values;
      var currentLength = keys.length;
      var index = startingIndex;
      while (index--) {
        keys[index + 1] = keys[index];
        values[index + 1] = values[index];
      }
      keys[0] = key;
      values[0] = value;
      var maxSize = this.options.maxSize;
      if (currentLength === maxSize && startingIndex === currentLength) {
        keys.pop();
        values.pop();
      } else if (startingIndex >= maxSize) {
        // eslint-disable-next-line no-multi-assign
        keys.length = values.length = maxSize;
      }
    };
    /**
     * Update the promise method to auto-remove from cache if rejected, and
     * if resolved then fire cache hit / changed.
     */
    Cache.prototype.updateAsyncCache = function (memoized) {
      var _this = this;
      var _a = this.options,
        onCacheChange = _a.onCacheChange,
        onCacheHit = _a.onCacheHit;
      var firstKey = this.keys[0];
      var firstValue = this.values[0];
      this.values[0] = firstValue.then(function (value) {
        if (_this.shouldUpdateOnHit) {
          onCacheHit(_this, _this.options, memoized);
        }
        if (_this.shouldUpdateOnChange) {
          onCacheChange(_this, _this.options, memoized);
        }
        return value;
      }, function (error) {
        var keyIndex = _this.getKeyIndex(firstKey);
        if (keyIndex !== -1) {
          _this.keys.splice(keyIndex, 1);
          _this.values.splice(keyIndex, 1);
        }
        throw error;
      });
    };
    return Cache;
  }();
  function createMemoizedFunction$1(fn, options) {
    if (options === void 0) {
      options = {};
    }
    if (isMemoized$1(fn)) {
      return createMemoizedFunction$1(fn.fn, mergeOptions$1(fn.options, options));
    }
    if (typeof fn !== 'function') {
      throw new TypeError('You must pass a function to `memoize`.');
    }
    var _a = options.isEqual,
      isEqual = _a === void 0 ? isSameValueZero$1 : _a,
      isMatchingKey = options.isMatchingKey,
      _b = options.isPromise,
      isPromise = _b === void 0 ? false : _b,
      _c = options.maxSize,
      maxSize = _c === void 0 ? 1 : _c,
      onCacheAdd = options.onCacheAdd,
      onCacheChange = options.onCacheChange,
      onCacheHit = options.onCacheHit,
      transformKey = options.transformKey;
    var normalizedOptions = mergeOptions$1({
      isEqual: isEqual,
      isMatchingKey: isMatchingKey,
      isPromise: isPromise,
      maxSize: maxSize,
      onCacheAdd: onCacheAdd,
      onCacheChange: onCacheChange,
      onCacheHit: onCacheHit,
      transformKey: transformKey
    }, getCustomOptions$1(options));
    var cache = new Cache$1(normalizedOptions);
    var keys = cache.keys,
      values = cache.values,
      canTransformKey = cache.canTransformKey,
      shouldCloneArguments = cache.shouldCloneArguments,
      shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
      shouldUpdateOnChange = cache.shouldUpdateOnChange,
      shouldUpdateOnHit = cache.shouldUpdateOnHit;
    var memoized = function () {
      var key = shouldCloneArguments ? cloneArray$1(arguments) : arguments;
      if (canTransformKey) {
        key = transformKey(key);
      }
      var keyIndex = keys.length ? cache.getKeyIndex(key) : -1;
      if (keyIndex !== -1) {
        if (shouldUpdateOnHit) {
          onCacheHit(cache, normalizedOptions, memoized);
        }
        if (keyIndex) {
          cache.orderByLru(keys[keyIndex], values[keyIndex], keyIndex);
          if (shouldUpdateOnChange) {
            onCacheChange(cache, normalizedOptions, memoized);
          }
        }
      } else {
        var newValue = fn.apply(this, arguments);
        var newKey = shouldCloneArguments ? key : cloneArray$1(arguments);
        cache.orderByLru(newKey, newValue, keys.length);
        if (isPromise) {
          cache.updateAsyncCache(memoized);
        }
        if (shouldUpdateOnAdd) {
          onCacheAdd(cache, normalizedOptions, memoized);
        }
        if (shouldUpdateOnChange) {
          onCacheChange(cache, normalizedOptions, memoized);
        }
      }
      return values[0];
    };
    memoized.cache = cache;
    memoized.fn = fn;
    memoized.isMemoized = true;
    memoized.options = normalizedOptions;
    return memoized;
  }
  var valueByIdentifier = createMemoizedFunction$1(function () {
    var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var value = _objectSpread2$1({}, context);
    var parts = identifier.split('.');
    if (parts.length === 0) {
      return '';
    }
    var key = parts.shift();
    if (!(context !== null && context !== void 0 && context[key])) {
      return '';
    }
    if (parts.length === 0 && key === 'length') {
      return Object.values(value).length;
    }
    if (parts.length === 0) {
      return value[key];
    }
    return valueByIdentifier(parts.join('.'), value[key]);
  });
  function replaceTokens() {
    var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (typeof string !== 'string') {
      return string;
    }
    return string.replaceAll(/\{\{(.*?)\}\}/g, function (match, p1) {
      return valueByIdentifier(p1.trim(), context);
    });
  }
  var OPERANDS = ['==', '!=', '<', '<=', '>', '>='];
  function evaluateCondition() {
    var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var operand = null;
    OPERANDS.forEach(function (OPERAND) {
      if (string.indexOf(OPERAND) !== -1) {
        operand = OPERAND;
      }
    });
    if (operand === null) {
      return Boolean(replaceTokens(string, context));
    }
    var before = replaceTokens(string.slice(0, string.indexOf(operand)).trim(), context);
    var after = replaceTokens(string.slice(string.indexOf(operand) + operand.length).trim(), context);
    if (before.slice(0, 1) === "'" && before.slice(-1) === "'" || before.slice(0, 1) === '"' && before.slice(-1) === '"') {
      before = before.slice(1, -1);
    }
    if (after.slice(0, 1) === "'" && after.slice(-1) === "'" || after.slice(0, 1) === '"' && after.slice(-1) === '"') {
      after = after.slice(1, -1);
    }
    if (operand === '==') {
      return before == after;
    }
    if (operand === '!=') {
      return before != after;
    }
    if (operand === '<') {
      return before < after;
    }
    if (operand === '<=') {
      return before <= after;
    }
    if (operand === '>') {
      return before > after;
    }
    if (operand === '>=') {
      return before >= after;
    }
    return false;
  }
  function evaluateConditionalString() {
    var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (typeof string !== 'string' || string === '') {
      return string;
    }
    var open = null;
    var close = null;
    var evaluatedString = string;
    do {
      for (var i = 0; i < string.length; i++) {
        if (string[i] === '(') {
          open = i;
        }
        if (open !== null && string[i] === ')') {
          close = i;
          break;
        }
      }
      var conditional = void 0,
        before = void 0,
        after = void 0;
      if (open === null && close === null) {
        conditional = string;
        before = '';
        after = '';
      } else {
        conditional = string.slice(open + 1, close - 1);
        before = string.slice(0, open - 1);
        after = string.slice(close + 1);
      }
      var ands = conditional.split('&&');
      var result = ands.reduce(function (result, and) {
        var ors = and.trim().split('||');
        return result && ors.reduce(function (reducedOr, or) {
          return reducedOr || evaluateCondition(or.trim(), context);
        }, null);
      }, true);
      if (before === '' && after === '') {
        evaluatedString = result && '1' || '0';
      } else {
        evaluatedString = before + (result && 'true' || 'false') + after;
      }
    } while (open !== null && close !== null);
    if (evaluatedString === '1' || evaluatedString === 'true') {
      return true;
    }
    if (evaluatedString === '0' || evaluatedString === 'false') {
      return false;
    }
    return Boolean(evaluatedString);
  }

  /**
   * Wraps the default classNames function to provide
   * contextual token replacement
   */
  function classNames$1() {
    var _classNames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var classNameArray = Array.isArray(_classNames) && _classNames || [_classNames];
    classNameArray = classNameArray.map(function (className) {
      if (typeof className === 'array') {
        return classNames$1(className, context);
      } else if (_typeof$3(className) === 'object') {
        return Object.fromEntries(Object.entries(className).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];
          return [replaceTokens(key, context), typeof value === 'boolean' ? value : evaluateConditionalString(value, context)];
        }));
      }
      return className;
    });
    return replaceTokens(npmClassNames.apply(void 0, _toConsumableArray$2(classNameArray)), context);
  }
  var _excluded$1$1 = ["clientId", "attributes", "innerBlocks"];
  /**
   * Returns the block context with private attributes formatted.
   * 
   * Note: The length of the inner blocks is saved as an attribute because 
   * they can not be directly referenced upon initial save.
   */
  function getBlockContext() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    context.clientId;
    var attributes = context.attributes,
      innerBlocks = context.innerBlocks,
      blockContext = _objectWithoutProperties(context, _excluded$1$1);
    var index = 1 + ((attributes === null || attributes === void 0 ? void 0 : attributes._index) || 0);
    var length = (attributes === null || attributes === void 0 ? void 0 : attributes._innerBlocksLength) || 0;
    return _objectSpread2$1(_objectSpread2$1({}, blockContext), {}, {
      block: _objectSpread2$1({
        index: index
      }, attributes),
      innerBlocks: (innerBlocks === null || innerBlocks === void 0 ? void 0 : innerBlocks.length) && innerBlocks || new Array(length).fill(null)
    });
  }
  function isArray(value) {
    return Array.isArray(value) && value !== null;
  }
  function isExternalUrl(url) {
    if (url.length === 0 || url.indexOf('#') === 0 || url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
      return false;
    }
    try {
      new URL(url);
    } catch (error) {
      return false;
    }
    return new URL(url).origin !== location.origin;
  }
  function isFragmentUrl(url) {
    if (url.indexOf('#') === 0) {
      return true;
    }
    return false;
  }
  function isObject$1(value) {
    return _typeof$3(value) === 'object' && !Array.isArray(value) && value !== null;
  }
  function normalizeComponentList(componentList) {
    var defaultComponent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (isObject$1(componentList)) {
      return [componentList];
    }
    if (isArray(componentList) && componentList.length > 0) {
      return componentList;
    }
    return [defaultComponent];
  }
  var EXCLUDED_ATTRIBUTES = ["saveAs"];
  function styles() {
    var _styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (_typeof$3(_styles) !== 'object') {
      return {};
    }
    var stylesArray = Object.entries(_styles).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        property = _ref2[0],
        value = _ref2[1];
      return [replaceTokens(property, context), replaceTokens(value, context)];
    });
    return Object.fromEntries(stylesArray);
  }
  var _excluded$10 = ["children", "className", "editorClassName", "viewClassName", "style", "attributeName", "type", "tagName", "persist"],
    _excluded2$5 = ["jsx"];

  /**
   * Renders an item inside a JSX objects array
   */
  function render(_ref, _ref2) {
    var _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? [] : _ref$className,
      _ref$editorClassName = _ref.editorClassName,
      editorClassName = _ref$editorClassName === void 0 ? [] : _ref$editorClassName,
      _ref$viewClassName = _ref.viewClassName,
      viewClassName = _ref$viewClassName === void 0 ? [] : _ref$viewClassName,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$attributeName = _ref.attributeName,
      attributeName = _ref$attributeName === void 0 ? '' : _ref$attributeName,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'html' : _ref$type,
      _ref$tagName = _ref.tagName,
      tagName = _ref$tagName === void 0 ? 'div' : _ref$tagName,
      _ref$persist = _ref.persist,
      persist = _ref$persist === void 0 ? true : _ref$persist,
      props = _objectWithoutProperties(_ref, _excluded$10);
    var clientId = _ref2.clientId,
      blockName = _ref2.blockName,
      attributes = _ref2.attributes,
      _ref2$setAttributes = _ref2.setAttributes,
      setAttributes = _ref2$setAttributes === void 0 ? null : _ref2$setAttributes,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? {} : _ref2$context;
    var Components = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var attributeValue = attributes === null || attributes === void 0 ? void 0 : attributes[attributeName];
    if (attributeValue === undefined) {
      attributeValue = props === null || props === void 0 ? void 0 : props.value;
    }
    var jsxAttributes = Object.fromEntries(Object.entries(props).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        name = _ref4[0],
        value = _ref4[1];
      if (typeof value === 'string' && EXCLUDED_ATTRIBUTES.includes(name) === false) {
        return [name, replaceTokens(value, _objectSpread2$1(_objectSpread2$1({}, context), {}, {
          attribute: {
            value: attributeValue
          }
        }))];
      } else {
        return [name, value];
      }
    }));
    if ('display' in jsxAttributes) {
      jsxAttributes.display = evaluateConditionalString(props.display, context);
    }
    var jsxClassNames = classNames$1([].concat(_toConsumableArray$2(Array.isArray(className) && className || [className]), _toConsumableArray$2((context === null || context === void 0 ? void 0 : context.context) === 'edit' && (Array.isArray(editorClassName) && editorClassName || [editorClassName]) || []), _toConsumableArray$2((context === null || context === void 0 ? void 0 : context.context) === 'save' && (Array.isArray(viewClassName) && viewClassName || [viewClassName]) || [])), _objectSpread2$1(_objectSpread2$1({}, context), {}, {
      attribute: {
        value: attributeValue
      }
    }));
    if (jsxClassNames) {
      jsxAttributes.className = jsxClassNames;
    }
    var jsxStyles = styles(style, _objectSpread2$1(_objectSpread2$1({}, context), {}, {
      attribute: {
        value: attributeValue
      }
    }));
    if (Object.values(jsxStyles).length > 0) {
      jsxAttributes.style = jsxStyles;
    }
    var Component = tagName;
    if (type in Components && Components[type]) {
      Component = Components[type];
    } else if ("".concat(type, "-field") in Components && Components["".concat(type, "-field")]) {
      Component = Components["".concat(type, "-field")];
    }
    if (Component !== tagName) {
      return /*#__PURE__*/React.createElement(Component, _extends({}, jsxAttributes, {
        clientId: clientId,
        blockName: blockName,
        attributeName: attributeName,
        tagName: tagName,
        attributes: attributes
      }, attributeValue !== undefined && {
        value: attributeValue
      }, setAttributes !== null && {
        attributeName: attributeName,
        setAttributes: setAttributes,
        onInput: function onInput(value) {
          if ((context === null || context === void 0 ? void 0 : context.context) === 'save') {
            return;
          }
          setAttributes(_defineProperty$1({}, attributeName, value), persist);
        }
      }), renderJsxArray({
        clientId: clientId,
        blockName: blockName,
        attributes: attributes,
        setAttributes: setAttributes,
        jsx: children,
        context: context
      }, Components));
    }
    return /*#__PURE__*/React.createElement(Component, _extends({}, jsxAttributes, {
      blockName: blockName
    }), renderJsxArray({
      clientId: clientId,
      blockName: blockName,
      attributes: attributes,
      setAttributes: setAttributes,
      jsx: children,
      context: context
    }, Components));
  }

  /**
   * Renders an array of JSX objects
   *
   * @param {array} jsx
   */
  function renderJsxArray(_ref5) {
    var _ref5$jsx = _ref5.jsx,
      jsx = _ref5$jsx === void 0 ? [] : _ref5$jsx,
      blockProps = _objectWithoutProperties(_ref5, _excluded2$5);
    var Components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (Array.isArray(jsx) === false || jsx.length === 0) {
      return null;
    }
    var jsxComponents = jsx.map(function (jsxComponent) {
      if (typeof jsxComponent === 'function') {
        return jsxComponent(blockProps);
      }
      return render(jsxComponent, blockProps, Components);
    });
    if (jsxComponents.length === 1) {
      return jsxComponents[0];
    }
    return jsxComponents;
  }

  /**
   *
   *
   * @param {*} callback
   * @returns
   */
  function throttle(callback, delay) {
    var wait = false;
    var callbackArgs = null;
    function attemptCall() {
      if (callbackArgs === null) {
        wait = false;
      } else {
        callback.apply(void 0, _toConsumableArray$2(callbackArgs));
        callbackArgs = null;
        setTimeout(attemptCall, delay);
      }
    }
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (wait) {
        callbackArgs = args;
        return;
      }
      callback.apply(void 0, args);
      wait = true;
      setTimeout(attemptCall, delay);
    };
  }

  /**
   * WordPress dependencies
   */

  /**
   * Object map tracking messages which have been logged, for use in ensuring a
   * message is only logged once.
   *
   * @type {Record<string, true | undefined>}
   */
  const logged = Object.create(null);

  /**
   * Logs a message to notify developers about a deprecated feature.
   *
   * @param {string} feature               Name of the deprecated feature.
   * @param {Object} [options]             Personalisation options
   * @param {string} [options.since]       Version in which the feature was deprecated.
   * @param {string} [options.version]     Version in which the feature will be removed.
   * @param {string} [options.alternative] Feature to use instead
   * @param {string} [options.plugin]      Plugin name if it's a plugin feature
   * @param {string} [options.link]        Link to documentation
   * @param {string} [options.hint]        Additional message to help transition away from the deprecated feature.
   *
   * @example
   * ```js
   * import deprecated from '@wordpress/deprecated';
   *
   * deprecated( 'Eating meat', {
   * 	since: '2019.01.01'
   * 	version: '2020.01.01',
   * 	alternative: 'vegetables',
   * 	plugin: 'the earth',
   * 	hint: 'You may find it beneficial to transition gradually.',
   * } );
   *
   * // Logs: 'Eating meat is deprecated since version 2019.01.01 and will be removed from the earth in version 2020.01.01. Please use vegetables instead. Note: You may find it beneficial to transition gradually.'
   * ```
   */
  function deprecated(feature, options = {}) {
    const {
      since,
      version,
      alternative,
      plugin,
      link,
      hint
    } = options;
    const pluginMessage = plugin ? ` from ${plugin}` : '';
    const sinceMessage = since ? ` since version ${since}` : '';
    const versionMessage = version ? ` and will be removed${pluginMessage} in version ${version}` : '';
    const useInsteadMessage = alternative ? ` Please use ${alternative} instead.` : '';
    const linkMessage = link ? ` See: ${link}` : '';
    const hintMessage = hint ? ` Note: ${hint}` : '';
    const message = `${feature} is deprecated${sinceMessage}${versionMessage}.${useInsteadMessage}${linkMessage}${hintMessage}`;

    // Skip if already logged.
    if (message in logged) {
      return;
    }

    /**
     * Fires whenever a deprecated feature is encountered
     *
     * @param {string}  feature             Name of the deprecated feature.
     * @param {?Object} options             Personalisation options
     * @param {string}  options.since       Version in which the feature was deprecated.
     * @param {?string} options.version     Version in which the feature will be removed.
     * @param {?string} options.alternative Feature to use instead
     * @param {?string} options.plugin      Plugin name if it's a plugin feature
     * @param {?string} options.link        Link to documentation
     * @param {?string} options.hint        Additional message to help transition away from the deprecated feature.
     * @param {?string} message             Message sent to console.warn
     */
    wp.hooks.doAction('deprecated', feature, options, message);

    // eslint-disable-next-line no-console
    console.warn(message);
    logged[message] = true;
  }

  /** @typedef {import('utility-types').NonUndefined<Parameters<typeof deprecated>[1]>} DeprecatedOptions */

  function _typeof$2(o) {
    "@babel/helpers - typeof";

    return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$2(o);
  }
  function _toPrimitive(input, hint) {
    if (_typeof$2(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof$2(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof$2(key) === "symbol" ? key : String(key);
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }

  // Inlined version of the `symbol-observable` polyfill
  var $$observable = function () {
    return typeof Symbol === 'function' && Symbol.observable || '@@observable';
  }();

  /**
   * These are private action types reserved by Redux.
   * For any unknown actions, you must return the current state.
   * If the current state is undefined, you must return the initial state.
   * Do not reference these action types directly in your code.
   */
  var randomString = function randomString() {
    return Math.random().toString(36).substring(7).split('').join('.');
  };
  var ActionTypes = {
    INIT: "@@redux/INIT" + randomString(),
    REPLACE: "@@redux/REPLACE" + randomString(),
    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
      return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
    }
  };

  /**
   * @param {any} obj The object to inspect.
   * @returns {boolean} True if the argument appears to be a plain object.
   */
  function isPlainObject$1(obj) {
    if (typeof obj !== 'object' || obj === null) return false;
    var proto = obj;
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto;
  }

  // Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
  function miniKindOf(val) {
    if (val === void 0) return 'undefined';
    if (val === null) return 'null';
    var type = typeof val;
    switch (type) {
      case 'boolean':
      case 'string':
      case 'number':
      case 'symbol':
      case 'function':
        {
          return type;
        }
    }
    if (Array.isArray(val)) return 'array';
    if (isDate(val)) return 'date';
    if (isError(val)) return 'error';
    var constructorName = ctorName(val);
    switch (constructorName) {
      case 'Symbol':
      case 'Promise':
      case 'WeakMap':
      case 'WeakSet':
      case 'Map':
      case 'Set':
        return constructorName;
    } // other

    return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
  }
  function ctorName(val) {
    return typeof val.constructor === 'function' ? val.constructor.name : null;
  }
  function isError(val) {
    return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
  }
  function isDate(val) {
    if (val instanceof Date) return true;
    return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
  }
  function kindOf(val) {
    var typeOfVal = typeof val;
    {
      typeOfVal = miniKindOf(val);
    }
    return typeOfVal;
  }

  /**
   * @deprecated
   *
   * **We recommend using the `configureStore` method
   * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
   *
   * Redux Toolkit is our recommended approach for writing Redux logic today,
   * including store setup, reducers, data fetching, and more.
   *
   * **For more details, please read this Redux docs page:**
   * **https://redux.js.org/introduction/why-rtk-is-redux-today**
   *
   * `configureStore` from Redux Toolkit is an improved version of `createStore` that
   * simplifies setup and helps avoid common bugs.
   *
   * You should not be using the `redux` core package by itself today, except for learning purposes.
   * The `createStore` method from the core `redux` package will not be removed, but we encourage
   * all users to migrate to using Redux Toolkit for all Redux code.
   *
   * If you want to use `createStore` without this visual deprecation warning, use
   * the `legacy_createStore` import instead:
   *
   * `import { legacy_createStore as createStore} from 'redux'`
   *
   */

  function createStore(reducer, preloadedState, enhancer) {
    var _ref2;
    if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
      throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
    }
    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
      enhancer = preloadedState;
      preloadedState = undefined;
    }
    if (typeof enhancer !== 'undefined') {
      if (typeof enhancer !== 'function') {
        throw new Error("Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
      }
      return enhancer(createStore)(reducer, preloadedState);
    }
    if (typeof reducer !== 'function') {
      throw new Error("Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
    }
    var currentReducer = reducer;
    var currentState = preloadedState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;
    /**
     * This makes a shallow copy of currentListeners so we can use
     * nextListeners as a temporary list while dispatching.
     *
     * This prevents any bugs around consumers calling
     * subscribe/unsubscribe in the middle of a dispatch.
     */

    function ensureCanMutateNextListeners() {
      if (nextListeners === currentListeners) {
        nextListeners = currentListeners.slice();
      }
    }
    /**
     * Reads the state tree managed by the store.
     *
     * @returns {any} The current state tree of your application.
     */

    function getState() {
      if (isDispatching) {
        throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
      }
      return currentState;
    }
    /**
     * Adds a change listener. It will be called any time an action is dispatched,
     * and some part of the state tree may potentially have changed. You may then
     * call `getState()` to read the current state tree inside the callback.
     *
     * You may call `dispatch()` from a change listener, with the following
     * caveats:
     *
     * 1. The subscriptions are snapshotted just before every `dispatch()` call.
     * If you subscribe or unsubscribe while the listeners are being invoked, this
     * will not have any effect on the `dispatch()` that is currently in progress.
     * However, the next `dispatch()` call, whether nested or not, will use a more
     * recent snapshot of the subscription list.
     *
     * 2. The listener should not expect to see all state changes, as the state
     * might have been updated multiple times during a nested `dispatch()` before
     * the listener is called. It is, however, guaranteed that all subscribers
     * registered before the `dispatch()` started will be called with the latest
     * state by the time it exits.
     *
     * @param {Function} listener A callback to be invoked on every dispatch.
     * @returns {Function} A function to remove this change listener.
     */

    function subscribe(listener) {
      if (typeof listener !== 'function') {
        throw new Error("Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
      }
      if (isDispatching) {
        throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }
      var isSubscribed = true;
      ensureCanMutateNextListeners();
      nextListeners.push(listener);
      return function unsubscribe() {
        if (!isSubscribed) {
          return;
        }
        if (isDispatching) {
          throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
        }
        isSubscribed = false;
        ensureCanMutateNextListeners();
        var index = nextListeners.indexOf(listener);
        nextListeners.splice(index, 1);
        currentListeners = null;
      };
    }
    /**
     * Dispatches an action. It is the only way to trigger a state change.
     *
     * The `reducer` function, used to create the store, will be called with the
     * current state tree and the given `action`. Its return value will
     * be considered the **next** state of the tree, and the change listeners
     * will be notified.
     *
     * The base implementation only supports plain object actions. If you want to
     * dispatch a Promise, an Observable, a thunk, or something else, you need to
     * wrap your store creating function into the corresponding middleware. For
     * example, see the documentation for the `redux-thunk` package. Even the
     * middleware will eventually dispatch plain object actions using this method.
     *
     * @param {Object} action A plain object representing “what changed”. It is
     * a good idea to keep actions serializable so you can record and replay user
     * sessions, or use the time travelling `redux-devtools`. An action must have
     * a `type` property which may not be `undefined`. It is a good idea to use
     * string constants for action types.
     *
     * @returns {Object} For convenience, the same action object you dispatched.
     *
     * Note that, if you use a custom middleware, it may wrap `dispatch()` to
     * return something else (for example, a Promise you can await).
     */

    function dispatch(action) {
      if (!isPlainObject$1(action)) {
        throw new Error("Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
      }
      if (typeof action.type === 'undefined') {
        throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
      }
      if (isDispatching) {
        throw new Error('Reducers may not dispatch actions.');
      }
      try {
        isDispatching = true;
        currentState = currentReducer(currentState, action);
      } finally {
        isDispatching = false;
      }
      var listeners = currentListeners = nextListeners;
      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        listener();
      }
      return action;
    }
    /**
     * Replaces the reducer currently used by the store to calculate the state.
     *
     * You might need this if your app implements code splitting and you want to
     * load some of the reducers dynamically. You might also need this if you
     * implement a hot reloading mechanism for Redux.
     *
     * @param {Function} nextReducer The reducer for the store to use instead.
     * @returns {void}
     */

    function replaceReducer(nextReducer) {
      if (typeof nextReducer !== 'function') {
        throw new Error("Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
      }
      currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
      // Any reducers that existed in both the new and old rootReducer
      // will receive the previous state. This effectively populates
      // the new state tree with any relevant data from the old one.

      dispatch({
        type: ActionTypes.REPLACE
      });
    }
    /**
     * Interoperability point for observable/reactive libraries.
     * @returns {observable} A minimal observable of state changes.
     * For more information, see the observable proposal:
     * https://github.com/tc39/proposal-observable
     */

    function observable() {
      var _ref;
      var outerSubscribe = subscribe;
      return _ref = {
        /**
         * The minimal observable subscription method.
         * @param {Object} observer Any object that can be used as an observer.
         * The observer object should have a `next` method.
         * @returns {subscription} An object with an `unsubscribe` method that can
         * be used to unsubscribe the observable from the store, and prevent further
         * emission of values from the observable.
         */
        subscribe: function subscribe(observer) {
          if (typeof observer !== 'object' || observer === null) {
            throw new Error("Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
          }
          function observeState() {
            if (observer.next) {
              observer.next(getState());
            }
          }
          observeState();
          var unsubscribe = outerSubscribe(observeState);
          return {
            unsubscribe: unsubscribe
          };
        }
      }, _ref[$$observable] = function () {
        return this;
      }, _ref;
    } // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.

    dispatch({
      type: ActionTypes.INIT
    });
    return _ref2 = {
      dispatch: dispatch,
      subscribe: subscribe,
      getState: getState,
      replaceReducer: replaceReducer
    }, _ref2[$$observable] = observable, _ref2;
  }

  /**
   * Composes single-argument functions from right to left. The rightmost
   * function can take multiple arguments as it provides the signature for
   * the resulting composite function.
   *
   * @param {...Function} funcs The functions to compose.
   * @returns {Function} A function obtained by composing the argument functions
   * from right to left. For example, compose(f, g, h) is identical to doing
   * (...args) => f(g(h(...args))).
   */
  function compose$2() {
    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }
    if (funcs.length === 0) {
      return function (arg) {
        return arg;
      };
    }
    if (funcs.length === 1) {
      return funcs[0];
    }
    return funcs.reduce(function (a, b) {
      return function () {
        return a(b.apply(void 0, arguments));
      };
    });
  }

  /**
   * Creates a store enhancer that applies middleware to the dispatch method
   * of the Redux store. This is handy for a variety of tasks, such as expressing
   * asynchronous actions in a concise manner, or logging every action payload.
   *
   * See `redux-thunk` package as an example of the Redux middleware.
   *
   * Because middleware is potentially asynchronous, this should be the first
   * store enhancer in the composition chain.
   *
   * Note that each middleware will be given the `dispatch` and `getState` functions
   * as named arguments.
   *
   * @param {...Function} middlewares The middleware chain to be applied.
   * @returns {Function} A store enhancer applying the middleware.
   */

  function applyMiddleware() {
    for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
      middlewares[_key] = arguments[_key];
    }
    return function (createStore) {
      return function () {
        var store = createStore.apply(void 0, arguments);
        var _dispatch = function dispatch() {
          throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
        };
        var middlewareAPI = {
          getState: store.getState,
          dispatch: function dispatch() {
            return _dispatch.apply(void 0, arguments);
          }
        };
        var chain = middlewares.map(function (middleware) {
          return middleware(middlewareAPI);
        });
        _dispatch = compose$2.apply(void 0, chain)(store.dispatch);
        return _objectSpread2(_objectSpread2({}, store), {}, {
          dispatch: _dispatch
        });
      };
    };
  }
  function _typeof$1(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof$1 = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof$1 = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return _typeof$1(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /**
   * Given an instance of EquivalentKeyMap, returns its internal value pair tuple
   * for a key, if one exists. The tuple members consist of the last reference
   * value for the key (used in efficient subsequent lookups) and the value
   * assigned for the key at the leaf node.
   *
   * @param {EquivalentKeyMap} instance EquivalentKeyMap instance.
   * @param {*} key                     The key for which to return value pair.
   *
   * @return {?Array} Value pair, if exists.
   */
  function getValuePair(instance, key) {
    var _map = instance._map,
      _arrayTreeMap = instance._arrayTreeMap,
      _objectTreeMap = instance._objectTreeMap; // Map keeps a reference to the last object-like key used to set the
    // value, which can be used to shortcut immediately to the value.

    if (_map.has(key)) {
      return _map.get(key);
    } // Sort keys to ensure stable retrieval from tree.

    var properties = Object.keys(key).sort(); // Tree by type to avoid conflicts on numeric object keys, empty value.

    var map = Array.isArray(key) ? _arrayTreeMap : _objectTreeMap;
    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];
      map = map.get(property);
      if (map === undefined) {
        return;
      }
      var propertyValue = key[property];
      map = map.get(propertyValue);
      if (map === undefined) {
        return;
      }
    }
    var valuePair = map.get('_ekm_value');
    if (!valuePair) {
      return;
    } // If reached, it implies that an object-like key was set with another
    // reference, so delete the reference and replace with the current.

    _map.delete(valuePair[0]);
    valuePair[0] = key;
    map.set('_ekm_value', valuePair);
    _map.set(key, valuePair);
    return valuePair;
  }
  /**
   * Variant of a Map object which enables lookup by equivalent (deeply equal)
   * object and array keys.
   */

  var EquivalentKeyMap = /*#__PURE__*/
  function () {
    /**
     * Constructs a new instance of EquivalentKeyMap.
     *
     * @param {Iterable.<*>} iterable Initial pair of key, value for map.
     */
    function EquivalentKeyMap(iterable) {
      _classCallCheck(this, EquivalentKeyMap);
      this.clear();
      if (iterable instanceof EquivalentKeyMap) {
        // Map#forEach is only means of iterating with support for IE11.
        var iterablePairs = [];
        iterable.forEach(function (value, key) {
          iterablePairs.push([key, value]);
        });
        iterable = iterablePairs;
      }
      if (iterable != null) {
        for (var i = 0; i < iterable.length; i++) {
          this.set(iterable[i][0], iterable[i][1]);
        }
      }
    }
    /**
     * Accessor property returning the number of elements.
     *
     * @return {number} Number of elements.
     */

    _createClass(EquivalentKeyMap, [{
      key: "set",
      /**
       * Add or update an element with a specified key and value.
       *
       * @param {*} key   The key of the element to add.
       * @param {*} value The value of the element to add.
       *
       * @return {EquivalentKeyMap} Map instance.
       */
      value: function set(key, value) {
        // Shortcut non-object-like to set on internal Map.
        if (key === null || _typeof$1(key) !== 'object') {
          this._map.set(key, value);
          return this;
        } // Sort keys to ensure stable assignment into tree.

        var properties = Object.keys(key).sort();
        var valuePair = [key, value]; // Tree by type to avoid conflicts on numeric object keys, empty value.

        var map = Array.isArray(key) ? this._arrayTreeMap : this._objectTreeMap;
        for (var i = 0; i < properties.length; i++) {
          var property = properties[i];
          if (!map.has(property)) {
            map.set(property, new EquivalentKeyMap());
          }
          map = map.get(property);
          var propertyValue = key[property];
          if (!map.has(propertyValue)) {
            map.set(propertyValue, new EquivalentKeyMap());
          }
          map = map.get(propertyValue);
        } // If an _ekm_value exists, there was already an equivalent key. Before
        // overriding, ensure that the old key reference is removed from map to
        // avoid memory leak of accumulating equivalent keys. This is, in a
        // sense, a poor man's WeakMap, while still enabling iterability.

        var previousValuePair = map.get('_ekm_value');
        if (previousValuePair) {
          this._map.delete(previousValuePair[0]);
        }
        map.set('_ekm_value', valuePair);
        this._map.set(key, valuePair);
        return this;
      }
      /**
       * Returns a specified element.
       *
       * @param {*} key The key of the element to return.
       *
       * @return {?*} The element associated with the specified key or undefined
       *              if the key can't be found.
       */
    }, {
      key: "get",
      value: function get(key) {
        // Shortcut non-object-like to get from internal Map.
        if (key === null || _typeof$1(key) !== 'object') {
          return this._map.get(key);
        }
        var valuePair = getValuePair(this, key);
        if (valuePair) {
          return valuePair[1];
        }
      }
      /**
       * Returns a boolean indicating whether an element with the specified key
       * exists or not.
       *
       * @param {*} key The key of the element to test for presence.
       *
       * @return {boolean} Whether an element with the specified key exists.
       */
    }, {
      key: "has",
      value: function has(key) {
        if (key === null || _typeof$1(key) !== 'object') {
          return this._map.has(key);
        } // Test on the _presence_ of the pair, not its value, as even undefined
        // can be a valid member value for a key.

        return getValuePair(this, key) !== undefined;
      }
      /**
       * Removes the specified element.
       *
       * @param {*} key The key of the element to remove.
       *
       * @return {boolean} Returns true if an element existed and has been
       *                   removed, or false if the element does not exist.
       */
    }, {
      key: "delete",
      value: function _delete(key) {
        if (!this.has(key)) {
          return false;
        } // This naive implementation will leave orphaned child trees. A better
        // implementation should traverse and remove orphans.

        this.set(key, undefined);
        return true;
      }
      /**
       * Executes a provided function once per each key/value pair, in insertion
       * order.
       *
       * @param {Function} callback Function to execute for each element.
       * @param {*}        thisArg  Value to use as `this` when executing
       *                            `callback`.
       */
    }, {
      key: "forEach",
      value: function forEach(callback) {
        var _this = this;
        var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
        this._map.forEach(function (value, key) {
          // Unwrap value from object-like value pair.
          if (key !== null && _typeof$1(key) === 'object') {
            value = value[1];
          }
          callback.call(thisArg, value, key, _this);
        });
      }
      /**
       * Removes all elements.
       */
    }, {
      key: "clear",
      value: function clear() {
        this._map = new Map();
        this._arrayTreeMap = new Map();
        this._objectTreeMap = new Map();
      }
    }, {
      key: "size",
      get: function get() {
        return this._map.size;
      }
    }]);
    return EquivalentKeyMap;
  }();
  var equivalentKeyMap = EquivalentKeyMap;
  var EquivalentKeyMap$1 = /*@__PURE__*/getDefaultExportFromCjs$1(equivalentKeyMap);

  /* eslint-disable jsdoc/valid-types */
  /**
   * Returns true if the given object is a generator, or false otherwise.
   *
   * @see https://www.ecma-international.org/ecma-262/6.0/#sec-generator-objects
   *
   * @param {any} object Object to test.
   *
   * @return {object is Generator} Whether object is a generator.
   */
  function isGenerator(object) {
    /* eslint-enable jsdoc/valid-types */
    // Check that iterator (next) and iterable (Symbol.iterator) interfaces are satisfied.
    // These checks seem to be compatible with several generator helpers as well as the native implementation.
    return !!object && typeof object[Symbol.iterator] === 'function' && typeof object.next === 'function';
  }
  var dist = {};
  var helpers = {};
  var keys$1 = {};
  Object.defineProperty(keys$1, "__esModule", {
    value: true
  });
  var keys = {
    all: Symbol('all'),
    error: Symbol('error'),
    fork: Symbol('fork'),
    join: Symbol('join'),
    race: Symbol('race'),
    call: Symbol('call'),
    cps: Symbol('cps'),
    subscribe: Symbol('subscribe')
  };
  keys$1.default = keys;
  Object.defineProperty(helpers, "__esModule", {
    value: true
  });
  helpers.createChannel = helpers.subscribe = helpers.cps = helpers.apply = helpers.call = helpers.invoke = helpers.delay = helpers.race = helpers.join = helpers.fork = helpers.error = helpers.all = undefined;
  var _keys$1 = keys$1;
  var _keys2$1 = _interopRequireDefault$5(_keys$1);
  function _interopRequireDefault$5(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  helpers.all = function all(value) {
    return {
      type: _keys2$1.default.all,
      value: value
    };
  };
  helpers.error = function error(err) {
    return {
      type: _keys2$1.default.error,
      error: err
    };
  };
  helpers.fork = function fork(iterator) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return {
      type: _keys2$1.default.fork,
      iterator: iterator,
      args: args
    };
  };
  helpers.join = function join(task) {
    return {
      type: _keys2$1.default.join,
      task: task
    };
  };
  helpers.race = function race(competitors) {
    return {
      type: _keys2$1.default.race,
      competitors: competitors
    };
  };
  helpers.delay = function delay(timeout) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        return resolve(true);
      }, timeout);
    });
  };
  helpers.invoke = function invoke(func) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return {
      type: _keys2$1.default.call,
      func: func,
      context: null,
      args: args
    };
  };
  helpers.call = function call(func, context) {
    for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      args[_key3 - 2] = arguments[_key3];
    }
    return {
      type: _keys2$1.default.call,
      func: func,
      context: context,
      args: args
    };
  };
  helpers.apply = function apply(func, context, args) {
    return {
      type: _keys2$1.default.call,
      func: func,
      context: context,
      args: args
    };
  };
  helpers.cps = function cps(func) {
    for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }
    return {
      type: _keys2$1.default.cps,
      func: func,
      args: args
    };
  };
  helpers.subscribe = function subscribe(channel) {
    return {
      type: _keys2$1.default.subscribe,
      channel: channel
    };
  };
  helpers.createChannel = function createChannel(callback) {
    var listeners = [];
    var subscribe = function subscribe(l) {
      listeners.push(l);
      return function () {
        return listeners.splice(listeners.indexOf(l), 1);
      };
    };
    var next = function next(val) {
      return listeners.forEach(function (l) {
        return l(val);
      });
    };
    callback(next);
    return {
      subscribe: subscribe
    };
  };
  var create$1 = {};
  var builtin = {};
  var is$1 = {};
  Object.defineProperty(is$1, "__esModule", {
    value: true
  });
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };
  var _keys = keys$1;
  var _keys2 = _interopRequireDefault$4(_keys);
  function _interopRequireDefault$4(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var is = {
    obj: function obj(value) {
      return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !!value;
    },
    all: function all(value) {
      return is.obj(value) && value.type === _keys2.default.all;
    },
    error: function error(value) {
      return is.obj(value) && value.type === _keys2.default.error;
    },
    array: Array.isArray,
    func: function func(value) {
      return typeof value === 'function';
    },
    promise: function promise(value) {
      return value && is.func(value.then);
    },
    iterator: function iterator(value) {
      return value && is.func(value.next) && is.func(value.throw);
    },
    fork: function fork(value) {
      return is.obj(value) && value.type === _keys2.default.fork;
    },
    join: function join(value) {
      return is.obj(value) && value.type === _keys2.default.join;
    },
    race: function race(value) {
      return is.obj(value) && value.type === _keys2.default.race;
    },
    call: function call(value) {
      return is.obj(value) && value.type === _keys2.default.call;
    },
    cps: function cps(value) {
      return is.obj(value) && value.type === _keys2.default.cps;
    },
    subscribe: function subscribe(value) {
      return is.obj(value) && value.type === _keys2.default.subscribe;
    },
    channel: function channel(value) {
      return is.obj(value) && is.func(value.subscribe);
    }
  };
  is$1.default = is;
  Object.defineProperty(builtin, "__esModule", {
    value: true
  });
  builtin.iterator = builtin.array = builtin.object = builtin.error = builtin.any = undefined;
  var _is$3 = is$1;
  var _is2$3 = _interopRequireDefault$3(_is$3);
  function _interopRequireDefault$3(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var any = builtin.any = function any(value, next, rungen, yieldNext) {
    yieldNext(value);
    return true;
  };
  var error = builtin.error = function error(value, next, rungen, yieldNext, raiseNext) {
    if (!_is2$3.default.error(value)) return false;
    raiseNext(value.error);
    return true;
  };
  var object = builtin.object = function object(value, next, rungen, yieldNext, raiseNext) {
    if (!_is2$3.default.all(value) || !_is2$3.default.obj(value.value)) return false;
    var result = {};
    var keys = Object.keys(value.value);
    var count = 0;
    var hasError = false;
    var gotResultSuccess = function gotResultSuccess(key, ret) {
      if (hasError) return;
      result[key] = ret;
      count++;
      if (count === keys.length) {
        yieldNext(result);
      }
    };
    var gotResultError = function gotResultError(key, error) {
      if (hasError) return;
      hasError = true;
      raiseNext(error);
    };
    keys.map(function (key) {
      rungen(value.value[key], function (ret) {
        return gotResultSuccess(key, ret);
      }, function (err) {
        return gotResultError(key, err);
      });
    });
    return true;
  };
  var array = builtin.array = function array(value, next, rungen, yieldNext, raiseNext) {
    if (!_is2$3.default.all(value) || !_is2$3.default.array(value.value)) return false;
    var result = [];
    var count = 0;
    var hasError = false;
    var gotResultSuccess = function gotResultSuccess(key, ret) {
      if (hasError) return;
      result[key] = ret;
      count++;
      if (count === value.value.length) {
        yieldNext(result);
      }
    };
    var gotResultError = function gotResultError(key, error) {
      if (hasError) return;
      hasError = true;
      raiseNext(error);
    };
    value.value.map(function (v, key) {
      rungen(v, function (ret) {
        return gotResultSuccess(key, ret);
      }, function (err) {
        return gotResultError(key, err);
      });
    });
    return true;
  };
  var iterator = builtin.iterator = function iterator(value, next, rungen, yieldNext, raiseNext) {
    if (!_is2$3.default.iterator(value)) return false;
    rungen(value, next, raiseNext);
    return true;
  };
  builtin.default = [error, iterator, array, object, any];
  Object.defineProperty(create$1, "__esModule", {
    value: true
  });
  var _builtin = builtin;
  var _builtin2 = _interopRequireDefault$2(_builtin);
  var _is$2 = is$1;
  var _is2$2 = _interopRequireDefault$2(_is$2);
  function _interopRequireDefault$2(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function _toConsumableArray$1(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    } else {
      return Array.from(arr);
    }
  }
  var create = function create() {
    var userControls = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
    var controls = [].concat(_toConsumableArray$1(userControls), _toConsumableArray$1(_builtin2.default));
    var runtime = function runtime(input) {
      var success = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];
      var error = arguments.length <= 2 || arguments[2] === undefined ? function () {} : arguments[2];
      var iterate = function iterate(gen) {
        var yieldValue = function yieldValue(isError) {
          return function (ret) {
            try {
              var _ref = isError ? gen.throw(ret) : gen.next(ret);
              var value = _ref.value;
              var done = _ref.done;
              if (done) return success(value);
              next(value);
            } catch (e) {
              return error(e);
            }
          };
        };
        var next = function next(ret) {
          controls.some(function (control) {
            return control(ret, next, runtime, yieldValue(false), yieldValue(true));
          });
        };
        yieldValue(false)();
      };
      var iterator = _is2$2.default.iterator(input) ? input : regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return input;
              case 2:
                return _context.abrupt('return', _context.sent);
              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      })();
      iterate(iterator);
    };
    return runtime;
  };
  create$1.default = create;
  var async = {};
  var dispatcher = {};
  Object.defineProperty(dispatcher, "__esModule", {
    value: true
  });
  var createDispatcher = function createDispatcher() {
    var listeners = [];
    return {
      subscribe: function subscribe(listener) {
        listeners.push(listener);
        return function () {
          listeners = listeners.filter(function (l) {
            return l !== listener;
          });
        };
      },
      dispatch: function dispatch(action) {
        listeners.slice().forEach(function (listener) {
          return listener(action);
        });
      }
    };
  };
  dispatcher.default = createDispatcher;
  Object.defineProperty(async, "__esModule", {
    value: true
  });
  async.race = async.join = async.fork = async.promise = undefined;
  var _is$1 = is$1;
  var _is2$1 = _interopRequireDefault$1(_is$1);
  var _helpers = helpers;
  var _dispatcher = dispatcher;
  var _dispatcher2 = _interopRequireDefault$1(_dispatcher);
  function _interopRequireDefault$1(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var promise$1 = async.promise = function promise(value, next, rungen, yieldNext, raiseNext) {
    if (!_is2$1.default.promise(value)) return false;
    value.then(next, raiseNext);
    return true;
  };
  var forkedTasks = new Map();
  var fork = async.fork = function fork(value, next, rungen) {
    if (!_is2$1.default.fork(value)) return false;
    var task = Symbol('fork');
    var dispatcher = (0, _dispatcher2.default)();
    forkedTasks.set(task, dispatcher);
    rungen(value.iterator.apply(null, value.args), function (result) {
      return dispatcher.dispatch(result);
    }, function (err) {
      return dispatcher.dispatch((0, _helpers.error)(err));
    });
    var unsubscribe = dispatcher.subscribe(function () {
      unsubscribe();
      forkedTasks.delete(task);
    });
    next(task);
    return true;
  };
  var join = async.join = function join(value, next, rungen, yieldNext, raiseNext) {
    if (!_is2$1.default.join(value)) return false;
    var dispatcher = forkedTasks.get(value.task);
    if (!dispatcher) {
      raiseNext('join error : task not found');
    } else {
      (function () {
        var unsubscribe = dispatcher.subscribe(function (result) {
          unsubscribe();
          next(result);
        });
      })();
    }
    return true;
  };
  var race = async.race = function race(value, next, rungen, yieldNext, raiseNext) {
    if (!_is2$1.default.race(value)) return false;
    var finished = false;
    var success = function success(result, k, v) {
      if (finished) return;
      finished = true;
      result[k] = v;
      next(result);
    };
    var fail = function fail(err) {
      if (finished) return;
      raiseNext(err);
    };
    if (_is2$1.default.array(value.competitors)) {
      (function () {
        var result = value.competitors.map(function () {
          return false;
        });
        value.competitors.forEach(function (competitor, index) {
          rungen(competitor, function (output) {
            return success(result, index, output);
          }, fail);
        });
      })();
    } else {
      (function () {
        var result = Object.keys(value.competitors).reduce(function (p, c) {
          p[c] = false;
          return p;
        }, {});
        Object.keys(value.competitors).forEach(function (index) {
          rungen(value.competitors[index], function (output) {
            return success(result, index, output);
          }, fail);
        });
      })();
    }
    return true;
  };
  var subscribe = function subscribe(value, next) {
    if (!_is2$1.default.subscribe(value)) return false;
    if (!_is2$1.default.channel(value.channel)) {
      throw new Error('the first argument of "subscribe" must be a valid channel');
    }
    var unsubscribe = value.channel.subscribe(function (ret) {
      unsubscribe && unsubscribe();
      next(ret);
    });
    return true;
  };
  async.default = [promise$1, fork, join, race, subscribe];
  var wrap = {};
  Object.defineProperty(wrap, "__esModule", {
    value: true
  });
  wrap.cps = wrap.call = undefined;
  var _is = is$1;
  var _is2 = _interopRequireDefault(_is);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    } else {
      return Array.from(arr);
    }
  }
  var call = wrap.call = function call(value, next, rungen, yieldNext, raiseNext) {
    if (!_is2.default.call(value)) return false;
    try {
      next(value.func.apply(value.context, value.args));
    } catch (err) {
      raiseNext(err);
    }
    return true;
  };
  var cps = wrap.cps = function cps(value, next, rungen, yieldNext, raiseNext) {
    var _value$func;
    if (!_is2.default.cps(value)) return false;
    (_value$func = value.func).call.apply(_value$func, [null].concat(_toConsumableArray(value.args), [function (err, result) {
      if (err) raiseNext(err);else next(result);
    }]));
    return true;
  };
  wrap.default = [call, cps];
  (function (exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.wrapControls = exports.asyncControls = exports.create = undefined;
    var _helpers = helpers;
    Object.keys(_helpers).forEach(function (key) {
      if (key === "default") return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
          return _helpers[key];
        }
      });
    });
    var _create = create$1;
    var _create2 = _interopRequireDefault(_create);
    var _async = async;
    var _async2 = _interopRequireDefault(_async);
    var _wrap = wrap;
    var _wrap2 = _interopRequireDefault(_wrap);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    exports.create = _create2.default;
    exports.asyncControls = _async2.default;
    exports.wrapControls = _wrap2.default;
  })(dist);
  function isPromise(obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
  }

  /*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */

  function isObject(o) {
    return Object.prototype.toString.call(o) === '[object Object]';
  }
  function isPlainObject(o) {
    var ctor, prot;
    if (isObject(o) === false) return false;

    // If has modified constructor
    ctor = o.constructor;
    if (ctor === undefined) return true;

    // If has modified prototype
    prot = ctor.prototype;
    if (isObject(prot) === false) return false;

    // If constructor does not have an Object-specific method
    if (prot.hasOwnProperty('isPrototypeOf') === false) {
      return false;
    }

    // Most likely a plain Object
    return true;
  }

  /**
   * External dependencies
   */

  /* eslint-disable jsdoc/valid-types */
  /**
   * Returns true if the given object quacks like an action.
   *
   * @param {any} object Object to test
   *
   * @return {object is import('redux').AnyAction}  Whether object is an action.
   */
  function isAction(object) {
    return isPlainObject(object) && typeof object.type === 'string';
  }

  /**
   * Returns true if the given object quacks like an action and has a specific
   * action type
   *
   * @param {unknown} object       Object to test
   * @param {string}  expectedType The expected type for the action.
   *
   * @return {object is import('redux').AnyAction} Whether object is an action and is of specific type.
   */
  function isActionOfType(object, expectedType) {
    /* eslint-enable jsdoc/valid-types */
    return isAction(object) && object.type === expectedType;
  }

  /**
   * External dependencies
   */

  /**
   * Create a co-routine runtime.
   *
   * @param controls Object of control handlers.
   * @param dispatch Unhandled action dispatch.
   */
  function createRuntime(controls = {}, dispatch) {
    const rungenControls = Object.entries(controls).map(([actionType, control]) => (value, next, iterate, yieldNext, yieldError) => {
      if (!isActionOfType(value, actionType)) {
        return false;
      }
      const routine = control(value);
      if (isPromise(routine)) {
        // Async control routine awaits resolution.
        routine.then(yieldNext, yieldError);
      } else {
        yieldNext(routine);
      }
      return true;
    });
    const unhandledActionControl = (value, next) => {
      if (!isAction(value)) {
        return false;
      }
      dispatch(value);
      next();
      return true;
    };
    rungenControls.push(unhandledActionControl);
    const rungenRuntime = dist.create(rungenControls);
    return action => new Promise((resolve, reject) => rungenRuntime(action, result => {
      if (isAction(result)) {
        dispatch(result);
      }
      resolve(result);
    }, reject));
  }

  /**
   * Internal dependencies
   */

  /**
   * Creates a Redux middleware, given an object of controls where each key is an
   * action type for which to act upon, the value a function which returns either
   * a promise which is to resolve when evaluation of the action should continue,
   * or a value. The value or resolved promise value is assigned on the return
   * value of the yield assignment. If the control handler returns undefined, the
   * execution is not continued.
   *
   * @param {Record<string, (value: import('redux').AnyAction) => Promise<boolean> | boolean>} controls Object of control handlers.
   *
   * @return {import('redux').Middleware} Co-routine runtime
   */
  function createMiddleware(controls = {}) {
    return store => {
      const runtime = createRuntime(controls, store.dispatch);
      return next => action => {
        if (!isGenerator(action)) {
          return next(action);
        }
        return runtime(action);
      };
    };
  }

  /**
   * Parts of this source were derived and modified from lodash,
   * released under the MIT license.
   *
   * https://github.com/lodash/lodash
   *
   * Copyright JS Foundation and other contributors <https://js.foundation/>
   *
   * Based on Underscore.js, copyright Jeremy Ashkenas,
   * DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>
   *
   * This software consists of voluntary contributions made by many
   * individuals. For exact contribution history, see the revision history
   * available at https://github.com/lodash/lodash
   *
   * The following license applies to all parts of this software except as
   * documented below:
   *
   * ====
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
   * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
   * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */

  /**
   * Creates a pipe function.
   *
   * Allows to choose whether to perform left-to-right or right-to-left composition.
   *
   * @see https://docs-lodash.com/v4/flow/
   *
   * @param {boolean} reverse True if right-to-left, false for left-to-right composition.
   */
  const basePipe = (reverse = false) => (...funcs) => (...args) => {
    const functions = funcs.flat();
    if (reverse) {
      functions.reverse();
    }
    return functions.reduce((prev, func) => [func(...prev)], args)[0];
  };

  /**
   * Internal dependencies
   */

  /**
   * Composes multiple higher-order components into a single higher-order component. Performs right-to-left function
   * composition, where each successive invocation is supplied the return value of the previous.
   *
   * This is inspired by `lodash`'s `flowRight` function.
   *
   * @see https://docs-lodash.com/v4/flow-right/
   */
  const compose = basePipe(true);
  var compose$1 = compose;

  /**
   * Returns true if the two objects are shallow equal, or false otherwise.
   *
   * @param {import('.').ComparableObject} a First object to compare.
   * @param {import('.').ComparableObject} b Second object to compare.
   *
   * @return {boolean} Whether the two objects are shallow equal.
   */
  function isShallowEqualObjects(a, b) {
    if (a === b) {
      return true;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) {
      return false;
    }
    let i = 0;
    while (i < aKeys.length) {
      const key = aKeys[i];
      const aValue = a[key];
      if (
      // In iterating only the keys of the first object after verifying
      // equal lengths, account for the case that an explicit `undefined`
      // value in the first is implicitly undefined in the second.
      //
      // Example: isShallowEqualObjects( { a: undefined }, { b: 5 } )
      aValue === undefined && !b.hasOwnProperty(key) || aValue !== b[key]) {
        return false;
      }
      i++;
    }
    return true;
  }

  /**
   * Returns true if the two arrays are shallow equal, or false otherwise.
   *
   * @param {any[]} a First array to compare.
   * @param {any[]} b Second array to compare.
   *
   * @return {boolean} Whether the two arrays are shallow equal.
   */
  function isShallowEqualArrays(a, b) {
    if (a === b) {
      return true;
    }
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0, len = a.length; i < len; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }

  /**
   * Internal dependencies
   */

  /**
   * @typedef {Record<string, any>} ComparableObject
   */

  /**
   * Returns true if the two arrays or objects are shallow equal, or false
   * otherwise. Also handles primitive values, just in case.
   *
   * @param {unknown} a First object or array to compare.
   * @param {unknown} b Second object or array to compare.
   *
   * @return {boolean} Whether the two values are shallow equal.
   */
  function isShallowEqual$1(a, b) {
    if (a && b) {
      if (a.constructor === Object && b.constructor === Object) {
        return isShallowEqualObjects(a, b);
      } else if (Array.isArray(a) && Array.isArray(b)) {
        return isShallowEqualArrays(a, b);
      }
    }
    return a === b;
  }
  var requestidlecallback = {
    exports: {}
  };
  (function (module) {
    (function (factory) {
      if (module.exports) {
        module.exports = factory();
      } else {
        window.idleCallbackShim = factory();
      }
    })(function () {
      var scheduleStart, throttleDelay, lazytimer, lazyraf;
      var root = typeof window != 'undefined' ? window : typeof commonjsGlobal != undefined ? commonjsGlobal : this || {};
      var requestAnimationFrame = root.cancelRequestAnimationFrame && root.requestAnimationFrame || setTimeout;
      var cancelRequestAnimationFrame = root.cancelRequestAnimationFrame || clearTimeout;
      var tasks = [];
      var runAttempts = 0;
      var isRunning = false;
      var remainingTime = 7;
      var minThrottle = 35;
      var throttle = 125;
      var index = 0;
      var taskStart = 0;
      var tasklength = 0;
      var IdleDeadline = {
        get didTimeout() {
          return false;
        },
        timeRemaining: function () {
          var timeRemaining = remainingTime - (Date.now() - taskStart);
          return timeRemaining < 0 ? 0 : timeRemaining;
        }
      };
      var setInactive = debounce(function () {
        remainingTime = 22;
        throttle = 66;
        minThrottle = 0;
      });
      function debounce(fn) {
        var id, timestamp;
        var wait = 99;
        var check = function () {
          var last = Date.now() - timestamp;
          if (last < wait) {
            id = setTimeout(check, wait - last);
          } else {
            id = null;
            fn();
          }
        };
        return function () {
          timestamp = Date.now();
          if (!id) {
            id = setTimeout(check, wait);
          }
        };
      }
      function abortRunning() {
        if (isRunning) {
          if (lazyraf) {
            cancelRequestAnimationFrame(lazyraf);
          }
          if (lazytimer) {
            clearTimeout(lazytimer);
          }
          isRunning = false;
        }
      }
      function onInputorMutation() {
        if (throttle != 125) {
          remainingTime = 7;
          throttle = 125;
          minThrottle = 35;
          if (isRunning) {
            abortRunning();
            scheduleLazy();
          }
        }
        setInactive();
      }
      function scheduleAfterRaf() {
        lazyraf = null;
        lazytimer = setTimeout(runTasks, 0);
      }
      function scheduleRaf() {
        lazytimer = null;
        requestAnimationFrame(scheduleAfterRaf);
      }
      function scheduleLazy() {
        if (isRunning) {
          return;
        }
        throttleDelay = throttle - (Date.now() - taskStart);
        scheduleStart = Date.now();
        isRunning = true;
        if (minThrottle && throttleDelay < minThrottle) {
          throttleDelay = minThrottle;
        }
        if (throttleDelay > 9) {
          lazytimer = setTimeout(scheduleRaf, throttleDelay);
        } else {
          throttleDelay = 0;
          scheduleRaf();
        }
      }
      function runTasks() {
        var task, i, len;
        var timeThreshold = remainingTime > 9 ? 9 : 1;
        taskStart = Date.now();
        isRunning = false;
        lazytimer = null;
        if (runAttempts > 2 || taskStart - throttleDelay - 50 < scheduleStart) {
          for (i = 0, len = tasks.length; i < len && IdleDeadline.timeRemaining() > timeThreshold; i++) {
            task = tasks.shift();
            tasklength++;
            if (task) {
              task(IdleDeadline);
            }
          }
        }
        if (tasks.length) {
          scheduleLazy();
        } else {
          runAttempts = 0;
        }
      }
      function requestIdleCallbackShim(task) {
        index++;
        tasks.push(task);
        scheduleLazy();
        return index;
      }
      function cancelIdleCallbackShim(id) {
        var index = id - 1 - tasklength;
        if (tasks[index]) {
          tasks[index] = null;
        }
      }
      if (!root.requestIdleCallback || !root.cancelIdleCallback) {
        root.requestIdleCallback = requestIdleCallbackShim;
        root.cancelIdleCallback = cancelIdleCallbackShim;
        if (root.document && document.addEventListener) {
          root.addEventListener('scroll', onInputorMutation, true);
          root.addEventListener('resize', onInputorMutation);
          document.addEventListener('focus', onInputorMutation, true);
          document.addEventListener('mouseover', onInputorMutation, true);
          ['click', 'keypress', 'touchstart', 'mousedown'].forEach(function (name) {
            document.addEventListener(name, onInputorMutation, {
              capture: true,
              passive: true
            });
          });
          if (root.MutationObserver) {
            new MutationObserver(onInputorMutation).observe(document.documentElement, {
              childList: true,
              subtree: true,
              attributes: true
            });
          }
        }
      } else {
        try {
          root.requestIdleCallback(function () {}, {
            timeout: 0
          });
        } catch (e) {
          (function (rIC) {
            var timeRemainingProto, timeRemaining;
            root.requestIdleCallback = function (fn, timeout) {
              if (timeout && typeof timeout.timeout == 'number') {
                return rIC(fn, timeout.timeout);
              }
              return rIC(fn);
            };
            if (root.IdleCallbackDeadline && (timeRemainingProto = IdleCallbackDeadline.prototype)) {
              timeRemaining = Object.getOwnPropertyDescriptor(timeRemainingProto, 'timeRemaining');
              if (!timeRemaining || !timeRemaining.configurable || !timeRemaining.get) {
                return;
              }
              Object.defineProperty(timeRemainingProto, 'timeRemaining', {
                value: function () {
                  return timeRemaining.get.call(this);
                },
                enumerable: true,
                configurable: true
              });
            }
          })(root.requestIdleCallback);
        }
      }
      return {
        request: requestIdleCallbackShim,
        cancel: cancelIdleCallbackShim
      };
    });
  })(requestidlecallback);

  /**
   * External dependencies
   */

  /**
   * @typedef {( timeOrDeadline: IdleDeadline | number ) => void} Callback
   */

  /**
   * @return {(callback: Callback) => void} RequestIdleCallback
   */
  function createRequestIdleCallback() {
    if (typeof window === 'undefined') {
      return callback => {
        setTimeout(() => callback(Date.now()), 0);
      };
    }
    return window.requestIdleCallback;
  }
  var requestIdleCallback = createRequestIdleCallback();

  /**
   * Internal dependencies
   */

  /**
   * Enqueued callback to invoke once idle time permits.
   *
   * @typedef {()=>void} WPPriorityQueueCallback
   */

  /**
   * An object used to associate callbacks in a particular context grouping.
   *
   * @typedef {{}} WPPriorityQueueContext
   */

  /**
   * Function to add callback to priority queue.
   *
   * @typedef {(element:WPPriorityQueueContext,item:WPPriorityQueueCallback)=>void} WPPriorityQueueAdd
   */

  /**
   * Function to flush callbacks from priority queue.
   *
   * @typedef {(element:WPPriorityQueueContext)=>boolean} WPPriorityQueueFlush
   */

  /**
   * Reset the queue.
   *
   * @typedef {()=>void} WPPriorityQueueReset
   */

  /**
   * Priority queue instance.
   *
   * @typedef {Object} WPPriorityQueue
   *
   * @property {WPPriorityQueueAdd}   add    Add callback to queue for context.
   * @property {WPPriorityQueueFlush} flush  Flush queue for context.
   * @property {WPPriorityQueueFlush} cancel Clear queue for context.
   * @property {WPPriorityQueueReset} reset  Reset queue.
   */

  /**
   * Creates a context-aware queue that only executes
   * the last task of a given context.
   *
   * @example
   *```js
   * import { createQueue } from '@wordpress/priority-queue';
   *
   * const queue = createQueue();
   *
   * // Context objects.
   * const ctx1 = {};
   * const ctx2 = {};
   *
   * // For a given context in the queue, only the last callback is executed.
   * queue.add( ctx1, () => console.log( 'This will be printed first' ) );
   * queue.add( ctx2, () => console.log( 'This won\'t be printed' ) );
   * queue.add( ctx2, () => console.log( 'This will be printed second' ) );
   *```
   *
   * @return {WPPriorityQueue} Queue object with `add`, `flush` and `reset` methods.
   */
  const createQueue = () => {
    /** @type {Map<WPPriorityQueueContext, WPPriorityQueueCallback>} */
    const waitingList = new Map();
    let isRunning = false;

    /**
     * Callback to process as much queue as time permits.
     *
     * Map Iteration follows the original insertion order. This means that here
     * we can iterate the queue and know that the first contexts which were
     * added will be run first. On the other hand, if anyone adds a new callback
     * for an existing context it will supplant the previously-set callback for
     * that context because we reassigned that map key's value.
     *
     * In the case that a callback adds a new callback to its own context then
     * the callback it adds will appear at the end of the iteration and will be
     * run only after all other existing contexts have finished executing.
     *
     * @param {IdleDeadline|number} deadline Idle callback deadline object, or
     *                                       animation frame timestamp.
     */
    const runWaitingList = deadline => {
      for (const [nextElement, callback] of waitingList) {
        waitingList.delete(nextElement);
        callback();
        if ('number' === typeof deadline || deadline.timeRemaining() <= 0) {
          break;
        }
      }
      if (waitingList.size === 0) {
        isRunning = false;
        return;
      }
      requestIdleCallback(runWaitingList);
    };

    /**
     * Add a callback to the queue for a given context.
     *
     * If errors with undefined callbacks are encountered double check that
     * all of your useSelect calls have the right dependencies set correctly
     * in their second parameter. Missing dependencies can cause unexpected
     * loops and race conditions in the queue.
     *
     * @type {WPPriorityQueueAdd}
     *
     * @param {WPPriorityQueueContext}  element Context object.
     * @param {WPPriorityQueueCallback} item    Callback function.
     */
    const add = (element, item) => {
      waitingList.set(element, item);
      if (!isRunning) {
        isRunning = true;
        requestIdleCallback(runWaitingList);
      }
    };

    /**
     * Flushes queue for a given context, returning true if the flush was
     * performed, or false if there is no queue for the given context.
     *
     * @type {WPPriorityQueueFlush}
     *
     * @param {WPPriorityQueueContext} element Context object.
     *
     * @return {boolean} Whether flush was performed.
     */
    const flush = element => {
      const callback = waitingList.get(element);
      if (undefined === callback) {
        return false;
      }
      waitingList.delete(element);
      callback();
      return true;
    };

    /**
     * Clears the queue for a given context, cancelling the callbacks without
     * executing them. Returns `true` if there were scheduled callbacks to cancel,
     * or `false` if there was is no queue for the given context.
     *
     * @type {WPPriorityQueueFlush}
     *
     * @param {WPPriorityQueueContext} element Context object.
     *
     * @return {boolean} Whether any callbacks got cancelled.
     */
    const cancel = element => {
      return waitingList.delete(element);
    };

    /**
     * Reset the queue without running the pending callbacks.
     *
     * @type {WPPriorityQueueReset}
     */
    const reset = () => {
      waitingList.clear();
      isRunning = false;
    };
    return {
      add,
      flush,
      cancel,
      reset
    };
  };
  function combineReducers(reducers) {
    const keys = Object.keys(reducers);
    return function combinedReducer(state = {}, action) {
      const nextState = {};
      let hasChanged = false;
      for (const key of keys) {
        const reducer = reducers[key];
        const prevStateForKey = state[key];
        const nextStateForKey = reducer(prevStateForKey, action);
        nextState[key] = nextStateForKey;
        hasChanged = hasChanged || nextStateForKey !== prevStateForKey;
      }
      return hasChanged ? nextState : state;
    };
  }

  /**
   * Creates a selector function that takes additional curried argument with the
   * registry `select` function. While a regular selector has signature
   * ```js
   * ( state, ...selectorArgs ) => ( result )
   * ```
   * that allows to select data from the store's `state`, a registry selector
   * has signature:
   * ```js
   * ( select ) => ( state, ...selectorArgs ) => ( result )
   * ```
   * that supports also selecting from other registered stores.
   *
   * @example
   * ```js
   * import { store as coreStore } from '@wordpress/core-data';
   * import { store as editorStore } from '@wordpress/editor';
   *
   * const getCurrentPostId = createRegistrySelector( ( select ) => ( state ) => {
   *   return select( editorStore ).getCurrentPostId();
   * } );
   *
   * const getPostEdits = createRegistrySelector( ( select ) => ( state ) => {
   *   // calling another registry selector just like any other function
   *   const postType = getCurrentPostType( state );
   *   const postId = getCurrentPostId( state );
   *	 return select( coreStore ).getEntityRecordEdits( 'postType', postType, postId );
   * } );
   * ```
   *
   * Note how the `getCurrentPostId` selector can be called just like any other function,
   * (it works even inside a regular non-registry selector) and we don't need to pass the
   * registry as argument. The registry binding happens automatically when registering the selector
   * with a store.
   *
   * @param {Function} registrySelector Function receiving a registry `select`
   *                                    function and returning a state selector.
   *
   * @return {Function} Registry selector that can be registered with a store.
   */

  /**
   * Creates a control function that takes additional curried argument with the `registry` object.
   * While a regular control has signature
   * ```js
   * ( action ) => ( iteratorOrPromise )
   * ```
   * where the control works with the `action` that it's bound to, a registry control has signature:
   * ```js
   * ( registry ) => ( action ) => ( iteratorOrPromise )
   * ```
   * A registry control is typically used to select data or dispatch an action to a registered
   * store.
   *
   * When registering a control created with `createRegistryControl` with a store, the store
   * knows which calling convention to use when executing the control.
   *
   * @param {Function} registryControl Function receiving a registry object and returning a control.
   *
   * @return {Function} Registry control that can be registered with a store.
   */
  function createRegistryControl(registryControl) {
    registryControl.isRegistryControl = true;
    return registryControl;
  }

  /**
   * Internal dependencies
   */

  /** @typedef {import('./types').StoreDescriptor} StoreDescriptor */

  const SELECT = '@@data/SELECT';
  const RESOLVE_SELECT = '@@data/RESOLVE_SELECT';
  const DISPATCH = '@@data/DISPATCH';
  const builtinControls = {
    [SELECT]: createRegistryControl(registry => ({
      storeKey,
      selectorName,
      args
    }) => registry.select(storeKey)[selectorName](...args)),
    [RESOLVE_SELECT]: createRegistryControl(registry => ({
      storeKey,
      selectorName,
      args
    }) => {
      const method = registry.select(storeKey)[selectorName].hasResolver ? 'resolveSelect' : 'select';
      return registry[method](storeKey)[selectorName](...args);
    }),
    [DISPATCH]: createRegistryControl(registry => ({
      storeKey,
      actionName,
      args
    }) => registry.dispatch(storeKey)[actionName](...args))
  };

  /**
   * wordpress/private-apis – the utilities to enable private cross-package
   * exports of private APIs.
   *
   * This "implementation.js" file is needed for the sake of the unit tests. It
   * exports more than the public API of the package to aid in testing.
   */

  /**
   * The list of core modules allowed to opt-in to the private APIs.
   */
  const CORE_MODULES_USING_PRIVATE_APIS = ['@wordpress/block-editor', '@wordpress/block-library', '@wordpress/blocks', '@wordpress/commands', '@wordpress/components', '@wordpress/core-commands', '@wordpress/core-data', '@wordpress/customize-widgets', '@wordpress/data', '@wordpress/edit-post', '@wordpress/edit-site', '@wordpress/edit-widgets', '@wordpress/editor', '@wordpress/patterns', '@wordpress/reusable-blocks', '@wordpress/router'];

  /**
   * A list of core modules that already opted-in to
   * the privateApis package.
   *
   * @type {string[]}
   */
  const registeredPrivateApis = [];

  /*
   * Warning for theme and plugin developers.
   *
   * The use of private developer APIs is intended for use by WordPress Core
   * and the Gutenberg plugin exclusively.
   *
   * Dangerously opting in to using these APIs is NOT RECOMMENDED. Furthermore,
   * the WordPress Core philosophy to strive to maintain backward compatibility
   * for third-party developers DOES NOT APPLY to private APIs.
   *
   * THE CONSENT STRING FOR OPTING IN TO THESE APIS MAY CHANGE AT ANY TIME AND
   * WITHOUT NOTICE. THIS CHANGE WILL BREAK EXISTING THIRD-PARTY CODE. SUCH A
   * CHANGE MAY OCCUR IN EITHER A MAJOR OR MINOR RELEASE.
   */
  const requiredConsent = 'I know using unstable features means my plugin or theme will inevitably break on the next WordPress release.';

  /** @type {boolean} */
  let allowReRegistration;
  // The safety measure is meant for WordPress core where IS_WORDPRESS_CORE
  // is set to true.
  // For the general use-case, the re-registration should be allowed by default
  // Let's default to true, then. Try/catch will fall back to "true" even if the
  // environment variable is not explicitly defined.
  try {
    allowReRegistration = process.env.IS_WORDPRESS_CORE ? false : true;
  } catch (error) {
    allowReRegistration = true;
  }

  /**
   * Called by a @wordpress package wishing to opt-in to accessing or exposing
   * private private APIs.
   *
   * @param {string} consent    The consent string.
   * @param {string} moduleName The name of the module that is opting in.
   * @return {{lock: typeof lock, unlock: typeof unlock}} An object containing the lock and unlock functions.
   */
  const __dangerousOptInToUnstableAPIsOnlyForCoreModules = (consent, moduleName) => {
    if (!CORE_MODULES_USING_PRIVATE_APIS.includes(moduleName)) {
      throw new Error(`You tried to opt-in to unstable APIs as module "${moduleName}". ` + 'This feature is only for JavaScript modules shipped with WordPress core. ' + 'Please do not use it in plugins and themes as the unstable APIs will be removed ' + 'without a warning. If you ignore this error and depend on unstable features, ' + 'your product will inevitably break on one of the next WordPress releases.');
    }
    if (!allowReRegistration && registeredPrivateApis.includes(moduleName)) {
      // This check doesn't play well with Story Books / Hot Module Reloading
      // and isn't included in the Gutenberg plugin. It only matters in the
      // WordPress core release.
      throw new Error(`You tried to opt-in to unstable APIs as module "${moduleName}" which is already registered. ` + 'This feature is only for JavaScript modules shipped with WordPress core. ' + 'Please do not use it in plugins and themes as the unstable APIs will be removed ' + 'without a warning. If you ignore this error and depend on unstable features, ' + 'your product will inevitably break on one of the next WordPress releases.');
    }
    if (consent !== requiredConsent) {
      throw new Error(`You tried to opt-in to unstable APIs without confirming you know the consequences. ` + 'This feature is only for JavaScript modules shipped with WordPress core. ' + 'Please do not use it in plugins and themes as the unstable APIs will removed ' + 'without a warning. If you ignore this error and depend on unstable features, ' + 'your product will inevitably break on the next WordPress release.');
    }
    registeredPrivateApis.push(moduleName);
    return {
      lock: lock$1,
      unlock: unlock$1
    };
  };

  /**
   * Binds private data to an object.
   * It does not alter the passed object in any way, only
   * registers it in an internal map of private data.
   *
   * The private data can't be accessed by any other means
   * than the `unlock` function.
   *
   * @example
   * ```js
   * const object = {};
   * const privateData = { a: 1 };
   * lock( object, privateData );
   *
   * object
   * // {}
   *
   * unlock( object );
   * // { a: 1 }
   * ```
   *
   * @param {any} object      The object to bind the private data to.
   * @param {any} privateData The private data to bind to the object.
   */
  function lock$1(object, privateData) {
    if (!object) {
      throw new Error('Cannot lock an undefined object.');
    }
    if (!(__private in object)) {
      object[__private] = {};
    }
    lockedData.set(object[__private], privateData);
  }

  /**
   * Unlocks the private data bound to an object.
   *
   * It does not alter the passed object in any way, only
   * returns the private data paired with it using the `lock()`
   * function.
   *
   * @example
   * ```js
   * const object = {};
   * const privateData = { a: 1 };
   * lock( object, privateData );
   *
   * object
   * // {}
   *
   * unlock( object );
   * // { a: 1 }
   * ```
   *
   * @param {any} object The object to unlock the private data from.
   * @return {any} The private data bound to the object.
   */
  function unlock$1(object) {
    if (!object) {
      throw new Error('Cannot unlock an undefined object.');
    }
    if (!(__private in object)) {
      throw new Error('Cannot unlock an object that was not locked before. ');
    }
    return lockedData.get(object[__private]);
  }
  const lockedData = new WeakMap();

  /**
   * Used by lock() and unlock() to uniquely identify the private data
   * related to a containing object.
   */
  const __private = Symbol('Private API ID');

  /**
   * WordPress dependencies
   */
  const {
    lock,
    unlock
  } = __dangerousOptInToUnstableAPIsOnlyForCoreModules('I know using unstable features means my plugin or theme will inevitably break on the next WordPress release.', '@wordpress/data');

  /**
   * External dependencies
   */

  /**
   * Simplest possible promise redux middleware.
   *
   * @type {import('redux').Middleware}
   */
  const promiseMiddleware = () => next => action => {
    if (isPromise(action)) {
      return action.then(resolvedAction => {
        if (resolvedAction) {
          return next(resolvedAction);
        }
      });
    }
    return next(action);
  };
  var promise = promiseMiddleware;

  /** @typedef {import('./registry').WPDataRegistry} WPDataRegistry */

  /**
   * Creates a middleware handling resolvers cache invalidation.
   *
   * @param {WPDataRegistry} registry  Registry for which to create the middleware.
   * @param {string}         storeName Name of the store for which to create the middleware.
   *
   * @return {Function} Middleware function.
   */
  const createResolversCacheMiddleware = (registry, storeName) => () => next => action => {
    const resolvers = registry.select(storeName).getCachedResolvers();
    const resolverEntries = Object.entries(resolvers);
    resolverEntries.forEach(([selectorName, resolversByArgs]) => {
      const resolver = registry.stores[storeName]?.resolvers?.[selectorName];
      if (!resolver || !resolver.shouldInvalidate) {
        return;
      }
      resolversByArgs.forEach((value, args) => {
        // Works around a bug in `EquivalentKeyMap` where `map.delete` merely sets an entry value
        // to `undefined` and `map.forEach` then iterates also over these orphaned entries.
        if (value === undefined) {
          return;
        }

        // resolversByArgs is the map Map([ args ] => boolean) storing the cache resolution status for a given selector.
        // If the value is "finished" or "error" it means this resolver has finished its resolution which means we need
        // to invalidate it, if it's true it means it's inflight and the invalidation is not necessary.
        if (value.status !== 'finished' && value.status !== 'error') {
          return;
        }
        if (!resolver.shouldInvalidate(action, ...args)) {
          return;
        }

        // Trigger cache invalidation
        registry.dispatch(storeName).invalidateResolution(selectorName, args);
      });
    });
    return next(action);
  };
  var createResolversCacheMiddleware$1 = createResolversCacheMiddleware;
  function createThunkMiddleware(args) {
    return () => next => action => {
      if (typeof action === 'function') {
        return action(args);
      }
      return next(action);
    };
  }

  /**
   * External dependencies
   */

  /**
   * Higher-order reducer creator which creates a combined reducer object, keyed
   * by a property on the action object.
   *
   * @param actionProperty Action property by which to key object.
   * @return Higher-order reducer.
   */
  const onSubKey = actionProperty => reducer => (state = {}, action) => {
    // Retrieve subkey from action. Do not track if undefined; useful for cases
    // where reducer is scoped by action shape.
    const key = action[actionProperty];
    if (key === undefined) {
      return state;
    }

    // Avoid updating state if unchanged. Note that this also accounts for a
    // reducer which returns undefined on a key which is not yet tracked.
    const nextKeyState = reducer(state[key], action);
    if (nextKeyState === state[key]) {
      return state;
    }
    return {
      ...state,
      [key]: nextKeyState
    };
  };

  /**
   * Normalize selector argument array by defaulting `undefined` value to an empty array
   * and removing trailing `undefined` values.
   *
   * @param args Selector argument array
   * @return Normalized state key array
   */
  function selectorArgsToStateKey(args) {
    if (args === undefined || args === null) {
      return [];
    }
    const len = args.length;
    let idx = len;
    while (idx > 0 && args[idx - 1] === undefined) {
      idx--;
    }
    return idx === len ? args : args.slice(0, idx);
  }

  /**
   * External dependencies
   */
  /**
   * Reducer function returning next state for selector resolution of
   * subkeys, object form:
   *
   *  selectorName -> EquivalentKeyMap<Array,boolean>
   */
  const subKeysIsResolved = onSubKey('selectorName')((state = new EquivalentKeyMap$1(), action) => {
    switch (action.type) {
      case 'START_RESOLUTION':
        {
          const nextState = new EquivalentKeyMap$1(state);
          nextState.set(selectorArgsToStateKey(action.args), {
            status: 'resolving'
          });
          return nextState;
        }
      case 'FINISH_RESOLUTION':
        {
          const nextState = new EquivalentKeyMap$1(state);
          nextState.set(selectorArgsToStateKey(action.args), {
            status: 'finished'
          });
          return nextState;
        }
      case 'FAIL_RESOLUTION':
        {
          const nextState = new EquivalentKeyMap$1(state);
          nextState.set(selectorArgsToStateKey(action.args), {
            status: 'error',
            error: action.error
          });
          return nextState;
        }
      case 'START_RESOLUTIONS':
        {
          const nextState = new EquivalentKeyMap$1(state);
          for (const resolutionArgs of action.args) {
            nextState.set(selectorArgsToStateKey(resolutionArgs), {
              status: 'resolving'
            });
          }
          return nextState;
        }
      case 'FINISH_RESOLUTIONS':
        {
          const nextState = new EquivalentKeyMap$1(state);
          for (const resolutionArgs of action.args) {
            nextState.set(selectorArgsToStateKey(resolutionArgs), {
              status: 'finished'
            });
          }
          return nextState;
        }
      case 'FAIL_RESOLUTIONS':
        {
          const nextState = new EquivalentKeyMap$1(state);
          action.args.forEach((resolutionArgs, idx) => {
            const resolutionState = {
              status: 'error',
              error: undefined
            };
            const error = action.errors[idx];
            if (error) {
              resolutionState.error = error;
            }
            nextState.set(selectorArgsToStateKey(resolutionArgs), resolutionState);
          });
          return nextState;
        }
      case 'INVALIDATE_RESOLUTION':
        {
          const nextState = new EquivalentKeyMap$1(state);
          nextState.delete(selectorArgsToStateKey(action.args));
          return nextState;
        }
    }
    return state;
  });

  /**
   * Reducer function returning next state for selector resolution, object form:
   *
   *   selectorName -> EquivalentKeyMap<Array, boolean>
   *
   * @param state  Current state.
   * @param action Dispatched action.
   *
   * @return Next state.
   */
  const isResolved = (state = {}, action) => {
    switch (action.type) {
      case 'INVALIDATE_RESOLUTION_FOR_STORE':
        return {};
      case 'INVALIDATE_RESOLUTION_FOR_STORE_SELECTOR':
        {
          if (action.selectorName in state) {
            const {
              [action.selectorName]: removedSelector,
              ...restState
            } = state;
            return restState;
          }
          return state;
        }
      case 'START_RESOLUTION':
      case 'FINISH_RESOLUTION':
      case 'FAIL_RESOLUTION':
      case 'START_RESOLUTIONS':
      case 'FINISH_RESOLUTIONS':
      case 'FAIL_RESOLUTIONS':
      case 'INVALIDATE_RESOLUTION':
        return subKeysIsResolved(state, action);
    }
    return state;
  };
  var metadataReducer = isResolved;

  /** @typedef {(...args: any[]) => *[]} GetDependants */

  /** @typedef {() => void} Clear */

  /**
   * @typedef {{
   *   getDependants: GetDependants,
   *   clear: Clear
   * }} EnhancedSelector
   */

  /**
   * Internal cache entry.
   *
   * @typedef CacheNode
   *
   * @property {?CacheNode|undefined} [prev] Previous node.
   * @property {?CacheNode|undefined} [next] Next node.
   * @property {*[]} args Function arguments for cache entry.
   * @property {*} val Function result.
   */

  /**
   * @typedef Cache
   *
   * @property {Clear} clear Function to clear cache.
   * @property {boolean} [isUniqueByDependants] Whether dependants are valid in
   * considering cache uniqueness. A cache is unique if dependents are all arrays
   * or objects.
   * @property {CacheNode?} [head] Cache head.
   * @property {*[]} [lastDependants] Dependants from previous invocation.
   */

  /**
   * Arbitrary value used as key for referencing cache object in WeakMap tree.
   *
   * @type {{}}
   */
  var LEAF_KEY = {};

  /**
   * Returns the first argument as the sole entry in an array.
   *
   * @template T
   *
   * @param {T} value Value to return.
   *
   * @return {[T]} Value returned as entry in array.
   */
  function arrayOf(value) {
    return [value];
  }

  /**
   * Returns true if the value passed is object-like, or false otherwise. A value
   * is object-like if it can support property assignment, e.g. object or array.
   *
   * @param {*} value Value to test.
   *
   * @return {boolean} Whether value is object-like.
   */
  function isObjectLike(value) {
    return !!value && 'object' === typeof value;
  }

  /**
   * Creates and returns a new cache object.
   *
   * @return {Cache} Cache object.
   */
  function createCache() {
    /** @type {Cache} */
    var cache = {
      clear: function () {
        cache.head = null;
      }
    };
    return cache;
  }

  /**
   * Returns true if entries within the two arrays are strictly equal by
   * reference from a starting index.
   *
   * @param {*[]} a First array.
   * @param {*[]} b Second array.
   * @param {number} fromIndex Index from which to start comparison.
   *
   * @return {boolean} Whether arrays are shallowly equal.
   */
  function isShallowEqual(a, b, fromIndex) {
    var i;
    if (a.length !== b.length) {
      return false;
    }
    for (i = fromIndex; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }

  /**
   * Returns a memoized selector function. The getDependants function argument is
   * called before the memoized selector and is expected to return an immutable
   * reference or array of references on which the selector depends for computing
   * its own return value. The memoize cache is preserved only as long as those
   * dependant references remain the same. If getDependants returns a different
   * reference(s), the cache is cleared and the selector value regenerated.
   *
   * @template {(...args: *[]) => *} S
   *
   * @param {S} selector Selector function.
   * @param {GetDependants=} getDependants Dependant getter returning an array of
   * references used in cache bust consideration.
   */
  function createSelector(selector, getDependants) {
    /** @type {WeakMap<*,*>} */
    var rootCache;

    /** @type {GetDependants} */
    var normalizedGetDependants = getDependants ? getDependants : arrayOf;

    /**
     * Returns the cache for a given dependants array. When possible, a WeakMap
     * will be used to create a unique cache for each set of dependants. This
     * is feasible due to the nature of WeakMap in allowing garbage collection
     * to occur on entries where the key object is no longer referenced. Since
     * WeakMap requires the key to be an object, this is only possible when the
     * dependant is object-like. The root cache is created as a hierarchy where
     * each top-level key is the first entry in a dependants set, the value a
     * WeakMap where each key is the next dependant, and so on. This continues
     * so long as the dependants are object-like. If no dependants are object-
     * like, then the cache is shared across all invocations.
     *
     * @see isObjectLike
     *
     * @param {*[]} dependants Selector dependants.
     *
     * @return {Cache} Cache object.
     */
    function getCache(dependants) {
      var caches = rootCache,
        isUniqueByDependants = true,
        i,
        dependant,
        map,
        cache;
      for (i = 0; i < dependants.length; i++) {
        dependant = dependants[i];

        // Can only compose WeakMap from object-like key.
        if (!isObjectLike(dependant)) {
          isUniqueByDependants = false;
          break;
        }

        // Does current segment of cache already have a WeakMap?
        if (caches.has(dependant)) {
          // Traverse into nested WeakMap.
          caches = caches.get(dependant);
        } else {
          // Create, set, and traverse into a new one.
          map = new WeakMap();
          caches.set(dependant, map);
          caches = map;
        }
      }

      // We use an arbitrary (but consistent) object as key for the last item
      // in the WeakMap to serve as our running cache.
      if (!caches.has(LEAF_KEY)) {
        cache = createCache();
        cache.isUniqueByDependants = isUniqueByDependants;
        caches.set(LEAF_KEY, cache);
      }
      return caches.get(LEAF_KEY);
    }

    /**
     * Resets root memoization cache.
     */
    function clear() {
      rootCache = new WeakMap();
    }

    /* eslint-disable jsdoc/check-param-names */
    /**
     * The augmented selector call, considering first whether dependants have
     * changed before passing it to underlying memoize function.
     *
     * @param {*}    source    Source object for derivation.
     * @param {...*} extraArgs Additional arguments to pass to selector.
     *
     * @return {*} Selector result.
     */
    /* eslint-enable jsdoc/check-param-names */
    function callSelector( /* source, ...extraArgs */
    ) {
      var len = arguments.length,
        cache,
        node,
        i,
        args,
        dependants;

      // Create copy of arguments (avoid leaking deoptimization).
      args = new Array(len);
      for (i = 0; i < len; i++) {
        args[i] = arguments[i];
      }
      dependants = normalizedGetDependants.apply(null, args);
      cache = getCache(dependants);

      // If not guaranteed uniqueness by dependants (primitive type), shallow
      // compare against last dependants and, if references have changed,
      // destroy cache to recalculate result.
      if (!cache.isUniqueByDependants) {
        if (cache.lastDependants && !isShallowEqual(dependants, cache.lastDependants, 0)) {
          cache.clear();
        }
        cache.lastDependants = dependants;
      }
      node = cache.head;
      while (node) {
        // Check whether node arguments match arguments
        if (!isShallowEqual(node.args, args, 1)) {
          node = node.next;
          continue;
        }

        // At this point we can assume we've found a match

        // Surface matched node to head if not already
        if (node !== cache.head) {
          // Adjust siblings to point to each other.
          /** @type {CacheNode} */
          node.prev.next = node.next;
          if (node.next) {
            node.next.prev = node.prev;
          }
          node.next = cache.head;
          node.prev = null;
          /** @type {CacheNode} */
          cache.head.prev = node;
          cache.head = node;
        }

        // Return immediately
        return node.val;
      }

      // No cached value found. Continue to insertion phase:

      node = /** @type {CacheNode} */{
        // Generate the result from original function
        val: selector.apply(null, args)
      };

      // Avoid including the source object in the cache.
      args[0] = null;
      node.args = args;

      // Don't need to check whether node is already head, since it would
      // have been returned above already if it was

      // Shift existing head down list
      if (cache.head) {
        cache.head.prev = node;
        node.next = cache.head;
      }
      cache.head = node;
      return node.val;
    }
    callSelector.getDependants = normalizedGetDependants;
    callSelector.clear = clear;
    clear();
    return (/** @type {S & EnhancedSelector} */callSelector
    );
  }

  /**
   * External dependencies
   */

  /** @typedef {Record<string, import('./reducer').State>} State */
  /** @typedef {import('./reducer').StateValue} StateValue */
  /** @typedef {import('./reducer').Status} Status */

  /**
   * Returns the raw resolution state value for a given selector name,
   * and arguments set. May be undefined if the selector has never been resolved
   * or not resolved for the given set of arguments, otherwise true or false for
   * resolution started and completed respectively.
   *
   * @param {State}      state        Data state.
   * @param {string}     selectorName Selector name.
   * @param {unknown[]?} args         Arguments passed to selector.
   *
   * @return {StateValue|undefined} isResolving value.
   */
  function getResolutionState(state, selectorName, args) {
    const map = state[selectorName];
    if (!map) {
      return;
    }
    return map.get(selectorArgsToStateKey(args));
  }

  /**
   * Returns the raw `isResolving` value for a given selector name,
   * and arguments set. May be undefined if the selector has never been resolved
   * or not resolved for the given set of arguments, otherwise true or false for
   * resolution started and completed respectively.
   *
   * @param {State}      state        Data state.
   * @param {string}     selectorName Selector name.
   * @param {unknown[]?} args         Arguments passed to selector.
   *
   * @return {boolean | undefined} isResolving value.
   */
  function getIsResolving(state, selectorName, args) {
    const resolutionState = getResolutionState(state, selectorName, args);
    return resolutionState && resolutionState.status === 'resolving';
  }

  /**
   * Returns true if resolution has already been triggered for a given
   * selector name, and arguments set.
   *
   * @param {State}      state        Data state.
   * @param {string}     selectorName Selector name.
   * @param {unknown[]?} args         Arguments passed to selector.
   *
   * @return {boolean} Whether resolution has been triggered.
   */
  function hasStartedResolution(state, selectorName, args) {
    return getResolutionState(state, selectorName, args) !== undefined;
  }

  /**
   * Returns true if resolution has completed for a given selector
   * name, and arguments set.
   *
   * @param {State}      state        Data state.
   * @param {string}     selectorName Selector name.
   * @param {unknown[]?} args         Arguments passed to selector.
   *
   * @return {boolean} Whether resolution has completed.
   */
  function hasFinishedResolution(state, selectorName, args) {
    const status = getResolutionState(state, selectorName, args)?.status;
    return status === 'finished' || status === 'error';
  }

  /**
   * Returns true if resolution has failed for a given selector
   * name, and arguments set.
   *
   * @param {State}      state        Data state.
   * @param {string}     selectorName Selector name.
   * @param {unknown[]?} args         Arguments passed to selector.
   *
   * @return {boolean} Has resolution failed
   */
  function hasResolutionFailed(state, selectorName, args) {
    return getResolutionState(state, selectorName, args)?.status === 'error';
  }

  /**
   * Returns the resolution error for a given selector name, and arguments set.
   * Note it may be of an Error type, but may also be null, undefined, or anything else
   * that can be `throw`-n.
   *
   * @param {State}      state        Data state.
   * @param {string}     selectorName Selector name.
   * @param {unknown[]?} args         Arguments passed to selector.
   *
   * @return {Error|unknown} Last resolution error
   */
  function getResolutionError(state, selectorName, args) {
    const resolutionState = getResolutionState(state, selectorName, args);
    return resolutionState?.status === 'error' ? resolutionState.error : null;
  }

  /**
   * Returns true if resolution has been triggered but has not yet completed for
   * a given selector name, and arguments set.
   *
   * @param {State}      state        Data state.
   * @param {string}     selectorName Selector name.
   * @param {unknown[]?} args         Arguments passed to selector.
   *
   * @return {boolean} Whether resolution is in progress.
   */
  function isResolving(state, selectorName, args) {
    return getResolutionState(state, selectorName, args)?.status === 'resolving';
  }

  /**
   * Returns the list of the cached resolvers.
   *
   * @param {State} state Data state.
   *
   * @return {State} Resolvers mapped by args and selectorName.
   */
  function getCachedResolvers(state) {
    return state;
  }

  /**
   * Whether the store has any currently resolving selectors.
   *
   * @param {State} state Data state.
   *
   * @return {boolean} True if one or more selectors are resolving, false otherwise.
   */
  function hasResolvingSelectors(state) {
    return Object.values(state).some(selectorState =>
    /**
     * This uses the internal `_map` property of `EquivalentKeyMap` for
     * optimization purposes, since the `EquivalentKeyMap` implementation
     * does not support a `.values()` implementation.
     *
     * @see https://github.com/aduth/equivalent-key-map
     */
    Array.from(selectorState._map.values()).some(resolution => resolution[1]?.status === 'resolving'));
  }

  /**
   * Retrieves the total number of selectors, grouped per status.
   *
   * @param {State} state Data state.
   *
   * @return {Object} Object, containing selector totals by status.
   */
  const countSelectorsByStatus = createSelector(state => {
    const selectorsByStatus = {};
    Object.values(state).forEach(selectorState =>
    /**
     * This uses the internal `_map` property of `EquivalentKeyMap` for
     * optimization purposes, since the `EquivalentKeyMap` implementation
     * does not support a `.values()` implementation.
     *
     * @see https://github.com/aduth/equivalent-key-map
     */
    Array.from(selectorState._map.values()).forEach(resolution => {
      var _resolution$1$status;
      const currentStatus = (_resolution$1$status = resolution[1]?.status) !== null && _resolution$1$status !== void 0 ? _resolution$1$status : 'error';
      if (!selectorsByStatus[currentStatus]) {
        selectorsByStatus[currentStatus] = 0;
      }
      selectorsByStatus[currentStatus]++;
    }));
    return selectorsByStatus;
  }, state => [state]);
  var metadataSelectors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    countSelectorsByStatus: countSelectorsByStatus,
    getCachedResolvers: getCachedResolvers,
    getIsResolving: getIsResolving,
    getResolutionError: getResolutionError,
    getResolutionState: getResolutionState,
    hasFinishedResolution: hasFinishedResolution,
    hasResolutionFailed: hasResolutionFailed,
    hasResolvingSelectors: hasResolvingSelectors,
    hasStartedResolution: hasStartedResolution,
    isResolving: isResolving
  });

  /**
   * Returns an action object used in signalling that selector resolution has
   * started.
   *
   * @param {string}    selectorName Name of selector for which resolver triggered.
   * @param {unknown[]} args         Arguments to associate for uniqueness.
   *
   * @return {{ type: 'START_RESOLUTION', selectorName: string, args: unknown[] }} Action object.
   */
  function startResolution(selectorName, args) {
    return {
      type: 'START_RESOLUTION',
      selectorName,
      args
    };
  }

  /**
   * Returns an action object used in signalling that selector resolution has
   * completed.
   *
   * @param {string}    selectorName Name of selector for which resolver triggered.
   * @param {unknown[]} args         Arguments to associate for uniqueness.
   *
   * @return {{ type: 'FINISH_RESOLUTION', selectorName: string, args: unknown[] }} Action object.
   */
  function finishResolution(selectorName, args) {
    return {
      type: 'FINISH_RESOLUTION',
      selectorName,
      args
    };
  }

  /**
   * Returns an action object used in signalling that selector resolution has
   * failed.
   *
   * @param {string}        selectorName Name of selector for which resolver triggered.
   * @param {unknown[]}     args         Arguments to associate for uniqueness.
   * @param {Error|unknown} error        The error that caused the failure.
   *
   * @return {{ type: 'FAIL_RESOLUTION', selectorName: string, args: unknown[], error: Error|unknown }} Action object.
   */
  function failResolution(selectorName, args, error) {
    return {
      type: 'FAIL_RESOLUTION',
      selectorName,
      args,
      error
    };
  }

  /**
   * Returns an action object used in signalling that a batch of selector resolutions has
   * started.
   *
   * @param {string}      selectorName Name of selector for which resolver triggered.
   * @param {unknown[][]} args         Array of arguments to associate for uniqueness, each item
   *                                   is associated to a resolution.
   *
   * @return {{ type: 'START_RESOLUTIONS', selectorName: string, args: unknown[][] }} Action object.
   */
  function startResolutions(selectorName, args) {
    return {
      type: 'START_RESOLUTIONS',
      selectorName,
      args
    };
  }

  /**
   * Returns an action object used in signalling that a batch of selector resolutions has
   * completed.
   *
   * @param {string}      selectorName Name of selector for which resolver triggered.
   * @param {unknown[][]} args         Array of arguments to associate for uniqueness, each item
   *                                   is associated to a resolution.
   *
   * @return {{ type: 'FINISH_RESOLUTIONS', selectorName: string, args: unknown[][] }} Action object.
   */
  function finishResolutions(selectorName, args) {
    return {
      type: 'FINISH_RESOLUTIONS',
      selectorName,
      args
    };
  }

  /**
   * Returns an action object used in signalling that a batch of selector resolutions has
   * completed and at least one of them has failed.
   *
   * @param {string}            selectorName Name of selector for which resolver triggered.
   * @param {unknown[]}         args         Array of arguments to associate for uniqueness, each item
   *                                         is associated to a resolution.
   * @param {(Error|unknown)[]} errors       Array of errors to associate for uniqueness, each item
   *                                         is associated to a resolution.
   * @return {{ type: 'FAIL_RESOLUTIONS', selectorName: string, args: unknown[], errors: Array<Error|unknown> }} Action object.
   */
  function failResolutions(selectorName, args, errors) {
    return {
      type: 'FAIL_RESOLUTIONS',
      selectorName,
      args,
      errors
    };
  }

  /**
   * Returns an action object used in signalling that we should invalidate the resolution cache.
   *
   * @param {string}    selectorName Name of selector for which resolver should be invalidated.
   * @param {unknown[]} args         Arguments to associate for uniqueness.
   *
   * @return {{ type: 'INVALIDATE_RESOLUTION', selectorName: string, args: any[] }} Action object.
   */
  function invalidateResolution(selectorName, args) {
    return {
      type: 'INVALIDATE_RESOLUTION',
      selectorName,
      args
    };
  }

  /**
   * Returns an action object used in signalling that the resolution
   * should be invalidated.
   *
   * @return {{ type: 'INVALIDATE_RESOLUTION_FOR_STORE' }} Action object.
   */
  function invalidateResolutionForStore() {
    return {
      type: 'INVALIDATE_RESOLUTION_FOR_STORE'
    };
  }

  /**
   * Returns an action object used in signalling that the resolution cache for a
   * given selectorName should be invalidated.
   *
   * @param {string} selectorName Name of selector for which all resolvers should
   *                              be invalidated.
   *
   * @return  {{ type: 'INVALIDATE_RESOLUTION_FOR_STORE_SELECTOR', selectorName: string }} Action object.
   */
  function invalidateResolutionForStoreSelector(selectorName) {
    return {
      type: 'INVALIDATE_RESOLUTION_FOR_STORE_SELECTOR',
      selectorName
    };
  }
  var metadataActions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    failResolution: failResolution,
    failResolutions: failResolutions,
    finishResolution: finishResolution,
    finishResolutions: finishResolutions,
    invalidateResolution: invalidateResolution,
    invalidateResolutionForStore: invalidateResolutionForStore,
    invalidateResolutionForStoreSelector: invalidateResolutionForStoreSelector,
    startResolution: startResolution,
    startResolutions: startResolutions
  });

  /**
   * External dependencies
   */

  /** @typedef {import('../types').DataRegistry} DataRegistry */
  /** @typedef {import('../types').ListenerFunction} ListenerFunction */
  /**
   * @typedef {import('../types').StoreDescriptor<C>} StoreDescriptor
   * @template {import('../types').AnyConfig} C
   */
  /**
   * @typedef {import('../types').ReduxStoreConfig<State,Actions,Selectors>} ReduxStoreConfig
   * @template State
   * @template {Record<string,import('../types').ActionCreator>} Actions
   * @template Selectors
   */

  const trimUndefinedValues = array => {
    const result = [...array];
    for (let i = result.length - 1; i >= 0; i--) {
      if (result[i] === undefined) {
        result.splice(i, 1);
      }
    }
    return result;
  };

  /**
   * Creates a new object with the same keys, but with `callback()` called as
   * a transformer function on each of the values.
   *
   * @param {Object}   obj      The object to transform.
   * @param {Function} callback The function to transform each object value.
   * @return {Array} Transformed object.
   */
  const mapValues = (obj, callback) => Object.fromEntries(Object.entries(obj !== null && obj !== void 0 ? obj : {}).map(([key, value]) => [key, callback(value, key)]));

  // Convert Map objects to plain objects
  const mapToObject = (key, state) => {
    if (state instanceof Map) {
      return Object.fromEntries(state);
    }
    return state;
  };

  /**
   * Create a cache to track whether resolvers started running or not.
   *
   * @return {Object} Resolvers Cache.
   */
  function createResolversCache() {
    const cache = {};
    return {
      isRunning(selectorName, args) {
        return cache[selectorName] && cache[selectorName].get(trimUndefinedValues(args));
      },
      clear(selectorName, args) {
        if (cache[selectorName]) {
          cache[selectorName].delete(trimUndefinedValues(args));
        }
      },
      markAsRunning(selectorName, args) {
        if (!cache[selectorName]) {
          cache[selectorName] = new EquivalentKeyMap$1();
        }
        cache[selectorName].set(trimUndefinedValues(args), true);
      }
    };
  }
  function createBindingCache(bind) {
    const cache = new WeakMap();
    return {
      get(item, itemName) {
        let boundItem = cache.get(item);
        if (!boundItem) {
          boundItem = bind(item, itemName);
          cache.set(item, boundItem);
        }
        return boundItem;
      }
    };
  }

  /**
   * Creates a data store descriptor for the provided Redux store configuration containing
   * properties describing reducer, actions, selectors, controls and resolvers.
   *
   * @example
   * ```js
   * import { createReduxStore } from '@wordpress/data';
   *
   * const store = createReduxStore( 'demo', {
   *     reducer: ( state = 'OK' ) => state,
   *     selectors: {
   *         getValue: ( state ) => state,
   *     },
   * } );
   * ```
   *
   * @template State
   * @template {Record<string,import('../types').ActionCreator>} Actions
   * @template Selectors
   * @param {string}                                    key     Unique namespace identifier.
   * @param {ReduxStoreConfig<State,Actions,Selectors>} options Registered store options, with properties
   *                                                            describing reducer, actions, selectors,
   *                                                            and resolvers.
   *
   * @return   {StoreDescriptor<ReduxStoreConfig<State,Actions,Selectors>>} Store Object.
   */
  function createReduxStore(key, options) {
    const privateActions = {};
    const privateSelectors = {};
    const privateRegistrationFunctions = {
      privateActions,
      registerPrivateActions: actions => {
        Object.assign(privateActions, actions);
      },
      privateSelectors,
      registerPrivateSelectors: selectors => {
        Object.assign(privateSelectors, selectors);
      }
    };
    const storeDescriptor = {
      name: key,
      instantiate: registry => {
        /**
         * Stores listener functions registered with `subscribe()`.
         *
         * When functions register to listen to store changes with
         * `subscribe()` they get added here. Although Redux offers
         * its own `subscribe()` function directly, by wrapping the
         * subscription in this store instance it's possible to
         * optimize checking if the state has changed before calling
         * each listener.
         *
         * @type {Set<ListenerFunction>}
         */
        const listeners = new Set();
        const reducer = options.reducer;
        const thunkArgs = {
          registry,
          get dispatch() {
            return thunkActions;
          },
          get select() {
            return thunkSelectors;
          },
          get resolveSelect() {
            return getResolveSelectors();
          }
        };
        const store = instantiateReduxStore(key, options, registry, thunkArgs);
        // Expose the private registration functions on the store
        // so they can be copied to a sub registry in registry.js.
        lock(store, privateRegistrationFunctions);
        const resolversCache = createResolversCache();
        function bindAction(action) {
          return (...args) => Promise.resolve(store.dispatch(action(...args)));
        }
        const actions = {
          ...mapValues(metadataActions, bindAction),
          ...mapValues(options.actions, bindAction)
        };
        const boundPrivateActions = createBindingCache(bindAction);
        const allActions = new Proxy(() => {}, {
          get: (target, prop) => {
            const privateAction = privateActions[prop];
            return privateAction ? boundPrivateActions.get(privateAction, prop) : actions[prop];
          }
        });
        const thunkActions = new Proxy(allActions, {
          apply: (target, thisArg, [action]) => store.dispatch(action)
        });
        lock(actions, allActions);
        const resolvers = options.resolvers ? mapResolvers(options.resolvers) : {};
        function bindSelector(selector, selectorName) {
          if (selector.isRegistrySelector) {
            selector.registry = registry;
          }
          const boundSelector = (...args) => {
            const state = store.__unstableOriginalGetState();
            return selector(state.root, ...args);
          };
          const resolver = resolvers[selectorName];
          if (!resolver) {
            boundSelector.hasResolver = false;
            return boundSelector;
          }
          return mapSelectorWithResolver(boundSelector, selectorName, resolver, store, resolversCache);
        }
        function bindMetadataSelector(selector) {
          const boundSelector = (...args) => {
            const state = store.__unstableOriginalGetState();
            return selector(state.metadata, ...args);
          };
          boundSelector.hasResolver = false;
          return boundSelector;
        }
        const selectors = {
          ...mapValues(metadataSelectors, bindMetadataSelector),
          ...mapValues(options.selectors, bindSelector)
        };
        const boundPrivateSelectors = createBindingCache(bindSelector);

        // Pre-bind the private selectors that have been registered by the time of
        // instantiation, so that registry selectors are bound to the registry.
        for (const [selectorName, selector] of Object.entries(privateSelectors)) {
          boundPrivateSelectors.get(selector, selectorName);
        }
        const allSelectors = new Proxy(() => {}, {
          get: (target, prop) => {
            const privateSelector = privateSelectors[prop];
            return privateSelector ? boundPrivateSelectors.get(privateSelector, prop) : selectors[prop];
          }
        });
        const thunkSelectors = new Proxy(allSelectors, {
          apply: (target, thisArg, [selector]) => selector(store.__unstableOriginalGetState())
        });
        lock(selectors, allSelectors);
        const resolveSelectors = mapResolveSelectors(selectors, store);
        const suspendSelectors = mapSuspendSelectors(selectors, store);
        const getSelectors = () => selectors;
        const getActions = () => actions;
        const getResolveSelectors = () => resolveSelectors;
        const getSuspendSelectors = () => suspendSelectors;

        // We have some modules monkey-patching the store object
        // It's wrong to do so but until we refactor all of our effects to controls
        // We need to keep the same "store" instance here.
        store.__unstableOriginalGetState = store.getState;
        store.getState = () => store.__unstableOriginalGetState().root;

        // Customize subscribe behavior to call listeners only on effective change,
        // not on every dispatch.
        const subscribe = store && (listener => {
          listeners.add(listener);
          return () => listeners.delete(listener);
        });
        let lastState = store.__unstableOriginalGetState();
        store.subscribe(() => {
          const state = store.__unstableOriginalGetState();
          const hasChanged = state !== lastState;
          lastState = state;
          if (hasChanged) {
            for (const listener of listeners) {
              listener();
            }
          }
        });

        // This can be simplified to just { subscribe, getSelectors, getActions }
        // Once we remove the use function.
        return {
          reducer,
          store,
          actions,
          selectors,
          resolvers,
          getSelectors,
          getResolveSelectors,
          getSuspendSelectors,
          getActions,
          subscribe
        };
      }
    };

    // Expose the private registration functions on the store
    // descriptor. That's a natural choice since that's where the
    // public actions and selectors are stored .
    lock(storeDescriptor, privateRegistrationFunctions);
    return storeDescriptor;
  }

  /**
   * Creates a redux store for a namespace.
   *
   * @param {string}       key       Unique namespace identifier.
   * @param {Object}       options   Registered store options, with properties
   *                                 describing reducer, actions, selectors,
   *                                 and resolvers.
   * @param {DataRegistry} registry  Registry reference.
   * @param {Object}       thunkArgs Argument object for the thunk middleware.
   * @return {Object} Newly created redux store.
   */
  function instantiateReduxStore(key, options, registry, thunkArgs) {
    const controls = {
      ...options.controls,
      ...builtinControls
    };
    const normalizedControls = mapValues(controls, control => control.isRegistryControl ? control(registry) : control);
    const middlewares = [createResolversCacheMiddleware$1(registry, key), promise, createMiddleware(normalizedControls), createThunkMiddleware(thunkArgs)];
    const enhancers = [applyMiddleware(...middlewares)];
    if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
      enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__({
        name: key,
        instanceId: key,
        serialize: {
          replacer: mapToObject
        }
      }));
    }
    const {
      reducer,
      initialState
    } = options;
    const enhancedReducer = combineReducers({
      metadata: metadataReducer,
      root: reducer
    });
    return createStore(enhancedReducer, {
      root: initialState
    }, compose$1(enhancers));
  }

  /**
   * Maps selectors to functions that return a resolution promise for them
   *
   * @param {Object} selectors Selectors to map.
   * @param {Object} store     The redux store the selectors select from.
   *
   * @return {Object} Selectors mapped to their resolution functions.
   */
  function mapResolveSelectors(selectors, store) {
    const {
      getIsResolving,
      hasStartedResolution,
      hasFinishedResolution,
      hasResolutionFailed,
      isResolving,
      getCachedResolvers,
      getResolutionState,
      getResolutionError,
      hasResolvingSelectors,
      countSelectorsByStatus,
      ...storeSelectors
    } = selectors;
    return mapValues(storeSelectors, (selector, selectorName) => {
      // If the selector doesn't have a resolver, just convert the return value
      // (including exceptions) to a Promise, no additional extra behavior is needed.
      if (!selector.hasResolver) {
        return async (...args) => selector.apply(null, args);
      }
      return (...args) => {
        return new Promise((resolve, reject) => {
          const hasFinished = () => selectors.hasFinishedResolution(selectorName, args);
          const finalize = result => {
            const hasFailed = selectors.hasResolutionFailed(selectorName, args);
            if (hasFailed) {
              const error = selectors.getResolutionError(selectorName, args);
              reject(error);
            } else {
              resolve(result);
            }
          };
          const getResult = () => selector.apply(null, args);
          // Trigger the selector (to trigger the resolver)
          const result = getResult();
          if (hasFinished()) {
            return finalize(result);
          }
          const unsubscribe = store.subscribe(() => {
            if (hasFinished()) {
              unsubscribe();
              finalize(getResult());
            }
          });
        });
      };
    });
  }

  /**
   * Maps selectors to functions that throw a suspense promise if not yet resolved.
   *
   * @param {Object} selectors Selectors to map.
   * @param {Object} store     The redux store the selectors select from.
   *
   * @return {Object} Selectors mapped to their suspense functions.
   */
  function mapSuspendSelectors(selectors, store) {
    return mapValues(selectors, (selector, selectorName) => {
      // Selector without a resolver doesn't have any extra suspense behavior.
      if (!selector.hasResolver) {
        return selector;
      }
      return (...args) => {
        const result = selector.apply(null, args);
        if (selectors.hasFinishedResolution(selectorName, args)) {
          if (selectors.hasResolutionFailed(selectorName, args)) {
            throw selectors.getResolutionError(selectorName, args);
          }
          return result;
        }
        throw new Promise(resolve => {
          const unsubscribe = store.subscribe(() => {
            if (selectors.hasFinishedResolution(selectorName, args)) {
              resolve();
              unsubscribe();
            }
          });
        });
      };
    });
  }

  /**
   * Convert resolvers to a normalized form, an object with `fulfill` method and
   * optional methods like `isFulfilled`.
   *
   * @param {Object} resolvers Resolver to convert
   */
  function mapResolvers(resolvers) {
    return mapValues(resolvers, resolver => {
      if (resolver.fulfill) {
        return resolver;
      }
      return {
        ...resolver,
        // Copy the enumerable properties of the resolver function.
        fulfill: resolver // Add the fulfill method.
      };
    });
  }

  /**
   * Returns a selector with a matched resolver.
   * Resolvers are side effects invoked once per argument set of a given selector call,
   * used in ensuring that the data needs for the selector are satisfied.
   *
   * @param {Object} selector       The selector function to be bound.
   * @param {string} selectorName   The selector name.
   * @param {Object} resolver       Resolver to call.
   * @param {Object} store          The redux store to which the resolvers should be mapped.
   * @param {Object} resolversCache Resolvers Cache.
   */
  function mapSelectorWithResolver(selector, selectorName, resolver, store, resolversCache) {
    function fulfillSelector(args) {
      const state = store.getState();
      if (resolversCache.isRunning(selectorName, args) || typeof resolver.isFulfilled === 'function' && resolver.isFulfilled(state, ...args)) {
        return;
      }
      const {
        metadata
      } = store.__unstableOriginalGetState();
      if (hasStartedResolution(metadata, selectorName, args)) {
        return;
      }
      resolversCache.markAsRunning(selectorName, args);
      setTimeout(async () => {
        resolversCache.clear(selectorName, args);
        store.dispatch(startResolution(selectorName, args));
        try {
          const action = resolver.fulfill(...args);
          if (action) {
            await store.dispatch(action);
          }
          store.dispatch(finishResolution(selectorName, args));
        } catch (error) {
          store.dispatch(failResolution(selectorName, args, error));
        }
      }, 0);
    }
    const selectorResolver = (...args) => {
      fulfillSelector(args);
      return selector(...args);
    };
    selectorResolver.hasResolver = true;
    return selectorResolver;
  }
  const coreDataStore = {
    name: 'core/data',
    instantiate(registry) {
      const getCoreDataSelector = selectorName => (key, ...args) => {
        return registry.select(key)[selectorName](...args);
      };
      const getCoreDataAction = actionName => (key, ...args) => {
        return registry.dispatch(key)[actionName](...args);
      };
      return {
        getSelectors() {
          return Object.fromEntries(['getIsResolving', 'hasStartedResolution', 'hasFinishedResolution', 'isResolving', 'getCachedResolvers'].map(selectorName => [selectorName, getCoreDataSelector(selectorName)]));
        },
        getActions() {
          return Object.fromEntries(['startResolution', 'finishResolution', 'invalidateResolution', 'invalidateResolutionForStore', 'invalidateResolutionForStoreSelector'].map(actionName => [actionName, getCoreDataAction(actionName)]));
        },
        subscribe() {
          // There's no reasons to trigger any listener when we subscribe to this store
          // because there's no state stored in this store that need to retrigger selectors
          // if a change happens, the corresponding store where the tracking stated live
          // would have already triggered a "subscribe" call.
          return () => () => {};
        }
      };
    }
  };
  var coreDataStore$1 = coreDataStore;

  /**
   * Create an event emitter.
   *
   * @return {import("../types").DataEmitter} Emitter.
   */
  function createEmitter() {
    let isPaused = false;
    let isPending = false;
    const listeners = new Set();
    const notifyListeners = () =>
    // We use Array.from to clone the listeners Set
    // This ensures that we don't run a listener
    // that was added as a response to another listener.
    Array.from(listeners).forEach(listener => listener());
    return {
      get isPaused() {
        return isPaused;
      },
      subscribe(listener) {
        listeners.add(listener);
        return () => listeners.delete(listener);
      },
      pause() {
        isPaused = true;
      },
      resume() {
        isPaused = false;
        if (isPending) {
          isPending = false;
          notifyListeners();
        }
      },
      emit() {
        if (isPaused) {
          isPending = true;
          return;
        }
        notifyListeners();
      }
    };
  }

  /**
   * WordPress dependencies
   */

  /** @typedef {import('./types').StoreDescriptor} StoreDescriptor */

  /**
   * @typedef {Object} WPDataRegistry An isolated orchestrator of store registrations.
   *
   * @property {Function} registerGenericStore Given a namespace key and settings
   *                                           object, registers a new generic
   *                                           store.
   * @property {Function} registerStore        Given a namespace key and settings
   *                                           object, registers a new namespace
   *                                           store.
   * @property {Function} subscribe            Given a function callback, invokes
   *                                           the callback on any change to state
   *                                           within any registered store.
   * @property {Function} select               Given a namespace key, returns an
   *                                           object of the  store's registered
   *                                           selectors.
   * @property {Function} dispatch             Given a namespace key, returns an
   *                                           object of the store's registered
   *                                           action dispatchers.
   */

  /**
   * @typedef {Object} WPDataPlugin An object of registry function overrides.
   *
   * @property {Function} registerStore registers store.
   */

  function getStoreName(storeNameOrDescriptor) {
    return typeof storeNameOrDescriptor === 'string' ? storeNameOrDescriptor : storeNameOrDescriptor.name;
  }
  /**
   * Creates a new store registry, given an optional object of initial store
   * configurations.
   *
   * @param {Object}  storeConfigs Initial store configurations.
   * @param {Object?} parent       Parent registry.
   *
   * @return {WPDataRegistry} Data registry.
   */
  function createRegistry(storeConfigs = {}, parent = null) {
    const stores = {};
    const emitter = createEmitter();
    let listeningStores = null;

    /**
     * Global listener called for each store's update.
     */
    function globalListener() {
      emitter.emit();
    }

    /**
     * Subscribe to changes to any data, either in all stores in registry, or
     * in one specific store.
     *
     * @param {Function}                listener              Listener function.
     * @param {string|StoreDescriptor?} storeNameOrDescriptor Optional store name.
     *
     * @return {Function} Unsubscribe function.
     */
    const subscribe = (listener, storeNameOrDescriptor) => {
      // subscribe to all stores
      if (!storeNameOrDescriptor) {
        return emitter.subscribe(listener);
      }

      // subscribe to one store
      const storeName = getStoreName(storeNameOrDescriptor);
      const store = stores[storeName];
      if (store) {
        return store.subscribe(listener);
      }

      // Trying to access a store that hasn't been registered,
      // this is a pattern rarely used but seen in some places.
      // We fallback to global `subscribe` here for backward-compatibility for now.
      // See https://github.com/WordPress/gutenberg/pull/27466 for more info.
      if (!parent) {
        return emitter.subscribe(listener);
      }
      return parent.subscribe(listener, storeNameOrDescriptor);
    };

    /**
     * Calls a selector given the current state and extra arguments.
     *
     * @param {string|StoreDescriptor} storeNameOrDescriptor Unique namespace identifier for the store
     *                                                       or the store descriptor.
     *
     * @return {*} The selector's returned value.
     */
    function select(storeNameOrDescriptor) {
      const storeName = getStoreName(storeNameOrDescriptor);
      listeningStores?.add(storeName);
      const store = stores[storeName];
      if (store) {
        return store.getSelectors();
      }
      return parent?.select(storeName);
    }
    function __unstableMarkListeningStores(callback, ref) {
      listeningStores = new Set();
      try {
        return callback.call(this);
      } finally {
        ref.current = Array.from(listeningStores);
        listeningStores = null;
      }
    }

    /**
     * Given a store descriptor, returns an object containing the store's selectors pre-bound to
     * state so that you only need to supply additional arguments, and modified so that they return
     * promises that resolve to their eventual values, after any resolvers have ran.
     *
     * @param {StoreDescriptor|string} storeNameOrDescriptor The store descriptor. The legacy calling
     *                                                       convention of passing the store name is
     *                                                       also supported.
     *
     * @return {Object} Each key of the object matches the name of a selector.
     */
    function resolveSelect(storeNameOrDescriptor) {
      const storeName = getStoreName(storeNameOrDescriptor);
      listeningStores?.add(storeName);
      const store = stores[storeName];
      if (store) {
        return store.getResolveSelectors();
      }
      return parent && parent.resolveSelect(storeName);
    }

    /**
     * Given a store descriptor, returns an object containing the store's selectors pre-bound to
     * state so that you only need to supply additional arguments, and modified so that they throw
     * promises in case the selector is not resolved yet.
     *
     * @param {StoreDescriptor|string} storeNameOrDescriptor The store descriptor. The legacy calling
     *                                                       convention of passing the store name is
     *                                                       also supported.
     *
     * @return {Object} Object containing the store's suspense-wrapped selectors.
     */
    function suspendSelect(storeNameOrDescriptor) {
      const storeName = getStoreName(storeNameOrDescriptor);
      listeningStores?.add(storeName);
      const store = stores[storeName];
      if (store) {
        return store.getSuspendSelectors();
      }
      return parent && parent.suspendSelect(storeName);
    }

    /**
     * Returns the available actions for a part of the state.
     *
     * @param {string|StoreDescriptor} storeNameOrDescriptor Unique namespace identifier for the store
     *                                                       or the store descriptor.
     *
     * @return {*} The action's returned value.
     */
    function dispatch(storeNameOrDescriptor) {
      const storeName = getStoreName(storeNameOrDescriptor);
      const store = stores[storeName];
      if (store) {
        return store.getActions();
      }
      return parent && parent.dispatch(storeName);
    }

    //
    // Deprecated
    // TODO: Remove this after `use()` is removed.
    function withPlugins(attributes) {
      return Object.fromEntries(Object.entries(attributes).map(([key, attribute]) => {
        if (typeof attribute !== 'function') {
          return [key, attribute];
        }
        return [key, function () {
          return registry[key].apply(null, arguments);
        }];
      }));
    }

    /**
     * Registers a store instance.
     *
     * @param {string}   name        Store registry name.
     * @param {Function} createStore Function that creates a store object (getSelectors, getActions, subscribe).
     */
    function registerStoreInstance(name, createStore) {
      if (stores[name]) {
        // eslint-disable-next-line no-console
        console.error('Store "' + name + '" is already registered.');
        return stores[name];
      }
      const store = createStore();
      if (typeof store.getSelectors !== 'function') {
        throw new TypeError('store.getSelectors must be a function');
      }
      if (typeof store.getActions !== 'function') {
        throw new TypeError('store.getActions must be a function');
      }
      if (typeof store.subscribe !== 'function') {
        throw new TypeError('store.subscribe must be a function');
      }
      // The emitter is used to keep track of active listeners when the registry
      // get paused, that way, when resumed we should be able to call all these
      // pending listeners.
      store.emitter = createEmitter();
      const currentSubscribe = store.subscribe;
      store.subscribe = listener => {
        const unsubscribeFromEmitter = store.emitter.subscribe(listener);
        const unsubscribeFromStore = currentSubscribe(() => {
          if (store.emitter.isPaused) {
            store.emitter.emit();
            return;
          }
          listener();
        });
        return () => {
          unsubscribeFromStore?.();
          unsubscribeFromEmitter?.();
        };
      };
      stores[name] = store;
      store.subscribe(globalListener);

      // Copy private actions and selectors from the parent store.
      if (parent) {
        try {
          unlock(store.store).registerPrivateActions(unlock(parent).privateActionsOf(name));
          unlock(store.store).registerPrivateSelectors(unlock(parent).privateSelectorsOf(name));
        } catch (e) {
          // unlock() throws if store.store was not locked.
          // The error indicates there's nothing to do here so let's
          // ignore it.
        }
      }
      return store;
    }

    /**
     * Registers a new store given a store descriptor.
     *
     * @param {StoreDescriptor} store Store descriptor.
     */
    function register(store) {
      registerStoreInstance(store.name, () => store.instantiate(registry));
    }
    function registerGenericStore(name, store) {
      deprecated('wp.data.registerGenericStore', {
        since: '5.9',
        alternative: 'wp.data.register( storeDescriptor )'
      });
      registerStoreInstance(name, () => store);
    }

    /**
     * Registers a standard `@wordpress/data` store.
     *
     * @param {string} storeName Unique namespace identifier.
     * @param {Object} options   Store description (reducer, actions, selectors, resolvers).
     *
     * @return {Object} Registered store object.
     */
    function registerStore(storeName, options) {
      if (!options.reducer) {
        throw new TypeError('Must specify store reducer');
      }
      const store = registerStoreInstance(storeName, () => createReduxStore(storeName, options).instantiate(registry));
      return store.store;
    }
    function batch(callback) {
      // If we're already batching, just call the callback.
      if (emitter.isPaused) {
        callback();
        return;
      }
      emitter.pause();
      Object.values(stores).forEach(store => store.emitter.pause());
      callback();
      emitter.resume();
      Object.values(stores).forEach(store => store.emitter.resume());
    }
    let registry = {
      batch,
      stores,
      namespaces: stores,
      // TODO: Deprecate/remove this.
      subscribe,
      select,
      resolveSelect,
      suspendSelect,
      dispatch,
      use,
      register,
      registerGenericStore,
      registerStore,
      __unstableMarkListeningStores
    };

    //
    // TODO:
    // This function will be deprecated as soon as it is no longer internally referenced.
    function use(plugin, options) {
      if (!plugin) {
        return;
      }
      registry = {
        ...registry,
        ...plugin(registry, options)
      };
      return registry;
    }
    registry.register(coreDataStore$1);
    for (const [name, config] of Object.entries(storeConfigs)) {
      registry.register(createReduxStore(name, config));
    }
    if (parent) {
      parent.subscribe(globalListener);
    }
    const registryWithPlugins = withPlugins(registry);
    lock(registryWithPlugins, {
      privateActionsOf: name => {
        try {
          return unlock(stores[name].store).privateActions;
        } catch (e) {
          // unlock() throws an error the store was not locked – this means
          // there no private actions are available
          return {};
        }
      },
      privateSelectorsOf: name => {
        try {
          return unlock(stores[name].store).privateSelectors;
        } catch (e) {
          return {};
        }
      }
    });
    return registryWithPlugins;
  }

  /**
   * Internal dependencies
   */
  var defaultRegistry = createRegistry();

  /**
   * WordPress dependencies
   */
  const Context$1 = wp.element.createContext(defaultRegistry);

  /**
   * WordPress dependencies
   */

  /**
   * A custom react hook exposing the registry context for use.
   *
   * This exposes the `registry` value provided via the
   * <a href="#RegistryProvider">Registry Provider</a> to a component implementing
   * this hook.
   *
   * It acts similarly to the `useContext` react hook.
   *
   * Note: Generally speaking, `useRegistry` is a low level hook that in most cases
   * won't be needed for implementation. Most interactions with the `@wordpress/data`
   * API can be performed via the `useSelect` hook,  or the `withSelect` and
   * `withDispatch` higher order components.
   *
   * @example
   * ```js
   * import {
   *   RegistryProvider,
   *   createRegistry,
   *   useRegistry,
   * } from '@wordpress/data';
   *
   * const registry = createRegistry( {} );
   *
   * const SomeChildUsingRegistry = ( props ) => {
   *   const registry = useRegistry();
   *   // ...logic implementing the registry in other react hooks.
   * };
   *
   *
   * const ParentProvidingRegistry = ( props ) => {
   *   return <RegistryProvider value={ registry }>
   *     <SomeChildUsingRegistry { ...props } />
   *   </RegistryProvider>
   * };
   * ```
   *
   * @return {Function}  A custom react hook exposing the registry context value.
   */
  function useRegistry() {
    return wp.element.useContext(Context$1);
  }

  /**
   * WordPress dependencies
   */
  const Context = wp.element.createContext(false);

  /**
   * WordPress dependencies
   */
  function useAsyncMode() {
    return wp.element.useContext(Context);
  }

  /**
   * WordPress dependencies
   */
  const renderQueue = createQueue();

  /**
   * @typedef {import('../../types').StoreDescriptor<C>} StoreDescriptor
   * @template {import('../../types').AnyConfig} C
   */
  /**
   * @typedef {import('../../types').ReduxStoreConfig<State,Actions,Selectors>} ReduxStoreConfig
   * @template State
   * @template {Record<string,import('../../types').ActionCreator>} Actions
   * @template Selectors
   */
  /** @typedef {import('../../types').MapSelect} MapSelect */
  /**
   * @typedef {import('../../types').UseSelectReturn<T>} UseSelectReturn
   * @template {MapSelect|StoreDescriptor<any>} T
   */

  function Store(registry, suspense) {
    const select = suspense ? registry.suspendSelect : registry.select;
    const queueContext = {};
    let lastMapSelect;
    let lastMapResult;
    let lastMapResultValid = false;
    let lastIsAsync;
    let subscriber;
    const createSubscriber = stores => {
      // The set of stores the `subscribe` function is supposed to subscribe to. Here it is
      // initialized, and then the `updateStores` function can add new stores to it.
      const activeStores = [...stores];

      // The `subscribe` function, which is passed to the `useSyncExternalStore` hook, could
      // be called multiple times to establish multiple subscriptions. That's why we need to
      // keep a set of active subscriptions;
      const activeSubscriptions = new Set();
      function subscribe(listener) {
        // Invalidate the value right after subscription was created. React will
        // call `getValue` after subscribing, to detect store updates that happened
        // in the interval between the `getValue` call during render and creating
        // the subscription, which is slightly delayed. We need to ensure that this
        // second `getValue` call will compute a fresh value.
        lastMapResultValid = false;
        const onStoreChange = () => {
          // Invalidate the value on store update, so that a fresh value is computed.
          lastMapResultValid = false;
          listener();
        };
        const onChange = () => {
          if (lastIsAsync) {
            renderQueue.add(queueContext, onStoreChange);
          } else {
            onStoreChange();
          }
        };
        const unsubs = [];
        function subscribeStore(storeName) {
          unsubs.push(registry.subscribe(onChange, storeName));
        }
        for (const storeName of activeStores) {
          subscribeStore(storeName);
        }
        activeSubscriptions.add(subscribeStore);
        return () => {
          activeSubscriptions.delete(subscribeStore);
          for (const unsub of unsubs.values()) {
            // The return value of the subscribe function could be undefined if the store is a custom generic store.
            unsub?.();
          }
          // Cancel existing store updates that were already scheduled.
          renderQueue.cancel(queueContext);
        };
      }

      // Check if `newStores` contains some stores we're not subscribed to yet, and add them.
      function updateStores(newStores) {
        for (const newStore of newStores) {
          if (activeStores.includes(newStore)) {
            continue;
          }

          // New `subscribe` calls will subscribe to `newStore`, too.
          activeStores.push(newStore);

          // Add `newStore` to existing subscriptions.
          for (const subscription of activeSubscriptions) {
            subscription(newStore);
          }
        }
      }
      return {
        subscribe,
        updateStores
      };
    };
    return (mapSelect, isAsync) => {
      function updateValue() {
        // If the last value is valid, and the `mapSelect` callback hasn't changed,
        // then we can safely return the cached value. The value can change only on
        // store update, and in that case value will be invalidated by the listener.
        if (lastMapResultValid && mapSelect === lastMapSelect) {
          return lastMapResult;
        }
        const listeningStores = {
          current: null
        };
        const mapResult = registry.__unstableMarkListeningStores(() => mapSelect(select, registry), listeningStores);
        if (!subscriber) {
          subscriber = createSubscriber(listeningStores.current);
        } else {
          subscriber.updateStores(listeningStores.current);
        }

        // If the new value is shallow-equal to the old one, keep the old one so
        // that we don't trigger unwanted updates that do a `===` check.
        if (!isShallowEqual$1(lastMapResult, mapResult)) {
          lastMapResult = mapResult;
        }
        lastMapSelect = mapSelect;
        lastMapResultValid = true;
      }
      function getValue() {
        // Update the value in case it's been invalidated or `mapSelect` has changed.
        updateValue();
        return lastMapResult;
      }

      // When transitioning from async to sync mode, cancel existing store updates
      // that have been scheduled, and invalidate the value so that it's freshly
      // computed. It might have been changed by the update we just cancelled.
      if (lastIsAsync && !isAsync) {
        lastMapResultValid = false;
        renderQueue.cancel(queueContext);
      }
      updateValue();
      lastIsAsync = isAsync;

      // Return a pair of functions that can be passed to `useSyncExternalStore`.
      return {
        subscribe: subscriber.subscribe,
        getValue
      };
    };
  }
  function useStaticSelect(storeName) {
    return useRegistry().select(storeName);
  }
  function useMappingSelect(suspense, mapSelect, deps) {
    const registry = useRegistry();
    const isAsync = useAsyncMode();
    const store = wp.element.useMemo(() => Store(registry, suspense), [registry]);
    const selector = wp.element.useCallback(mapSelect, deps);
    const {
      subscribe,
      getValue
    } = store(selector, isAsync);
    const result = wp.element.useSyncExternalStore(subscribe, getValue, getValue);
    wp.element.useDebugValue(result);
    return result;
  }

  /**
   * Custom react hook for retrieving props from registered selectors.
   *
   * In general, this custom React hook follows the
   * [rules of hooks](https://reactjs.org/docs/hooks-rules.html).
   *
   * @template {MapSelect | StoreDescriptor<any>} T
   * @param {T}         mapSelect Function called on every state change. The returned value is
   *                              exposed to the component implementing this hook. The function
   *                              receives the `registry.select` method on the first argument
   *                              and the `registry` on the second argument.
   *                              When a store key is passed, all selectors for the store will be
   *                              returned. This is only meant for usage of these selectors in event
   *                              callbacks, not for data needed to create the element tree.
   * @param {unknown[]} deps      If provided, this memoizes the mapSelect so the same `mapSelect` is
   *                              invoked on every state change unless the dependencies change.
   *
   * @example
   * ```js
   * import { useSelect } from '@wordpress/data';
   * import { store as myCustomStore } from 'my-custom-store';
   *
   * function HammerPriceDisplay( { currency } ) {
   *   const price = useSelect( ( select ) => {
   *     return select( myCustomStore ).getPrice( 'hammer', currency );
   *   }, [ currency ] );
   *   return new Intl.NumberFormat( 'en-US', {
   *     style: 'currency',
   *     currency,
   *   } ).format( price );
   * }
   *
   * // Rendered in the application:
   * // <HammerPriceDisplay currency="USD" />
   * ```
   *
   * In the above example, when `HammerPriceDisplay` is rendered into an
   * application, the price will be retrieved from the store state using the
   * `mapSelect` callback on `useSelect`. If the currency prop changes then
   * any price in the state for that currency is retrieved. If the currency prop
   * doesn't change and other props are passed in that do change, the price will
   * not change because the dependency is just the currency.
   *
   * When data is only used in an event callback, the data should not be retrieved
   * on render, so it may be useful to get the selectors function instead.
   *
   * **Don't use `useSelect` this way when calling the selectors in the render
   * function because your component won't re-render on a data change.**
   *
   * ```js
   * import { useSelect } from '@wordpress/data';
   * import { store as myCustomStore } from 'my-custom-store';
   *
   * function Paste( { children } ) {
   *   const { getSettings } = useSelect( myCustomStore );
   *   function onPaste() {
   *     // Do something with the settings.
   *     const settings = getSettings();
   *   }
   *   return <div onPaste={ onPaste }>{ children }</div>;
   * }
   * ```
   * @return {UseSelectReturn<T>} A custom react hook.
   */
  function useSelect(mapSelect, deps) {
    // On initial call, on mount, determine the mode of this `useSelect` call
    // and then never allow it to change on subsequent updates.
    const staticSelectMode = typeof mapSelect !== 'function';
    const staticSelectModeRef = wp.element.useRef(staticSelectMode);
    if (staticSelectMode !== staticSelectModeRef.current) {
      const prevMode = staticSelectModeRef.current ? 'static' : 'mapping';
      const nextMode = staticSelectMode ? 'static' : 'mapping';
      throw new Error(`Switching useSelect from ${prevMode} to ${nextMode} is not allowed`);
    }

    /* eslint-disable react-hooks/rules-of-hooks */
    // `staticSelectMode` is not allowed to change during the hook instance's,
    // lifetime, so the rules of hooks are not really violated.
    return staticSelectMode ? useStaticSelect(mapSelect) : useMappingSelect(false, mapSelect, deps);
    /* eslint-enable react-hooks/rules-of-hooks */
  }

  /**
   * React hook for retrieving props from registered selectors.
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/#useselect
   */

  /**
   *
   * @param {*} clientId
   * @returns
   */
  function useBlockIndex(clientId) {
    var _useSelect = useSelect(function (select) {
        var _select;
        return {
          getBlockIndex: (_select = select('core/block-editor')) === null || _select === void 0 ? void 0 : _select.getBlockIndex
        };
      }),
      getBlockIndex = _useSelect.getBlockIndex;
    return getBlockIndex && getBlockIndex(clientId) || 0;
  }
  function useClickOutside(ref, callback) {
    wp.element.useEffect(function () {
      var handleClickOutside = function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          callback && callback(event);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return function () {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  /**
   * React hook for retrieving props from registered selectors.
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/#useselect
   */

  /**
   *
   * @param {*} clientId
   * @returns
   */
  function useInnerBlocks(clientId) {
    var _useSelect = useSelect(function (select) {
        var _select;
        return {
          getBlocks: (_select = select('core/block-editor')) === null || _select === void 0 ? void 0 : _select.getBlocks
        };
      }),
      getBlocks = _useSelect.getBlocks;
    return getBlocks && getBlocks(clientId) || [];
  }

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var classnames = {exports: {}};

  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */

  (function (module) {
  	/* global define */

  	(function () {

  	  var hasOwn = {}.hasOwnProperty;
  	  function classNames() {
  	    var classes = [];
  	    for (var i = 0; i < arguments.length; i++) {
  	      var arg = arguments[i];
  	      if (!arg) continue;
  	      var argType = typeof arg;
  	      if (argType === 'string' || argType === 'number') {
  	        classes.push(arg);
  	      } else if (Array.isArray(arg)) {
  	        if (arg.length) {
  	          var inner = classNames.apply(null, arg);
  	          if (inner) {
  	            classes.push(inner);
  	          }
  	        }
  	      } else if (argType === 'object') {
  	        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
  	          classes.push(arg.toString());
  	          continue;
  	        }
  	        for (var key in arg) {
  	          if (hasOwn.call(arg, key) && arg[key]) {
  	            classes.push(key);
  	          }
  	        }
  	      }
  	    }
  	    return classes.join(' ');
  	  }
  	  if (module.exports) {
  	    classNames.default = classNames;
  	    module.exports = classNames;
  	  } else {
  	    window.classNames = classNames;
  	  }
  	})(); 
  } (classnames));

  var classnamesExports = classnames.exports;
  var classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

  var css$c = ".components-toolbar-group .components-button.blueprint-blocks\\:toolbar-field-button[subscript],\n.components-toolbar-group .components-button.has-icon.blueprint-blocks\\:toolbar-field-button[subscript] {\n  padding-right: 16px;\n}\n\n.components-toolbar-group .components-button.blueprint-blocks\\:toolbar-field-button[subscript]::after,\n.components-toolbar-group .components-button.has-icon.blueprint-blocks\\:toolbar-field-button[subscript]::after {\n  bottom: calc(50% - 9px);\n  content: attr(subscript);\n  font-size: 12px;\n  font-weight: bold;\n  left: calc(100% - 17px);\n  line-height: 12px;\n  position: absolute;\n  transform: translateX(-50%);\n}";
  n(css$c,{});

  var _excluded$$ = ["onInput", "options", "multiple", "disabled", "value"],
    _excluded2$4 = ["icon", "subscript", "label"];
  function edit$v(_ref) {
    var onInput = _ref.onInput,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options;
      _ref.multiple;
      _ref.disabled;
      var value = _ref.value;
      _objectWithoutProperties$1(_ref, _excluded$$);
    return /*#__PURE__*/React.createElement("div", {
      className: classNames('blueprint-blocks:toolbar-field')
    }, options.map(function (_ref2) {
      var icon = _ref2.icon,
        subscript = _ref2.subscript,
        label = _ref2.label,
        option = _objectWithoutProperties$1(_ref2, _excluded2$4);
      return /*#__PURE__*/React.createElement(wp.components.ToolbarButton, {
        icon: icon || /*#__PURE__*/React.createElement("div", {
          className: "label"
        }, label),
        subscript: subscript,
        className: "blueprint-blocks:toolbar-field-button",
        title: label,
        isActive: option.value === value,
        onClick: function onClick() {
          return onInput(option.value);
        }
      });
    }));
  }

  var css$b = ".components-panel__body .blueprint-blocks\\:field {\n  margin: 0 0 16px;\n}\n\n.components-panel__body .blueprint-blocks\\:field:last-child {\n  margin-bottom: 0;\n}\n\n.blueprint-blocks\\:field-label {\n  margin-bottom: 8px;\n}";
  n(css$b,{});

  var _excluded$_ = ["attributes", "clientId", "blockName", "attributeName", "children", "dangerouslySetInnerHTML", "innerHtml", "className", "label", "tagName", "type", "display", "value", "onInput"];
  var selfClosingTagNames$1 = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
  function preventEventPropagation(event) {
    event.stopPropagation();
    event.nativeEvent.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  }
  function edit$u(_ref) {
    _ref.attributes;
      _ref.clientId;
      _ref.blockName;
      _ref.attributeName;
      var _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children,
      dangerouslySetInnerHTML = _ref.dangerouslySetInnerHTML;
      _ref.innerHtml;
      var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$tagName = _ref.tagName,
      tagName = _ref$tagName === void 0 ? 'div' : _ref$tagName;
      _ref.type;
      var _ref$display = _ref.display,
      display = _ref$display === void 0 ? true : _ref$display;
      _ref.value;
      _ref.onInput;
      var props = _objectWithoutProperties$1(_ref, _excluded$_);
    if (display !== true && Boolean(display) === false) {
      return;
    }
    var ref = wp.element.createRef();
    var fieldProps = Object.assign({}, props);
    if (className) {
      fieldProps.className = className;
    }
    var Component = tagName;
    if (selfClosingTagNames$1.includes(tagName) === false && dangerouslySetInnerHTML) {
      return /*#__PURE__*/React.createElement(Component, _extends$1({}, fieldProps, {
        ref: ref,
        onClick: preventEventPropagation,
        onInput: preventEventPropagation,
        onKeydown: preventEventPropagation,
        dangerouslySetInnerHTML: dangerouslySetInnerHTML
      }));
    }
    if (selfClosingTagNames$1.includes(tagName) === true || Boolean(children) === false && ((label === null || label === void 0 ? void 0 : label.length) || 0) === 0) {
      return /*#__PURE__*/React.createElement(Component, _extends$1({}, fieldProps, {
        ref: ref,
        onClick: preventEventPropagation,
        onInput: preventEventPropagation,
        onKeydown: preventEventPropagation
      }));
    }
    return /*#__PURE__*/React.createElement(Component, _extends$1({}, fieldProps, {
      ref: ref,
      onClick: preventEventPropagation,
      onInput: preventEventPropagation,
      onKeydown: preventEventPropagation
    }), label && /*#__PURE__*/React.createElement("div", {
      className: "blueprint-blocks:field-label"
    }, label), children);
  }

  var _excluded$Z = ["attributes", "blockName", "attributeName", "label", "children", "innerHtml", "className", "tagName", "type", "display"];
  var selfClosingTagNames = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
  function save$t(_ref) {
    _ref.attributes;
      _ref.blockName;
      _ref.attributeName;
      _ref.label;
      var _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children;
      _ref.innerHtml;
      var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$tagName = _ref.tagName,
      tagName = _ref$tagName === void 0 ? 'div' : _ref$tagName;
      _ref.type;
      var _ref$display = _ref.display,
      display = _ref$display === void 0 ? true : _ref$display,
      props = _objectWithoutProperties$1(_ref, _excluded$Z);
    if (display !== true && Boolean(display) === false) {
      return;
    }
    var fieldProps = Object.assign({}, props);
    if (className) {
      fieldProps.className = className;
    }
    if (tagName === 'a' && 'href' in fieldProps && !('rel' in fieldProps) && (isExternalUrl(fieldProps.href) || isFragmentUrl(fieldProps.href) || 'target' in fieldProps)) {
      fieldProps.rel = 'noopener';
    }
    var Component = tagName;
    if (selfClosingTagNames.includes(tagName) === true || ((children === null || children === void 0 ? void 0 : children.length) || 0) === 0 || props.dangerouslySetInnerHTML) ;
    return /*#__PURE__*/React.createElement(Component, _extends$1({}, fieldProps, {
      children: children
    }));
  }

  var Field = {
    edit: edit$u,
    save: save$t
  };

  var _excluded$Y = ["value"];
  function save$s(_ref) {
    var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$Y);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "toolbar",
      dangerouslySetInnerHTML: {
        __html: value
      }
    }));
  }

  var ToolbarField = {
    name: 'toolbar-field',
    edit: edit$v,
    save: save$s
  };

  var full = {
  	icon: "align-full-width",
  	value: "full"
  };
  var wide = {
  	icon: "align-wide-width",
  	value: "wide"
  };
  var left$3 = {
  	icon: "align-left",
  	value: "left"
  };
  var center$1 = {
  	icon: "align-center",
  	value: "center"
  };
  var right$3 = {
  	icon: "align-right",
  	value: "right"
  };
  var ALIGN_CONTROLS = {
  	full: full,
  	wide: wide,
  	left: left$3,
  	center: center$1,
  	right: right$3
  };

  var _excluded$X = ["onInput", "controls", "value"];
  function edit$t(_ref) {
    var onInput = _ref.onInput,
      _ref$controls = _ref.controls,
      controls = _ref$controls === void 0 ? ['left', 'center', 'right'] : _ref$controls,
      value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$X);
    return /*#__PURE__*/React.createElement(ToolbarField.edit, _extends$1({}, props, {
      type: "align",
      value: value,
      options: controls.map(function (control) {
        return control in ALIGN_CONTROLS && ALIGN_CONTROLS[control] || control;
      }),
      onInput: onInput
    }));
  }

  var _excluded$W = ["value"];
  function save$r(_ref) {
    var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$W);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "align",
      dangerouslySetInnerHTML: {
        __html: value
      }
    }));
  }

  var index$m = {
    name: 'align-field',
    edit: edit$t,
    save: save$r
  };

  var _excluded$V = ["onInput", "placeholder", "pattern", "customValidity", "disabled", "required", "value"];
  var inputStyle = {
    background: '#fff',
    border: '1px solid #8c8f94',
    borderRadius: '4px',
    color: '#2c3338',
    display: 'block',
    fontFamily: 'var(--wp--preset--font-family--system-font)',
    fontSize: '14px',
    fontWeight: 'normal',
    height: '30px',
    lineHeight: '28px',
    maxWidth: '400px',
    padding: '0 8px',
    textAlign: 'inherit',
    transition: 'none',
    width: '100%'
  };
  function edit$s(_ref) {
    var _onInput = _ref.onInput,
      placeholder = _ref.placeholder,
      _ref$pattern = _ref.pattern,
      pattern = _ref$pattern === void 0 ? '' : _ref$pattern,
      _ref$customValidity = _ref.customValidity,
      customValidity = _ref$customValidity === void 0 ? '' : _ref$customValidity,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$V);
    var ref = wp.element.createRef();
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      type: "text",
      value: value
    }), /*#__PURE__*/React.createElement("input", {
      ref: ref,
      type: "text",
      onInput: function onInput(_ref2) {
        var _target$validity;
        var target = _ref2.target;
        if (target !== null && target !== void 0 && (_target$validity = target.validity) !== null && _target$validity !== void 0 && _target$validity.patternMismatch && customValidity) {
          target === null || target === void 0 || target.setCustomValidity(customValidity);
        } else {
          target === null || target === void 0 || target.setCustomValidity('');
        }
        target === null || target === void 0 || target.reportValidity();
        _onInput(target.value);
      },
      placeholder: placeholder,
      pattern: pattern,
      disabled: disabled,
      required: required,
      value: value,
      style: inputStyle
    }));
  }

  var _excluded$U = ["placeholder", "pattern", "disabled", "required", "value"];
  function save$q(_ref) {
    _ref.placeholder;
      _ref.pattern;
      _ref.disabled;
      _ref.required;
      var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$U);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "text",
      dangerouslySetInnerHTML: {
        __html: value
      }
    }));
  }

  var TextField = {
    name: 'text-field',
    edit: edit$s,
    save: save$q
  };

  var css$a = ".blueprint-blocks\\:link-field-wrap {\n  position: relative;\n}\n\n.blueprint-blocks\\:link-field-properties {\n  align-items: center;\n  display: grid;\n  grid-gap: 8px;\n  grid-template-columns: 1fr 12px 34px;\n  row-gap: 4px;\n}\n\n.blueprint-blocks\\:link-field-properties:after {\n  background: var(--blueprint-blocks-color-gray);\n  content: \"\";\n  display: block;\n  height: 2px;\n  grid-column: 1/span 3;\n}\n\n.blueprint-blocks\\:link-field-properties .blueprint-blocks\\:url-field input[type=text] {\n  border: 0;\n  line-height: 32px;\n  padding: 0;\n}\n\n.blueprint-blocks\\:link-field-properties .blueprint-blocks\\:url-field input[type=text]:focus,\n.blueprint-blocks\\:link-field-properties .blueprint-blocks\\:url-field input[type=text]:hover {\n  border: 0;\n  box-shadow: none;\n  outline: none;\n}";
  n(css$a,{});

  var _excluded$T = ["onInput", "className", "customValidity", "placeholder", "value"];
  function edit$r(_ref) {
    var _onInput = _ref.onInput,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? [] : _ref$className,
      _ref$customValidity = _ref.customValidity,
      customValidity = _ref$customValidity === void 0 ? '' : _ref$customValidity,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? '#anchor-name' : _ref$placeholder,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? {} : _ref$value,
      props = _objectWithoutProperties$1(_ref, _excluded$T);
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      description: (props === null || props === void 0 ? void 0 : props.description) || wp.i18n.__('Enter an id for the anchor to this element on the page.'),
      className: classNames(Array.isArray(className) && className || [className]),
      type: "anchor",
      value: value
    }), /*#__PURE__*/React.createElement("div", {
      className: "blueprint-blocks:anchor-field-wrap"
    }, /*#__PURE__*/React.createElement(TextField.edit, {
      placeholder: placeholder,
      pattern: "#?[A-Za-z0-9_-]+",
      customValidity: customValidity || wp.i18n.__('Anchors must be formatted with a # followed by letters, numbers, dashes, or underscores.'),
      value: value,
      onInput: function onInput(value) {
        if (value.slice(0, 1) !== '#') {
          _onInput("#".concat(value));
        } else {
          _onInput(value);
        }
      }
    })));
  }

  var _excluded$S = ["value"];
  function save$p(_ref) {
    var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$S);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "anchor",
      dangerouslySetInnerHTML: {
        __html: value
      }
    }));
  }

  var index$l = {
    name: 'anchor-field',
    edit: edit$r,
    save: save$p
  };

  var elStyle$2 = {
    background: '#000',
    borderRadius: '2px',
    bottom: 'calc(100% + 5px)',
    color: '#fff',
    display: 'none',
    fontSize: '12px',
    left: '50%',
    padding: '4px 8px',
    position: 'absolute',
    minWidth: '80px',
    transform: 'translateX(-50%)',
    whiteSpace: 'nowrap',
    zIndex: '10'
  };
  var elShowStyle = {
    display: 'block'
  };
  var afterStyle = {
    borderLeft: '4px solid transparent',
    borderRight: '4px solid transparent',
    borderTop: '4px solid #000',
    bottom: '-4px',
    content: '',
    display: 'block',
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%)'
  };
  function Tooltip(_ref) {
    var label = _ref.label,
      show = _ref.show;
    return /*#__PURE__*/React.createElement("div", {
      style: _objectSpread2$2(_objectSpread2$2({}, elStyle$2), show === true && elShowStyle)
    }, label, /*#__PURE__*/React.createElement("div", {
      style: afterStyle
    }));
  }

  var _excluded$R = ["onInput", "options", "multiple", "disabled", "size", "tooltip", "tooltipPosition", "value"];
  var elStyle$1 = {
    '--padding': '2px',
    '--size': '22px'
  };
  var elSmallStyle = {
    '--size': '14px'
  };
  var wrapStyle$3 = {
    border: '1px solid #8d96a0',
    borderRadius: 'calc(2px + var(--size) + (var(--padding) * 2))',
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'grid',
    gridGap: 'var(--padding)',
    gridTemplateColumns: 'var(--size) var(--size)',
    height: 'calc(2px + var(--size) + (var(--padding) * 2))',
    padding: 'var(--padding)',
    position: 'relative',
    userSelect: 'none',
    width: 'calc((var(--size) * 2) + (var(--padding) * 3) + 2px)'
  };
  var toggleSizeStyle = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: 'var(--size)',
    width: 'var(--size)'
  };
  var toggleFalsePositionStyle = {
    gridColumn: '1',
    gridRow: '1'
  };
  var toggleTruePositionStyle = {
    gridColumn: '2',
    gridRow: '1'
  };
  var toggleStyle$1 = {
    background: '#8d96a0',
    borderRadius: 'var(--size)'
  };
  var toggleTrueStyle = {
    background: 'var(--wp-admin-theme-color)'
  };
  function edit$q(_ref) {
    var onInput = _ref.onInput;
      _ref.options;
      _ref.multiple;
      _ref.disabled;
      var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'normal' : _ref$size,
      tooltip = _ref.tooltip;
      _ref.tooltipPosition;
      var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$R);
    var _useState = wp.element.useState(false),
      _useState2 = _slicedToArray$1(_useState, 2),
      hasHover = _useState2[0],
      setHasHover = _useState2[1];
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      type: "boolean",
      value: value,
      style: _objectSpread2$2(_objectSpread2$2({}, elStyle$1), size === 'small' && elSmallStyle),
      onMouseEnter: function onMouseEnter() {
        return setHasHover(true);
      },
      onMouseLeave: function onMouseLeave() {
        return setHasHover(false);
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: wrapStyle$3,
      onClick: function onClick() {
        return onInput(!value);
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: _objectSpread2$2(_objectSpread2$2({}, toggleSizeStyle), toggleFalsePositionStyle)
    }), /*#__PURE__*/React.createElement("div", {
      style: _objectSpread2$2(_objectSpread2$2({}, toggleSizeStyle), toggleTruePositionStyle)
    }), /*#__PURE__*/React.createElement("div", {
      style: _objectSpread2$2(_objectSpread2$2(_objectSpread2$2(_objectSpread2$2(_objectSpread2$2({}, toggleStyle$1), toggleSizeStyle), value === true && toggleTrueStyle), value === true && toggleTruePositionStyle), value === false && toggleFalsePositionStyle)
    }), tooltip && /*#__PURE__*/React.createElement(Tooltip, {
      label: tooltip,
      show: hasHover
    })));
  }

  var _excluded$Q = ["value"];
  function save$o(_ref) {
    var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$Q);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "select",
      dangerouslySetInnerHTML: {
        __html: value && 'true' || 'false'
      }
    }));
  }

  var BooleanField = {
    name: 'boolean-field',
    edit: edit$q,
    save: save$o
  };

  /**
   * @constant DEFAULT_OPTIONS_KEYS the default options keys
   */
  var DEFAULT_OPTIONS_KEYS = {
    isEqual: true,
    isMatchingKey: true,
    isPromise: true,
    maxSize: true,
    onCacheAdd: true,
    onCacheChange: true,
    onCacheHit: true,
    transformKey: true
  };
  /**
   * @function slice
   *
   * @description
   * slice.call() pre-bound
   */
  var slice = Array.prototype.slice;
  /**
   * @function cloneArray
   *
   * @description
   * clone the array-like object and return the new array
   *
   * @param arrayLike the array-like object to clone
   * @returns the clone as an array
   */
  function cloneArray(arrayLike) {
    var length = arrayLike.length;
    if (!length) {
      return [];
    }
    if (length === 1) {
      return [arrayLike[0]];
    }
    if (length === 2) {
      return [arrayLike[0], arrayLike[1]];
    }
    if (length === 3) {
      return [arrayLike[0], arrayLike[1], arrayLike[2]];
    }
    return slice.call(arrayLike, 0);
  }
  /**
   * @function getCustomOptions
   *
   * @description
   * get the custom options on the object passed
   *
   * @param options the memoization options passed
   * @returns the custom options passed
   */
  function getCustomOptions(options) {
    var customOptions = {};
    /* eslint-disable no-restricted-syntax */
    for (var key in options) {
      if (!DEFAULT_OPTIONS_KEYS[key]) {
        customOptions[key] = options[key];
      }
    }
    /* eslint-enable */
    return customOptions;
  }
  /**
   * @function isMemoized
   *
   * @description
   * is the function passed already memoized
   *
   * @param fn the function to test
   * @returns is the function already memoized
   */
  function isMemoized(fn) {
    return typeof fn === 'function' && fn.isMemoized;
  }
  /**
   * @function isSameValueZero
   *
   * @description
   * are the objects equal based on SameValueZero equality
   *
   * @param object1 the first object to compare
   * @param object2 the second object to compare
   * @returns are the two objects equal
   */
  function isSameValueZero(object1, object2) {
    // eslint-disable-next-line no-self-compare
    return object1 === object2 || object1 !== object1 && object2 !== object2;
  }
  /**
   * @function mergeOptions
   *
   * @description
   * merge the options into the target
   *
   * @param existingOptions the options provided
   * @param newOptions the options to include
   * @returns the merged options
   */
  function mergeOptions(existingOptions, newOptions) {
    var target = {};
    /* eslint-disable no-restricted-syntax */
    for (var key in existingOptions) {
      target[key] = existingOptions[key];
    }
    for (var key in newOptions) {
      target[key] = newOptions[key];
    }
    /* eslint-enable */
    return target;
  }

  // utils
  var Cache = /** @class */function () {
    function Cache(options) {
      this.keys = [];
      this.values = [];
      this.options = options;
      var isMatchingKeyFunction = typeof options.isMatchingKey === 'function';
      if (isMatchingKeyFunction) {
        this.getKeyIndex = this._getKeyIndexFromMatchingKey;
      } else if (options.maxSize > 1) {
        this.getKeyIndex = this._getKeyIndexForMany;
      } else {
        this.getKeyIndex = this._getKeyIndexForSingle;
      }
      this.canTransformKey = typeof options.transformKey === 'function';
      this.shouldCloneArguments = this.canTransformKey || isMatchingKeyFunction;
      this.shouldUpdateOnAdd = typeof options.onCacheAdd === 'function';
      this.shouldUpdateOnChange = typeof options.onCacheChange === 'function';
      this.shouldUpdateOnHit = typeof options.onCacheHit === 'function';
    }
    Object.defineProperty(Cache.prototype, "size", {
      /**
       * The number of cached [key,value] results.
       */
      get: function () {
        return this.keys.length;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Cache.prototype, "snapshot", {
      /**
       * A copy of the cache at a moment in time. This is useful
       * to compare changes over time, since the cache mutates
       * internally for performance reasons.
       */
      get: function () {
        return {
          keys: cloneArray(this.keys),
          size: this.size,
          values: cloneArray(this.values)
        };
      },
      enumerable: false,
      configurable: true
    });
    /**
     * Gets the matching key index when a custom key matcher is used.
     */
    Cache.prototype._getKeyIndexFromMatchingKey = function (keyToMatch) {
      var _a = this.options,
        isMatchingKey = _a.isMatchingKey,
        maxSize = _a.maxSize;
      var keys = this.keys;
      var keysLength = keys.length;
      if (!keysLength) {
        return -1;
      }
      if (isMatchingKey(keys[0], keyToMatch)) {
        return 0;
      }
      if (maxSize > 1) {
        for (var index = 1; index < keysLength; index++) {
          if (isMatchingKey(keys[index], keyToMatch)) {
            return index;
          }
        }
      }
      return -1;
    };
    /**
     * Gets the matching key index when multiple keys are used.
     */
    Cache.prototype._getKeyIndexForMany = function (keyToMatch) {
      var isEqual = this.options.isEqual;
      var keys = this.keys;
      var keysLength = keys.length;
      if (!keysLength) {
        return -1;
      }
      if (keysLength === 1) {
        return this._getKeyIndexForSingle(keyToMatch);
      }
      var keyLength = keyToMatch.length;
      var existingKey;
      var argIndex;
      if (keyLength > 1) {
        for (var index = 0; index < keysLength; index++) {
          existingKey = keys[index];
          if (existingKey.length === keyLength) {
            argIndex = 0;
            for (; argIndex < keyLength; argIndex++) {
              if (!isEqual(existingKey[argIndex], keyToMatch[argIndex])) {
                break;
              }
            }
            if (argIndex === keyLength) {
              return index;
            }
          }
        }
      } else {
        for (var index = 0; index < keysLength; index++) {
          existingKey = keys[index];
          if (existingKey.length === keyLength && isEqual(existingKey[0], keyToMatch[0])) {
            return index;
          }
        }
      }
      return -1;
    };
    /**
     * Gets the matching key index when a single key is used.
     */
    Cache.prototype._getKeyIndexForSingle = function (keyToMatch) {
      var keys = this.keys;
      if (!keys.length) {
        return -1;
      }
      var existingKey = keys[0];
      var length = existingKey.length;
      if (keyToMatch.length !== length) {
        return -1;
      }
      var isEqual = this.options.isEqual;
      if (length > 1) {
        for (var index = 0; index < length; index++) {
          if (!isEqual(existingKey[index], keyToMatch[index])) {
            return -1;
          }
        }
        return 0;
      }
      return isEqual(existingKey[0], keyToMatch[0]) ? 0 : -1;
    };
    /**
     * Order the array based on a Least-Recently-Used basis.
     */
    Cache.prototype.orderByLru = function (key, value, startingIndex) {
      var keys = this.keys;
      var values = this.values;
      var currentLength = keys.length;
      var index = startingIndex;
      while (index--) {
        keys[index + 1] = keys[index];
        values[index + 1] = values[index];
      }
      keys[0] = key;
      values[0] = value;
      var maxSize = this.options.maxSize;
      if (currentLength === maxSize && startingIndex === currentLength) {
        keys.pop();
        values.pop();
      } else if (startingIndex >= maxSize) {
        // eslint-disable-next-line no-multi-assign
        keys.length = values.length = maxSize;
      }
    };
    /**
     * Update the promise method to auto-remove from cache if rejected, and
     * if resolved then fire cache hit / changed.
     */
    Cache.prototype.updateAsyncCache = function (memoized) {
      var _this = this;
      var _a = this.options,
        onCacheChange = _a.onCacheChange,
        onCacheHit = _a.onCacheHit;
      var firstKey = this.keys[0];
      var firstValue = this.values[0];
      this.values[0] = firstValue.then(function (value) {
        if (_this.shouldUpdateOnHit) {
          onCacheHit(_this, _this.options, memoized);
        }
        if (_this.shouldUpdateOnChange) {
          onCacheChange(_this, _this.options, memoized);
        }
        return value;
      }, function (error) {
        var keyIndex = _this.getKeyIndex(firstKey);
        if (keyIndex !== -1) {
          _this.keys.splice(keyIndex, 1);
          _this.values.splice(keyIndex, 1);
        }
        throw error;
      });
    };
    return Cache;
  }();
  function createMemoizedFunction(fn, options) {
    if (options === void 0) {
      options = {};
    }
    if (isMemoized(fn)) {
      return createMemoizedFunction(fn.fn, mergeOptions(fn.options, options));
    }
    if (typeof fn !== 'function') {
      throw new TypeError('You must pass a function to `memoize`.');
    }
    var _a = options.isEqual,
      isEqual = _a === void 0 ? isSameValueZero : _a,
      isMatchingKey = options.isMatchingKey,
      _b = options.isPromise,
      isPromise = _b === void 0 ? false : _b,
      _c = options.maxSize,
      maxSize = _c === void 0 ? 1 : _c,
      onCacheAdd = options.onCacheAdd,
      onCacheChange = options.onCacheChange,
      onCacheHit = options.onCacheHit,
      transformKey = options.transformKey;
    var normalizedOptions = mergeOptions({
      isEqual: isEqual,
      isMatchingKey: isMatchingKey,
      isPromise: isPromise,
      maxSize: maxSize,
      onCacheAdd: onCacheAdd,
      onCacheChange: onCacheChange,
      onCacheHit: onCacheHit,
      transformKey: transformKey
    }, getCustomOptions(options));
    var cache = new Cache(normalizedOptions);
    var keys = cache.keys,
      values = cache.values,
      canTransformKey = cache.canTransformKey,
      shouldCloneArguments = cache.shouldCloneArguments,
      shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
      shouldUpdateOnChange = cache.shouldUpdateOnChange,
      shouldUpdateOnHit = cache.shouldUpdateOnHit;
    var memoized = function () {
      var key = shouldCloneArguments ? cloneArray(arguments) : arguments;
      if (canTransformKey) {
        key = transformKey(key);
      }
      var keyIndex = keys.length ? cache.getKeyIndex(key) : -1;
      if (keyIndex !== -1) {
        if (shouldUpdateOnHit) {
          onCacheHit(cache, normalizedOptions, memoized);
        }
        if (keyIndex) {
          cache.orderByLru(keys[keyIndex], values[keyIndex], keyIndex);
          if (shouldUpdateOnChange) {
            onCacheChange(cache, normalizedOptions, memoized);
          }
        }
      } else {
        var newValue = fn.apply(this, arguments);
        var newKey = shouldCloneArguments ? key : cloneArray(arguments);
        cache.orderByLru(newKey, newValue, keys.length);
        if (isPromise) {
          cache.updateAsyncCache(memoized);
        }
        if (shouldUpdateOnAdd) {
          onCacheAdd(cache, normalizedOptions, memoized);
        }
        if (shouldUpdateOnChange) {
          onCacheChange(cache, normalizedOptions, memoized);
        }
      }
      return values[0];
    };
    memoized.cache = cache;
    memoized.fn = fn;
    memoized.isMemoized = true;
    memoized.options = normalizedOptions;
    return memoized;
  }

  var _excluded$P = ["blockName", "name", "colors", "clearable", "disableCustomColors", "enableAlpha", "value", "saveAs", "onInput"];
  var getColor = createMemoizedFunction(function (_ref) {
    var color = _ref.color,
      name = _ref.name,
      slug = _ref.slug;
    var colors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    for (var i = 0; i < colors.length; i++) {
      var _colors$i, _colors$i2, _colors$i3;
      if (((_colors$i = colors[i]) === null || _colors$i === void 0 ? void 0 : _colors$i.color) === color || ((_colors$i2 = colors[i]) === null || _colors$i2 === void 0 ? void 0 : _colors$i2.name) === name || ((_colors$i3 = colors[i]) === null || _colors$i3 === void 0 ? void 0 : _colors$i3.slug) === slug) {
        return colors[i];
      }
    }
    return {
      color: color,
      name: name || 'Custom',
      slug: slug || 'custom'
    };
  });
  var getSavedAsToken = createMemoizedFunction(function (saveAs) {
    if (saveAs.indexOf('{{ color.slug }}') !== -1) {
      return ['slug', saveAs.indexOf('{{ color.slug }}')];
    } else if (saveAs.indexOf('{{ color.color }}') !== -1) {
      return ['color', saveAs.indexOf('{{ color.color }}')];
    } else if (saveAs.indexOf('{{ color.name }}') !== -1) {
      return ['name', saveAs.indexOf('{{ color.name }}')];
    }
    return [null, null];
  });
  var getColorFromSavedAsValue = createMemoizedFunction(function (value, saveAs) {
    var colors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var _getSavedAsToken = getSavedAsToken(saveAs),
      _getSavedAsToken2 = _slicedToArray$1(_getSavedAsToken, 2),
      key = _getSavedAsToken2[0];
      _getSavedAsToken2[1];
    if (key === null) {
      return null;
    }
    for (var i = 0; i < colors.length; i++) {
      if (value.indexOf(colors[i][key]) !== -1) {
        return colors[i];
      }
    }
    return value;
  });
  function edit$p(_ref2) {
    var _colorValue;
    _ref2.blockName;
      _ref2.name;
      var _ref2$colors = _ref2.colors,
      colors = _ref2$colors === void 0 ? null : _ref2$colors,
      _ref2$clearable = _ref2.clearable,
      clearable = _ref2$clearable === void 0 ? true : _ref2$clearable,
      _ref2$disableCustomCo = _ref2.disableCustomColors,
      disableCustomColors = _ref2$disableCustomCo === void 0 ? false : _ref2$disableCustomCo,
      _ref2$enableAlpha = _ref2.enableAlpha,
      enableAlpha = _ref2$enableAlpha === void 0 ? false : _ref2$enableAlpha,
      value = _ref2.value,
      _ref2$saveAs = _ref2.saveAs,
      saveAs = _ref2$saveAs === void 0 ? '{{ color.color }}' : _ref2$saveAs,
      onInput = _ref2.onInput,
      props = _objectWithoutProperties$1(_ref2, _excluded$P);
    var palette = colors === null && wp.blockEditor.useSetting('color.palette') || colors || [];
    var colorValue = value;
    if (saveAs !== '{{ color.color }}') {
      colorValue = getColorFromSavedAsValue(value, saveAs, palette);
    }
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      type: "color",
      value: value
    }), /*#__PURE__*/React.createElement(wp.components.ColorPalette, {
      colors: palette,
      clearable: clearable,
      disableCustomColors: disableCustomColors,
      enableAlpha: enableAlpha,
      value: ((_colorValue = colorValue) === null || _colorValue === void 0 ? void 0 : _colorValue.color) || colorValue,
      onChange: function onChange(hex) {
        var color = getColor({
          color: hex
        }, palette);
        return onInput((color === null || color === void 0 ? void 0 : color.slug) === "custom" && color.color || replaceTokens(saveAs, {
          color: color
        }));
      }
    }));
  }

  var _excluded$O = ["value"];
  function save$n(_ref) {
    var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$O);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "color",
      dangerouslySetInnerHTML: {
        __html: value
      }
    }));
  }

  var index$k = {
    name: 'color-field',
    edit: edit$p,
    save: save$n
  };

  var _excluded$N = ["onInput", "placeholder", "pattern", "disabled", "multiple", "required", "value"];

  //import './style.scss'

  function edit$o(_ref) {
    var onInput = _ref.onInput,
      placeholder = _ref.placeholder,
      _ref$pattern = _ref.pattern,
      pattern = _ref$pattern === void 0 ? '' : _ref$pattern,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$N);
    var ref = wp.element.createRef();
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      type: "email",
      value: value
    }), /*#__PURE__*/React.createElement("input", {
      ref: ref,
      type: "email",
      onBlur: function onBlur() {
        var _ref$current;
        return ref === null || ref === void 0 || (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.reportValidity();
      },
      onChange: function onChange(_ref2) {
        var target = _ref2.target;
        return onInput(target.value);
      },
      placeholder: placeholder,
      pattern: pattern,
      disabled: disabled,
      multiple: multiple,
      required: required,
      value: value
    }));
  }

  var _excluded$M = ["placeholder", "pattern", "disabled", "multiple", "required", "value"];
  function save$m(_ref) {
    _ref.placeholder;
      _ref.pattern;
      _ref.disabled;
      _ref.multiple;
      _ref.required;
      var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$M);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "email",
      dangerouslySetInnerHTML: {
        __html: value
      }
    }));
  }

  var index$j = {
    name: 'email-field',
    edit: edit$o,
    save: save$m
  };

  var _excluded$L = ["blockName", "name", "gradients", "clearable", "enableCustomGradients", "value", "onInput"];
  var getGradient = createMemoizedFunction(function (slug) {
    var gradients = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    for (var i = 0; i < gradients.length; i++) {
      if (gradients[i].slug === slug) {
        return gradients[i].gradient;
      }
    }
    return slug;
  });
  var getSlug = createMemoizedFunction(function (gradient) {
    var gradients = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    for (var i = 0; i < gradients.length; i++) {
      if (gradients[i].gradient === gradient) {
        return gradients[i].slug;
      }
    }
    return gradient;
  });
  function edit$n(_ref) {
    _ref.blockName;
      _ref.name;
      var _ref$gradients = _ref.gradients,
      gradients = _ref$gradients === void 0 ? [] : _ref$gradients,
      _ref$clearable = _ref.clearable,
      clearable = _ref$clearable === void 0 ? true : _ref$clearable,
      _ref$enableCustomGrad = _ref.enableCustomGradients,
      enableCustomGradients = _ref$enableCustomGrad === void 0 ? true : _ref$enableCustomGrad,
      value = _ref.value,
      onInput = _ref.onInput,
      props = _objectWithoutProperties$1(_ref, _excluded$L);
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      type: "gradient",
      value: value
    }), /*#__PURE__*/React.createElement(wp.components.GradientPicker, {
      gradients: gradients,
      clearable: clearable,
      disableCustomGradients: !enableCustomGradients,
      value: getGradient(value, gradients),
      onChange: function onChange(value) {
        return onInput(getSlug(value, gradients));
      }
    }));
  }

  var _excluded$K = ["value"];
  function save$l(_ref) {
    var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$K);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "gradient",
      dangerouslySetInnerHTML: {
        __html: value
      }
    }));
  }

  var index$i = {
    name: 'gradient-field',
    edit: edit$n,
    save: save$l
  };

  var desktop = {
  	icon: "desktop",
  	label: "Desktop"
  };
  var laptop = {
  	icon: "laptop",
  	label: "Laptop"
  };
  var tablet = {
  	icon: "tablet-android",
  	label: "Tablet"
  };
  var mobile = {
  	icon: "mobile-android",
  	label: "Mobile"
  };
  var DEFINED_BREAKPOINTS = {
  	desktop: desktop,
  	laptop: laptop,
  	tablet: tablet,
  	mobile: mobile
  };

  var getBreakpointLabels = createMemoizedFunction(function (breakpoints) {
    return breakpoints.map(function (breakpoint) {
      if (typeof breakpoint === 'string' && breakpoint in DEFINED_BREAKPOINTS) {
        var _DEFINED_BREAKPOINTS$, _DEFINED_BREAKPOINTS$2;
        return {
          icon: ((_DEFINED_BREAKPOINTS$ = DEFINED_BREAKPOINTS[breakpoint]) === null || _DEFINED_BREAKPOINTS$ === void 0 ? void 0 : _DEFINED_BREAKPOINTS$.icon) || null,
          label: ((_DEFINED_BREAKPOINTS$2 = DEFINED_BREAKPOINTS[breakpoint]) === null || _DEFINED_BREAKPOINTS$2 === void 0 ? void 0 : _DEFINED_BREAKPOINTS$2.label) || breakpoint,
          value: breakpoint
        };
      } else if (typeof breakpoint === 'string') {
        return {
          icon: null,
          label: breakpoint,
          value: breakpoint
        };
      }
      return breakpoint;
    });
  });

  var getGridAlign = createMemoizedFunction(function (value, breakpoint) {
    var _value$breakpoint;
    return (value === null || value === void 0 || (_value$breakpoint = value[breakpoint]) === null || _value$breakpoint === void 0 ? void 0 : _value$breakpoint.align) || [];
  });

  var getGridGap = createMemoizedFunction(function (value, breakpoint) {
    var _value$breakpoint;
    return (value === null || value === void 0 || (_value$breakpoint = value[breakpoint]) === null || _value$breakpoint === void 0 ? void 0 : _value$breakpoint.gap) || [];
  });

  var getGridJustify = createMemoizedFunction(function (value, breakpoint) {
    var _value$breakpoint;
    return (value === null || value === void 0 || (_value$breakpoint = value[breakpoint]) === null || _value$breakpoint === void 0 ? void 0 : _value$breakpoint.justify) || [];
  });

  var getGridRows = createMemoizedFunction(function (value, breakpoint) {
    var _value$breakpoint;
    return (value === null || value === void 0 || (_value$breakpoint = value[breakpoint]) === null || _value$breakpoint === void 0 ? void 0 : _value$breakpoint.rows) || [];
  });

  var getRowWidth = createMemoizedFunction(function (row) {
    return row.reduce(function (sum, column) {
      return sum + column;
    }, 0);
  });

  var css$9 = ".blueprint-blocks\\:grid-field-breakpoint-toggle {\n  display: grid;\n  gap: 2px;\n  grid-auto-columns: 1fr;\n  grid-auto-flow: column;\n}\n\n.blueprint-blocks\\:grid-field-breakpoint-toggle > div {\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: var(--blueprint-blocks-border-radius);\n  cursor: pointer;\n  display: grid;\n  justify-content: center;\n  height: 26px;\n  line-height: 24px;\n  text-align: center;\n  transition: border 0.4s, colors 0.4s;\n}\n\n.blueprint-blocks\\:grid-field-breakpoint-toggle > div:hover {\n  border-color: var(--blueprint-blocks-color-accent);\n  color: var(--blueprint-blocks-color-accent);\n}\n\n.blueprint-blocks\\:grid-field-breakpoint-toggle > div:active {\n  background: var(--blueprint-blocks-color-light-gray);\n}\n\n.blueprint-blocks\\:grid-field-breakpoint-toggle > div.is-active {\n  background-color: var(--blueprint-blocks-color-accent);\n  color: var(--blueprint-blocks-color-white);\n}";
  n(css$9,{});

  var _excluded$J = ["onChange", "currentBreakpoint", "breakpoints"];
  function BreakpointToggle(_ref) {
    var onChange = _ref.onChange,
      currentBreakpoint = _ref.currentBreakpoint,
      _ref$breakpoints = _ref.breakpoints,
      breakpoints = _ref$breakpoints === void 0 ? ['desktop', 'laptop', 'tablet', 'mobile'] : _ref$breakpoints;
      _objectWithoutProperties$1(_ref, _excluded$J);
    var breakpointLabels = getBreakpointLabels(breakpoints);
    return /*#__PURE__*/React.createElement("div", {
      className: "blueprint-blocks:grid-field-breakpoint-toggle"
    }, breakpointLabels.map(function (_ref2) {
      _ref2.icon;
        var label = _ref2.label,
        value = _ref2.value;
      return /*#__PURE__*/React.createElement("div", {
        className: classNames({
          'is-active': currentBreakpoint === value
        }),
        onClick: function onClick() {
          return onChange(value);
        }
      }, label);
    }));
  }

  var arrowDown = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M212.6 454.6L190 477.3l-22.6-22.6-144-144L.7 288 46 242.8l22.6 22.6L158 354.8 158 64l0-32 64 0 0 32 0 290.7 89.4-89.4L334 242.8 379.3 288l-22.6 22.6-144 144z\"/></svg>";

  var arrowDownLeft = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M46 416H14V384 160 128H78v32V306.7L279.4 105.4 302 82.7 347.3 128l-22.6 22.6L123.3 352H270h32v64H270 46z\"/></svg>";

  var arrowDownRight = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M302 416h32V384 160 128H270v32V306.7L68.6 105.4 46 82.7 .7 128l22.6 22.6L224.7 352H78 46v64H78 302z\"/></svg>";

  var arrowLeft = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M25.4 278.6L2.7 256l22.6-22.6 144-144L192 66.7 237.2 112l-22.6 22.6L125.2 224 416 224l32 0 0 64-32 0-290.7 0 89.4 89.4L237.2 400 192 445.3l-22.6-22.6-144-144z\"/></svg>";

  var arrowRight = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M422.6 278.6L445.3 256l-22.6-22.6-144-144L256 66.7 210.8 112l22.6 22.6L322.8 224 32 224 0 224l0 64 32 0 290.7 0-89.4 89.4L210.8 400 256 445.3l22.6-22.6 144-144z\"/></svg>";

  var arrowUp = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M212.6 57.4L190 34.7 167.4 57.4l-144 144L.7 224 46 269.2l22.6-22.6L158 157.2V448v32h64V448 157.2l89.4 89.4L334 269.2 379.3 224l-22.6-22.6-144-144z\"/></svg>";

  var arrowUpLeft = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M46 96H14v32V352v32H78V352 205.3L279.4 406.6 302 429.3 347.3 384l-22.6-22.6L123.3 160H270h32V96H270 46z\"/></svg>";

  var arrowUpRight = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M302 96h32v32V352v32H270V352 205.3L68.6 406.6 46 429.3 .7 384l22.6-22.6L224.7 160H78 46V96H78 302z\"/></svg>";

  var angleLeft = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M.7 256l22.6 22.6 160 160L206 461.3 251.3 416l-22.6-22.6L91.3 256 228.6 118.6 251.3 96 206 50.7 183.4 73.4l-160 160L.7 256z\"/></svg>";

  var angleRight = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M283.3 256l-22.6 22.6-160 160L78 461.3 32.7 416l22.6-22.6L192.7 256 55.4 118.6 32.7 96 78 50.7l22.6 22.6 160 160L283.3 256z\"/></svg>";

  var circle = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z\"/></svg>";

  var link = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M563.2 267.3c56.2-56.2 56.2-147.4 0-203.6S415.8 7.4 359.6 63.7L348.3 75l45.3 45.3 11.3-11.3c31.2-31.2 81.9-31.2 113.1 0s31.2 81.9 0 113.1L404.8 335.2c-31.2 31.2-81.9 31.2-113.1 0c-25.6-25.6-30.3-64.3-13.8-94.6c1.8-3.4 3.9-6.7 6.3-9.8l-51.2-38.4c-4.3 5.7-8.1 11.6-11.4 17.8c-29.5 54.6-21.3 124.2 24.9 170.3c56.2 56.2 147.4 56.2 203.6 0L563.2 267.3zM42.8 244.7c-56.2 56.2-56.2 147.4 0 203.6s147.4 56.2 203.6 0L257.7 437l-45.3-45.3-11.3 11.3c-31.2 31.2-81.9 31.2-113.1 0s-31.2-81.9 0-113.1L201.2 176.8c31.2-31.2 81.9-31.2 113.1 0c25.6 25.6 30.3 64.3 13.8 94.6c-1.8 3.4-3.9 6.7-6.3 9.8l51.2 38.4c4.3-5.7 8.1-11.6 11.4-17.8c29.5-54.6 21.3-124.2-24.9-170.3c-56.2-56.2-147.4-56.2-203.6 0L42.8 244.7z\"/></svg>";

  var minus = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M416 288H384L32 288H0l0-64 32 0 352 0 32 0v64z\"/></svg>";

  var pencil = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M9.8 463.5l-9.6 48 48-9.6 102.6-20.5L396.2 236l-15.1-15.1-90.4-90.4-15.1-15.1L30.4 360.9 9.8 463.5zM297 94.2l15.1 15.1 90.4 90.4 15.1 15.1L450.2 182l31.9-31.9-31.9-31.9L393.6 61.5 361.6 29.6 329.7 61.5 297 94.2zM94.2 360.9h11.4v45.2h45.2v11.4l-22.3 22.3L57.8 453.9 72 383.1l22.3-22.3zM307.6 195.2L297 205.9 161.5 341.4l-10.6 10.6-21.3-21.3 10.6-10.6L275.7 184.6l10.6-10.6 21.3 21.3z\"/></svg>";

  var plus = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M240 80V48H176V80 224H32 0v64H32 176V432v32h64V432 288H384h32V224H384 240V80z\"/></svg>";

  var trash = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z\"/></svg>";

  var upRightFromSquare = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M512 176l-32 32-65.4-65.4-168 168L224 333.3 178.7 288l22.6-22.6 168-168L304 32 336 0H512V176zM0 32H32 160h32V96H160 64V448H416V352 320h64v32V480v32H448 32 0V480 64 32z\"/></svg>";

  var Icons = /*#__PURE__*/Object.freeze({
  	__proto__: null,
  	angleLeft: angleLeft,
  	angleRight: angleRight,
  	arrowDown: arrowDown,
  	arrowDownLeft: arrowDownLeft,
  	arrowDownRight: arrowDownRight,
  	arrowLeft: arrowLeft,
  	arrowRight: arrowRight,
  	arrowUp: arrowUp,
  	arrowUpLeft: arrowUpLeft,
  	arrowUpRight: arrowUpRight,
  	circle: circle,
  	link: link,
  	minus: minus,
  	pencil: pencil,
  	plus: plus,
  	trash: trash,
  	upRightFromSquare: upRightFromSquare
  });

  var css$8 = ".blueprint-blocks\\:grid-field-minus {\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: var(--blueprint-blocks-border-radius);\n  cursor: pointer;\n  display: grid;\n  justify-content: center;\n  height: 26px;\n  transition: border 0.4s, colors 0.4s;\n  width: 26px;\n}\n\n.blueprint-blocks\\:grid-field-minus:not(.is-disabled):hover {\n  border-color: var(--blueprint-blocks-color-accent);\n  color: var(--blueprint-blocks-color-accent);\n}\n\n.blueprint-blocks\\:grid-field-minus:not(.is-disabled):active {\n  background: var(--blueprint-blocks-color-light-gray);\n}\n\n.blueprint-blocks\\:grid-field-minus.is-disabled {\n  cursor: default;\n  opacity: 0.25;\n}\n\n.blueprint-blocks\\:grid-field-minus svg {\n  display: block;\n  height: 12px;\n  width: 12px;\n}";
  n(css$8,{});

  function DecrementButton(_ref) {
    var _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
    return /*#__PURE__*/React.createElement("div", {
      className: classNames('blueprint-blocks:grid-field-minus', {
        'is-disabled': disabled
      }),
      onClick: onClick
    }, /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: minus
      }
    }));
  }

  var css$7 = ".blueprint-blocks\\:grid-field-plus {\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: var(--blueprint-blocks-border-radius);\n  cursor: pointer;\n  display: grid;\n  justify-content: center;\n  height: 26px;\n  transition: border 0.4s, colors 0.4s;\n  width: 26px;\n}\n\n.blueprint-blocks\\:grid-field-plus:not(.is-disabled):hover {\n  border-color: var(--blueprint-blocks-color-accent);\n  color: var(--blueprint-blocks-color-accent);\n}\n\n.blueprint-blocks\\:grid-field-plus:not(.is-disabled):active {\n  background: var(--blueprint-blocks-color-light-gray);\n}\n\n.blueprint-blocks\\:grid-field-plus.is-disabled {\n  cursor: default;\n  opacity: 0.25;\n}\n\n.blueprint-blocks\\:grid-field-plus svg {\n  display: block;\n  height: 12px;\n  width: 12px;\n}";
  n(css$7,{});

  function IncrementButton(_ref) {
    var _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
    return /*#__PURE__*/React.createElement("div", {
      className: classNames('blueprint-blocks:grid-field-plus', {
        'is-disabled': disabled
      }),
      onClick: onClick
    }, /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: plus
      }
    }));
  }

  var css$6 = ".blueprint-blocks\\:grid-field-grid {\n  border: 1px solid var(--blueprint-blocks-color-gray);\n  border-radius: var(--blueprint-blocks-border-radius);\n  display: grid;\n  gap: 2px;\n  grid-template-columns: 1fr;\n  justify-content: stretch;\n  padding: 2px;\n}\n\n.blueprint-blocks\\:grid-field-grid > .blueprint-blocks\\:grid-field-plus,\n.blueprint-blocks\\:grid-field-grid > .blueprint-blocks\\:grid-field-minus {\n  width: auto;\n}\n\n.blueprint-blocks\\:grid-field-grid-row-wrap {\n  align-items: stretch;\n  display: grid;\n  gap: 2px;\n  grid-template-columns: 26px 1fr 26px;\n}\n\n.blueprint-blocks\\:grid-field-grid-row-wrap > .blueprint-blocks\\:grid-field-plus,\n.blueprint-blocks\\:grid-field-grid-row-wrap > .blueprint-blocks\\:grid-field-minus {\n  height: auto;\n}\n\n.blueprint-blocks\\:grid-field-grid-row {\n  align-items: stretch;\n  border: 1px solid var(--blueprint-blocks-color-light-gray);\n  border-radius: var(--blueprint-blocks-border-radius);\n  display: grid;\n  gap: 2px;\n  grid-template-columns: repeat(var(--columns, 1), 1fr);\n  height: 80px;\n  padding: 2px;\n}\n\n.blueprint-blocks\\:grid-field-grid-column {\n  background: var(--blueprint-blocks-color-lightest-gray);\n  grid-column-end: span var(--column, 1);\n}";
  n(css$6,{});

  function GridControl(_ref) {
    var _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? 6 : _ref$columns,
      _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? [] : _ref$rows;
      _ref.gap;
      _ref.align;
      _ref.justify;
    return /*#__PURE__*/React.createElement("div", {
      className: classNames('blueprint-blocks:grid-field-grid')
    }, /*#__PURE__*/React.createElement(DecrementButton, null), rows.map(function (row) {
      return /*#__PURE__*/React.createElement("div", {
        className: classNames('blueprint-blocks:grid-field-grid-row-wrap')
      }, /*#__PURE__*/React.createElement(DecrementButton, null), /*#__PURE__*/React.createElement("div", {
        className: classNames('blueprint-blocks:grid-field-grid-row'),
        style: {
          '--columns': columns,
          '--row': getRowWidth(row)
        }
      }, row.map(function (column) {
        return /*#__PURE__*/React.createElement("div", {
          className: classNames('blueprint-blocks:grid-field-grid-column'),
          style: {
            '--column': column
          }
        }, column);
      })), /*#__PURE__*/React.createElement(IncrementButton, null));
    }), /*#__PURE__*/React.createElement(IncrementButton, null));
  }

  var css$5 = ".blueprint-blocks\\:grid-field-wrap {\n  display: grid;\n  gap: 2px;\n}";
  n(css$5,{});

  var _excluded$I = ["onInput", "columns", "breakpoints", "gaps", "align", "justify", "enableUniqueColumnWidths", "value"];
  function edit$m(_ref) {
    var _breakpointLabels$;
    _ref.onInput;
      var _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? 6 : _ref$columns,
      _ref$breakpoints = _ref.breakpoints,
      breakpoints = _ref$breakpoints === void 0 ? ['desktop', 'laptop', 'tablet', 'mobile'] : _ref$breakpoints;
      _ref.gaps;
      _ref.align;
      _ref.justify;
      _ref.enableUniqueColumnWidths;
      var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$I);
    var breakpointLabels = getBreakpointLabels(breakpoints);
    var _useState = wp.element.useState(breakpointLabels === null || breakpointLabels === void 0 || (_breakpointLabels$ = breakpointLabels[0]) === null || _breakpointLabels$ === void 0 ? void 0 : _breakpointLabels$.value),
      _useState2 = _slicedToArray$1(_useState, 2),
      currentBreakpoint = _useState2[0],
      setCurrentBreakpoint = _useState2[1];
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      type: "grid",
      value: value
    }), /*#__PURE__*/React.createElement("div", {
      className: "blueprint-blocks:grid-field-wrap"
    }, /*#__PURE__*/React.createElement(BreakpointToggle, {
      breakpoints: breakpointLabels,
      currentBreakpoint: currentBreakpoint,
      onChange: setCurrentBreakpoint
    }), /*#__PURE__*/React.createElement(GridControl, {
      columns: columns,
      rows: getGridRows(value, currentBreakpoint),
      gap: getGridGap(value, currentBreakpoint),
      align: getGridAlign(value, currentBreakpoint),
      justify: getGridJustify(value, currentBreakpoint)
    })));
  }

  var _excluded$H = ["value"];
  function save$k(_ref) {
    var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$H);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "grid",
      dangerouslySetInnerHTML: {
        __html: (Array.isArray(value) && value || [value]).join(',')
      }
    }));
  }

  var index$h = {
    name: 'grid-field',
    edit: edit$m,
    save: save$k
  };

  var _excluded$G = ["children", "dangerouslySetInnerHTML", "innerHtml"];
  function edit$l(_ref) {
    var children = _ref.children;
      _ref.dangerouslySetInnerHTML;
      var _ref$innerHtml = _ref.innerHtml,
      innerHtml = _ref$innerHtml === void 0 ? '' : _ref$innerHtml,
      props = _objectWithoutProperties$1(_ref, _excluded$G);
    if (innerHtml.length > 0) {
      return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
        type: "html",
        dangerouslySetInnerHTML: {
          __html: innerHtml
        }
      }));
    }
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      type: "html",
      children: children
    }));
  }

  var _excluded$F = ["children", "dangerouslySetInnerHTML", "innerHtml"];
  function save$j(_ref) {
    var children = _ref.children;
      _ref.dangerouslySetInnerHTML;
      var _ref$innerHtml = _ref.innerHtml,
      innerHtml = _ref$innerHtml === void 0 ? '' : _ref$innerHtml,
      props = _objectWithoutProperties$1(_ref, _excluded$F);
    if (innerHtml.length > 0) {
      return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
        type: "html",
        dangerouslySetInnerHTML: {
          __html: replaceTokens(innerHtml, {
            block: (props === null || props === void 0 ? void 0 : props.attributes) || {},
            field: {}
          })
        }
      }));
    }
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "html",
      children: children
    }));
  }

  var index$g = {
    name: 'html',
    edit: edit$l,
    save: save$j
  };

  var _excluded$E = ["onInput", "label", "noticeUI", "noticeOperations", "value"],
    _excluded2$3 = ["id", "height", "type", "url", "width"];
  var divStyle = {
    position: 'relative',
    width: 'fit-content'
  };
  var imgStyle$1 = {
    display: 'block'
  };
  var optionsStyle$1 = {
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.5)',
    bottom: '0',
    display: 'flex',
    left: '0',
    justifyContent: 'center',
    opacity: '0',
    position: 'absolute',
    right: '0',
    top: '0',
    transition: 'opacity 0.4s'
  };
  var optionsHoverStyle$1 = {
    opacity: '1'
  };
  var optionsDivStyle$1 = {
    alignItems: 'center',
    background: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    padding: '4px'
  };
  var optionsButtonStyle$1 = {
    height: '32px',
    borderRadius: '4px',
    justifyContent: 'center',
    width: '32px'
  };
  var optionsButtonHoverStyle$1 = {
    background: '#eee'
  };
  function edit$j(_ref) {
    var onInput = _ref.onInput,
      label = _ref.label,
      noticeUI = _ref.noticeUI,
      noticeOperations = _ref.noticeOperations,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? null : _ref$value,
      props = _objectWithoutProperties$1(_ref, _excluded$E);
    var _useState = wp.element.useState(false),
      _useState2 = _slicedToArray$1(_useState, 2),
      hasHover = _useState2[0],
      setHasHover = _useState2[1];
    var _useState3 = wp.element.useState(null),
      _useState4 = _slicedToArray$1(_useState3, 2),
      optionHover = _useState4[0],
      setOptionHover = _useState4[1];
    var onRemove = function onRemove() {
      onInput(null);
    };
    var onSelect = function onSelect(_ref2) {
      var id = _ref2.id,
        height = _ref2.height,
        type = _ref2.type,
        url = _ref2.url,
        width = _ref2.width;
        _objectWithoutProperties$1(_ref2, _excluded2$3);
      onInput({
        id: id,
        height: height,
        width: width,
        type: type,
        url: url
      });
    };
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      type: "image",
      value: value
    }), value === null && /*#__PURE__*/React.createElement(wp.blockEditor.MediaPlaceholder, {
      icon: "format-image",
      labels: {
        title: label
      },
      allowedTypes: ['image'],
      multiple: false,
      onSelect: onSelect,
      notices: noticeUI,
      onError: noticeOperations.createErrorNotice
    }), value !== null && /*#__PURE__*/React.createElement("div", {
      style: divStyle,
      onMouseEnter: function onMouseEnter() {
        return setHasHover(true);
      },
      onMouseLeave: function onMouseLeave() {
        return setHasHover(false);
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: value === null || value === void 0 ? void 0 : value.url,
      style: imgStyle$1
    }), /*#__PURE__*/React.createElement("div", {
      style: _objectSpread2$2(_objectSpread2$2({}, optionsStyle$1), hasHover === true && optionsHoverStyle$1)
    }, /*#__PURE__*/React.createElement("div", {
      style: optionsDivStyle$1
    }, /*#__PURE__*/React.createElement(wp.blockEditor.MediaUpload, {
      allowedTypes: ['image'],
      gallery: false,
      multiple: false,
      onSelect: onSelect,
      value: (value === null || value === void 0 ? void 0 : value.id) || null,
      render: function render(_ref3) {
        var open = _ref3.open;
        return /*#__PURE__*/React.createElement(wp.components.Button, {
          label: wp.i18n.__("Edit ".concat(label || 'Image')),
          onClick: open,
          icon: /*#__PURE__*/React.createElement("span", {
            className: "dashicons dashicons-edit"
          }),
          style: _objectSpread2$2(_objectSpread2$2({}, optionsButtonStyle$1), optionHover === 'edit' && optionsButtonHoverStyle$1),
          onMouseEnter: function onMouseEnter() {
            return setOptionHover('edit');
          },
          onMouseLeave: function onMouseLeave() {
            return setOptionHover(null);
          }
        });
      }
    }), /*#__PURE__*/React.createElement(wp.components.Button, {
      label: wp.i18n.__("Remove ".concat(label || 'Image')),
      icon: /*#__PURE__*/React.createElement("span", {
        className: "dashicons dashicons-trash"
      }),
      onClick: onRemove,
      style: _objectSpread2$2(_objectSpread2$2({}, optionsButtonStyle$1), optionHover === 'remove' && optionsButtonHoverStyle$1),
      onMouseEnter: function onMouseEnter() {
        return setOptionHover('remove');
      },
      onMouseLeave: function onMouseLeave() {
        return setOptionHover(null);
      }
    })))));
  }
  var edit$k = wp.components.withNotices(edit$j);

  var _excluded$D = ["allowedTypes", "value"];
  function save$i(_ref) {
    _ref.allowedTypes;
      var _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      props = _objectWithoutProperties$1(_ref, _excluded$D);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      tagName: "img",
      type: "image",
      src: value === null || value === void 0 ? void 0 : value.url
    }));
  }

  var index$f = {
    name: 'image-field',
    edit: edit$k,
    save: save$i
  };

  var css$4 = ".blueprint-blocks\\:increment-field-wrap {\n  --height: 28px;\n  align-items: center;\n  border: 1px solid #8d96a0;\n  border-radius: 4px;\n  display: grid;\n  grid-template-columns: calc(var(--height) - 1px) 1fr calc(var(--height) - 1px);\n  height: var(--height);\n  overflow: hidden;\n  position: relative;\n  user-select: none;\n}\n\n.blueprint-blocks\\:increment-field-minus,\n.blueprint-blocks\\:increment-field-plus {\n  align-items: center;\n  cursor: pointer;\n  display: grid;\n  justify-content: center;\n  height: min(var(--height) - 2px, 34px);\n  transition: background 0.4s, colors 0.4s;\n  width: min(var(--height) - 1px, 35px);\n}\n\n.blueprint-blocks\\:increment-field-minus {\n  border-right: 1px solid #e2e4e7;\n}\n\n.blueprint-blocks\\:increment-field-plus {\n  border-left: 1px solid #e2e4e7;\n}\n\n.blueprint-blocks\\:increment-field-minus:not(.is-disabled):hover,\n.blueprint-blocks\\:increment-field-plus:not(.is-disabled):hover {\n  background: #e5f3f8;\n  color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));\n}\n\n.blueprint-blocks\\:increment-field-minus.is-disabled,\n.blueprint-blocks\\:increment-field-plus.is-disabled {\n  cursor: default;\n  opacity: 0.25;\n}\n\n.blueprint-blocks\\:increment-field-minus svg,\n.blueprint-blocks\\:increment-field-plus svg {\n  display: block;\n  height: min(var(--height) / 2, 18px);\n  width: min(var(--height) / 2, 18px);\n}\n\n.blueprint-blocks\\:increment-field-label {\n  font-size: 13px;\n  height: calc(var(--height) - 2px);\n  line-height: calc(var(--height) - 2px);\n  text-align: center;\n  width: calc(100% - var(--height) * 2 - 2px);\n}\n\n.block-editor-block-toolbar .blueprint-blocks\\:increment-field-wrap {\n  --height: 48px !important;\n  border: 0 !important;\n  grid-gap: 8px !important;\n  grid-template-columns: max-content max-content max-content !important;\n}\n\n.block-editor-block-toolbar .blueprint-blocks\\:increment-field-minus,\n.block-editor-block-toolbar .blueprint-blocks\\:increment-field-plus {\n  border: 0 !important;\n}\n\n.block-editor-block-toolbar .blueprint-blocks\\:increment-field-minus:not(.is-disabled):hover,\n.block-editor-block-toolbar .blueprint-blocks\\:increment-field-plus:not(.is-disabled):hover {\n  background: none !important;\n}\n\n.block-editor-block-toolbar .blueprint-blocks\\:increment-field-label {\n  font-size: 18px !important;\n  font-weight: bold;\n  width: auto !important;\n}";
  n(css$4,{});

  var _excluded$C = ["onInput", "label", "options", "min", "max", "step", "value"];
  var activeIndex = createMemoizedFunction(function (options, activeValue) {
    for (var i = 0; i < options.length; i++) {
      var _options$i;
      if (((_options$i = options[i]) === null || _options$i === void 0 ? void 0 : _options$i.value) === activeValue) {
        return i;
      }
    }
    return 0;
  });
  var getMinMaxOptions = createMemoizedFunction(function (min, max, step) {
    return Array.from({
      length: 1 + parseInt(max) - parseInt(min)
    }, function (value, index) {
      return {
        value: (index + parseInt(min)) * parseInt(step)
      };
    });
  });
  function edit$i(_ref) {
    var _incrementOptions2, _incrementOptions3;
    var onInput = _ref.onInput,
      label = _ref.label,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 1 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 1 : _ref$max,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step,
      value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$C);
    var incrementOptions = options;
    if (options.length === 0 && parseInt(min) !== parseInt(max)) {
      incrementOptions = getMinMaxOptions(parseInt(min), parseInt(max), parseInt(step));
    }
    var index = activeIndex(incrementOptions, value);
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      type: "increment",
      value: value
    }), /*#__PURE__*/React.createElement("div", {
      className: "blueprint-blocks:increment-field-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: classNames('blueprint-blocks:increment-field-minus', {
        'is-disabled': index === 0
      }),
      onClick: function onClick() {
        if (index > 0) {
          var _incrementOptions;
          onInput((_incrementOptions = incrementOptions) === null || _incrementOptions === void 0 || (_incrementOptions = _incrementOptions[index - 1]) === null || _incrementOptions === void 0 ? void 0 : _incrementOptions.value);
        }
      }
    }, /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: angleLeft
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: classNames('blueprint-blocks:increment-field-label')
    }, label && /*#__PURE__*/React.createElement("span", null, label, " "), /*#__PURE__*/React.createElement("span", null, ((_incrementOptions2 = incrementOptions) === null || _incrementOptions2 === void 0 || (_incrementOptions2 = _incrementOptions2[index]) === null || _incrementOptions2 === void 0 ? void 0 : _incrementOptions2.label) || ((_incrementOptions3 = incrementOptions) === null || _incrementOptions3 === void 0 || (_incrementOptions3 = _incrementOptions3[index]) === null || _incrementOptions3 === void 0 ? void 0 : _incrementOptions3.value))), /*#__PURE__*/React.createElement("div", {
      className: classNames('blueprint-blocks:increment-field-plus', {
        'is-disabled': index === incrementOptions.length - 1
      }),
      onClick: function onClick() {
        if (index < incrementOptions.length - 1) {
          var _incrementOptions4;
          onInput((_incrementOptions4 = incrementOptions) === null || _incrementOptions4 === void 0 || (_incrementOptions4 = _incrementOptions4[index + 1]) === null || _incrementOptions4 === void 0 ? void 0 : _incrementOptions4.value);
        }
      }
    }, /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: angleRight
      }
    }))));
  }

  var _excluded$B = ["value"];
  function save$h(_ref) {
    var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$B);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "increment",
      dangerouslySetInnerHTML: {
        __html: (Array.isArray(value) && value || [value]).join(',')
      }
    }));
  }

  var IncrementField = {
    name: 'increment-field',
    edit: edit$i,
    save: save$h
  };

  var _excluded$A = ["name", "allowedBlocks", "orientation", "template", "templateLock", "max", "className"];
  function edit$h(_ref) {
    var _props$attributes;
    _ref.name;
      var allowedBlocks = _ref.allowedBlocks,
      _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === void 0 ? 'vertical' : _ref$orientation,
      _ref$template = _ref.template,
      template = _ref$template === void 0 ? [] : _ref$template,
      _ref$templateLock = _ref.templateLock,
      templateLock = _ref$templateLock === void 0 ? false : _ref$templateLock,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? null : _ref$max,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? [] : _ref$className,
      props = _objectWithoutProperties$1(_ref, _excluded$A);
    var innerBlocksLength = ((_props$attributes = props.attributes) === null || _props$attributes === void 0 ? void 0 : _props$attributes._innerBlocksLength) || 0;
    var fieldProps = Object.assign({}, props);
    if (className) {
      fieldProps.className = className;
    }
    if ((props === null || props === void 0 ? void 0 : props.tagName) === false) {
      return /*#__PURE__*/React.createElement(wp.blockEditor.InnerBlocks, {
        allowedBlocks: allowedBlocks,
        orientation: orientation === 'horizontal' && 'horizontal' || 'vertical',
        template: template,
        templateLock: templateLock,
        renderAppender: function renderAppender() {
          return (max === null || innerBlocksLength < max) && /*#__PURE__*/React.createElement(wp.blockEditor.InnerBlocks.DefaultBlockAppender, null) || false;
        }
      });
    }
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, fieldProps, {
      type: "inner-blocks"
    }), /*#__PURE__*/React.createElement(wp.blockEditor.InnerBlocks, {
      allowedBlocks: allowedBlocks,
      orientation: orientation === 'horizontal' && 'horizontal' || 'vertical',
      template: template,
      templateLock: templateLock,
      renderAppender: function renderAppender() {
        return (max === null || innerBlocksLength < max) && /*#__PURE__*/React.createElement(wp.blockEditor.InnerBlocks.DefaultBlockAppender, null) || false;
      }
    }));
  }

  var _excluded$z = ["allowedBlocks", "orientation", "template", "templateLock", "max"];
  function save$g(_ref) {
    _ref.allowedBlocks;
      _ref.orientation;
      _ref.template;
      _ref.templateLock;
      _ref.max;
      var props = _objectWithoutProperties$1(_ref, _excluded$z);
    if ((props === null || props === void 0 ? void 0 : props.tagName) === false) {
      return /*#__PURE__*/React.createElement(wp.blockEditor.InnerBlocks.Content, null);
    }
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "inner-blocks"
    }), /*#__PURE__*/React.createElement(wp.blockEditor.InnerBlocks.Content, null));
  }

  var index$e = {
    name: 'inner-blocks',
    edit: edit$h,
    save: save$g
  };

  createMemoizedFunction(function (_ref) {
    var blockName = _ref.blockName,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? '' : _ref$type,
      name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value;
    return classNames(_defineProperty$2({}, "block:".concat(name), name === null || name === void 0 ? void 0 : name.length), _defineProperty$2({}, "".concat(blockName, ":").concat(name), name === null || name === void 0 ? void 0 : name.length), 'blueprint-blocks:component', 'blueprint-blocks:field', "blueprint-blocks:".concat(type, "-field"), {
      'has-value': value
    });
  });

  var _excluded$y = ["blockName", "attributeName", "placeholder", "allowedFormats", "disabled", "tagName", "className", "display", "value", "onInput"];
  function edit$g(_ref) {
    _ref.blockName;
      _ref.attributeName;
      var placeholder = _ref.placeholder,
      _ref$allowedFormats = _ref.allowedFormats,
      allowedFormats = _ref$allowedFormats === void 0 ? null : _ref$allowedFormats,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$tagName = _ref.tagName,
      tagName = _ref$tagName === void 0 ? 'p' : _ref$tagName,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? [] : _ref$className,
      _ref$display = _ref.display,
      display = _ref$display === void 0 ? true : _ref$display,
      value = _ref.value,
      onInput = _ref.onInput,
      props = _objectWithoutProperties$1(_ref, _excluded$y);
    if (display !== true && Boolean(display) === false) {
      return;
    }
    var fieldProps = Object.assign({}, props);
    if (className) {
      fieldProps.className = className;
    }
    if (disabled === true) {
      var Component = tagName;
      return /*#__PURE__*/React.createElement(Component, _extends$1({}, fieldProps, {
        dangerouslySetInnerHTML: {
          __html: value
        }
      }));
    }
    return /*#__PURE__*/React.createElement(wp.blockEditor.RichText, _extends$1({}, fieldProps, {
      onChange: onInput,
      tagName: tagName,
      allowedFormats: allowedFormats,
      keepPlaceholderOnFocus: true,
      placeholder: placeholder,
      value: value
    }));
  }

  var _excluded$x = ["multiLine", "placeholder", "tagName", "value"];
  function save$f(_ref) {
    _ref.multiLine;
      _ref.placeholder;
      var _ref$tagName = _ref.tagName,
      tagName = _ref$tagName === void 0 ? 'p' : _ref$tagName,
      value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$x);
    if (value === '' || value === null) {
      return;
    }
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      tagName: tagName,
      type: "rich-text",
      dangerouslySetInnerHTML: {
        __html: value
      }
    }));
  }

  var RichTextField = {
    name: 'rich-text-field',
    edit: edit$g,
    save: save$f
  };

  var css$3 = ".blueprint-blocks\\:dialog-toggle img {\n  grid-column: 1;\n  grid-row: 1;\n  height: 16px;\n  width: 16px;\n}\n\n.blueprint-blocks\\:dialog.is-open .blueprint-blocks\\:dialog-toggle:after {\n  grid-column: 1;\n  grid-row: 1;\n  position: relative;\n  transform: translateY(-100%);\n}";
  n(css$3,{});

  var _excluded$w = ["icon", "label", "children", "style"];
  var elStyle = {
    alignItems: 'start',
    display: 'inline-grid',
    height: '16px',
    justifyContent: 'center',
    position: 'relative',
    width: '16px'
  };
  var toggleStyle = {
    boxShadow: 'none',
    color: 'currentColor',
    cursor: 'pointer',
    display: 'block',
    height: '16px',
    minWidth: '16px',
    outline: 'none',
    padding: '0',
    width: '16px'
  };
  var wrapStyle$2 = {
    background: '#fff',
    boxShadow: 'var(--blueprint-blocks-box-shadow)',
    borderRadius: '4px',
    bottom: 'calc(100% + 7px)',
    left: '50%',
    padding: '8px',
    position: 'absolute',
    transform: 'translateX(-50%)',
    width: 'min(240px, calc(100vw - 16px))',
    zIndex: '100'
  };
  var wrapAfterStyle = {
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderTop: '6px solid #fff',
    bottom: '-6px',
    content: '',
    display: 'block',
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%)'
  };
  function Dialog(_ref) {
    var icon = _ref.icon,
      label = _ref.label,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
      _objectWithoutProperties$1(_ref, _excluded$w);
    var ref = wp.element.createRef();
    var _useState = wp.element.useState(false),
      _useState2 = _slicedToArray$1(_useState, 2),
      isDialogOpen = _useState2[0],
      openDialog = _useState2[1];
    useClickOutside(ref, function (event) {
      return openDialog(false);
    });
    return /*#__PURE__*/React.createElement("div", {
      style: _objectSpread2$2(_objectSpread2$2({}, elStyle), style),
      ref: ref
    }, /*#__PURE__*/React.createElement(wp.components.Button, {
      icon: icon,
      style: toggleStyle,
      label: label,
      onClick: function onClick() {
        return openDialog(!isDialogOpen);
      }
    }), isDialogOpen && /*#__PURE__*/React.createElement("div", {
      style: wrapStyle$2
    }, children, /*#__PURE__*/React.createElement("div", {
      style: wrapAfterStyle
    })));
  }

  var _excluded$v = ["onInput", "placeholder", "value"];
  var wrapStyle$1 = {
    position: 'relative'
  };
  var propertiesStyle = {
    alignItems: 'center',
    display: 'grid',
    gridGap: '8px',
    gridTemplateColumns: '1fr 12px 34px',
    rowGap: '4px'
  };
  var propertiesAfterStyle = {
    background: 'gray',
    content: '',
    display: 'block',
    height: '2px',
    gridColumn: '1 / span 3'
  };
  var urlInputStyle = {
    border: '0',
    color: 'black',
    display: 'block',
    fontSize: '12px !important',
    height: '32px !important',
    lineHeight: '32px !important',
    padding: '0',
    textAlign: 'inherit',
    transition: 'none',
    width: '100% !important'
  };
  function edit$f(_ref) {
    var _onInput = _ref.onInput,
      placeholder = _ref.placeholder,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? {} : _ref$value,
      props = _objectWithoutProperties$1(_ref, _excluded$v);
    var ref = wp.element.createRef();
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      tagName: "a",
      type: "link",
      value: value
    }), /*#__PURE__*/React.createElement("div", {
      style: wrapStyle$1
    }, /*#__PURE__*/React.createElement(RichTextField.edit, {
      tagName: "span",
      placeholder: placeholder,
      allowedFormats: ["core/bold", "core/italic", "core/strikethrough", "core/subscript", "core/superscript"],
      value: (value === null || value === void 0 ? void 0 : value.label) || '',
      onInput: function onInput(label) {
        return _onInput(Object.assign({}, value, {
          label: label
        }));
      }
    }), /*#__PURE__*/React.createElement(Dialog, {
      icon: /*#__PURE__*/React.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: link
        }
      }),
      label: wp.i18n.__('Edit Link Properties'),
      style: {
        marginLeft: '4px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: propertiesStyle
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      onBlur: function onBlur() {
        var _ref$current;
        return ref === null || ref === void 0 || (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.reportValidity();
      },
      onChange: function onChange(_ref2) {
        var target = _ref2.target;
        return _onInput(Object.assign({}, value, {
          href: target.value
        }));
      },
      placeholder: "https://",
      value: value === null || value === void 0 ? void 0 : value.href,
      ref: ref,
      style: urlInputStyle
    }), /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: upRightFromSquare
      }
    }), /*#__PURE__*/React.createElement(BooleanField.edit, {
      options: [{
        label: 'Same Window',
        value: '_self'
      }, {
        label: 'New Window',
        value: '_blank'
      }],
      tooltip: "Open in new window?",
      tooltipPosition: "left",
      size: "small",
      value: (value === null || value === void 0 ? void 0 : value.target) === '_blank',
      onInput: function onInput(newWindow) {
        return _onInput(Object.assign({}, value, {
          target: newWindow && '_blank' || '_self'
        }));
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: propertiesAfterStyle
    })))));
  }

  var _excluded$u = ["placeholder", "value"];
  function save$e(_ref) {
    _ref.placeholder;
      var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$u);
    var href = value.href,
      target = value.target,
      label = value.label;
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, target === '_blank' && {
      target: target
    }, {
      href: href,
      tagName: "a",
      type: "link"
    }), label);
  }

  var index$d = {
    name: 'link-field',
    edit: edit$f,
    save: save$e
  };

  var all$1 = {
  	label: "Margin"
  };
  var bottom$1 = {
  	label: "Margin Bottom"
  };
  var horizontal$1 = {
  	label: "Horizontal Margins"
  };
  var left$2 = {
  	label: "Margin Left"
  };
  var right$2 = {
  	label: "Margin Right"
  };
  var top$1 = {
  	label: "Margin Top"
  };
  var vertical$1 = {
  	label: "Vertical Margins"
  };
  var MARGIN_DEFINITIONS = {
  	all: all$1,
  	bottom: bottom$1,
  	horizontal: horizontal$1,
  	left: left$2,
  	right: right$2,
  	top: top$1,
  	vertical: vertical$1
  };

  var none$1 = {
  	label: "None",
  	value: "none"
  };
  var small$1 = {
  	label: "Small",
  	value: "small"
  };
  var medium$1 = {
  	label: "Medium",
  	value: "medium"
  };
  var large$1 = {
  	label: "Large",
  	value: "large"
  };
  var MARGIN_SIZES = {
  	none: none$1,
  	"xx-small": {
  	label: "XX-Small",
  	value: "xx-small"
  },
  	"x-small": {
  	label: "X-Small",
  	value: "x-small"
  },
  	small: small$1,
  	medium: medium$1,
  	large: large$1,
  	"x-large": {
  	label: "X-Large",
  	value: "x-large"
  },
  	"xx-large": {
  	label: "XX-Large",
  	value: "xx-large"
  }
  };

  var _excluded$t = ["onInput", "definitions", "sizes", "disabled", "value"];
  function edit$e(_ref) {
    var _onInput = _ref.onInput,
      _ref$definitions = _ref.definitions,
      definitions = _ref$definitions === void 0 ? ['top', 'bottom'] : _ref$definitions,
      _ref$sizes = _ref.sizes,
      sizes = _ref$sizes === void 0 ? ['none', 'small', 'medium', 'large'] : _ref$sizes,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? {} : _ref$value,
      props = _objectWithoutProperties$1(_ref, _excluded$t);
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      type: "margin",
      value: value
    }), definitions.map(function (definition) {
      var _ref2 = definition in MARGIN_DEFINITIONS && MARGIN_DEFINITIONS[definition] || definition,
        label = _ref2.label;
      return /*#__PURE__*/React.createElement(IncrementField.edit, {
        disabled: disabled,
        label: label,
        options: sizes.map(function (size) {
          return size in MARGIN_SIZES && MARGIN_SIZES[size] || size;
        }),
        value: value === null || value === void 0 ? void 0 : value[definition],
        onInput: function onInput(newValue) {
          return _onInput(_objectSpread2$2(_objectSpread2$2({}, value), {}, _defineProperty$2({}, definition, newValue)));
        }
      });
    }));
  }

  var _excluded$s = ["value"];
  function save$d(_ref) {
    var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$s);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "margin",
      dangerouslySetInnerHTML: {
        __html: value
      }
    }));
  }

  var index$c = {
    name: 'margin-field',
    edit: edit$e,
    save: save$d
  };

  var ALL_TYPES = [
  	"image",
  	"audio",
  	"text",
  	"video",
  	"pdf"
  ];

  var getAllowedTypes = createMemoizedFunction(function () {
    var allowedTypes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (!allowedTypes || (allowedTypes === null || allowedTypes === void 0 ? void 0 : allowedTypes.length) === 0) {
      return ALL_TYPES;
    }
    return allowedTypes.filter(function (type) {
      return ALL_TYPES.includes(type);
    });
  });

  var hasValue = createMemoizedFunction(function (value) {
    if (Array.isArray(value) && value.length > 0) {
      return true;
    }
    return !value;
  });

  var _excluded$r = ["onInput", "label", "allowedTypes", "multiple", "noticeUI", "noticeOperations", "value"],
    _excluded2$2 = ["id", "height", "type", "url", "width"],
    _excluded3$1 = ["id", "height", "type", "url", "width"];
  var itemsStyle$1 = {
    position: 'relative'
  };
  var itemStyle$1 = {
    position: 'relative',
    width: 'fit-content'
  };
  var imgStyle = {
    display: 'block'
  };
  var optionsStyle = {
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.5)',
    bottom: '0',
    display: 'flex',
    left: '0',
    justifyContent: 'center',
    opacity: '0',
    position: 'absolute',
    right: '0',
    top: '0',
    transition: 'opacity 0.4s'
  };
  var optionsHoverStyle = {
    opacity: '1'
  };
  var optionsDivStyle = {
    alignItems: 'center',
    background: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    padding: '4px'
  };
  var optionsButtonStyle = {
    height: '32px',
    borderRadius: '4px',
    justifyContent: 'center',
    width: '32px'
  };
  var optionsButtonHoverStyle = {
    background: '#eee'
  };
  function edit$c(_ref) {
    var onInput = _ref.onInput,
      label = _ref.label,
      _ref$allowedTypes = _ref.allowedTypes,
      allowedTypes = _ref$allowedTypes === void 0 ? [] : _ref$allowedTypes,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      noticeUI = _ref.noticeUI,
      noticeOperations = _ref.noticeOperations,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      props = _objectWithoutProperties$1(_ref, _excluded$r);
    var _useState = wp.element.useState(null),
      _useState2 = _slicedToArray$1(_useState, 2),
      itemHoverIndex = _useState2[0],
      setItemHoverIndex = _useState2[1];
    var _useState3 = wp.element.useState(null),
      _useState4 = _slicedToArray$1(_useState3, 2),
      optionHover = _useState4[0],
      setOptionHover = _useState4[1];
    var removeItem = function removeItem(id) {
      onInput(Object.values(value).filter(function (item) {
        return item.id !== id;
      }));
    };
    var selectItem = function selectItem(_ref2) {
      var id = _ref2.id,
        height = _ref2.height,
        type = _ref2.type,
        url = _ref2.url,
        width = _ref2.width;
        _objectWithoutProperties$1(_ref2, _excluded2$2);
      onInput([{
        id: id,
        height: height,
        width: width,
        type: type,
        url: url
      }]);
    };
    var selectMultiple = function selectMultiple(items) {
      onInput(Object.values(items).map(function (_ref3) {
        var id = _ref3.id,
          height = _ref3.height,
          type = _ref3.type,
          url = _ref3.url,
          width = _ref3.width;
          _objectWithoutProperties$1(_ref3, _excluded3$1);
        return {
          id: id,
          height: height,
          width: width,
          type: type,
          url: url
        };
      }));
    };
    var imagesJsx = (value || []).map(function (_ref4, index) {
      var id = _ref4.id;
        _ref4.height;
        var type = _ref4.type,
        url = _ref4.url;
        _ref4.width;
      return /*#__PURE__*/React.createElement("div", {
        style: itemStyle$1,
        onMouseEnter: function onMouseEnter() {
          return setItemHoverIndex(index);
        },
        onMouseLeave: function onMouseLeave() {
          return setItemHoverIndex(null);
        }
      }, type === 'image' && getAllowedTypes(allowedTypes).includes('image') && /*#__PURE__*/React.createElement("img", {
        src: url,
        style: imgStyle
      }), type === 'pdf' && getAllowedTypes(allowedTypes).includes('pdf') && /*#__PURE__*/React.createElement("span", {
        className: "fa-solid fa-file-pdf"
      }), /*#__PURE__*/React.createElement("div", {
        style: _objectSpread2$2(_objectSpread2$2({}, optionsStyle), itemHoverIndex === index && optionsHoverStyle)
      }, /*#__PURE__*/React.createElement("div", {
        style: optionsDivStyle
      }, /*#__PURE__*/React.createElement(wp.blockEditor.MediaUpload, {
        allowedTypes: ALL_TYPES,
        gallery: multiple,
        multiple: multiple,
        onSelect: multiple && selectMultiple || selectItem,
        value: value.map(function (_ref5) {
          var id = _ref5.id;
          return id;
        }),
        render: function render(_ref6) {
          var open = _ref6.open;
          return /*#__PURE__*/React.createElement(wp.components.Button, {
            label: wp.i18n.__("Edit ".concat(label || 'Image')),
            onClick: open,
            icon: /*#__PURE__*/React.createElement("span", {
              className: "dashicons dashicons-edit"
            }),
            style: _objectSpread2$2(_objectSpread2$2({}, optionsButtonStyle), optionHover === 'edit' && optionsButtonHoverStyle),
            onMouseEnter: function onMouseEnter() {
              return setOptionHover('edit');
            },
            onMouseLeave: function onMouseLeave() {
              return setOptionHover(null);
            }
          });
        }
      }), /*#__PURE__*/React.createElement(wp.components.Button, {
        label: wp.i18n.__("Remove ".concat(label || 'Image')),
        icon: /*#__PURE__*/React.createElement("span", {
          className: "dashicons dashicons-trash"
        }),
        onClick: function onClick() {
          return removeItem(id);
        },
        style: _objectSpread2$2(_objectSpread2$2({}, optionsButtonStyle), optionHover === 'remove' && optionsButtonHoverStyle),
        onMouseEnter: function onMouseEnter() {
          return setOptionHover('remove');
        },
        onMouseLeave: function onMouseLeave() {
          return setOptionHover(null);
        }
      }))));
    });
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      type: "media",
      value: value
    }), !hasValue(value) && /*#__PURE__*/React.createElement(wp.blockEditor.MediaPlaceholder, {
      icon: "format-image",
      labels: {
        title: label
      },
      allowedTypes: ALL_TYPES,
      multiple: multiple,
      onSelect: multiple && selectMultiple || selectItem,
      notices: noticeUI,
      onError: noticeOperations.createErrorNotice
    }), hasValue(value) && multiple === true && /*#__PURE__*/React.createElement("div", {
      style: itemsStyle$1
    }, imagesJsx, /*#__PURE__*/React.createElement(wp.blockEditor.MediaUpload, {
      allowedTypes: ALL_TYPES,
      gallery: multiple,
      multiple: multiple,
      onSelect: multiple && selectMultiple || selectItem,
      value: value.map(function (_ref7) {
        var id = _ref7.id;
        return id;
      }),
      render: function render(_ref8) {
        var open = _ref8.open;
        return /*#__PURE__*/React.createElement("div", {
          onClick: open
        }, /*#__PURE__*/React.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: plus
          }
        }));
      }
    })), hasValue(value) && multiple !== true && imagesJsx);
  }
  var edit$d = wp.components.withNotices(edit$c);

  var _excluded$q = ["allowedTypes", "multiple", "value"];
  function save$c(_ref) {
    var _ref$allowedTypes = _ref.allowedTypes,
      allowedTypes = _ref$allowedTypes === void 0 ? [] : _ref$allowedTypes;
      _ref.multiple;
      var _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      props = _objectWithoutProperties$1(_ref, _excluded$q);
    if (getAllowedTypes(allowedTypes).includes('image') === false) {
      return null;
    }
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "media"
    }), (value || []).filter(function (_ref2) {
      var type = _ref2.type;
      return type === 'image';
    }).map(function (_ref3) {
      var url = _ref3.url;
      return /*#__PURE__*/React.createElement("img", {
        src: url
      });
    }));
  }

  var index$b = {
    name: 'media-field',
    edit: edit$d,
    save: save$c
  };

  var _excluded$p = ["onInput", "min", "max", "step", "disabled", "value"];

  //import './style.scss'

  function edit$b(_ref) {
    var onInput = _ref.onInput,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? null : _ref$max,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$p);
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      type: "number",
      value: value
    }), /*#__PURE__*/React.createElement("input", {
      type: "number",
      disabled: disabled,
      min: Number(min),
      max: Number(max),
      step: Number(step),
      value: value,
      onChange: function onChange(event) {
        return onInput(Number(event.target.value));
      }
    }));
  }

  var _excluded$o = ["value"];
  function save$b(_ref) {
    var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$o);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "number",
      dangerouslySetInnerHTML: {
        __html: value
      }
    }));
  }

  var index$a = {
    name: 'number-field',
    edit: edit$b,
    save: save$b
  };

  var all = {
  	label: "Padding"
  };
  var bottom = {
  	label: "Padding Bottom"
  };
  var horizontal = {
  	label: "Horizontal Paddings"
  };
  var left$1 = {
  	label: "Padding Left"
  };
  var right$1 = {
  	label: "Padding Right"
  };
  var top = {
  	label: "Padding Top"
  };
  var vertical = {
  	label: "Vertical Paddings"
  };
  var PADDING_DEFINITIONS = {
  	all: all,
  	bottom: bottom,
  	horizontal: horizontal,
  	left: left$1,
  	right: right$1,
  	top: top,
  	vertical: vertical
  };

  var none = {
  	label: "None",
  	value: "none"
  };
  var small = {
  	label: "Small",
  	value: "small"
  };
  var medium = {
  	label: "Medium",
  	value: "medium"
  };
  var large = {
  	label: "Large",
  	value: "large"
  };
  var PADDING_SIZES = {
  	none: none,
  	"xx-small": {
  	label: "XX-Small",
  	value: "xx-small"
  },
  	"x-small": {
  	label: "X-Small",
  	value: "x-small"
  },
  	small: small,
  	medium: medium,
  	large: large,
  	"x-large": {
  	label: "X-Large",
  	value: "x-large"
  },
  	"xx-large": {
  	label: "XX-Large",
  	value: "xx-large"
  }
  };

  var _excluded$n = ["onInput", "definitions", "sizes", "disabled", "value"];
  function edit$a(_ref) {
    var _onInput = _ref.onInput,
      _ref$definitions = _ref.definitions,
      definitions = _ref$definitions === void 0 ? ['top', 'bottom'] : _ref$definitions,
      _ref$sizes = _ref.sizes,
      sizes = _ref$sizes === void 0 ? ['none', 'small', 'medium', 'large'] : _ref$sizes,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? {} : _ref$value,
      props = _objectWithoutProperties$1(_ref, _excluded$n);
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      type: "padding",
      value: value
    }), definitions.map(function (definition) {
      var _ref2 = definition in PADDING_DEFINITIONS && PADDING_DEFINITIONS[definition] || definition,
        label = _ref2.label;
      return /*#__PURE__*/React.createElement(IncrementField.edit, {
        disabled: disabled,
        label: label,
        options: sizes.map(function (size) {
          return size in PADDING_SIZES && PADDING_SIZES[size] || size;
        }),
        value: value === null || value === void 0 ? void 0 : value[definition],
        onInput: function onInput(newValue) {
          return _onInput(_objectSpread2$2(_objectSpread2$2({}, value), {}, _defineProperty$2({}, definition, newValue)));
        }
      });
    }));
  }

  var _excluded$m = ["value"];
  function save$a(_ref) {
    var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$m);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "padding",
      dangerouslySetInnerHTML: {
        __html: value
      }
    }));
  }

  var index$9 = {
    name: 'padding-field',
    edit: edit$a,
    save: save$a
  };

  var BOTH_AXES_OPTIONS = [
  	{
  		icon: "arrowUpLeft",
  		label: "Left Top",
  		value: [
  			"left",
  			"top"
  		]
  	},
  	{
  		icon: "arrowUp",
  		label: "Center Top",
  		value: [
  			"center",
  			"top"
  		]
  	},
  	{
  		icon: "arrowUpRight",
  		label: "Right Top",
  		value: [
  			"right",
  			"top"
  		]
  	},
  	{
  		icon: "arrowLeft",
  		label: "Left Middle",
  		value: [
  			"left",
  			"center"
  		]
  	},
  	{
  		icon: "circle",
  		label: "Center Middle",
  		value: [
  			"center",
  			"center"
  		]
  	},
  	{
  		icon: "arrowRight",
  		label: "Right Middle",
  		value: [
  			"right",
  			"center"
  		]
  	},
  	{
  		icon: "arrowDownLeft",
  		label: "Left Bottom",
  		value: [
  			"left",
  			"bottom"
  		]
  	},
  	{
  		icon: "arrowDown",
  		label: "Center Bottom",
  		value: [
  			"center",
  			"bottom"
  		]
  	},
  	{
  		icon: "arrowDownRight",
  		label: "Right Bottom",
  		value: [
  			"right",
  			"bottom"
  		]
  	}
  ];

  var X_AXIS_OPTIONS = [
  	{
  		icon: "arrowLeft",
  		label: "Left",
  		value: [
  			"left",
  			null
  		]
  	},
  	{
  		icon: "circle",
  		label: "Center",
  		value: [
  			"center",
  			null
  		]
  	},
  	{
  		icon: "arrowRight",
  		label: "Right",
  		value: [
  			"right",
  			null
  		]
  	}
  ];

  var Y_AXIS_OPTIONS = [
  	{
  		icon: "arrowUp",
  		label: "Top",
  		value: [
  			null,
  			"top"
  		]
  	},
  	{
  		icon: "circle",
  		label: "Center",
  		value: [
  			null,
  			"center"
  		]
  	},
  	{
  		icon: "arrowDown",
  		label: "Bottom",
  		value: [
  			null,
  			"Bottom"
  		]
  	}
  ];

  var css$2 = ".blueprint-blocks\\:position-field-wrap {\n  border: 1px solid #8d96a0;\n  border-radius: 4px;\n  display: grid;\n  grid-auto-columns: 26px;\n  grid-auto-rows: 26px;\n  overflow: hidden;\n  position: relative;\n  user-select: none;\n}\n\n.blueprint-blocks\\:position-field-wrap.is-both-axes {\n  grid-template-columns: repeat(3, 26px);\n  height: 80px;\n  width: 80px;\n}\n\n.blueprint-blocks\\:position-field-wrap.is-x-axis {\n  grid-template-columns: repeat(3, 26px);\n  height: 28px;\n  width: 80px;\n}\n\n.blueprint-blocks\\:position-field-wrap.is-y-axis {\n  height: 80px;\n  width: 28px;\n}\n\n.blueprint-blocks\\:position-field-wrap > div {\n  align-items: center;\n  cursor: pointer;\n  display: grid;\n  justify-content: center;\n  position: relative;\n}\n\n.blueprint-blocks\\:position-field-wrap svg {\n  display: block;\n  height: 14px;\n  opacity: 0.25;\n  width: 14px;\n}\n\n.blueprint-blocks\\:position-field-wrap > div.is-active img {\n  opacity: 1;\n}\n\n.blueprint-blocks\\:position-field-wrap.is-stretch > div.is-active:before {\n  background: #e5f3f8;\n  content: \"\";\n  display: block;\n  height: 78px;\n  left: 0;\n  position: absolute;\n  top: -26px;\n  width: 26px;\n  z-index: -1;\n}";
  n(css$2,{});

  var _excluded$l = ["onInput", "axis", "stretch", "value"];
  var getActiveIndex = createMemoizedFunction(function () {
    var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'both';
    var activeValue = arguments.length > 1 ? arguments[1] : undefined;
    var values = axisValues(axis);
    for (var i = 0; i < values.length; i++) {
      var _values$i, _values$i2, _values$i3;
      if ((activeValue === null || activeValue === void 0 ? void 0 : activeValue[0]) === ((_values$i = values[i]) === null || _values$i === void 0 ? void 0 : _values$i[0]) && ((activeValue === null || activeValue === void 0 ? void 0 : activeValue[1]) === ((_values$i2 = values[i]) === null || _values$i2 === void 0 ? void 0 : _values$i2[1]) || (activeValue === null || activeValue === void 0 ? void 0 : activeValue[1]) === 'stretch' && ((_values$i3 = values[i]) === null || _values$i3 === void 0 ? void 0 : _values$i3[1]) === 'center')) {
        return i;
      }
    }
    return 0;
  });
  var axisOptions = createMemoizedFunction(function () {
    var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'both';
    if (axis === 'x') {
      return X_AXIS_OPTIONS;
    } else if (axis === 'y') {
      return Y_AXIS_OPTIONS;
    }
    return BOTH_AXES_OPTIONS;
  });
  var axisValues = createMemoizedFunction(function () {
    var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'both';
    return axisOptions(axis).map(function (_ref) {
      var value = _ref.value;
      return value;
    });
  });
  function edit$9(_ref2) {
    var onInput = _ref2.onInput,
      _ref2$axis = _ref2.axis,
      axis = _ref2$axis === void 0 ? 'both' : _ref2$axis,
      _ref2$stretch = _ref2.stretch,
      stretch = _ref2$stretch === void 0 ? true : _ref2$stretch,
      value = _ref2.value,
      props = _objectWithoutProperties$1(_ref2, _excluded$l);
    var activeIndex = getActiveIndex('both', value);
    var onChange = function onChange(_ref3) {
      var _ref4 = _slicedToArray$1(_ref3, 2),
        horizontal = _ref4[0],
        vertical = _ref4[1];
      if (axis === 'both' && stretch === true && (value === null || value === void 0 ? void 0 : value[0]) === horizontal && (value === null || value === void 0 ? void 0 : value[1]) === vertical) {
        onInput([horizontal, 'stretch']);
      } else {
        onInput([horizontal, vertical]);
      }
    };
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      type: "position",
      value: value
    }), /*#__PURE__*/React.createElement("div", {
      className: classNames('blueprint-blocks:position-field-wrap', _defineProperty$2({
        'can-stretch': axis === 'both' && stretch === true,
        'is-stretch': axis === 'both' && stretch === true && (value === null || value === void 0 ? void 0 : value[1]) === 'stretch',
        'is-both-axes': axis === 'both'
      }, "is-".concat(axis, "-axis"), axis !== 'both'))
    }, axisOptions(axis).map(function (_ref5, index) {
      var icon = _ref5.icon,
        label = _ref5.label,
        value = _ref5.value;
      return /*#__PURE__*/React.createElement("div", {
        onClick: function onClick() {
          return onChange(value);
        },
        title: label,
        className: classNames({
          'is-active': index === activeIndex
        })
      }, /*#__PURE__*/React.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: Icons[icon]
        }
      }));
    })));
  }

  var _excluded$k = ["value"];
  function save$9(_ref) {
    var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$k);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "select",
      dangerouslySetInnerHTML: {
        __html: (Array.isArray(value) && value || [value]).join(',')
      }
    }));
  }

  var index$8 = {
    name: 'position-field',
    edit: edit$9,
    save: save$9
  };

  var _excluded$j = ["onInput", "min", "max", "step", "disabled", "value"];

  //import './style.scss'

  function edit$8(_ref) {
    var onInput = _ref.onInput,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 100 : _ref$max,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step;
      _ref.disabled;
      var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$j);
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      type: "text",
      value: value
    }), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: Number(min),
      max: Number(max),
      step: Number(step),
      value: value,
      onChange: function onChange(event) {
        return onInput(Number(event.target.value));
      }
    }), /*#__PURE__*/React.createElement("input", {
      type: "number",
      min: Number(min),
      max: Number(max),
      step: Number(step),
      value: value,
      onChange: function onChange(event) {
        return onInput(Number(event.target.value));
      }
    }));
  }

  var _excluded$i = ["placeholder", "value"];
  function save$8(_ref) {
    _ref.placeholder;
      var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$i);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "range",
      dangerouslySetInnerHTML: {
        __html: value
      }
    }));
  }

  var RangeField = {
    name: 'range-field',
    edit: edit$8,
    save: save$8
  };

  var css$1 = ".blueprint-blocks\\:repeating-field-wrap {\n  position: relative;\n}\n.blueprint-blocks\\:repeating-field-minus, .blueprint-blocks\\:repeating-field-plus {\n  align-items: center;\n  cursor: pointer;\n  display: grid;\n  justify-content: center;\n  height: 26px;\n  transition: background 0.4s, colors 0.4s;\n  width: 26px;\n}\n.blueprint-blocks\\:repeating-field-minus:not(.is-disabled):hover, .blueprint-blocks\\:repeating-field-plus:not(.is-disabled):hover {\n  background: #e5f3f8;\n  color: #0085ba;\n}\n.blueprint-blocks\\:repeating-field-minus.is-disabled, .blueprint-blocks\\:repeating-field-plus.is-disabled {\n  cursor: default;\n  opacity: 0.25;\n}\n.blueprint-blocks\\:repeating-field-minus img, .blueprint-blocks\\:repeating-field-plus img {\n  display: block;\n  height: 14px;\n  width: 14px;\n}";
  n(css$1,{});

  var _excluded$h = ["onInput", "children", "count", "min", "max", "value"];
  function edit$7(_ref) {
    var _onInput = _ref.onInput,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children,
      _ref$count = _ref.count,
      count = _ref$count === void 0 ? null : _ref$count,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? null : _ref$max,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      props = _objectWithoutProperties$1(_ref, _excluded$h);
    var rowCount = (value === null || value === void 0 ? void 0 : value.length) || 0;
    if (count !== null) {
      rowCount = parseInt(count);
    }
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      type: "repeating"
    }), rowCount > 0 && _toConsumableArray$3(Array(rowCount).keys()).map(function (index) {
      return /*#__PURE__*/React.createElement("div", null, children !== null && (Array.isArray(children) && children || [children]).map(function (_ref2) {
        var _value$index;
        var props = _ref2.props,
          type = _ref2.type;
        var Component = type;
        return /*#__PURE__*/React.createElement(Component, _extends$1({}, props, {
          onInput: function onInput(childValue) {
            if (!(props !== null && props !== void 0 && props.attributeName)) {
              return;
            }
            var newValue = _toConsumableArray$3(Array(rowCount).keys()).map(function (index) {
              return Object.assign({}, value[index] || {});
            });
            newValue[index][props.attributeName] = childValue;
            _onInput(newValue);
          },
          value: value === null || value === void 0 || (_value$index = value[index]) === null || _value$index === void 0 ? void 0 : _value$index[props === null || props === void 0 ? void 0 : props.attributeName]
        }));
      }));
    }), count === null && /*#__PURE__*/React.createElement("div", {
      className: classNames('blueprint-blocks-repeating-field-minus', {
        'is-disabled': value.length <= min
      }),
      onClick: function onClick() {
        _onInput(value.slice(0, -1));
      }
    }, /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: minus
      }
    })), count === null && /*#__PURE__*/React.createElement("div", {
      className: classNames('blueprint-blocks:repeating-field-plus', {
        'is-disabled': max !== null && value.length >= max
      }),
      onClick: function onClick() {
        _onInput([].concat(_toConsumableArray$3(value), [{}]));
      }
    }, /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: plus
      }
    })));
  }

  var _excluded$g = ["children", "count", "min", "max", "value"];
  function save$7(_ref) {
    var children = _ref.children,
      _ref$count = _ref.count,
      count = _ref$count === void 0 ? null : _ref$count;
      _ref.min;
      _ref.max;
      var _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      props = _objectWithoutProperties$1(_ref, _excluded$g);
    var rowCount = (value === null || value === void 0 ? void 0 : value.length) || 0;
    if (count !== null) {
      rowCount = parseInt(count);
    }
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "repeating"
    }), rowCount > 0 && _toConsumableArray$3(Array(rowCount).keys()).map(function (index) {
      return /*#__PURE__*/React.createElement("div", null, children !== null && (Array.isArray(children) && children || [children]).map(function (_ref2) {
        var _value$index;
        var props = _ref2.props,
          type = _ref2.type;
        var Component = type;
        return /*#__PURE__*/React.createElement(Component, _extends$1({}, props, {
          value: value === null || value === void 0 || (_value$index = value[index]) === null || _value$index === void 0 ? void 0 : _value$index[props === null || props === void 0 ? void 0 : props.attributeName]
        }));
      }));
    }));
  }

  var index$7 = {
    name: 'repeating-field',
    edit: edit$7,
    save: save$7
  };

  var _excluded$f = ["onInput", "options", "multiple", "disabled", "value"];
  var fieldStyle = {
    maxWidth: '400px'
  };
  function edit$6(_ref) {
    var _ref2;
    var onInput = _ref.onInput,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$f);
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      type: "select",
      value: value,
      style: fieldStyle
    }), /*#__PURE__*/React.createElement(wp.components.SelectControl, {
      disabled: disabled,
      onChange: onInput,
      options: options,
      multiple: multiple,
      value: multiple && (Array.isArray(value) && value || [value]) || ((_ref2 = Array.isArray(value) && value || [value]) === null || _ref2 === void 0 ? void 0 : _ref2[0])
    }));
  }

  var _excluded$e = ["value"];
  function save$6(_ref) {
    var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$e);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "select",
      dangerouslySetInnerHTML: {
        __html: (Array.isArray(value) && value || [value]).join(',')
      }
    }));
  }

  var index$6 = {
    name: 'select-field',
    edit: edit$6,
    save: save$6
  };

  var _excluded$d = ["onInput", "placeholder", "disabled", "rows", "value"];

  //import './style.scss'

  function edit$5(_ref) {
    var onInput = _ref.onInput,
      placeholder = _ref.placeholder,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? 8 : _ref$rows,
      value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$d);
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      type: "text",
      value: value
    }), /*#__PURE__*/React.createElement(wp.components.TextareaControl, {
      disabled: disabled,
      onChange: onInput,
      placeholder: placeholder,
      rows: rows,
      value: value
    }));
  }

  var _excluded$c = ["value"];
  function save$5(_ref) {
    var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$c);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "textarea",
      dangerouslySetInnerHTML: {
        __html: value
      }
    }));
  }

  var index$5 = {
    name: 'textarea-field',
    edit: edit$5,
    save: save$5
  };

  var left = {
  	icon: "editor-alignleft",
  	value: "left"
  };
  var center = {
  	icon: "editor-aligncenter",
  	value: "center"
  };
  var right = {
  	icon: "editor-alignright",
  	value: "right"
  };
  var TEXT_ALIGN_CONTROLS = {
  	left: left,
  	center: center,
  	right: right
  };

  var _excluded$b = ["onInput", "controls", "value"];
  function edit$4(_ref) {
    var onInput = _ref.onInput,
      _ref$controls = _ref.controls,
      controls = _ref$controls === void 0 ? ['left', 'center', 'right'] : _ref$controls,
      value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$b);
    return /*#__PURE__*/React.createElement(ToolbarField.edit, _extends$1({}, props, {
      type: "align",
      value: value,
      options: controls.map(function (control) {
        return control in TEXT_ALIGN_CONTROLS && TEXT_ALIGN_CONTROLS[control] || control;
      }),
      onInput: onInput
    }));
  }

  var _excluded$a = ["value"];
  function save$4(_ref) {
    var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$a);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "align",
      dangerouslySetInnerHTML: {
        __html: value
      }
    }));
  }

  var index$4 = {
    name: 'text-align-field',
    edit: edit$4,
    save: save$4
  };

  var h1 = {
  	icon: "heading",
  	subscript: "1",
  	label: "Heading 1",
  	value: "h1"
  };
  var h2 = {
  	icon: "heading",
  	subscript: "2",
  	label: "Heading 2",
  	value: "h2"
  };
  var h3 = {
  	icon: "heading",
  	subscript: "3",
  	label: "Heading 3",
  	value: "h3"
  };
  var h4 = {
  	icon: "heading",
  	subscript: "4",
  	label: "Heading 4",
  	value: "h4"
  };
  var h5 = {
  	icon: "heading",
  	subscript: "5",
  	label: "Heading 5",
  	value: "h5"
  };
  var h6 = {
  	icon: "heading",
  	subscript: "6",
  	label: "Heading 6",
  	value: "h6"
  };
  var p = {
  	icon: "paragraph",
  	label: "Paragraph",
  	value: "p"
  };
  var TEXT_SIZES = {
  	h1: h1,
  	h2: h2,
  	h3: h3,
  	h4: h4,
  	h5: h5,
  	h6: h6,
  	p: p
  };

  var _excluded$9 = ["onInput", "textSizes", "value"];
  function edit$3(_ref) {
    var onInput = _ref.onInput,
      _ref$textSizes = _ref.textSizes,
      textSizes = _ref$textSizes === void 0 ? ['h1', 'h2', 'h3', 'h4'] : _ref$textSizes,
      value = _ref.value;
      _objectWithoutProperties$1(_ref, _excluded$9);
    return /*#__PURE__*/React.createElement(ToolbarField.edit, {
      options: textSizes.map(function (textSize) {
        return textSize in TEXT_SIZES && TEXT_SIZES[textSize] || textSize;
      }),
      value: value,
      onInput: onInput
    });
  }

  var _excluded$8 = ["value"];
  function save$3(_ref) {
    var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$8);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "text-size",
      dangerouslySetInnerHTML: {
        __html: value
      }
    }));
  }

  var index$3 = {
    name: 'text-size-field',
    edit: edit$3,
    save: save$3
  };

  var _excluded$7 = ["onInput", "options", "multiple", "disabled", "value"],
    _excluded2$1 = ["icon", "image", "label"];
  var wrapStyle = {
    '--grid-columns': 2,
    background: '#fff',
    border: '1px solid #8d96a0',
    borderRadius: '2px',
    fontFamily: 'var(--wp--preset--font-family--system-font)',
    fontSize: '13px',
    lineHeight: '1.4',
    minHeight: '26px',
    maxWidth: '300px',
    overflow: 'hidden',
    position: 'relative',
    userSelect: 'none'
  };
  var itemsStyle = {
    display: 'grid',
    gap: '1px',
    gridTemplateColumns: 'repeat(var(--grid-columns), minmax(0, 1fr))',
    width: '100%'
  };
  var itemStyle = {
    alignItems: 'stretch',
    cursor: 'pointer',
    display: 'flex',
    flex: '1',
    justifyContent: 'stretch',
    height: '26px',
    outline: '1px solid #e2e4e7',
    padding: '2px'
  };
  var itemDivStyle = {
    borderColor: 'transparent',
    borderRadius: '2px',
    borderStyle: 'solid',
    borderWidth: '1px',
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    flex: '1',
    justifyContent: 'center',
    textAlign: 'center',
    transition: 'background 0.4s, border 0.4s, colors 0.4s',
    whiteSpace: 'nowrap'
  };
  var itemDivHasImagesStyle = {
    flexDirection: 'column',
    height: 'auto',
    justifyContent: 'start',
    overflow: 'hidden',
    whiteSpace: 'normal'
  };
  var itemDivHoverStyle = {
    borderColor: 'var(--wp-components-color-accent, var(--wp-admin-theme-color, #007cba))',
    color: 'var(--wp-components-color-accent, var(--wp-admin-theme-color, #007cba))'
  };
  var itemDivFocusStyle = {
    background: 'var(--wp-components-color-gray-300, #ddd)',
    borderColor: 'var(--wp-components-color-accent, var(--wp-admin-theme-color, #007cba))',
    color: 'var(--wp-components-color-accent, var(--wp-admin-theme-color, #007cba))'
  };
  var itemDivActiveStyle = {
    background: '#0085ba',
    color: '#fff'
  };
  var imageStyle = {
    display: 'block',
    gridColumn: 1,
    gridRow: 1,
    height: '100%',
    objectFit: 'contain',
    objectPosition: 'center',
    width: '100%'
  };
  var imageBeforeStyle = {
    content: '',
    display: 'block',
    gridColumn: 1,
    gridRow: 1,
    paddingBottom: 'calc(100% * (64 / 100))'
  };
  var imageDivStyle = {
    display: 'grid',
    width: '100%'
  };
  var iconStyle = {
    fontSize: '16px'
  };
  var iconHasImagesStyle = {
    fontSize: '32px'
  };
  var labelStyle = {};
  var labelHasImagesStyle = {
    padding: '8px'
  };
  var optionsHaveImages = createMemoizedFunction(function (options) {
    return options.reduce(function (hasImages, _ref) {
      var image = _ref.image;
      return !!(hasImages || image);
    }, false);
  });
  function edit$2(_ref2) {
    var onInput = _ref2.onInput,
      _ref2$options = _ref2.options,
      options = _ref2$options === void 0 ? [] : _ref2$options,
      _ref2$multiple = _ref2.multiple,
      multiple = _ref2$multiple === void 0 ? false : _ref2$multiple;
      _ref2.disabled;
      var _ref2$value = _ref2.value,
      value = _ref2$value === void 0 ? [] : _ref2$value,
      props = _objectWithoutProperties$1(_ref2, _excluded$7);
    var hasImages = optionsHaveImages(options);
    var _useState = wp.element.useState(null),
      _useState2 = _slicedToArray$1(_useState, 2),
      focusIndex = _useState2[0],
      setFocusIndex = _useState2[1];
    var _useState3 = wp.element.useState(null),
      _useState4 = _slicedToArray$1(_useState3, 2),
      hoverIndex = _useState4[0],
      setHoverIndex = _useState4[1];
    var onChooseOption = function onChooseOption(index) {
      var _options$index;
      var newValue = _toConsumableArray$3(value);
      var optionValue = options === null || options === void 0 || (_options$index = options[index]) === null || _options$index === void 0 ? void 0 : _options$index.value;
      if (multiple) {
        if (newValue.indexOf(optionValue) === -1) {
          newValue.push(optionValue);
        } else {
          newValue = newValue.filter(function (value) {
            return value !== optionValue;
          });
        }
      } else {
        var _options$index2;
        newValue = [options === null || options === void 0 || (_options$index2 = options[index]) === null || _options$index2 === void 0 ? void 0 : _options$index2.value];
      }
      onInput(newValue);
    };
    var onBlur = function onBlur() {
      setFocusIndex(null);
      window.removeEventListener('mouseup', onBlur);
    };
    wp.element.useEffect(function () {
      if (focusIndex !== null) {
        window.addEventListener('mouseup', onBlur);
      }
    }, [focusIndex]);
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      type: "toggle",
      value: value
    }), /*#__PURE__*/React.createElement("div", {
      style: wrapStyle
    }, /*#__PURE__*/React.createElement("div", {
      style: itemsStyle
    }, options.map(function (_ref3, index) {
      var icon = _ref3.icon,
        image = _ref3.image,
        label = _ref3.label,
        option = _objectWithoutProperties$1(_ref3, _excluded2$1);
      return /*#__PURE__*/React.createElement("div", {
        style: itemStyle
      }, /*#__PURE__*/React.createElement("div", {
        title: !!icon && label,
        onClick: function onClick() {
          return onChooseOption(index);
        },
        onMouseEnter: function onMouseEnter() {
          return setHoverIndex(index);
        },
        onMouseDown: function onMouseDown() {
          return setFocusIndex(index);
        },
        onMouseLeave: function onMouseLeave() {
          return setHoverIndex(null);
        },
        style: _objectSpread2$2(_objectSpread2$2(_objectSpread2$2(_objectSpread2$2(_objectSpread2$2({}, itemDivStyle), hasImages && itemDivHasImagesStyle), index === hoverIndex && itemDivHoverStyle), index === focusIndex && itemDivFocusStyle), (value === null || value === void 0 ? void 0 : value.indexOf(option === null || option === void 0 ? void 0 : option.value)) !== -1 && itemDivActiveStyle)
      }, !!image && /*#__PURE__*/React.createElement("div", {
        style: imageDivStyle
      }, /*#__PURE__*/React.createElement("div", {
        style: imageBeforeStyle
      }), /*#__PURE__*/React.createElement("img", {
        src: image,
        style: imageStyle
      })), !!icon && !image && /*#__PURE__*/React.createElement("i", {
        className: icon,
        style: _objectSpread2$2(_objectSpread2$2({}, iconStyle), hasImages && iconHasImagesStyle)
      }), (!icon || hasImages) && /*#__PURE__*/React.createElement("span", {
        style: _objectSpread2$2(_objectSpread2$2({}, labelStyle), hasImages && labelHasImagesStyle)
      }, label)));
    }))));
  }

  var _excluded$6 = ["value"];
  function save$2(_ref) {
    var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$6);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "toggle",
      dangerouslySetInnerHTML: {
        __html: (Array.isArray(value) && value || [value]).join(',')
      }
    }));
  }

  var index$2 = {
    name: 'toggle-field',
    edit: edit$2,
    save: save$2
  };

  var css = ".blueprint-blocks\\:url-field input[type=text] {\n  border: var(--blueprint-blocks-border);\n  border-radius: var(--blueprint-blocks-border-radius);\n  color: var(--blueprint-blocks-color);\n  display: block;\n  font-size: var(--blueprint-blocks-font-size) !important;\n  height: 32px !important;\n  line-height: 30px !important;\n  padding: 0 8px;\n  text-align: inherit;\n  transition: none;\n  width: 100% !important;\n}\n\n.blueprint-blocks\\:url-field input[type=text]::placeholder,\n.blueprint-blocks\\:url-field input[type=text]:focus::placeholder,\n.blueprint-blocks\\:url-field input[type=text]:hover::placeholder {\n  color: var(--blueprint-blocks-color);\n  opacity: 0.5;\n}";
  n(css,{});

  var _excluded$5 = ["onInput", "placeholder", "value"];
  function edit$1(_ref) {
    var onInput = _ref.onInput,
      placeholder = _ref.placeholder,
      value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$5);
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      type: "url",
      value: value
    }), /*#__PURE__*/React.createElement(wp.blockEditor.URLInput, {
      onChange: function onChange(url) {
        return onInput(url);
      },
      placeholder: placeholder,
      value: value
    }));
  }

  var _excluded$4 = ["value"];
  function save$1(_ref) {
    var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$4);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "url",
      dangerouslySetInnerHTML: {
        __html: value
      }
    }));
  }

  var index$1 = {
    name: 'url-field',
    edit: edit$1,
    save: save$1
  };

  var _excluded$3 = ["onInput", "min", "max", "step", "disabled", "value"];
  function edit(_ref) {
    var onInput = _ref.onInput,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? null : _ref$max,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$3);
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      type: "width",
      value: value
    }), /*#__PURE__*/React.createElement(RangeField.edit, {
      disabled: disabled,
      min: Number(min),
      max: Number(max),
      step: Number(step),
      value: value,
      onInput: onInput
    }));
  }

  var _excluded$2 = ["value"];
  function save(_ref) {
    var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$2);
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, {
      type: "number",
      dangerouslySetInnerHTML: {
        __html: value
      }
    }));
  }

  var index = {
    name: 'width-field',
    edit: edit,
    save: save
  };

  var Fields = /*#__PURE__*/Object.freeze({
  	__proto__: null,
  	AlignField: index$m,
  	AnchorField: index$l,
  	BooleanField: BooleanField,
  	ColorField: index$k,
  	EmailField: index$j,
  	GradientField: index$i,
  	GridField: index$h,
  	Html: index$g,
  	ImageField: index$f,
  	IncrementField: IncrementField,
  	InnerBlocks: index$e,
  	LinkField: index$d,
  	MarginField: index$c,
  	MediaField: index$b,
  	NumberField: index$a,
  	PaddingField: index$9,
  	PositionField: index$8,
  	RangeField: RangeField,
  	RepeatingField: index$7,
  	RichTextField: RichTextField,
  	SelectField: index$6,
  	TextAlignField: index$4,
  	TextField: TextField,
  	TextSizeField: index$3,
  	TextareaField: index$5,
  	ToggleField: index$2,
  	ToolbarField: ToolbarField,
  	UrlField: index$1,
  	WidthField: index
  });

  var _excluded$1 = ["clientId"],
    _excluded2 = ["children", "tagName"],
    _excluded3 = ["label"];
  var Components$1 = Object.fromEntries(Object.values(Fields).map(function (_ref) {
    var name = _ref.name,
      edit = _ref.edit;
    return [name, edit];
  }));

  /**
   * Filters the default attributes of blocks to provide attributes
   * for index and length.
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-hooks/
   */
  wp.hooks.addFilter('blocks.registerBlockType', 'blueprint-blocks/default-attributes', function (settings, name) {
    if (settings !== null && settings !== void 0 && settings.attributes && _typeof$4(settings === null || settings === void 0 ? void 0 : settings.attributes) === 'object') {
      settings.attributes['_index'] = {
        type: 'number',
        "default": 0
      };
      settings.attributes['_innerBlocksLength'] = {
        type: 'number',
        "default": 0
      };
    }
    return settings;
  });

  /**
   * The edit function describes the structure of your block in the context of the
   * editor. This represents what the editor will render when the block is used.
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
   *
   * @return {WPElement} Element to render.
   */
  function BlockEdit(blueprint) {
    return function (_ref2) {
      var clientId = _ref2.clientId,
        props = _objectWithoutProperties$1(_ref2, _excluded$1);
      var _useState = wp.element.useState((props === null || props === void 0 ? void 0 : props.attributes) || {}),
        _useState2 = _slicedToArray$1(_useState, 2),
        attributes = _useState2[0],
        setStateAttributes = _useState2[1];
      var blockIndex = useBlockIndex(clientId);
      var innerBlocks = useInnerBlocks(clientId);

      /**
       * Sets the default block attributes for index and length. This is
       * throttled to prevent recursive updates.
       */
      wp.element.useLayoutEffect(function () {
        throttle(function () {
          if ((attributes === null || attributes === void 0 ? void 0 : attributes._index) !== blockIndex || attributes._innerBlocksLength !== innerBlocks.length) {
            props === null || props === void 0 || props.setAttributes({
              _index: blockIndex,
              _innerBlocksLength: innerBlocks.length
            });
          }
        }, 500)();
      }, [blockIndex, innerBlocks]);

      /**
       * Overrides the default setAttributes to also save attributes in
       * the state of the component for state change when not saved to
       * the block attributes.
       *
       * @param {object} newAttributeValues
       */
      var setAttributes = function setAttributes(newAttributeValues) {
        var persist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        if (props !== null && props !== void 0 && props.setAttributes && persist === true) {
          props.setAttributes(newAttributeValues);
        }
        setStateAttributes(Object.assign({}, attributes, newAttributeValues));
      };
      var blockProps = wp.blockEditor.useBlockProps();
      var blockName = blockProps['data-type'];
      var blockContext = getBlockContext({
        context: 'edit',
        attributes: attributes,
        innerBlocks: new Array((attributes === null || attributes === void 0 ? void 0 : attributes._innerBlocksLength) || 0).fill(null)
      });
      var _blockEdit = normalizeComponentList(blueprint === null || blueprint === void 0 ? void 0 : blueprint.blockEdit);
      var blockSidebar = normalizeComponentList(blueprint === null || blueprint === void 0 ? void 0 : blueprint.blockSidebar);
      var blockToolbar = normalizeComponentList(blueprint === null || blueprint === void 0 ? void 0 : blueprint.blockToolbar);
      var _ref3 = (_blockEdit === null || _blockEdit === void 0 ? void 0 : _blockEdit[0]) || {},
        _ref3$children = _ref3.children,
        children = _ref3$children === void 0 ? [] : _ref3$children,
        _ref3$tagName = _ref3.tagName,
        tagName = _ref3$tagName === void 0 ? 'div' : _ref3$tagName,
        blockEdit = _objectWithoutProperties$1(_ref3, _excluded2);
      var blockAttributes = Object.fromEntries(Object.entries(blockEdit).map(function (_ref4) {
        var _ref5 = _slicedToArray$1(_ref4, 2),
          name = _ref5[0],
          value = _ref5[1];
        if (typeof value === 'string') {
          return [name, replaceTokens(value, blockContext)];
        } else {
          return [name, value];
        }
      }));
      var blockClassNames = classNames$1([].concat(_toConsumableArray$3(Array.isArray(blockProps.className) && blockProps.className || [blockProps.className]), _toConsumableArray$3(Array.isArray(blockEdit.className) && blockEdit.className || [blockEdit.className]), _toConsumableArray$3(Array.isArray(blockEdit.editorClassName) && blockEdit.editorClassName || [blockEdit.editorClassName])), blockContext);
      if (blockClassNames) {
        blockAttributes.className = blockClassNames;
      }
      var blockStyles = Object.assign({}, blockProps.style || {}, blockEdit.style || {});
      if (Object.values(blockStyles).length > 0) {
        blockAttributes.style = styles(blockStyles, blockContext);
      }
      var Component = tagName;
      return /*#__PURE__*/React.createElement(Component, _extends$1({}, blockProps, blockAttributes), renderJsxArray({
        clientId: clientId,
        blockName: blockName,
        attributes: attributes,
        setAttributes: setAttributes,
        jsx: children,
        context: blockContext
      }, Components$1), blockSidebar.map(function (_ref6) {
        var label = _ref6.label,
          props = _objectWithoutProperties$1(_ref6, _excluded3);
        return /*#__PURE__*/React.createElement(wp.blockEditor.InspectorControls, null, /*#__PURE__*/React.createElement(wp.components.PanelBody, {
          title: label
        }, renderJsxArray({
          clientId: clientId,
          blockName: blockName,
          attributes: attributes,
          setAttributes: setAttributes,
          jsx: [props],
          context: blockContext
        }, Components$1)));
      }), blockToolbar.map(function (props) {
        return /*#__PURE__*/React.createElement(wp.blockEditor.BlockControls, null, /*#__PURE__*/React.createElement(wp.components.ToolbarGroup, null, renderJsxArray({
          clientId: clientId,
          blockName: blockName,
          attributes: attributes,
          setAttributes: setAttributes,
          jsx: [props],
          context: blockContext
        }, Components$1)));
      }));
    };
  }

  var _excluded = ["children", "tagName"];
  var Components = Object.fromEntries(Object.values(Fields).map(function (_ref) {
    var name = _ref.name,
      save = _ref.save;
    return [name, save];
  }));

  /**
   * The save function defines the way in which the different attributes should
   * be combined into the final markup, which is then serialized by the block
   * editor into `post_content`.
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
   *
   * @return {WPElement} Element to render.
   */
  function BlockSave(blueprint) {
    return function (_ref2) {
      var attributes = _ref2.attributes,
        innerBlocks = _ref2.innerBlocks;
      var blockProps = wp.blockEditor.useBlockProps.save();
      var blockName = blockProps.className;
      var blockContext = getBlockContext({
        context: 'save',
        attributes: attributes,
        innerBlocks: innerBlocks
      });
      var _blockEdit = normalizeComponentList(blueprint === null || blueprint === void 0 ? void 0 : blueprint.blockEdit);
      var _blockSave = normalizeComponentList(blueprint === null || blueprint === void 0 ? void 0 : blueprint.blockSave, _blockEdit[0]);
      var _ref3 = (_blockSave === null || _blockSave === void 0 ? void 0 : _blockSave[0]) || {},
        _ref3$children = _ref3.children,
        children = _ref3$children === void 0 ? [] : _ref3$children,
        _ref3$tagName = _ref3.tagName,
        tagName = _ref3$tagName === void 0 ? 'div' : _ref3$tagName,
        blockSave = _objectWithoutProperties$1(_ref3, _excluded);
      var blockAttributes = Object.fromEntries(Object.entries(blockSave).map(function (_ref4) {
        var _ref5 = _slicedToArray$1(_ref4, 2),
          name = _ref5[0],
          value = _ref5[1];
        if (typeof value === 'string') {
          return [name, replaceTokens(value, blockContext)];
        } else {
          return [name, value];
        }
      }));
      var blockClassNames = classNames$1([].concat(_toConsumableArray$3(Array.isArray(blockProps.className) && blockProps.className || [blockProps.className]), _toConsumableArray$3(Array.isArray(blockSave.className) && blockSave.className || [blockSave.className]), _toConsumableArray$3(Array.isArray(blockSave.viewClassName) && blockSave.viewClassName || [blockSave.viewClassName])), blockContext);
      if (blockClassNames) {
        blockAttributes.className = blockClassNames;
      }
      var blockStyles = Object.assign({}, blockProps.style || {}, blockSave.style || {});
      if (Object.values(blockStyles).length > 0) {
        blockAttributes.style = styles(blockStyles, blockContext);
      }
      var Component = tagName;
      return /*#__PURE__*/React.createElement(Component, _extends$1({}, blockProps, blockAttributes), renderJsxArray({
        blockName: blockName,
        attributes: attributes,
        jsx: children,
        context: blockContext
      }, Components));
    };
  }

  /**
   * Registers a new block provided a unique name and an object defining its behavior.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
   */

  /**
   * Every block starts by registering a new block type definition.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
   */
  const { blockTypes = {} } = blueprintBlocksLoaderSettings || {};

  Object.entries( blockTypes ).forEach( ( [ blockName, blockType ] ) => {

  	blocks.registerBlockType( blockName, {

  		...( blockType?.blockJson || {} ),

  		edit: BlockEdit( blockType?.blockBlueprint || null ),

  		save: BlockSave( blockType?.blockBlueprint || null ),

  	} );

  } );

})(wp.blocks);
