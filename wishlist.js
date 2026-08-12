let wishlist =
JSON.parse(localStorage.getItem("wishlist")) || [];

let container =
document.getElementById("wishlistItems");

if(wishlist.length===0){
    container.innerHTML="<h2>No Wishlist Item ❤️</h2>";
}
else{

wishlist.forEach((item,index)=>{

let div=document.createElement("div");

div.className="item";

div.innerHTML=`
<h3>${item}</h3>

<button onclick="removeItem(${index})">
Remove
</button>
`;

container.appendChild(div);

});

}

function removeItem(index){

wishlist.splice(index,1);

localStorage.setItem("wishlist",
JSON.stringify(wishlist));

location.reload();

}