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
