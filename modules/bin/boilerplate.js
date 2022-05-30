window.compositions=(src,index)=>{
    return `<image-composition>
    <h3 id="titles" slot="title">${src.title?src.title.slice(0,14):""}</h3>
    <img slot="picture" style="max-height:100%;max-width:100%;cursor:pointer;" onclick="toggleAboutImage(${src.id}),gVal('pageSettingsForm')"   src="${src.src}"></img>
    <div slot="preferences" id="preferences">
    ${src.posts.length>0?`<p>${locals("posts")} (${src.posts.length})</p>`:""}
    ${src.todos.length>0?`<p>${locals("todos")} (${getTodo.completed(index)}/${src.todos.length})</p>`:""}
    ${src.notes.length>0?`<p>${locals("notes")} (${src.notes.length})</p>`:""}
    ${src.images.length>0?`<p>${locals("images")} (${src.images.length})</p>`:""}
    </div>
    <button slot="buttons" onclick="sil(${src.id})">${locals("delete")}</button>
    </image-composition>`
}

//    <p id="description" style="margin-top:10px" slot="description">${src.description?src.description.slice(0,0):"<br>"}</p>

window.cards=()=>{
    return `
    <div id="card">
    <div id="imageselected"><img id="cards"  src="${images.find(el=>el.id==selectedImage).src}"/></div>
    <h1 id="cards" align="center">${images.find(el=>el.id==selectedImage).title}</h1>
    <image-navigation></image-navigation>
    </div>`
}
window.editing=()=>{
    if(edit===false){
        return cards()
    }else{
        return "<edit-page></edit-page>"
    }
}