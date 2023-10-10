let rootElement = document.querySelector("#root");

async function getData(){
    let inpValue = document.querySelector("#searchMeal").value;
    try {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inpValue}`);
        let data = await res.json();
        printData(data.meals)
    } catch (error) {
        console.log("Data Not Found")
    }
}

document.querySelector("#searchMeal").addEventListener("input", function(){
    throttleSearch()
})

function throttle(func, delay){
    let throttling = false;
    function inner(){
        if(throttling == false){
            throttling = true;
            func()
            setTimeout(()=>{
                throttling = false;
            }, delay)
        }
    }
    return inner;
}

let throttleSearch = throttle(getData,400)

function printData(meals){
    rootElement.textContent = "";
    meals.forEach((items)=>{
        let mealCard = document.createElement("div");
        mealCard.className = "card";
        let mealImg = document.createElement("img");
        mealImg.className = "mealLogo"
        mealImg.src = items.strMealThumb;
        let mealName = document.createElement("p");
        mealName.textContent = items.strMeal;
        let mealArea = document.createElement("p");
        mealArea.textContent = items.strArea;
        let mealCategory = document.createElement("p");
        mealCategory.textContent = items.strCategory;
        let mealDescription = document.createElement("p");
        mealDescription.textContent = items.strInstructions;
        mealCard.append(mealImg, mealName, mealCategory, mealArea, mealDescription)
        rootElement.append(mealCard);
    })
} 