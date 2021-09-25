// ******************Dark mode

let section = document.querySelectorAll('section')
let sun = document.getElementById('sun')
let moon = document.getElementById('moon')


// * if not set theme. theme==sun
if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'sun')
}

// * local storage theme= moon, change theme to moon
if (localStorage.getItem('theme') === 'moon') {
    themeMoon()
}

//* changing theme to moon (or dark)
function themeMoon() {
    console.log(localStorage.getItem('theme'))
    
    for (let i = 0; i < section.length; i++) {
        // console.log(section[0])
        //* adding dark theme to all sectio
        section[i].classList.add('dark-theme')
    }
    // *updating theme status value
    localStorage.setItem('theme','moon')
    
    sun.style.display = "inline-block"
    moon.style.display = "none"
    
}

//* changing theme to sun or light
function themeSun() {
    
    console.log(localStorage.getItem('theme'))
    
    for (let i = 0; i < section.length; i++) {
        // console.log(section[0])
        //* removing dark theme to all section
        section[i].classList.remove('dark-theme')
    }
    
    // *updating theme status value
    localStorage.setItem('theme','sun') 

    moon.style.display = "inline-block"
    sun.style.display = "none"

}


// * **************************************Menu bar show**************


let navigation = document.getElementById('navigation')
let app = document.getElementById('app')
let closeBtn = document.getElementById('closeBtn')

// *********************show Menu
function openMenu() {

    navigation.classList.add('active_menu')

    app.style.display = "none"
    closeBtn.style.display = "inline-block"
}

// *******************Hide Menu
function closeMenu() {

    navigation.classList.remove('active_menu')

    app.style.display = "inline-block"
    closeBtn.style.display = "none"
}


// ***************************skills show******************

// frontend

function frontend_skills() {

    let skill_score1 = document.getElementById('skill-score1')
    let arrow_down = document.getElementById('down')
    let arrow_up = document.getElementById('up')

    skill_score1.classList.toggle('active-skill');
    arrow_down.classList.toggle('active-arrow')
    arrow_up.classList.toggle('active-arrow')

}

// backend skills


function backend_skills() {
    let skill_score = document.getElementById('skill-score2');
    let arrow_up = document.getElementById('up2');
    let arrow_down = document.getElementById('down2');

    skill_score.classList.toggle('active-skill');
    arrow_down.classList.toggle('active-arrow')
    arrow_up.classList.toggle('active-arrow')

}

// design skills
function design_skills() {
    let skill_score = document.getElementById('skill-score3');
    let arrow_up = document.getElementById('up3');
    let arrow_down = document.getElementById('down3');

    skill_score.classList.toggle('active-skill');
    arrow_down.classList.toggle('active-arrow')
    arrow_up.classList.toggle('active-arrow')

}

// *****Qualification shows**********************************
let education_tab = document.getElementById('education-tab');
let work_tab = document.getElementById('work-tab');

let education = document.querySelector('.education')
let work = document.querySelector('.work')


// console.log(education)

function showQualification(element1) {


    if (element1 === "work") {

        // *Adding work timeline
        work_tab.classList.add('qualification-active')
        education_tab.classList.remove('qualification-active')

        // *highlight tab
        work.classList.add('active-tab')
        education.classList.remove('active-tab')
    }
    else if (element1 == 'education') {

        // *Adding education timeline
        work_tab.classList.remove('qualification-active')
        education_tab.classList.add('qualification-active')

        // *highlight tab
        work.classList.remove('active-tab')
        education.classList.add('active-tab')

    }
}
//*************swiper js.

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    keyboard: {
        enabled: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // loopFillGroupWithBlank: true,
    keyboard: {
        enabled: true
    },
    pagination: {
        el: ".swiper-pagination2",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});
