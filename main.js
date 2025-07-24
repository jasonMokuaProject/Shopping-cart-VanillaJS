let shopbox = document.getElementsByClassName('DisplayProducts')[0];

// List of products for demo 

let products = [{
    id: 'jdurioyyyoootra',
    name: 'Casual Black T-shirt',
    price: 49,
    desc: 'Plain BLACK T Shirt UNISEX Tshirts 100% cotton ',
    image: 'images/istockphoto-1354020636-2048x2048.jpg'

},
{
    id: 'tyuturdhdfa',
    name: 'Casual Red T-shirt',
    price: 29,
    desc: 'Plain red T Shirt UNISEX Tshirts 100% cotton ',
    image: 'images/istockphoto-1354031012-612x612.jpg'

}, {
    id: 'jduwterhrhensa',
    name: 'Casual Blue T-shirt',
    price: 65,
    desc: 'Plain Blue T Shirt UNISEX Tshirts 100% cotton ',
    image: 'images/istockphoto-1427972687-612x612.jpg'

}, {
    id: 'zcgfbgfgfgnsa',
    name: 'Casual Blue T-shirt',
    price: 27,
    desc: 'Plain Blue T Shirt UNISEX Tshirts 100% cotton ',
    image: 'images/istockphoto-1402143412-612x612.jpg'

}
    , {
    id: 'oiggvygsfgfgnsa',
    name: 'Casual Yellow T-shirt',
    price: 34,
    desc: 'Plain Yellow T Shirt UNISEX Tshirts 100% cotton ',
    image: 'images/istockphoto-1490197755-612x612.jpg'

},




{
    id: 'htysfyyoootra',
    name: 'Casual blue T-shirt',
    price: 24,
    desc: 'Plain blue T Shirt UNISEX Tshirts 100% cotton ',
    image: 'images/41pXA96wyfL._AC_SL1024_.jpg'

},
{
    id: 'tyutbchdfa',
    name: 'Royal blue Hoodie ',
    price: 36,
    desc: 'Royal blue hoodie   100% cotton ',
    image: 'images/61bZr8xO-xL._AC_SL1500_.jpg'

}, {
    id: 'jdyrewhensa',
    name: 'Red Hoodie',
    price: 65,
    desc: 'Red hoodie UNISEX  80% Cotton, 20% Polyester ',
    image: 'images/61c8ag3FaYL._AC_SL1500_.jpg'

}, {
    id: 'znbhfgfgnsa',
    name: 'Pink Hoodie',
    price: 47,
    desc: 'Pink Hoodie UNISEX  80% Cotton, 20% Polyester ',
    image: 'images/61oFWswdxDL._AC_SL1500_.jpg'

}
    , {
    id: 'oigghrydfsfgfgnsa',
    name: 'Black Hoodie',
    price: 62,
    desc: 'Black Hoodie UNISEX  80% Cotton, 20% Polyester ',
    image: 'images/61p4WU+7n2L._AC_SL1500_.jpg'

},








{
    id: 'hponjhsotra',
    name: 'Brown Hoodie',
    price: 24,
    desc: 'Black Hoodie UNISEX  80% Cotton, 20% Polyester ',
    image: 'images/71DtSKFquQL._AC_SL1500_.jpg'

},
{
    id: 'vjgcxgdtta',
    name: 'blue Hoodie ',
    price: 36,
    desc: 'blue hoodie 100% cotton ',
    image: 'images/71lP3O+MMLL._AC_SL1500_.jpg'

}, {
    id: 'fthdnneensa',
    name: 'grey Hoodie',
    price: 65,
    desc: 'grey hoodie UNISEX  80% Cotton, 20% Polyester ',
    image: 'images/71QYM-QScaL._AC_SL1500_.jpg'

}, {
    id: 'mjkuyttttttsa',
    name: 'Orange T-shirt',
    price: 21,
    desc: 'T Shirt UNISEX Tshirts 100% cotton ',
    image: 'images/414pwfIhnkL._AC_SL1024_.jpg'

}
    , {
    id: 'oerrrrrrrrfsfgfgnsa',
    name: 'Grey and Green Hoodie',
    price: 39,
    desc: 'Grey and Green Hoodie UNISEX  80% Cotton, 20% Polyester ',
    image: 'images/618AdjvRepL._AC_SL1500_.jpg'

},











{
    id: 'ertretotra',
    name: 'Black sweatshirt',
    price: 55,
    desc: 'Black sweatshirt UNISEX 61% Cotton, 39% Polyester ',
    image: 'images/41JeDF5XYpL._AC_.jpg'

},
{
    id: 'retfgdgdtta',
    name: 'Black and Blue sweatshirt ',
    price: 36,
    desc: 'Black and Blue sweatshirt 67% Cotton, 29% Polyester ',
    image: 'images/41x+32+RNqL._AC_.jpg'

}, {
    id: 'ftghhnensaw',
    name: 'Navy blue Hoodie',
    price: 65,
    desc: 'navy hoodie UNISEX  61% Cotton, 39% Polyester ',
    image: 'images/61Aa9wVTBdL._AC_SL1500_.jpg'

}, {
    id: 'mjkgggggtttsa',
    name: 'blue T-shirt',
    price: 21,
    desc: 'blue T Shirt UNISEX Tshirts 100% cotton ',
    image: 'images/41pXA96wyfL._AC_SL1024_.jpg'

}
    , {
    id: 'oerddrrrrfsfgfwsa',
    name: 'Grey and Green Hoodie',
    price: 39,
    desc: 'Grey and Yellow Hoodie UNISEX  80% Cotton, 20% Polyester ',
    image: 'images/611hTVhLw-L._AC_SL1300_.jpg'

},

{
    id: 'YTRYTsxxfsfgfwsa',
    name: 'Green Hoodie',
    price: 39,
    desc: 'Green Hoodie UNISEX  80% Cotton, 20% Polyester ',
    image: 'images/618AdjvRepL._AC_SL1500_.jpg'

},




];

