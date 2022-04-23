$(function() {
  var controller = new ScrollMagic.Controller();

  // Scroll
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target1",
    duration: (jQuery(window).height() * 2)
  })
  .setTween("#intro_text", 0.5, {y: jQuery(window).height()})
  .addTo(controller);

  // Mountain 1
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target3",
    duration: (jQuery(window).height() * 3)
  })
  .setTween("#back_img1", 0.5, {y: jQuery(window).height()})
  .addTo(controller);

  // Mountain2
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target3",
    duration: (jQuery(window).height() * 4.5)
  })
  .setTween("#back_img2", 0.5, {y: jQuery(window).height()})
  .addTo(controller);

  // Mountain 3
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target4",
    duration: (jQuery(window).height() * 6)
  })
  .setTween("#back_img3", 0.5, {y: jQuery(window).height()})
  .addTo(controller);

  // Mountain 4
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target5",
    duration: (jQuery(window).height() * 7)
  })
  .setTween("#back_img4", 0.5, {y: jQuery(window).height()})
  .addTo(controller);

  // Mountain 5
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target6",
    duration: (jQuery(window).height() * 8)
  })
  .setTween("#back_img5", 0.5, {y: jQuery(window).height()})
  .addTo(controller);

  // Mountain 6
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target7",
    duration: (jQuery(window).height() * 9)
  })
  .setTween("#back_img6", 0.5, {y: jQuery(window).height()})
  .addTo(controller);

  // Mountain 7
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target8",
    duration: (jQuery(window).height() * 12)
  })
  .setTween("#back_img7", 0.5, {y: jQuery(window).height()})
  .addTo(controller);

  // Bird 1
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target2",
    duration: (jQuery(window).height() * 4)
  })
  .setTween("#bird1", 0.5, {x: 1000, y: -250})
  .addTo(controller);

  // Bird 2
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target3",
    duration: (jQuery(window).height() * 3)
  })
  .setTween("#bird2", 0.5, {x: 1000, y: -250})
  .addTo(controller);

  // Sun Move
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target3",
    duration: (jQuery(window).height() * 3)
  })
  .setTween("#sun", 0.5, {y: 0})
  .addTo(controller);

  // Sun Expand 1
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target10",
    duration: (jQuery(window).height() * 3)
  })
  .setTween("#sun", 0.5, {width: '30vw', height: '30vw'})
  .addTo(controller);

  // Sun Expand 2
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target14",
    duration: (jQuery(window).height() * 5)
  })
  .setTween("#sun", 0.5, {width: '125vw', height: '125vw'})
  .addTo(controller);

  // Sun Expand 3
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target14",
    duration: (jQuery(window).height() * 6)
  })
  .setTween("#sun", 0.5, {borderRadius: '0%'})
  .addTo(controller);

  // Sun Color
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target15",
    duration: (jQuery(window).height() * 2)
  })
  .setTween("#sun", 0.5, {backgroundColor: '#97cded'})
  .addTo(controller);

  // Cloud 1 / 1
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target15",
    duration: (jQuery(window).height() * 5)
  })
  .setTween("#cloud1", 0.5, {x: '-100%'})
  .addTo(controller);

  // Cloud 2 / 1
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target15",
    duration: (jQuery(window).height() * 4)
  })
  .setTween("#cloud2", 0.5, {x: '100%'})
  .addTo(controller);

  // Cloud 3 / 1
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target15",
    duration: (jQuery(window).height() * 6)
  })
  .setTween("#cloud3", 0.5, {x: '100%'})
  .addTo(controller);

  // Cloud 4 / 1
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target15",
    duration: (jQuery(window).height() * 3)
  })
  .setTween("#cloud4", 0.5, {x: '100%'})
  .addTo(controller);

  // Cloud 5 / 1
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target15",
    duration: (jQuery(window).height() * 6)
  })
  .setTween("#cloud5", 0.5, {x: '-100%'})
  .addTo(controller);

  // Cloud 6 / 1
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target15",
    duration: (jQuery(window).height() * 5)
  })
  .setTween("#cloud6", 0.5, {x: '-100%'})
  .addTo(controller);

  // Cloud 1 / 2
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target17",
    duration: (jQuery(window).height() * 5)
  })
  .setTween("#cloud1", 0.5, {y: '100%'})
  .addTo(controller);

  // Cloud 2 / 2
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target17",
    duration: (jQuery(window).height() * 9)
  })
  .setTween("#cloud2", 0.5, {y: '100%'})
  .addTo(controller);

  // Cloud 3 / 2
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target17",
    duration: (jQuery(window).height() * 6.5)
  })
  .setTween("#cloud3", 0.5, {y: '100%'})
  .addTo(controller);

  // Cloud 4 / 2
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target17",
    duration: (jQuery(window).height() * 7.5)
  })
  .setTween("#cloud4", 0.5, {y: '100%'})
  .addTo(controller);

  // Cloud 5 / 2
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target17",
    duration: (jQuery(window).height() * 7.5)
  })
  .setTween("#cloud5", 0.5, {y: '100%'})
  .addTo(controller);

  // Cloud 6 / 2
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target17",
    duration: (jQuery(window).height() * 7)
  })
  .setTween("#cloud6", 0.5, {y: '100%'})
  .addTo(controller);

  // Sun Color
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target18",
    duration: (jQuery(window).height() * 5)
  })
  .setTween("#sun", 0.5, {backgroundColor: '#002123'})
  .addTo(controller);

  // Stars 1
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target18",
    duration: (jQuery(window).height() * 5)
  })
  .setTween("#stars11", 0.5, {opacity: '1', y: '100%'})
  .addTo(controller);

  // Stars 2
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target18",
    duration: (jQuery(window).height() * 5)
  })
  .setTween("#stars12", 0.5, {opacity: '1', y: '100%'})
  .addTo(controller);

  // Stars 3
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target18",
    duration: (jQuery(window).height() * 5)
  })
  .setTween("#stars13", 0.5, {opacity: '1', y: '0%'})
  .addTo(controller);

  // Stars 4
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target18",
    duration: (jQuery(window).height() * 5)
  })
  .setTween("#stars21", 0.5, {opacity: '1', y: '0%'})
  .addTo(controller);

  // Stars 5
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target18",
    duration: (jQuery(window).height() * 5)
  })
  .setTween("#stars22", 0.5, {opacity: '1', y: '0%'})
  .addTo(controller);

  // Stars 6
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target18",
    duration: (jQuery(window).height() * 5)
  })
  .setTween("#stars23", 0.5, {opacity: '1', y: '0%'})
  .addTo(controller);

  // Shooting Star
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target18",
    duration: (jQuery(window).height() * 7.5)
  })
  .setTween("#shooting-star", 0.5, {x: '-375%', y: '-100vw'})
  .addTo(controller);

  // Story 1
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target14-5",
    duration: (jQuery(window).height() * 2)
  })
  .setTween("#story", 0.5, {opacity: '1'})
  .addTo(controller);

  // Story 2
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target15",
    duration: (jQuery(window).height() * 2)
  })
  .setTween("#story", 0.5, {opacity: '0'})
  .addTo(controller);

  // Story 1
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target15",
    duration: (jQuery(window).height() * 4)
  })
  .setTween("#utility", 0.5, {y: '75%'})
  .addTo(controller);

  // Story 2
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target17",
    duration: (jQuery(window).height() * 4)
  })
  .setTween("#utility", 0.5, {y: '350%'})
  .addTo(controller);

  // Roadmap 1
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target17",
    duration: (jQuery(window).height() * 9)
  })
  .setTween("#roadmap", 0.5, {y: '10%'})
  .addTo(controller);
});