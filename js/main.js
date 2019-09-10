const checkbox = document.querySelector('input[name=theme]')

checkbox.addEventListener('change', function() {
    if(this.checked) {
        transition()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        transition()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

const transition = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}