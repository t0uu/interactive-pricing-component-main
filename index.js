const viewPage = document.getElementById('pageView');
const cost = document.getElementById("cost");
const cost2 = document.getElementById("cost2")
const change = document.getElementById("change");
const range = document.getElementById('range');
let viewPages = ["10K", "50K", "100K", "500K", "1M"]
let Months = [8,12,16,24, 36]

// is condition
let yearly = false;

range.addEventListener('input', function () {
    updateValue()
    viewPage.innerHTML = viewPages[range.value]

});
change.addEventListener("change", function () {
    if(yearly == false){
        yearly = true;
    }else{
        yearly = false;
    }
    updateValue();
})


function updateValue(){
    if(yearly == false){
        cost.innerHTML = `$${Months[range.value] * 0.75}.00`;
        cost2.innerHTML = `$${Months[range.value] * 0.75}.00`;

    }else{
        cost.innerHTML = `$${Months[range.value]}.00`;
        cost2.innerHTML = `$${Months[range.value]}.00`;

    }
}