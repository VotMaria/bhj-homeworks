const windows = document.querySelector('#subscribe-modal');
const windowsClose = document.querySelector('.modal__close');

if (!document.cookie.includes('name=CookieClose')) {
	windows.classList.add('modal_active');
}

windowsClose.addEventListener('click', () => {
	windows.classList.remove('modal_active');
	document.cookie = 'name=CookieClose';
})