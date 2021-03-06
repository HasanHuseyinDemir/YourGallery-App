window.noteList={
    title:"",
    note:"",
    index:"",
    Add:true,//Ekleme sayfası için "toggle" özelliği
    get:()=>{
        noteList.getId();
        noteList.title=noteTitle.value;
        noteList.note=noteText.value;
    },
    getId:()=>{
        noteList.index=images.indexOf(images.find(el=>el.id===selectedImage))
    },
    clear:()=>{
        noteList.title="";
        noteList.note="";
        noteList.index="";
    },
    set:()=>{
        images[noteList.index].notes.unshift({title:noteList.title,note:noteList.note,id:Math.random()});
    },
    validate:()=>{
        noteList.get();
        noteList.title.length>0&&noteList.note.length>0?noteList.set():"";
        val();
        save();
    },
    delete:(id)=>{
        var length=images[noteList.index].notes.length;
        images[noteList.index].notes.forEach(el=>{
            if(el.id!==id){
                images[noteList.index].notes.push(el);
            }
        }); 
        images[noteList.index].notes=images[noteList.index].notes.slice(length);
        save();
        activeNote.clear();
        val();
    }
}

window.activeNote={
    title:"",
    note:"",
    id:"",
    active:"",
    get:(id)=>{
        var x;
        images[noteList.index].notes.forEach(el=>{
            if(el.id==id){
                return x=el;
            }
        }); 
        activeNote.active=x;
        activeNote.set();
        val();
    },
    set:()=>{
        activeNote.title=activeNote.active.title;
        activeNote.note=activeNote.active.note;
        activeNote.id=activeNote.active.id;
    },
    clear:()=>{
        activeNote.title="",
        activeNote.note="",
        activeNote.id="",
        activeNote.active=""
    }
}