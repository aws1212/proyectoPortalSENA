class productoNew_mechanic{
    constructor(id_mechanic,name_mechanic,cargo_mechanic,phone_mechanic)
    {
        this.id_mechanic = id_mechanic;
        this.name_mechanic = name_mechanic;
        this.cargo_mechanic = cargo_mechanic;
        this.phone_mechanic = phone_mechanic;
    }
}

class productoNewIN_mechanic{
    one_answer(){
        document.getElementById("txt_id_mechanic").value = "";
        document.getElementById("txt_newname_mechanic").value = "";
        document.getElementById("txt_function_mechanic").value = "";
        document.getElementById("txt_phone_mechanic").value = "";
        alert("Exito, agregó un nuevo mecanico");
    }
}

//Scripts evento nomina//
$(document).ready(function () {

    $("input[id=btn_new_technical]").click(function () {
        if(document.getElementById("btn_new_technical").value == "Nuevo técnico")
        {
            document.getElementById("nomina_technical_box").style.display = "none";
            document.getElementById("new_technical_box").style.display = "block";
            document.getElementById("btn_new_technical").value = "Agregar";
        }
        else if(document.getElementById("btn_new_technical").value == "Agregar")
        {
           var id_mechanic = document.getElementById("txt_id_mechanic").value;
           var name_mechanic = document.getElementById("txt_newname_mechanic").value;
           var cargo_mechanic = document.getElementById("txt_function_mechanic").value;
           var phone_mechanic = document.getElementById("txt_phone_mechanic").value;

           const datos = new productoNew_mechanic(id_mechanic,name_mechanic,cargo_mechanic,phone_mechanic);
            
            $.ajax({
                data:  datos, //datos que se envian a traves de ajax
                url:   'php/-insert_new_mechanic.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                },
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                
                    var Ress = eval(response);

                    if(Ress == "Exito")
                    {
                        const Prod = new productoNewIN_mechanic();
                        Prod.one_answer();
                    }
                    else if(Ress == "Error")
                    {
                        alert("Error de red, intente nuevamente");
                    }
                }
            });
        }

    });

});

//Scripts evento exit nomina//
$(document).ready(function () {

    $("input[id=btn_exit_nomina]").click(function () {
        if(document.getElementById("btn_new_technical").value == "Nuevo técnico")
        {
            document.getElementById("nomina_box").style.display = "none";
            document.getElementById("meet_box").style.display = "none";
            document.getElementById("photograpy_box").style.display = "none";
            document.getElementById("control_box").style.display = "block";
        }
        else if (document.getElementById("btn_new_technical").value == "Agregar")
        {
            document.getElementById("nomina_technical_box").style.display = "block";
            document.getElementById("new_technical_box").style.display = "none";
            document.getElementById("btn_new_technical").value = "Nuevo técnico";
        }

    });

});

//Scripts evento exit nomina//
$(document).ready(function () {

    $("input[id=btn_calcule_nomina]").click(function () {
        calculate_Nomina();
    });

});