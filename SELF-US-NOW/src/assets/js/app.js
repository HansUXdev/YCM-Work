$(document).foundation();


// jQuery(".main-title").fitText();
/////////////////////////////
// Responsive Text
/////////////////////////////
	jQuery(".our-partners-row .title").fitText(1.2, { minFontSize: '20px', maxFontSize: '40px' });

	jQuery(".partners-title").fitText(1.2, { minFontSize: '14px', maxFontSize: '40px' });




$(function () {
    // $('.tlt').textillate();
    // $( "#mydiv" ).css( "color", "white" );


	$('.animated-text').textillate({
	  // sets the initial delay before starting the animation
	  // (note that depending on the in effect you may need to manually apply 
	  // visibility: hidden to the element before running this plugin)
	  initialDelay: 0,
	  // in animation settings
	  in: {
	    // set the effect name
	    effect: 'fadeInRightBig',
	    // set the delay factor applied to each consecutive character
	    // delayScale: 1.5,
	    // set the delay between each character
	    // delay: 150,
	  },
	  type: 'word'
	});
	$('.animated-first').textillate({
	  // sets the initial delay before starting the animation
	  // (note that depending on the in effect you may need to manually apply 
	  // visibility: hidden to the element before running this plugin)
	  initialDelay: 750,
	  // in animation settings
	  in: {
	    // set the effect name
	    effect: 'fadeInLeftBig',
	    // set the delay factor applied to each consecutive character
	    delayScale: 1.5,
	    // set the delay between each character
	    delay: 150,
	  },
	  type: 'char'
	});

	$('.animated-second').textillate({
	  initialDelay: 1500,
	  in: {
	    effect: 'fadeInLeftBig',
	    delayScale: 1.5,
	    delay: 150,
	  },
	  type: 'char'
	});

	$('.animated-third').textillate({
	  initialDelay: 2000,
	  in: {
	    effect: 'fadeInLeftBig',
	    // delayScale: 1.5,
	    // delay: 150,
	  },
	  type: 'char'
	});

	//////////////////////////////////////////////////////////
	// 					MODEL TEXT Animations
	//////////////////////////////////////////////////////////
	// 	TO-DO
	// 		1). Trigger only when the model opens
	//////////////////////////////////////////////////////////



$( ".bernie-img" ).click(function() {
  // alert( "Handler for .click() called." );
	$('.benie-header').textillate({
	  initialDelay: 500,

	  // in: {
	  //   effect: ' slide-in-up mui-enter',
	  //   // delayScale: 1.5,
	  //   // delay: 150,
	  // },
	  type: 'char'
	});
});


});