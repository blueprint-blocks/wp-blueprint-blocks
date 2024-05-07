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
        if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
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
  function ownKeys$i(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2$i(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$i(Object(t), !0).forEach(function (r) {
        _defineProperty$i(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$i(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive$i(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey$i(t) {
    var i = _toPrimitive$i(t, "string");
    return "symbol" == typeof i ? i : String(i);
  }
  function _typeof$h(o) {
    "@babel/helpers - typeof";

    return _typeof$h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$h(o);
  }
  function _defineProperty$i(obj, key, value) {
    key = _toPropertyKey$i(key);
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
  function _toConsumableArray$1(arr) {
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
        if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
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
  function ownKeys$h(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2$h(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$h(Object(t), !0).forEach(function (r) {
        _defineProperty$h(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$h(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive$h(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey$h(t) {
    var i = _toPrimitive$h(t, "string");
    return "symbol" == typeof i ? i : String(i);
  }
  function _typeof$g(o) {
    "@babel/helpers - typeof";

    return _typeof$g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$g(o);
  }
  function _defineProperty$h(obj, key, value) {
    key = _toPropertyKey$h(key);
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
  function _toConsumableArray(arr) {
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
  function getDefaultExportFromCjs$1(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }
  var classnames$h = {
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
        var classes = '';
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
          return arg;
        }
        if (typeof arg !== 'object') {
          return '';
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          return arg.toString();
        }
        var classes = '';
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + ' ' + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames$h);
  var classnamesExports$1 = classnames$h.exports;
  var npmClassNames = /*@__PURE__*/getDefaultExportFromCjs$1(classnamesExports$1);

  /**
   * @constant DEFAULT_OPTIONS_KEYS the default options keys
   */
  var DEFAULT_OPTIONS_KEYS$h = {
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
  var slice$h = Array.prototype.slice;
  /**
   * @function cloneArray
   *
   * @description
   * clone the array-like object and return the new array
   *
   * @param arrayLike the array-like object to clone
   * @returns the clone as an array
   */
  function cloneArray$h(arrayLike) {
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
    return slice$h.call(arrayLike, 0);
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
  function getCustomOptions$h(options) {
    var customOptions = {};
    /* eslint-disable no-restricted-syntax */
    for (var key in options) {
      if (!DEFAULT_OPTIONS_KEYS$h[key]) {
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
  function isMemoized$h(fn) {
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
  function isSameValueZero$h(object1, object2) {
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
  function mergeOptions$h(existingOptions, newOptions) {
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
  var Cache$h = /** @class */function () {
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
          keys: cloneArray$h(this.keys),
          size: this.size,
          values: cloneArray$h(this.values)
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
  function createMemoizedFunction$h(fn, options) {
    if (options === void 0) {
      options = {};
    }
    if (isMemoized$h(fn)) {
      return createMemoizedFunction$h(fn.fn, mergeOptions$h(fn.options, options));
    }
    if (typeof fn !== 'function') {
      throw new TypeError('You must pass a function to `memoize`.');
    }
    var _a = options.isEqual,
      isEqual = _a === void 0 ? isSameValueZero$h : _a,
      isMatchingKey = options.isMatchingKey,
      _b = options.isPromise,
      isPromise = _b === void 0 ? false : _b,
      _c = options.maxSize,
      maxSize = _c === void 0 ? 1 : _c,
      onCacheAdd = options.onCacheAdd,
      onCacheChange = options.onCacheChange,
      onCacheHit = options.onCacheHit,
      transformKey = options.transformKey;
    var normalizedOptions = mergeOptions$h({
      isEqual: isEqual,
      isMatchingKey: isMatchingKey,
      isPromise: isPromise,
      maxSize: maxSize,
      onCacheAdd: onCacheAdd,
      onCacheChange: onCacheChange,
      onCacheHit: onCacheHit,
      transformKey: transformKey
    }, getCustomOptions$h(options));
    var cache = new Cache$h(normalizedOptions);
    var keys = cache.keys,
      values = cache.values,
      canTransformKey = cache.canTransformKey,
      shouldCloneArguments = cache.shouldCloneArguments,
      shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
      shouldUpdateOnChange = cache.shouldUpdateOnChange,
      shouldUpdateOnHit = cache.shouldUpdateOnHit;
    var memoized = function () {
      var key = shouldCloneArguments ? cloneArray$h(arguments) : arguments;
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
        var newKey = shouldCloneArguments ? key : cloneArray$h(arguments);
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
  var valueByIdentifier$h = createMemoizedFunction$h(function () {
    var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var value = _objectSpread2$h({}, context);
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
    return valueByIdentifier$h(parts.join('.'), value[key]);
  });
  function replaceTokens() {
    var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (typeof string !== 'string') {
      return string;
    }
    return string.replaceAll(/\{\{(.*?)\}\}/g, function (match, p1) {
      return valueByIdentifier$h(p1.trim(), context);
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
      if (Array.isArray(className)) {
        return classNames$1(className, context);
      } else if (_typeof$g(className) === "object") {
        return Object.fromEntries(Object.entries(className).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];
          return [replaceTokens(key, context), typeof value === "boolean" ? value : evaluateConditionalString(value, context)];
        }));
      }
      return className;
    });
    return replaceTokens(npmClassNames.apply(void 0, _toConsumableArray(classNameArray)), context);
  }
  function convertStyleStringToObject() {
    var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    if (typeof style !== "string") {
      return {};
    }
    return Object.fromEntries(style.split(";").filter(function (property) {
      return !!property;
    }).map(function (property) {
      return property.split(":");
    }));
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
    return _objectSpread2$h(_objectSpread2$h({}, blockContext), {}, {
      block: _objectSpread2$h({
        index: index
      }, attributes),
      innerBlocks: (innerBlocks === null || innerBlocks === void 0 ? void 0 : innerBlocks.length) && innerBlocks || new Array(length).fill(null)
    });
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
  function ownKeys$g(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2$g(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$g(Object(t), !0).forEach(function (r) {
        _defineProperty$g(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$g(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive$g(t, r) {
    if ("object" != _typeof$g(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof$g(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey$g(t) {
    var i = _toPrimitive$g(t, "string");
    return "symbol" == _typeof$g(i) ? i : String(i);
  }
  function _typeof$f(o) {
    "@babel/helpers - typeof";

    return _typeof$f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$f(o);
  }
  function _defineProperty$g(obj, key, value) {
    key = _toPropertyKey$g(key);
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
  var classnames$g = {
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
        var classes = '';
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
          return arg;
        }
        if (_typeof$g(arg) !== 'object') {
          return '';
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          return arg.toString();
        }
        var classes = '';
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + ' ' + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames["default"] = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames$g);

  /**
   * @constant DEFAULT_OPTIONS_KEYS the default options keys
   */
  var DEFAULT_OPTIONS_KEYS$g = {
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
  var slice$g = Array.prototype.slice;
  /**
   * @function cloneArray
   *
   * @description
   * clone the array-like object and return the new array
   *
   * @param arrayLike the array-like object to clone
   * @returns the clone as an array
   */
  function cloneArray$g(arrayLike) {
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
    return slice$g.call(arrayLike, 0);
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
  function getCustomOptions$g(options) {
    var customOptions = {};
    /* eslint-disable no-restricted-syntax */
    for (var key in options) {
      if (!DEFAULT_OPTIONS_KEYS$g[key]) {
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
  function isMemoized$g(fn) {
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
  function isSameValueZero$g(object1, object2) {
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
  function mergeOptions$g(existingOptions, newOptions) {
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
  var Cache$g = /** @class */function () {
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
      get: function get() {
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
      get: function get() {
        return {
          keys: cloneArray$g(this.keys),
          size: this.size,
          values: cloneArray$g(this.values)
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
  function createMemoizedFunction$g(fn, options) {
    if (options === void 0) {
      options = {};
    }
    if (isMemoized$g(fn)) {
      return createMemoizedFunction$g(fn.fn, mergeOptions$g(fn.options, options));
    }
    if (typeof fn !== 'function') {
      throw new TypeError('You must pass a function to `memoize`.');
    }
    var _a = options.isEqual,
      isEqual = _a === void 0 ? isSameValueZero$g : _a,
      isMatchingKey = options.isMatchingKey,
      _b = options.isPromise,
      isPromise = _b === void 0 ? false : _b,
      _c = options.maxSize,
      maxSize = _c === void 0 ? 1 : _c,
      onCacheAdd = options.onCacheAdd,
      onCacheChange = options.onCacheChange,
      onCacheHit = options.onCacheHit,
      transformKey = options.transformKey;
    var normalizedOptions = mergeOptions$g({
      isEqual: isEqual,
      isMatchingKey: isMatchingKey,
      isPromise: isPromise,
      maxSize: maxSize,
      onCacheAdd: onCacheAdd,
      onCacheChange: onCacheChange,
      onCacheHit: onCacheHit,
      transformKey: transformKey
    }, getCustomOptions$g(options));
    var cache = new Cache$g(normalizedOptions);
    var keys = cache.keys,
      values = cache.values,
      canTransformKey = cache.canTransformKey,
      shouldCloneArguments = cache.shouldCloneArguments,
      shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
      shouldUpdateOnChange = cache.shouldUpdateOnChange,
      shouldUpdateOnHit = cache.shouldUpdateOnHit;
    var memoized = function memoized() {
      var key = shouldCloneArguments ? cloneArray$g(arguments) : arguments;
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
        var newKey = shouldCloneArguments ? key : cloneArray$g(arguments);
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
  var valueByIdentifier$g = createMemoizedFunction$g(function () {
    var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var value = _objectSpread2$g({}, context);
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
    return valueByIdentifier$g(parts.join('.'), value[key]);
  });
  function isArray(value) {
    return Array.isArray(value) && value !== null;
  }
  function isObject(value) {
    return _typeof$f(value) === 'object' && !Array.isArray(value) && value !== null;
  }
  function ownKeys$f(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2$f(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$f(Object(t), !0).forEach(function (r) {
        _defineProperty$f(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$f(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive$f(t, r) {
    if ("object" != _typeof$f(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof$f(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey$f(t) {
    var i = _toPrimitive$f(t, "string");
    return "symbol" == _typeof$f(i) ? i : String(i);
  }
  function _typeof$e(o) {
    "@babel/helpers - typeof";

    return _typeof$e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$e(o);
  }
  function _defineProperty$f(obj, key, value) {
    key = _toPropertyKey$f(key);
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
  var classnames$f = {
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
        var classes = '';
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
          return arg;
        }
        if (_typeof$f(arg) !== 'object') {
          return '';
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          return arg.toString();
        }
        var classes = '';
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + ' ' + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames["default"] = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames$f);

  /**
   * @constant DEFAULT_OPTIONS_KEYS the default options keys
   */
  var DEFAULT_OPTIONS_KEYS$f = {
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
  var slice$f = Array.prototype.slice;
  /**
   * @function cloneArray
   *
   * @description
   * clone the array-like object and return the new array
   *
   * @param arrayLike the array-like object to clone
   * @returns the clone as an array
   */
  function cloneArray$f(arrayLike) {
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
    return slice$f.call(arrayLike, 0);
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
  function getCustomOptions$f(options) {
    var customOptions = {};
    /* eslint-disable no-restricted-syntax */
    for (var key in options) {
      if (!DEFAULT_OPTIONS_KEYS$f[key]) {
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
  function isMemoized$f(fn) {
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
  function isSameValueZero$f(object1, object2) {
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
  function mergeOptions$f(existingOptions, newOptions) {
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
  var Cache$f = /** @class */function () {
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
      get: function get() {
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
      get: function get() {
        return {
          keys: cloneArray$f(this.keys),
          size: this.size,
          values: cloneArray$f(this.values)
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
  function createMemoizedFunction$f(fn, options) {
    if (options === void 0) {
      options = {};
    }
    if (isMemoized$f(fn)) {
      return createMemoizedFunction$f(fn.fn, mergeOptions$f(fn.options, options));
    }
    if (typeof fn !== 'function') {
      throw new TypeError('You must pass a function to `memoize`.');
    }
    var _a = options.isEqual,
      isEqual = _a === void 0 ? isSameValueZero$f : _a,
      isMatchingKey = options.isMatchingKey,
      _b = options.isPromise,
      isPromise = _b === void 0 ? false : _b,
      _c = options.maxSize,
      maxSize = _c === void 0 ? 1 : _c,
      onCacheAdd = options.onCacheAdd,
      onCacheChange = options.onCacheChange,
      onCacheHit = options.onCacheHit,
      transformKey = options.transformKey;
    var normalizedOptions = mergeOptions$f({
      isEqual: isEqual,
      isMatchingKey: isMatchingKey,
      isPromise: isPromise,
      maxSize: maxSize,
      onCacheAdd: onCacheAdd,
      onCacheChange: onCacheChange,
      onCacheHit: onCacheHit,
      transformKey: transformKey
    }, getCustomOptions$f(options));
    var cache = new Cache$f(normalizedOptions);
    var keys = cache.keys,
      values = cache.values,
      canTransformKey = cache.canTransformKey,
      shouldCloneArguments = cache.shouldCloneArguments,
      shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
      shouldUpdateOnChange = cache.shouldUpdateOnChange,
      shouldUpdateOnHit = cache.shouldUpdateOnHit;
    var memoized = function memoized() {
      var key = shouldCloneArguments ? cloneArray$f(arguments) : arguments;
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
        var newKey = shouldCloneArguments ? key : cloneArray$f(arguments);
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
  var valueByIdentifier$f = createMemoizedFunction$f(function () {
    var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var value = _objectSpread2$f({}, context);
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
    return valueByIdentifier$f(parts.join('.'), value[key]);
  });
  function ownKeys$e(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2$e(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$e(Object(t), !0).forEach(function (r) {
        _defineProperty$e(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$e(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive$e(t, r) {
    if ("object" != _typeof$e(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof$e(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey$e(t) {
    var i = _toPrimitive$e(t, "string");
    return "symbol" == _typeof$e(i) ? i : String(i);
  }
  function _typeof$d(o) {
    "@babel/helpers - typeof";

    return _typeof$d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$d(o);
  }
  function _defineProperty$e(obj, key, value) {
    key = _toPropertyKey$e(key);
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
  var classnames$e = {
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
        var classes = '';
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
          return arg;
        }
        if (_typeof$e(arg) !== 'object') {
          return '';
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          return arg.toString();
        }
        var classes = '';
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + ' ' + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames["default"] = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames$e);

  /**
   * @constant DEFAULT_OPTIONS_KEYS the default options keys
   */
  var DEFAULT_OPTIONS_KEYS$e = {
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
  var slice$e = Array.prototype.slice;
  /**
   * @function cloneArray
   *
   * @description
   * clone the array-like object and return the new array
   *
   * @param arrayLike the array-like object to clone
   * @returns the clone as an array
   */
  function cloneArray$e(arrayLike) {
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
    return slice$e.call(arrayLike, 0);
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
  function getCustomOptions$e(options) {
    var customOptions = {};
    /* eslint-disable no-restricted-syntax */
    for (var key in options) {
      if (!DEFAULT_OPTIONS_KEYS$e[key]) {
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
  function isMemoized$e(fn) {
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
  function isSameValueZero$e(object1, object2) {
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
  function mergeOptions$e(existingOptions, newOptions) {
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
  var Cache$e = /** @class */function () {
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
      get: function get() {
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
      get: function get() {
        return {
          keys: cloneArray$e(this.keys),
          size: this.size,
          values: cloneArray$e(this.values)
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
  function createMemoizedFunction$e(fn, options) {
    if (options === void 0) {
      options = {};
    }
    if (isMemoized$e(fn)) {
      return createMemoizedFunction$e(fn.fn, mergeOptions$e(fn.options, options));
    }
    if (typeof fn !== 'function') {
      throw new TypeError('You must pass a function to `memoize`.');
    }
    var _a = options.isEqual,
      isEqual = _a === void 0 ? isSameValueZero$e : _a,
      isMatchingKey = options.isMatchingKey,
      _b = options.isPromise,
      isPromise = _b === void 0 ? false : _b,
      _c = options.maxSize,
      maxSize = _c === void 0 ? 1 : _c,
      onCacheAdd = options.onCacheAdd,
      onCacheChange = options.onCacheChange,
      onCacheHit = options.onCacheHit,
      transformKey = options.transformKey;
    var normalizedOptions = mergeOptions$e({
      isEqual: isEqual,
      isMatchingKey: isMatchingKey,
      isPromise: isPromise,
      maxSize: maxSize,
      onCacheAdd: onCacheAdd,
      onCacheChange: onCacheChange,
      onCacheHit: onCacheHit,
      transformKey: transformKey
    }, getCustomOptions$e(options));
    var cache = new Cache$e(normalizedOptions);
    var keys = cache.keys,
      values = cache.values,
      canTransformKey = cache.canTransformKey,
      shouldCloneArguments = cache.shouldCloneArguments,
      shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
      shouldUpdateOnChange = cache.shouldUpdateOnChange,
      shouldUpdateOnHit = cache.shouldUpdateOnHit;
    var memoized = function memoized() {
      var key = shouldCloneArguments ? cloneArray$e(arguments) : arguments;
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
        var newKey = shouldCloneArguments ? key : cloneArray$e(arguments);
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
  var valueByIdentifier$e = createMemoizedFunction$e(function () {
    var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var value = _objectSpread2$e({}, context);
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
    return valueByIdentifier$e(parts.join('.'), value[key]);
  });
  function ownKeys$d(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2$d(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$d(Object(t), !0).forEach(function (r) {
        _defineProperty$d(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$d(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive$d(t, r) {
    if ("object" != _typeof$d(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof$d(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey$d(t) {
    var i = _toPrimitive$d(t, "string");
    return "symbol" == _typeof$d(i) ? i : String(i);
  }
  function _typeof$c(o) {
    "@babel/helpers - typeof";

    return _typeof$c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$c(o);
  }
  function _defineProperty$d(obj, key, value) {
    key = _toPropertyKey$d(key);
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
  var classnames$d = {
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
        var classes = '';
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
          return arg;
        }
        if (_typeof$d(arg) !== 'object') {
          return '';
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          return arg.toString();
        }
        var classes = '';
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + ' ' + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames["default"] = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames$d);

  /**
   * @constant DEFAULT_OPTIONS_KEYS the default options keys
   */
  var DEFAULT_OPTIONS_KEYS$d = {
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
  var slice$d = Array.prototype.slice;
  /**
   * @function cloneArray
   *
   * @description
   * clone the array-like object and return the new array
   *
   * @param arrayLike the array-like object to clone
   * @returns the clone as an array
   */
  function cloneArray$d(arrayLike) {
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
    return slice$d.call(arrayLike, 0);
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
  function getCustomOptions$d(options) {
    var customOptions = {};
    /* eslint-disable no-restricted-syntax */
    for (var key in options) {
      if (!DEFAULT_OPTIONS_KEYS$d[key]) {
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
  function isMemoized$d(fn) {
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
  function isSameValueZero$d(object1, object2) {
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
  function mergeOptions$d(existingOptions, newOptions) {
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
  var Cache$d = /** @class */function () {
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
      get: function get() {
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
      get: function get() {
        return {
          keys: cloneArray$d(this.keys),
          size: this.size,
          values: cloneArray$d(this.values)
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
  function createMemoizedFunction$d(fn, options) {
    if (options === void 0) {
      options = {};
    }
    if (isMemoized$d(fn)) {
      return createMemoizedFunction$d(fn.fn, mergeOptions$d(fn.options, options));
    }
    if (typeof fn !== 'function') {
      throw new TypeError('You must pass a function to `memoize`.');
    }
    var _a = options.isEqual,
      isEqual = _a === void 0 ? isSameValueZero$d : _a,
      isMatchingKey = options.isMatchingKey,
      _b = options.isPromise,
      isPromise = _b === void 0 ? false : _b,
      _c = options.maxSize,
      maxSize = _c === void 0 ? 1 : _c,
      onCacheAdd = options.onCacheAdd,
      onCacheChange = options.onCacheChange,
      onCacheHit = options.onCacheHit,
      transformKey = options.transformKey;
    var normalizedOptions = mergeOptions$d({
      isEqual: isEqual,
      isMatchingKey: isMatchingKey,
      isPromise: isPromise,
      maxSize: maxSize,
      onCacheAdd: onCacheAdd,
      onCacheChange: onCacheChange,
      onCacheHit: onCacheHit,
      transformKey: transformKey
    }, getCustomOptions$d(options));
    var cache = new Cache$d(normalizedOptions);
    var keys = cache.keys,
      values = cache.values,
      canTransformKey = cache.canTransformKey,
      shouldCloneArguments = cache.shouldCloneArguments,
      shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
      shouldUpdateOnChange = cache.shouldUpdateOnChange,
      shouldUpdateOnHit = cache.shouldUpdateOnHit;
    var memoized = function memoized() {
      var key = shouldCloneArguments ? cloneArray$d(arguments) : arguments;
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
        var newKey = shouldCloneArguments ? key : cloneArray$d(arguments);
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
  var valueByIdentifier$d = createMemoizedFunction$d(function () {
    var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var value = _objectSpread2$d({}, context);
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
    return valueByIdentifier$d(parts.join('.'), value[key]);
  });
  function ownKeys$c(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2$c(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$c(Object(t), !0).forEach(function (r) {
        _defineProperty$c(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$c(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive$c(t, r) {
    if ("object" != _typeof$c(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof$c(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey$c(t) {
    var i = _toPrimitive$c(t, "string");
    return "symbol" == _typeof$c(i) ? i : String(i);
  }
  function _typeof$b(o) {
    "@babel/helpers - typeof";

    return _typeof$b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$b(o);
  }
  function _defineProperty$c(obj, key, value) {
    key = _toPropertyKey$c(key);
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
  var classnames$c = {
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
        var classes = '';
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
          return arg;
        }
        if (_typeof$c(arg) !== 'object') {
          return '';
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          return arg.toString();
        }
        var classes = '';
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + ' ' + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames["default"] = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames$c);

  /**
   * @constant DEFAULT_OPTIONS_KEYS the default options keys
   */
  var DEFAULT_OPTIONS_KEYS$c = {
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
  var slice$c = Array.prototype.slice;
  /**
   * @function cloneArray
   *
   * @description
   * clone the array-like object and return the new array
   *
   * @param arrayLike the array-like object to clone
   * @returns the clone as an array
   */
  function cloneArray$c(arrayLike) {
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
    return slice$c.call(arrayLike, 0);
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
  function getCustomOptions$c(options) {
    var customOptions = {};
    /* eslint-disable no-restricted-syntax */
    for (var key in options) {
      if (!DEFAULT_OPTIONS_KEYS$c[key]) {
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
  function isMemoized$c(fn) {
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
  function isSameValueZero$c(object1, object2) {
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
  function mergeOptions$c(existingOptions, newOptions) {
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
  var Cache$c = /** @class */function () {
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
      get: function get() {
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
      get: function get() {
        return {
          keys: cloneArray$c(this.keys),
          size: this.size,
          values: cloneArray$c(this.values)
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
  function createMemoizedFunction$c(fn, options) {
    if (options === void 0) {
      options = {};
    }
    if (isMemoized$c(fn)) {
      return createMemoizedFunction$c(fn.fn, mergeOptions$c(fn.options, options));
    }
    if (typeof fn !== 'function') {
      throw new TypeError('You must pass a function to `memoize`.');
    }
    var _a = options.isEqual,
      isEqual = _a === void 0 ? isSameValueZero$c : _a,
      isMatchingKey = options.isMatchingKey,
      _b = options.isPromise,
      isPromise = _b === void 0 ? false : _b,
      _c = options.maxSize,
      maxSize = _c === void 0 ? 1 : _c,
      onCacheAdd = options.onCacheAdd,
      onCacheChange = options.onCacheChange,
      onCacheHit = options.onCacheHit,
      transformKey = options.transformKey;
    var normalizedOptions = mergeOptions$c({
      isEqual: isEqual,
      isMatchingKey: isMatchingKey,
      isPromise: isPromise,
      maxSize: maxSize,
      onCacheAdd: onCacheAdd,
      onCacheChange: onCacheChange,
      onCacheHit: onCacheHit,
      transformKey: transformKey
    }, getCustomOptions$c(options));
    var cache = new Cache$c(normalizedOptions);
    var keys = cache.keys,
      values = cache.values,
      canTransformKey = cache.canTransformKey,
      shouldCloneArguments = cache.shouldCloneArguments,
      shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
      shouldUpdateOnChange = cache.shouldUpdateOnChange,
      shouldUpdateOnHit = cache.shouldUpdateOnHit;
    var memoized = function memoized() {
      var key = shouldCloneArguments ? cloneArray$c(arguments) : arguments;
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
        var newKey = shouldCloneArguments ? key : cloneArray$c(arguments);
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
  var valueByIdentifier$c = createMemoizedFunction$c(function () {
    var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var value = _objectSpread2$c({}, context);
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
    return valueByIdentifier$c(parts.join('.'), value[key]);
  });
  function ownKeys$b(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2$b(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$b(Object(t), !0).forEach(function (r) {
        _defineProperty$b(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$b(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive$b(t, r) {
    if ("object" != _typeof$b(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof$b(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey$b(t) {
    var i = _toPrimitive$b(t, "string");
    return "symbol" == _typeof$b(i) ? i : String(i);
  }
  function _typeof$a(o) {
    "@babel/helpers - typeof";

    return _typeof$a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$a(o);
  }
  function _defineProperty$b(obj, key, value) {
    key = _toPropertyKey$b(key);
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
  var classnames$b = {
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
        var classes = '';
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
          return arg;
        }
        if (_typeof$b(arg) !== 'object') {
          return '';
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          return arg.toString();
        }
        var classes = '';
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + ' ' + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames["default"] = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames$b);

  /**
   * @constant DEFAULT_OPTIONS_KEYS the default options keys
   */
  var DEFAULT_OPTIONS_KEYS$b = {
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
  var slice$b = Array.prototype.slice;
  /**
   * @function cloneArray
   *
   * @description
   * clone the array-like object and return the new array
   *
   * @param arrayLike the array-like object to clone
   * @returns the clone as an array
   */
  function cloneArray$b(arrayLike) {
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
    return slice$b.call(arrayLike, 0);
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
  function getCustomOptions$b(options) {
    var customOptions = {};
    /* eslint-disable no-restricted-syntax */
    for (var key in options) {
      if (!DEFAULT_OPTIONS_KEYS$b[key]) {
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
  function isMemoized$b(fn) {
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
  function isSameValueZero$b(object1, object2) {
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
  function mergeOptions$b(existingOptions, newOptions) {
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
  var Cache$b = /** @class */function () {
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
      get: function get() {
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
      get: function get() {
        return {
          keys: cloneArray$b(this.keys),
          size: this.size,
          values: cloneArray$b(this.values)
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
  function createMemoizedFunction$b(fn, options) {
    if (options === void 0) {
      options = {};
    }
    if (isMemoized$b(fn)) {
      return createMemoizedFunction$b(fn.fn, mergeOptions$b(fn.options, options));
    }
    if (typeof fn !== 'function') {
      throw new TypeError('You must pass a function to `memoize`.');
    }
    var _a = options.isEqual,
      isEqual = _a === void 0 ? isSameValueZero$b : _a,
      isMatchingKey = options.isMatchingKey,
      _b = options.isPromise,
      isPromise = _b === void 0 ? false : _b,
      _c = options.maxSize,
      maxSize = _c === void 0 ? 1 : _c,
      onCacheAdd = options.onCacheAdd,
      onCacheChange = options.onCacheChange,
      onCacheHit = options.onCacheHit,
      transformKey = options.transformKey;
    var normalizedOptions = mergeOptions$b({
      isEqual: isEqual,
      isMatchingKey: isMatchingKey,
      isPromise: isPromise,
      maxSize: maxSize,
      onCacheAdd: onCacheAdd,
      onCacheChange: onCacheChange,
      onCacheHit: onCacheHit,
      transformKey: transformKey
    }, getCustomOptions$b(options));
    var cache = new Cache$b(normalizedOptions);
    var keys = cache.keys,
      values = cache.values,
      canTransformKey = cache.canTransformKey,
      shouldCloneArguments = cache.shouldCloneArguments,
      shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
      shouldUpdateOnChange = cache.shouldUpdateOnChange,
      shouldUpdateOnHit = cache.shouldUpdateOnHit;
    var memoized = function memoized() {
      var key = shouldCloneArguments ? cloneArray$b(arguments) : arguments;
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
        var newKey = shouldCloneArguments ? key : cloneArray$b(arguments);
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
  var valueByIdentifier$b = createMemoizedFunction$b(function () {
    var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var value = _objectSpread2$b({}, context);
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
    return valueByIdentifier$b(parts.join('.'), value[key]);
  });
  function ownKeys$a(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2$a(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$a(Object(t), !0).forEach(function (r) {
        _defineProperty$a(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive$a(t, r) {
    if ("object" != _typeof$a(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof$a(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey$a(t) {
    var i = _toPrimitive$a(t, "string");
    return "symbol" == _typeof$a(i) ? i : String(i);
  }
  function _typeof$9(o) {
    "@babel/helpers - typeof";

    return _typeof$9 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$9(o);
  }
  function _defineProperty$a(obj, key, value) {
    key = _toPropertyKey$a(key);
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
  var classnames$a = {
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
        var classes = '';
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
          return arg;
        }
        if (_typeof$a(arg) !== 'object') {
          return '';
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          return arg.toString();
        }
        var classes = '';
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + ' ' + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames["default"] = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames$a);

  /**
   * @constant DEFAULT_OPTIONS_KEYS the default options keys
   */
  var DEFAULT_OPTIONS_KEYS$a = {
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
  var slice$a = Array.prototype.slice;
  /**
   * @function cloneArray
   *
   * @description
   * clone the array-like object and return the new array
   *
   * @param arrayLike the array-like object to clone
   * @returns the clone as an array
   */
  function cloneArray$a(arrayLike) {
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
    return slice$a.call(arrayLike, 0);
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
  function getCustomOptions$a(options) {
    var customOptions = {};
    /* eslint-disable no-restricted-syntax */
    for (var key in options) {
      if (!DEFAULT_OPTIONS_KEYS$a[key]) {
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
  function isMemoized$a(fn) {
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
  function isSameValueZero$a(object1, object2) {
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
  function mergeOptions$a(existingOptions, newOptions) {
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
  var Cache$a = /** @class */function () {
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
      get: function get() {
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
      get: function get() {
        return {
          keys: cloneArray$a(this.keys),
          size: this.size,
          values: cloneArray$a(this.values)
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
  function createMemoizedFunction$a(fn, options) {
    if (options === void 0) {
      options = {};
    }
    if (isMemoized$a(fn)) {
      return createMemoizedFunction$a(fn.fn, mergeOptions$a(fn.options, options));
    }
    if (typeof fn !== 'function') {
      throw new TypeError('You must pass a function to `memoize`.');
    }
    var _a = options.isEqual,
      isEqual = _a === void 0 ? isSameValueZero$a : _a,
      isMatchingKey = options.isMatchingKey,
      _b = options.isPromise,
      isPromise = _b === void 0 ? false : _b,
      _c = options.maxSize,
      maxSize = _c === void 0 ? 1 : _c,
      onCacheAdd = options.onCacheAdd,
      onCacheChange = options.onCacheChange,
      onCacheHit = options.onCacheHit,
      transformKey = options.transformKey;
    var normalizedOptions = mergeOptions$a({
      isEqual: isEqual,
      isMatchingKey: isMatchingKey,
      isPromise: isPromise,
      maxSize: maxSize,
      onCacheAdd: onCacheAdd,
      onCacheChange: onCacheChange,
      onCacheHit: onCacheHit,
      transformKey: transformKey
    }, getCustomOptions$a(options));
    var cache = new Cache$a(normalizedOptions);
    var keys = cache.keys,
      values = cache.values,
      canTransformKey = cache.canTransformKey,
      shouldCloneArguments = cache.shouldCloneArguments,
      shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
      shouldUpdateOnChange = cache.shouldUpdateOnChange,
      shouldUpdateOnHit = cache.shouldUpdateOnHit;
    var memoized = function memoized() {
      var key = shouldCloneArguments ? cloneArray$a(arguments) : arguments;
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
        var newKey = shouldCloneArguments ? key : cloneArray$a(arguments);
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
  var valueByIdentifier$a = createMemoizedFunction$a(function () {
    var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var value = _objectSpread2$a({}, context);
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
    return valueByIdentifier$a(parts.join('.'), value[key]);
  });
  function ownKeys$9(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2$9(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$9(Object(t), !0).forEach(function (r) {
        _defineProperty$9(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive$9(t, r) {
    if ("object" != _typeof$9(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof$9(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey$9(t) {
    var i = _toPrimitive$9(t, "string");
    return "symbol" == _typeof$9(i) ? i : String(i);
  }
  function _typeof$8(o) {
    "@babel/helpers - typeof";

    return _typeof$8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$8(o);
  }
  function _defineProperty$9(obj, key, value) {
    key = _toPropertyKey$9(key);
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
  var classnames$9 = {
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
        var classes = '';
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
          return arg;
        }
        if (_typeof$9(arg) !== 'object') {
          return '';
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          return arg.toString();
        }
        var classes = '';
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + ' ' + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames["default"] = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames$9);

  /**
   * @constant DEFAULT_OPTIONS_KEYS the default options keys
   */
  var DEFAULT_OPTIONS_KEYS$9 = {
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
  var slice$9 = Array.prototype.slice;
  /**
   * @function cloneArray
   *
   * @description
   * clone the array-like object and return the new array
   *
   * @param arrayLike the array-like object to clone
   * @returns the clone as an array
   */
  function cloneArray$9(arrayLike) {
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
    return slice$9.call(arrayLike, 0);
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
  function getCustomOptions$9(options) {
    var customOptions = {};
    /* eslint-disable no-restricted-syntax */
    for (var key in options) {
      if (!DEFAULT_OPTIONS_KEYS$9[key]) {
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
  function isMemoized$9(fn) {
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
  function isSameValueZero$9(object1, object2) {
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
  function mergeOptions$9(existingOptions, newOptions) {
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
  var Cache$9 = /** @class */function () {
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
      get: function get() {
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
      get: function get() {
        return {
          keys: cloneArray$9(this.keys),
          size: this.size,
          values: cloneArray$9(this.values)
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
  function createMemoizedFunction$9(fn, options) {
    if (options === void 0) {
      options = {};
    }
    if (isMemoized$9(fn)) {
      return createMemoizedFunction$9(fn.fn, mergeOptions$9(fn.options, options));
    }
    if (typeof fn !== 'function') {
      throw new TypeError('You must pass a function to `memoize`.');
    }
    var _a = options.isEqual,
      isEqual = _a === void 0 ? isSameValueZero$9 : _a,
      isMatchingKey = options.isMatchingKey,
      _b = options.isPromise,
      isPromise = _b === void 0 ? false : _b,
      _c = options.maxSize,
      maxSize = _c === void 0 ? 1 : _c,
      onCacheAdd = options.onCacheAdd,
      onCacheChange = options.onCacheChange,
      onCacheHit = options.onCacheHit,
      transformKey = options.transformKey;
    var normalizedOptions = mergeOptions$9({
      isEqual: isEqual,
      isMatchingKey: isMatchingKey,
      isPromise: isPromise,
      maxSize: maxSize,
      onCacheAdd: onCacheAdd,
      onCacheChange: onCacheChange,
      onCacheHit: onCacheHit,
      transformKey: transformKey
    }, getCustomOptions$9(options));
    var cache = new Cache$9(normalizedOptions);
    var keys = cache.keys,
      values = cache.values,
      canTransformKey = cache.canTransformKey,
      shouldCloneArguments = cache.shouldCloneArguments,
      shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
      shouldUpdateOnChange = cache.shouldUpdateOnChange,
      shouldUpdateOnHit = cache.shouldUpdateOnHit;
    var memoized = function memoized() {
      var key = shouldCloneArguments ? cloneArray$9(arguments) : arguments;
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
        var newKey = shouldCloneArguments ? key : cloneArray$9(arguments);
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
  var valueByIdentifier$9 = createMemoizedFunction$9(function () {
    var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var value = _objectSpread2$9({}, context);
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
    return valueByIdentifier$9(parts.join('.'), value[key]);
  });
  function ownKeys$8(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2$8(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$8(Object(t), !0).forEach(function (r) {
        _defineProperty$8(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive$8(t, r) {
    if ("object" != _typeof$8(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof$8(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey$8(t) {
    var i = _toPrimitive$8(t, "string");
    return "symbol" == _typeof$8(i) ? i : String(i);
  }
  function _typeof$7(o) {
    "@babel/helpers - typeof";

    return _typeof$7 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$7(o);
  }
  function _defineProperty$8(obj, key, value) {
    key = _toPropertyKey$8(key);
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
  var classnames$8 = {
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
        var classes = '';
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
          return arg;
        }
        if (_typeof$8(arg) !== 'object') {
          return '';
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          return arg.toString();
        }
        var classes = '';
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + ' ' + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames["default"] = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames$8);

  /**
   * @constant DEFAULT_OPTIONS_KEYS the default options keys
   */
  var DEFAULT_OPTIONS_KEYS$8 = {
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
  var slice$8 = Array.prototype.slice;
  /**
   * @function cloneArray
   *
   * @description
   * clone the array-like object and return the new array
   *
   * @param arrayLike the array-like object to clone
   * @returns the clone as an array
   */
  function cloneArray$8(arrayLike) {
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
    return slice$8.call(arrayLike, 0);
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
  function getCustomOptions$8(options) {
    var customOptions = {};
    /* eslint-disable no-restricted-syntax */
    for (var key in options) {
      if (!DEFAULT_OPTIONS_KEYS$8[key]) {
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
  function isMemoized$8(fn) {
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
  function isSameValueZero$8(object1, object2) {
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
  function mergeOptions$8(existingOptions, newOptions) {
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
  var Cache$8 = /** @class */function () {
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
      get: function get() {
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
      get: function get() {
        return {
          keys: cloneArray$8(this.keys),
          size: this.size,
          values: cloneArray$8(this.values)
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
  function createMemoizedFunction$8(fn, options) {
    if (options === void 0) {
      options = {};
    }
    if (isMemoized$8(fn)) {
      return createMemoizedFunction$8(fn.fn, mergeOptions$8(fn.options, options));
    }
    if (typeof fn !== 'function') {
      throw new TypeError('You must pass a function to `memoize`.');
    }
    var _a = options.isEqual,
      isEqual = _a === void 0 ? isSameValueZero$8 : _a,
      isMatchingKey = options.isMatchingKey,
      _b = options.isPromise,
      isPromise = _b === void 0 ? false : _b,
      _c = options.maxSize,
      maxSize = _c === void 0 ? 1 : _c,
      onCacheAdd = options.onCacheAdd,
      onCacheChange = options.onCacheChange,
      onCacheHit = options.onCacheHit,
      transformKey = options.transformKey;
    var normalizedOptions = mergeOptions$8({
      isEqual: isEqual,
      isMatchingKey: isMatchingKey,
      isPromise: isPromise,
      maxSize: maxSize,
      onCacheAdd: onCacheAdd,
      onCacheChange: onCacheChange,
      onCacheHit: onCacheHit,
      transformKey: transformKey
    }, getCustomOptions$8(options));
    var cache = new Cache$8(normalizedOptions);
    var keys = cache.keys,
      values = cache.values,
      canTransformKey = cache.canTransformKey,
      shouldCloneArguments = cache.shouldCloneArguments,
      shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
      shouldUpdateOnChange = cache.shouldUpdateOnChange,
      shouldUpdateOnHit = cache.shouldUpdateOnHit;
    var memoized = function memoized() {
      var key = shouldCloneArguments ? cloneArray$8(arguments) : arguments;
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
        var newKey = shouldCloneArguments ? key : cloneArray$8(arguments);
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
  var valueByIdentifier$8 = createMemoizedFunction$8(function () {
    var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var value = _objectSpread2$8({}, context);
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
    return valueByIdentifier$8(parts.join('.'), value[key]);
  });
  function ownKeys$7(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2$7(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$7(Object(t), !0).forEach(function (r) {
        _defineProperty$7(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive$7(t, r) {
    if ("object" != _typeof$7(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof$7(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey$7(t) {
    var i = _toPrimitive$7(t, "string");
    return "symbol" == _typeof$7(i) ? i : String(i);
  }
  function _typeof$6(o) {
    "@babel/helpers - typeof";

    return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$6(o);
  }
  function _defineProperty$7(obj, key, value) {
    key = _toPropertyKey$7(key);
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
  var classnames$7 = {
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
        var classes = '';
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
          return arg;
        }
        if (_typeof$7(arg) !== 'object') {
          return '';
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          return arg.toString();
        }
        var classes = '';
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + ' ' + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames["default"] = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames$7);

  /**
   * @constant DEFAULT_OPTIONS_KEYS the default options keys
   */
  var DEFAULT_OPTIONS_KEYS$7 = {
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
  var slice$7 = Array.prototype.slice;
  /**
   * @function cloneArray
   *
   * @description
   * clone the array-like object and return the new array
   *
   * @param arrayLike the array-like object to clone
   * @returns the clone as an array
   */
  function cloneArray$7(arrayLike) {
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
    return slice$7.call(arrayLike, 0);
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
  function getCustomOptions$7(options) {
    var customOptions = {};
    /* eslint-disable no-restricted-syntax */
    for (var key in options) {
      if (!DEFAULT_OPTIONS_KEYS$7[key]) {
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
  function isMemoized$7(fn) {
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
  function isSameValueZero$7(object1, object2) {
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
  function mergeOptions$7(existingOptions, newOptions) {
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
  var Cache$7 = /** @class */function () {
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
      get: function get() {
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
      get: function get() {
        return {
          keys: cloneArray$7(this.keys),
          size: this.size,
          values: cloneArray$7(this.values)
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
  function createMemoizedFunction$7(fn, options) {
    if (options === void 0) {
      options = {};
    }
    if (isMemoized$7(fn)) {
      return createMemoizedFunction$7(fn.fn, mergeOptions$7(fn.options, options));
    }
    if (typeof fn !== 'function') {
      throw new TypeError('You must pass a function to `memoize`.');
    }
    var _a = options.isEqual,
      isEqual = _a === void 0 ? isSameValueZero$7 : _a,
      isMatchingKey = options.isMatchingKey,
      _b = options.isPromise,
      isPromise = _b === void 0 ? false : _b,
      _c = options.maxSize,
      maxSize = _c === void 0 ? 1 : _c,
      onCacheAdd = options.onCacheAdd,
      onCacheChange = options.onCacheChange,
      onCacheHit = options.onCacheHit,
      transformKey = options.transformKey;
    var normalizedOptions = mergeOptions$7({
      isEqual: isEqual,
      isMatchingKey: isMatchingKey,
      isPromise: isPromise,
      maxSize: maxSize,
      onCacheAdd: onCacheAdd,
      onCacheChange: onCacheChange,
      onCacheHit: onCacheHit,
      transformKey: transformKey
    }, getCustomOptions$7(options));
    var cache = new Cache$7(normalizedOptions);
    var keys = cache.keys,
      values = cache.values,
      canTransformKey = cache.canTransformKey,
      shouldCloneArguments = cache.shouldCloneArguments,
      shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
      shouldUpdateOnChange = cache.shouldUpdateOnChange,
      shouldUpdateOnHit = cache.shouldUpdateOnHit;
    var memoized = function memoized() {
      var key = shouldCloneArguments ? cloneArray$7(arguments) : arguments;
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
        var newKey = shouldCloneArguments ? key : cloneArray$7(arguments);
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
  var valueByIdentifier$7 = createMemoizedFunction$7(function () {
    var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var value = _objectSpread2$7({}, context);
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
    return valueByIdentifier$7(parts.join('.'), value[key]);
  });
  function ownKeys$6(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2$6(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$6(Object(t), !0).forEach(function (r) {
        _defineProperty$6(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive$6(t, r) {
    if ("object" != _typeof$6(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof$6(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey$6(t) {
    var i = _toPrimitive$6(t, "string");
    return "symbol" == _typeof$6(i) ? i : String(i);
  }
  function _typeof$5(o) {
    "@babel/helpers - typeof";

    return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$5(o);
  }
  function _defineProperty$6(obj, key, value) {
    key = _toPropertyKey$6(key);
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
  var classnames$6 = {
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
        var classes = '';
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
          return arg;
        }
        if (_typeof$6(arg) !== 'object') {
          return '';
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          return arg.toString();
        }
        var classes = '';
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + ' ' + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames["default"] = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames$6);

  /**
   * @constant DEFAULT_OPTIONS_KEYS the default options keys
   */
  var DEFAULT_OPTIONS_KEYS$6 = {
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
  var slice$6 = Array.prototype.slice;
  /**
   * @function cloneArray
   *
   * @description
   * clone the array-like object and return the new array
   *
   * @param arrayLike the array-like object to clone
   * @returns the clone as an array
   */
  function cloneArray$6(arrayLike) {
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
    return slice$6.call(arrayLike, 0);
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
  function getCustomOptions$6(options) {
    var customOptions = {};
    /* eslint-disable no-restricted-syntax */
    for (var key in options) {
      if (!DEFAULT_OPTIONS_KEYS$6[key]) {
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
  function isMemoized$6(fn) {
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
  function isSameValueZero$6(object1, object2) {
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
  function mergeOptions$6(existingOptions, newOptions) {
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
  var Cache$6 = /** @class */function () {
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
      get: function get() {
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
      get: function get() {
        return {
          keys: cloneArray$6(this.keys),
          size: this.size,
          values: cloneArray$6(this.values)
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
  function createMemoizedFunction$6(fn, options) {
    if (options === void 0) {
      options = {};
    }
    if (isMemoized$6(fn)) {
      return createMemoizedFunction$6(fn.fn, mergeOptions$6(fn.options, options));
    }
    if (typeof fn !== 'function') {
      throw new TypeError('You must pass a function to `memoize`.');
    }
    var _a = options.isEqual,
      isEqual = _a === void 0 ? isSameValueZero$6 : _a,
      isMatchingKey = options.isMatchingKey,
      _b = options.isPromise,
      isPromise = _b === void 0 ? false : _b,
      _c = options.maxSize,
      maxSize = _c === void 0 ? 1 : _c,
      onCacheAdd = options.onCacheAdd,
      onCacheChange = options.onCacheChange,
      onCacheHit = options.onCacheHit,
      transformKey = options.transformKey;
    var normalizedOptions = mergeOptions$6({
      isEqual: isEqual,
      isMatchingKey: isMatchingKey,
      isPromise: isPromise,
      maxSize: maxSize,
      onCacheAdd: onCacheAdd,
      onCacheChange: onCacheChange,
      onCacheHit: onCacheHit,
      transformKey: transformKey
    }, getCustomOptions$6(options));
    var cache = new Cache$6(normalizedOptions);
    var keys = cache.keys,
      values = cache.values,
      canTransformKey = cache.canTransformKey,
      shouldCloneArguments = cache.shouldCloneArguments,
      shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
      shouldUpdateOnChange = cache.shouldUpdateOnChange,
      shouldUpdateOnHit = cache.shouldUpdateOnHit;
    var memoized = function memoized() {
      var key = shouldCloneArguments ? cloneArray$6(arguments) : arguments;
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
        var newKey = shouldCloneArguments ? key : cloneArray$6(arguments);
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
  var valueByIdentifier$6 = createMemoizedFunction$6(function () {
    var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var value = _objectSpread2$6({}, context);
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
    return valueByIdentifier$6(parts.join('.'), value[key]);
  });
  function ownKeys$5(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2$5(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$5(Object(t), !0).forEach(function (r) {
        _defineProperty$5(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive$5(t, r) {
    if ("object" != _typeof$5(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof$5(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey$5(t) {
    var i = _toPrimitive$5(t, "string");
    return "symbol" == _typeof$5(i) ? i : String(i);
  }
  function _typeof$4(o) {
    "@babel/helpers - typeof";

    return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$4(o);
  }
  function _defineProperty$5(obj, key, value) {
    key = _toPropertyKey$5(key);
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
  var classnames$5 = {
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
        var classes = '';
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
          return arg;
        }
        if (_typeof$5(arg) !== 'object') {
          return '';
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          return arg.toString();
        }
        var classes = '';
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + ' ' + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames["default"] = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames$5);

  /**
   * @constant DEFAULT_OPTIONS_KEYS the default options keys
   */
  var DEFAULT_OPTIONS_KEYS$5 = {
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
  var slice$5 = Array.prototype.slice;
  /**
   * @function cloneArray
   *
   * @description
   * clone the array-like object and return the new array
   *
   * @param arrayLike the array-like object to clone
   * @returns the clone as an array
   */
  function cloneArray$5(arrayLike) {
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
    return slice$5.call(arrayLike, 0);
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
  function getCustomOptions$5(options) {
    var customOptions = {};
    /* eslint-disable no-restricted-syntax */
    for (var key in options) {
      if (!DEFAULT_OPTIONS_KEYS$5[key]) {
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
  function isMemoized$5(fn) {
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
  function isSameValueZero$5(object1, object2) {
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
  function mergeOptions$5(existingOptions, newOptions) {
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
  var Cache$5 = /** @class */function () {
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
      get: function get() {
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
      get: function get() {
        return {
          keys: cloneArray$5(this.keys),
          size: this.size,
          values: cloneArray$5(this.values)
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
  function createMemoizedFunction$5(fn, options) {
    if (options === void 0) {
      options = {};
    }
    if (isMemoized$5(fn)) {
      return createMemoizedFunction$5(fn.fn, mergeOptions$5(fn.options, options));
    }
    if (typeof fn !== 'function') {
      throw new TypeError('You must pass a function to `memoize`.');
    }
    var _a = options.isEqual,
      isEqual = _a === void 0 ? isSameValueZero$5 : _a,
      isMatchingKey = options.isMatchingKey,
      _b = options.isPromise,
      isPromise = _b === void 0 ? false : _b,
      _c = options.maxSize,
      maxSize = _c === void 0 ? 1 : _c,
      onCacheAdd = options.onCacheAdd,
      onCacheChange = options.onCacheChange,
      onCacheHit = options.onCacheHit,
      transformKey = options.transformKey;
    var normalizedOptions = mergeOptions$5({
      isEqual: isEqual,
      isMatchingKey: isMatchingKey,
      isPromise: isPromise,
      maxSize: maxSize,
      onCacheAdd: onCacheAdd,
      onCacheChange: onCacheChange,
      onCacheHit: onCacheHit,
      transformKey: transformKey
    }, getCustomOptions$5(options));
    var cache = new Cache$5(normalizedOptions);
    var keys = cache.keys,
      values = cache.values,
      canTransformKey = cache.canTransformKey,
      shouldCloneArguments = cache.shouldCloneArguments,
      shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
      shouldUpdateOnChange = cache.shouldUpdateOnChange,
      shouldUpdateOnHit = cache.shouldUpdateOnHit;
    var memoized = function memoized() {
      var key = shouldCloneArguments ? cloneArray$5(arguments) : arguments;
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
        var newKey = shouldCloneArguments ? key : cloneArray$5(arguments);
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
  var valueByIdentifier$5 = createMemoizedFunction$5(function () {
    var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var value = _objectSpread2$5({}, context);
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
    return valueByIdentifier$5(parts.join('.'), value[key]);
  });
  function ownKeys$4(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2$4(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$4(Object(t), !0).forEach(function (r) {
        _defineProperty$4(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive$4(t, r) {
    if ("object" != _typeof$4(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof$4(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey$4(t) {
    var i = _toPrimitive$4(t, "string");
    return "symbol" == _typeof$4(i) ? i : String(i);
  }
  function _typeof$3(o) {
    "@babel/helpers - typeof";

    return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$3(o);
  }
  function _defineProperty$4(obj, key, value) {
    key = _toPropertyKey$4(key);
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
  var classnames$4 = {
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
        var classes = '';
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
          return arg;
        }
        if (_typeof$4(arg) !== 'object') {
          return '';
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          return arg.toString();
        }
        var classes = '';
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + ' ' + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames["default"] = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames$4);

  /**
   * @constant DEFAULT_OPTIONS_KEYS the default options keys
   */
  var DEFAULT_OPTIONS_KEYS$4 = {
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
  var slice$4 = Array.prototype.slice;
  /**
   * @function cloneArray
   *
   * @description
   * clone the array-like object and return the new array
   *
   * @param arrayLike the array-like object to clone
   * @returns the clone as an array
   */
  function cloneArray$4(arrayLike) {
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
    return slice$4.call(arrayLike, 0);
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
  function getCustomOptions$4(options) {
    var customOptions = {};
    /* eslint-disable no-restricted-syntax */
    for (var key in options) {
      if (!DEFAULT_OPTIONS_KEYS$4[key]) {
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
  function isMemoized$4(fn) {
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
  function isSameValueZero$4(object1, object2) {
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
  function mergeOptions$4(existingOptions, newOptions) {
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
  var Cache$4 = /** @class */function () {
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
      get: function get() {
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
      get: function get() {
        return {
          keys: cloneArray$4(this.keys),
          size: this.size,
          values: cloneArray$4(this.values)
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
  function createMemoizedFunction$4(fn, options) {
    if (options === void 0) {
      options = {};
    }
    if (isMemoized$4(fn)) {
      return createMemoizedFunction$4(fn.fn, mergeOptions$4(fn.options, options));
    }
    if (typeof fn !== 'function') {
      throw new TypeError('You must pass a function to `memoize`.');
    }
    var _a = options.isEqual,
      isEqual = _a === void 0 ? isSameValueZero$4 : _a,
      isMatchingKey = options.isMatchingKey,
      _b = options.isPromise,
      isPromise = _b === void 0 ? false : _b,
      _c = options.maxSize,
      maxSize = _c === void 0 ? 1 : _c,
      onCacheAdd = options.onCacheAdd,
      onCacheChange = options.onCacheChange,
      onCacheHit = options.onCacheHit,
      transformKey = options.transformKey;
    var normalizedOptions = mergeOptions$4({
      isEqual: isEqual,
      isMatchingKey: isMatchingKey,
      isPromise: isPromise,
      maxSize: maxSize,
      onCacheAdd: onCacheAdd,
      onCacheChange: onCacheChange,
      onCacheHit: onCacheHit,
      transformKey: transformKey
    }, getCustomOptions$4(options));
    var cache = new Cache$4(normalizedOptions);
    var keys = cache.keys,
      values = cache.values,
      canTransformKey = cache.canTransformKey,
      shouldCloneArguments = cache.shouldCloneArguments,
      shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
      shouldUpdateOnChange = cache.shouldUpdateOnChange,
      shouldUpdateOnHit = cache.shouldUpdateOnHit;
    var memoized = function memoized() {
      var key = shouldCloneArguments ? cloneArray$4(arguments) : arguments;
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
        var newKey = shouldCloneArguments ? key : cloneArray$4(arguments);
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
  var valueByIdentifier$4 = createMemoizedFunction$4(function () {
    var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var value = _objectSpread2$4({}, context);
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
    return valueByIdentifier$4(parts.join('.'), value[key]);
  });
  function ownKeys$3(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2$3(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$3(Object(t), !0).forEach(function (r) {
        _defineProperty$3(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive$3(t, r) {
    if ("object" != _typeof$3(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof$3(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey$3(t) {
    var i = _toPrimitive$3(t, "string");
    return "symbol" == _typeof$3(i) ? i : String(i);
  }
  function _typeof$2(o) {
    "@babel/helpers - typeof";

    return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$2(o);
  }
  function _defineProperty$3(obj, key, value) {
    key = _toPropertyKey$3(key);
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
  var classnames$3 = {
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
        var classes = '';
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
          return arg;
        }
        if (_typeof$3(arg) !== 'object') {
          return '';
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          return arg.toString();
        }
        var classes = '';
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + ' ' + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames["default"] = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames$3);

  /**
   * @constant DEFAULT_OPTIONS_KEYS the default options keys
   */
  var DEFAULT_OPTIONS_KEYS$3 = {
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
  var slice$3 = Array.prototype.slice;
  /**
   * @function cloneArray
   *
   * @description
   * clone the array-like object and return the new array
   *
   * @param arrayLike the array-like object to clone
   * @returns the clone as an array
   */
  function cloneArray$3(arrayLike) {
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
    return slice$3.call(arrayLike, 0);
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
  function getCustomOptions$3(options) {
    var customOptions = {};
    /* eslint-disable no-restricted-syntax */
    for (var key in options) {
      if (!DEFAULT_OPTIONS_KEYS$3[key]) {
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
  function isMemoized$3(fn) {
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
  function isSameValueZero$3(object1, object2) {
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
  function mergeOptions$3(existingOptions, newOptions) {
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
  var Cache$3 = /** @class */function () {
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
      get: function get() {
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
      get: function get() {
        return {
          keys: cloneArray$3(this.keys),
          size: this.size,
          values: cloneArray$3(this.values)
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
  function createMemoizedFunction$3(fn, options) {
    if (options === void 0) {
      options = {};
    }
    if (isMemoized$3(fn)) {
      return createMemoizedFunction$3(fn.fn, mergeOptions$3(fn.options, options));
    }
    if (typeof fn !== 'function') {
      throw new TypeError('You must pass a function to `memoize`.');
    }
    var _a = options.isEqual,
      isEqual = _a === void 0 ? isSameValueZero$3 : _a,
      isMatchingKey = options.isMatchingKey,
      _b = options.isPromise,
      isPromise = _b === void 0 ? false : _b,
      _c = options.maxSize,
      maxSize = _c === void 0 ? 1 : _c,
      onCacheAdd = options.onCacheAdd,
      onCacheChange = options.onCacheChange,
      onCacheHit = options.onCacheHit,
      transformKey = options.transformKey;
    var normalizedOptions = mergeOptions$3({
      isEqual: isEqual,
      isMatchingKey: isMatchingKey,
      isPromise: isPromise,
      maxSize: maxSize,
      onCacheAdd: onCacheAdd,
      onCacheChange: onCacheChange,
      onCacheHit: onCacheHit,
      transformKey: transformKey
    }, getCustomOptions$3(options));
    var cache = new Cache$3(normalizedOptions);
    var keys = cache.keys,
      values = cache.values,
      canTransformKey = cache.canTransformKey,
      shouldCloneArguments = cache.shouldCloneArguments,
      shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
      shouldUpdateOnChange = cache.shouldUpdateOnChange,
      shouldUpdateOnHit = cache.shouldUpdateOnHit;
    var memoized = function memoized() {
      var key = shouldCloneArguments ? cloneArray$3(arguments) : arguments;
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
        var newKey = shouldCloneArguments ? key : cloneArray$3(arguments);
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
  var valueByIdentifier$3 = createMemoizedFunction$3(function () {
    var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var value = _objectSpread2$3({}, context);
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
    return valueByIdentifier$3(parts.join('.'), value[key]);
  });
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
  function _toPrimitive$2(t, r) {
    if ("object" != _typeof$2(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof$2(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey$2(t) {
    var i = _toPrimitive$2(t, "string");
    return "symbol" == _typeof$2(i) ? i : String(i);
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
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
  var classnames$2 = {
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
        var classes = '';
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
          return arg;
        }
        if (_typeof$2(arg) !== 'object') {
          return '';
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          return arg.toString();
        }
        var classes = '';
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + ' ' + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames["default"] = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames$2);

  /**
   * @constant DEFAULT_OPTIONS_KEYS the default options keys
   */
  var DEFAULT_OPTIONS_KEYS$2 = {
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
  var slice$2 = Array.prototype.slice;
  /**
   * @function cloneArray
   *
   * @description
   * clone the array-like object and return the new array
   *
   * @param arrayLike the array-like object to clone
   * @returns the clone as an array
   */
  function cloneArray$2(arrayLike) {
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
    return slice$2.call(arrayLike, 0);
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
  function getCustomOptions$2(options) {
    var customOptions = {};
    /* eslint-disable no-restricted-syntax */
    for (var key in options) {
      if (!DEFAULT_OPTIONS_KEYS$2[key]) {
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
  function isMemoized$2(fn) {
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
  function isSameValueZero$2(object1, object2) {
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
  function mergeOptions$2(existingOptions, newOptions) {
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
  var Cache$2 = /** @class */function () {
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
      get: function get() {
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
      get: function get() {
        return {
          keys: cloneArray$2(this.keys),
          size: this.size,
          values: cloneArray$2(this.values)
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
  function createMemoizedFunction$2(fn, options) {
    if (options === void 0) {
      options = {};
    }
    if (isMemoized$2(fn)) {
      return createMemoizedFunction$2(fn.fn, mergeOptions$2(fn.options, options));
    }
    if (typeof fn !== 'function') {
      throw new TypeError('You must pass a function to `memoize`.');
    }
    var _a = options.isEqual,
      isEqual = _a === void 0 ? isSameValueZero$2 : _a,
      isMatchingKey = options.isMatchingKey,
      _b = options.isPromise,
      isPromise = _b === void 0 ? false : _b,
      _c = options.maxSize,
      maxSize = _c === void 0 ? 1 : _c,
      onCacheAdd = options.onCacheAdd,
      onCacheChange = options.onCacheChange,
      onCacheHit = options.onCacheHit,
      transformKey = options.transformKey;
    var normalizedOptions = mergeOptions$2({
      isEqual: isEqual,
      isMatchingKey: isMatchingKey,
      isPromise: isPromise,
      maxSize: maxSize,
      onCacheAdd: onCacheAdd,
      onCacheChange: onCacheChange,
      onCacheHit: onCacheHit,
      transformKey: transformKey
    }, getCustomOptions$2(options));
    var cache = new Cache$2(normalizedOptions);
    var keys = cache.keys,
      values = cache.values,
      canTransformKey = cache.canTransformKey,
      shouldCloneArguments = cache.shouldCloneArguments,
      shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
      shouldUpdateOnChange = cache.shouldUpdateOnChange,
      shouldUpdateOnHit = cache.shouldUpdateOnHit;
    var memoized = function memoized() {
      var key = shouldCloneArguments ? cloneArray$2(arguments) : arguments;
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
        var newKey = shouldCloneArguments ? key : cloneArray$2(arguments);
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
  var valueByIdentifier$2 = createMemoizedFunction$2(function () {
    var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var value = _objectSpread2$2({}, context);
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
    return valueByIdentifier$2(parts.join('.'), value[key]);
  });
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
  function _toPrimitive$1(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey$1(t) {
    var i = _toPrimitive$1(t, "string");
    return "symbol" == _typeof(i) ? i : String(i);
  }
  function _typeof$1(o) {
    "@babel/helpers - typeof";

    return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$1(o);
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
        var classes = '';
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
          return arg;
        }
        if (_typeof(arg) !== 'object') {
          return '';
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          return arg.toString();
        }
        var classes = '';
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + ' ' + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames["default"] = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames$1);

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
      get: function get() {
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
      get: function get() {
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
    var memoized = function memoized() {
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
  var valueByIdentifier$1 = createMemoizedFunction$1(function () {
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
    return valueByIdentifier$1(parts.join('.'), value[key]);
  });
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
  function _toPrimitive(t, r) {
    if ("object" != _typeof$1(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof$1(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof$1(i) ? i : String(i);
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
  var classnames$i = {
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
        var classes = '';
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
          return arg;
        }
        if (_typeof$1(arg) !== 'object') {
          return '';
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          return arg.toString();
        }
        var classes = '';
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + ' ' + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames["default"] = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames$i);

  /**
   * @constant DEFAULT_OPTIONS_KEYS the default options keys
   */
  var DEFAULT_OPTIONS_KEYS$i = {
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
  var slice$i = Array.prototype.slice;
  /**
   * @function cloneArray
   *
   * @description
   * clone the array-like object and return the new array
   *
   * @param arrayLike the array-like object to clone
   * @returns the clone as an array
   */
  function cloneArray$i(arrayLike) {
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
    return slice$i.call(arrayLike, 0);
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
  function getCustomOptions$i(options) {
    var customOptions = {};
    /* eslint-disable no-restricted-syntax */
    for (var key in options) {
      if (!DEFAULT_OPTIONS_KEYS$i[key]) {
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
  function isMemoized$i(fn) {
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
  function isSameValueZero$i(object1, object2) {
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
  function mergeOptions$i(existingOptions, newOptions) {
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
  var Cache$i = /** @class */function () {
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
      get: function get() {
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
      get: function get() {
        return {
          keys: cloneArray$i(this.keys),
          size: this.size,
          values: cloneArray$i(this.values)
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
  function createMemoizedFunction$i(fn, options) {
    if (options === void 0) {
      options = {};
    }
    if (isMemoized$i(fn)) {
      return createMemoizedFunction$i(fn.fn, mergeOptions$i(fn.options, options));
    }
    if (typeof fn !== 'function') {
      throw new TypeError('You must pass a function to `memoize`.');
    }
    var _a = options.isEqual,
      isEqual = _a === void 0 ? isSameValueZero$i : _a,
      isMatchingKey = options.isMatchingKey,
      _b = options.isPromise,
      isPromise = _b === void 0 ? false : _b,
      _c = options.maxSize,
      maxSize = _c === void 0 ? 1 : _c,
      onCacheAdd = options.onCacheAdd,
      onCacheChange = options.onCacheChange,
      onCacheHit = options.onCacheHit,
      transformKey = options.transformKey;
    var normalizedOptions = mergeOptions$i({
      isEqual: isEqual,
      isMatchingKey: isMatchingKey,
      isPromise: isPromise,
      maxSize: maxSize,
      onCacheAdd: onCacheAdd,
      onCacheChange: onCacheChange,
      onCacheHit: onCacheHit,
      transformKey: transformKey
    }, getCustomOptions$i(options));
    var cache = new Cache$i(normalizedOptions);
    var keys = cache.keys,
      values = cache.values,
      canTransformKey = cache.canTransformKey,
      shouldCloneArguments = cache.shouldCloneArguments,
      shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
      shouldUpdateOnChange = cache.shouldUpdateOnChange,
      shouldUpdateOnHit = cache.shouldUpdateOnHit;
    var memoized = function memoized() {
      var key = shouldCloneArguments ? cloneArray$i(arguments) : arguments;
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
        var newKey = shouldCloneArguments ? key : cloneArray$i(arguments);
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
  var valueByIdentifier = createMemoizedFunction$i(function () {
    var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var value = _objectSpread2({}, context);
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
  function normalizeComponentList(componentList) {
    var defaultComponent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (isObject(componentList)) {
      return [componentList];
    }
    if (isArray(componentList) && componentList.length > 0) {
      return componentList;
    }
    return [defaultComponent];
  }
  var EXCLUDED_ATTRIBUTES = ["saveAs"];
  function styles() {
    var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _styles = structuredClone(styles);
    if (typeof _styles === "string") {
      _styles = convertStyleStringToObject(_styles);
    }
    if (_typeof$g(_styles) !== "object") {
      return {};
    }
    return Object.fromEntries(Object.entries(_styles).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        property = _ref2[0],
        value = _ref2[1];
      return [replaceTokens(property, context), replaceTokens(value, context)];
    }));
  }
  var _excluded$10 = ["children", "className", "editorClassName", "viewClassName", "style", "attributeName", "type", "tagName", "persist"],
    _excluded2$6 = ["jsx"];

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
        return [name, replaceTokens(value, _objectSpread2$h(_objectSpread2$h({}, context), {}, {
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
    var jsxClassNames = classNames$1([].concat(_toConsumableArray(Array.isArray(className) && className || [className]), _toConsumableArray((context === null || context === void 0 ? void 0 : context.context) === 'edit' && (Array.isArray(editorClassName) && editorClassName || [editorClassName]) || []), _toConsumableArray((context === null || context === void 0 ? void 0 : context.context) === 'save' && (Array.isArray(viewClassName) && viewClassName || [viewClassName]) || [])), _objectSpread2$h(_objectSpread2$h({}, context), {}, {
      attribute: {
        value: attributeValue
      }
    }));
    if (jsxClassNames) {
      jsxAttributes.className = jsxClassNames;
    }
    var jsxStyles = styles(style, _objectSpread2$h(_objectSpread2$h({}, context), {}, {
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
          setAttributes(_defineProperty$h({}, attributeName, value), persist);
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
      blockProps = _objectWithoutProperties(_ref5, _excluded2$6);
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
        callback.apply(void 0, _toConsumableArray(callbackArgs));
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
    var _useSelect = wp.data.useSelect(function (select) {
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
    var _useSelect = wp.data.useSelect(function (select) {
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
  	    var classes = '';
  	    for (var i = 0; i < arguments.length; i++) {
  	      var arg = arguments[i];
  	      if (arg) {
  	        classes = appendClass(classes, parseValue(arg));
  	      }
  	    }
  	    return classes;
  	  }
  	  function parseValue(arg) {
  	    if (typeof arg === 'string' || typeof arg === 'number') {
  	      return arg;
  	    }
  	    if (typeof arg !== 'object') {
  	      return '';
  	    }
  	    if (Array.isArray(arg)) {
  	      return classNames.apply(null, arg);
  	    }
  	    if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
  	      return arg.toString();
  	    }
  	    var classes = '';
  	    for (var key in arg) {
  	      if (hasOwn.call(arg, key) && arg[key]) {
  	        classes = appendClass(classes, key);
  	      }
  	    }
  	    return classes;
  	  }
  	  function appendClass(value, newClass) {
  	    if (!newClass) {
  	      return value;
  	    }
  	    if (value) {
  	      return value + ' ' + newClass;
  	    }
  	    return value + newClass;
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
    _excluded2$5 = ["icon", "subscript", "label"];
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
        option = _objectWithoutProperties$1(_ref2, _excluded2$5);
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
  var selfClosingTagNames$1 = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"];
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
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? "" : _ref$label,
      _ref$tagName = _ref.tagName,
      tagName = _ref$tagName === void 0 ? "div" : _ref$tagName;
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
    var Component = tagName || "div";
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

  var _excluded$Z = ["attributes", "blockName", "attributeName", "label", "children", "clientId", "innerHtml", "className", "tagName", "type", "display"];
  var selfClosingTagNames = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"];
  function save$t(_ref) {
    _ref.attributes;
      _ref.blockName;
      _ref.attributeName;
      _ref.label;
      var _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children;
      _ref.clientId;
      _ref.innerHtml;
      var _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$tagName = _ref.tagName,
      tagName = _ref$tagName === void 0 ? "div" : _ref$tagName;
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
    if (tagName === "a" && "href" in fieldProps && !("rel" in fieldProps) && (isExternalUrl(fieldProps.href) || isFragmentUrl(fieldProps.href) || "target" in fieldProps)) {
      fieldProps.rel = "noopener";
    }
    console.log("props:", fieldProps);
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
      style: _objectSpread2$i(_objectSpread2$i({}, elStyle$2), show === true && elShowStyle)
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
      style: _objectSpread2$i(_objectSpread2$i({}, elStyle$1), size === 'small' && elSmallStyle),
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
      style: _objectSpread2$i(_objectSpread2$i({}, toggleSizeStyle), toggleFalsePositionStyle)
    }), /*#__PURE__*/React.createElement("div", {
      style: _objectSpread2$i(_objectSpread2$i({}, toggleSizeStyle), toggleTruePositionStyle)
    }), /*#__PURE__*/React.createElement("div", {
      style: _objectSpread2$i(_objectSpread2$i(_objectSpread2$i(_objectSpread2$i(_objectSpread2$i({}, toggleStyle$1), toggleSizeStyle), value === true && toggleTrueStyle), value === true && toggleTruePositionStyle), value === false && toggleFalsePositionStyle)
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
    _excluded2$4 = ["id", "height", "subtype", "type", "url", "width"];
  var divStyle = {
    position: "relative",
    width: "fit-content"
  };
  var imgStyle$1 = {
    display: "block"
  };
  var optionsStyle$1 = {
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.5)",
    bottom: "0",
    display: "flex",
    left: "0",
    justifyContent: "center",
    opacity: "0",
    position: "absolute",
    right: "0",
    top: "0",
    transition: "opacity 0.4s"
  };
  var optionsHoverStyle$1 = {
    opacity: "1"
  };
  var optionsDivStyle$1 = {
    alignItems: "center",
    background: "#fff",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    padding: "4px"
  };
  var optionsButtonStyle$1 = {
    height: "32px",
    borderRadius: "4px",
    justifyContent: "center",
    width: "32px"
  };
  var optionsButtonHoverStyle$1 = {
    background: "#eee"
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
        subtype = _ref2.subtype,
        type = _ref2.type,
        url = _ref2.url,
        width = _ref2.width;
        _objectWithoutProperties$1(_ref2, _excluded2$4);
      onInput({
        id: id,
        height: height,
        width: width,
        subtype: subtype,
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
      allowedTypes: ["image"],
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
      style: _objectSpread2$i(_objectSpread2$i({}, optionsStyle$1), hasHover === true && optionsHoverStyle$1)
    }, /*#__PURE__*/React.createElement("div", {
      style: optionsDivStyle$1
    }, /*#__PURE__*/React.createElement(wp.blockEditor.MediaUpload, {
      allowedTypes: ["image"],
      gallery: false,
      multiple: false,
      onSelect: onSelect,
      value: (value === null || value === void 0 ? void 0 : value.id) || null,
      render: function render(_ref3) {
        var open = _ref3.open;
        return /*#__PURE__*/React.createElement(wp.components.Button, {
          label: wp.i18n.__("Edit ".concat(label || "Image")),
          onClick: open,
          icon: /*#__PURE__*/React.createElement("span", {
            className: "dashicons dashicons-edit"
          }),
          style: _objectSpread2$i(_objectSpread2$i({}, optionsButtonStyle$1), optionHover === "edit" && optionsButtonHoverStyle$1),
          onMouseEnter: function onMouseEnter() {
            return setOptionHover("edit");
          },
          onMouseLeave: function onMouseLeave() {
            return setOptionHover(null);
          }
        });
      }
    }), /*#__PURE__*/React.createElement(wp.components.Button, {
      label: wp.i18n.__("Remove ".concat(label || "Image")),
      icon: /*#__PURE__*/React.createElement("span", {
        className: "dashicons dashicons-trash"
      }),
      onClick: onRemove,
      style: _objectSpread2$i(_objectSpread2$i({}, optionsButtonStyle$1), optionHover === "remove" && optionsButtonHoverStyle$1),
      onMouseEnter: function onMouseEnter() {
        return setOptionHover("remove");
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
      var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$D);
    var _ref2 = value || {},
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? null : _ref2$height,
      _ref2$url = _ref2.url,
      url = _ref2$url === void 0 ? null : _ref2$url,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? null : _ref2$width;
    var fieldProps = {};
    var fieldStyle = {};
    if (height && width) {
      fieldProps.height = height;
      fieldProps.width = width;
      fieldStyle["aspect-ratio"] = "".concat((props === null || props === void 0 ? void 0 : props.width) || width, " / ").concat((props === null || props === void 0 ? void 0 : props.height) || height);
      fieldStyle.height = "auto";
    }
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, fieldProps, props, {
      src: url,
      style: _objectSpread2$i(_objectSpread2$i({}, fieldStyle), styles(props === null || props === void 0 ? void 0 : props.style)),
      tagName: "img",
      type: "image"
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
    return classNames(_defineProperty$i({}, "block:".concat(name), name === null || name === void 0 ? void 0 : name.length), _defineProperty$i({}, "".concat(blockName, ":").concat(name), name === null || name === void 0 ? void 0 : name.length), 'blueprint-blocks:component', 'blueprint-blocks:field', "blueprint-blocks:".concat(type, "-field"), {
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
      tagName = _ref$tagName === void 0 ? "p" : _ref$tagName,
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
    var _allowedFormats = wp.element.useMemo(function () {
      if (typeof allowedFormats === "string") {
        return allowedFormats.split(",").map(function (format) {
          return format.trim();
        });
      }
      return allowedFormats;
    }, [allowedFormats]);
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
      allowedFormats: _allowedFormats,
      keepPlaceholderOnFocus: true,
      placeholder: placeholder,
      value: value
    }));
  }

  var _excluded$x = ["allowedFormats", "multiline", "preserveWhiteSpace", "placeholder", "tagName", "value"];
  function save$f(_ref) {
    _ref.allowedFormats;
      _ref.multiline;
      _ref.preserveWhiteSpace;
      _ref.placeholder;
      var _ref$tagName = _ref.tagName,
      tagName = _ref$tagName === void 0 ? "p" : _ref$tagName,
      value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$x);
    if (value === "" || value === null) {
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
      style: _objectSpread2$i(_objectSpread2$i({}, elStyle), style),
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

  var _excluded$v = ["allowedFormats", "onInput", "placeholder", "value"];
  var wrapStyle$1 = {
    position: "relative"
  };
  var propertiesStyle = {
    alignItems: "center",
    display: "grid",
    gridGap: "8px",
    gridTemplateColumns: "1fr 12px 34px",
    rowGap: "4px"
  };
  var propertiesAfterStyle = {
    background: "gray",
    content: "",
    display: "block",
    height: "2px",
    gridColumn: "1 / span 3"
  };
  var urlInputStyle = {
    border: "0",
    color: "black",
    display: "block",
    fontSize: "12px !important",
    height: "32px !important",
    lineHeight: "32px !important",
    padding: "0",
    textAlign: "inherit",
    transition: "none",
    width: "100% !important"
  };
  var ALLOWED_FORMATS = ["core/bold", "core/italic", "core/strikethrough", "core/subscript", "core/superscript", "core/text-color", "core/underline"];
  function edit$f(_ref) {
    var _ref$allowedFormats = _ref.allowedFormats,
      allowedFormats = _ref$allowedFormats === void 0 ? null : _ref$allowedFormats,
      _onInput = _ref.onInput,
      placeholder = _ref.placeholder,
      value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$v);
    var ref = wp.element.createRef();
    var _ref2 = value || {},
      _ref2$href = _ref2.href,
      href = _ref2$href === void 0 ? "" : _ref2$href,
      _ref2$target = _ref2.target,
      target = _ref2$target === void 0 ? "" : _ref2$target,
      _ref2$label = _ref2.label,
      label = _ref2$label === void 0 ? "" : _ref2$label;
    var _allowedFormats = wp.element.useMemo(function () {
      var _allowedFormats = structuredClone(allowedFormats);
      if (typeof _allowedFormats === "string") {
        _allowedFormats = _allowedFormats.split(",").map(function (format) {
          return format.trim();
        });
      }
      if (!Array.isArray(_allowedFormats)) {
        return ALLOWED_FORMATS;
      }
      return _allowedFormats.filter(function (format) {
        return ALLOWED_FORMATS.includes(format);
      });
    }, [allowedFormats]);
    return /*#__PURE__*/React.createElement(Field.edit, _extends$1({}, props, {
      tagName: "a",
      type: "link",
      value: value
    }), /*#__PURE__*/React.createElement("div", {
      style: wrapStyle$1
    }, /*#__PURE__*/React.createElement(RichTextField.edit, {
      tagName: "span",
      placeholder: placeholder,
      allowedFormats: _allowedFormats,
      value: label,
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
      label: wp.i18n.__("Edit Link Properties"),
      style: {
        marginLeft: "4px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: propertiesStyle
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      onBlur: function onBlur() {
        var _ref$current;
        return ref === null || ref === void 0 || (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.reportValidity();
      },
      onChange: function onChange(_ref3) {
        var target = _ref3.target;
        return _onInput(Object.assign({}, value, {
          href: target.value
        }));
      },
      placeholder: "https://",
      value: href,
      ref: ref,
      style: urlInputStyle
    }), /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: upRightFromSquare
      }
    }), /*#__PURE__*/React.createElement(BooleanField.edit, {
      options: [{
        label: "Same Window",
        value: "_self"
      }, {
        label: "New Window",
        value: "_blank"
      }],
      tooltip: "Open in new window?",
      tooltipPosition: "left",
      size: "small",
      value: target === "_blank",
      onInput: function onInput(newWindow) {
        return _onInput(Object.assign({}, value, {
          target: newWindow && "_blank" || "_self"
        }));
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: propertiesAfterStyle
    })))));
  }

  var _excluded$u = ["allowedFormats", "placeholder", "value"];
  function save$e(_ref) {
    _ref.allowedFormats;
      _ref.placeholder;
      var value = _ref.value,
      props = _objectWithoutProperties$1(_ref, _excluded$u);
    var _ref2 = value || {},
      _ref2$href = _ref2.href,
      href = _ref2$href === void 0 ? "" : _ref2$href,
      _ref2$target = _ref2.target,
      target = _ref2$target === void 0 ? "" : _ref2$target,
      _ref2$label = _ref2.label,
      label = _ref2$label === void 0 ? "" : _ref2$label;
    return /*#__PURE__*/React.createElement(Field.save, _extends$1({}, props, target === "_blank" && {
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
          return _onInput(_objectSpread2$i(_objectSpread2$i({}, value), {}, _defineProperty$i({}, definition, newValue)));
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
    _excluded2$3 = ["id", "height", "subtype", "type", "url", "width"],
    _excluded3$1 = ["id", "height", "subtype", "type", "url", "width"];
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
        subtype = _ref2.subtype,
        type = _ref2.type,
        url = _ref2.url,
        width = _ref2.width;
        _objectWithoutProperties$1(_ref2, _excluded2$3);
      onInput([{
        id: id,
        height: height,
        width: width,
        subtype: subtype,
        type: type,
        url: url
      }]);
    };
    var selectMultiple = function selectMultiple(items) {
      onInput(Object.values(items).map(function (_ref3) {
        var id = _ref3.id,
          height = _ref3.height,
          subtype = _ref3.subtype,
          type = _ref3.type,
          url = _ref3.url,
          width = _ref3.width;
          _objectWithoutProperties$1(_ref3, _excluded3$1);
        return {
          id: id,
          height: height,
          width: width,
          subtype: subtype,
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
        style: _objectSpread2$i(_objectSpread2$i({}, optionsStyle), itemHoverIndex === index && optionsHoverStyle)
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
            style: _objectSpread2$i(_objectSpread2$i({}, optionsButtonStyle), optionHover === 'edit' && optionsButtonHoverStyle),
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
        style: _objectSpread2$i(_objectSpread2$i({}, optionsButtonStyle), optionHover === 'remove' && optionsButtonHoverStyle),
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
          return _onInput(_objectSpread2$i(_objectSpread2$i({}, value), {}, _defineProperty$i({}, definition, newValue)));
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
      className: classNames('blueprint-blocks:position-field-wrap', _defineProperty$i({
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
    }), rowCount > 0 && _toConsumableArray$1(Array(rowCount).keys()).map(function (index) {
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
            var newValue = _toConsumableArray$1(Array(rowCount).keys()).map(function (index) {
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
        _onInput([].concat(_toConsumableArray$1(value), [{}]));
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
    }), rowCount > 0 && _toConsumableArray$1(Array(rowCount).keys()).map(function (index) {
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
    _excluded2$2 = ["icon", "image", "label"];
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
      var newValue = _toConsumableArray$1(value);
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
        option = _objectWithoutProperties$1(_ref3, _excluded2$2);
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
        style: _objectSpread2$i(_objectSpread2$i(_objectSpread2$i(_objectSpread2$i(_objectSpread2$i({}, itemDivStyle), hasImages && itemDivHasImagesStyle), index === hoverIndex && itemDivHoverStyle), index === focusIndex && itemDivFocusStyle), (value === null || value === void 0 ? void 0 : value.indexOf(option === null || option === void 0 ? void 0 : option.value)) !== -1 && itemDivActiveStyle)
      }, !!image && /*#__PURE__*/React.createElement("div", {
        style: imageDivStyle
      }, /*#__PURE__*/React.createElement("div", {
        style: imageBeforeStyle
      }), /*#__PURE__*/React.createElement("img", {
        src: image,
        style: imageStyle
      })), !!icon && !image && /*#__PURE__*/React.createElement("i", {
        className: icon,
        style: _objectSpread2$i(_objectSpread2$i({}, iconStyle), hasImages && iconHasImagesStyle)
      }), (!icon || hasImages) && /*#__PURE__*/React.createElement("span", {
        style: _objectSpread2$i(_objectSpread2$i({}, labelStyle), hasImages && labelHasImagesStyle)
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
    _excluded2$1 = ["children", "tagName", "type"],
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
  wp.hooks.addFilter("blocks.registerBlockType", "blueprint-blocks/default-attributes", function (settings, name) {
    if (settings !== null && settings !== void 0 && settings.attributes && _typeof$h(settings === null || settings === void 0 ? void 0 : settings.attributes) === "object") {
      settings.attributes["_index"] = {
        type: "number",
        "default": 0
      };
      settings.attributes["_innerBlocksLength"] = {
        type: "number",
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
      var blockName = blockProps["data-type"];
      var blockContext = getBlockContext({
        context: "edit",
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
        tagName = _ref3$tagName === void 0 ? "div" : _ref3$tagName;
        _ref3.type;
        var blockEdit = _objectWithoutProperties$1(_ref3, _excluded2$1);
      var blockAttributes = Object.fromEntries(Object.entries(blockEdit).map(function (_ref4) {
        var _ref5 = _slicedToArray$1(_ref4, 2),
          name = _ref5[0],
          value = _ref5[1];
        if (typeof value === "string") {
          return [name, replaceTokens(value, blockContext)];
        } else {
          return [name, value];
        }
      }));
      var blockClassNames = classNames$1([].concat(_toConsumableArray$1(Array.isArray(blockProps.className) && blockProps.className || [blockProps.className]), _toConsumableArray$1(Array.isArray(blockEdit.className) && blockEdit.className || [blockEdit.className]), _toConsumableArray$1(Array.isArray(blockEdit.editorClassName) && blockEdit.editorClassName || [blockEdit.editorClassName])), blockContext);
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

  var _excluded = ["attributes", "innerBlocks"],
    _excluded2 = ["children", "tagName", "type"];
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
        innerBlocks = _ref2.innerBlocks,
        props = _objectWithoutProperties$1(_ref2, _excluded);
      var blockProps = wp.blockEditor.useBlockProps.save();
      var blockName = blockProps.className;
      var blockContext = getBlockContext({
        context: "save",
        attributes: attributes,
        innerBlocks: innerBlocks
      });
      var _blockEdit = normalizeComponentList(blueprint === null || blueprint === void 0 ? void 0 : blueprint.blockEdit);
      var _blockSave = normalizeComponentList(blueprint === null || blueprint === void 0 ? void 0 : blueprint.blockSave, _blockEdit[0]);
      var _ref3 = (_blockSave === null || _blockSave === void 0 ? void 0 : _blockSave[0]) || {},
        _ref3$children = _ref3.children,
        children = _ref3$children === void 0 ? [] : _ref3$children,
        _ref3$tagName = _ref3.tagName,
        tagName = _ref3$tagName === void 0 ? "div" : _ref3$tagName;
        _ref3.type;
        var blockSave = _objectWithoutProperties$1(_ref3, _excluded2);
      console.log(children, tagName, blockSave, attributes, props, blockContext);
      var blockAttributes = Object.fromEntries(Object.entries(blockSave).map(function (_ref4) {
        var _ref5 = _slicedToArray$1(_ref4, 2),
          name = _ref5[0],
          value = _ref5[1];
        if (typeof value === "string") {
          return [name, replaceTokens(value, blockContext)];
        } else {
          return [name, value];
        }
      }));
      var blockClassNames = classNames$1([].concat(_toConsumableArray$1(Array.isArray(blockProps.className) && blockProps.className || [blockProps.className]), _toConsumableArray$1(Array.isArray(blockSave.className) && blockSave.className || [blockSave.className]), _toConsumableArray$1(Array.isArray(blockSave.viewClassName) && blockSave.viewClassName || [blockSave.viewClassName])), blockContext);
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
  const { blockTypes = [] } = blueprintBlocksLoaderSettings || {};

  blockTypes.forEach(({ blockBlueprint, blockJson, blockName }) => {
  	console.log(blockName, blockBlueprint);
  	blocks.registerBlockType(blockName, {
  		...(blockJson || {}),

  		edit: BlockEdit(blockBlueprint || null),

  		save: BlockSave(blockBlueprint || null),
  	});
  });

})(wp.blocks);
