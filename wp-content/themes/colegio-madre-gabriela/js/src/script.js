$(document).ready(function() {
    
    /*var text = $(location).attr('href');
    if (text.indexOf("participacion") >= 0){
        alert(text.indexOf("participacion"));
    }*/
    
    $(".iframe").colorbox({iframe:true, width:"90%", height:"95%", fixed:true});

    var $tabsCategories = $("#tabs-categories");
    var $tabsCategories_li = $tabsCategories.find("li");
    var $tabsCategories_li_a = $tabsCategories_li.find("a");
    $tabsCategories_li.click(function(e){
        e.preventDefault();
        $tabsCategories_li.removeClass("active");
        $( this ).addClass("active");
        //window.location.href="/?categoria=barrilete";
    });

    var resalt = $(".resalt");
    resalt.click(function(e){
        e.preventDefault();
        resalt.removeClass("active");
        $( this ).addClass("active");
    });

    var nosotrosPestanas = $("#nosotros-pestanas");
    var nosotrosPestanas_li = nosotrosPestanas.find("li");
    nosotrosPestanas_li.click(function(e){
        e.preventDefault();
        nosotrosPestanas_li.removeClass("active");
        $( this ).addClass("active");

        //Se obtiene el div a mostrar relacionado con la pestaña clickeada
        //Esta relacionado por medio de la  clase cpestannaNum (ej: cpestana1)
        var cpestanna = $('.' + 'c'+$( this ).attr("id"));

        //Se llama la funcion para cambiar la pestaña
        cambiarPestanna(cpestanna);
    });

    var pestSim = $(".pestSim");
    pestSim.click(function(e){
        e.preventDefault();

        //Se buscan las clases del elemento clickeado (una cadena)
        var cpestanna = $( this ).attr("class")

        //Se busca la clase que empieza por pestana (ej: pestana2-link)
        var a = cpestanna.search("pestana");
        //Asignamos a cpestanna la cadena de la clase encontrada quitandole -link (ej: pestana2)
        cpestanna = cpestanna.substring(a,cpestanna.length-5);


        //Borramos las clases active de las pestañas de arriba
        nosotrosPestanas_li.removeClass("active");

        //Asignamos la clase activa al id que tenga la clase encontrada
        $('#' + cpestanna).addClass("active");

        //Se obtiene el div a mostrar relacionado con la pestaña clickeada
        //Esta relacionado por medio de la  clase cpestannaNum (ej: cpestana1)
        //El contenedor deseado a mostrar es el que tiene la cadena encontrada + 'c' inicial (ej: cpestana2 es #objPol)
        cpestanna = $('.c' + cpestanna);

        //Se llama la funcion para cambiar la pestaña
        cambiarPestanna(cpestanna);
    });

    /*
    var categories = $("#categories");
    var categories_li = categories.find("li");
    var categories_li_a = categories_li.find("a");
    var categories_div = categories.find("> div");
    var lecturasSection = $("#lecturas-section");

    categories_li.click(function(e){
        e.preventDefault();

        //window.location.href = 'www.google.com';

        //window.location.href="mi-entorno";


        categories_li.removeClass("active");
        $( this ).addClass("active");
        if ($( this).find("a").html()=="Participación democrática"){
            clr_backgr = "#8bc63e";
            categories_div.css("background-color", clr_backgr);
            categories_div.find("p").css("color", "white");

            $tabsCategories_li.css("background-color", clr_backgr);
            lecturasSection.css("border-top", "11px solid " + clr_backgr);
            lecturasSection.css("border-bottom", "11px solid " + clr_backgr);
        }else{
            clr_backgr = $(this).css("background-color");
            categories_div.css("background-color", clr_backgr);
            categories_div.find("p").css("color", "white");

            $tabsCategories_li.css("background-color", clr_backgr);
            lecturasSection.css("border-top", "11px solid " + clr_backgr);
            lecturasSection.css("border-bottom", "11px solid " + clr_backgr);
        }



    });
    */

});


function cambiarPestanna(cpestanna) {

    //La seccion que contiene los div a mosrar
    var nosotrosSection = $("#nosotros-section");
    //Se ocultan todos los div (Hijos directos)
    nosotrosSection.find(">div").hide();
    //Se muestra el div relacionado
    nosotrosSection.find("div#" + cpestanna.attr("id") ).show();


}