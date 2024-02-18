const productsEl = document.querySelector(".products");
const gambarEl = document.querySelector(".gambar");

function renderProducts() {
  products.forEach((product) => {
    
    productsEl.innerHTML += 
      `
           
                   <article class="item">
            <img src="${product.image}" alt="Snow">

            
          


            
      <div class="sub-item">
       <h3>"${product.title}"</h3>
            <p>"${product.info}"</p>
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
    
  products.forEach((product) => {
    
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


// Get the modal 11
var modal11 = document.getElementById("myModal11");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img11 = document.getElementById("myImg11");

img11.onclick = function(){
  modal11.style.display = "block";
}

// Get the <span> element that closes the modal
var span11 = document.getElementsByClassName("close11")[0];

// When the user clicks on <span> (x), close the modal
span11.onclick = function() { 
  modal11.style.display = "none";
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

// Get the modal 9
var modal9 = document.getElementById("myModal9");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img9 = document.getElementById("myImg9");

img9.onclick = function(){
  modal9.style.display = "block";
}

// Get the <span> element that closes the modal
var span9 = document.getElementsByClassName("close9")[0];

// When the user clicks on <span> (x), close the modal
span9.onclick = function() { 
  modal9.style.display = "none";
}


// Get the modal 10
var modal10 = document.getElementById("myModal10");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img10 = document.getElementById("myImg10");

img10.onclick = function(){
  modal10.style.display = "block";
}

// Get the <span> element that closes the modal
var span10 = document.getElementsByClassName("close10")[0];

// When the user clicks on <span> (x), close the modal
span10.onclick = function() { 
  modal10.style.display = "none";
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

// Get the modal 13
var modal13 = document.getElementById("myModal13");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img13 = document.getElementById("myImg13");

img13.onclick = function(){
  modal13.style.display = "block";
}

// Get the <span> element that closes the modal
var span13 = document.getElementsByClassName("close13")[0];

// When the user clicks on <span> (x), close the modal
span13.onclick = function() { 
  modal13.style.display = "none";
}
