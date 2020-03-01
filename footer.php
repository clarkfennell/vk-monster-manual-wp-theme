</main>
</body>
<footer>
</footer>
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/dist/script<?php
    if(!defined('BROWSERSYNC'))
      echo '.'.filemtime(get_template_directory().'/assets/js/dist/script.min.js');
    ?>.min.js" async defer></script>
</body>
</html>