let container = document.getElementById('search-results')
// Fetch the images data from the server
const url = "http://localhost:8080";
console.log("hii")
async function fetchData() {
    try {

        const response = await fetch(`${url}/user/images`);
        const data = await response.json();
console.log(data)
        Display(data.images, data.photographers);
        
        console.log(data.images,data.photographers)
    } catch (error) {
        console.error(error);
    }
}
showLoader2();
fetchData();

var photographerID;

let count = document.getElementById("count_div")

function Display(images, photographers) {
    container.innerHTML = null;
    count.innerHTML = null;
   
    let count_title = document.createElement("h4")
    count_title.innerText = +photographers.length + " Photographers😍";
    count.append(count_title)
    // 
    photographers.forEach((photographer) => {
        // ph div 
        let photographer_div = document.createElement("div");
        // pd detail div
        // let photographer_details = document.createElement("div");
        // ph img div
        // let photographer_images = document.createElement("div");
       
        // claass for ph details    
        // photographer_details.setAttribute("class", "details_div")
        // photographer_images.setAttribute("class", "images_div")
        // phdiv id
        photographer_div.setAttribute("id", `${photographer._id}`)
        photographer_div.setAttribute("class", "photographer_div")
        // let imgdt=[]
        // let images_data;
        // photographer_div.innerHTML=photographer
       
        let price= document.createElement("p" )
        price.setAttribute("id", "price")
           price.innerHTML='PRICE '+'\u20B9'+photographer.price+"/Hr";
        //    herrr
        let email = document.createElement("p")
        email.setAttribute("class", "book_div")
        email.innerHTML="Email => " +photographer.email;
        // 
        let name = document.createElement("h3")
        name.setAttribute("id", "name")
        name.innerHTML="Name => "+photographer.name;
        // 
        let camera =document.createElement("p")
        camera.setAttribute("class", "name_div");
        camera.innerHTML="Camera => "+photographer.camera; 
        let address =document.createElement("p")
        address.setAttribute("class", "name_div");
        address.innerHTML= "Address => "+photographer.address;
        let view_profile = document.createElement("button");
        view_profile.setAttribute("id", photographer._id); 
        view_profile.addEventListener("click", (event) => {
            
                const photographerId = event.target.closest(".photographer_div").id;
        
                console.log(photographerId);
                localStorage.setItem("photographerId", photographerId);
                fetchProfilePage(photographerId);
            
        }); 
        view_profile.innerText = "View Profile"
        photographer_div.append(name,email,price,camera,address,view_profile)
        
        container.append(photographer_div)
        // for (let i = 0; i < images.length; i++) {
        //     // if (images[i]._id == photographer._id) {
        //         images_data = images[i];
        //         let name_div = document.createElement("div");
        //         name_div.
        //         // 
        //         let book_div = document.createElement("div");
        //         book_div.;
        //         let view_profile = document.createElement("button");
        //         view_profile
        //        
        //         let name = document.createElement("p");
        //         name.innerText = photographer.name;
        //         name.
        //         let price = document.createElement("p");
        //         price.
        //         price.innerText = '\u20B9' + `${photographer.price} /hr`;
        //         let location = document.createElement("p");
        //         location.innerText = `\ud83d\udccd${photographer.address}`;
        //         name_div.append(name, location)
        //         book_div.append(price, view_profile)
        //         photographer_details.append(name_div, book_div);
        //         for (let i = 0; i < images_data.images.length; i++) {
        //             const img = new Image();
        //             img.src = `data:image/png;base64,${images_data.images[i]._id}`
        //             photographer_images.appendChild(img);
        //             photographer_div.append(photographer_images, photographer_details)
        //         // }
               
        //         // break;

        //     }
        //     container.append(photographer_div)
        // }

    })
}



/********************************************* Sorting ***************************************************/


let price_sort = document.getElementById("form-select")
let sortvalue;
let location_sort = document.getElementById("location")
let locationValue;


price_sort?.addEventListener("change", async () => {
    sortvalue = price_sort.value
    locationValue = location_sort.value;
    await fetch(`${url}/user/SortByPrice?Sortby=${sortvalue}&location=${locationValue}`)
        .then(res => res.json())
        .then((res) => {
            const data = res;
            Display(data.images, data.photographers)
        })
        .catch(err => console.log(err));
})

location_sort?.addEventListener("change", async () => {
    sortvalue = price_sort.value
    sort.value
    locationValue = location_sort.value;
    await fetch(`${url}/user/SortByPrice?Sortby=${sortvalue}&location=${locationValue}`)
        .then(res => res.json())
        .then((res) => {

            const data = res;
            Display(data.images, data.photographers)
            if (!data.photographers.length) {
                Swal.fire('Oops, Photographers not found at this location ☹')
                setTimeout(() => {
                    window.location.href = "./photographers.html"
                }, 2500)
            }
        })
        .catch(err => console.log(err));
})



// for redirecting



function fetchProfilePage(photographerId) {
    const profilePageurl = `photographer.html?id=${photographerId}`
    window.open(profilePageurl, "_blank");
}

// username visible after logging in

var HamBurger = document.getElementById("hamburger");
var navContents = document.querySelector(".nav-contents");

HamBurger.addEventListener("click", function () {
    navContents.classList.toggle("show-nav");
    // console.log("clicked")
});

// username visible after logging in

let loginTag = document.getElementById("login")
let singupTag = document.getElementById("signup")

let isUserName = localStorage.getItem("userName")

if(isUserName){
    singupTag.style.display = "none"
    loginTag.textContent = "Hi," + " " + isUserName
    loginTag.style.color = "#dd4545"
    loginTag.setAttribute("href","./userDashboard.html");
}else{
    singupTag.style.display = "block"
    loginTag.textContent = "Login"
}