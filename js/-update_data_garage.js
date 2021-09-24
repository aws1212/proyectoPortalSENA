class producto_updateGarage{
    constructor(dato,password)
    {
        this.dato = dato;
        this.password = password;
    }
}

function updateGarage(){    

        const name = document.getElementById('txt_name_garage').value;
        const mision = document.getElementById("txt_mision_Garage").value;
        const vision = document.getElementById("txt_vision_Garage").value;
        const phone = document.getElementById('txt_phono_garage').value;
        const adress = document.getElementById('txt_adress_garage').value;
        const atention_date = document.getElementById('txt_attention_garage').value;
        const email = document.getElementById('txt_email_garage').value;
        const password = document.getElementById('txt_pass_garage_update').value;
        const new_password = document.getElementById('txt_newpass_garage').value;

        if(password != "")
        {
            if(name != "")
            {
                var datos = new producto_updateGarage(name,password);
                $.ajax({
                    data: datos, //datos que se envian a traves de ajax
                   url:   'php/-update_nameGarage.php', //archivo que recibe la peticion
                   type:  'post', //método de envio
                   beforeSend: function () {
                   },
                   success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
   
                       var Ress = eval(response);
   
                       if(Ress == "Exito")
                       {
                           document.getElementById('txt_name_garage').value = "";
                           document.getElementById('txt_pass_garage_update').value = "";
                       }
                       else
                       {
                          alert("Contraseña incorrecta");
                       }
                   }
                   });
            }
            if(mision != "")
            {
                var datos = new producto_updateGarage(mision,password);
                $.ajax({
                    data: datos, //datos que se envian a traves de ajax
                   url:   'php/-update_misionGarage.php', //archivo que recibe la peticion
                   type:  'post', //método de envio
                   beforeSend: function () {
                   },
                   success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
   
                       var Ress = eval(response);
   
                       if(Ress == "Exito")
                       {
                           document.getElementById('txt_mision_Garage').value = "";
                           document.getElementById('txt_pass_garage_update').value = "";
                       }
                       else
                       {
                          alert("Contraseña incorrecta");
                       }
                   }
                   });
            }
            if(vision != "")
            {
                var datos = new producto_updateGarage(vision,password);
                $.ajax({
                    data: datos, //datos que se envian a traves de ajax
                   url:   'php/-update_visionGarage.php', //archivo que recibe la peticion
                   type:  'post', //método de envio
                   beforeSend: function () {
                   },
                   success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
   
                       var Ress = eval(response);
   
                       if(Ress == "Exito")
                       {
                           document.getElementById('txt_vision_Garage').value = "";
                           document.getElementById('txt_pass_garage_update').value = "";
                       }
                       else
                       {
                          alert("Contraseña incorrecta");
                       }
                   }
                   });
            }
            if(phone != "")
            {
                var datos = new producto_updateGarage(phone,password);
                $.ajax({
                    data: datos, //datos que se envian a traves de ajax
                   url:   'php/-update_phoneGarage.php', //archivo que recibe la peticion
                   type:  'post', //método de envio
                   beforeSend: function () {
                   },
                   success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
   
                       var Ress = eval(response);
   
                       if(Ress == "Exito")
                       {
                           document.getElementById('txt_phono_garage').value = "";
                           document.getElementById('txt_pass_garage_update').value = "";
                       }
                       else
                       {
                          alert("Contraseña incorrecta");
                       }
                   }
                   });
            }
            if(adress != "")
            {
                var datos = new producto_updateGarage(adress,password);
                $.ajax({
                    data: datos, //datos que se envian a traves de ajax
                   url:   'php/-update_adressGarage.php', //archivo que recibe la peticion
                   type:  'post', //método de envio
                   beforeSend: function () {
                   },
                   success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve

                       var Ress = eval(response);
   
                       if(Ress == "Exito")
                       {
                           document.getElementById('txt_adress_garage').value = "";
                           document.getElementById('txt_pass_garage_update').value = "";
                       }
                       else
                       {
                          alert("Contraseña incorrecta");
                       }
                   }
                   });
            }
            if(atention_date != "")
            {
                var datos = new producto_updateGarage(atention_date,password);
                $.ajax({
                    data: datos, //datos que se envian a traves de ajax
                   url:   'php/-update_attentionGarage.php', //archivo que recibe la peticion
                   type:  'post', //método de envio
                   beforeSend: function () {
                   },
                   success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
   
                       var Ress = eval(response);
   
                       if(Ress == "Exito")
                       {
                           document.getElementById('txt_attention_garage').value = "";
                           document.getElementById('txt_pass_garage_update').value = "";
                       }
                       else
                       {
                          alert("Contraseña incorrecta");
                       }
                   }
                   });
            }
            if(email != "")
            {
                var datos = new producto_updateGarage(email,password);
                $.ajax({
                    data: datos, //datos que se envian a traves de ajax
                   url:   'php/-update_emailGarage.php', //archivo que recibe la peticion
                   type:  'post', //método de envio
                   beforeSend: function () {
                   },
                   success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
   
                       var Ress = eval(response);
   
                       if(Ress == "Exito")
                       {
                           document.getElementById('txt_email_garage').value = "";
                           document.getElementById('txt_pass_garage_update').value = "";
                       }
                       else
                       {
                          alert("Contraseña incorrecta");
                       }
                   }
                   });
            }
            if(new_password != "")
            {
                var datos = new producto_updateGarage(new_password,password);
                $.ajax({
                    data: datos, //datos que se envian a traves de ajax
                   url:   'php/-update_newPassGarage.php', //archivo que recibe la peticion
                   type:  'post', //método de envio
                   beforeSend: function () {
                   },
                   success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
   
                       var Ress = eval(response);
   
                       if(Ress == "Exito")
                       {
                           document.getElementById('txt_newpass_garage').value = "";
                           document.getElementById('txt_pass_garage_update').value = "";
                       }
                       else
                       {
                          alert("Contraseña incorrecta");
                       }
                   }
                   });
            }

        }   
        else
        {
            alert("Inserte la contraseña actual para continuar");
        } 
        
};