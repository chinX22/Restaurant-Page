import './menu.css';

import seanwich1 from './images/menu/seanwich1.png';
import seanwich2 from './images/menu/seanwich2.png';
import seanwich3 from './images/menu/seanwich3.png';
import fried1 from './images/menu/fried.png';
import fried2 from './images/menu/double_fried.png';
import fried3 from './images/menu/triple_fried.png';
import sub from './images/menu/sub_up.png'
import run from './images/menu/run_up.png'
import special from './images/menu/special_up.png'
import respawn from './images/menu/short_respawn.png'

const container = document.getElementById("content");

let itemsArr = [];
const seanwich01 = new Image(); seanwich01.src = seanwich1; itemsArr.push(seanwich01); seanwich01.className = "small";
const seanwich02 = new Image(); seanwich02.src = seanwich2; itemsArr.push(seanwich02);  seanwich02.className = "mid";
const seanwich03 = new Image(); seanwich03.src = seanwich3; itemsArr.push(seanwich03); seanwich03.className = "large";
const fried_1 = new Image(); fried_1.src = fried1; itemsArr.push(fried_1); fried_1.className = "small";
const fried_2 = new Image(); fried_2.src = fried2; itemsArr.push(fried_2); fried_2.className = "mid";
const fried_3 = new Image(); fried_3.src = fried3; itemsArr.push(fried_3); fried_3.className = "large";
const sub0 = new Image(); sub0.src = sub; itemsArr.push(sub0);
const run0 = new Image(); run0.src = run; itemsArr.push(run0);
const special0 = new Image(); special0.src = special; itemsArr.push(special0);
const respawn0 = new Image(); respawn0.src = respawn; itemsArr.push(respawn0);

const nameArr = [
    "Deep-Fried Shwaffle",
    "Double-Fried Super Shwaffle",
    "Triple-Fried Galactic Shwaffle",
    "Crusty Seanwich",
    "Super Seanwich",
    "Galactic Seanwich",
    "Sub-Up Juice",
    "Run-Speed Tomato",
    "Special-Up Smoothie",
    "Short-Respawn Mocha"
]

const descrptionArr = [
    "Increases the amount of cash awarded by 50%",
    "Increases the amount of cash rewarded by double",
    "Increases the amount of cash awarded by 150%",
    "Increases the amount of level experience points awarded by 50%",
    "Increases the amount of level experience points awarded by double",
    "Increases the amount of level experience points awarded by 150%",
    "Sub Power Up",
    "Run Speed Up",
    "Special Power Up",
    "Quick Respawn"
]

const foods = document.createElement("ul");
const drinks = document.createElement("ul");

foods.id = "foods";
drinks.id = "drinks";

function load_menu(){
    foods.replaceChildren();
    drinks.replaceChildren();
    let title = document.createElement("h1");
    title.textContent = "Menu";
    container.appendChild(title);
    let food_section = document.createElement("h2");
    food_section.textContent = "Foods";
    container.appendChild(food_section);
    for (let i = 0; i < itemsArr.length; i++){
        if(i < 6){
            let item = document.createElement("li");
            let name = document.createElement("h3");
            let description = document.createElement("p");
            name.textContent = nameArr[i];
            description.textContent = descrptionArr[i];

            item.appendChild(itemsArr[i]);
            item.appendChild(name);
            item.appendChild(description);
            foods.appendChild(item);
        } else {
            let item = document.createElement("li");
            let name = document.createElement("h3");
            let description = document.createElement("p");
            name.textContent = nameArr[i];
            description.textContent = descrptionArr[i];

            item.appendChild(itemsArr[i]);
            item.appendChild(name);
            item.appendChild(description);
            console.log("loaded?");
            drinks.appendChild(item);
        }
    }

    container.appendChild(foods);
    
    let drink_section = document.createElement("h2");
    drink_section.textContent = "Most Popular Drinks";
    container.appendChild(drink_section);

    container.appendChild(drinks);
}

export {load_menu};