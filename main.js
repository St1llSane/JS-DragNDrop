const item = document.querySelector('.item')
const placeholder = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)


function dragstart(event) {
	event.target.classList.add('hold')
	setTimeout(() => event.target.classList.add('hide'), 0)

	placeholder.forEach((placeholderEvent) => {
		placeholderEvent.classList.add('dragover')
	})
}
function dragend(event) {
	event.target.classList.remove('hold')
	setTimeout(() => event.target.classList.remove('hide'), 0)

	placeholder.forEach((placeholderEvent) => {
		placeholderEvent.classList.remove('dragover')
	})
}


placeholder.forEach((placeholder) => {
	placeholder.addEventListener('dragover', dragover)
	placeholder.addEventListener('dragenter', dragenter)
	placeholder.addEventListener('dragleave', dragleave)
	placeholder.addEventListener('drop', dragdrop)
})

function dragover(event) {
	event.preventDefault()
}
function dragenter(event) {
	event.target.classList.add('dragenter')
}
function dragleave(event) {
	event.target.classList.remove('dragenter')
}
function dragdrop(event) {
	event.target.append(item)
}