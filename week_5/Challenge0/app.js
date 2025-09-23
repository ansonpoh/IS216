/* Task 6 - API call */
const root = "http://localhost/IS216/Week5_InClass/DrinksAPI/"
let section_results = document.getElementById('results');

function get_all_drinks() {
    console.log("[START] get_all_drinks()");

    const api_endpoint_url = 'http://localhost/IS216/Week5_InClass/DrinksAPI/api/drink/read.php'; // local file

    axios.get(api_endpoint_url).
    then(response => {

        // Build a string of Bootstrap cards
        let result_str = ``;
        let drinks_array = response.data.records; // Array of drink objects
        // console.log(drinks_array); // Array of drink objects

        // Task 4 - Display Drinks
        //   Each drink is a Bootstrap card
        // Replace all the hard-coded strings with actual values as read from the JSON file
        for(let drink of drinks_array) {
            result_str += `
                <div class="col">
                    <div class="card h-100">
                        <img src="${root + drink.photo_url}" 
                             class="card-img-top"
                             alt="${drink.name}">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${drink.name}
                            </h5>
                            <p class="card-text small text-muted mb-0">
                                ${drink.category} • ${drink.alcoholic}
                            </p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Inject the cards into the #results section
        section_results.innerHTML = result_str;
    }).
    catch(error => {
        console.log(error.message);

        // Task 5 - Data can't be loaded, display alert
        //   "Failed to load drinks data."
        // YOUR CODE GOES HERE
        let section_results = document.getElementById('results');
        let alert = document.createElement("div");
        alert.className = "alert alert-danger col-md-12 col-sm-12 col-12";
        alert.textContent = "Failed to load drinks data";
        section_results.appendChild(alert);
    });

    console.log("[END] get_all_drinks()");
}


/* Task 7 - Category Dropdown Menu */
function populate_category_dropdown() {
    console.log("[START] populate_category_dropdown()");

    const api_endpoint_url = 'http://localhost/IS216/Week5_InClass/DrinksAPI/api/drink/category.php'; // API endpoint

    axios.get(api_endpoint_url).
    then(response => {

        console.log("Axios call completed successfully!");
        // YOUR CODE GOES HERE
        const data = response.data.records;
        let select = document.getElementById("category");
        for(let category of data) {
            let option = document.createElement("option");
            option.textContent = category;
            option.value = category;
            select.appendChild(option);
        }
    }).
    catch(error => {
        console.log(error.message);
    });

    console.log("[END] populate_category_dropdown()");
}


/* Task 8 - Category Dropdown Event Listener */
let category = document.getElementById("category");
category.addEventListener("change", () => {
    let value = category.value;
    if(value == "") {
        get_all_drinks();
        return;
    }
    const api_endpoint = `http://localhost/IS216/Week5_InClass/DrinksAPI/api/drink/search.php?c=${value}`;

    axios.get(api_endpoint).then(res => {
        const data = res.data.records;
        section_results.innerHTML = "";
        for(let drink of data) {
            let col = createCol(drink);
            section_results.appendChild(col);
        }
    })
})


/* Task 9 - Alcoholic Dropdown Event Listener */
let alcoholic = document.getElementById("alcoholic");
alcoholic.addEventListener("change", () => {
    let value = alcoholic.value;
    const api_endpoint = `http://localhost/IS216/Week5_InClass/DrinksAPI/api/drink/search.php?a=${value}`;

    axios.get(api_endpoint).then(res => {
        const data = res.data.records;
        section_results.innerHTML = "";
        for(let drink of data) {
            let col = createCol(drink);
            section_results.appendChild(col);
        }
    })
})


/* Task 10 - Name search input Event Listener */
let name_search = document.getElementById("name_search");
name_search.addEventListener("keyup", () => {
    let value = name_search.value;
    const api_endpoint = `http://localhost/IS216/Week5_InClass/DrinksAPI/api/drink/search.php?n=${value}`;

    axios.get(api_endpoint).then(res => {
        const data = res.data.records;
        section_results.innerHTML = "";
        for(let drink of data) {
            let col = createCol(drink);
            section_results.appendChild(col);
        }
    }) 
})




// DO NOT MODIFY THE BELOW LINES
get_all_drinks();
populate_category_dropdown();

function createCol(drink) {
    let col = document.createElement("div");
    col.className = "col";
    let card = document.createElement("div");
    card.className = "card h-100";
    let img = document.createElement("img");
    img.src = root + drink.photo_url;
    img.alt = drink.name;
    let card_body = document.createElement("div");
    card_body.className = "card-body";
    let card_title = document.createElement("h5");
    card_title.className = "card-title";
    card_title.textContent = drink.name;
    let text = document.createElement("p");
    text.className = "card-text small text-muted mb-0";
    text.textContent = drink.category + " • " + drink.alcoholic;

    card_body.appendChild(card_title);
    card_body.appendChild(text);
    card.appendChild(img);
    card.appendChild(card_body);
    col.appendChild(card);
    return col;
}