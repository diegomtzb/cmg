<article class="entry">
    <div style="width: 250px; overflow: hidden; float: left;">
        <figure class="pull-right entryFigure">
            <img src="<?= getThumbUrl('newsFeed'); ?>"/>
        </figure>
    </div>
    <div class="col-lg-8 pull-right">
        <h2 class="entryTitle"><?= get_the_title(); ?></h2>
        <p>
            <?= get_the_excerpt(); ?>
        </p>
        <a href="<?= get_permalink(); ?>" class="readMore">Leer más</a>
    </div>
</article>
<div class="spaceBar"></div>