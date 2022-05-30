window.lang="EN";
window.lang=localStorage.getItem("language")?localStorage.getItem("language"):"EN";

window.changeLocale=(arg)=>{
    lang=arg
    set();val();gVal("pageSettingsForm");
    localStorage.setItem("language",lang);
}
    
window.locals=(arg)=>{
    switch(lang){
        case "TR":
        switch(arg){
            case "title":return "Başlık";
            case "description":return "Açıklama";
            case "search":return "Ara...";
            case "filter":return "Filtre";
            case "images":return "Resimler";
            case "add_random_image":return "Rastgele Resim Ekle!";
            case "add_image":return "Ekle";
            case "columns":return "Sütunlar";
            case "add_and_delete":return "Ekle Sil İşlemleri";
            case "add_a_description":return "Açıklama Girin";
            case "add_title":return "Başlık Ekleyin";
            case "add_url":return "Url Ekleyin";
            case "add_id":return "ID Ekleyin";
            case "add":return "Ekle";
            case "delete":return "Sil";
            case "go_back":return "Geri Dön";
            case "edit":return "Düzenle";
            case "page_content":return "Sayfa İçeriği";
            case "save":return "Kaydet";
            case "deleted":return "Aradığınız Resim Silinmiş Olabilir!";
            case "redirecting":return "Anasayfaya Yönlendiriliyorsunuz...";
            case "error":return "Hata!";

            case "page":return "Sayfa";
            case "empty_todo":return "Görev Kutusu Boş!";
            case "empty_note":return "Not Kutusu Boş!";
            case "empty_image":return "Resimler Kutusu Boş!"
            case "add_a_post":return "Gönderi Ekle";
            case "note":return "Not";
            case "add_a_note":return "Not Ekle";
            case "images":return "Resimler";
            case "posts":return "Gönderiler";
            case "todos":return "To-Do";
            case "notes":return "Notlar";
            case "todolist":return "Yapılacaklar Listesi";
            case "post":return "Gönderi";

        }break;
        case "EN":
        switch(arg){
            case "title":return "Title";
            case "description":return "Description";
            case "search":return "Search...";
            case "filter":return "Filter";
            case "images":return "Images";
            case "add_random_image":return "Add a Random Image!";
            case "add_image":return "Add";
            case "columns":return "Columns";
            case "add_and_delete":return "Add and Delete";
            case "add_a_description":return "Add a Description";
            case "add_title":return "Add Title";
            case "add_url":return "Add Url";
            case "add_id":return "Add ID";
            case "add":return "Add";
            case "delete":return "Delete";
            case "go_back":return "Go Back";
            case "edit":return "Edit";
            case "page_content":return "Page Content";
            case "save":return "Save";
            case "deleted":return "The Picture You Are Looking For May Have Been Deleted!";
            case "redirecting":return "You are being redirected to the homepage...";
            case "error":return "Error!";

            case "page":return "Page";
            case "empty_todo":return "To-do list is empty right now!";
            case "empty_note":return "Note list is currently empty!";
            case "empty_image":return "Image list is currently empty!"
            case "add_a_post":return "Add a Post";
            case "note":return "Note";
            case "add_a_note":return "Add a Note";
            case "images":return "Images";
            case "posts":return "Posts";
            case "todos":return "To-Do";
            case "notes":return "Notes";
            case "todolist":return "To-Do List";
            case "post":return "Post";
        }    
        break;
    }
}
