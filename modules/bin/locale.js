window.changeLocale=(arg)=>{
    lang=arg
    val();set();
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
        }    
        break;
    }
}
