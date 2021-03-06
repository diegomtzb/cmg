<?php
$catDescription = "Cuido mi cuerpo y tomo decisiones responsables y autónomas
basadas en el respeto y la dignidad del ser humano.";

include('templates/secciones-template.php');

?>

<script>
    var $tabsCategories = $("#tabs-categories");
    var $tabsCategories_li = $tabsCategories.find("li");
    var categories = $("#categories");
    var categories_li = categories.find("li");
    var categories_div = categories.find("> div");
    var lecturasSection = $("#lecturas-section");
    var this_cat = $("#miCuerpo");

    categories_li.removeClass("active");
    this_cat.addClass("active");

    var clr_backgr = this_cat.css("background-color");
    categories_div.css("background-color", clr_backgr);
    categories_div.find("p").css("color", "white");

    $tabsCategories_li.css("background-color", clr_backgr);
    lecturasSection.css("border-top", "11px solid " + clr_backgr);
    lecturasSection.css("border-bottom", "11px solid " + clr_backgr);

    var parrafo = $("#proj_par");
    var figure = $("#proj_figure");
    var img = figure.find("img");

    parrafo.addClass("col-sm-7");
    figure.addClass("col-sm-5");
    img.attr('src', '<?php stylesheetUri(); ?>imgs/icon3.png');

</script>