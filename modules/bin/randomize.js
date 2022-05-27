window.rastgele={
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