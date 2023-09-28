/* element references */

// header
const header = document.querySelector(".hero");

// navbar
const ul_links = document.querySelector("nav .links_container ul.links");
const burgerMenu = document.querySelector("nav .links_container .menu");

// setting box
const settingBox = document.querySelector(".settings_box");
const settingBox_toggle = document.querySelector(".settings_box .toggle");
const settingBox_toggleGear = document.querySelector(".settings_box .toggle i");

const root = document.documentElement;
const settingBox_colorsOptions = document.querySelectorAll(".settings_box .color_set .color_set_options li");


/* local storage */
if (localStorage.getItem("activeLi")) {
    let localStorageGettingItem = localStorage.getItem("activeLi");
    const li = document.querySelector(`[data-color="${localStorageGettingItem}"]`);
    root.style.setProperty("--mainColor", `#${localStorageGettingItem}`)
    settingBox_colorsOptions.forEach(li => {
        li.classList.remove("active")
    });
    li.classList.add("active")
}



/* ----------------------- navbar ----------------------- */
burgerMenu.addEventListener("click", () => {
    ul_links.classList.toggle("openBurgerMenu")
})


/* ----------------------- settings box ----------------------- */

settingBox_toggle.addEventListener("click", () => {
    settingBox.classList.toggle("openSettingBox");
    settingBox_toggleGear.classList.toggle("whenSettingBoxIsOpen")
})

/* color setting */
settingBox_colorsOptions.forEach(colorOption => {
    colorOption.addEventListener("click", () => {
        settingBox_colorsOptions.forEach(li => {
            li.classList.remove("active")
        });
        colorOption.classList.add("active");
        window.localStorage.setItem("activeLi", `${colorOption.dataset.color}`)
        root.style.setProperty("--mainColor", `#${colorOption.dataset.color}`)
    })
})


/* ----------------------- header random background ----------------------- */

let pathArray = [
    `url("assets/images/10.jpg")`,
    `url("assets/images/07.jpg")`,
    `url("assets/images/04.jpg")`,
    `url("assets/images/01.jpg")`
];
let backgroundIndex = 0;

setInterval(() => {
    if (backgroundIndex == 4) {
        backgroundIndex = 0;
    }
    header.style.backgroundImage = pathArray[backgroundIndex];
    backgroundIndex += 1;
}, 5000);

/* ----------------------- our skills ----------------------- */

const ourSkills_section = document.querySelector("section.our_skills");
const skill_progress = document.querySelectorAll(".skill_progress span");

window.onscroll = () => {
    if (window.scrollY >= ourSkills_section.offsetTop - 200) {
        skill_progress.forEach(span => {
            span.style.width = span.dataset.progress + "%";
        })
    }
}


/* ----------------------- our gallery ----------------------- */

const gallerySectionImages = document.querySelectorAll(".our_gallery .imgs_box > img");

const galleryModal = document.querySelector(".our_gallery .img_modal");
const modalImg = document.querySelector(".our_gallery .img_modal img");
const imgModaColse = document.querySelector(".our_gallery .img_modal button");

gallerySectionImages.forEach(img => {
    img.addEventListener("click", (e) => {
        let target = e.target;

        galleryModal.classList.add("modalImgOpen");
        modalImg.setAttribute("src", target.src);
        imgModaColse.onclick = () => {
            galleryModal.classList.remove("modalImgOpen");
        }
    })
})