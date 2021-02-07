$(document).ready(function(){
	//navigation
	var url = window.location.pathname;
	var urlName = url.replace('/', '').split('.')[0];

	$('.gnb').each(function () {
		var ref = $(this).children('button').attr('ref');

		if (urlName.indexOf(ref) != -1) {
			$(this).addClass('active');
			$(this).find('.lnb_wrap').addClass('active')
		}

		$(this).on('click', function() {
			if ($(this).children().hasClass('lnb_wrap')) {
				$(this).addClass('active');
				$(this).find('.lnb_wrap').addClass('active');
				$('.gnb').not($(this)).removeClass('active').find('.lnb_wrap').removeClass('active');
				return true;
			} else {
				$('.gnb_wrap').removeClass('active');
				return false;
			}
		});
	});
	$('.lnb').each(function () {
		var href = $(this).find('a').attr('href');

		if (href != undefined) {
			href = href.split('.')[0]
		}
		if (urlName.indexOf(href) != -1) {
			$(this).addClass('active');
		}
	});
	$('.btn_back').on('click', function(){
		$('.gnb_wrap').removeClass('active');
		$('.lnb_wrap').removeClass('active');
		$('.lnb').removeClass('active');
		return false;
	});

	//popup open
	$('[data-popup-open]').on('click', function(e)  {
		var targeted_popup_class = $(this).attr('data-popup-open');
		$('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
		e.preventDefault();
	});
	//popup close
	$('[data-popup-close]').on('click', function(e)  {
		var targeted_popup_class = $(this).attr('data-popup-close');
		$('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
		e.preventDefault();
	});

	// 텍스트 사이즈
	$(".control_text").on("click", function () {
		$('html, body').toggleClass('controlFontSize');
	});

	//slider
	$('#visual_slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		dots: true,
	});

	$("#info_slider").slick({
		vertical: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		verticalSwiping: true
	});

	$(".room_view").slick({
		autoplay: true,
		slidesToShow: 1,
		arrows: false,
		asNavFor: '.rooms'
	});

	$(".rooms").slick({
		slidesToShow: 6,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.room_view'
	});


});

var nowZoom = 100;

function zoomOut() {
	nowZoom = nowZoom - 10;
	if(nowZoom <= 100) nowZoom = 100;
	zooms();
}
function zoomIn() {
	nowZoom = nowZoom + 10;
	if(nowZoom >= 200) nowZoom = 200;
	zooms();
}
function zooms() {
	var wrapper = document.getElementById('zoom');
			wrapper.style.width = nowZoom + "%";
			wrapper.style.height = nowZoom + "%";
			wrapper.style.zoom = nowZoom + "%";

	if(nowZoom === 200) {
		alert("더 이상 확대할 수 없습니다.");
	}
}
