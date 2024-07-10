import './defaults_and_nav.css'

import {load_home} from './create-home';
import {load_menu} from './create-menu';
import {load_about} from './create-about';

//function manager(){
const container = document.getElementById("content");
let current_button = "";

const homeButton= document.getElementById("home");
const menuButton= document.getElementById("menu");
const aboutButton= document.getElementById("about");

homeButton.addEventListener("click", () => {
    console.log(current_button);
    if(current_button != "home"){
        clear()
        load_home();
        current_button = "home";
    }
})

menuButton.addEventListener("click", () => {
    console.log(current_button);
    if(current_button != "menu"){
        clear()
        load_menu();
        current_button = "menu";
    }
})

aboutButton.addEventListener("click", () => {
    console.log(current_button);
    if(current_button != "about"){
        clear()
        load_about();
        current_button = "about";
    }
})

function clear(){
    container.replaceChildren();
}







    
//}


