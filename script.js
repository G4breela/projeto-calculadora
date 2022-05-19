function inserir(num)
{
    var numero = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = numero + num;
}

function limpar()
{
    document.getElementById('res').innerHTML = '';
}

function voltar()
{
    var resultado = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular()
{
    var resultado = document.getElementById('res').innerHTML;
    if(resultado)
    {
        document.getElementById('res').innerHTML = eval(resultado);
    } 
    else
    {
       alert("[ERROR] Insira a operação desejada!")
    }
}

