var selected_charities = 0;
// var colors = ['rgba(248,148,69,0.95)','rgba(232,76,60,0.95)','rgba(24,183,88,0.95)','rgba(31,159,202,0.95)']
// var colors = ['rgba(41,165,243,0.95)','rgba(7,218,196,0.95)','rgba(7,218,126,0.95)'];
var colors = ['rgba(41,165,243,0.95)'];
var sections = ['#projects_container', '#studies_container', '#graphics_container', '#about_container'];
var section_locations = [];
// var colors = ['rgba(248,148,69,0.95)'];

$(document).ready(function () {


	$('.mhidden').each(function (i,o) {
		$(o).css('opacity', '1');
	})
	$('.splash img').each(function(i, o) {
		$(o).css('margin-left', '0px');
		$(o).css('opacity', '0.25');
	})

	// detect_item_hover();
	populate_images();
	resize_images();
	set_background_covers();
	connect_links();
	// make_dots();
	// autoScroll('projects_anchor', 1000, 1000)
	setTimeout(function () {
		set_section_locations();
		update_dots();
	}, 50);

	window.onresize = function () {
		resize_images();
		setTimeout(function () {
			set_section_locations();
			update_dots();
		}, 50);
	}



	window.scroll = function () {
		console.log("going to update dots")
		update_dots();
	}

	setInterval(function () {
		update_dots();
	}, 250)

	viewport = document.querySelector("meta[name=viewport]");
	viewport.setAttribute('content', 'width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;');

	var mobileAndTabletcheck = function() {
	  var check = false;
	  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	  return check;
	}

	if (!mobileAndTabletcheck()) {
		// on a computer
	} else {
		// on a mobile device
		triggerHovers();
	}
})

function autoScroll(target, time, speed) {
	setTimeout(function () {
		$('html, body').animate({
	        scrollTop: $("a[name='"+target+"']").offset().top
	    }, speed);
	}, time)

}

function populate_images() {
	$('.project').each(function (idx, obj) {
		$(obj).css('background', 'url('+$(obj).attr('imgsrc')+')')
				.css('background-size', 'cover')
				.css('background-clip', 'content-box')
				.css('background-repeat', 'no-repeat')
	})
}

function detect_item_hover() {
	$('.item_cover').on('mouseover', function () {
		var $item = $(this);
		$item.find('.item_cover').css('background-position', '0 0');
	})
	$('.item').on('mouseout', function () {
		var $item = $(this)
		$item.find('.item_cover').css('background-position', '0 100');
	})
}

function set_background_covers() {
	// var colors = ['#000'];//['#80ff00', '#ff0080', '#0080ff'];
	// var colors = ['#ff0080', '#0080ff'];
	// var colors = ['f6ccef','f4dcf0'];
	// var colors = ['rgba(248,148,69,0.95)','rgba(232,76,60,0.95)','rgba(24,183,88,0.95)','rgba(31,159,202,0.95)']
	var idx=0;
	$('.projects_col').each(function (i, p) {
		$(p).find('.item_cover').each(function (i, o) {
			$(o).css('background-color', colors[idx]);
		})
		idx = (idx+1)%colors.length;
	})
}

function resize_images() {
	$('.item_box').each(function (i, o) {
		$(o).css('height', $(o).width()+'px');
	})
}

function make_dots() {
	var makeDot = function (c) {
		return "<div class='dot' style='background-color: "+c+";'></div>"
	}

	$('.section_name').each(function (i, o) {
		for (var i=0; i<4; i++) {
			$(o).append(makeDot(colors[i]))
		}
	})
}

function connect_links() {
	$('.item_box').each(function (i, o) {
		$(o).on('click', function () {
			var url = $(this).attr('url');
			if (url.trim().length > 0) {
				document.location.href = url;
			}
		})
	})
}

function triggerHovers() {
	$('.item_cover').each(function (i, o) {
		$(o).addClass('item_cover_hover');
	})
}

function set_section_locations() {
	section_locations = [0];
	for (var idx in sections) {
		section_locations.push($(sections[idx]).offset().top);
	}
}

function update_dots() {
	var dot_idx = -1;
	var curr_scroll_y = window.scrollY;
	for (var i=sections.length; i>=0; i--) {
		if (curr_scroll_y >= section_locations[i]) {
			$('.dot').each(function (idx, o) {
				$(o).removeClass('dot_selected');
			})
			$($('.dot')[i]).addClass('dot_selected');
			return;
		}
	}
	$('.dot').each(function (idx, o) {
		$(o).removeClass('dot_selected');
	})
}
