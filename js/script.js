window.onload = function () {
    document.getElementById("name").focus();
}

//Display input field if Other is selected from Job Role
//$('.form').append('<input type="text" id="other-title" placeholder="Your Job Role" name="other-title">');
//$('#other-title').hide();


// Change function to display other field
/*
$('#title').change(function () {
    if ($('#title option:selected').val() === "other") {
        $('#other-title').show();
    } else {
        $('#other-title').hide();
    }
});
*/

// added ids
$('form').attr('id', 'registerForm');
$('button').attr('id', 'submit');

/// Validation
$('form').submit(function (e) {
    e.preventDefault();

    let name = $.trim($('#name').val());

    // Check if empty of not
    if (name === '' || name === null) {
        // alert('Text-field is empty.');
        $('#name').addClass('error');
        //return false;
    }

    let email = $.trim($('#mail').val());

    // Check if empty of not
    if (email === '' || email === null) {
        //alert('Text-field is empty.');
        $('#mail').addClass('error');
        //return false;
    }

    if ($("#payment option:selected").val() == 'credit card') {

        var regexZip = /^\d{5}$/;
        if (regexZip.test(zip.value) == false) {
            // alert("The lenght of zip code must be atleast five digits");
            $('#zip').addClass('error');

        }

    }

    if ($("#payment option:selected").val() == 'credit card') {

        var regexCvv = /^\d{3}$/;
        if (regexCvv.test(user - cvv.value) == false) {
            // alert("The lenght of zip code must be atleast five digits");
            $('#cvv').addClass('error');

        }

    }

});

//Job Role Section
//https://stackoverflow.com/questions/28308249/hide-show-dynamically-generated-input-box-with-javascript

$('form').on('change', 'select.title', function () {
    if (this.value == 'other') {

        let input = $("<input>")
            .attr("type", "text")
            .attr('name', 'user-title')
            .attr('placeholder', 'Your Job Role')
            .addClass('title');

        $(this).parent().append(input);
    }

});


// Hide Color 
$('#colors-js-puns').hide();
// Change event - page 262 of David Mcfarland 
// Change function to display proper designs
// vanila js .add (show)  .remove(hide)

let shirtChoice = false;
$('#design').change(function () {
    if ($('#design option:selected').val() === "js puns") {
        $('#colors-js-puns').show();
        $('#color').html('<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option><option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option><option value="gold">Gold (JS Puns shirt only)</option>');
        shirtChoice = true;
        return shirtChoice;
    } else if ($('#design option:selected').val() === "heart js") {
        $('#colors-js-puns').show();
        $('#color').html('<option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option><option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>');
        shirtChoice = true;
        return shirtChoice;
    } else {
        $('#colors-js-puns').hide();
        shirtChoice = false;
        return shirtChoice;
    }
});

/*
//Register for Activities - if you add id to each course and add an onchange="makeCheckJs()"to corresponding <input> 
function makeCheckJs() {
    if (document.getElementById('js-frameworks-checked').checked = true) {
        document.getElementById('express-checked').checked = false;
    }
}

function makeCheckExpress() {
    if (document.getElementById('express-checked').checked = true) {
        document.getElementById('js-frameworks-checked').checked = false;
    }
}

function makeCheckLibs() {
    if (document.getElementById('js-libs-checked').checked = true) {
        document.getElementById('node-checked').checked = false;
    }
}

function makeCheckNode() {
    if (document.getElementById('node-checked').checked = true) {
        document.getElementById('js-libs-checked').checked = false;
    }
}

*/

//Register for Activities 

let js_Frameworks = $("input[name='js-frameworks'");
let express = $("input[name='express']");
let js_Libs = $("input[name='js-libs']");
let node = $("input[name='node']");


js_Frameworks.change(function () {
    if ($(js_Frameworks).prop("checked")) {
        express.prop("disabled", true);
        express.parent().css('color', 'red');
        //express.parent().addClass("disabled");
        express.parent().append('<span class="absent">&nbsp;&nbsp;&nbsp;&nbsp;Time Conflict</span>');
    } else {
        express.prop("disabled", false);
        express.parent().css('color', 'black');
        //express.parent().removeClass("disabled");
        express.parent().find('.absent').remove();
    }
});

express.change(function () {
    if ($(express).prop("checked")) {
        js_Frameworks.prop("disabled", true);
        js_Frameworks.parent().css('color', 'red');
        //js_Frameworks.parent().addClass("disabled");
        js_Frameworks.parent().append('<span class="absent">&nbsp;&nbsp;&nbsp;&nbsp;Time Conflict</span>');

    } else {
        js_Frameworks.prop("disabled", false);
        js_Frameworks.parent().css('color', 'black');
        // js_Frameworks.parent().removeClass("disabled");
        js_Frameworks.parent().find('.absent').remove();
    }
});

