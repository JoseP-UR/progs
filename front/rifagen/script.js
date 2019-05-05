window.preventDefault = function(e) {
    e.preventDefault();
}

window.insertError = function(element, message) {
    $(element).after('<div class="field_error">' + message + '</div>');
}

window.generateRifas = function(rifaData){
    $('.genContainer').html('');
    
    var rifaTemplate = $('template[id="rifa-template"]').html()
    
    rifaTemplate = rifaTemplate.replace('{{rifa_Title}}', rifaData.titulo);
    rifaTemplate = rifaTemplate.replace('{{rifa_Description}}', rifaData.descricao);   
    rifaTemplate = rifaTemplate.replace('{{rifa_Data}}', rifaData.sorteio);
    rifaTemplate = rifaTemplate.replace('{{rifa_Preço}}', rifaData.preco);
    
    for (var counter = 0; counter < rifaData.quantidade; counter ++) {
        $('.genContainer').append(rifaTemplate.replace('{{rifa_ID}}', counter+1));
    }
}

window.validateForm = function(formName) {
    var validated = true;
    $('.field_error').remove();
    $('[name="'+formName+'"]').find('input').each(function(idx, el) {
        if ($(el).val() == '' || $(el).val() == 'undefined' || $(el).val() == null) {
            insertError(el, 'Por favor preencha este campo');
            validated = false;
        }
    });
    return validated;
}

$('.gen-rifa-field-button[name="bt-gerar"]').click(function() {
    if(validateForm('genForm')){
        var rifaObj = {
            titulo: $('input[name="titulo-rifa"]').val(),
            quantidade: $('input[name="qt-rifa"]').val(),
            preco: $('input[name="price-rifa"]').val(),
            sorteio: $('input[name="date-rifa"]').val(),
            descricao: $('textarea[name="desc-rifa"]').val(),
        }
        generateRifas(rifaObj);
    }
});