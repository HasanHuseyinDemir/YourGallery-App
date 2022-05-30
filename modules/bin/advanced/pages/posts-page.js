window.getDate=()=>{
    let date=new Date();
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

window.posts={
date:"",
index:"",
post:"",//post içeriği
get:()=>{//Çalışıyor!
    posts.date=getDate();
    posts.index=images.indexOf(images.find(el=>el.id===selectedImage));
    posts.post=postsInput.value;
},
getId:()=>{
    posts.index=images.indexOf(images.find(el=>el.id===selectedImage))
},
set:()=>{
    posts.get();//verileri almak
    //
    images[posts.index].posts.unshift({date:posts.date,post:posts.post,id:Math.random()});
},
clear:()=>{
    posts.date="",
    posts.index="",
    posts.post=""
},
validate:()=>{
    posts.get();
    posts.post===""?"":posts.set();
    postsInput.value="";
    posts.clear();
    save();
    val();
},
delete:(postID)=>{
    var length=images[posts.index].posts.length;
    images[posts.index].posts.forEach(el=>{
        if(el.id!==postID){
            images[posts.index].posts.push(el);
        }
    }); 
    images[posts.index].posts=images[posts.index].posts.slice(length);
    save();
    val();
}
}