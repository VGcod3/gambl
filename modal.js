const btns = document.querySelectorAll('.btn')
const tel = document.querySelectorAll('.tel')
const mail = document.querySelectorAll('.mail')

const inputWrapper = document.querySelector('.input-wrapper')
const emailWrapper = document.querySelector('.email-wrapper')

const telInput = inputWrapper.querySelector('#phone')
const mailInput = inputWrapper.querySelector('#email')
const dropdown = document.querySelector('.iti')



btns.forEach(btn => btn.addEventListener('click', (e) => {
    btns.forEach(b => b.classList.remove('active'))

    if (btn == e.target) {
        btn.classList.add('active')
    }

    if (e.target.classList.contains('tel')) {
        inputWrapper.classList.toggle('hide')
        emailWrapper.classList.toggle('hide')
    }

    if (e.target.classList.contains('mail')) {
        inputWrapper.classList.toggle('hide')
        emailWrapper.classList.toggle('hide')
    }

}))