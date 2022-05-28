window.columns=3;
window.filter="";
window.filtered="";
window.found=0;
window.lang="TR";

window.aboutImage=false;
window.edit=false;
window.editImage="";

window

window.editPref={
    index:"",
    title:"",
    src:"",
    description:"",
    clear:()=>{
        editPref.index="",
        editPref.title="",
        editPref.src="",
        editPref.description=""
    },
    get:()=>{
        editPref.index=images.indexOf(images.find(el=>el.id===selectedImage));
        editPref.title=images.find(el=>el.id===selectedImage).title;
        editPref.src=images.find(el=>el.id===selectedImage).src;
        editPref.description=images.find(el=>el.id===selectedImage).description;
    },
    set:()=>{
        images[editPref.index].src=editPref.src;
        images[editPref.index].title=editPref.title;
        images[editPref.index].description=editPref.description;
        val();
    }
}


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
