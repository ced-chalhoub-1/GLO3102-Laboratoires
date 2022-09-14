
filter = function(){
    var search_content = document.querySelector("#search").value.toLowerCase();
    var li_list = document.querySelectorAll("li");
    var ul = document.querySelector("ul");

    if(ul.style.display === "none"){
        ul.style.display = "block";
    }



    for(var i = 0; i < li_list.length; i++){
        var span = li_list[i].querySelectorAll(".list-item")[0];
        if(span.innerText.toLowerCase().indexOf(search_content) <= -1){
            li_list[i].style.display = 'none';
        }
        else {
            li_list[i].style.display = 'block';
        }
    }
}
resetSearch = function(){
    var search_box = document.querySelector("#search");
    var li_list = document.querySelectorAll("li");

    search_box.value = "";
    for(var i = 0; i < li_list.length; i++) {
        li_list[i].style.display = "block";
    }

}

toggleList = function(){
    var ul = document.querySelector("ul");

    if(ul.style.display === "block"){
        ul.style.display = "none";
    }
    else{
        ul.style.display = 'block';
    }
}
changeTextboxValue = function(element) {
    var search_box = document.querySelector("#search");

    search_box.value = element.innerText;
}

var span_list = document.querySelectorAll("span");
for(var i = 0; i < span_list.length; i++){
    span_list[i].addEventListener("click", function(){
        changeTextboxValue(this)
    })
}
