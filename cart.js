

let products = [{
    id:'jdurioyyyoootra',
    name:'Casual Black T-shirt',
    price: 49,
    desc:'Plain BLACK T Shirt UNISEX Tshirts 100% cotton ',
    image:'images/istockphoto-1354020636-2048x2048.jpg'

},
{
    id:'tyuturdhdfa',
    name:'Casual Red T-shirt',
    price: 29,
    desc:'Plain red T Shirt UNISEX Tshirts 100% cotton ',
    image:'images/istockphoto-1354031012-612x612.jpg'

},{
    id:'jduwterhrhensa',
    name:'Casual Blue T-shirt',
    price: 65,
    desc:'Plain Blue T Shirt UNISEX Tshirts 100% cotton ',
    image:'images/istockphoto-1427972687-612x612.jpg'

},{
    id:'zcgfbgfgfgnsa',
    name:'Casual Blue T-shirt',
    price: 27,
    desc:'Plain Blue T Shirt UNISEX Tshirts 100% cotton ',
    image:'images/istockphoto-1402143412-612x612.jpg'

}
,{
    id:'oiggvygsfgfgnsa',
    name:'Casual Yellow T-shirt',
    price: 34,
    desc:'Plain Yellow T Shirt UNISEX Tshirts 100% cotton ',
    image:'images/istockphoto-1490197755-612x612.jpg'

}
];

// Displaying cart 

let totalprice =0;
let basket = JSON.parse(localStorage.getItem('cart'));
console.log(basket);

let thecartDisplay = document.getElementsByClassName('CartDisplay')[0];
let num=0;
products.forEach((theitemlocal)=>{

    basket.forEach((theitemplain)=>{

        if(theitemlocal.id ==theitemplain.id  && theitemplain.numberitem >0){

            thecartDisplay.innerHTML +=`
            <div class="CartItem">
            <img width="100px"src="${theitemlocal.image}">
            <div class="detailsCart">
                <p> ${theitemlocal.name}</p>
                <p><b> ${theitemlocal.price}</b></p>
                <div class="amountofquantity">
                    <i class="bi bi-plus" id='${theitemplain.id}' onclick='additem(this)' ></i>
                    <div class="quantity"  id='${theitemplain.id}0' >${ theitemplain.numberitem }
                    </div>
                    <i class="bi bi-dash" id='${theitemplain.id}'  onclick='removeitem(this)' ></i>
                    <i class="bi bi-x"></i>
                </div>
            </div>
    </div>
            
            
            `;
                let howmanyitems = theitemplain.numberitem *theitemlocal.price;
            totalprice+= howmanyitems;

        }




    });


});

document.getElementById('totalbill').innerHTML += totalprice;
// Funtionality of cart 




let additem = (event)=>{


    let searchid = basket.find((x)=>{ return x.id === event.id  });
    
    if(searchid === undefined){
        basket.push({id:event.id,numberitem:1});
       
    }else{
        searchid.numberitem +=1;
        updateitem(event.id,searchid.numberitem);
    }
    
    
    console.log(basket);
    
    let Jsoncart = JSON.stringify(basket);
    localStorage.setItem('cart',Jsoncart);
    calculate();
    };
    
    
    
    
     // minus the number of items added
    let removeitem = (event)=>{
    
        let searchidd = basket.find((x)=>{ return x.id === event.id  });
    
        if(searchidd === undefined){
    
    
        }else{
            if(searchidd.numberitem == 0 ){
    
            }else{
            searchidd.numberitem -=1;
            }
    
    
    
    
    
    
        }
    
    
    
    
        console.log(basket);
        let Jsoncart = JSON.stringify(basket);
    localStorage.setItem('cart',Jsoncart);
        updateitem(event.id,searchidd.numberitem);
        calculate();
    };
    
    
    
    // update the number of product items
    let updateitem = (idofitem,actuallnumber) => {
    document.getElementById(idofitem+'0').innerHTML = actuallnumber;
    };
    
    
    
    
    // display number of products to basket
    
    let calculate = ()=>{
    let totalbasket =0;

console.log(totalbasket);
    
    basket.forEach( (x)=>{
    
    totalbasket +=x.numberitem;
    
    });
    
    document.getElementsByClassName('cartAmount')[0].innerHTML = totalbasket;
    
    };