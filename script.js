const sunMoonContainer = document.querySelector('.sun-moon-container')
const bodyClass = document.querySelector('body')

document.querySelector('.theme-toggle-button').addEventListener('click', () => {
    document.body.classList.toggle('dark')
    const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'))
    sunMoonContainer.style.setProperty('--rotation', currentRotation + 180)
    if(bodyClass.classList.contains('dark')){
        document.querySelector('.title').innerHTML = 'Dark Mood On 🌜'
    }
    else {
        document.querySelector('.title').innerHTML = '🌞 Light Mood On'
    }
})