// basket

let featureElement = document.getElementById('theSortOperation');

function shuffleProducts() {
    console.log(featureElement.value);


    switch (featureElement.value) {
        case "High-price":
            products.sort(function (a, b) { return a.price - b.price });

            break;
        case "Low-price":
            products.sort(function (a, b) { return b.price - a.price });

            break;
        case "High-Alphabet":
            products.sort(function (a, b) { return a.name - b.name });

            break;
        case "Low-Alphabet":
            products.sort(function (a, b) { return b.name - a.name });

            break;
    }


}



let basket = JSON.parse(localStorage.getItem('cart')) || [];



// pagination 

let totalnumberofproducts = products.length;
let per_page = 4;
let numberOfPageButton = Math.ceil(totalnumberofproducts / per_page);
let x;
let orginal_number = 0;
let pagination_Container = document.getElementsByClassName('pagination')[0];

// Create Pagination Buttons 
CreateProducts();
function CreateProducts() {
    for (x = 1; x < numberOfPageButton + 1; x++) {

        let button_number = document.createElement('button');
        button_number.innerHTML = x;
        button_number.setAttribute('data-position', orginal_number); orginal_number++;
        button_number.classList.add('paginationbutton');

        button_number.addEventListener('click', function (e) {

            // console.log(e.target.getAttribute('data-position'));

            let clicked_position = e.target.getAttribute('data-position') * per_page;

            let stop_pagination = clicked_position + per_page;

            if (stop_pagination > products.length) {



                let find_difference = stop_pagination - products.length;
                let newdifference = per_page - find_difference;

                stop_pagination = clicked_position + newdifference;

            } else {
                //  console.log('current ' + clicked_position);
                //  console.log('its fine ' +stop_pagination);
                // console.log('total length ' + products.length);


            }

            let y = 0;
            let groupofclass = document.getElementsByClassName('item');
            while (y < groupofclass.length) {

                groupofclass[y].style.display = "none";
                y++;
            }


            while (clicked_position < stop_pagination) {



                document.getElementsByClassName('DisplayProducts')[0].innerHTML += `
            
            <div class="item item-test-pagination">
            <img width='240px'src="${products[clicked_position].image}" alt="">
            <div class="details">
                <h3>  ${products[clicked_position].name}</h3>
                <p>${products[clicked_position].desc}</p>
            </div> 
            <div class="price-quantity">
                <h2>£${products[clicked_position].price}</h2>
                <div class="buttons">
                    <i class="bi bi-plus" id='${products[clicked_position].id}' onclick='additem(this)'></i>
                    <div class="quantity"  id='${products[clicked_position].id}0' >0
                    </div>
                    <i class="bi bi-dash" id='${products[clicked_position].id}' onclick='removeitem(this)'></i>
                </div>
            </div>
        
        </div>
            
            `;


                clicked_position++;

            }

            while (clicked_position < stop_pagination) {

                groupofclass[clicked_position].style.display = "block";

            }



        });


        document.getElementsByClassName('pagination')[0].appendChild(button_number);

    }
}
// loop products with pagination 

