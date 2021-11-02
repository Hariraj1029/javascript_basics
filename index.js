var search = getElementsByClassName("search")
function search_box(){
   var box = search.appendChild(document.createElement("input"));
   box.value = "hello";
   box.style.height = "50px";
   box.style.width = "50px";
}
search.addEventListener("click", search_box())