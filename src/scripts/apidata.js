import { variables as v } from "./variables.js";

class ApiData {
    static getCategories() {
        return fetch(`${v.apiUrlCategories}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.categories) {
                    return Promise.resolve(responseJson.categories);
                }
            })
            .catch(err => {
                return Promise.reject(err);
            })
    }

    static getMealsByName(term) {
        return fetch(`${v.apiUrlSearch}${term}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.meals === null) {
                    return Promise.reject(`${term} was not found`);
                } else {
                    return Promise.resolve(responseJson.meals);
                }
            })
            .catch(err => {
                return Promise.reject(err);
            })
    }

    // return array contains object
    static getMealsByCategory(category) {
        return fetch(`${v.apiUrlByCategory}${category}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                return Promise.resolve(responseJson.meals);
            })
            .catch(err => {
                return Promise.reject(err);
            })
    }

    // will return an object, !array
    static getMealsById(mealId) {
        return fetch(`${v.apiUrlById}${mealId}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                return Promise.resolve(responseJson.meals[0]);
            })
            .catch(err => {
                return Promise.reject(err);
            })
    }
}
export default ApiData;