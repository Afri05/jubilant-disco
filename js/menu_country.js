
 const toogleword = document.querySelector('.coun')
 const dropDownMenu1 = document.querySelector('.dropdown-men-coun')
const toggleBtnIcon1 = document.querySelector('.coun i')



    toogleword.onmouseover = function () {
        dropDownMenu1.classList.add('open');
        toggleBtnIcon1.classList = 'fa-solid fa-arrow-up sizef';
    }

    toogleword.onmouseout = function () {
        dropDownMenu1.classList.remove('open');
        toggleBtnIcon1.classList = 'fa-solid fa-arrow-down sizef';
    }
    dropDownMenu1.onmouseover = function () {
        dropDownMenu1.classList.add('open');
        toggleBtnIcon1.classList = 'fa-solid fa-arrow-up sizef';
    }

    dropDownMenu1.onmouseout = function () {
        dropDownMenu1.classList.remove('open');
        toggleBtnIcon1.classList = 'fa-solid fa-arrow-down sizef';
    }

