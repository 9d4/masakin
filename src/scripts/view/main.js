import ApiData from "../apidata.js";
import { type } from "jquery";
const main = _ => {
    // var
    const searchElement = document.querySelector("#searchInput");
    const categoryListElement = document.querySelector("#categoryList");
    const searchButtonElement = document.querySelector("#searchButton");
    const searchButtonCategoryElement = document.querySelector("#searchButtonCategory");
    const mealListElement = document.querySelector("meal-list");
    const noticeElementTab1 = document.getElementById("noticeTab1");
    const noticeElementTab2 = document.getElementById("noticeTab2");

    // behavior
    const renderNoticeTab1 = (itemLength) => {
        if (typeof (itemLength) === "number") {
            noticeElementTab1.innerText = `${itemLength} Found`
            noticeElementTab1.setAttribute("class", "form-text text-info text-right")
        } else if (typeof (itemLength) === "string") {
            if (itemLength.includes("TypeError")) {
                noticeElementTab1.innerText = "Check your internet connection!";
            } else {
                noticeElementTab1.innerText = itemLength;
            }

            if (itemLength.includes("not") || noticeElementTab1.innerText.includes("internet")) {
                noticeElementTab1.setAttribute("class", "form-text text-danger")
            }
        }
    }

    const renderNoticeTab2 = (itemLength) => {
        if (typeof (itemLength) === "number") {
            noticeElementTab2.innerText = `${itemLength} Found`
            noticeElementTab2.setAttribute("class", "form-text text-info text-right")
        } else if (typeof (itemLength) === "string") {
            if (itemLength.includes("TypeError")) {
                noticeElementTab2.innerText = "Check your internet connection!";
            } else {
                noticeElementTab2.innerText = itemLength;
            }

            if (itemLength.includes("not") || noticeElementTab2.innerText.includes("internet")) {
                noticeElementTab2.setAttribute("class", "form-text text-danger")
            }
        }
    }

    const viewListingRender = (meals) => {
        mealListElement.meals = meals;
        renderNoticeTab1(meals.length);
    }

    const viewListingRenderFromCategory = (meals) => {
        mealListElement.mealsForCategory = meals;
        renderNoticeTab2(meals.length);
    }

    const setCategoryList = async () => {
        try {
            const listCategory = await ApiData.getCategories();
            const listCategoryName = [`<option selected>Category...</option>`];

            await listCategory.forEach(category => {
                listCategoryName.push(`<option>${category.strCategory}</option>`);
            });

            categoryListElement.innerHTML = `
                ${listCategoryName}
            `;
        } catch (err) {
            showAlertMessage(err);
        }
    }

    const showAlertMessage = (msg = "Check your internet connection") => {
        msg = msg.toString();
        if (msg.includes("TypeError")) {
            renderNoticeTab1(msg);
        } else {
            renderNoticeTab1(msg);
        }
    }

    const showAlertMessageTab2 = (msg = "Check your internet connection") => {
        msg = msg.toString();
        if (msg.includes("TypeError")) {
            renderNoticeTab2(msg);
        } else {
            renderNoticeTab2(msg);
        }
    }

    const searchByNameButtonOnClick = async () => {
        try {
            const meals = await ApiData.getMealsByName(searchElement.value);
            viewListingRender(meals);
        } catch (err) {
            showAlertMessage(err);
        }
    }

    const searchByCategoryOnClick = async () => {
        if (categoryListElement.value !== "Category...") {
            try {
                const meals = await ApiData.getMealsByCategory(categoryListElement.value);
                viewListingRenderFromCategory(meals);
            } catch (err) {
                showAlertMessageTab2(err);
            }
        }
    }
    // on load exec
    setCategoryList();

    // event
    searchButtonElement.addEventListener("click", searchByNameButtonOnClick);
    searchElement.addEventListener("keydown", key => {
        if (key.keyCode === 13) {
            key.preventDefault();
            searchElement.blur();
            searchButtonElement.click();
        }
    });
    searchButtonCategoryElement.addEventListener("click", searchByCategoryOnClick);
}
export default main;