// DO NOT MODIFY THIS METHOD
//   Except if you need to modify the api_endpoint (e.g. using a different HTTP port such as 8888)
const root = "http://localhost/IS216/Week5_InClass";
function get_all() {

    console.log("**** [START] get_all() *****");

    let api_endpoint = 'http://localhost/IS216/Week5_InClass/krazydating/api/profile/read.php';

    axios.get(api_endpoint).
    then(response => {
        // 1) Inspect response.data
        // console.log(response.data);
        const data = response.data.records;
        // 2) Populate result HTML
        populate_cards(data); // Array of profiles

    })
    .catch(error => {
        console.log(error.message);
    })

    console.log("**** [END] get_all() *****");
}


function populate_cards(profile_array) {

    console.log("**** [START] populate_cards() *****");

    //============================================================================
    // Task 1
    // In this task, for convenience and simplicity, use Template Literals to
    //   craft a String that contains HTML code.
    // 
    // This means - you do NOT have to use create element, create text node,
    //   append child methods.
    //============================================================================

    let result_str = ''; // Use this as a Template Literals string. Append to this.
    // YOUR CODE GOES HERE
    for(let person of profile_array) {
        let color = "blue";
        if(person.gender == "F") color = "pink"
        result_str += `
            <div class="col">
                <div class="card h-100 ${color}">
                    <span class="age-pill badge rounded-pill bg-warning text-black position-absolute top-0 end-0 m-2">${person.age}</span>
                    <img src="${root + person.photo_url}" class="card-img-top" alt="${person.name}">
                    <div class="card-body">
                        <h5 class="card-title">${person.name}</h5>
                        <h6><span class="badge text-bg-info">${person.occupation}</span></h6>
                        <p class="card-text fst-italic">${person.quote}</p>
                    </div>
                </div>
            </div>
        `
    }

    // DO NOT MODIFY THIS LINE (USE THIS AS IS)
    document.getElementById('my-cards').innerHTML = result_str;

    console.log("**** [END] populate_cards() *****");
}


// Parameter gender can take on the value of:
//   'f' for females
//   'm' for males
function get_by_gender(gender) {
    console.log("**** [START] get_by_gender() *****");

    //============================================================================
    // Task 2
    // In this task, use Axios to make an asynchronous API call.
    // Go to the Krazy Dating API documentation and find out which API endpoint
    //   is the most suitable one to use in this case.
    // Make use of the code from get_all() function.
    //============================================================================

    // YOUR CODE GOES HERE
    const api_endpoint = `http://localhost/IS216/Week5_InClass/krazydating/api/profile/search.php?g=${gender}`
    let color = "blue";
    if(gender == "f") color = "pink"

    let result_str = "";
    axios.get(api_endpoint).then(res => {
        const data = res.data.records;
        // console.log(data);
        for(let person of data) {
            result_str += `
                <div class="col">
                    <div class="card h-100 ${color}">
                        <span class="age-pill badge rounded-pill bg-warning text-black position-absolute top-0 end-0 m-2">${person.age}</span>
                        <img src="${root + person.photo_url}" class="card-img-top" alt="${person.name}">
                        <div class="card-body">
                            <h5 class="card-title">${person.name}</h5>
                            <h6><span class="badge text-bg-info">${person.occupation}</span></h6>
                            <p class="card-text fst-italic">${person.quote}</p>
                        </div>
                    </div>
                </div>
            `
        }
        document.getElementById('my-cards').innerHTML = result_str;
    })

    console.log("**** [END] get_by_gender() *****");
}