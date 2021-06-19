
function compra (saldo){

    
    let valorCompra = parseFloat (prompt('Digite o valor da compra'));
    
    
    if(saldo >= valorCompra ){
        saldo = saldo-valorCompra;
        alert('Compra realizada!');
        return saldo;
    }else{
        return 'Saldo Insuficiente';
    }
}


 
 let saldo = parseFloat(prompt( 'Digite o valor do saldo'));


   saldo = compra(saldo);
   alert('Saldo: ' + saldo );

   saldo = compra(saldo);
   alert('Saldo: ' + saldo );

   saldo = compra(saldo);
   alert('Saldo: ' + saldo );


