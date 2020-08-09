

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
