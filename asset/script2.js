const productsEl = document.querySelector(".products");

const gambarEl = document.querySelector(".gambar");

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
          <button id="${product.ide}" type="button" class="btn tombol2" alt="meuble" src="${product.image}" alt="meuble">Show
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
           
                   <div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="${product.spot}">
  <div id="caption"></div>
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
          <button type="button" class="btn tombol2"><a href="${handycraft.link}">Show</a>
</button> 

          
</article>
        `
      
      ;
  });
    
  
}
renderHandycraft();

    // Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById(${product.ide}));
var modalImg = document.getElementById(${product.spot});
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = ${product.image} ;
  captionText.innerHTML = "Teak Wood Sofa";
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
var modalImg2 = document.getElementById("img012");
var captionText2 = document.getElementById("caption2");
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = "asset/meuble.4.jpg";
  captionText2.innerHTML = "Japanese Table and Chairs";
}

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span2.onclick = function() { 
  modal2.style.display = "none";
}


