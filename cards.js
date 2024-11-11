// console.log("Hello Card Result !");

const arr = []

const div = document.querySelector("#checkOut")


const data = localStorage.getItem("cards")

const convert = JSON.parse(data);

console.log(convert);


convert.map((items, index) => {

    
    div.innerHTML += `
    <div class="cards border border-white p-5 rounded bg-light-subtle color-white">

    <div class="d-flex p-2">
    <img src="${items.image}" alt="${items.model}" class="phone-image" />
    </div>

    <h1 class="border-bottom border-info">Brand : ${items.brand} </h1>
    <h1 class="border-bottom border-info">Model : ${items.model}</h1>
    <h1 class="border-bottom border-info">Ram : ${items.ram} </h1>
    <h1 class="border-bottom border-info">Rom : ${items.rom} </h1>
    <h1 class="border-bottom border-info">Camra : ${items.camera} </h1>
    <h1 id="price${index}">Price : $ ${items.price} </h1>

    <h1 class="d-flex gap-3" > Quantity : 
    
    <button class="btn btn-primary mt-3" onclick = "increase(${index})"> + </button>
    <span id="digit-${index}"> 1 </span> 
    <button class="btn btn-primary mt-3" onclick = "decrease(${index})"> - </button>

    </h1>
    
    <button class="btn btn-primary mt-3" onclick="deleteCard(${index})">Delete</button>

    <button class="btn btn-primary mt-3" onclick="buyNow(${index})">Buy Now</button>

    </div>
    ` 
    
})


function increase(index) {

    let addNumber = document.querySelector(`#digit-${index}`)
    let price = document.querySelector(`#price${index}`);

    // Increase quantity
    addNumber.innerHTML++

    price.innerHTML = `Price :  $ ${convert[index].price * addNumber.innerHTML};`
}

function decrease(index) {
    
    let subNumber = document.querySelector(`#digit-${index}`)
    let price = document.querySelector(`#price${index}`);

    // Decrease quantity only if it's greater than 1
    if (subNumber.innerHTML > 1) {
        subNumber.innerHTML-- 
        price.innerHTML = `Price :  $ ${convert[index].price * subNumber.innerHTML};`

    }
}


function deleteCard (index) {

    convert.splice(index, 1)

    localStorage.setItem("cards", JSON.stringify(convert))

    div.innerHTML = ""

    convert.map((items, index) => {

    div.innerHTML += `
       
        <div class="cards border border-white p-5 rounded bg-light-subtle color-white">
    
        <div class="d-flex p-2">
        <img src="${items.image}" alt="${items.model}" class="phone-image" />
        </div>
    
        <h1 class="border-bottom border-info">Brand : ${items.brand} </h1>
        <h1 class="border-bottom border-info">Model : ${items.model}</h1>
        <h1 class="border-bottom border-info">Ram : ${items.ram} </h1>
        <h1 class="border-bottom border-info">Rom : ${items.rom} </h1>
        <h1 class="border-bottom border-info">Camra : ${items.camera} </h1>
        <h1 class="border-bottom border-info" id="price${index}">Price : $ ${items.price} </h1>
    
        <h1 class="d-flex gap-3" > Quantity : 
        
        <button class="btn btn-primary mt-3" onclick = "increase(${index})"> + </button>
        <span id="digit-${index}" class="price-${index}"> 1 </span> 
        <button class="btn btn-primary mt-3" onclick = "decrease(${index})"> - </button>
    
        </h1>
        
        <button class="btn btn-primary mt-3" onclick="deleteCard(${index})">Delete</button>

        <button class="btn btn-primary mt-3" onclick="buyNow(${index})">Buy Now</button>

        </div>
        `

    })

    Swal.fire({
        title: "No problem OR Dont worry",
        text: "Your item has deleted !",
        icon: "success",
      });

}



function buyNow(index) {
    console.log(index);

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be perhase this Mobile Phone!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, buy it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Thanks For Shopping!",
            text: "Successfully you bought new mobile phone.",
            icon: "success"
          });
        }
      });
    
}



/* This is a spread opreator Working */


// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];

// const newArr = [...num1, ...num2]

// console.log(newArr);