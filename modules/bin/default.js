window.columns=3;
window.filter="";
window.filtered="";
window.found=0;
window.lang="TR";

window.aboutImage=false;
window.edit=false;

window.ekleForm={
    baslik:"",
    aciklama:"",
    url:"",
    id:"",
}

window.storageImages=JSON.parse(localStorage.getItem("images"));

window.images="";

if(!storageImages){
    images=defaultimages;
}else{
    images=storageImages;
}
window.selectedImage=images[0].id;
