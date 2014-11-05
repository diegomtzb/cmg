<?php
$skip = array('barrilete', 'proyectos');
$currentTerm = $wp_query->query_vars['seccion'];
if(empty($currentSection) or in_array($currentSection, $skip)) {
    $currentSection = '';
}{
    $currentSection = $currentTerm . '?categoria=';
}
$root = get_bloginfo('home') . '/lecturas/';
?>
<div id="categories">
    <ul class="pull-left col-lg-4">
        <li id="pDemocratica"><a href="<?= $root; ?>participacion-democratica/">Participación democrática</a></li>
        <li id="entorno"><a href="<?= $root; ?>mi-entorno/">Mi entorno</a></li>
        <li id="miCuerpo"><a href="<?= $root; ?>cuido-mi-cuerpo/">Cuido mi cuerpo</a></li>
        <li id="cartagenero"><a href="<?= $root; ?>cartagenero-soy/">Cartagenero soy</a></li>
        <li id="misamigosyyo"><a href="<?= $root; ?>mis-amigos-y-yo/">Mis amigos y yo</a></li>
    </ul>
    <div class="pull-left col-lg-8">
        <p id="proj_par">
            <?php if(isset($catDescription)) echo $catDescription; ?>
        </p>
        <figure id="proj_figure">
            <img src=""/>
        </figure>
    </div>
</div>
<ul id="tabs-categories">
    <li class="active col-sm-4"><a href="<?= $root . '/' . $currentTerm; ?>">Todo</a></li>
    <li class="col-sm-4 correccion"><a href="<?= $root . $currentSection; ?>barrilete">Dirección de grupo <br>-Barrilete-</a></li>
    <li class="col-sm-4"><a href="<?= $root . $currentSection; ?>proyectos">Producción textual</a></li>
</ul>