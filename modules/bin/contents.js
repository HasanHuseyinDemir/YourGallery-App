
//Columns
window.pageContainer={type:"page",name:"container-page",src:"./src/Columns/container-page.html"};
window.pageSettings={type:"page",name:"settings-page",src:"./src/Columns/settings-page.html"};
window.editPage={type:"page",name:"edit-page",src:"./src/Columns/edit-page.html"}

window.compositionImage={type:"static-composition",name:"image-composition",src:"./src/image-composition.html"};
window.pageSettingsForm={type:"page",name:"settings-form",src:"./src/settings-form.html"};
window.columnsPage={type:"page",name:"columns-page",src:"./src/columns-page.html"};
window.selectedPage={type:"page",name:"selected-image",src:"./src/Columns/selected-image.html"};


window.atomBulunan={
    found:0,
    type:"atom",
    name:"atom-bulunan",
    data:()=>{
        return `(${atomBulunan.found})`
    }
}

window.atomEkleButton={
    type:"atom",
    name:"atom-ekle-button",
    Ekle:()=>{
        images.push({src:ekleForm.url?ekleForm.url:rastgele.resim(),title:ekleForm.baslik?ekleForm.baslik:rastgele.baslik(),description:ekleForm.aciklama?ekleForm.aciklama:rastgele.aciklama(),id:Math.random()})
        ekleForm.baslik="";
        ekleForm.aciklama="";
        ekleForm.url="";
        ekleForm.id="";
        save();
    },
    data:()=>{
        return `<button id="eklebtn" onclick="atomEkleButton.Ekle(),val(),set()">${ekleForm.url.length>0?`${locals("add")}`:`${locals("add_random_image")}`}</button>`
    }
}
window.atomSilButton={
    type:"atom",
    name:"atom-sil-button",
    resimSil:()=>{
        images.pop();val(),set();
        save();
    },
    data:()=>{
        return `<button id="eklebtn" onclick='atomSilButton.resimSil()'>
        <div style="display:flex;flex-direction:row;justify-content:center">${locals("delete")}-<img style="width:10%;border-radius:50%" src="${images[images.length-1].src}">-${images[images.length-1].title}</div>`
    }
}

window.editImageView={
    type:"atom",
    name:"edit-image-view",
    data:()=>{
        return `<img src="${editPref.src}">`
    }
}

window.contents=[columnsPage,pageSettings,atomBulunan,atomSilButton,atomEkleButton,pageContainer,compositionImage,pageSettingsForm,selectedPage,editPage,editImageView];