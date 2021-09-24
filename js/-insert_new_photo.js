
class productoIN_newPhoto{
    respuesta1_unoPhoto(){
        document.getElementById("txt_photo_one").value = "";
        $("#txt_photo_two").prop('disabled',false);
        $("#txt_photo_three").prop('disabled',false);
        $("#txt_photo_four").prop('disabled',false);
    }  
    respuesta2_unoPhoto(){
        alert("Error primero foto");
    } 
    respuesta1_dosPhoto(){
        document.getElementById("txt_photo_two").value = "";
        $("#txt_photo_one").prop('disabled',false);
        $("#txt_photo_three").prop('disabled',false);
        $("#txt_photo_four").prop('disabled',false);
    }  
    respuesta2_dosPhoto(){
        alert("Error primero foto");
    }
    respuesta1_tresPhoto(){
        document.getElementById("txt_photo_three").value = "";
        $("#txt_photo_two").prop('disabled',false);
        $("#txt_photo_one").prop('disabled',false);
        $("#txt_photo_four").prop('disabled',false);
    }  
    respuesta2_tresPhoto(){
        alert("Error primero foto");
    }
    respuesta1_cuatroPhoto(){
        document.getElementById("txt_photo_four").value = "";
        $("#txt_photo_two").prop('disabled',false);
        $("#txt_photo_three").prop('disabled',false);
        $("#txt_photo_one").prop('disabled',false);
    }  
    respuesta2_cuatroPhoto(){
        alert("Error primero foto");
    }
}
//Eventos del documento (DOM Event)//

document.getElementById('form_insert_new_photo')
    .addEventListener('submit',function(e){    

        if(document.getElementById("txt_photo_one").files.length != 0)
        {            
           

            var formData = new FormData();
            var imagee = $("#txt_photo_one")[0].files[0];
            var id_repair = document.getElementById('btn_id_repair').value;
            var placa = document.getElementById('btn_placa_repair').value;

            formData.append('imagee',imagee);
            formData.append('id_repair',id_repair);
            formData.append('placa',placa);

            $.ajax({
                data:  formData, //datos que se envian a traves de ajax
                url:   'php/-insert_new_photoUno.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                contentType: false,
                processData: false,
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                   
                    alert(response);
                    var Ress = eval(response);

                    if(Ress == "Exito")
                    {
                        const Prod = new productoIN_newPhoto();
                        Prod.respuesta1_unoPhoto();
                    }
                    else if (Ress == "Error")
                    {
                        const Prod = new productoIN_newPhoto();
                        Prod.respuesta2_unoPhoto(Ress);
                    }
                    else if (Ress == "Null")
                    {
                        alert("Null");
                    }
                }

            });

        }
        if(document.getElementById("txt_photo_two").files.length != 0)
        {            
            var formData = new FormData();
            var imagee = $("#txt_photo_two")[0].files[0];
            var id_repair = document.getElementById('btn_id_repair').value;
            var placa = document.getElementById('btn_placa_repair').value;

            formData.append('imagee',imagee);
            formData.append('id_repair',id_repair);
            formData.append('placa',placa);

            $.ajax({
                data:  formData, //datos que se envian a traves de ajax
                url:   'php/-insert_new_photoDos.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                contentType: false,
                processData: false,
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                   
                    alert(response);
                    var Ress = eval(response);

                    if(Ress == "Exito")
                    {
                        const Prod = new productoIN_newPhoto();
                        Prod.respuesta1_dosPhoto();
                    }
                    else if (Ress == "Error")
                    {
                        const Prod = new productoIN_newPhoto();
                        Prod.respuesta2_dosPhoto(Ress);
                    }
                    else if (Ress == "Null")
                    {
                        alert("Null");
                    }
                }

            });

        }
        if(document.getElementById("txt_photo_three").files.length != 0)
        {            
            var formData = new FormData();
            var imagee = $("#txt_photo_three")[0].files[0];
            var id_repair = document.getElementById('btn_id_repair').value;
            var placa = document.getElementById('btn_placa_repair').value;

            formData.append('imagee',imagee);
            formData.append('id_repair',id_repair);
            formData.append('placa',placa);

            $.ajax({
                data:  formData, //datos que se envian a traves de ajax
                url:   'php/-insert_new_photoTres.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                contentType: false,
                processData: false,
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                   
                    alert(response);
                    var Ress = eval(response);

                    if(Ress == "Exito")
                    {
                        const Prod = new productoIN_newPhoto();
                        Prod.respuesta1_tresPhoto();
                    }
                    else if (Ress == "Error")
                    {
                        const Prod = new productoIN_newPhoto();
                        Prod.respuestaw_tresPhoto(Ress);
                    }
                    else if (Ress == "Null")
                    {
                        alert("Null");
                    }
                }

            });

        }
        if(document.getElementById("txt_photo_four").files.length != 0)
        {            
            var formData = new FormData();
            var imagee = $("#txt_photo_four")[0].files[0];
            var id_repair = document.getElementById('btn_id_repair').value;
            var placa = document.getElementById('btn_placa_repair').value;

            formData.append('imagee',imagee);
            formData.append('id_repair',id_repair);
            formData.append('placa',placa);

            $.ajax({
                data:  formData, //datos que se envian a traves de ajax
                url:   'php/-insert_new_photoCuatro.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                contentType: false,
                processData: false,
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                   
                    alert(response);
                    var Ress = eval(response);

                    if(Ress == "Exito")
                    {
                        const Prod = new productoIN_newPhoto();
                        Prod.respuesta1_cuatroPhoto();
                    }
                    else if (Ress == "Error")
                    {
                        const Prod = new productoIN_newPhoto();
                        Prod.respuesta2_cuatroPhoto(Ress);
                    }
                    else if (Ress == "Null")
                    {
                        alert("Null");
                    }
                }

            });

        }
        else if (document.getElementById("txt_photo_four").files.length == 0 && document.getElementById("txt_photo_three").files.length == 0
        && document.getElementById("txt_photo_two").files.length == 0 && document.getElementById("txt_photo_one").files.length == 0)
        {
            alert("Cargue una foto para continuar");
        }
       
       e.preventDefault();
       
});