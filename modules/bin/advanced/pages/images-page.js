window.imagesList={
    src:"",
    index:"",
    id:"",
    get:()=>{
        imagesList.getId();
        imagesList.src=enterSRC.value;
    },
    getId:()=>{
        imagesList.index=images.indexOf(images.find(el=>el.id===selectedImage));
    },
    clear:()=>{
        imagesList.src="";
        imagesList.id="";
        imagesList.index="";
    },
    set:()=>{
        images[imagesList.index].images.unshift({src:imagesList.src,id:Math.random()});
    },
    validate:()=>{
        imagesList.get();
        imagesList.src.length>0&&imagesList.src.length>0?imagesList.set():alert("Dolu Olmalıdır!");
        val();
        save();
    },
    delete:(id)=>{
        var length=images[imagesList.index].images.length;
        images[imagesList.index].images.forEach(el=>{
            if(el.id!==id){
                images[imagesList.index].images.push(el);
            }
        }); 
        images[imagesList.index].images=images[imagesList.index].images.slice(length);
        save();
        val();
    }

}


/*
    {{images[imagesList.index].images.length<1?"<h3>Resimler Kutusu Boş!</h3>":""}}

    {{
        images[imagesList.index].images.map((el)=>{
            return `
            <div id="image">
                <button onclick="imagesList.delete(${el.id})">X</button>
                <img src="${el.src}">
            </div>`
        }).join("");
    }} 




*/