import "./meal-item.js";

class MealList extends HTMLElement {
    set meals(foods) {
        this._meals = foods;
        this.render();
    }

    set mealsForCategory(foods) {
        this._meals = foods;
        this.renderForCategory();
        console.log(this._meals);
    }

    connectedCallback() {
    }

    renderForCategory() {
        this.setAttribute("class", "row");
        this.innerHTML = ``;
        this._meals.forEach(meal => {
            const mealItem = document.createElement("meal-item");
            mealItem.mealForCategory = meal;
            this.appendChild(mealItem);
        });
    }

    render() {
        this.setAttribute("class", "row");
        this.innerHTML = ``;
        this._meals.forEach(meal => {
            const mealItem = document.createElement("meal-item");
            mealItem.meal = meal;
            this.appendChild(mealItem);
        });
    }
}
customElements.define("meal-list", MealList);