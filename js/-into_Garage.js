
class producto_intoGarage{
    constructor(pass)
    {
        this.pass = pass;
    }
}

function intoGarage()
{
    var pass = document.getElementById("txt_pass_garage").value;
    if(pass != "")
    {
        var datos = new producto_intoGarage(pass);

        $.ajax({
            data: datos,
            type: 'post',
            url: 'php/-into_Garage.php',
            beforeSend: function(){
            },
            success: function(response){
                
                var Ress = eval(response);

                if(Ress == "Exito")
                {
                    document.getElementById("box_login_Garage").style.display = "block";
                    document.getElementById("control_box").style.display = "block";
                    document.getElementById("txt_pass_garage").value = "";
                    document.getElementById("btn_exit_control_panel").value = "Cerrar sesión";
                    searchrepaircurrent();
                }
                else
                {
                    alert("Clave incorrecta");
                    document.getElementById("txt_pass_garage").value = "";
                }
            }

        })
    }
    else
    {
        alert("Por favor ingrese la contraseña");
    }
}

function returnPass()
{
    document.getElementById("box_login_Garage").style.display = "none";
    document.getElementById("control_box").style.display = "none";
   document.getElementById("meet_box").style.display = "none";
   document.getElementById("photograpy_box").style.display = "block";
   document.getElementById("nomina_box").style.display = "none";
   document.getElementById("blog_box").style.display = "none";
    document.getElementById("txt_pass_garage").value = "";
}