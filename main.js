/**importar JSON */

import data from './data.json' assert {type: 'json'};

let backgroundColors = [
    {activity: 'work', color: 'hsl(15, 100%, 70%)'},
    {activity: 'play', color: 'hsl(195, 74%, 62%)'},
    {activity: 'study', color: 'hsl(348, 100%, 68%)'},
    {activity: 'exercise', color: 'hsl(145, 58%, 55%)'},
    {activity: 'social', color: 'hsl(264, 64%, 52%)'},
    {activity: 'self care', color: 'hsl(43, 84%, 65%)'},
]

const dailyArray = data.map(item => item.timeframes.daily);
const weeklyArray = data.map(item => item.timeframes.weekly);
const monthlyArray = data.map(item => item.timeframes.monthly);

const dailyBtn = document.querySelector('#daily');
const weeklyBtn = document.querySelector('#weekly');
const monthlyBtn = document.querySelector('#monthly');

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
            let activity = data[index].title;
            let activityLowerCase = activity.toLocaleLowerCase();
    
            //Buscar color
            let colorObject = backgroundColors.find(element => element.activity === activityLowerCase);        
    
            if(activityLowerCase === 'self care'){ activityLowerCase = 'self-care'}
    
            secondSection.innerHTML +=
    
                `<div class="card">
                    <div class="card__background" style="background-color: ${colorObject.color};">
                        <img class="card__image" src="./images/icon-${activityLowerCase}.svg" alt="${activityLowerCase}-ico" />
                    </div>
                    <div class="card__details">
                        <div class="card__activity">
                            <p class="card__title">${activity}</p>
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
window.onload = () => {
    let array = dailyArray;
    drawElements(array);
}

