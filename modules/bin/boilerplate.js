window.compositions=(src)=>{
    return `<image-composition>
    <h3 id="titles" slot="title">${src.title?src.title.slice(0,14):""}</h3>
    <img slot="picture" style="max-height:100%;max-width:100%;" onclick="toggleAboutImage(${src.id})"   src="${src.src}"></img>

    <button slot="buttons" onclick="sil(${src.id})">${locals("delete")}</button>
    </image-composition>`
}

//    <p id="description" style="margin-top:10px" slot="description">${src.description?src.description.slice(0,0):"<br>"}</p>

window.cards=()=>{
    return `<div id="card">
    <img id="cards" src="${images.find(el=>el.id==selectedImage).src}"/>
    <h1 id="cards" align="center">${images.find(el=>el.id==selectedImage).title}</h1>
    <div id="cards">${images.find(el=>el.id==selectedImage).description}</div>
    </div>`
}
window.editing=()=>{
    if(edit===false){
        return cards()
    }else{
        return "<edit-page></edit-page>"
    }
}