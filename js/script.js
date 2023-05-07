import petsList from "./pets.js";
export default { generationArray, createPetsCard, modalFunc };

//-------------------------------------------------Функция генерации карточек с питомцами----------------------------------------------------
function createPetsCard(obj) {
    let petsItem = document.createElement("div");
    let imgItem = document.createElement("div");
    imgItem.classList.add("pets-content_slider_item_img");
    let imgItemImg = document.createElement("img");
    imgItemImg.src = obj.img;
    imgItem.append(imgItemImg);
    let textItem = document.createElement("div");
    textItem.classList.add("pets-content_slider_item_text");
    textItem.textContent = obj.name;
    let btnItem = document.createElement("div");
    btnItem.classList.add("pets-content_slider_item_btn");
    if (
        window.location.pathname.replace(/.+\//g, "") == "index.html" ||
        window.location.pathname.replace(/.+\//g, "") == ""
    ) {
        petsItem.classList.add("pets-content_slider_item");
    } else {
        petsItem.classList.add(
            "pets_our-content_item",
            "pets-content_slider_item",
            "pets-item"
        );
    }

    let btnItemBtn = document.createElement("button");
    btnItemBtn.classList.add("pets-content_slider_item_btn_btn");
    btnItemBtn.classList.add("pets-content_slider_item_btn_btn-2"); //ДОБАВИТЬ В ДЕПЛОЙ
    btnItem.append(btnItemBtn);
    let btnItemBtnSpan = document.createElement("span");
    btnItemBtnSpan.textContent = "Learn more";
    btnItemBtn.append(btnItemBtnSpan);
    petsItem.append(imgItem);
    petsItem.append(textItem);
    petsItem.append(btnItem);
    return petsItem;
}
function generationArray(arr) {
    if (
        window.location.pathname.replace(/.+\//g, "") == "our-pets.html" ||
        window.location.pathname.replace(/.+\//g, "") == ""
    ) {
        if (window.outerWidth >= 768 && window.outerWidth <= 1279) {
            let res = arr
                .map(function (elem, index) {
                    return [elem, Math.random()];
                })
                .sort(function (a, b) {
                    return a[1] - b[1];
                })
                .map(function (elem) {
                    return elem[0];
                });
            res.length = 6;
            return res;
        } else if (window.outerWidth >= 320 && window.outerWidth <= 767) {
            let res = arr
                .map(function (elem, index) {
                    return [elem, Math.random()];
                })
                .sort(function (a, b) {
                    return a[1] - b[1];
                })
                .map(function (elem) {
                    return elem[0];
                });
            res.length = 3;
            return res;
        } else {
            return arr
                .map(function (elem, index) {
                    return [elem, Math.random()];
                })
                .sort(function (a, b) {
                    return a[1] - b[1];
                })
                .map(function (elem) {
                    return elem[0];
                });
        }
    }

    return arr
        .map(function (elem, index) {
            return [elem, Math.random()];
        })
        .sort(function (a, b) {
            return a[1] - b[1];
        })
        .map(function (elem) {
            return elem[0];
        });
}

if (
    window.location.pathname.replace(/.+\//g, "") == "our-pets.html" ||
    window.location.pathname.replace(/.+\//g, "") == ""
) {
    let petsSliderWrap = document.querySelector(
        ".our_pets_content_wrap-pets-item"
    );

    for (const iterator of generationArray(petsList)) {
        petsSliderWrap.append(createPetsCard(iterator));
    }
}
//-----------------------------------------------------------------Бургер меню и шелтер----------------------

let logo = document.querySelector(".content_logo-nav_logo");
let nav = document.querySelector("nav");
let burgerContainer;

if (
    window.location.pathname.replace(/.+\//g, "") == "index.html" ||
    window.location.pathname.replace(/.+\//g, "") == ""
) {
    burgerContainer = document.querySelector(".burger_container");
} else {
    burgerContainer = document.querySelector(".burger_container_pets");
}

let contentLogo = document.querySelector(".content_logo-nav_nav");
let logo2 = logo.cloneNode(true);
let burgerBtn = document.querySelector(".logo-nav_start-screen_burger");
let burgerBtn2 = burgerBtn.cloneNode(true);
let headerBurger = document.createElement("div");
let shelter1 = document.querySelector(".help-animal_content_wrap-shelter");
let shelter2 = document.querySelector(".help-animal_content_wrap-shelter2");
headerBurger.append(logo2);
headerBurger.append(burgerBtn2);
burgerBtn2.style.transform = "rotate(90deg)";
headerBurger.style.alignItems = "center";
headerBurger.style.display = "flex";
headerBurger.style.justifyContent = "space-between";
headerBurger.style.marginTop = "30px";
headerBurger.style.marginBottom = "158px";
headerBurger.style.padding = "3px 21px";
function auxiliaryGeneration() {
    let buttonPets = document.querySelectorAll(
        ".pets-content_slider_item_btn_btn"
    );
    buttonPets.forEach((i) => {
        i.addEventListener("click", () => {
            modalFunc(i);
        });
    });
}
window.addEventListener("resize", (e) => {
    if (
        window.location.pathname.replace(/.+\//g, "") == "index.html" ||
        window.location.pathname.replace(/.+\//g, "") == ""
    ) {
        if (e.target.outerWidth <= 769 && shelter1.children.length <= 5) {
            let clonShelter2 = shelter2.cloneNode(true);
            Array.from(clonShelter2.children).forEach((el) => {
                shelter1.append(el);
            });
        }
        if (e.target.outerWidth >= 769 && shelter1.children.length > 5) {
            for (let i = 0; i <= 3; i++) {
                shelter1.children[shelter1.children.length - 1].remove();
            }
        }
    }

    if (e.target.outerWidth <= 769 && !burgerContainer.contains(nav)) {
        nav.prepend(headerBurger);
        burgerContainer.appendChild(nav);
    }
    if (e.target.outerWidth >= 769 && burgerContainer.contains(nav)) {
        contentLogo.appendChild(nav);
        nav.removeChild(headerBurger);
    }

    //------------------------------------------------------------------------------------------------------------

    let petsSliderWrap = document.querySelector(
        ".our_pets_content_wrap-pets-item"
    );

    if (e.target.outerWidth >= 1280) {
        if (
            window.location.pathname.replace(/.+\//g, "") == "our-pets.html" ||
            window.location.pathname.replace(/.+\//g, "") == ""
        ) {
            Array.from(petsSliderWrap.children).forEach((i) => {
                i.remove();
            });
            for (const iterator of generationArray(petsList)) {
                petsSliderWrap.append(createPetsCard(iterator));
            }
        }
        auxiliaryGeneration();
    } else if (window.outerWidth >= 768 && window.outerWidth <= 1279) {
        if (
            e.target.location.pathname.replace(/.+\//g, "") ==
                "our-pets.html" ||
            e.target.location.pathname.replace(/.+\//g, "") == ""
        ) {
            Array.from(petsSliderWrap.children).forEach((i) => {
                i.remove();
            });
            for (const iterator of generationArray(petsList)) {
                petsSliderWrap.append(createPetsCard(iterator));
            }
        }
        auxiliaryGeneration();
    } else if (e.target.outerWidth >= 320 && e.target.outerWidth <= 767) {
        if (
            window.location.pathname.replace(/.+\//g, "") == "our-pets.html" ||
            window.location.pathname.replace(/.+\//g, "") == ""
        ) {
            Array.from(petsSliderWrap.children).forEach((i) => {
                i.remove();
            });
            for (const iterator of generationArray(petsList)) {
                petsSliderWrap.append(createPetsCard(iterator));
            }
        }
        auxiliaryGeneration();
    }
});

if (
    window.location.pathname.replace(/.+\//g, "") == "index.html" ||
    window.location.pathname.replace(/.+\//g, "") == ""
) {
    if (window.outerWidth <= 769 && shelter1.children.length <= 5) {
        let clonShelter2 = shelter2.cloneNode(true);
        Array.from(clonShelter2.children).forEach((el) => {
            shelter1.append(el);
        });
    }
    if (window.outerWidth >= 769 && shelter1.children.length > 5) {
        for (let i = 0; i <= 3; i++) {
            shelter1.children[shelter1.children.length - 1].remove();
        }
    }
}

if (window.outerWidth <= 769 && !burgerContainer.contains(nav)) {
    nav.prepend(headerBurger);
    burgerContainer.appendChild(nav);
}
if (window.outerWidth >= 769 && burgerContainer.contains(nav)) {
    contentLogo.appendChild(nav);
    nav.removeChild(headerBurger);
}

burgerBtn.addEventListener("click", (e) => {
    document
        .querySelector(".burger_container_background")
        .classList.add("burger_container_background_active");
    burgerContainer.classList.add("active-burger");
    document.body.style.overflow = "hidden";
    burgerBtn.classList.add("logo-nav_start-screen_burger_active");
    e.stopPropagation();
});
burgerBtn2.addEventListener("click", () => {
    burgerContainer.classList.remove("active-burger");
    document.body.style.overflow = "auto";
    burgerBtn.classList.remove("logo-nav_start-screen_burger_active");
    document
        .querySelector(".burger_container_background")
        .classList.remove("burger_container_background_active");
});

document.querySelectorAll(".content_header_nav_link").forEach((i) => {
    i.addEventListener("click", () => {
        burgerContainer.classList.remove("active-burger");
        document.body.style.overflow = "auto";
        burgerBtn.classList.remove("logo-nav_start-screen_burger_active");
        document
            .querySelector(".burger_container_background")
            .classList.remove("burger_container_background_active");
    });
});
document.querySelectorAll(".content_header_nav_our_link").forEach((i) => {
    i.addEventListener("click", () => {
        burgerContainer.classList.remove("active-burger");
        document.body.style.overflow = "auto";
        burgerBtn.classList.remove("logo-nav_start-screen_burger_active");
        document
            .querySelector(".burger_container_background")
            .classList.remove("burger_container_background_active");
    });
});
window.addEventListener("click", (e) => {
    if (e.target == document.querySelector(".burger_container_background")) {
        burgerContainer.classList.remove("active-burger");
        document.body.style.overflow = "auto";
        burgerBtn.classList.remove("logo-nav_start-screen_burger_active");
        document
            .querySelector(".burger_container_background")
            .classList.remove("burger_container_background_active");
    }
});
//------------------------------------------------------------------------modal-window-----------------------------------------------------------
let buttonPets = document.querySelectorAll(".pets-content_slider_item_btn_btn");
let modal = document.querySelector(".modal-window_container");
let close = document.querySelector(".modal-window_content_close");
let modalInfo = document.querySelector(".modal-window_content");
function modalFunc(i) {
    window.document.querySelector("body").style.overflow = "hidden";
    let text = i.parentElement.parentElement.children[1].textContent;
    let petsData = petsList.find((el) => {
        return el.name == text;
    });

    modalInfo.children[0].children[0].src = petsData.img;
    modalInfo.children[1].children[0].textContent = petsData.name;
    modalInfo.children[1].children[1].textContent =
        petsData.type + " - " + petsData.breed;
    modalInfo.children[1].children[2].textContent = petsData.description;
    modalInfo.children[1].children[3].children[0].children[1].textContent =
        petsData.age;
    modalInfo.children[1].children[3].children[1].children[1].textContent =
        petsData.inoculations.join(", ");
    modalInfo.children[1].children[3].children[2].children[1].textContent =
        petsData.diseases.join(", ");
    modalInfo.children[1].children[3].children[3].children[1].textContent =
        petsData.parasites.join(", ");

    modal.classList.add("modal-window_active");
}

auxiliaryGeneration();

close.addEventListener("click", () => {
    window.document.querySelector("body").style.overflow = "visible";
    modal.classList.remove("modal-window_active");
});
document
    .querySelector(".modal-window_container")
    .addEventListener("click", (event) => {
        if (event.target.classList[0] == "modal-window_container") {
            window.document.querySelector("body").style.overflow = "visible";
            modal.classList.remove("modal-window_active");
        }
    });

//----------------------------------------------------------------------scroll------------------------------------
function scrollFunc(elem) {
    let select = elem.href.replace(/.+#/, "");
    let link = document.querySelector("#" + select);
    window.scrollTo({
        top: link.offsetTop,
        behavior: "smooth",
    });
}

let anchor = document.querySelectorAll(".anchor");

anchor.forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        scrollFunc(el);
    });
});

let myHash = location.hash; //получаем значение хеша
location.hash = ""; //очищаем хеш
//location.hash = ""; //очищаем хеш
if (myHash[1] != undefined) {
    //проверяем, есть ли в хеше какое-то значение
    window.scrollTo({
        top: document.querySelector(myHash).offsetTop,
        behavior: "smooth",
    }); //скроллим за полсекунды
}

let arrowUp = document.querySelector(".arrow-up");
window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 1000) {
        arrowUp.classList.add("arrow-up-active");
    } else {
        arrowUp.classList.remove("arrow-up-active");
    }
});

arrowUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
