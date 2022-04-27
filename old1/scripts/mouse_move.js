// Intro
const h2s = document.querySelector('.mouse_move')
    window.addEventListener('mousemove', (evt) => {
        const x = (window.innerWidth / 2 - evt.pageX) / 20
        const y = (window.innerHeight / 2 - evt.pageY + window.pageYOffset) / 20
        h2s.style.transform = `translateY(${y}px) translateX(${x}px)`
})

// Story
const story_heading = document.getElementById('story_heading')
    window.addEventListener('mousemove', (evt) => {
        const x = (window.innerWidth / 2 - evt.pageX) / 20
        const y = (window.innerHeight / 2 - evt.pageY + window.pageYOffset) / 20
        story_heading.style.transform = `translateY(${y}px) translateX(${x}px)`
})

const story_body = document.getElementById('story_body')
    window.addEventListener('mousemove', (evt) => {
        const x = (window.innerWidth / 2 - evt.pageX) / 20
        const y = (window.innerHeight / 2 - evt.pageY + window.pageYOffset) / 20
        story_body.style.transform = `translateY(${y}px) translateX(${x}px)`
})

// Roadmap
const roadmap_heading = document.getElementById('roadmap_heading')
    window.addEventListener('mousemove', (evt) => {
        const x = (window.innerWidth / 2 - evt.pageX) / 20
        const y = (window.innerHeight / 2 - evt.pageY + window.pageYOffset) / 20
        roadmap_heading.style.transform = `translateY(${y}px) translateX(${x}px)`
})

const roadmap_body = document.getElementById('roadmap_body')
    window.addEventListener('mousemove', (evt) => {
        const x = (window.innerWidth / 2 - evt.pageX) / 20
        const y = (window.innerHeight / 2 - evt.pageY + window.pageYOffset) / 20
        roadmap_body.style.transform = `translateY(${y}px) translateX(${x}px)`
})

// Utility
const utility_heading = document.getElementById('utility_heading')
    window.addEventListener('mousemove', (evt) => {
        const x = (window.innerWidth / 2 - evt.pageX) / 20
        const y = (window.innerHeight / 2 - evt.pageY + window.pageYOffset) / 20
        utility_heading.style.transform = `translateY(${y}px) translateX(${x}px)`
})

const utility_body = document.getElementById('utility_body')
    window.addEventListener('mousemove', (evt) => {
        const x = (window.innerWidth / 2 - evt.pageX) / 20
        const y = (window.innerHeight / 2 - evt.pageY + window.pageYOffset) / 20
        utility_body.style.transform = `translateY(${y}px) translateX(${x}px)`
})