(function (require$$0$1, require$$0, blockEditor) {
  'use strict';

  var client = {};

  var m = require$$0;
  {
    var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    client.createRoot = function (c, o) {
      i.usingClientEntryPoint = true;
      try {
        return m.createRoot(c, o);
      } finally {
        i.usingClientEntryPoint = false;
      }
    };
    client.hydrateRoot = function (c, h, o) {
      i.usingClientEntryPoint = true;
      try {
        return m.hydrateRoot(c, h, o);
      } finally {
        i.usingClientEntryPoint = false;
      }
    };
  }

  var jsxRuntime = {exports: {}};

  var reactJsxRuntime_development = {};

  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var hasRequiredReactJsxRuntime_development;

  function requireReactJsxRuntime_development () {
  	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
  	hasRequiredReactJsxRuntime_development = 1;

  	{
  	  (function () {

  	    var React = require$$0$1;

  	    // ATTENTION
  	    // When adding new symbols to this file,
  	    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
  	    // The Symbol used to tag the ReactElement-like types.
  	    var REACT_ELEMENT_TYPE = Symbol.for('react.element');
  	    var REACT_PORTAL_TYPE = Symbol.for('react.portal');
  	    var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
  	    var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
  	    var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
  	    var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
  	    var REACT_CONTEXT_TYPE = Symbol.for('react.context');
  	    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
  	    var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
  	    var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
  	    var REACT_MEMO_TYPE = Symbol.for('react.memo');
  	    var REACT_LAZY_TYPE = Symbol.for('react.lazy');
  	    var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
  	    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
  	    var FAUX_ITERATOR_SYMBOL = '@@iterator';
  	    function getIteratorFn(maybeIterable) {
  	      if (maybeIterable === null || typeof maybeIterable !== 'object') {
  	        return null;
  	      }
  	      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  	      if (typeof maybeIterator === 'function') {
  	        return maybeIterator;
  	      }
  	      return null;
  	    }
  	    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  	    function error(format) {
  	      {
  	        {
  	          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
  	            args[_key2 - 1] = arguments[_key2];
  	          }
  	          printWarning('error', format, args);
  	        }
  	      }
  	    }
  	    function printWarning(level, format, args) {
  	      // When changing this logic, you might want to also
  	      // update consoleWithStackDev.www.js as well.
  	      {
  	        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
  	        var stack = ReactDebugCurrentFrame.getStackAddendum();
  	        if (stack !== '') {
  	          format += '%s';
  	          args = args.concat([stack]);
  	        } // eslint-disable-next-line react-internal/safe-string-coercion

  	        var argsWithFormat = args.map(function (item) {
  	          return String(item);
  	        }); // Careful: RN currently depends on this prefix

  	        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
  	        // breaks IE9: https://github.com/facebook/react/issues/13610
  	        // eslint-disable-next-line react-internal/no-production-logging

  	        Function.prototype.apply.call(console[level], console, argsWithFormat);
  	      }
  	    }

  	    // -----------------------------------------------------------------------------

  	    var enableScopeAPI = false; // Experimental Create Event Handle API.
  	    var enableCacheElement = false;
  	    var enableTransitionTracing = false; // No known bugs, but needs performance testing

  	    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
  	    // stuff. Intended to enable React core members to more easily debug scheduling
  	    // issues in DEV builds.

  	    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

  	    var REACT_MODULE_REFERENCE;
  	    {
  	      REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
  	    }
  	    function isValidElementType(type) {
  	      if (typeof type === 'string' || typeof type === 'function') {
  	        return true;
  	      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

  	      if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
  	        return true;
  	      }
  	      if (typeof type === 'object' && type !== null) {
  	        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE ||
  	        // This needs to include all possible module reference object
  	        // types supported by any Flight configuration anywhere since
  	        // we don't know which Flight build this will end up being used
  	        // with.
  	        type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
  	          return true;
  	        }
  	      }
  	      return false;
  	    }
  	    function getWrappedName(outerType, innerType, wrapperName) {
  	      var displayName = outerType.displayName;
  	      if (displayName) {
  	        return displayName;
  	      }
  	      var functionName = innerType.displayName || innerType.name || '';
  	      return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
  	    } // Keep in sync with react-reconciler/getComponentNameFromFiber

  	    function getContextName(type) {
  	      return type.displayName || 'Context';
  	    } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.

  	    function getComponentNameFromType(type) {
  	      if (type == null) {
  	        // Host root, text node or just invalid type.
  	        return null;
  	      }
  	      {
  	        if (typeof type.tag === 'number') {
  	          error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
  	        }
  	      }
  	      if (typeof type === 'function') {
  	        return type.displayName || type.name || null;
  	      }
  	      if (typeof type === 'string') {
  	        return type;
  	      }
  	      switch (type) {
  	        case REACT_FRAGMENT_TYPE:
  	          return 'Fragment';
  	        case REACT_PORTAL_TYPE:
  	          return 'Portal';
  	        case REACT_PROFILER_TYPE:
  	          return 'Profiler';
  	        case REACT_STRICT_MODE_TYPE:
  	          return 'StrictMode';
  	        case REACT_SUSPENSE_TYPE:
  	          return 'Suspense';
  	        case REACT_SUSPENSE_LIST_TYPE:
  	          return 'SuspenseList';
  	      }
  	      if (typeof type === 'object') {
  	        switch (type.$$typeof) {
  	          case REACT_CONTEXT_TYPE:
  	            var context = type;
  	            return getContextName(context) + '.Consumer';
  	          case REACT_PROVIDER_TYPE:
  	            var provider = type;
  	            return getContextName(provider._context) + '.Provider';
  	          case REACT_FORWARD_REF_TYPE:
  	            return getWrappedName(type, type.render, 'ForwardRef');
  	          case REACT_MEMO_TYPE:
  	            var outerName = type.displayName || null;
  	            if (outerName !== null) {
  	              return outerName;
  	            }
  	            return getComponentNameFromType(type.type) || 'Memo';
  	          case REACT_LAZY_TYPE:
  	            {
  	              var lazyComponent = type;
  	              var payload = lazyComponent._payload;
  	              var init = lazyComponent._init;
  	              try {
  	                return getComponentNameFromType(init(payload));
  	              } catch (x) {
  	                return null;
  	              }
  	            }

  	          // eslint-disable-next-line no-fallthrough
  	        }
  	      }
  	      return null;
  	    }
  	    var assign = Object.assign;

  	    // Helpers to patch console.logs to avoid logging during side-effect free
  	    // replaying on render function. This currently only patches the object
  	    // lazily which won't cover if the log function was extracted eagerly.
  	    // We could also eagerly patch the method.
  	    var disabledDepth = 0;
  	    var prevLog;
  	    var prevInfo;
  	    var prevWarn;
  	    var prevError;
  	    var prevGroup;
  	    var prevGroupCollapsed;
  	    var prevGroupEnd;
  	    function disabledLog() {}
  	    disabledLog.__reactDisabledLog = true;
  	    function disableLogs() {
  	      {
  	        if (disabledDepth === 0) {
  	          /* eslint-disable react-internal/no-production-logging */
  	          prevLog = console.log;
  	          prevInfo = console.info;
  	          prevWarn = console.warn;
  	          prevError = console.error;
  	          prevGroup = console.group;
  	          prevGroupCollapsed = console.groupCollapsed;
  	          prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

  	          var props = {
  	            configurable: true,
  	            enumerable: true,
  	            value: disabledLog,
  	            writable: true
  	          }; // $FlowFixMe Flow thinks console is immutable.

  	          Object.defineProperties(console, {
  	            info: props,
  	            log: props,
  	            warn: props,
  	            error: props,
  	            group: props,
  	            groupCollapsed: props,
  	            groupEnd: props
  	          });
  	          /* eslint-enable react-internal/no-production-logging */
  	        }
  	        disabledDepth++;
  	      }
  	    }
  	    function reenableLogs() {
  	      {
  	        disabledDepth--;
  	        if (disabledDepth === 0) {
  	          /* eslint-disable react-internal/no-production-logging */
  	          var props = {
  	            configurable: true,
  	            enumerable: true,
  	            writable: true
  	          }; // $FlowFixMe Flow thinks console is immutable.

  	          Object.defineProperties(console, {
  	            log: assign({}, props, {
  	              value: prevLog
  	            }),
  	            info: assign({}, props, {
  	              value: prevInfo
  	            }),
  	            warn: assign({}, props, {
  	              value: prevWarn
  	            }),
  	            error: assign({}, props, {
  	              value: prevError
  	            }),
  	            group: assign({}, props, {
  	              value: prevGroup
  	            }),
  	            groupCollapsed: assign({}, props, {
  	              value: prevGroupCollapsed
  	            }),
  	            groupEnd: assign({}, props, {
  	              value: prevGroupEnd
  	            })
  	          });
  	          /* eslint-enable react-internal/no-production-logging */
  	        }
  	        if (disabledDepth < 0) {
  	          error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
  	        }
  	      }
  	    }
  	    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
  	    var prefix;
  	    function describeBuiltInComponentFrame(name, source, ownerFn) {
  	      {
  	        if (prefix === undefined) {
  	          // Extract the VM specific prefix used by each line.
  	          try {
  	            throw Error();
  	          } catch (x) {
  	            var match = x.stack.trim().match(/\n( *(at )?)/);
  	            prefix = match && match[1] || '';
  	          }
  	        } // We use the prefix to ensure our stacks line up with native stack frames.

  	        return '\n' + prefix + name;
  	      }
  	    }
  	    var reentry = false;
  	    var componentFrameCache;
  	    {
  	      var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  	      componentFrameCache = new PossiblyWeakMap();
  	    }
  	    function describeNativeComponentFrame(fn, construct) {
  	      // If something asked for a stack inside a fake render, it should get ignored.
  	      if (!fn || reentry) {
  	        return '';
  	      }
  	      {
  	        var frame = componentFrameCache.get(fn);
  	        if (frame !== undefined) {
  	          return frame;
  	        }
  	      }
  	      var control;
  	      reentry = true;
  	      var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  	      Error.prepareStackTrace = undefined;
  	      var previousDispatcher;
  	      {
  	        previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
  	        // for warnings.

  	        ReactCurrentDispatcher.current = null;
  	        disableLogs();
  	      }
  	      try {
  	        // This should throw.
  	        if (construct) {
  	          // Something should be setting the props in the constructor.
  	          var Fake = function () {
  	            throw Error();
  	          }; // $FlowFixMe

  	          Object.defineProperty(Fake.prototype, 'props', {
  	            set: function () {
  	              // We use a throwing setter instead of frozen or non-writable props
  	              // because that won't throw in a non-strict mode function.
  	              throw Error();
  	            }
  	          });
  	          if (typeof Reflect === 'object' && Reflect.construct) {
  	            // We construct a different control for this case to include any extra
  	            // frames added by the construct call.
  	            try {
  	              Reflect.construct(Fake, []);
  	            } catch (x) {
  	              control = x;
  	            }
  	            Reflect.construct(fn, [], Fake);
  	          } else {
  	            try {
  	              Fake.call();
  	            } catch (x) {
  	              control = x;
  	            }
  	            fn.call(Fake.prototype);
  	          }
  	        } else {
  	          try {
  	            throw Error();
  	          } catch (x) {
  	            control = x;
  	          }
  	          fn();
  	        }
  	      } catch (sample) {
  	        // This is inlined manually because closure doesn't do it for us.
  	        if (sample && control && typeof sample.stack === 'string') {
  	          // This extracts the first frame from the sample that isn't also in the control.
  	          // Skipping one frame that we assume is the frame that calls the two.
  	          var sampleLines = sample.stack.split('\n');
  	          var controlLines = control.stack.split('\n');
  	          var s = sampleLines.length - 1;
  	          var c = controlLines.length - 1;
  	          while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
  	            // We expect at least one stack frame to be shared.
  	            // Typically this will be the root most one. However, stack frames may be
  	            // cut off due to maximum stack limits. In this case, one maybe cut off
  	            // earlier than the other. We assume that the sample is longer or the same
  	            // and there for cut off earlier. So we should find the root most frame in
  	            // the sample somewhere in the control.
  	            c--;
  	          }
  	          for (; s >= 1 && c >= 0; s--, c--) {
  	            // Next we find the first one that isn't the same which should be the
  	            // frame that called our sample function and the control.
  	            if (sampleLines[s] !== controlLines[c]) {
  	              // In V8, the first line is describing the message but other VMs don't.
  	              // If we're about to return the first line, and the control is also on the same
  	              // line, that's a pretty good indicator that our sample threw at same line as
  	              // the control. I.e. before we entered the sample frame. So we ignore this result.
  	              // This can happen if you passed a class to function component, or non-function.
  	              if (s !== 1 || c !== 1) {
  	                do {
  	                  s--;
  	                  c--; // We may still have similar intermediate frames from the construct call.
  	                  // The next one that isn't the same should be our match though.

  	                  if (c < 0 || sampleLines[s] !== controlLines[c]) {
  	                    // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
  	                    var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
  	                    // but we have a user-provided "displayName"
  	                    // splice it in to make the stack more readable.

  	                    if (fn.displayName && _frame.includes('<anonymous>')) {
  	                      _frame = _frame.replace('<anonymous>', fn.displayName);
  	                    }
  	                    {
  	                      if (typeof fn === 'function') {
  	                        componentFrameCache.set(fn, _frame);
  	                      }
  	                    } // Return the line we found.

  	                    return _frame;
  	                  }
  	                } while (s >= 1 && c >= 0);
  	              }
  	              break;
  	            }
  	          }
  	        }
  	      } finally {
  	        reentry = false;
  	        {
  	          ReactCurrentDispatcher.current = previousDispatcher;
  	          reenableLogs();
  	        }
  	        Error.prepareStackTrace = previousPrepareStackTrace;
  	      } // Fallback to just using the name if we couldn't make it throw.

  	      var name = fn ? fn.displayName || fn.name : '';
  	      var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
  	      {
  	        if (typeof fn === 'function') {
  	          componentFrameCache.set(fn, syntheticFrame);
  	        }
  	      }
  	      return syntheticFrame;
  	    }
  	    function describeFunctionComponentFrame(fn, source, ownerFn) {
  	      {
  	        return describeNativeComponentFrame(fn, false);
  	      }
  	    }
  	    function shouldConstruct(Component) {
  	      var prototype = Component.prototype;
  	      return !!(prototype && prototype.isReactComponent);
  	    }
  	    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
  	      if (type == null) {
  	        return '';
  	      }
  	      if (typeof type === 'function') {
  	        {
  	          return describeNativeComponentFrame(type, shouldConstruct(type));
  	        }
  	      }
  	      if (typeof type === 'string') {
  	        return describeBuiltInComponentFrame(type);
  	      }
  	      switch (type) {
  	        case REACT_SUSPENSE_TYPE:
  	          return describeBuiltInComponentFrame('Suspense');
  	        case REACT_SUSPENSE_LIST_TYPE:
  	          return describeBuiltInComponentFrame('SuspenseList');
  	      }
  	      if (typeof type === 'object') {
  	        switch (type.$$typeof) {
  	          case REACT_FORWARD_REF_TYPE:
  	            return describeFunctionComponentFrame(type.render);
  	          case REACT_MEMO_TYPE:
  	            // Memo may contain any component type so we recursively resolve it.
  	            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
  	          case REACT_LAZY_TYPE:
  	            {
  	              var lazyComponent = type;
  	              var payload = lazyComponent._payload;
  	              var init = lazyComponent._init;
  	              try {
  	                // Lazy may contain any component type so we recursively resolve it.
  	                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
  	              } catch (x) {}
  	            }
  	        }
  	      }
  	      return '';
  	    }
  	    var hasOwnProperty = Object.prototype.hasOwnProperty;
  	    var loggedTypeFailures = {};
  	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
  	    function setCurrentlyValidatingElement(element) {
  	      {
  	        if (element) {
  	          var owner = element._owner;
  	          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
  	          ReactDebugCurrentFrame.setExtraStackFrame(stack);
  	        } else {
  	          ReactDebugCurrentFrame.setExtraStackFrame(null);
  	        }
  	      }
  	    }
  	    function checkPropTypes(typeSpecs, values, location, componentName, element) {
  	      {
  	        // $FlowFixMe This is okay but Flow doesn't know it.
  	        var has = Function.call.bind(hasOwnProperty);
  	        for (var typeSpecName in typeSpecs) {
  	          if (has(typeSpecs, typeSpecName)) {
  	            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
  	            // fail the render phase where it didn't fail before. So we log it.
  	            // After these have been cleaned up, we'll let them throw.

  	            try {
  	              // This is intentionally an invariant that gets caught. It's the same
  	              // behavior as without this statement except with a better message.
  	              if (typeof typeSpecs[typeSpecName] !== 'function') {
  	                // eslint-disable-next-line react-internal/prod-error-codes
  	                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
  	                err.name = 'Invariant Violation';
  	                throw err;
  	              }
  	              error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
  	            } catch (ex) {
  	              error$1 = ex;
  	            }
  	            if (error$1 && !(error$1 instanceof Error)) {
  	              setCurrentlyValidatingElement(element);
  	              error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
  	              setCurrentlyValidatingElement(null);
  	            }
  	            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
  	              // Only monitor this failure once because there tends to be a lot of the
  	              // same error.
  	              loggedTypeFailures[error$1.message] = true;
  	              setCurrentlyValidatingElement(element);
  	              error('Failed %s type: %s', location, error$1.message);
  	              setCurrentlyValidatingElement(null);
  	            }
  	          }
  	        }
  	      }
  	    }
  	    var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

  	    function isArray(a) {
  	      return isArrayImpl(a);
  	    }

  	    /*
  	     * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
  	     * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
  	     *
  	     * The functions in this module will throw an easier-to-understand,
  	     * easier-to-debug exception with a clear errors message message explaining the
  	     * problem. (Instead of a confusing exception thrown inside the implementation
  	     * of the `value` object).
  	     */
  	    // $FlowFixMe only called in DEV, so void return is not possible.
  	    function typeName(value) {
  	      {
  	        // toStringTag is needed for namespaced types like Temporal.Instant
  	        var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
  	        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
  	        return type;
  	      }
  	    } // $FlowFixMe only called in DEV, so void return is not possible.

  	    function willCoercionThrow(value) {
  	      {
  	        try {
  	          testStringCoercion(value);
  	          return false;
  	        } catch (e) {
  	          return true;
  	        }
  	      }
  	    }
  	    function testStringCoercion(value) {
  	      // If you ended up here by following an exception call stack, here's what's
  	      // happened: you supplied an object or symbol value to React (as a prop, key,
  	      // DOM attribute, CSS property, string ref, etc.) and when React tried to
  	      // coerce it to a string using `'' + value`, an exception was thrown.
  	      //
  	      // The most common types that will cause this exception are `Symbol` instances
  	      // and Temporal objects like `Temporal.Instant`. But any object that has a
  	      // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  	      // exception. (Library authors do this to prevent users from using built-in
  	      // numeric operators like `+` or comparison operators like `>=` because custom
  	      // methods are needed to perform accurate arithmetic or comparison.)
  	      //
  	      // To fix the problem, coerce this object or symbol value to a string before
  	      // passing it to React. The most reliable way is usually `String(value)`.
  	      //
  	      // To find which value is throwing, check the browser or debugger console.
  	      // Before this exception was thrown, there should be `console.error` output
  	      // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  	      // problem and how that type was used: key, atrribute, input value prop, etc.
  	      // In most cases, this console output also shows the component and its
  	      // ancestor components where the exception happened.
  	      //
  	      // eslint-disable-next-line react-internal/safe-string-coercion
  	      return '' + value;
  	    }
  	    function checkKeyStringCoercion(value) {
  	      {
  	        if (willCoercionThrow(value)) {
  	          error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
  	          return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
  	        }
  	      }
  	    }
  	    var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
  	    var RESERVED_PROPS = {
  	      key: true,
  	      ref: true,
  	      __self: true,
  	      __source: true
  	    };
  	    var specialPropKeyWarningShown;
  	    var specialPropRefWarningShown;
  	    var didWarnAboutStringRefs;
  	    {
  	      didWarnAboutStringRefs = {};
  	    }
  	    function hasValidRef(config) {
  	      {
  	        if (hasOwnProperty.call(config, 'ref')) {
  	          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
  	          if (getter && getter.isReactWarning) {
  	            return false;
  	          }
  	        }
  	      }
  	      return config.ref !== undefined;
  	    }
  	    function hasValidKey(config) {
  	      {
  	        if (hasOwnProperty.call(config, 'key')) {
  	          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
  	          if (getter && getter.isReactWarning) {
  	            return false;
  	          }
  	        }
  	      }
  	      return config.key !== undefined;
  	    }
  	    function warnIfStringRefCannotBeAutoConverted(config, self) {
  	      {
  	        if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
  	          var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
  	          if (!didWarnAboutStringRefs[componentName]) {
  	            error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
  	            didWarnAboutStringRefs[componentName] = true;
  	          }
  	        }
  	      }
  	    }
  	    function defineKeyPropWarningGetter(props, displayName) {
  	      {
  	        var warnAboutAccessingKey = function () {
  	          if (!specialPropKeyWarningShown) {
  	            specialPropKeyWarningShown = true;
  	            error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
  	          }
  	        };
  	        warnAboutAccessingKey.isReactWarning = true;
  	        Object.defineProperty(props, 'key', {
  	          get: warnAboutAccessingKey,
  	          configurable: true
  	        });
  	      }
  	    }
  	    function defineRefPropWarningGetter(props, displayName) {
  	      {
  	        var warnAboutAccessingRef = function () {
  	          if (!specialPropRefWarningShown) {
  	            specialPropRefWarningShown = true;
  	            error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
  	          }
  	        };
  	        warnAboutAccessingRef.isReactWarning = true;
  	        Object.defineProperty(props, 'ref', {
  	          get: warnAboutAccessingRef,
  	          configurable: true
  	        });
  	      }
  	    }
  	    /**
  	     * Factory method to create a new React element. This no longer adheres to
  	     * the class pattern, so do not use new to call it. Also, instanceof check
  	     * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
  	     * if something is a React Element.
  	     *
  	     * @param {*} type
  	     * @param {*} props
  	     * @param {*} key
  	     * @param {string|object} ref
  	     * @param {*} owner
  	     * @param {*} self A *temporary* helper to detect places where `this` is
  	     * different from the `owner` when React.createElement is called, so that we
  	     * can warn. We want to get rid of owner and replace string `ref`s with arrow
  	     * functions, and as long as `this` and owner are the same, there will be no
  	     * change in behavior.
  	     * @param {*} source An annotation object (added by a transpiler or otherwise)
  	     * indicating filename, line number, and/or other information.
  	     * @internal
  	     */

  	    var ReactElement = function (type, key, ref, self, source, owner, props) {
  	      var element = {
  	        // This tag allows us to uniquely identify this as a React Element
  	        $$typeof: REACT_ELEMENT_TYPE,
  	        // Built-in properties that belong on the element
  	        type: type,
  	        key: key,
  	        ref: ref,
  	        props: props,
  	        // Record the component responsible for creating this element.
  	        _owner: owner
  	      };
  	      {
  	        // The validation flag is currently mutative. We put it on
  	        // an external backing store so that we can freeze the whole object.
  	        // This can be replaced with a WeakMap once they are implemented in
  	        // commonly used development environments.
  	        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
  	        // the validation flag non-enumerable (where possible, which should
  	        // include every environment we run tests in), so the test framework
  	        // ignores it.

  	        Object.defineProperty(element._store, 'validated', {
  	          configurable: false,
  	          enumerable: false,
  	          writable: true,
  	          value: false
  	        }); // self and source are DEV only properties.

  	        Object.defineProperty(element, '_self', {
  	          configurable: false,
  	          enumerable: false,
  	          writable: false,
  	          value: self
  	        }); // Two elements created in two different places should be considered
  	        // equal for testing purposes and therefore we hide it from enumeration.

  	        Object.defineProperty(element, '_source', {
  	          configurable: false,
  	          enumerable: false,
  	          writable: false,
  	          value: source
  	        });
  	        if (Object.freeze) {
  	          Object.freeze(element.props);
  	          Object.freeze(element);
  	        }
  	      }
  	      return element;
  	    };
  	    /**
  	     * https://github.com/reactjs/rfcs/pull/107
  	     * @param {*} type
  	     * @param {object} props
  	     * @param {string} key
  	     */

  	    function jsxDEV(type, config, maybeKey, source, self) {
  	      {
  	        var propName; // Reserved names are extracted

  	        var props = {};
  	        var key = null;
  	        var ref = null; // Currently, key can be spread in as a prop. This causes a potential
  	        // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
  	        // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
  	        // but as an intermediary step, we will use jsxDEV for everything except
  	        // <div {...props} key="Hi" />, because we aren't currently able to tell if
  	        // key is explicitly declared to be undefined or not.

  	        if (maybeKey !== undefined) {
  	          {
  	            checkKeyStringCoercion(maybeKey);
  	          }
  	          key = '' + maybeKey;
  	        }
  	        if (hasValidKey(config)) {
  	          {
  	            checkKeyStringCoercion(config.key);
  	          }
  	          key = '' + config.key;
  	        }
  	        if (hasValidRef(config)) {
  	          ref = config.ref;
  	          warnIfStringRefCannotBeAutoConverted(config, self);
  	        } // Remaining properties are added to a new props object

  	        for (propName in config) {
  	          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
  	            props[propName] = config[propName];
  	          }
  	        } // Resolve default props

  	        if (type && type.defaultProps) {
  	          var defaultProps = type.defaultProps;
  	          for (propName in defaultProps) {
  	            if (props[propName] === undefined) {
  	              props[propName] = defaultProps[propName];
  	            }
  	          }
  	        }
  	        if (key || ref) {
  	          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
  	          if (key) {
  	            defineKeyPropWarningGetter(props, displayName);
  	          }
  	          if (ref) {
  	            defineRefPropWarningGetter(props, displayName);
  	          }
  	        }
  	        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  	      }
  	    }
  	    var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
  	    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
  	    function setCurrentlyValidatingElement$1(element) {
  	      {
  	        if (element) {
  	          var owner = element._owner;
  	          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
  	          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
  	        } else {
  	          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
  	        }
  	      }
  	    }
  	    var propTypesMisspellWarningShown;
  	    {
  	      propTypesMisspellWarningShown = false;
  	    }
  	    /**
  	     * Verifies the object is a ReactElement.
  	     * See https://reactjs.org/docs/react-api.html#isvalidelement
  	     * @param {?object} object
  	     * @return {boolean} True if `object` is a ReactElement.
  	     * @final
  	     */

  	    function isValidElement(object) {
  	      {
  	        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  	      }
  	    }
  	    function getDeclarationErrorAddendum() {
  	      {
  	        if (ReactCurrentOwner$1.current) {
  	          var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
  	          if (name) {
  	            return '\n\nCheck the render method of `' + name + '`.';
  	          }
  	        }
  	        return '';
  	      }
  	    }
  	    function getSourceInfoErrorAddendum(source) {
  	      {
  	        return '';
  	      }
  	    }
  	    /**
  	     * Warn if there's no key explicitly set on dynamic arrays of children or
  	     * object keys are not valid. This allows us to keep track of children between
  	     * updates.
  	     */

  	    var ownerHasKeyUseWarning = {};
  	    function getCurrentComponentErrorInfo(parentType) {
  	      {
  	        var info = getDeclarationErrorAddendum();
  	        if (!info) {
  	          var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
  	          if (parentName) {
  	            info = "\n\nCheck the top-level render call using <" + parentName + ">.";
  	          }
  	        }
  	        return info;
  	      }
  	    }
  	    /**
  	     * Warn if the element doesn't have an explicit key assigned to it.
  	     * This element is in an array. The array could grow and shrink or be
  	     * reordered. All children that haven't already been validated are required to
  	     * have a "key" property assigned to it. Error statuses are cached so a warning
  	     * will only be shown once.
  	     *
  	     * @internal
  	     * @param {ReactElement} element Element that requires a key.
  	     * @param {*} parentType element's parent's type.
  	     */

  	    function validateExplicitKey(element, parentType) {
  	      {
  	        if (!element._store || element._store.validated || element.key != null) {
  	          return;
  	        }
  	        element._store.validated = true;
  	        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  	        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
  	          return;
  	        }
  	        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  	        // property, it may be the creator of the child that's responsible for
  	        // assigning it a key.

  	        var childOwner = '';
  	        if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
  	          // Give the component that originally created this child.
  	          childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
  	        }
  	        setCurrentlyValidatingElement$1(element);
  	        error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
  	        setCurrentlyValidatingElement$1(null);
  	      }
  	    }
  	    /**
  	     * Ensure that every element either is passed in a static location, in an
  	     * array with an explicit keys property defined, or in an object literal
  	     * with valid key property.
  	     *
  	     * @internal
  	     * @param {ReactNode} node Statically passed child of any type.
  	     * @param {*} parentType node's parent's type.
  	     */

  	    function validateChildKeys(node, parentType) {
  	      {
  	        if (typeof node !== 'object') {
  	          return;
  	        }
  	        if (isArray(node)) {
  	          for (var i = 0; i < node.length; i++) {
  	            var child = node[i];
  	            if (isValidElement(child)) {
  	              validateExplicitKey(child, parentType);
  	            }
  	          }
  	        } else if (isValidElement(node)) {
  	          // This element was passed in a valid location.
  	          if (node._store) {
  	            node._store.validated = true;
  	          }
  	        } else if (node) {
  	          var iteratorFn = getIteratorFn(node);
  	          if (typeof iteratorFn === 'function') {
  	            // Entry iterators used to provide implicit keys,
  	            // but now we print a separate warning for them later.
  	            if (iteratorFn !== node.entries) {
  	              var iterator = iteratorFn.call(node);
  	              var step;
  	              while (!(step = iterator.next()).done) {
  	                if (isValidElement(step.value)) {
  	                  validateExplicitKey(step.value, parentType);
  	                }
  	              }
  	            }
  	          }
  	        }
  	      }
  	    }
  	    /**
  	     * Given an element, validate that its props follow the propTypes definition,
  	     * provided by the type.
  	     *
  	     * @param {ReactElement} element
  	     */

  	    function validatePropTypes(element) {
  	      {
  	        var type = element.type;
  	        if (type === null || type === undefined || typeof type === 'string') {
  	          return;
  	        }
  	        var propTypes;
  	        if (typeof type === 'function') {
  	          propTypes = type.propTypes;
  	        } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
  	        // Note: Memo only checks outer props here.
  	        // Inner props are checked in the reconciler.
  	        type.$$typeof === REACT_MEMO_TYPE)) {
  	          propTypes = type.propTypes;
  	        } else {
  	          return;
  	        }
  	        if (propTypes) {
  	          // Intentionally inside to avoid triggering lazy initializers:
  	          var name = getComponentNameFromType(type);
  	          checkPropTypes(propTypes, element.props, 'prop', name, element);
  	        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
  	          propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

  	          var _name = getComponentNameFromType(type);
  	          error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
  	        }
  	        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
  	          error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
  	        }
  	      }
  	    }
  	    /**
  	     * Given a fragment, validate that it can only be provided with fragment props
  	     * @param {ReactElement} fragment
  	     */

  	    function validateFragmentProps(fragment) {
  	      {
  	        var keys = Object.keys(fragment.props);
  	        for (var i = 0; i < keys.length; i++) {
  	          var key = keys[i];
  	          if (key !== 'children' && key !== 'key') {
  	            setCurrentlyValidatingElement$1(fragment);
  	            error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
  	            setCurrentlyValidatingElement$1(null);
  	            break;
  	          }
  	        }
  	        if (fragment.ref !== null) {
  	          setCurrentlyValidatingElement$1(fragment);
  	          error('Invalid attribute `ref` supplied to `React.Fragment`.');
  	          setCurrentlyValidatingElement$1(null);
  	        }
  	      }
  	    }
  	    var didWarnAboutKeySpread = {};
  	    function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  	      {
  	        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  	        // succeed and there will likely be errors in render.

  	        if (!validType) {
  	          var info = '';
  	          if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
  	            info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
  	          }
  	          var sourceInfo = getSourceInfoErrorAddendum();
  	          if (sourceInfo) {
  	            info += sourceInfo;
  	          } else {
  	            info += getDeclarationErrorAddendum();
  	          }
  	          var typeString;
  	          if (type === null) {
  	            typeString = 'null';
  	          } else if (isArray(type)) {
  	            typeString = 'array';
  	          } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
  	            typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
  	            info = ' Did you accidentally export a JSX literal instead of a component?';
  	          } else {
  	            typeString = typeof type;
  	          }
  	          error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  	        }
  	        var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
  	        // TODO: Drop this when these are no longer allowed as the type argument.

  	        if (element == null) {
  	          return element;
  	        } // Skip key warning if the type isn't valid since our key validation logic
  	        // doesn't expect a non-string/function type and can throw confusing errors.
  	        // We don't want exception behavior to differ between dev and prod.
  	        // (Rendering will throw with a helpful message and as soon as the type is
  	        // fixed, the key warnings will appear.)

  	        if (validType) {
  	          var children = props.children;
  	          if (children !== undefined) {
  	            if (isStaticChildren) {
  	              if (isArray(children)) {
  	                for (var i = 0; i < children.length; i++) {
  	                  validateChildKeys(children[i], type);
  	                }
  	                if (Object.freeze) {
  	                  Object.freeze(children);
  	                }
  	              } else {
  	                error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
  	              }
  	            } else {
  	              validateChildKeys(children, type);
  	            }
  	          }
  	        }
  	        {
  	          if (hasOwnProperty.call(props, 'key')) {
  	            var componentName = getComponentNameFromType(type);
  	            var keys = Object.keys(props).filter(function (k) {
  	              return k !== 'key';
  	            });
  	            var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';
  	            if (!didWarnAboutKeySpread[componentName + beforeExample]) {
  	              var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';
  	              error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
  	              didWarnAboutKeySpread[componentName + beforeExample] = true;
  	            }
  	          }
  	        }
  	        if (type === REACT_FRAGMENT_TYPE) {
  	          validateFragmentProps(element);
  	        } else {
  	          validatePropTypes(element);
  	        }
  	        return element;
  	      }
  	    } // These two functions exist to still get child warnings in dev
  	    // even with the prod transform. This means that jsxDEV is purely
  	    // opt-in behavior for better messages but that we won't stop
  	    // giving you warnings if you use production apis.

  	    function jsxWithValidationStatic(type, props, key) {
  	      {
  	        return jsxWithValidation(type, props, key, true);
  	      }
  	    }
  	    function jsxWithValidationDynamic(type, props, key) {
  	      {
  	        return jsxWithValidation(type, props, key, false);
  	      }
  	    }
  	    var jsx = jsxWithValidationDynamic; // we may want to special case jsxs internally to take advantage of static children.
  	    // for now we can ship identical prod functions

  	    var jsxs = jsxWithValidationStatic;
  	    reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
  	    reactJsxRuntime_development.jsx = jsx;
  	    reactJsxRuntime_development.jsxs = jsxs;
  	  })();
  	}
  	return reactJsxRuntime_development;
  }

  {
    jsxRuntime.exports = requireReactJsxRuntime_development();
  }

  var jsxRuntimeExports = jsxRuntime.exports;

  document.querySelectorAll(".blueprint-blocks-block-preview").forEach(function ($el) {
    /*const blocks = [
    	{
    		name: $el.dataset?.blockName,
    		innerBlocks: [],
    		attrs: [],
    	},
    ];*/
    var blocks = [{
      name: "core/heading",
      innerBlocks: [],
      attributes: {
        level: 3,
        content: "hello heading",
        placeholder: "hello heading"
      },
      attrs: {
        level: 3,
        content: "hello heading",
        placeholder: "hello heading"
      }
    }, {
      name: "core/paragraph",
      innerBlocks: [],
      attributes: {
        content: "hello paragraph"
      }
    }];
    client.createRoot($el).render( /*#__PURE__*/jsxRuntimeExports.jsx(blockEditor.BlockPreview, {
      blocks: blocks,
      viewportWidth: 800,
      minHeight: 200
    }));
  });

})(React, ReactDOM, wp.blockEditor);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stcHJldmlldy5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9jbGllbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1ydW50aW1lLmpzIiwiLi4vcGFja2FnZXMvYmxvY2stcHJldmlldy9zcmMvbWFpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgZXhwb3J0cy5jcmVhdGVSb290ID0gbS5jcmVhdGVSb290O1xuICBleHBvcnRzLmh5ZHJhdGVSb290ID0gbS5oeWRyYXRlUm9vdDtcbn0gZWxzZSB7XG4gIHZhciBpID0gbS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcbiAgZXhwb3J0cy5jcmVhdGVSb290ID0gZnVuY3Rpb24oYywgbykge1xuICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG0uY3JlYXRlUm9vdChjLCBvKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG4gIGV4cG9ydHMuaHlkcmF0ZVJvb3QgPSBmdW5jdGlvbihjLCBoLCBvKSB7XG4gICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbS5oeWRyYXRlUm9vdChjLCBoLCBvKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJyk7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJyk7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubGF6eScpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuXG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIFN0cmluZyhpdGVtKTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG52YXIgZW5hYmxlQ2FjaGVFbGVtZW50ID0gZmFsc2U7XG52YXIgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgPSBmYWxzZTsgLy8gTm8ga25vd24gYnVncywgYnV0IG5lZWRzIHBlcmZvcm1hbmNlIHRlc3RpbmdcblxudmFyIGVuYWJsZUxlZ2FjeUhpZGRlbiA9IGZhbHNlOyAvLyBFbmFibGVzIHVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrIGZlYXR1cmUgaW4gRmliZXJcbi8vIHN0dWZmLiBJbnRlbmRlZCB0byBlbmFibGUgUmVhY3QgY29yZSBtZW1iZXJzIHRvIG1vcmUgZWFzaWx5IGRlYnVnIHNjaGVkdWxpbmdcbi8vIGlzc3VlcyBpbiBERVYgYnVpbGRzLlxuXG52YXIgZW5hYmxlRGVidWdUcmFjaW5nID0gZmFsc2U7IC8vIFRyYWNrIHdoaWNoIEZpYmVyKHMpIHNjaGVkdWxlIHJlbmRlciB3b3JrLlxuXG52YXIgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRTtcblxue1xuICBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFID0gU3ltYm9sLmZvcigncmVhY3QubW9kdWxlLnJlZmVyZW5jZScpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgZW5hYmxlRGVidWdUcmFjaW5nICB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IGVuYWJsZUxlZ2FjeUhpZGRlbiAgfHwgdHlwZSA9PT0gUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgIHx8IGVuYWJsZUNhY2hlRWxlbWVudCAgfHwgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGRpc3BsYXlOYW1lID0gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lO1xuXG4gIGlmIChkaXNwbGF5TmFtZSkge1xuICAgIHJldHVybiBkaXNwbGF5TmFtZTtcbiAgfVxuXG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWU7XG59IC8vIEtlZXAgaW4gc3luYyB3aXRoIHJlYWN0LXJlY29uY2lsZXIvZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlclxuXG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufSAvLyBOb3RlIHRoYXQgdGhlIHJlY29uY2lsZXIgcGFja2FnZSBzaG91bGQgZ2VuZXJhbGx5IHByZWZlciB0byB1c2UgZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlcigpIGluc3RlYWQuXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcblxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHZhciBvdXRlck5hbWUgPSB0eXBlLmRpc3BsYXlOYW1lIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKG91dGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBvdXRlck5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ01lbW8nO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1mYWxsdGhyb3VnaFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICggIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpOyAvLyBJZiBvdXIgY29tcG9uZW50IGZyYW1lIGlzIGxhYmVsZWQgXCI8YW5vbnltb3VzPlwiXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIGhhdmUgYSB1c2VyLXByb3ZpZGVkIFwiZGlzcGxheU5hbWVcIlxuICAgICAgICAgICAgICAgIC8vIHNwbGljZSBpdCBpbiB0byBtYWtlIHRoZSBzdGFjayBtb3JlIHJlYWRhYmxlLlxuXG5cbiAgICAgICAgICAgICAgICBpZiAoZm4uZGlzcGxheU5hbWUgJiYgX2ZyYW1lLmluY2x1ZGVzKCc8YW5vbnltb3VzPicpKSB7XG4gICAgICAgICAgICAgICAgICBfZnJhbWUgPSBfZnJhbWUucmVwbGFjZSgnPGFub255bW91cz4nLCBmbi5kaXNwbGF5TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9wcm9kLWVycm9yLWNvZGVzXG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGlzQXJyYXlJbXBsID0gQXJyYXkuaXNBcnJheTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5mdW5jdGlvbiBpc0FycmF5KGEpIHtcbiAgcmV0dXJuIGlzQXJyYXlJbXBsKGEpO1xufVxuXG4vKlxuICogVGhlIGAnJyArIHZhbHVlYCBwYXR0ZXJuICh1c2VkIGluIGluIHBlcmYtc2Vuc2l0aXZlIGNvZGUpIHRocm93cyBmb3IgU3ltYm9sXG4gKiBhbmQgVGVtcG9yYWwuKiB0eXBlcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzIyMDY0LlxuICpcbiAqIFRoZSBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgd2lsbCB0aHJvdyBhbiBlYXNpZXItdG8tdW5kZXJzdGFuZCxcbiAqIGVhc2llci10by1kZWJ1ZyBleGNlcHRpb24gd2l0aCBhIGNsZWFyIGVycm9ycyBtZXNzYWdlIG1lc3NhZ2UgZXhwbGFpbmluZyB0aGVcbiAqIHByb2JsZW0uIChJbnN0ZWFkIG9mIGEgY29uZnVzaW5nIGV4Y2VwdGlvbiB0aHJvd24gaW5zaWRlIHRoZSBpbXBsZW1lbnRhdGlvblxuICogb2YgdGhlIGB2YWx1ZWAgb2JqZWN0KS5cbiAqL1xuLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cbmZ1bmN0aW9uIHR5cGVOYW1lKHZhbHVlKSB7XG4gIHtcbiAgICAvLyB0b1N0cmluZ1RhZyBpcyBuZWVkZWQgZm9yIG5hbWVzcGFjZWQgdHlwZXMgbGlrZSBUZW1wb3JhbC5JbnN0YW50XG4gICAgdmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wudG9TdHJpbmdUYWc7XG4gICAgdmFyIHR5cGUgPSBoYXNUb1N0cmluZ1RhZyAmJiB2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddIHx8IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgfHwgJ09iamVjdCc7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn0gLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cblxuXG5mdW5jdGlvbiB3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkge1xuICB7XG4gICAgdHJ5IHtcbiAgICAgIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICAvLyBJZiB5b3UgZW5kZWQgdXAgaGVyZSBieSBmb2xsb3dpbmcgYW4gZXhjZXB0aW9uIGNhbGwgc3RhY2ssIGhlcmUncyB3aGF0J3NcbiAgLy8gaGFwcGVuZWQ6IHlvdSBzdXBwbGllZCBhbiBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIFJlYWN0IChhcyBhIHByb3AsIGtleSxcbiAgLy8gRE9NIGF0dHJpYnV0ZSwgQ1NTIHByb3BlcnR5LCBzdHJpbmcgcmVmLCBldGMuKSBhbmQgd2hlbiBSZWFjdCB0cmllZCB0b1xuICAvLyBjb2VyY2UgaXQgdG8gYSBzdHJpbmcgdXNpbmcgYCcnICsgdmFsdWVgLCBhbiBleGNlcHRpb24gd2FzIHRocm93bi5cbiAgLy9cbiAgLy8gVGhlIG1vc3QgY29tbW9uIHR5cGVzIHRoYXQgd2lsbCBjYXVzZSB0aGlzIGV4Y2VwdGlvbiBhcmUgYFN5bWJvbGAgaW5zdGFuY2VzXG4gIC8vIGFuZCBUZW1wb3JhbCBvYmplY3RzIGxpa2UgYFRlbXBvcmFsLkluc3RhbnRgLiBCdXQgYW55IG9iamVjdCB0aGF0IGhhcyBhXG4gIC8vIGB2YWx1ZU9mYCBvciBgW1N5bWJvbC50b1ByaW1pdGl2ZV1gIG1ldGhvZCB0aGF0IHRocm93cyB3aWxsIGFsc28gY2F1c2UgdGhpc1xuICAvLyBleGNlcHRpb24uIChMaWJyYXJ5IGF1dGhvcnMgZG8gdGhpcyB0byBwcmV2ZW50IHVzZXJzIGZyb20gdXNpbmcgYnVpbHQtaW5cbiAgLy8gbnVtZXJpYyBvcGVyYXRvcnMgbGlrZSBgK2Agb3IgY29tcGFyaXNvbiBvcGVyYXRvcnMgbGlrZSBgPj1gIGJlY2F1c2UgY3VzdG9tXG4gIC8vIG1ldGhvZHMgYXJlIG5lZWRlZCB0byBwZXJmb3JtIGFjY3VyYXRlIGFyaXRobWV0aWMgb3IgY29tcGFyaXNvbi4pXG4gIC8vXG4gIC8vIFRvIGZpeCB0aGUgcHJvYmxlbSwgY29lcmNlIHRoaXMgb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZyBiZWZvcmVcbiAgLy8gcGFzc2luZyBpdCB0byBSZWFjdC4gVGhlIG1vc3QgcmVsaWFibGUgd2F5IGlzIHVzdWFsbHkgYFN0cmluZyh2YWx1ZSlgLlxuICAvL1xuICAvLyBUbyBmaW5kIHdoaWNoIHZhbHVlIGlzIHRocm93aW5nLCBjaGVjayB0aGUgYnJvd3NlciBvciBkZWJ1Z2dlciBjb25zb2xlLlxuICAvLyBCZWZvcmUgdGhpcyBleGNlcHRpb24gd2FzIHRocm93biwgdGhlcmUgc2hvdWxkIGJlIGBjb25zb2xlLmVycm9yYCBvdXRwdXRcbiAgLy8gdGhhdCBzaG93cyB0aGUgdHlwZSAoU3ltYm9sLCBUZW1wb3JhbC5QbGFpbkRhdGUsIGV0Yy4pIHRoYXQgY2F1c2VkIHRoZVxuICAvLyBwcm9ibGVtIGFuZCBob3cgdGhhdCB0eXBlIHdhcyB1c2VkOiBrZXksIGF0cnJpYnV0ZSwgaW5wdXQgdmFsdWUgcHJvcCwgZXRjLlxuICAvLyBJbiBtb3N0IGNhc2VzLCB0aGlzIGNvbnNvbGUgb3V0cHV0IGFsc28gc2hvd3MgdGhlIGNvbXBvbmVudCBhbmQgaXRzXG4gIC8vIGFuY2VzdG9yIGNvbXBvbmVudHMgd2hlcmUgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZC5cbiAgLy9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gIHJldHVybiAnJyArIHZhbHVlO1xufVxuZnVuY3Rpb24gY2hlY2tLZXlTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICB7XG4gICAgaWYgKHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSkge1xuICAgICAgZXJyb3IoJ1RoZSBwcm92aWRlZCBrZXkgaXMgYW4gdW5zdXBwb3J0ZWQgdHlwZSAlcy4nICsgJyBUaGlzIHZhbHVlIG11c3QgYmUgY29lcmNlZCB0byBhIHN0cmluZyBiZWZvcmUgYmVmb3JlIHVzaW5nIGl0IGhlcmUuJywgdHlwZU5hbWUodmFsdWUpKTtcblxuICAgICAgcmV0dXJuIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7IC8vIHRocm93ICh0byBoZWxwIGNhbGxlcnMgZmluZCB0cm91Ymxlc2hvb3RpbmcgY29tbWVudHMpXG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihtYXliZUtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBkaWRXYXJuQWJvdXRLZXlTcHJlYWQgPSB7fTtcbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywgJ2tleScpKSB7XG4gICAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKS5maWx0ZXIoZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICByZXR1cm4gayAhPT0gJ2tleSc7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgYmVmb3JlRXhhbXBsZSA9IGtleXMubGVuZ3RoID4gMCA/ICd7a2V5OiBzb21lS2V5LCAnICsga2V5cy5qb2luKCc6IC4uLiwgJykgKyAnOiAuLi59JyA6ICd7a2V5OiBzb21lS2V5fSc7XG5cbiAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRLZXlTcHJlYWRbY29tcG9uZW50TmFtZSArIGJlZm9yZUV4YW1wbGVdKSB7XG4gICAgICAgICAgdmFyIGFmdGVyRXhhbXBsZSA9IGtleXMubGVuZ3RoID4gMCA/ICd7JyArIGtleXMuam9pbignOiAuLi4sICcpICsgJzogLi4ufScgOiAne30nO1xuXG4gICAgICAgICAgZXJyb3IoJ0EgcHJvcHMgb2JqZWN0IGNvbnRhaW5pbmcgYSBcImtleVwiIHByb3AgaXMgYmVpbmcgc3ByZWFkIGludG8gSlNYOlxcbicgKyAnICBsZXQgcHJvcHMgPSAlcztcXG4nICsgJyAgPCVzIHsuLi5wcm9wc30gLz5cXG4nICsgJ1JlYWN0IGtleXMgbXVzdCBiZSBwYXNzZWQgZGlyZWN0bHkgdG8gSlNYIHdpdGhvdXQgdXNpbmcgc3ByZWFkOlxcbicgKyAnICBsZXQgcHJvcHMgPSAlcztcXG4nICsgJyAgPCVzIGtleT17c29tZUtleX0gey4uLnByb3BzfSAvPicsIGJlZm9yZUV4YW1wbGUsIGNvbXBvbmVudE5hbWUsIGFmdGVyRXhhbXBsZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRLZXlTcHJlYWRbY29tcG9uZW50TmFtZSArIGJlZm9yZUV4YW1wbGVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuLy8gZXZlbiB3aXRoIHRoZSBwcm9kIHRyYW5zZm9ybS4gVGhpcyBtZWFucyB0aGF0IGpzeERFViBpcyBwdXJlbHlcbi8vIG9wdC1pbiBiZWhhdmlvciBmb3IgYmV0dGVyIG1lc3NhZ2VzIGJ1dCB0aGF0IHdlIHdvbid0IHN0b3Bcbi8vIGdpdmluZyB5b3Ugd2FybmluZ3MgaWYgeW91IHVzZSBwcm9kdWN0aW9uIGFwaXMuXG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uU3RhdGljKHR5cGUsIHByb3BzLCBrZXkpIHtcbiAge1xuICAgIHJldHVybiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCB0cnVlKTtcbiAgfVxufVxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb25EeW5hbWljKHR5cGUsIHByb3BzLCBrZXkpIHtcbiAge1xuICAgIHJldHVybiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBmYWxzZSk7XG4gIH1cbn1cblxudmFyIGpzeCA9ICBqc3hXaXRoVmFsaWRhdGlvbkR5bmFtaWMgOyAvLyB3ZSBtYXkgd2FudCB0byBzcGVjaWFsIGNhc2UganN4cyBpbnRlcm5hbGx5IHRvIHRha2UgYWR2YW50YWdlIG9mIHN0YXRpYyBjaGlsZHJlbi5cbi8vIGZvciBub3cgd2UgY2FuIHNoaXAgaWRlbnRpY2FsIHByb2QgZnVuY3Rpb25zXG5cbnZhciBqc3hzID0gIGpzeFdpdGhWYWxpZGF0aW9uU3RhdGljIDtcblxuZXhwb3J0cy5GcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG5leHBvcnRzLmpzeCA9IGpzeDtcbmV4cG9ydHMuanN4cyA9IGpzeHM7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5pbXBvcnQgeyBCbG9ja1ByZXZpZXcgfSBmcm9tIFwiQHdvcmRwcmVzcy9ibG9jay1lZGl0b3JcIjtcblxuaW1wb3J0IFwiLi9tYWluLmNzc1wiO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsdWVwcmludC1ibG9ja3MtYmxvY2stcHJldmlld1wiKS5mb3JFYWNoKCgkZWwpID0+IHtcblx0Lypjb25zdCBibG9ja3MgPSBbXG5cdFx0e1xuXHRcdFx0bmFtZTogJGVsLmRhdGFzZXQ/LmJsb2NrTmFtZSxcblx0XHRcdGlubmVyQmxvY2tzOiBbXSxcblx0XHRcdGF0dHJzOiBbXSxcblx0XHR9LFxuXHRdOyovXG5cdGNvbnN0IGJsb2NrcyA9IFtcblx0XHR7XG5cdFx0XHRuYW1lOiBcImNvcmUvaGVhZGluZ1wiLFxuXHRcdFx0aW5uZXJCbG9ja3M6IFtdLFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRsZXZlbDogMyxcblx0XHRcdFx0Y29udGVudDogXCJoZWxsbyBoZWFkaW5nXCIsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiBcImhlbGxvIGhlYWRpbmdcIixcblx0XHRcdH0sXG5cdFx0XHRhdHRyczoge1xuXHRcdFx0XHRsZXZlbDogMyxcblx0XHRcdFx0Y29udGVudDogXCJoZWxsbyBoZWFkaW5nXCIsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiBcImhlbGxvIGhlYWRpbmdcIixcblx0XHRcdH0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiBcImNvcmUvcGFyYWdyYXBoXCIsXG5cdFx0XHRpbm5lckJsb2NrczogW10sXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNvbnRlbnQ6IFwiaGVsbG8gcGFyYWdyYXBoXCIsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdF07XG5cdFJlYWN0RE9NLmNyZWF0ZVJvb3QoJGVsKS5yZW5kZXIoXG5cdFx0PEJsb2NrUHJldmlldyBibG9ja3M9e2Jsb2Nrc30gdmlld3BvcnRXaWR0aD17ODAwfSBtaW5IZWlnaHQ9ezIwMH0gLz4sXG5cdCk7XG59KTtcbiJdLCJuYW1lcyI6WyJtIiwicmVxdWlyZSIsImkiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsImV4cG9ydHMiLCJjIiwibyIsInVzaW5nQ2xpZW50RW50cnlQb2ludCIsImNyZWF0ZVJvb3QiLCJoIiwiaHlkcmF0ZVJvb3QiLCJSZWFjdCIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIlN5bWJvbCIsImZvciIsIlJFQUNUX1BPUlRBTF9UWVBFIiwiUkVBQ1RfRlJBR01FTlRfVFlQRSIsIlJFQUNUX1NUUklDVF9NT0RFX1RZUEUiLCJSRUFDVF9QUk9GSUxFUl9UWVBFIiwiUkVBQ1RfUFJPVklERVJfVFlQRSIsIlJFQUNUX0NPTlRFWFRfVFlQRSIsIlJFQUNUX0ZPUldBUkRfUkVGX1RZUEUiLCJSRUFDVF9TVVNQRU5TRV9UWVBFIiwiUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIiwiUkVBQ1RfTUVNT19UWVBFIiwiUkVBQ1RfTEFaWV9UWVBFIiwiUkVBQ1RfT0ZGU0NSRUVOX1RZUEUiLCJNQVlCRV9JVEVSQVRPUl9TWU1CT0wiLCJpdGVyYXRvciIsIkZBVVhfSVRFUkFUT1JfU1lNQk9MIiwiZ2V0SXRlcmF0b3JGbiIsIm1heWJlSXRlcmFibGUiLCJtYXliZUl0ZXJhdG9yIiwiUmVhY3RTaGFyZWRJbnRlcm5hbHMiLCJlcnJvciIsImZvcm1hdCIsIl9sZW4yIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleTIiLCJwcmludFdhcm5pbmciLCJsZXZlbCIsIlJlYWN0RGVidWdDdXJyZW50RnJhbWUiLCJzdGFjayIsImdldFN0YWNrQWRkZW5kdW0iLCJjb25jYXQiLCJhcmdzV2l0aEZvcm1hdCIsIm1hcCIsIml0ZW0iLCJTdHJpbmciLCJ1bnNoaWZ0IiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJhcHBseSIsImNhbGwiLCJjb25zb2xlIiwiZW5hYmxlU2NvcGVBUEkiLCJlbmFibGVDYWNoZUVsZW1lbnQiLCJlbmFibGVUcmFuc2l0aW9uVHJhY2luZyIsImVuYWJsZUxlZ2FjeUhpZGRlbiIsImVuYWJsZURlYnVnVHJhY2luZyIsIlJFQUNUX01PRFVMRV9SRUZFUkVOQ0UiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJ0eXBlIiwiJCR0eXBlb2YiLCJnZXRNb2R1bGVJZCIsInVuZGVmaW5lZCIsImdldFdyYXBwZWROYW1lIiwib3V0ZXJUeXBlIiwiaW5uZXJUeXBlIiwid3JhcHBlck5hbWUiLCJkaXNwbGF5TmFtZSIsImZ1bmN0aW9uTmFtZSIsIm5hbWUiLCJnZXRDb250ZXh0TmFtZSIsImdldENvbXBvbmVudE5hbWVGcm9tVHlwZSIsInRhZyIsImNvbnRleHQiLCJwcm92aWRlciIsIl9jb250ZXh0IiwicmVuZGVyIiwib3V0ZXJOYW1lIiwibGF6eUNvbXBvbmVudCIsInBheWxvYWQiLCJfcGF5bG9hZCIsImluaXQiLCJfaW5pdCIsIngiLCJhc3NpZ24iLCJPYmplY3QiLCJkaXNhYmxlZERlcHRoIiwicHJldkxvZyIsInByZXZJbmZvIiwicHJldldhcm4iLCJwcmV2RXJyb3IiLCJwcmV2R3JvdXAiLCJwcmV2R3JvdXBDb2xsYXBzZWQiLCJwcmV2R3JvdXBFbmQiLCJkaXNhYmxlZExvZyIsIl9fcmVhY3REaXNhYmxlZExvZyIsImRpc2FibGVMb2dzIiwibG9nIiwiaW5mbyIsIndhcm4iLCJncm91cCIsImdyb3VwQ29sbGFwc2VkIiwiZ3JvdXBFbmQiLCJwcm9wcyIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJ2YWx1ZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydGllcyIsInJlZW5hYmxlTG9ncyIsIlJlYWN0Q3VycmVudERpc3BhdGNoZXIiLCJwcmVmaXgiLCJkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSIsInNvdXJjZSIsIm93bmVyRm4iLCJFcnJvciIsIm1hdGNoIiwidHJpbSIsInJlZW50cnkiLCJjb21wb25lbnRGcmFtZUNhY2hlIiwiUG9zc2libHlXZWFrTWFwIiwiV2Vha01hcCIsIk1hcCIsImRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUiLCJmbiIsImNvbnN0cnVjdCIsImZyYW1lIiwiZ2V0IiwiY29udHJvbCIsInByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UiLCJwcmVwYXJlU3RhY2tUcmFjZSIsInByZXZpb3VzRGlzcGF0Y2hlciIsImN1cnJlbnQiLCJGYWtlIiwiZGVmaW5lUHJvcGVydHkiLCJzZXQiLCJSZWZsZWN0Iiwic2FtcGxlIiwic2FtcGxlTGluZXMiLCJzcGxpdCIsImNvbnRyb2xMaW5lcyIsInMiLCJfZnJhbWUiLCJyZXBsYWNlIiwiaW5jbHVkZXMiLCJzeW50aGV0aWNGcmFtZSIsImRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSIsInNob3VsZENvbnN0cnVjdCIsIkNvbXBvbmVudCIsImlzUmVhY3RDb21wb25lbnQiLCJkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYiLCJoYXNPd25Qcm9wZXJ0eSIsImxvZ2dlZFR5cGVGYWlsdXJlcyIsInNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50IiwiZWxlbWVudCIsIm93bmVyIiwiX293bmVyIiwiX3NvdXJjZSIsInNldEV4dHJhU3RhY2tGcmFtZSIsImNoZWNrUHJvcFR5cGVzIiwidHlwZVNwZWNzIiwidmFsdWVzIiwibG9jYXRpb24iLCJjb21wb25lbnROYW1lIiwiaGFzIiwiYmluZCIsInR5cGVTcGVjTmFtZSIsImVycm9yJDEiLCJlcnIiLCJleCIsIm1lc3NhZ2UiLCJpc0FycmF5SW1wbCIsImlzQXJyYXkiLCJhIiwidHlwZU5hbWUiLCJoYXNUb1N0cmluZ1RhZyIsInRvU3RyaW5nVGFnIiwiY29uc3RydWN0b3IiLCJ3aWxsQ29lcmNpb25UaHJvdyIsInRlc3RTdHJpbmdDb2VyY2lvbiIsImUiLCJjaGVja0tleVN0cmluZ0NvZXJjaW9uIiwiUmVhY3RDdXJyZW50T3duZXIiLCJSRVNFUlZFRF9QUk9QUyIsImtleSIsInJlZiIsIl9fc2VsZiIsIl9fc291cmNlIiwic3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24iLCJzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biIsImRpZFdhcm5BYm91dFN0cmluZ1JlZnMiLCJoYXNWYWxpZFJlZiIsImNvbmZpZyIsImdldHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImlzUmVhY3RXYXJuaW5nIiwiaGFzVmFsaWRLZXkiLCJ3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQiLCJzZWxmIiwic3RhdGVOb2RlIiwiZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIiLCJ3YXJuQWJvdXRBY2Nlc3NpbmdLZXkiLCJkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlciIsIndhcm5BYm91dEFjY2Vzc2luZ1JlZiIsIlJlYWN0RWxlbWVudCIsIl9zdG9yZSIsImZyZWV6ZSIsImpzeERFViIsIm1heWJlS2V5IiwicHJvcE5hbWUiLCJkZWZhdWx0UHJvcHMiLCJSZWFjdEN1cnJlbnRPd25lciQxIiwiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxIiwic2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMSIsInByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duIiwiaXNWYWxpZEVsZW1lbnQiLCJvYmplY3QiLCJnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0iLCJnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bSIsIm93bmVySGFzS2V5VXNlV2FybmluZyIsImdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8iLCJwYXJlbnRUeXBlIiwicGFyZW50TmFtZSIsInZhbGlkYXRlRXhwbGljaXRLZXkiLCJ2YWxpZGF0ZWQiLCJjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvIiwiY2hpbGRPd25lciIsInZhbGlkYXRlQ2hpbGRLZXlzIiwibm9kZSIsImNoaWxkIiwiaXRlcmF0b3JGbiIsImVudHJpZXMiLCJzdGVwIiwibmV4dCIsImRvbmUiLCJ2YWxpZGF0ZVByb3BUeXBlcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIl9uYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwiaXNSZWFjdENsYXNzQXBwcm92ZWQiLCJ2YWxpZGF0ZUZyYWdtZW50UHJvcHMiLCJmcmFnbWVudCIsImtleXMiLCJkaWRXYXJuQWJvdXRLZXlTcHJlYWQiLCJqc3hXaXRoVmFsaWRhdGlvbiIsImlzU3RhdGljQ2hpbGRyZW4iLCJ2YWxpZFR5cGUiLCJzb3VyY2VJbmZvIiwidHlwZVN0cmluZyIsImNoaWxkcmVuIiwiZmlsdGVyIiwiayIsImJlZm9yZUV4YW1wbGUiLCJqb2luIiwiYWZ0ZXJFeGFtcGxlIiwianN4V2l0aFZhbGlkYXRpb25TdGF0aWMiLCJqc3hXaXRoVmFsaWRhdGlvbkR5bmFtaWMiLCJqc3giLCJqc3hzIiwibW9kdWxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIiRlbCIsImJsb2NrcyIsImlubmVyQmxvY2tzIiwiYXR0cmlidXRlcyIsImNvbnRlbnQiLCJwbGFjZWhvbGRlciIsImF0dHJzIiwiUmVhY3RET00iLCJfanN4IiwiQmxvY2tQcmV2aWV3Iiwidmlld3BvcnRXaWR0aCIsIm1pbkhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFFQSxJQUFJQSxDQUFDLEdBQUdDLFVBQW9CLENBQUE7RUFJckI7RUFDTCxFQUFBLElBQUlDLENBQUMsR0FBR0YsQ0FBQyxDQUFDRyxrREFBa0QsQ0FBQTtFQUM1REMsbUJBQWtCLEdBQUcsVUFBU0MsQ0FB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
