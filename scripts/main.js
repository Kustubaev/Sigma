const company = document.querySelectorAll('.company')
if (company) {
	company.forEach((element) => {
		element.addEventListener('click', (event) => {
			const link = event.target.firstElementChild
			window.open(link.href, link.target)
		})
	})
}

const manager = document.getElementById('manager')
const security = document.getElementById('security')
const request = document.getElementById('request')


if (manager && security) {
	manager.addEventListener('click', () => {
		if (![...manager.classList].includes('active')) {
			manager.classList.add('active')
			security.classList.remove('active')
		}
		request.href = 'https://www.magnitogorsk.ru'
	})

	security.addEventListener('click', () => {
		if (![...security.classList].includes('active')) {
			security.classList.add('active')
			manager.classList.remove('active')
		}
		request.href = 'https://antares11.ru/'
	})
}
