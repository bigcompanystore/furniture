const productsEl = document.querySelector(".products");

const gambarEl = document.querySelector(".gambar");
const kulitEl = document.querySelector(".kulits");

productShow = products.slice(0, 8);

function renderProducts() {
    
  productShow.forEach((product) => {
    
    productsEl.innerHTML += 
      `
           
                   <article class="item">
            <img  src="${product.image}" alt="meuble">

 




            
      <div class= sub-item>
       <h3>${product.title}</h3>
            <p>${product.info}</p>
      </div>
          <button id="${product.ide}" type="button" class="btn tombol2" alt="meuble" } alt="meuble">Show
</button> 

          
</article>
        `
      
      ;



      
  });
    
  
}
renderProducts();




function renderGambar() {
    
  productShow.forEach((product) => {
    
   gambarEl.innerHTML += 
      `
           
                   <div id="${product.modal}" class="modal">
  <span class="${product.close}">&times;</span>
  <img class="modal-content" id="${product.spot}" src="${product.image}">
  <div id="caption">${product.caption}</div>
</div>
        `
      
      ;



      
  });


    
  
}
renderGambar();





const handycraftEl = document.querySelector(".handycrafts");

handycraftShow = handycrafts.slice(0, 8);

function renderHandycraft() {
    
  handycraftShow.forEach((handycraft) => {
    
    handycraftEl.innerHTML += 
      `
           
                   <article class="item">
            <img src="${handycraft.image}" alt="handycraft">
      <div class= sub-item>
       <h3>${handycraft.title}</h3>
            <p>${handycraft.info}</p>
      </div>
          <button id="${handycraft.ide}" type="button" class="btn tombol2" alt="handycraft"> Show
</button> 

          
</article>
        `
      
      ;
  });
    
  
}
renderHandycraft();



function renderKulit() {
    
  handycraftShow.forEach((handycraft) => {
    
   kulitEl.innerHTML += 
      `
           
                   <div id="${handycraft.modal}" class="modal">
  <span class="${handycraft.close}">&times;</span>
  <img class="modal-content" id="${handycraft.spot}" src="${handycraft.image}">
  <div id="caption">${handycraft.caption}</div>
</div>
        `
      
      ;



      
  });


    
  
}
renderKulit();


    // Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
//var modalImg = document.getElementById("img01");
//var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
//  modalImg.src = "${product.image}" ;
//  captionText.innerHTML = "Teak Wood Sofa";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}




// Get the modal 2
var modal2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById("myImg2");

img2.onclick = function(){
  modal2.style.display = "block";

}

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span2.onclick = function() { 
  modal2.style.display = "none";
}


