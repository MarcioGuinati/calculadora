var prim_nro;
var seg_nro;
var resultado;
var operacao;


function somar(){

     prim_nro = parseFloat(document.getElementById('nro1').value);
     seg_nro = parseFloat(document.getElementById('nro2').value);

    if(prim_nro > 0 && seg_nro > 0)
    {
        operacao = '+';
        resultado = prim_nro + seg_nro;
    }
    else
    {
        alert('Os números prexisam ser maiores que 0 (zero).')
    }
    
}
function resultadoCalc(){
    //capturamos o elemento
    var tag_resultado = document.getElementById('resultado_calc');

    //Montando a String de saida
    var str = prim_nro + ' ' + operacao + ' ' + seg_nro + ' = ' + resultado;

    //Injetamos o String no elemento
    tag_resultado.innerHTML = str;

    //Limpa ou reseta as variaveis
    prim_nro = seg_nro = operacao = resultado = '';
    document.getElementById('nro1').value = '';
    document.getElementById('nro2').value = '';
}
function subtrair(){

    prim_nro = parseFloat(document.getElementById('nro1').value);
    seg_nro = parseFloat(document.getElementById('nro2').value);

   if(prim_nro > 0 && seg_nro > 0)
   {
       operacao = '-';
       resultado = prim_nro - seg_nro;
   }
   else
   {
       alert('Os números prexisam ser maiores que 0 (zero).')
   }
   
}
function multiplicar(){

    prim_nro = parseFloat(document.getElementById('nro1').value);
    seg_nro = parseFloat(document.getElementById('nro2').value);

   if(prim_nro > 0 && seg_nro > 0)
   {
       operacao = '*';
       resultado = prim_nro * seg_nro;
   }
   else
   {
       alert('Os números prexisam ser maiores que 0 (zero).')
   }
   
}
function dividir(){

    prim_nro = parseFloat(document.getElementById('nro1').value);
    seg_nro = parseFloat(document.getElementById('nro2').value);

   if(prim_nro > 0 && seg_nro > 0)
   {
       operacao = '/';
       resultado = prim_nro / seg_nro;
   }
   else
   {
       alert('Os números prexisam ser maiores que 0 (zero).')
   }
   
}