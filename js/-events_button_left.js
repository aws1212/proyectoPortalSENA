//Scripts evento img mechanic//
$(document).ready(function () {

    $("img[id=img_services]").click(function () {
        document.getElementById("blog_box").style.display = "block";
       document.getElementById("meet_box").style.display = "none";
       document.getElementById("photograpy_box").style.display = "none";
       document.getElementById("control_box").style.display = "none";
       document.getElementById("nomina_box").style.display = "none";

            var blogs = $('.escrito_blog').length;
            var num = blogs - 1;

            for(var i = 0; i <= 0; i++)
            {
                var divs = $('div.escrito_blog')[i];
                divs.style.display = "none";
            }
            var div = $('div.escrito_blog')[num];
            div.style.display = "block";
    });

});

//Scripts evento img mechanic//
$(document).ready(function () {

    $("img[id=img_mechanic]").click(function () {
       document.getElementById("meet_box").style.display = "block";
       document.getElementById("photograpy_box").style.display = "none";
       document.getElementById("control_box").style.display = "none";
       document.getElementById("nomina_box").style.display = "none";
       document.getElementById("blog_box").style.display = "none";

       document.getElementById("txt_service").value = "Mecánica general";
    });
});

//Scripts evento img oil//
$(document).ready(function () {

    $("img[id=img_oil]").click(function () {
       document.getElementById("meet_box").style.display = "block";
       document.getElementById("photograpy_box").style.display = "none";
       document.getElementById("control_box").style.display = "none";
       document.getElementById("nomina_box").style.display = "none";
       document.getElementById("blog_box").style.display = "none";

       document.getElementById("txt_service").value = "Cambio de aceite";
    });
});

//Scripts evento img electronic//
$(document).ready(function () {

    $("img[id=img_electronic]").click(function () {
       document.getElementById("meet_box").style.display = "block";
       document.getElementById("photograpy_box").style.display = "none";
       document.getElementById("control_box").style.display = "none";
       document.getElementById("nomina_box").style.display = "none";
       document.getElementById("blog_box").style.display = "none";

       document.getElementById("txt_service").value = "Sistema eléctrico";
    });
});

//Scripts evento img breakspring//
$(document).ready(function () {

    $("img[id=img_breakspring]").click(function () {
       document.getElementById("meet_box").style.display = "block";
       document.getElementById("photograpy_box").style.display = "none";
       document.getElementById("control_box").style.display = "none";
       document.getElementById("nomina_box").style.display = "none";
       document.getElementById("blog_box").style.display = "none";

       document.getElementById("txt_service").value = "Amortiguación y frenos";
    });
});

//Scripts evento principal_img //
$(document).ready(function () {

    $("img[id=btn_principal_image]").click(function () {
        document.getElementById("box_login_Garage").style.display = "block";
        document.getElementById("control_box").style.display = "none";
       document.getElementById("meet_box").style.display = "none";
       document.getElementById("photograpy_box").style.display = "none";
       document.getElementById("nomina_box").style.display = "none";
       document.getElementById("blog_box").style.display = "none";
    });
});
