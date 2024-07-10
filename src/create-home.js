import './home.css';
import truck_img from './images/truck.jpg';

const truck = new Image(); truck.src = truck_img;
const container = document.getElementById("content");
const title = document.createElement("h1");
const notes = document.createElement("p");

function load_home(){
    title.textContent = "Crust Bucket";
    notes.textContent = "Welcome to the crust bucket, home of the crust bucket.";
    truck.className = "truck";
    container.appendChild(title);
    container.appendChild(notes);
    container.appendChild(truck);
}

export {load_home};