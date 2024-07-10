import './about.css'

const container = document.getElementById("content");
const title = document.createElement("h1");
title.textContent = "About";
const about = document.createElement("p");
about.textContent = "Dive into the vibrant world and discover the Crust Bucket, the ultimate food truck run by the charming crustacean, Crusty Sean! Located in Inkopolis Square, this hotspot offers delectable delights that not only satisfy your taste buds but also boost your in-game performance. From power-packed meals that enhance your abilities to special drinks that provide valuable perks, the Crust Bucket is a must-visit for every Inkling and Octoling aiming to splat their way to victory. Don’t miss out on Crusty Sean’s unique menu items and experience a culinary adventure like no other in colorful chaos."

function load_about(){
    container.appendChild(title);
    container.appendChild(about);
}

export {load_about};