// Get the modal 3
var modal3 = document.getElementById("myModal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById("myImg3");

img3.onclick = function(){
  modal3.style.display = "block";
}

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the modal
span3.onclick = function() { 
  modal3.style.display = "none";
}


// Get the modal 12
var modal12 = document.getElementById("myModal12");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img12 = document.getElementById("myImg12");

img12.onclick = function(){
  modal12.style.display = "block";
}

// Get the <span> element that closes the modal
var span12 = document.getElementsByClassName("close12")[0];

// When the user clicks on <span> (x), close the modal
span12.onclick = function() { 
  modal12.style.display = "none";
}


// Get the modal 5
var modal5 = document.getElementById("myModal5");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img5 = document.getElementById("myImg5");

img5.onclick = function(){
  modal5.style.display = "block";
}

// Get the <span> element that closes the modal
var span5 = document.getElementsByClassName("close5")[0];

// When the user clicks on <span> (x), close the modal
span5.onclick = function() { 
  modal5.style.display = "none";
}

// Get the modal 6
var modal6 = document.getElementById("myModal6");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img6 = document.getElementById("myImg6");

img6.onclick = function(){
  modal6.style.display = "block";
}

// Get the <span> element that closes the modal
var span6 = document.getElementsByClassName("close6")[0];

// When the user clicks on <span> (x), close the modal
span6.onclick = function() { 
  modal6.style.display = "none";
}

// Get the modal 4
var modal7 = document.getElementById("myModal7");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img7 = document.getElementById("myImg7");

img7.onclick = function(){
  modal7.style.display = "block";
}

// Get the <span> element that closes the modal
var span7 = document.getElementsByClassName("close7")[0];

// When the user clicks on <span> (x), close the modal
span7.onclick = function() { 
  modal7.style.display = "none";
}


// Get the modal 8
var modal8 = document.getElementById("myModal8");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img8 = document.getElementById("myImg8");

img8.onclick = function(){
  modal8.style.display = "block";
}

// Get the <span> element that closes the modal
var span8 = document.getElementsByClassName("close8")[0];

// When the user clicks on <span> (x), close the modal
span8.onclick = function() { 
  modal8.style.display = "none";
}


// Get the modal 2b
var modal2b = document.getElementById("myModal2b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2b = document.getElementById("myImg2b");

img2b.onclick = function(){
  modal2b.style.display = "block";

}

// Get the <span> element that closes the modal
var span2b = document.getElementsByClassName("close2b")[0];

// When the user clicks on <span> (x), close the modal
span2b.onclick = function() { 
  modal2b.style.display = "none";
}

// Get the modal b
var modalb = document.getElementById("myModalb");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgb = document.getElementById("myImgb");

imgb.onclick = function(){
  modalb.style.display = "block";

}

// Get the <span> element that closes the modal
var spanb = document.getElementsByClassName("closeb")[0];

// When the user clicks on <span> (x), close the modal
spanb.onclick = function() { 
  modalb.style.display = "none";
}


// Get the modal 2b
var modal2b = document.getElementById("myModal2b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2b = document.getElementById("myImg2b");

img2b.onclick = function(){
  modal2b.style.display = "block";

}

// Get the <span> element that closes the modal
var span2b = document.getElementsByClassName("close2b")[0];

// When the user clicks on <span> (x), close the modal
span2b.onclick = function() { 
  modal2b.style.display = "none";
}

// Get the modal 3b
var modal3b = document.getElementById("myModal3b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3b = document.getElementById("myImg3b");

img3b.onclick = function(){
  modal3b.style.display = "block";
}

// Get the <span> element that closes the modal
var span3b = document.getElementsByClassName("close3b")[0];

// When the user clicks on <span> (x), close the modal
span3b.onclick = function() { 
  modal3b.style.display = "none";
}



// Get the modal 11b
var modal11b = document.getElementById("myModal11b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img11b = document.getElementById("myImg11b");

img11b.onclick = function(){
  modal11b.style.display = "block";
}

// Get the <span> element that closes the modal
var span11b = document.getElementsByClassName("close11b")[0];

// When the user clicks on <span> (x), close the modal
span11b.onclick = function() { 
  modal11b.style.display = "none";
}



// Get the modal 5b
var modal5b = document.getElementById("myModal5b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img5b = document.getElementById("myImg5b");

img5b.onclick = function(){
  modal5b.style.display = "block";
}

// Get the <span> element that closes the modal
var span5b = document.getElementsByClassName("close5b")[0];

// When the user clicks on <span> (x), close the modal
span5b.onclick = function() { 
  modal5b.style.display = "none";
}

// Get the modal 6b
var modal6b = document.getElementById("myModal6b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img6b = document.getElementById("myImg6b");

img6b.onclick = function(){
  modal6b.style.display = "block";
}

// Get the <span> element that closes the modal
var span6b = document.getElementsByClassName("close6b")[0];

// When the user clicks on <span> (x), close the modal
span6b.onclick = function() { 
  modal6b.style.display = "none";
}

// Get the modal 7b
var modal7b = document.getElementById("myModal7b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img7b = document.getElementById("myImg7b");

img7b.onclick = function(){
  modal7b.style.display = "block";
}

// Get the <span> element that closes the modal
var span7b = document.getElementsByClassName("close7b")[0];

// When the user clicks on <span> (x), close the modal
span7b.onclick = function() { 
  modal7b.style.display = "none";
}


// Get the modal 8b
var modal8b = document.getElementById("myModal8b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img8b = document.getElementById("myImg8b");

img8b.onclick = function(){
  modal8b.style.display = "block";
}

// Get the <span> element that closes the modal
var span8b = document.getElementsByClassName("close8b")[0];

// When the user clicks on <span> (x), close the modal
span8b.onclick = function() { 
  modal8b.style.display = "none";
}



















