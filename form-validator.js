function formValidator(form) {
    let inputFields = form.querySelectorAll("input");
    let success = true;

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        inputFields.forEach(function(input) {
            input.style.backgroundColor = "inherit";
            form.querySelector(".statusMessage." + input.name).innerText = "";

            if (input.hasAttribute("required") && input.value == "") {
                input.style.backgroundColor = "rgb(241, 69, 69)";
                form.querySelector(".statusMessage." + input.name).innerText = "Udfyld dette felt.";
                success = false;
            }

            if (input.type == "number" && !/^[0-9]+$/.test(input.value) && !input.value.length) {
                input.style.backgroundColor = "rgb(241, 69, 69)";
                form.querySelector(".statusMessage." + input.name).innerText = "Du må kun skrive tal i dette felt.";
                success = false;
            }

        });

        if (!success) return;
    });
}

export default formValidator;