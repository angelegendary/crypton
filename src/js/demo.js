
// var set_locale_to = function(locale) {
// 	if (locale)
// 	  $.i18n().locale = locale;
//   };

//   jQuery(function() {
// 	$.i18n().load( {
// 		'sk': './i18n/sk.json',
// 	  'en': 'js/i18n/en.json'
// 	} ).done(function() {
// 	  set_locale_to(url('?locale'));

// 	  History.Adapter.bind(window, 'statechange', function(){
// 		set_locale_to(url('?locale'));
// 	  });

// 	  $('.switch-locale').on('click', 'a', function(e) {
// 		e.preventDefault();
// 		History.pushState(null, null, "?locale=" + $(this).data('locale'));
// 	  });
// 	});
//   });

//   var set_locale_to = function(locale) {
// 	if (locale) {
// 	  $.i18n().locale = locale;
// 	}
// 	$('body').i18n();
//   };
import data from './i18n/sk.json'