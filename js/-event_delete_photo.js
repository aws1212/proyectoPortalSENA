class deletePhoto{
    constructor(id_photo,link)
    {
        this.id_photo = id_photo;
        this.link = link;
    }   
}

//Event delete photo//
function deletephotoOne(Delete_button)
{
    var id_photo = Delete_button.id;
    var link = Delete_button.name;
    var datos = new deletePhoto(id_photo,link);

    $.ajax({
        data:  datos, //datos que se envian a traves de ajax
        url:   'php/-delete_current_photoUno.php', //archivo que recibe la peticion
        type:  'post', //método de envio
        beforeSend: function () {
        },
        success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
        
            var Ress = eval(response);

            if(Ress == "Exito")
            {
                call_photos();
            }
            else if(Ress == "Error")
            {
                alert("Error");
            }
        }
    });
    
}

//Event delete photo//
function deletephotoTwo(Delete_button)
{
    var id_photo = Delete_button.id;
    var datos = new deletePhoto(id_photo);

    $.ajax({
        data:  datos, //datos que se envian a traves de ajax
        url:   'php/-delete_current_photoDos.php', //archivo que recibe la peticion
        type:  'post', //método de envio
        beforeSend: function () {
        },
        success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
        
            var Ress = eval(response);

            if(Ress == "Exito")
            {
                call_photos();
            }
            else if(Ress == "Error")
            {
                alert("Error");
            }
        }
    });
    
}

//Event delete photo//
function deletephotoThree(Delete_button)
{
    var id_photo = Delete_button.id;
    var datos = new deletePhoto(id_photo);

    $.ajax({
        data:  datos, //datos que se envian a traves de ajax
        url:   'php/-delete_current_photoTres.php', //archivo que recibe la peticion
        type:  'post', //método de envio
        beforeSend: function () {
        },
        success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
        
            var Ress = eval(response);

            if(Ress == "Exito")
            {
                call_photos();
            }
            else if(Ress == "Error")
            {
                alert("Error");
            }
        }
    });
    
}


//Event delete photo//
function deletephotoFour(Delete_button)
{
    var id_photo = Delete_button.id;
    var datos = new deletePhoto(id_photo);

    $.ajax({
        data:  datos, //datos que se envian a traves de ajax
        url:   'php/-delete_current_photoCuatro.php', //archivo que recibe la peticion
        type:  'post', //método de envio
        beforeSend: function () {
        },
        success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
        
            var Ress = eval(response);

            if(Ress == "Exito")
            {
                call_photos();
            }
            else if(Ress == "Error")
            {
                alert("Error");
            }
        }
    });
    
}