var selected_charities = 0;
var colors = ['rgba(248,148,69,0.95)','rgba(232,76,60,0.95)','rgba(24,183,88,0.95)','rgba(31,159,202,0.95)']

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
	window.onresize = function () {
		resize_images();
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
	$('.item_cover').each(function (i, o) {
		$(o).css('background-color', colors[parseInt(Math.random()*colors.length)]);
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
			window.open(url, '_blank');
		})
	})
}