const setup = () =>
{
    updateColor();
    let sliders = document.querySelectorAll(".sliderBox input");
    for(let i = 0; i < sliders.length; i++)
    {
        sliders[i].addEventListener("change",updateColor);
        sliders[i].addEventListener("input",updateColor);
    }
    let saveBtn = document.querySelector("[value=Save]");
    saveBtn.addEventListener("click", save);
};
const updateColor = () =>{
    let sliders = document.querySelectorAll(".sliderBox input");
    let values = document.querySelectorAll(".value");
    for(let i = 0; i< sliders.length; i++)
    {
       values[i].textContent = sliders[i].value.toString();
    }
    let swatch = document.querySelector(".swatch");
    swatch.style.backgroundColor = `rgb(${values[0].textContent},${values[1].textContent},${values[2].textContent})`;
};
const save = () =>{
    let swatch = document.querySelector(".bigBox .swatch");
    let newBox = document.createElement("DIV");
    newBox.classList.add("swatch");
    newBox.style.backgroundColor = swatch.style.backgroundColor.toString();
    newBox.style.borderRadius = "0px";
    newBox.style.float = "left";
    newBox.addEventListener("click", resetColor);

    let deleteBtn = document.createElement("input");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("value", "X");
    deleteBtn.addEventListener("click", deleteSwatch);
    newBox.appendChild(deleteBtn);
    document.body.appendChild(newBox);

};
const deleteSwatch = (event) =>{
    let deleteBtn = event.target;
    let box = deleteBtn.parentElement;
    document.body.removeChild(box);
    event.stopPropagation();

};
const resetColor = (event) =>{
    let baseBox = event.target;
    let colors = baseBox.style.backgroundColor.toString().substr(4).split(",");
    let sliders = document.querySelectorAll(".sliderBox input");
    for(let i = 0; i < colors.length; i++)
    {
        sliders[i].value = parseInt(colors[i].trim());
    }
    updateColor();


}
window.addEventListener("load", setup);