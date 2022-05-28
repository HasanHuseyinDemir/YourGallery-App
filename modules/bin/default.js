window.columns=localStorage.getItem("columns")?localStorage.getItem("columns"):3;
window.filter="";
window.filtered="";
window.found=0;
window.lang="TR";



window.aboutImage=false;
window.edit=false;
window.editImage="";

document.querySelector("your-gallery").addEventListener("mouseenter",()=>{
    yourGallery.text="YourGallery";
    set();
})

document.querySelector("your-gallery").addEventListener("mouseleave",()=>{
    yourGallery.text="YoGa";
    set();
})

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
    },
    delete:()=>{
        console.log("Silindi");
        images.splice(editPref.index);
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

