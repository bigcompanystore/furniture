
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
