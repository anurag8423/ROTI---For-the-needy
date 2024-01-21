window.addEventListener('scroll', function () {
    const el = document.getElementById("navid");
    const el2 = document.getElementById("navid1");
    if (window.pageYOffset > 0) {
        el.style.backgroundColor="white";
        el.style.boxShadow="0px 10px 8px #888888";
        el2.style.backgroundColor="white";
        el2.style.boxShadow="0px 10px 8px #888888";
    }
    else {
        el.style.backgroundColor="transparent";
        el.style.boxShadow="none";
        // el2.style.backgroundColor="transparent";
        el2.style.boxShadow="none";
    }
})
let toggle=true
function dynamicbackground(){
    if(toggle){
        document.getElementById('nvid').style.backgroundImage = 'url("hunger2.jpg")';
        }
        else{
         document.getElementById('nvid').style.backgroundImage = 'url("hunger1.jpg")'; 
        }
}
setInterval(function() {
    if(toggle){
        document.getElementById('nvid').style.backgroundImage = 'url("hunger3.jpeg")';
        if (window.pageYOffset <= 0){
        document.getElementById('navid').style.backgrounColor = 'rgba(162, 158, 158, 0.456)';
        document.getElementById('navid').style.filter = 'brightness(120%)';
        }
        }
        else{
         document.getElementById('nvid').style.backgroundImage = 'url("hunger1.jpg")'; 
         if (!window.pageYOffset <= 0){
            document.getElementById('navid').style.backgroundcolor = 'transparent';
            document.getElementById('navid').style.filter = 'brightness(100%)';
            }
        }
  }, 5000);
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }