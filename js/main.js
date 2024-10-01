
$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
    }) })


$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
    }) })  

    $(document).ready(function() {
        $('#cpf').mask('000.000.000-00', {
            placeholder:'CPF: 000.000.000-00'
        })
        $('#cep').mask('00000-000', {
            placeholder:'CEP: 00000-00'
        })
        $('#telefone').mask('(00) 00000-0000',{
            placeholder:'Celular:(99) 99999-9999 '
        })
    })

$('form').validate({
    rules: {
        nome: {
            requerido: true
        },
        email: {
            requerido: true,
            email: true
        },
        telefone: {
            requerido: true
        },
        endereco: {
            requerido: true
        },
        cep: {
            requerido: true
        },
        cpf: {
            requerido: true
        },
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
    },
    invalidHandler: function (form, validator) {
        alert("Por favor, preencha os campos para prosseguir com a compra!");
    }
})