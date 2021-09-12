
var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function (event) {

    event.preventDefault();
    var tr = document.createElement('tr');

    campos.forEach(function (campo) {
        var td = document.createElement('td'); //Cria uma td sem informações
        td.textContent = campo.value; // atribui o valor do campo a tc
        tr.appendChild(td); // adiciona a td na tr
    });

    var tdVolume = document.createElement('td'); // nova td que armazena o volume da negociação
    tdVolume.textContent = campos[1].value * campos[2].value; // as posições 1 e 2 do nosso array armazenam os campos de quantidade e valor
    tr.appendChild(tdVolume); //adicionando a td que faltava na tr

    tbody.appendChild(tr);

    // limpar campos data, quantidade e valor
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;
    campos[0].focus(); // foca no campo da data
});