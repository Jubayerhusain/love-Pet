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
        <button onclick="categoriesDisaplay(this,'${category}')" class="btn  bg-white w-[200px] m-7 btn-lg " >
        <img src=${category_icon} />
        <p class="text-xl font-bold">${category}  </p>
        </button>
        `;
        peddyCategory.appendChild(div)
    });

}
let previousBtn = null;
const categoriesDisaplay = async (buttonElement, id) => {
    if (previousBtn) {
        previousBtn.style.backgroundColor = "white";
        previousBtn.style.border = "none";
        previousBtn.style.borderRadius = "10px";
    }
    buttonElement.style.backgroundColor = "rgba(1, 97, 97, 0.1)";
    buttonElement.style.borderRadius = "35px";
    buttonElement.style.border = "3px solid teal";
    previousBtn = buttonElement;

    const spinner = document.getElementById('spinner');
    spinner.classList.remove('hidden')
    const peddyCategory = document.getElementById('all-peddy-display');
    peddyCategory.classList.add('hidden')
    const responce = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`);
    const data = await responce.json();
    setTimeout(() => {
        displayAllPets(data.data.sort((firstPed, secondPet) => secondPet.price - firstPed.price));
    }, 1500);
}
// Fetch All Pets
const allPeddys = async () => {
    const respons = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`);
    const data = await respons.json();
    // displayAllPets(data.pets);
    // console.log('3 second done')
    const spinner = document.getElementById('spinner');
    spinner.classList.remove('hidden')
    setTimeout(() => {
        displayAllPets(data.pets);
    }, 1000);
}
const sortpets = async () => {
    console.log('sort btn is clicked')
    const respons = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`);
    const data = await respons.json();
    const spinner = document.getElementById('spinner');
    spinner.classList.remove('hidden')
    const peddyCategory = document.getElementById('all-peddy-display');
    peddyCategory.classList.add('hidden')
    setTimeout(() => {
        displayAllPets(data.pets.sort((firstPed, secondPet) => secondPet.price - firstPed.price));
    }, 1000);
}
const displayAllPets = (displayPets) => {
    const peddyCategory = document.getElementById('all-peddy-display');
    peddyCategory.classList.remove('hidden')
    const spinner = document.getElementById('spinner');
    spinner.classList.add('hidden')
    // console.log(displayPets);
    if (displayPets.length === 0) {
        const noFoundData = document.getElementById('no-data-found');
        noFoundData.classList.remove('hidden')
    } else {
        const noFoundData = document.getElementById('no-data-found');
        noFoundData.classList.add('hidden')
    }
    const allPeddyDisplay = document.getElementById('all-peddy-display');
    allPeddyDisplay.innerHTML = '';
    displayPets.forEach(pets => {
        // console.log(pets)
        const {
            image,
            breed,
            pet_name,
            petId,
            date_of_birth,
            price,
            gender,
        } = pets;
        const petDiv = document.createElement('div');
        petDiv.innerHTML = `
        <div class = "border-1 p-2">
            <div class="card bg-base-100 w-92 border-2">
                <figure class="px-5 pt-5">
                    <img
                    src=${image}
                    alt="pet image"
                    class="rounded-xl h-[220px]" />
                </figure>
                <div class="card-body text-start">
                    <h1 class = "font-bold text-2xl text-gray-950">${pet_name?pet_name:"Pet Name not found!"}</h1>
                    <p class = "font-normal text-md flex items-center"><img class = "w-5 h-5" src = "./images/breed.png" /> Breed: ${breed?breed:"Pet breed Not found!"}</p>            
                    <p class = "font-normal text-md flex items-center"><img class = "w-5 h-5 mr-1" src = "./images/birth.png"/> Birth: ${date_of_birth?date_of_birth:"date Of birth not found!"}</p>            
                    <p class = "font-normal text-md flex items-center"><img class = "w-5 h-5" src = "./images/venus-symbol.png"/> Gender: ${gender?gender:"Pet gender Not found!"}</p>            
                    <p class = "font-normal text-md flex items-center ml-1">$ Price: ${price?price:"Not Available"}$</p>            
                </div>
                <div class = "border-t-2 border-teal-200 flex justify-between w-11/12 mx-auto h-20 pt-3">
                    <button type="submit" class="btn bg-transparent hover:bg-green-200" onclick = "reactPets('${image}')"><img class = "h-10 w-10" src = "https://img.icons8.com/?size=100&id=1AllZHY53hW3&format=png&color=000000" /></button>
                    <button type="submit" class="btn text-teal-600 text-lg font-semibold bg-transparent hover:bg-teal-600 hover:text-white" onclick = "adoptModal()">Abopt</button>
                    <button type="submit" class="btn text-teal-600 text-lg font-semibold bg-transparent hover:bg-teal-600 hover:text-white"onclick = "petSDetails('${petId}')" >Details</button>
                </div>
            </div>
        </div>
        `;
        allPeddyDisplay.append(petDiv);
    })

}
// calmDown modal for Adopt btn..
const adoptModal = () =>{
    console.log('adopt btn is clicked')
    adoptModalDisplay();
    // my_modal_6.showModal();
    my_modal_6.showModal();

    // Automatic close after 3 seconds
    let countdown = 1;
    const countdownInterval = setInterval(() => {
        console.log(countdown);  // Count display in console
        if (countdown === 1) {
            my_modal_6.close();  // Modal close after 3 seconds
            clearInterval(countdownInterval);  // Stop the countdown
        }
        countdown -= 1;
    }, 500);
}
const adoptModalDisplay = () =>{
    const adoptModal = document.getElementById('adopt-modal');
    adoptModal.innerHTML= `
    <dialog id="my_modal_6" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
        <h3 class="text-6xl font-bold text-center text-teal-500" >Congrats!</h3>
        <p class="py-4 text-md text-center text-gray-700 font-semibold">Successful Adopt Pets</p>
    </div>
    </dialog>
    `;
    
}
// on click modal create for details btn..
const petSDetails = async (id) => {
    console.log('pets detail btn click done')
    const responce = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`);
    const data = await responce.json();
    petSDetailsDisplay(data.petData);
    my_modal_5.showModal();
}
// display pet detail with modal..
const petSDetailsDisplay = (petDetails) => {
    console.log(petDetails)
    const {
        image,
        breed,
        pet_name,
        date_of_birth,
        price,
        gender,
        pet_details,
        vaccinated_status
    } = petDetails
    const peddyDetails = document.getElementById('peddy-details');
    peddyDetails.innerHTML = `
    <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
        <div>
            <img class = "w-full h-[270px] rounded-xl shadow-sm" src= ${image} />
        </div>
        <h1 class = "text-3xl font-bold my-2 text-gray-900">${pet_name}</h1>
        <div class = "flex justify-between text-lg font-semibold text-gray-700">
            <div>
                <p class = "flex items-center"><img class = "w-5 h-5" src = "./images/breed.png"/>Bred: ${breed}</p>
                <p class = "flex items-center"><img class = "w-5 h-5" src = "./images/venus-symbol.png"/>Gender: ${gender}</p>
                <p class = "flex items-center"><img class = "w-5 h-5" src = "./images/venus-symbol.png"/>Vaccinated status: ${vaccinated_status}</p>

            </div>
            <div>

                <p/>$ Price: ${price}</p>
                <p class = "flex items-center"><img class = "w-5 h-5 mr-1" src = "./images/birth.png"/>Date Of Birth: ${date_of_birth}</p>
            </div>
        </div>
        <div>
            <p class = "text-2xl text-gray-900 font-bold my-3" >Details Information...</p>
            <p class = " text-md font-semibold text-gray-700 italic">${pet_details}</p>
        </div>
        <div class="modal-action">
            <form method="dialog">
                <button class="btn bg-teal-600 text-white text-sm">Close</button>
            </form>
        </div>
    </div>
    </dialog>
    `;
}
// after click react btn then peddy picture will be show future section 
const reactPets = (image) => {
    // console.log('react btn is clicked', image)
    const reactToAddPeddy = document.getElementById('reactTo-add-peddy');
    const addPetDiv = document.createElement('div');
    addPetDiv.innerHTML = `
    <div>
        <img class = " rounded-lg"  src=${image} />
    </div>
    `;
    // reactToAddPeddy.appendChild(addPetDiv);
    reactToAddPeddy.insertBefore(addPetDiv, reactToAddPeddy.firstChild);

}
peddyCategories();
allPeddys();