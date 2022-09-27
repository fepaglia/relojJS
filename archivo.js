
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

    //funcion para que marque la hora correcta, junto con las manecillas y su posicion
    function setDate() {
        const now = new Date();

        // segundero
        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        // minutero
        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6 ) + 90;
        minsHand.style.transform = `rotate(${minsDegrees}deg)`;
        // hora
        const hour = now.getHours();
        const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    setInterval(setDate, 1000);

    setDate(); 
 