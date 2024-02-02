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
            
       <button type="button" class="btn tombol2"><a href=""${product.link}"">Show</a>
</button>     
</article>
        `
      
      ;
  });
  
}
renderProducts();
