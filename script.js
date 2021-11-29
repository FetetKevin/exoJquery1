$(document).ready(function() {

    $("#nom").on('keyup', function() {
        testFields();
    });

    $("#message").on('keyup', function() {
        testFields();
    });

});

function testFields() {

    let input_value = $('#nom').val();
    let textarea_value = $('#message').val();

    if(input_value && textarea_value)
        $('#btn').attr('disabled', false);
    else{
        $('#btn').attr('disabled', true);
    }

    return [input_value, textarea_value];
}

const modele = function(e){
    e.preventDefault();
    let input_val = testFields()[0];
    let texta_val = testFields()[1];
    const container = `<div class="container">`;
    const message = `<div class="message">`;
    const h2 = `<h2>${input_val}</h2>`;
    const p = `<p>${texta_val}</p>`;
    render(container, message, h2, p);
};

const render = function(container, message, h2, p){
    let mess = $(message).append(h2).append(p);
    let vue = $(container).append(mess);
    $('section').prepend(vue);
}

$('#btn').click(modele);
