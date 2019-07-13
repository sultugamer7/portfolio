const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "python",
				weight: 15
			}, {
				text: "bootstrap",
				weight: 8
			}, {
				text: "django",
				weight: 14
			}, {
				text: "css3",
				weight: 7
			}, {
				text: "java",
				weight: 7
			}, {
				text: "flask",
				weight: 10
			}, {
				text: "sql",
				weight: 9
			}, {
				text: "javascript",
				weight: 12.3
			}, {
				text: "c",
				weight: 4
			}, {
				text: "html",
				weight: 8
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Developer.", "love to code.", "also like to teach programming.", "am a problem solver."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
