
//array de campos com referência para cada um dos elementos de entrada do formulários
var campos = [
    document.querySelector('#date'),
    document.querySelector('#value'),
    document.querySelector('#quantity')
];

console.log(campos);

//buscando o elemento <tbody> pois é nele que inseriremos a <tr> que criaremos com os dados das negociações
var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function (event) {
    
    //cancela o comportamento padrão
    event.preventDefault();
    //cria uma tr
    var tr = document.createElement('tr');

    // para varrer o array campos e pegar cada um dos seus elementos
    campos.forEach(function (campo) {
        //cria uma td sem informações
        var td = document.createElement('td');
        //atribui o valor do campo à td
        td.textContent = campo.value;
        //adiciona a td na tr
        tr.appendChild(td);
    });

    //for (var campo of campos) {
        //*** tentar desenvolver depois esse for mais simples que o forEach ***/
    //}

    //cria a nova td que receberá o volume
    var tdVolume = document.createElement('td');
    //atribui o produto da multiplicação entre valores dos index [1] e [2]
    tdVolume.textContent = campos[1].value * campos[2].value;
    //adiciona a td na tr
    tr.appendChild(tdVolume);

    //adiciona a tr no tbody
    tbody.appendChild(tr);

    // limpar campos
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;
    campos[0].focus();
});