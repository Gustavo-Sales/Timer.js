function timer() {

    const time = document.querySelector('#time');

    let seconds = 0;
    let timer;

    function getTimeFromSeconds(seconds) {
        const date = new Date(seconds * 1000);

        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function startTimer() {
        timer = setInterval(() => {
            seconds++;
            time.textContent = getTimeFromSeconds(seconds)
        }, 1000)
    }

    document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.id === 'startBtn') {
            startTimer();
            startBtn.style.display = 'none';
            pauseBtn.style.display = 'block';
            time.classList.remove('pause');
        }

        if (el.id === 'pauseBtn') {
            clearInterval(timer)
            time.classList.add('pause')
            startBtn.style.display = 'block';
            startBtn.textContent = 'Continuar';
            pauseBtn.style.display = 'none';
        }

        if (el.id === 'resetBtn') {
            clearInterval(timer);
            seconds = 0;
            time.textContent = '00:00:00';
            time.classList.remove('pause')
            startBtn.style.display = 'block'
            startBtn.textContent = 'Iniciar';
            pauseBtn.style.display = 'none';
        }
    })
}

timer()
