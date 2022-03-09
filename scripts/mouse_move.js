const h2s = document.querySelector('.mouse_move')
        window.addEventListener('mousemove', (evt) => {
            const x = (window.innerWidth / 2 - evt.pageX) / 20
            const y = (window.innerHeight / 2 - evt.pageY + window.pageYOffset) / 20
            h2s.style.transform = `translateY(${y}px) translateX(${x}px)`
        })