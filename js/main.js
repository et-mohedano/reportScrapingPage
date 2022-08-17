
var list_of_secretaries = [{value: 0, text: "Option 1"}, {value: 1, text: "Option 2"}]
var search_by_secretarie = document.getElementById("search_by_secretary");
var change_doc = document.getElementById("change_doc");

function add_secretaries_to_select(secretaries){    
    secretaries.forEach(secretary => {
        search_by_secretarie.options[search_by_secretarie.options.length] = new Option(secretary.text, secretary.value);
    });
}

add_secretaries_to_select(list_of_secretaries);

search_by_secretarie.addEventListener("change", (e) => {
    change_doc.innerText = search_by_secretarie.value;
});

