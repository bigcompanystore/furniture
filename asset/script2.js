const productsEl = document.querySelector(".products");

productShow = products.slice(0, 8);

function renderProducts() {
    
  productShow.forEach((product) => {
    
    productsEl.innerHTML += 
      `
           
                   <article class="item">
            <img id="${product.ide}"  src="${product.image}" alt="meuble">

 




            
      <div class= sub-item>
       <h3>${product.title}</h3>
            <p>${product.info}</p>
      </div>
          <button type="button" class="btn tombol2"><a href="${product.link}">Show</a>
</button> 

          
</article>
        `
      
      ;
  });
    
  
}
renderProducts();

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
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
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
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span2.onclick = function() { 
  modal2.style.display = "none";
}


