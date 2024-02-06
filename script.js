const bgimage = document.getElementById("image");
const number = document.getElementById("number");

let count = 0;
const maxCount = 100;

const loader = () =>{
    if(count < maxCount){
        count++;
        number.textContent = count + "%";
        const opacity = count / maxCount;
        bgimage.style.opacity = opacity;
        bgimage.style.filter = `blue($(10 -10 * opacity)px)`;
    }
    else if(count === maxCount){
        clearInterval(loaderInterval);
        number.textContent = "";
    }
};

const loaderInterval = setInterval(loader, 60)