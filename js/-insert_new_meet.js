class producto_newmeet{
    constructor(identification,name,plate,service,phone,email,dia,mes,año,hora){
        
        this.identification = identification;
        this.name = name;
        this.plate = plate;
        this.service = service;
        this.phone = phone;
        this.email = email;
        this.dia = dia;
        this.mes = mes;
        this.año = año;
        this.hora = hora
    }
}

class productoIN_newmeet{
    respuesta_uno(id_repair){
        document.getElementById('txt_identification').value = "";
        document.getElementById('txt_name').value = "";
        document.getElementById('txt_licenceplate').value = "";
        document.getElementById('txt_phone').value = "";
        document.getElementById('txt_email').value = "";
        document.getElementById('txt_day').value = "DÍA";
        document.getElementById('txt_mounth').value = "MES";
        document.getElementById('txt_year').value = "AÑO";
        document.getElementById('txt_hour').value = "HORA";
        alert("Cita asignada correctamente, sea puntual. Codigo de fotografias: "+id_repair);        
    }
}
//Eventos del documento (DOM Event)//

document.getElementById('form_new_meet')
    .addEventListener('submit',function(e){    

        const identification = document.getElementById('txt_identification').value;
        const name = document.getElementById('txt_name').value;
        const plate = document.getElementById('txt_licenceplate').value;
        const service = document.getElementById('txt_service').value;
        const phone = document.getElementById('txt_phone').value;
        const email = document.getElementById('txt_email').value;
        const dia = document.getElementById('txt_day').value;
        const mes = document.getElementById('txt_mounth').value;
        const año = document.getElementById('txt_year').value;
        const hora = document.getElementById('txt_hour').value;

       if (identification !== "" && name !== "" && plate !== "" && service !== "" && phone !== "" && email !== "" 
       && dia !== "DÍA" && mes !== "MES" && año !== "AÑO" && hora !== "HORA")
       {

            const datos = new producto_newmeet(identification,name,plate,service,phone,email,dia,mes,año,hora);
            
            $.ajax({
                data:  datos, //datos que se envian a traves de ajax
                url:   'php/-insert_new_meet.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                },
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                
                    var Ress = eval(response);

                    if(Ress == "Error")
                    {
                        alert("Error inesperado, intente nuevamente");       
                    }
                    else if(Ress == "Existe")
                    {
                        alert("Ya existe una cita con la fecha seleccionada");
                    }
                    else
                    {
                        const Prod = new productoIN_newmeet();
                        Prod.respuesta_uno(Ress);
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