js_Libs.change(function () {
    if ($(js_Libs).prop("checked")) {
        node.prop("disabled", true);
        node.parent().css('color', 'red');
        node.parent().append('<span class="absent">&nbsp;&nbsp;&nbsp;&nbsp;Time Conflict</span>');

    } else {
        node.prop("disabled", false);
        node.parent().css('color', 'black');
        //node.parent().removeClass("disabled");
        node.parent().find('.absent').remove();
    }
});

node.change(function () {
    if ($(node).prop("checked")) {
        js_Libs.prop("disabled", true);
        js_Libs.parent().css('color', 'red');
        //js_Libs.parent().addClass("disabled");
        js_Libs.parent().append('<span class="absent">&nbsp;&nbsp;&nbsp;&nbsp;Time Conflict</span>');

    } else {
        js_Libs.prop("disabled", false);
        js_Libs.parent().css('color', 'black')
        //js_Libs.parent().removeClass("disabled");
        js_Libs.parent().find('.absent').remove();
    }
});

//$("fieldset.activities").after(`<p>Total:${grandTotal}</p>`)
//$("input[name='npm']").after(`<p>Total:${grandTotal}</p>`)
//$('.activities').append(`<div>Total:${grandTotal}</div>`);

/// Totals Section
//$('.activities').append('<div id="total"></div>');
$('.activities').prepend('<p id="grandTotal">Total: </p>');

let checkboxMain = document.querySelector("input[name=all]");
let checkboxFrame = document.querySelector("input[name=js-frameworks]");
let checkboxLibs = document.querySelector("input[name=js-libs]");
let checkboxExpress = document.querySelector("input[name=express]");
let checkboxNode = document.querySelector("input[name=node]");
let checkboxBuildTools = document.querySelector("input[name=build-tools]");
let checkboxNpm = document.querySelector("input[name=npm]");
let totalCost = 0;

checkboxMain.addEventListener('change', function () {
    if (this.checked) {
        totalCost += 200;
        $('#grandTotal').html(`Total:$ ${totalCost}`);

    } else {
        (this.unchecked)
        totalCost -= 200;
        $('#grandTotal').html(`Total:$ ${totalCost}`);
    }
});

checkboxFrame.addEventListener('change', function () {
    if (this.checked) {
        totalCost += 100;
        $('#grandTotal').html(`Total:$ ${totalCost}`);

    } else {
        (this.unchecked)
        totalCost -= 100;
        $('#grandTotal').html(`Total:$ ${totalCost}`);
    }
});

checkboxLibs.addEventListener('change', function () {
    if (this.checked) {
        totalCost += 100;
        $('#grandTotal').html(`Total:$ ${totalCost}`);

    } else {
        (this.unchecked)
        totalCost -= 100;
        $('#grandTotal').html(`Total:$ ${totalCost}`);
    }
});

checkboxExpress.addEventListener('change', function () {
    if (this.checked) {
        totalCost += 100;
        $('#grandTotal').html(`Total:$ ${totalCost}`);

    } else {
        (this.unchecked)
        totalCost -= 100;
        $('#grandTotal').html(`Total:$ ${totalCost}`);
    }
});

checkboxNode.addEventListener('change', function () {
    if (this.checked) {
        totalCost += 100;
        $('#grandTotal').html(`Total:$ ${totalCost}`);

    } else {
        (this.unchecked)
        totalCost -= 100;
        $('#grandTotal').html(`Total:$ ${totalCost}`);
    }
});

checkboxBuildTools.addEventListener('change', function () {
    if (this.checked) {
        totalCost += 100;
        $('#grandTotal').html(`Total:$ ${totalCost}`);

    } else {
        (this.unchecked)
        totalCost -= 100;
        $('#grandTotal').html(`Total:$ ${totalCost}`);
    }
});

checkboxNpm.addEventListener('change', function () {
    if (this.checked) {
        totalCost += 100;
        $('#grandTotal').html(`Total:$ ${totalCost}`);

    } else {
        (this.unchecked)
        totalCost -= 100;
        $('#grandTotal').html(`Total:$ ${totalCost}`);
    }
});
/*
$('input[name=checkbox]').change(function(){
    if($(this).is(':checked')) {
        // Checkbox is checked..
    } else {
        // Checkbox is not checked..
    }
});
*/

/// Hide div for payment selection

$('#payment').change(function () {

    if ($('#payment option:selected').val() === "credit-card") {
        $('#credit-card').show();
        $('#paypal').hide();
        $('#bitcoin').hide();
    }
    else if ($('#payment option:selected').val() === "paypal") {
        $('#paypal').show();
        $('#credit-card').hide();
        $('#bitcoin').hide();
    }
    else if ($('#payment option:selected').val() === "bitcoin") {
        $('#bitcoin').show();
        $('#paypal').hide();
        $('#credit-card').hide();
    } else {
        $('#credit-card').show();
        $('#paypal').hide();
        $('#bitcoint').hide();
    }
});

/*

$("#registerForm").on('click', '#name', function () {

    // Get the Login Name value and trim it
    let name = $.trim($('#name').val());

    // Check if empty of not
    if (name === '' || name === null) {
        // alert('Text-field is empty.');
        $(this).addClass('error');
        //return false;
    }
});

*/
