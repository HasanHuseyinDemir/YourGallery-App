window.sil = (arg) => {
    images = images.filter((el) => {
        return el.id !== arg
    })
    gVal("pageContainer");
    localStorage.setItem("images", JSON.stringify(images));
    set();
}

//devredışı
window.getir = (value) => {
    baslikInput.value = "";
    aciklamaInput.value = "";
    urlInput.value = "";

    images.filter((el) => {
        if (el.id == value) {
            baslikInput.value = el.title;
            aciklamaInput.value = el.description;
            urlInput.value = el.src;
        }
    })
};

window.handleInput = () => {
    ekleForm.baslik = baslikInput.value;
    ekleForm.aciklama = aciklamaInput.value;
    ekleForm.url = urlInput.value;
};

window.toggleAboutImage=(selectedImage)=>{
    aboutImage=!aboutImage;
    window.selectedImage=selectedImage;
    val();
    gVal("pageSettings");//Delete Button Fix;
}

window.toggleEditing=()=>{
    edit=!edit;
    val();
    gVal("pageSettings");
}

window.save=()=>{
    localStorage.setItem("images",JSON.stringify(images));
}
