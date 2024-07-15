let accordeon = document.querySelectorAll('.accordeon')


accordeon.forEach(el => {
    el.addEventListener('click', (e) => {
        let child = el.querySelector('.accordeon-subtitle')
        if (el.classList.contains('active')) {
            child.style.maxHeight = null
            el.classList.remove('active')
        } else {
            child.style.maxHeight = child.scrollHeight + 'px'
            el.classList.add('active')
        }
    })
})