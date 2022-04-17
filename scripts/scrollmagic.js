$(function() {
  var controller = new ScrollMagic.Controller();

  // Scroll
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target1",
    duration: jQuery(window).height()
  })
  .setTween("#story_heading", 0.5, {y: 600})
  .addTo(controller);

  // Mountain 1
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target2",
    duration: (jQuery(window).height() * 3)
  })
  .setTween("#back_img1", 0.5, {y: 600})
  .addTo(controller);

  // Mountain2
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target3",
    duration: (jQuery(window).height() * 4.5)
  })
  .setTween("#back_img2", 0.5, {y: 600})
  .addTo(controller);

  // Mountain 3
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target4",
    duration: (jQuery(window).height() * 6)
  })
  .setTween("#back_img3", 0.5, {y: 600})
  .addTo(controller);

  // Mountain 4
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target5",
    duration: (jQuery(window).height() * 7)
  })
  .setTween("#back_img4", 0.5, {y: 600})
  .addTo(controller);

  // Mountain 5
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target6",
    duration: (jQuery(window).height() * 8)
  })
  .setTween("#back_img5", 0.5, {y: 600})
  .addTo(controller);

  // Mountain 6
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target7",
    duration: (jQuery(window).height() * 9)
  })
  .setTween("#back_img6", 0.5, {y: 600})
  .addTo(controller);

  // Mountain 7
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target8",
    duration: (jQuery(window).height() * 18)
  })
  .setTween("#back_img7", 0.5, {y: 750})
  .addTo(controller);

  // Cloud 1
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target3",
    duration: (jQuery(window).height() * 6)
  })
  .setTween("#back_back3", 0.5, {x: 500})
  .addTo(controller);

  // Cloud 2
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target3",
    duration: (jQuery(window).height() * 6)
  })
  .setTween("#back_back4", 0.5, {x: -500})
  .addTo(controller);

  // Cloud 3
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target3",
    duration: (jQuery(window).height() * 2)
  })
  .setTween("#back_back5", 0.5, {x: -500})
  .addTo(controller);

  // Cloud 4
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target3",
    duration: (jQuery(window).height() * 4)
  })
  .setTween("#back_back6", 0.5, {x: -500})
  .addTo(controller);

  // Cloud 5
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target3",
    duration: (jQuery(window).height() * 1)
  })
  .setTween("#back_back7", 0.5, {x: 500})
  .addTo(controller);

  // Cloud 6
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target3",
    duration: (jQuery(window).height() * 5)
  })
  .setTween("#back_back8", 0.5, {x: 500})
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

  // Sun
  var scene = new ScrollMagic.Scene({
    triggerElement: "#target3",
    duration: (jQuery(window).height() * 3)
  })
  .setTween("#sun", 0.5, {y: 0})
  .addTo(controller);
});