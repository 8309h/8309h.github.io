let sidemenu=document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

document.getElementById('resume-link-1').addEventListener("click",()=>{
    console.log("download")
    window.location.assign("https://drive.google.com/file/d/1aLKITgYHPkZ0ekOaMVF_yrr-2oKSwxRb/view?usp=share_link", "_blank");
  })