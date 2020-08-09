

// popup
let modal = document.querySelector('.modal')
let open = document.querySelector('#open')
let close = document.querySelector('#close')

open.onclick = () => {
	modal.style.display = 'block'
}
close.onclick = () => {
	modal.style.display = 'none'
}
window.onclick = (e) => {
	if (e.target === modal) {
		modal.style.display = 'none'
	}
}
//===========

$(document).ready(function () {


	$('#sendbnt').click(function () {

		var name = $('#name').val();
		var phone = $('#phone').val();

		if ((name == "") || (phone == "")) {
			alert('Заполните поля');
		}

		else {
			$.post('./send.php', { func: 'send', name: name, phone: phone }, function () {
				$('.modal_mess').fadeIn().delay(2000).fadeOut();
				setTimeout(function () { window.location.reload(); }, '3000');
			});
		}
	});
	$('#sendbnt2').click(function () {

		var name = $('#name2').val();
		var phone = $('#phone2').val();
		if ((name == "") || (phone == "")) {
			alert('Заполните поля');
		}

		else {
			$.post('./send.php', { func: 'send', name: name, phone: phone }, function () {
				$('.modal_mess').fadeIn().delay(2000).fadeOut();
				setTimeout(function () { window.location.reload(); }, '3000');
			});
		}
	});

	$('#sendmod').click(function () {

		var name = $('#namemod').val();
		var phone = $('#phonemod').val();

		if ((name == "") || (phone == "")) {
			alert('Заполните поля');
		}

		else {
			$.post('./send.php', { func: 'send', name: name, phone: phone }, function () {
				$('.modal_mess').fadeIn().delay(2000).fadeOut();
				setTimeout(function () { window.location.reload(); }, '3000');
			});
		}
	});

});

