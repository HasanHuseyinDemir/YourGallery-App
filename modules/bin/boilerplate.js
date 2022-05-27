window.compositions=(src)=>{
    return `<composition-image>
    <h3 id="titles" slot="title">${src.title?src.title.slice(0,14):""}</h3>
    <img slot="picture" style="max-height:100%;max-width:100%;"  src="${src.src}"></img>
    <p id="description" style="margin-top:10px" slot="description">${src.description?src.description.slice(0,24):"<br>"}</p>
    <button slot="buttons" onclick="sil(${src.id})">${locals("delete")}</button>
    </composition-image>`
}