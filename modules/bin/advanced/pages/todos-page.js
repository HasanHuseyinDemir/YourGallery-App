window.todoList={
    task:"",
    index:"",

    clear:()=>{
        todoList.task="";//this
        todoList.index="";//this
        todoInputText.value="";//external
    },
    get:()=>{
        todoList.task=todoInputText.value;
        todoList.index=images.indexOf(images.find(el=>el.id===selectedImage));
    },
    getId:()=>{
        todoList.index=images.indexOf(images.find(el=>el.id===selectedImage));
    },
    set:()=>{
        images[todoList.index].todos.unshift({task:todoList.task,completed:false,id:Math.random()});
    },
    validate:()=>{
        todoList.get();
        todoList.task===""?"":todoList.set();
        todoList.clear();
        save();
        val();
    },
    delete:(todoID)=>{
        var length=images[todoList.index].todos.length;
        images[todoList.index].todos.forEach(el=>{
            if(el.id!==todoID){
                images[todoList.index].todos.push(el);
            }
        }); 
        images[todoList.index].todos=images[todoList.index].todos.slice(length);
        save();
        val();
    },
    check:(todoID)=>{
        images[todoList.index].todos.forEach(el=>{
            if(el.id==todoID){
                el.completed=!el.completed;
            }
        }
        )
        save();
        val();
    }
}

window.getTodo={
    completed:(index)=>{
        var i=0;
        images[index].todos.map((el)=>{
            el.completed?i++:""
        })
        return i;
    }
}