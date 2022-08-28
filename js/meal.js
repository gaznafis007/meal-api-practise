function mealData(){
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response => response.json())
    .then(data => dispData(data.categories))
}
const dispData = meals =>{
    const strContainer = document.getElementById('str-container');
    // console.log(meals);
    const mealDisp = meals.forEach(meal =>{
        const {idCategory, strCategory, strCategoryDescription, strCategoryThumb} = meal;
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
        <div class="card">
            <img src="${strCategoryThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${strCategory}</h5>
                <h6 class="card-title">Meal ID: ${idCategory}</h6>
                <p class="card-text">${strCategoryDescription.slice(0,120)}</p>
                <button class="btn btn-outline-primary">Order now</button>
            </div>
        </div>`;
    strContainer.appendChild(cardDiv);
    })
}
document.getElementById('search-for-meal').addEventListener("click", function(){
    const searchItem = document.getElementById('search-field');
    const searchItemName = searchItem.value;
    const loadSearchData = () =>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItemName}`;
        fetch(url)
        .then(response => response.json())
        .then(data => showMeal(data.meals))
    }
    loadSearchData();
    const showMeal = meal =>{
        const mealContainer = document.getElementById('meal-container');
        mealContainer.innerHTML = ``;
        const mealOnTheShow = meal.forEach(searchedMeal =>{
            const {strMeal, strMealThumb, strArea, strInstructions} = searchedMeal;
            const myMeals = document.createElement('div');
            myMeals.classList.add('col');
            myMeals.innerHTML =`<div class="card">
            <img src="${strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${strMeal}</h5>
              <h6 class="card-title">${strArea}</h6>
              <p class="card-text">${strInstructions.slice(0,100)}</p>
            </div>
          </div>`;
          mealContainer.appendChild(myMeals);
        })
    }

})
mealData();