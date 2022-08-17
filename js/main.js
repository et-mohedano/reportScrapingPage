
var list_of_secretaries = [{value: 0, text: "Salud"}, {value: 1, text: "Educación"}]
var list_of_health_secretary = [{value: "Julio Menchaca_11_08_2022__18_41_18", text: "Julio Menchaca_11_08_2022__18_41_18"}, {value: "Julio Menchaca_11_08_2022__20_27_58", text: "Julio Menchaca_11_08_2022__20_27_58"}]
var list_of_education_secretary = [{value: "Julio Menchaca_11_08_2022__20_27_58", text: "Julio Menchaca_11_08_2022__20_27_58"}, {value: "Julio Menchaca_11_08_2022__18_41_18", text: "Julio Menchaca_11_08_2022__18_41_18"}]

var search_by_secretary = document.getElementById("search_by_secretary");
var select_pdf = document.getElementById("select_pdf");
var report_options = document.getElementById("report_options");
var show_pdf = document.getElementById("show_pdf");

function add_options_to_select(select_element, list_of_elements){    
    list_of_elements.forEach(element => {
        select_element.options[select_element.options.length] = new Option(element.text, element.value);
    });
}

add_options_to_select(search_by_secretary, list_of_secretaries);

search_by_secretary.addEventListener("change", (e) => {
    if (report_options.options.length > 1){
        report_options.options.length = 1;
    }
    switch (search_by_secretary.value) {
        case "0":
            add_options_to_select(report_options, list_of_health_secretary);
            break;
        case "1":
            add_options_to_select(report_options, list_of_education_secretary);
            break
    }
    if (search_by_secretary.value !== "NA") {
        report_options.disabled = false;
    }else{
        report_options.disabled = true;
        show_pdf.src = "";
    }
});


report_options.addEventListener("change", (e) => {
    report_options.value !== "NA" ?
        show_pdf.src = "./assets/pdf/" + report_options.value +".pdf" :
        show_pdf.src = "";
});