/*! matchHeights v1.0.0 | (c) 2015 Andrew Carlson | License: https://raw.githubusercontent.com/aicarlson/matchHeights/master/LICENSE.txt */
;(function($) {

	$.fn.matchHeights = function( exact ) {

		var minHeight = function($elements) {

			var height = 0;

			$elements.each(function() {
				height = $(this).outerHeight() > height ? $(this).outerHeight() : height;
			});

			return height;

		};

		var $elements = this.css({
			'min-height': '0',
			'height': 'initial'
		});

		var height = minHeight($elements);

		if( exact === true ) {
			return $elements.css('height', height);
		} else {
			return $elements.css('min-height', height);
		}

	};

}(jQuery));