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
renderProducts();
