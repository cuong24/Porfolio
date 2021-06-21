let expertiseList = document.querySelectorAll("div.experitise__discription");
let hexList = document.querySelectorAll("div.hexagon");

hexList.forEach(function(item, index){
  item.addEventListener("mouseenter", function( event ) {   
    // highlight the mouseenter target
    console.log(event.target.classList[1]);
    for(let i = 0; i < expertiseList.length; i++){
      if (expertiseList[i].classList.contains(event.target.classList[1])){
        expertiseList[i].classList.remove("hidden");
      } else {
        expertiseList[i].classList.add("hidden");      
      }
    }
  });
})