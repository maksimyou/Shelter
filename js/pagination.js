//-----------------------------------------------------------------Пагинация----------------------------------------------------------------
import petsList from "./pets.js";
import main from "./script.js";

let petsArray = [];
let endRes = [];
function generationArrayPets(arr) {
    if (window.outerWidth <= 1279 && window.outerWidth >= 768) {
        let res = arr
            .map(function (elem, index) {
                return [elem, Math.random()];
            })
            .sort(function (a, b) {
                return a[1] - b[1];
            })
            .map(function (elem) {
                return elem[0];
            })
            .filter((e, i) => {
                if (i <= 6) {
                    return e;
                }
            });
        return res;
    }
    if (window.outerWidth >= 1279) {
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
    if (window.outerWidth <= 767 && window.outerWidth >= 320) {
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
window.addEventListener("load", () => {
    if (window.outerWidth <= 1279 && window.outerWidth >= 768) {
        for (let i = 0; i < 8; i++) {
            petsArray.push(generationArrayPets(petsList));
        }
        petsArray = petsArray.flat();
    }
    if (window.outerWidth <= 767 && window.outerWidth >= 320) {
        for (let i = 0; i < 16; i++) {
            petsArray.push(generationArrayPets(petsList));
        }
        petsArray = petsArray.flat();
    }
    if (window.outerWidth >= 1279) {
        for (let i = 0; i < 6; i++) {
            petsArray.push(generationArrayPets(petsList));
        }
        petsArray = petsArray.flat();
    }
});

function paginationCards() {
    let petsSliderWrap = document.querySelector(
        ".our_pets_content_wrap-pets-item"
    );
    let numPage = +localStorage.getItem("page") - 1;

    Array.from(petsSliderWrap.children).forEach((el) => el.remove());
    if (window.outerWidth <= 1279 && window.outerWidth >= 768) {
        for (const iterator of petsArray.slice(numPage * 6, numPage * 6 + 6)) {
            petsSliderWrap.append(main.createPetsCard(iterator));
        }
    }
    if (window.outerWidth >= 1280) {
        for (const iterator of petsArray.slice(numPage * 8, numPage * 8 + 8)) {
            petsSliderWrap.append(main.createPetsCard(iterator));
        }
    }

    if (window.outerWidth <= 767 && window.outerWidth >= 320) {
        for (const iterator of petsArray.slice(numPage * 3, numPage * 3 + 3)) {
            petsSliderWrap.append(main.createPetsCard(iterator));
        }
    }

    //Array.from(navBtn.children).forEach((el) => {
    //    el.addEventListener("click", (e) => {
    //        paginationPage(e);
    //    });
    //}); можно заменить на другой
}
let page = 1;
localStorage.setItem("page", page);

let navBtn = document.querySelector(".our_pets_content_navigation");

Array.from(navBtn.children).forEach((el) => {
    el.addEventListener("click", (e) => {
        paginationPage(e);
    });
});

function paginationPage(e) {
    if (e.target.id == "1") {
        page++;
        localStorage.setItem("page", page);
    }

    if (window.outerWidth >= 1280) {
        if (e.target.id == "2") {
            page = 6;
            localStorage.setItem("page", page);
        }

        if (e.target.id == "-2") {
            page = 1;
            localStorage.setItem("page", page);
        }
    }
    if (window.outerWidth <= 1279 && window.outerWidth >= 768) {
        if (e.target.id == "2") {
            page = 8;
            localStorage.setItem("page", page);
        }

        if (e.target.id == "-2") {
            page = 1;
            localStorage.setItem("page", page);
        }
    }
    if (window.outerWidth <= 767 && window.outerWidth >= 320) {
        if (e.target.id == "2") {
            page = 16;
            localStorage.setItem("page", page);
        }

        if (e.target.id == "-2") {
            page = 1;
            localStorage.setItem("page", page);
        }
    }

    if (e.target.id == "-1") {
        page--;
        localStorage.setItem("page", page);
    }

    if (page <= "0") {
        page = 1;
        localStorage.setItem("page", page);
    }

    if (window.outerWidth >= 1280) {
        if (page >= "6") {
            page = 6;
            localStorage.setItem("page", page);
        }
    }

    if (window.outerWidth <= 767 && window.outerWidth >= 320) {
        if (page >= "16") {
            page = 16;
            localStorage.setItem("page", page);
        }
    }

    if (window.outerWidth <= 1279 && window.outerWidth >= 768) {
        if (page >= "8") {
            page = 8;
            localStorage.setItem("page", page);
        }
    }

    if (e.target.classList.contains("our_pets_content_navigation-active")) {
        paginationCards();
    }
    if (localStorage.getItem("page") > 1) {
        navBtn.children[1].classList.add("our_pets_content_navigation-active");
    } else {
        if (localStorage.getItem("page") <= 2) {
            navBtn.children[1].classList.remove(
                "our_pets_content_navigation-active"
            );
        }
    }
    if (localStorage.getItem("page") > 2) {
        navBtn.children[0].classList.add("our_pets_content_navigation-active");
    } else if (localStorage.getItem("page") <= 1) {
        navBtn.children[0].classList.remove(
            "our_pets_content_navigation-active"
        );
    }

    document.querySelector(".our_pets_content_navigation-curent").textContent =
        localStorage.getItem("page");
    let buttonPets = document.querySelectorAll(
        ".pets-content_slider_item_btn_btn"
    );
    buttonPets.forEach((i) => {
        i.addEventListener("click", () => {
            main.modalFunc(i);
        });
    });

    //-------------------------------------------------------------------

    if (window.outerWidth >= 1280) {
        if (localStorage.getItem("page") >= 6) {
            navBtn.children[3].classList.remove(
                "our_pets_content_navigation-active"
            );
        } else if (localStorage.getItem("page") >= 1) {
            navBtn.children[3].classList.add(
                "our_pets_content_navigation-active"
            );
        }
        if (localStorage.getItem("page") >= 6) {
            navBtn.children[4].classList.remove(
                "our_pets_content_navigation-active"
            );
        } else if (localStorage.getItem("page") >= 1) {
            navBtn.children[4].classList.add(
                "our_pets_content_navigation-active"
            );
        }
    }

    if (window.outerWidth <= 1279 && window.outerWidth >= 768) {
        if (localStorage.getItem("page") >= 8) {
            navBtn.children[3].classList.remove(
                "our_pets_content_navigation-active"
            );
        } else if (localStorage.getItem("page") >= 1) {
            navBtn.children[3].classList.add(
                "our_pets_content_navigation-active"
            );
        }
        if (localStorage.getItem("page") >= 8) {
            navBtn.children[4].classList.remove(
                "our_pets_content_navigation-active"
            );
        } else if (localStorage.getItem("page") >= 1) {
            navBtn.children[4].classList.add(
                "our_pets_content_navigation-active"
            );
        }
    }
    if (window.outerWidth <= 767 && window.outerWidth >= 320) {
        if (localStorage.getItem("page") >= 16) {
            navBtn.children[3].classList.remove(
                "our_pets_content_navigation-active"
            );
        } else if (localStorage.getItem("page") >= 1) {
            navBtn.children[3].classList.add(
                "our_pets_content_navigation-active"
            );
        }
        if (localStorage.getItem("page") >= 16) {
            navBtn.children[4].classList.remove(
                "our_pets_content_navigation-active"
            );
        } else if (localStorage.getItem("page") >= 1) {
            navBtn.children[4].classList.add(
                "our_pets_content_navigation-active"
            );
        }
    }
    //-----------------------------------------------------------------------
}