let clicked_position = 0 * per_page;

let stop_pagination = clicked_position + 4;




let groupofclass = document.getElementsByClassName('item');





while (clicked_position < stop_pagination) {


    groupofclass[clicked_position].style.display = "block";
    document.getElementsByClassName('DisplayProducts')[0].innerHTML += `
    
    <div class="item item-test-pagination">
    <img width='240px'src="${products[clicked_position].image}" alt="">
    <div class="details">
        <h3>  ${products[clicked_position].name}</h3>
        <p>${products[clicked_position].desc}</p>
    </div> 
    <div class="price-quantity">
        <h2>£${products[clicked_position].price}</h2>
        <div class="buttons">
            <i class="bi bi-plus" id='${products[clicked_position].id}' onclick='additem(this)'></i>
            <div class="quantity"  id='${products[clicked_position].id}0' >0
            </div>
            <i class="bi bi-dash" id='${products[clicked_position].id}' onclick='removeitem(this)'></i>
        </div>
    </div>

</div>
    
    `;




    clicked_position++;

}











// loop through products and display
/*

products.forEach((x)=>{

  
    shopbox.innerHTML += `
    
    <div class="item">
    <img width='240px'src="${x.image}" alt="">
    <div class="details">
        <h3>  ${x.name}</h3>
        <p>${x.desc}</p>
    </div> 
    <div class="price-quantity">
        <h2>£${x.price}</h2>
        <div class="buttons">
            <i class="bi bi-plus" id='${x.id}' onclick='additem(this)'></i>
            <div class="quantity"  id='${x.id}0' >0
            </div>
            <i class="bi bi-dash" id='${x.id}' onclick='removeitem(this)'></i>
        </div>
    </div>

</div>
    
    `;


});

*/

// increment the basket

let additem = (event) => {


    let searchid = basket.find((x) => { return x.id === event.id });

    if (searchid === undefined) {
        basket.push({ id: event.id, numberitem: 1 });

    } else {
        searchid.numberitem += 1;
        updateitem(event.id, searchid.numberitem);
    }


    console.log(basket);

    let Jsoncart = JSON.stringify(basket);
    localStorage.setItem('cart', Jsoncart);
    calculate();
};




// minus the number of items added
let removeitem = (event) => {

    let searchidd = basket.find((x) => { return x.id === event.id });

    if (searchidd === undefined) {


    } else {
        if (searchidd.numberitem == 0) {

        } else {
            searchidd.numberitem -= 1;
        }






    }




    console.log(basket);
    let Jsoncart = JSON.stringify(basket);
    localStorage.setItem('cart', Jsoncart);
    updateitem(event.id, searchidd.numberitem);
    calculate();
};



// update the number of product items
let updateitem = (idofitem, actuallnumber) => {
    document.getElementById(idofitem + '0').innerHTML = actuallnumber;
};




// display number of products to basket

let calculate = () => {
    let totalbasket = 0;

    basket.forEach((x) => {

        totalbasket += x.numberitem;

    });

    document.getElementsByClassName('cartAmount')[0].innerHTML = totalbasket;

};
