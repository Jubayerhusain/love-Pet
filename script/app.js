console.log("hey jubayer your api file connect done")


// Fetch All Pet Categories
const peddyCategories = async() =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
    const data =await response.json();
    displayCatagoryBtn(data.categories)
}

// display the all peddy button 
const displayCatagoryBtn = (peddyCategoriesBTn) =>{
    // console.log(petCategoriesBTn)
    peddyCategoriesBTn.forEach(peddybtn => {
        console.log(peddybtn)
        const {category, category_icon} = peddybtn;

        const peddyCategory = document.getElementById('peddy-category');

        const div = document.createElement('div');
        div.innerHTML = `
        <button class="btn w-[200px] m-7 btn-lg">
        <img src=${category_icon} />
        <p class="text-xl font-bold">${category}</p>
        </button>
        `;
        peddyCategory.appendChild(div)
    });

}


peddyCategories();