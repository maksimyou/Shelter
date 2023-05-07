import petsList from "./pets.js";
import main from "./script.js";
const wrapSliders = document.querySelector(".pets-content_slider_wrap");

let prev = document.querySelector(".pets-content_prev");
let next = document.querySelector(".pets-content_next");
let num = 0;

let lengthSlider = 0;

//Подгрузка первых слайдов

let petsSliderWrap = document.querySelector(".pets-content_slider_wrap");
for (const iterator of main.generationArray(petsList)) {
    petsSliderWrap.append(main.createPetsCard(iterator));
}

let buttonPets = document.querySelectorAll(".pets-content_slider_item_btn_btn");
buttonPets.forEach((i) => {
    i.addEventListener("click", () => {
        main.modalFunc(i);
    });
});
const itemsSlider = document.querySelectorAll(".pets-content_slider_item");
itemsSlider.forEach((i) => {
    lengthSlider += i.clientWidth;
});
//---------------------------------

//--------------------------------------?
//for (const iterator of generationArray(petsList)) {
//    document
//        .querySelector(".pets-content_slider_wrap")
//        .prepend(createPetsCard(iterator));
//}
//wrapSliders.style.transform = `translateX(${-lengthSlider}px)`;

function widthSlideAdaptive(padding, count, segment = -99999) {
    let widthWrap = document.querySelector(".pets-content_slider_item");
    let result = (widthWrap.clientWidth + padding) * count;

    //let multi = 1;
    //if (count == 2) {
    //    multi = 2;
    //}
    //if (count == 3) {
    //    multi = 3;
    //}

    //if (-lengthSlider + result * multi <= segment) {
    //    let petsSliderWrap = document.querySelector(
    //        ".pets-content_slider_wrap"
    //    );
    //    for (const iterator of main.generationArray(petsList)) {
    //        petsSliderWrap.append(main.createPetsCard(iterator));
    //    }
    //    itemsSlider.forEach((i) => {
    //        lengthSlider += i.clientWidth;
    //    });
    //}

    //if (0 >= segment) {
    //    let petsSliderWrap = document.querySelector(
    //        ".pets-content_slider_wrap"
    //    );
    //    for (const iterator of main.generationArray(petsList)) {
    //        petsSliderWrap.prepend(main.createPetsCard(iterator));
    //    }
    //    itemsSlider.forEach((i) => {
    //        lengthSlider += i.clientWidth;
    //    });
    //}

    return result;
}
prev.addEventListener("click", () => {
    if (window.outerWidth >= 320 && window.outerWidth <= 767) {
        if (num >= 0) {
            num = -lengthSlider;
        } else {
            num += widthSlideAdaptive(40, 1);
        }
        wrapSliders.style.transform = `translateX(${num}px)`;
    } else if (window.outerWidth >= 768 && window.outerWidth <= 1279) {
        if (num >= 0) {
            num = -lengthSlider;
        } else {
            num += widthSlideAdaptive(40, 2);
        }
        wrapSliders.style.transform = `translateX(${num}px)`;
    } else if (window.outerWidth >= 1280) {
        if (num >= 0) {
            num = -lengthSlider;
        } else {
            num += widthSlideAdaptive(90, 3);
        }
        wrapSliders.style.transform = `translateX(${num}px)`;
    } else {
        if (num >= 0) {
            num = -lengthSlider;
        } else {
            num += widthSlideAdaptive(40, 1);
        }
        wrapSliders.style.transform = `translateX(${num}px)`;
    }
});

next.addEventListener("click", () => {
    if (window.outerWidth >= 320 && window.outerWidth <= 767) {
        if (num <= -lengthSlider) {
            num = 0;
        } else {
            num -= widthSlideAdaptive(40, 1, num);
        }
        wrapSliders.style.transform = `translateX(${num}px)`;
    } else if (window.outerWidth >= 768 && window.outerWidth <= 1279) {
        if (num <= -lengthSlider) {
            num = 0;
        } else {
            num -= widthSlideAdaptive(40, 2, num);
        }
        wrapSliders.style.transform = `translateX(${num}px)`;
    } else if (window.outerWidth >= 1280) {
        if (num <= -lengthSlider) {
            num = 0;
        } else {
            num -= widthSlideAdaptive(90, 3, num);
        }

        wrapSliders.style.transform = `translateX(${num}px)`;
    } else {
        if (num <= -lengthSlider) {
            num = 0;
        } else {
            num -= widthSlideAdaptive(40, 1, num);
        }
        wrapSliders.style.transform = `translateX(${num}px)`;
    }
});
