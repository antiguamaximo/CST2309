function validateText() {
    var customer = document.PizzaForm.customer.value;
    if (customer.length == 0) return false;
    var address = document.PizzaForm.address.value;
    if (address.length == 0) return false;
    var city = document.PizzaForm.city.value;
    if (city.length == 0) return false;
    var phone = document.PizzaForm.phone.value;
    if (phone.length == 0) return false;
    return true
}

function validateRadio() {
    if (document.PizzaForm.sizes[0].checked) return true;
    if (document.PizzaForm.sizes[1].checked) return true;
    if (document.PizzaForm.sizes[2].checked) return true;
    return false;
}


function validateCheckbox() {
    if (document.PizzaForm.toppings[0].checked) return true;
    if (document.PizzaForm.toppings[1].checked) return true;
    if (document.PizzaForm.toppings[2].checked) return true;
    if (document.PizzaForm.toppings[3].checked) return true;
    if (document.PizzaForm.toppings[4].checked) return true;
    if (document.PizzaForm.toppings[5].checked) return true;
    return false

}

function doSubmit () {
    if (validateText() == false){
        alert("Required data missing in Step1");
        return;
    }

    if (validateRadio() == false) {
        alert("Required data missing in Step 2");
        return;
    }

    if (validateCheckbox() == false) {
        alert("Required data missing in Step 3");
        return;
    }
    alert("Your pizza order has been submitted.");
    return;
}



function doClear() {
    document.PizzaForm.customer.value = "";
    document.PizzaForm.address.value = "";
    document.PizzaForm.city.value = "";
    document.PizzaForm.state.value = "";
    document.PizzaForm.zip.value = "";
    document.PizzaForm.phone.value = "";

    document.PizzaForm.sizes[0].checked = false; 
    document.PizzaForm.sizes[1].checked = false;
    document.PizzaForm.sizes[2].checked = false;

    document.PizzaForm.toppings[1].checked = false
    document.PizzaForm.toppings[0].checked = false
    document.PizzaForm.toppings[2].checked = false
    document.PizzaForm.toppings[3].checked = false
    document.PizzaForm.toppings[4].checked = false
    document.PizzaForm.toppings[5].checked = false
}


