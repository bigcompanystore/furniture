
const handycraftEl = document.querySelector(".handycrafts");
const kulitEl = document.querySelector(".kulits");


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
           <button id="${handycraft.ide}" type="button" class="btn tombol2" alt="handycraft"> Show
</button> 

          
</article>
        `
      
      ;
  });
    
  
}
renderHandycraft();


function renderKulit() {
    
  handycrafts.forEach((handycraft) => {
    
   kulitEl.innerHTML += 
      `
           
                   <div id="${handycraft.modal}" class="modal">
  <span class="${handycraft.close}">&times;</span>
  <img class="modal-content" id="${handycraft.spot}" src="${handycraft.image}">
  <div id="caption">${handycraft.caption}</div>
</div>
        `
      
      ;



      
  });


    
  
}
renderKulit();

// Get the modal b
var modalb = document.getElementById("myModalb");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgb = document.getElementById("myImgb");

imgb.onclick = function(){
  modalb.style.display = "block";

}

// Get the <span> element that closes the modal
var spanb = document.getElementsByClassName("closeb")[0];

// When the user clicks on <span> (x), close the modal
spanb.onclick = function() { 
  modalb.style.display = "none";
}


// Get the modal 2b
var modal2b = document.getElementById("myModal2b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2b = document.getElementById("myImg2b");

img2b.onclick = function(){
  modal2b.style.display = "block";

}

// Get the <span> element that closes the modal
var span2b = document.getElementsByClassName("close2b")[0];

// When the user clicks on <span> (x), close the modal
span2b.onclick = function() { 
  modal2b.style.display = "none";
}

// Get the modal 3b
var modal3b = document.getElementById("myModal3b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3b = document.getElementById("myImg3b");

img3b.onclick = function(){
  modal3b.style.display = "block";
}

// Get the <span> element that closes the modal
var span3b = document.getElementsByClassName("close3b")[0];

// When the user clicks on <span> (x), close the modal
span3b.onclick = function() { 
  modal3b.style.display = "none";
}



// Get the modal 11b
var modal11b = document.getElementById("myModal11b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img11b = document.getElementById("myImg11b");

img11b.onclick = function(){
  modal11b.style.display = "block";
}

// Get the <span> element that closes the modal
var span11b = document.getElementsByClassName("close11b")[0];

// When the user clicks on <span> (x), close the modal
span11b.onclick = function() { 
  modal11b.style.display = "none";
}



// Get the modal 5b
var modal5b = document.getElementById("myModal5b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img5b = document.getElementById("myImg5b");

img5b.onclick = function(){
  modal5b.style.display = "block";
}

// Get the <span> element that closes the modal
var span5b = document.getElementsByClassName("close5b")[0];

// When the user clicks on <span> (x), close the modal
span5b.onclick = function() { 
  modal5b.style.display = "none";
}

// Get the modal 6b
var modal6b = document.getElementById("myModal6b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img6b = document.getElementById("myImg6b");

img6b.onclick = function(){
  modal6b.style.display = "block";
}

// Get the <span> element that closes the modal
var span6b = document.getElementsByClassName("close6b")[0];

// When the user clicks on <span> (x), close the modal
span6b.onclick = function() { 
  modal6b.style.display = "none";
}

// Get the modal 7b
var modal7b = document.getElementById("myModal7b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img7b = document.getElementById("myImg7b");

img7b.onclick = function(){
  modal7b.style.display = "block";
}

// Get the <span> element that closes the modal
var span7b = document.getElementsByClassName("close7b")[0];

// When the user clicks on <span> (x), close the modal
span7b.onclick = function() { 
  modal7b.style.display = "none";
}


// Get the modal 8b
var modal8b = document.getElementById("myModal8b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img8b = document.getElementById("myImg8b");

img8b.onclick = function(){
  modal8b.style.display = "block";
}

// Get the <span> element that closes the modal
var span8b = document.getElementsByClassName("close8b")[0];

// When the user clicks on <span> (x), close the modal
span8b.onclick = function() { 
  modal8b.style.display = "none";
}

