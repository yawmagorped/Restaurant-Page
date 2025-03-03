import "./style.css";
import { loadPage } from "./page-load";

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener('click',() => {
        loadPage(btn.id);
    })
});

loadPage("home");