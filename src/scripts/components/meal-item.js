import ApiData from "../apidata.js";

class MealItem extends HTMLElement {
    constructor() {
        super();
    }

    set meal(food) {
        this._meal = food;
        this.ingredients = [
            this._meal.strIngredient1, this._meal.strIngredient2, this._meal.strIngredient3, this._meal.strIngredient4, this._meal.strIngredient5, this._meal.strIngredient6, this._meal.strIngredient7, this._meal.strIngredient8, this._meal.strIngredient9, this._meal.strIngredient10, this._meal.strIngredient11, this._meal.strIngredient12, this._meal.strIngredient13, this._meal.strIngredient14, this._meal.strIngredient15, this._meal.strIngredient16, this._meal.strIngredient17, this._meal.strIngredient18, this._meal.strIngredient19, this._meal.strIngredient20
        ];
        this.measures = [
            this._meal.strMeasure1, this._meal.strMeasure2, this._meal.strMeasure3, this._meal.strMeasure4, this._meal.strMeasure5, this._meal.strMeasure6, this._meal.strMeasure7, this._meal.strMeasure8, this._meal.strMeasure9, this._meal.strMeasure10, this._meal.strMeasure11, this._meal.strMeasure12, this._meal.strMeasure13, this._meal.strMeasure14, this._meal.strMeasure15, this._meal.strMeasure16, this._meal.strMeasure17, this._meal.strMeasure18, this._meal.strMeasure19, this._meal.strMeasure20
        ];
        this.render();
    }

    set ingredients(ings) {
        this._ingredients = [];

        ings.forEach(ing => {
            if (ing !== null && (ing.trim().length !== 0)) {
                this._ingredients.push(ing);
            }
        });
    }

    set measures(measures) {
        this._measures = [];

        measures.forEach(m => {
            if (m !== null && (m.trim().length !== 0)) {
                this._measures.push(m);
            }
        });
    }

    set mealForCategory(food) {
        describeMeal();
        const here = this;
        async function describeMeal() {
            try {
                const meal = await ApiData.getMealsById(food.idMeal);
                here.meal = meal;
            } catch (err) {
                console.log(err);
            }
        }
    }

    get meal() {
        return this._meal;
    }

    renderTable() {
        this.ingredientsListElement = "";
        for (var i = 0; i < this._measures.length; i++) {
            this.ingredientsListElement += `
                <tr>
                    <td>${this._ingredients[i]}</td>
                    <td>${this._measures[i]}</td>
                </tr>
            `;
        }
    }

    render() {
        this.renderTable();
        this.innerHTML = `
                <div class="card card-res">
                    <div class="row">
                        <div class="col-12 col-md-5">
                            <card-image src="${this.meal.strMealThumb}" alt="${this.meal.strMeal}">
                        </div>

                        <div class="col-12 col-md-7 pl-3 pl-md-0">
                            <article class="container py-2 pl-md-0">
                                <p class="h3 m-0">${this.meal.strMeal}</p>
                                <p class="text-muted">${this.meal.strArea} food</p>

                                <a class="text-info d-block" 
                                style="cursor:pointer;" 
                                data-toggle="collapse"
                                href="#ing${this.meal.idMeal}"
                                aria-expanded="false"
                                aria-controls="ing${this.meal.idMeal}"
                                role="button"
                                >Ingredients</a>

                                <div class="table-responsive collapse" id="ing${this.meal.idMeal}">
                                    <table class="table table-sm table-striped table-borderless">
                                        <caption>${this._ingredients.length} stuffs</caption>
                                        <tr>
                                            <th>Ingredients</th>
                                            <th>Measure</th>
                                        </tr>
                                        ${this.ingredientsListElement}
                                    </table>
                                </div>

                                <a class="text-info d-block" 
                                style="cursor:pointer;" 
                                data-toggle="collapse"
                                href="#i${this.meal.idMeal}"
                                aria-expanded="false"
                                aria-controls="i${this.meal.idMeal}"
                                role="button"
                                >Instructions</a>

                                <p class="text-justify collapse" id="i${this.meal.idMeal}">${this.meal.strInstructions}</p>
                            </article>
                        </div>
                    </div>
                </div>
        `;
        this.setAttribute("class", "col-12 mb-3");
    }
}

customElements.define("meal-item", MealItem);