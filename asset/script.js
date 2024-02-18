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
            
       <button type="button" class="btn btn-info"><a href=""${product.link}"">Show</a>
</button>     
</article>
        `
      
      ;
  });
  
}
renderProducts();

