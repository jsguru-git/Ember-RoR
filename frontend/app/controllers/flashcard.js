import Controller from '@ember/controller';

export default Controller.extend({

	'autoplay': true,
	breakpoints: [
		{
		  'breakpoint': 1024,
		  'settings': {
		    'slidesToShow': 3,
		    'slidesToScroll': 3,
		    'infinite': true
		  }
		},
		{
		  'breakpoint': 600,
		  'settings': {
		    'slidesToShow': 2,
		    'slidesToScroll': 2
		  }
		},
		{
		  'breakpoint': 480,
		  'settings': {
		    'slidesToShow': 1,
		    'slidesToScroll': 1
		  }
		}
	]
});
