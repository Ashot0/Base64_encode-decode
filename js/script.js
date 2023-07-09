const output = document.querySelector('.display')
const btn = document.querySelector('.encode')
const text = document.getElementById('text-to-encode')
let i = ' '
let q = ' '
function encode() {
	i = text.value
	q = btoa(i)
	output.innerHTML = q;
}
function decode() {
	i = text.value
	q = atob(i)
	output.innerHTML = q;
}