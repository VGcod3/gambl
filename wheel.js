(function () {
    const wheel = document.querySelector('.wheel')
    const startButton = document.querySelector('.button')

    const body = document.body;

    const inputWrapper = document.querySelector('.input-wrapper')
    const emailWrapper = document.querySelector('.email-wrapper')



    let deg = 0;
    let spins = 2;
    let zoneSize = 36; // deg

    // Counter clockwise
    const symbolSegments = {
        1: "NO WIN",
        2: "PIN UP",
        3: "50 free spins",
        4: "100 000  bonus USD",
        5: "100 free spins",

        6: "NO WIN",
        7: "PIN UP",
        8: "500 bonus USD",
        9: "2 500 bonus USD",
        10: "250 free spins",
    }

    const wrapNumber = (str) => {
        // let str = srt;

        let arr = str.split(' ');

        let res = arr.map(word => {

            if (!isNaN(+word)) {
                return `<span class="number">${word}</span>`
            }
            return word;

        }).join(' ');

        return res;
    }

    const showPopup = (winningSymbolNr) => {
        const left = document.querySelector('.popup-left');
        const prize = left.querySelector('span')

        left.classList.add('show')

        prize.innerHTML = wrapNumber(symbolSegments[winningSymbolNr])
    }

    const showSecondPopup = (winningSymbolNr) => {
        const left = document.querySelector('.popup-right');
        const prize = left.querySelector('span')

        left.classList.add('show')

        prize.innerHTML = wrapNumber(symbolSegments[winningSymbolNr])
    }


    const showModal = () => {
        const modalForm = document.querySelector('.modal-wrapper');
        modalForm.classList.add('show')
        // const socialForm = document.querySelector('.social-wrapper');
        // socialForm.classList.add('show')

        body.classList.add('noScroll')
        inputWrapper.classList.add('scroll')
        emailWrapper.classList.add('scroll')

    }

    const handleWin = (actualDeg) => {
        let winningSymbolNr = Math.ceil(actualDeg / zoneSize);

        spins--;
        if (winningSymbolNr == 0) winningSymbolNr = 10;

        switch (spins) {
            case 1:
                setTimeout(() => showPopup(winningSymbolNr), 300)
                break;

            default:
                startButton.removeEventListener('click', spin)
                setTimeout(() => {
                    showSecondPopup(winningSymbolNr)
                }, 300)
                setTimeout(() => {
                    showModal()
                }, 650)
                break;
        }
    }

    const spin = () => {
        // Disable button during spin
        startButton.style.pointerEvents = 'none';

        // Calculate a new rotation between 5000 and 10 000
        deg = (36 * Math.floor(10 * Math.random())) + 3600;
        // deg = Math.floor(5000 + Math.random() * 5000);
        // deg = 36 * 4;

        // Set the transition on the wheel
        wheel.style.transition = 'all 5s ease-out';

        // Rotate the wheel
        wheel.style.transform = `rotate(${deg}deg)`;

        // Apply the blur
        wheel.classList.add('blur');
    }

    const wheelToUsual = () => {
        // Remove blur
        wheel.classList.remove('blur');
        // Enable button when spin is over
        startButton.style.pointerEvents = 'auto';
        // Need to set transition to none as we want to rotate instantly
        wheel.style.transition = 'none';
        // Calculate degree on a 360 degree basis to get the "natural" real rotation
        // Important because we want to start the next spin from that one
        // Use modulus to get the rest value
        const actualDeg = deg % 360;
        // Set the real rotation instantly without animation
        wheel.style.transform = `rotate(${actualDeg}deg)`;
        // Calculate and display the winning symbol
        handleWin(actualDeg);
    }

    startButton.addEventListener('click', spin);

    wheel.addEventListener('transitionend', wheelToUsual);
})();
