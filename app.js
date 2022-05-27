
//Resimlerin bulunduğu alan
let pageContainer={type:"page",name:"page-container",src:"./src/page-container.html"};
//Resimlerin kalıpları
let compositionImage={type:"static-composition",name:"composition-image",src:"./src/composition-image.html"};
//
let pageSettings={type:"page",name:"page-settings",src:"./src/page-settings.html"};
let pageSettingsForm={type:"page",name:"page-settings-form",src:"./src/page-settings/page-settings-form.html"};

let atomBulunan={
    found:0,
    type:"atom",
    name:"atom-bulunan",
    data:()=>{
        return `(${atomBulunan.found})`
    }
}

const compositions=(src)=>{
    return `<composition-image>
    <h3 id="titles" slot="title">${src.title?src.title:""}</h3>
    <img slot="picture" style="max-height:100%;max-width:100%;"  src="${src.src}"></img>
    <p id="description" style="margin-top:10px" slot="description">${src.description?src.description:"<br>"}</p>
    <button slot="buttons" onclick="sil(${src.id})">${locals("delete")}</button>
    </composition-image>`
}

let atomEkleButton={
    type:"atom",
    name:"atom-ekle-button",
    Ekle:()=>{
        images.push({src:ekleForm.url?ekleForm.url:rastgele.resim(),title:ekleForm.baslik?ekleForm.baslik:rastgele.baslik(),description:ekleForm.aciklama?ekleForm.aciklama:rastgele.aciklama(),id:ekleForm.id?ekleForm.id:Math.random()})
        ekleForm.baslik="";
        ekleForm.aciklama="";
        ekleForm.url="";
        ekleForm.id="";
        localStorage.setItem("images",JSON.stringify(images));
    },
    data:()=>{
        return `<button id="eklebtn" onclick="atomEkleButton.Ekle(),val(),set()">${ekleForm.url.length>0?`${locals("add")}`:`${locals("add_random_image")}`}</button>`
    }
}
let atomSilButton={
    type:"atom",
    name:"atom-sil-button",
    resimSil:()=>{
        images.pop();val(),set();
        localStorage.setItem("images",JSON.stringify(images));
    },
    data:()=>{
        return `<button id="eklebtn" onclick='atomSilButton.resimSil()'>
        <div style="display:flex;flex-direction:row;justify-content:center">${locals("delete")}-<img style="width:10%;border-radius:50%" src="${images[images.length-1].src}">-${images[images.length-1].title}</div>`
    }
}
sil=(arg)=>{
    images = images.filter((el)=>{
        return el.id !== arg
    })
gVal("pageContainer");
localStorage.setItem("images",JSON.stringify(images));
set();    
}

const contents=[atomBulunan,atomSilButton,atomEkleButton,pageContainer,compositionImage,pageSettings,pageSettingsForm];

let columns=4;
let filter="";
let filtered="";
let found=0;
let lang="TR";


let ekleForm={
    baslik:"",
    aciklama:"",
    url:"",
    id:"",
}


const rastgele={

    resimler:[
    "https://www.famousbirthdays.com/faces/lyo-the-cat-image.jpg",
    "https://drahmarch.evetsites.net/imagebank/eVetSites/Feline/01.jpg",
    "https://pbs.twimg.com/profile_images/1342768807891378178/8le-DzgC_400x400.jpg",
    "https://www.beltroadcattery.co.nz/assets/images/harry-2-400x400.jpg",
    "https://i.pinimg.com/736x/d0/a9/f3/d0a9f3aea7d7a4ede44bf7943c965165.jpg",
    "http://cdn-img.health.com/sites/default/files/styles/400x400/public/styles/main/public/dogs-pembroke-welsh-corgi-400x400.jpg",
    "https://i.pinimg.com/474x/5d/f6/79/5df6791bc4fd1d1f87e28df06d58b06b.jpg",
    "https://www.humanesociety.org/sites/default/files/styles/400x400/public/2019/02/dog-451643.jpg?h=bf654dbc&itok=txM-HxF8",
    "https://www.boehringer-ingelheim.com/sites/default/files/Animal_Health/Thelaziosis%20Kachel.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_en0X32k27sayh0oUjx5KeetvOK9f5dooVw&usqp=CAU",
    "https://i.gifer.com/origin/16/16eb0115a58cfc3994a0c540f8e994e3_w200.gif",
    "https://www.boehringer-ingelheim.com/sites/default/files/Animal_Health/Cat%20ages%20and%20stages%20Kachel.jpg"],

    basliklar:[
        "Güzel Resim","Komik","Büyük ihtimalle kedi","Şirin","Haha","Nedir bu","Ne bu la","Rastgele Resim","VOOV","Foo","Boo","Selam","Telifsiz Resim","Köpek mi bu?","Havv","Miyavvv","MiyHavvvv"
    ],

    aciklamalar:[
        "Evet","Açıklama yok",":)","Köpek","Kedi","Hahahaha","Böylesi gelmez","İşte bu!","Selamlar","Merhabalar","Bizde böyle","Hayvan","Komik","Miyavvv","Havvv","Köpekçik"
    ],

    resim:()=>{
        return rastgele.resimler[Math.floor(Math.random()*rastgele.resimler.length)]
    },
    baslik:()=>{
        return rastgele.basliklar[Math.floor(Math.random()*rastgele.basliklar.length)]
    },
    aciklama:()=>{
        return rastgele.aciklamalar[Math.floor(Math.random()*rastgele.aciklamalar.length)]
    }

}

let defaultimages=[        
{
    id:1,
    title:"Dünya",
    src:"https://wikiimg.tojsiabtv.com/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif",
    description:"Dünya dönüyor sen ne dersen de..."
},
{
    id:2,
    title:"Yürüyen kedi",
    src:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif",
    description:"Kedinin neşesi yerinde"
},
{
    id:3,
    title:"Among Us",
    src:"https://media3.giphy.com/media/RtdRhc7TxBxB0YAsK6/giphy.gif",
    description:"AMOGUS"
},
{
    id:4,
    title:"Kedi",
    src:"https://i.cnnturk.com/i/cnnturk/75/740x416/602d00735cf3b01e7cb045c0.jpg",
    description:"Epey bir şımarık"
},
{
    id:5,
    title:"Dünya",
    src:"https://wikiimg.tojsiabtv.com/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif",
    description:"Dünya dönüyor sen ne dersen de..."
},
];

let storageImages=JSON.parse(localStorage.getItem("images"));

let images;
if(!storageImages){
    images=defaultimages;
}else{
    images=storageImages;
}
