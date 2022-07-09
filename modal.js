const btns = document.querySelectorAll('.btn')
const tel = document.querySelectorAll('.tel')
const mail = document.querySelectorAll('.mail')

const inputWrapper = document.querySelector('.input-wrapper')
const emailWrapper = document.querySelector('.email-wrapper')

const telInput = inputWrapper.querySelector('#phone')
const mailInput = emailWrapper.querySelector('#email')
const dropdown = document.querySelector('.iti')
const body = document.body;

const sbmt = document.querySelector('.submit')
const thnx = document.querySelector('.thnx')
const form = document.querySelector('form')

sbmt.addEventListener('click', (e) => {
    // e.preventDefault();

    // sentModal()
})

form.addEventListener('submit', e => {
    e.preventDefault();


    sentModal()

})

btns.forEach(btn => btn.addEventListener('click', (e) => {
    btns.forEach(b => b.classList.remove('active'))

    if (btn == e.target) {
        btn.classList.add('active')
    }

    if (e.target.classList.contains('tel')) {
        modalToggle()
    }

    if (e.target.classList.contains('mail')) {
        modalToggle()
    }

}))

function modalToggle() {
    inputWrapper.classList.toggle('hide')
    emailWrapper.classList.toggle('hide')
    body.classList.add('noScroll')
}

function sentModal() {

    if (!telInput.value && !mailInput.value) return;
    thnx.classList.remove('hide')
    sbmt.classList.add('hide')

    document.querySelector('.checks').classList.add('hide')
    document.querySelector('.input-wrapper').classList.add('hide')
    document.querySelector('.email-wrapper').classList.add('hide')
    document.querySelector('.data-type-buttons').classList.add('hide')
}