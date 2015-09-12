images = [];
image_idx=0;
playing = false;
main_loop = 0;

$(document).ready(function () {
	
	images = $('.image');

	play();

	createDots();

	activate_dot();

	$('.dot').on('click', function (a,b,c) {
		var new_idx = $(this).index();
		jumpToImage(new_idx);
	})

	$('.play').on('click', function () {play();})
	$('.pause').on('click', function () {pause();})

	// $('.next').on('click', function () {
	// 	moveImage(1);
	// });
	// $('.prev').on('click', function () {
	// 	moveImage(-1);
	// });

})

function moveImage(d) {

	var $curr_image = $(images[image_idx]);
	image_idx = (image_idx + d)%images.length
	var	$next_image = $(images[image_idx]);

	$curr_image.css('opacity', '0');
	// $('.images_container').css('padding-top', (d * 100).toString() + '%');
	setTimeout(function () {
		// $curr_image.css('display','none');
		$next_image.css('opacity', '1');
	}, 0)

	activate_dot();

}

function createDots() {

	var makeDot = function () {
		return "<div class='dot'></div>"
	}

	for (var i=0; i<images.length; i++) {
		$('.dots').append(makeDot());
	}
}

function activate_dot() {
	$('.dot').removeClass('active_dot');
	$($('.dot')[image_idx]).addClass('active_dot');
}

function jumpToImage(n) {
	var $curr_image = $(images[image_idx]);
	image_idx = n;
	var $next_image = $(images[image_idx]);
	$curr_image.css('opacity', '0');
	// $('.images_container').css('padding-top', (d * 100).toString() + '%');
	setTimeout(function () {
		// $curr_image.css('display','none');
		$next_image.css('opacity', '1');
	}, 0)

	activate_dot();
	pause();
}

function play() {
	
	if (playing) return;

	setTimeout(function () {
		$(images[image_idx]).css('opacity', '1');
	}, 50)

	main_loop = setInterval(function () {
		moveImage(1);
	}, 5000)

	$('.play').css('opacity', '0.2');
	$('.pause').css('opacity', '1');

	playing = true;
}

function pause() {
	if (!playing) return
	
	clearInterval(main_loop);

	$('.play').css('opacity', '1');
	$('.pause').css('opacity', '0.2');

	playing = false;
}