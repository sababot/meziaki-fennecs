$(function () { // wait for document ready
		var flightpath1 = {
			leave : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 0,	y: 0},
						{x: "1000vw",	y: "-100vh"},
					]
			}
		};

		var flightpath2 = {
			leave : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 0,	y: "100vh"},
						{x: "1000vw",	y: "200vh"},
					]
			}
		};

		// init controller
		var controller = new ScrollMagic.Controller();

		// create tween
		var tween1 = new TimelineMax()
			.add(TweenMax.to($("#bird1"), 1, {css:{bezier:flightpath1.leave}, ease:Power1.easeInOut}));

		var tween2 = new TimelineMax()
			.add(TweenMax.to($("#bird2"), 1, {css:{bezier:flightpath2.leave}, ease:Power1.easeInOut}));

		// build scene
		var scene1 = new ScrollMagic.Scene({triggerElement: "#roadmap", duration: $(window).height() / 1})
						.setTween(tween1)
						.addTo(controller);

		var scene2 = new ScrollMagic.Scene({triggerElement: "#roadmap", duration: $(window).height() / 1})
						.setTween(tween2)
						.addTo(controller);
})