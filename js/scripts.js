var count = 2033;
tick(count, 3199, 3333, ',');

function tick(start, final, end, delimiter) {
    var elemMinted = document.querySelector('.minted');

    elemMinted.innerHTML = 'Minted: ' + numberWithSpaces(count) + ' / ' + numberWithSpaces(end);

    var interval = setInterval(function() {
        if (count >= final) {
            clearInterval(interval);
        }

        count += getRandomIntInclusive(1, 60);
        elemMinted.innerHTML = 'Minted: ' + numberWithSpaces(count) + ' / ' + numberWithSpaces(end);
    }, 2000);

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);
    }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }
}