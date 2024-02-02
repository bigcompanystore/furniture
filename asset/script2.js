const productsEl = document.querySelector(".products");

productShow = products.slice(0, 6);

function renderProducts() {
    
  productShow.forEach((product) => {
    
    productsEl.innerHTML += 
      `
           
                   <article class="item">
            <img src="${product.image}" alt="meuble">
      <div class= sub-item>
       <h3>${product.title}</h3>
            <p>${product.info}</p>
      </div>
          <button type="button" class="btn btn-info"><a href="${product.link}"><b>Show</b></a>
</button> 

          
</article>
        `
      
      ;
  });
    
  
}
renderHandycrafts();

const handycraftEl = document.querySelector(".handycrafts");

handycraftShow = handycrafts.slice(0, 6);

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
          <button type="button" class="btn btn-info"><a href="${handycraft.link}"><b>Show</b></a>
</button> 

          
</article>
        `
      
      ;
  });
    
  
}
renderHandycrafts();
