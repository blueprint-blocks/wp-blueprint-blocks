(function (hooks) {
	'use strict';

	function convertDomNodesToTokenizedString() {
	  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  if (typeof string !== 'string') {
	    return string;
	  }
	  var _string = string.replaceAll(/<span data-type=\"token\">\s?(.*?)<\/span>/g, function (match, p1) {
	    return "{{ ".concat(p1.trim(), " }}");
	  });
	  _string = _string.replaceAll(/<span data-type=\"cursor-start\">(.*?)<\/span>/g, function (match, p1) {
	    return p1;
	  });
	  _string = _string.replaceAll(/<span data-type=\"cursor-end\"> <\/span>/g, function (match) {
	    return '';
	  });
	  _string = _string.replaceAll(/<span data-type=\"cursor-end\">\s(.*?)<\/span>/g, function (match, p1) {
	    return p1;
	  });
	  return _string;
	}

	function convertTokenizedStringToDomNodes() {
	  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  if (typeof string !== 'string') {
	    return string;
	  }
	  var _string = string;
	  console.log(_string);
	  if (string.slice(0, 2) === '{{') {
	    _string = "<span data-type=\"cursor-start\"> </span>".concat(_string);
	  }
	  _string = _string.replaceAll(/\{\{(.*?)\}\}/g, function (match, p1) {
	    return "<span data-type=\"token\"> ".concat(p1.trim(), "</span><span data-type=\"cursor-end\"> </span>");
	  });
	  return _string;
	}

	hooks.addFilter('blueprint-blocks.editable-string.value.before-render', 'blueprint-blocks-pro', function (value) {
	  return convertTokenizedStringToDomNodes(value);
	});
	hooks.addFilter('blueprint-blocks.editable-string.value.before-on-change', 'blueprint-blocks-pro', function (value) {
	  return convertDomNodesToTokenizedString(value);
	});

})(wp.hooks);
