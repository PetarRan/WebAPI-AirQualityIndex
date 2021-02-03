const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLink = document.getElementsByClassName('collapse-navbar')[0]

toggleButton.addEventListener('click', () => {
    navBarLink.classList.toggle('active')
})