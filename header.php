<!DOCTYPE HTML>
<head>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/style.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#000">
    <meta http-equiv="X-UA-Compatible" content="IE=11">
</head>
<body class="frame">
    <header class='row col-sm-12'>
        <div class='col-sm-<?php echo (has_nav_menu('primary')) ? 3 : 3 ?> page-header-logo'>
            <a aria-label="home button" alt="Val Killmeh's Monster Manual" title="Val Killmeh's Monster Manual" href='<?php echo home_url('/'); ?>' class='logo-link' rel="spa">
                <img src="https://via.placeholder.com/200x200" />
            </a>
        </div>
        <div class="col-sm-<?php echo (has_nav_menu('primary')) ? 3 : 9 ?>">
            <h1>
                <small>Val Killmeh's</small>
                <br/>
                Monster Manual
            </h1>
        </div>
        <?php if (has_nav_menu('primary')) { ?>
            <nav class='col-sm-6 page-header-nav'>
                <button aria-label="toggle menu" alt="toggle menu" class='page-header-nav-button mobile-h5' data-attr-alt-text='<?php _e('Close'); ?>'><?php _e('Menu'); ?></button>
                <?php wp_nav_menu(array(
                    'theme_location' => 'primary',
                )); ?>
            </nav>
        <?php } ?>
    </header>
    <main class>