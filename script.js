let elBody = document.querySelector("#formSection")
let elForm = document.querySelector("#form")
let elLink = document.querySelector("#imglink")
let elNames = document.querySelector("#productname")
let pruductDescription = document.querySelector("#pruductdescription")
let prudectPrices = document.querySelector("#prudectprice")
let elSaleYes = document.querySelector("#saleyes")
let elSaleNo = document.querySelector("#saleno")
let selectType = document.querySelector("#selecttype")
let formBtn = document.querySelector("#formbtn")
let clothes = document.querySelector("#clothes")
let food = document.querySelector("#food")
let technique = document.querySelector("#technique")
let cardbody = document.querySelector("#cardbody")
let elList = document.querySelector("ul")



  
   elForm.addEventListener("submit",function arrAdd(evt) {
    evt.preventDefault
    if (saleYes.value= "yes") {
      cardbody.innerHTML+=`
      <li class="card">
      <span class="sale">
        <button  class="btn__sale">sale</button>
        <button  class="btn__basket">
          <img
            src="img/buscet.svg"
            alt="basket
                  "
            width="20"
            height="20"
          />
        </button>
      </span>
      <img
        class="imgpruduct"
        src=${elLink}}
        alt="pruduct png"
        width="200"obj1
        height="200"
      />
      <h2 class="pruduct-title">${productNamesa}</h2>
      <div class="wrap">
        <span class="price">
          <p class="sale__price"><del>${productsPrice}</del></p>
          <p class="sale__skidka">p>
        </span>
        <button type="button"
          class=" "
        >
          <img src="img/likebtn.svg" alt="like btn" width="20" height="20" />
        </button>
      </div>
   <div class="div">
      <button
          type="submit"
          id="buybtn"
          class=" buybtn py-2 px-4 mb-5 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-75"
        >
          Buy
        </button>
        <button class="btndelete buybtn py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-opacity-75 " id="deletbtn"> Delete</button>
   </div>
    </li>
      
      `}
      
    
   })


 
 
// });
// for (let i = 0; i <newArr.length; i++) {
//   let newLI = document.createElement("li");
//   newLI.textContent =newArr.productName
//   let elList=document.createElement("ul")
//   elList.append(newLI);
//   // cardbody.append(elList)
// }











// console.log(elSaleYes.value.trim()=="yes");







