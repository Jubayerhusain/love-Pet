console.log("hey jubayer your api file connect done")


// Fetch All Pet Categories
const peddyCategories = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
    const data = await response.json();
    displayCatagoryBtn(data.categories)
}

// display the all peddy button 
const displayCatagoryBtn = (peddyCategoriesBTn) => {
    // console.log(petCategoriesBTn)
    peddyCategoriesBTn.forEach(peddybtn => {
        // console.log(peddybtn)
        const {
            category,
            category_icon
        } = peddybtn;

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
// Fetch All Pets
const allPeddys = async () => {
    const respons = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`);
    const data = await respons.json();
    deisplayAllPets(data.pets);
}

const deisplayAllPets = (displayPets) => {
    console.log(displayPets);
    displayPets.forEach(pets => {
        console.log(pets)
        const {image, breed, pet_name, category, date_of_birth, price, gender, pet_details} = pets;
        const allPeddyDisplay = document.getElementById('all-peddy-display');
        const petDiv = document.createElement('div');
        petDiv.innerHTML = `
        <div class = "border-1 p-2">
            <div class="card bg-base-100 w-96 border-2">
                <figure class="px-5 pt-5">
                    <img
                    src=${image}
                    alt="pet image"
                    class="rounded-xl h-[240px]" />
                </figure>
                <div class="card-body text-start">
                    <h1 class = "font-bold text-2xl text-gray-950">${pet_name?pet_name:"Pet Name not found!"}</h1>
                    <p class = "font-normal text-md ">Breed: ${breed?breed:"Pet breed Not found!"}</p>            
                    <p class = "font-normal text-md ">Birth: ${date_of_birth?date_of_birth:"Pet date Of birth not found!"}</p>            
                    <p class = "font-normal text-md ">Gender: ${gender?gender:"Pet gender Not found!"}</p>            
                    <p class = "font-normal text-md ">Price: ${price?price:"Not Available"}$</p>            
                </div>
                <div class = "border-t-2 border-teal-200 flex justify-between w-11/12 mx-auto h-20 pt-3">
                    <button type="submit" class="btn bg-transparent"><img class = "h-10 w-10" src = "https://img.icons8.com/?size=100&id=1AllZHY53hW3&format=png&color=000000" /></button>
                    <button type="submit" class="btn text-teal-600 text-lg font-semibold bg-transparent">Abopt</button>
                    <button type="submit" class="btn text-teal-600 text-lg font-semibold bg-transparent">Details</button>
                </div>
            </div>
        </div>
        `;
        allPeddyDisplay.append(petDiv);
    })

}
peddyCategories();
allPeddys();