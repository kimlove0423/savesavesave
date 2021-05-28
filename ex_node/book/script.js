/**
 * DOM refrences
 */
const app = document.getElementById("app");
const thickness = document.getElementById("thickness");
const thicknessOutput = document.getElementById("thickness-output");

/*change action*/
const bookWrapper = document.getElementById("book-wrapper");
const movieWrapper = document.getElementById("movie-wrapper");
const mediaButtons = document.getElementById("media-buttons");
const feedbt = document.getElementById("feedbt");
const monster = document.getElementById("monster");

thicknessOutput.innerHTML = thickness.value;

/**
 * Attach event handlers
 */
thickness.oninput = function() {
    thicknessOutput.innerHTML = this.value;
    app.style.setProperty("--thickness", `${this.value}px`);
}

mediaButtons.addEventListener("click", e => {
    if (!e.target.value) { return; }
    app.setAttribute("data-current-media", e.target.value)
    if(e.target.value == 'movie'){
        feedbt.style.setProperty('display','inline');
    }else{feedbt.style.setProperty('display','none');}
});

monster.addEventListener("click", e => {
    window.location.href = "./inside.html";
});