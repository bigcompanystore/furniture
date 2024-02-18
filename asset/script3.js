
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

// Get the modal 12b
var modal12b = document.getElementById("myModal12b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img12b = document.getElementById("myImg12b");

img12b.onclick = function(){
  modal12b.style.display = "block";
}

// Get the <span> element that closes the modal
var span12b = document.getElementsByClassName("close12b")[0];

// When the user clicks on <span> (x), close the modal
span12b.onclick = function() { 
  modal12b.style.display = "none";
}



// Get the modal 13b
var modal13b = document.getElementById("myModal13b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img13b = document.getElementById("myImg13b");

img13b.onclick = function(){
  modal13b.style.display = "block";
}

// Get the <span> element that closes the modal
var span13b = document.getElementsByClassName("close13b")[0];

// When the user clicks on <span> (x), close the modal
span13b.onclick = function() { 
  modal13b.style.display = "none";
}


// Get the modal 14b
var modal14b = document.getElementById("myModal14b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img14b = document.getElementById("myImg14b");

img14b.onclick = function(){
  modal14b.style.display = "block";
}

// Get the <span> element that closes the modal
var span14b = document.getElementsByClassName("close14b")[0];

// When the user clicks on <span> (x), close the modal
span14b.onclick = function() { 
  modal14b.style.display = "none";
}


// Get the modal 15b
var modal15b = document.getElementById("myModal15b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img15b = document.getElementById("myImg15b");

img15b.onclick = function(){
  modal15b.style.display = "block";
}

// Get the <span> element that closes the modal
var span15b = document.getElementsByClassName("close15b")[0];

// When the user clicks on <span> (x), close the modal
span15b.onclick = function() { 
  modal15b.style.display = "none";
}

// Get the modal 16b
var modal16b = document.getElementById("myModal16b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img16b = document.getElementById("myImg16b");

img16b.onclick = function(){
  modal16b.style.display = "block";
}

// Get the <span> element that closes the modal
var span16b = document.getElementsByClassName("close16b")[0];

// When the user clicks on <span> (x), close the modal
span16b.onclick = function() { 
  modal16b.style.display = "none";
}

// Get the modal 17b
var modal17b = document.getElementById("myModal17b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img17b = document.getElementById("myImg17b");

img17b.onclick = function(){
  modal17b.style.display = "block";
}

// Get the <span> element that closes the modal
var span17b = document.getElementsByClassName("close17b")[0];

// When the user clicks on <span> (x), close the modal
span17b.onclick = function() { 
  modal17b.style.display = "none";
}

// Get the modal 18b
var modal18b = document.getElementById("myModal18b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img18b = document.getElementById("myImg18b");

img18b.onclick = function(){
  modal18b.style.display = "block";
}

// Get the <span> element that closes the modal
var span18b = document.getElementsByClassName("close18b")[0];

// When the user clicks on <span> (x), close the modal
span18b.onclick = function() { 
  modal18b.style.display = "none";
}

// Get the modal 19b
var modal19b = document.getElementById("myModal19b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img19b = document.getElementById("myImg19b");

img19b.onclick = function(){
  modal19b.style.display = "block";
}

// Get the <span> element that closes the modal
var span19b = document.getElementsByClassName("close19b")[0];

// When the user clicks on <span> (x), close the modal
span19b.onclick = function() { 
  modal19b.style.display = "none";
}

// Get the modal 20b
var modal20b = document.getElementById("myModal20b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img20b = document.getElementById("myImg20b");

img20b.onclick = function(){
  modal20b.style.display = "block";
}

// Get the <span> element that closes the modal
var span20b = document.getElementsByClassName("close20b")[0];

// When the user clicks on <span> (x), close the modal
span20b.onclick = function() { 
  modal20b.style.display = "none";
}

// Get the modal 21b
var modal21b = document.getElementById("myModal21b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img21b = document.getElementById("myImg21b");

img21b.onclick = function(){
  modal21b.style.display = "block";
}

// Get the <span> element that closes the modal
var span21b = document.getElementsByClassName("close21b")[0];

// When the user clicks on <span> (x), close the modal
span21b.onclick = function() { 
  modal21b.style.display = "none";
}


// Get the modal 22b
var modal22b = document.getElementById("myModal22b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img22b = document.getElementById("myImg22b");

img22b.onclick = function(){
  modal22b.style.display = "block";
}

// Get the <span> element that closes the modal
var span22b = document.getElementsByClassName("close22b")[0];

// When the user clicks on <span> (x), close the modal
span22b.onclick = function() { 
  modal22b.style.display = "none";
}

// Get the modal 23b
var modal23b = document.getElementById("myModal23b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img23b = document.getElementById("myImg23b");

img23b.onclick = function(){
  modal23b.style.display = "block";
}

// Get the <span> element that closes the modal
var span23b = document.getElementsByClassName("close23b")[0];

// When the user clicks on <span> (x), close the modal
span23b.onclick = function() { 
  modal23b.style.display = "none";
}

// Get the modal 24b
var modal24b = document.getElementById("myModal24b");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img24b = document.getElementById("myImg24b");

img24b.onclick = function(){
  modal24b.style.display = "block";
}

// Get the <span> element that closes the modal
var span24b = document.getElementsByClassName("close24b")[0];

// When the user clicks on <span> (x), close the modal
span24b.onclick = function() { 
  modal24b.style.display = "none";
}
