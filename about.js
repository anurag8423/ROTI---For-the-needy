window.addEventListener('scroll', function () {
    const el2 = document.getElementById("navid1");
    if (window.pageYOffset > 0) {
        el2.style.backgroundColor="white";
        el2.style.boxShadow="0px 10px 12px #615f5f";
    }
    else {
        el2.style.backgroundColor="rgba(162, 158, 158, 0.156)";
        el2.style.boxShadow="none";
    }
})

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }