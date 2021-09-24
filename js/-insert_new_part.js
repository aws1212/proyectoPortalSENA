class producto_newPart{
    constructor(id_repair,placa,name,reference,price){
        
        this.id_repair = id_repair;
        this.placa = placa;
        this.name = name;
        this.reference = reference;
        this.price = price;
    }
}

class productoIN_newPart{
    respuesta_uno(){
        document.getElementById('txt_name_part').value = "";
        document.getElementById('txt_reference_part').value = "";
        document.getElementById('txt_price_part').value = "";
    }
    respuesta_dos(){
        alert("Error inesperado, intente nuevamente");       
    } 
    respuesta_tres(){
        alert("Error de conexión, intente luego");       
    } 
}
//Eventos del documento (DOM Event)//

document.getElementById('form_insert_new_part')
    .addEventListener('submit',function(e){    

        const name = document.getElementById('txt_name_part').value;
        const reference = document.getElementById('txt_reference_part').value;
        const price = document.getElementById('txt_price_part').value;
        const id_repair = document.getElementById('btn_id_repair').value;
        const placa = document.getElementById('btn_placa_repair').value;

       if (name !== "" && reference !== "" && price !== "" )
       {

            const datos = new producto_newPart(id_repair,placa,name,reference,price);
            
            $.ajax({
                data:  datos, //datos que se envian a traves de ajax
                url:   'php/-insert_new_part.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                },
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                
                    var Ress = eval(response);

                    if(Ress == "Exito")
                    {
                        const Prod = new productoIN_newPart();
                        Prod.respuesta_uno();
                    }
                    else if(Ress == "Error")
                    {
                        const Prod = new productoIN_newPart();
                        Prod.respuesta_dos();
                    }
                    else
                    {
                        const Prod = new productoIN_newPart();
                        Prod.respuesta_tres();
                    }
                }
            });
        }
        else
        {
            alert("Rellene todos los campos para continuar");
        }
       
       e.preventDefault();
});