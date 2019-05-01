$(document).ready(function() {
window.generateRifas = function(rifaData){
    $('.genContainer').html('');
    var rifaTemplate = $('template[id="rifa-template"]').html()

    rifaTemplate = rifaTemplate.replace('{{rifa_Title}}', rifaData.titulo);
    rifaTemplate = rifaTemplate.replace('{{rifa_Description}}', rifaData.descricao);
    
    rifaTemplate = rifaTemplate.replace('{{rifa_Data}}', rifaData.sorteio);
    rifaTemplate = rifaTemplate.replace('{{rifa_Preço}}', rifaData.preco);
    for (var counter = 0; counter < rifaData.quantidade; counter ++) {
        // rifaTemplate = rifaTemplate.replace('{{rifa_ID}}', counter);
        $('.genContainer').append(rifaTemplate.replace('{{rifa_ID}}', counter+1));
    }
}

$('.gen-rifa-field-button[name="bt-gerar"]').click(function() {
    var rifaObj = {
        titulo: $('input[name="titulo-rifa"]').val(),
        quantidade: $('input[name="qt-rifa"]').val(),
        preco: $('input[name="price-rifa"]').val(),
        sorteio: $('input[name="date-rifa"]').val(),
        descricao: $('textarea[name="desc-rifa"]').val(),
    }
    generateRifas(rifaObj);
});
});