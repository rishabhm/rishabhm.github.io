var selected_charities = 0;

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
	set_background_covers();
	// autoScroll('projects_anchor', 1000, 1000)
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
	var colors = ['#ff0080', '#0080ff'];
	var idx=0;
	$('.item_cover').each(function (i, o) {
		$(o).css('background-color', colors[idx]);
		idx = (idx+1)%colors.length;
	})
}