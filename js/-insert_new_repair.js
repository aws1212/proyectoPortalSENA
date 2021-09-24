class producto_newRepair{
    constructor(id_repair,placa,reparacion,mecanico,valor,mes){
        
        this.id_repair = id_repair;
        this.placa = placa;
        this.reparacion = reparacion;
        this.mecanico = mecanico;
        this.valor = valor;
    }
}

class productoIN_newRepair{
    respuesta_uno(){
        document.getElementById('txt_name_reparation').value = "";
        document.getElementById('txt_price_repair').value = "";
        $('#txt_name_mechanic option:eq(0)').prop('selected',true);
    }
    respuesta_dos(){
        alert("Error inesperado, intente nuevamente");       
    } 
    respuesta_tres(){
        alert("Error de conexión, intente luego");       
    } 
}
//Eventos del documento (DOM Event)//

document.getElementById('form_insert_new_repair')
    .addEventListener('submit',function(e){    

        const reparacion = document.getElementById('txt_name_reparation').value;
        const mecanico = document.getElementById('txt_name_mechanic').value;
        const valor = document.getElementById('txt_price_repair').value;
        const id_repair = document.getElementById('btn_id_repair').value;
        const placa = document.getElementById('btn_placa_repair').value;

       if (reparacion !== "" && mecanico !== "Mecánico" && valor !== "" )
       {

            const datos = new producto_newRepair(id_repair,placa,reparacion,mecanico,valor);
            
            $.ajax({
                data:  datos, //datos que se envian a traves de ajax
                url:   'php/-insert_new_repair.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                },
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                
                    var Ress = eval(response);

                    if(Ress == "Exito")
                    {
                        const Prod = new productoIN_newRepair();
                        Prod.respuesta_uno();
                    }
                    else if(Ress == "Error")
                    {
                        const Prod = new productoIN_newRepair();
                        Prod.respuesta_dos();
                    }
                    else
                    {
                        const Prod = new productoIN_newRepair();
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