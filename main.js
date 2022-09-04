/**importar JSON */

import data from './data.json' assert {type: 'json'};

console.log(data);

let backgroundColors = [
    'hsl(15, 100%, 70%)', /* (work) */
    'hsl(195, 74%, 62%)', /* (play) */
    'hsl(348, 100%, 68%)', /* (study) */
    'hsl(145, 58%, 55%)', /* (exercise) */
    'hsl(264, 64%, 52%)', /* (social) */
    'hsl(43, 84%, 65%)' /* (self care) */
]

let dailyArray = data.map(item => item.timeframes.daily);
let weeklyArray = data.map(item => item.timeframes.weekly);
let monthlyArray = data.map(item => item.timeframes.monthly);

let dailyBtn = document.querySelector('#daily');
let weeklyBtn = document.querySelector('#weekly');
let monthlyBtn = document.querySelector('#monthly');

let secondSection = document.querySelector('.second-section');

drawElements(dailyArray);

dailyBtn.addEventListener('click', () => {
    console.log('Click Daily');
    drawElements(dailyArray);
})

weeklyBtn.addEventListener('click', () => {
    console.log('Click Weekly');
    drawElements(weeklyArray);
})

monthlyBtn.addEventListener('click', () => {
    console.log('Click monthly');
    drawElements(monthlyArray);
})

function drawElements(array){
    secondSection.innerHTML = '';
    array.forEach((element, index) => {                
        secondSection.innerHTML +=

            `<div class="card">
                <div class="card__background" style="background-color: ${backgroundColors[index]};">
                    <img class="card__image" src="./images/icon-${data[index].title}.svg" alt="${data[index].title}-ico" />
                </div>
                <div class="card__details">
                    <div class="card__activity">
                        <p class="card__title">${data[index].title}</p>
                        <img src="./images/icon-ellipsis.svg" alt="menu three dots" />
                    </div>
                    <div class="card__time">
                        <p class="card__hours">${element.current}hrs</p>
                        <p class="card__previous">Previous - ${element.previous}hrs</p>
                    </div>
                </div>
            </div>`        

    });
}
