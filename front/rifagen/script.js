window.preventDefault = function (e) {
    e.preventDefault();
}

window.insertError = function (element, message) {
    var errorMessage = document.createElement('div');
    errorMessage.innerHTML = message;
    errorMessage.classList.add('field_error');

    element.after(errorMessage);
}

function generateRifas (rifaData) {
    document.querySelector('.genContainer').innerHTML = '';

    var rifaTemplate = document.querySelector('template[id="rifa-template"]').innerHTML;

    rifaTemplate = rifaTemplate.replace('{{rifa_Title}}', rifaData.titulo);
    rifaTemplate = rifaTemplate.replace('{{rifa_Description}}', rifaData.descricao);
    rifaTemplate = rifaTemplate.replace('{{rifa_Data}}', rifaData.sorteio);
    rifaTemplate = rifaTemplate.replace('{{rifa_Preço}}', rifaData.preco);

    for (var counter = 0; counter < rifaData.quantidade; counter++) {
        document.querySelector('.genContainer').innerHTML += (rifaTemplate.replace('{{rifa_ID}}', counter + 1));
    }
}

 function validateForm (formName) {
    var validated = true;

    document.querySelectorAll('.field_error').forEach(el => el.outerHTML = '')
    document.querySelector('.genData').querySelectorAll('input').forEach((el, idx) => {
        if (el.value == '' || el.value == 'undefined' || el.value == null) {
            insertError(el, 'Por favor preencha este campo');
            validated = false;
        }
    });

    return validated;
}

document.querySelector('.gen-rifa-field-button[name="bt-gerar"]').addEventListener('click', function () {
    if (validateForm('genForm')) {
        var rifaObj = {
            titulo: document.querySelector('input[name="titulo-rifa"]').value,
            quantidade: document.querySelector('input[name="qt-rifa"]').value,
            preco: document.querySelector('input[name="price-rifa"]').value,
            sorteio: document.querySelector('input[name="date-rifa"]').value,
            descricao: document.querySelector('textarea[name="desc-rifa"]').value,
        }
    
        generateRifas(rifaObj);
    }

});