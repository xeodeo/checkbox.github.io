function checkCheckbox1() {
    var checkbox1 = document.getElementById("checkbox1");
    var checkbox2 = document.getElementById("checkbox2");
    var checkboxContainer = document.getElementById("checkboxContainer");

    if (checkbox1.checked) {
        checkbox2.checked = false;
        suggestCheckbox2(true);
    } else {
        suggestCheckbox2(false);
    }
}

function checkCheckbox2() {
    var checkbox1 = document.getElementById("checkbox1");
    var checkbox2 = document.getElementById("checkbox2");

    if (checkbox2.checked && !checkbox1.checked) {
        suggestCheckbox2(true);
    } else {
        suggestCheckbox2(false);
    }
}

function checkCheckbox3() {
    var checkbox3 = document.getElementById("checkbox3");

    if (checkbox3.checked) {
        suggestCheckbox2(false);
        checkbox2.checked = false;
        checkbox1.checked = false;
    }
}

function suggestCheckbox2(suggest) {
    var checkbox2Label = document.getElementById("checkbox2Label");
    
    if (suggest) {
        checkbox2Label.classList.add('suggestion');
    } else {
        checkbox2Label.classList.remove('suggestion');
    }
}
