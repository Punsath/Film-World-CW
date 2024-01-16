let product = [
    //https://forum.freecodecamp.org/t/javascript-vanilla-shopping-cart-please-help/501365
{
    id: 0,
    image: 'imagess/MV5BODkyYTRlMDItMDlhMC00MzkzLWI3NzQtOGVlMjdjYThlNDM3XkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_FMjpg_UX1000_.jpg',
    title: 'Sea Beast',
    price: 2,
},
{
    id: 1,
    image: 'imagess/71ZrXW4mWxL._AC_UF894,1000_QL80_.jpg',
    title: 'Enola Holmes 2',
    price: 3,
    
},
{
    id: 2,
    image: 'imagess/onesheet.jpg',
    title: 'Minions',
    price: 2,
},
{
    id: 3,
    image: 'imagess/795b8a71-dca2-4fd1-bf92-8e730fd4e23b.jpg',
    title: 'Boss Baby',
    price: 4,
},
{
    id: 4,
    image: 'imagess/MV5BNGU1NGNiYzYtMTQ2Ni00M2ZlLTg0N2QtMDFhMzNjNzcyMGYyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    title: 'Croods',
    price: 1,
},
{
    id: 5,
    image: 'imagess/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg',
    title: 'Top Gun',
    price: 5,
},
{
    id: 6,
    image: 'imagess/MV5BOTBjMjA4NmYtN2RjMi00YWZlLTliYTktOTIwMmNkYjYxYmE1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    title: 'Jurassic World',
    price: 2,
},
{
    id: 7,
    image: 'imagess/MV5BYjlhNTA3Y2ItYjhiYi00NTBiLTg5MDMtZDJjMDZjNzVjNjJmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
    title: 'Morbius',
    price: 3,
},
{
    id: 8,
    image: 'imagess/MV5BNDE2ODVmNGMtOGI3Zi00ODNjLTg5ZmUtNzAxNjQ4M2FjNzlkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    title: 'The Man From Toronto',
    price: 4,
},
{
    id: 9,
    image: 'imagess/MV5BYmRhNzZlOTMtOTczMi00NzZhLWFiZWItMTc1NjI3NTY5NTIzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
    title: 'Hotel Transylvania 4',
    price: 1,
    
},
{
    id: 10,
    image: 'imagess/snh_online_6072x9000_posed_01.jpg',
    title: 'spider man no way home',
    price: 2,
    
},
{
    id: 11,
    image: 'imagess/51vtp5pgmnL._AC_UF894,1000_QL80_.jpg',
    title: 'The Last Airbender',
    price: 3,
},
{
    id: 12,
    image: 'imagess/13_Hours_The_Secret_Soldiers_of_Benghazi-588612971-large.jpg',
    title: '13 Hours',
    price: 4,
},
{
    id: 13,
    image: 'imagess/movieposter_en.jpg',
    title: 'Ready Play One',
    price: 1,
    
},
{
    id: 14,
    image: 'imagess/MV5BMWEwNjhkYzYtNjgzYy00YTY2LThjYWYtYzViMGJkZTI4Y2MyXkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg',
    title: 'Uncharted',
    price: 4,
},
{
    id: 15,
    image: 'imagess/MV5BOTMyOTAyY2YtNTEyZS00NGEwLTg5YWMtOTBkNmJlYTM0YTc0XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
    title: 'The Spongebob',
    price: 2,
},
{
    id: 16,
    image: 'imagess/the-karate-kid-classic-i108310.jpg',
    title: 'The Karate Kid',
    price: 3,
},
{
    id: 17,
    image: 'imagess/MV5BNzE2ZjQxNjEtNmI2ZS00ZmU0LTg4M2YtYzVhYmRiYWU0YzI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
    title: '6 Underground',
    price: 1,
},
{
    id: 18,
    image: 'imagess/MV5BMzU3YTc1ZjMtZTAyOC00ZTI1LWE0MzItMTllN2M2YWI4MWZmXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg',
    title: 'Venom',
    price: 2,
},
{
    id: 19,
    image: 'imagess/MV5BMTU0MjAwMDkxNV5BMl5BanBnXkFtZTgwMTA4ODIxNjM@._V1_.jpg',
    title: 'Next Gen',
    price: 4,
},
{
    id: 20,
    image: 'imagess/MV5BMGY2NjUwODEtMGM5OS00MzhkLWEzYTUtYjkwMjFmNjhiN2FmXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_.jpg',
    title: 'Ghostbusters',
    price: 2,
},
{
    id: 21,
    image: 'imagess/81L4HT0pS5L.jpg',
    title: 'Jumanji',
    price: 3,
},
{
    id: 22,
    image: 'imagess/MV5BMjI3Nzg0MTM5NF5BMl5BanBnXkFtZTgwOTE2MTgwNTM@._V1_.jpg',
    title: 'Pacific Rim 2',
    price: 1,
},
{
    id: 23,
    image: 'imagess/71Hg56MYWiL._AC_UF894,1000_QL80_.jpg',
    title: 'Gi Joe 2',
    price: 2,
},
{
    id: 24,
    image: 'imagess/gbtwoYMWlG0HZe7sDaTOoijtXCu.jpg',
    title: 'Penguins Of Madagascar',
    price: 3,
}   
];
const categories = [...new Set(product.map(function(item)
    {return item}))]
//contains a list of unique categories include in the product array.
let i=0;
function cardBody(item){
    var {image, title, price} = item;
    //https://www.javascripttutorial.net/es6/javascript-object-destructuring/
    let content =  "<div class='filmBox'><div class='imgageBox'><img class='images' src="+image+"></img></div><div class='bottom'><p>"+title+"</p><h2>"+price+".00</h2>"+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        "</div></div>"
    return content   
}
document.getElementById('filmRow').innerHTML = categories.map(cardBody).join('')
var cart =[];
function addtocart(a){//https://phppot.com/javascript/javascript-shopping-cart/#:~:text=This%20%E2%80%9Cadd%20to%20cart%E2%80%9D%20JavaScript,Add%20to%20cart%E2%80%9D%20is%20placed.
    cart.push({...categories[a]});//https://stackoverflow.com/questions/39932454/basic-shopping-cart-using-array-push
    displaycart();//add item to cart
}
function delElement(a){//delete cart item
    cart.splice(a, 1);//https://www.w3schools.com/jsref/jsref_splice.asp
    displaycart();
}
function cartItems(items){ 
       //initialize two variable
    var {image, title, price} = items;
    total+=price;
    document.getElementById("total").innerHTML = "$ "+total+".00";
    let content="<div class='cartItemBox'><div class='rowImage'><img class='rowImage2' src="+image+"></div><p style='font-size:12px;'>"+title+"</p><h2 style='font-size: 15px;'>"+price+".00</h2>"+
        "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>";
    return content;   
}
function displaycart(){
    j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;//get the cart length(add to cart items)
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map(cartItems).join('');
        // the map method to create a new array of HTML strings for each item in cart.      
    }
}
//https://www.aspsnippets.com/Articles/Validate-TextBox-on-Button-Click-using-JavaScript.aspx#:~:text=Click%20using%20JavaScript.-,When%20the%20Validate%20Button%20is%20clicked%2C%20a%20JavaScript%20function%20is,the%20TextBox%20is%20considered%20Empty.&text=The%20following%20HTML%20Markup%20consists%20of%20an%20HTML%20TextBox%20and%20a%20Button.
function ValidateButton() {
    if (cart.length == 0) {
        alert("Please buy a film!");
        return false;
    }
};









