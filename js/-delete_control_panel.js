class producto_deleteMeet{
    constructor(id_repair){
        
        this.id_repair = id_repair;
    }
}
class productoIN_deleteMeet{
    respuesta_uno(){
        searchrepaircurrent();
    }  
    respuesta_dos(){
        alert("Error al eliminar, intente nuevamente");
        searchrepaircurrent();
    } 
}

//Scripts evento setting_meet//
function delete_Meet(button)
{     
    id_repair = button.id;
    
    const datos = new producto_deleteMeet(id_repair);

    $.ajax({
        data:  datos, //datos que se envian a traves de ajax
        url:   'php/-delete_control_panel.php', //archivo que recibe la peticion
        type:  'post', //método de envio
        beforeSend: function () {
        },
        success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
           
            var Ress = eval(response);

            if(Ress == "Exito")
            {
                const Prod = new productoIN_deleteMeet();
                Prod.respuesta_uno();
            }
            else if(Ress == "Error")
            {
                const Prod = new productoIN_deleteMeet();
                Prod.respuesta_dos();
            }
        }
        });
   
}