class producto_searchPart
{
    constructor(reference)
    {
        this.reference = reference;
    }
}

class producto_searchRepair
{
    constructor(name)
    {
        this.name = name;
    }
}

class productoIN_searching
{
    oneAnswer(name_part,price_part)
    {
        document.getElementById("txt_name_part").value = name_part;
        document.getElementById("txt_price_part").value = price_part;
    }
    twoAnswer(valor_repair)
    {
        document.getElementById("txt_price_repair").value = valor_repair;
    }
}

function search_Part()
{
    var reference = document.getElementById("txt_reference_part").value;

    datos = new producto_searchPart(reference);

    $.ajax({
        data: datos,
        type: "post",
        url: "php/-search_data_Part.php",
        beforeSend(){

        },
        success: function(response)
        {
            Ress = eval(response);

            if(Ress == "Sin registro")
            {

            }
            else
            {
                var Prob = new productoIN_searching();
                Prob.oneAnswer(Ress[0],Ress[1]);
            }
        }
    })
}

function search_Repair()
{
    var reference = document.getElementById("txt_name_reparation").value;

    datos = new producto_searchRepair(reference);

    $.ajax({
        data: datos,
        type: "post",
        url: "php/-search_data_Repair.php",
        beforeSend(){

        },
        success: function(response)
        {
            Ress = eval(response);

            if(Ress == "Sin registro")
            {

            }
            else
            {
                var Prob = new productoIN_searching();
                Prob.twoAnswer(Ress[0]);
            }
        }
    })
}