const productsEl = document.querySelector(".products");


function renderProducts() {
  products.forEach((product) => {
    
    productsEl.innerHTML += 
      `
           
                   <article class="item">
            <img src="${product.image}" alt="meuble">
      <div class="sub-item">
       <h3>"${product.title}"</h3>
            <p>"${product.info}"</p>
      </div>
            
       <button type="button" class="button tombol2"><a href=""${product.link}""><b>Show</b></a>
</button>     
</article>
        `
      
      ;
  });
  
}
renderProducts();

const handycraftEl = document.querySelector(".handycrafts");



function renderHandycraft() {
    
  handycrafts.forEach((handycraft) => {
    
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
