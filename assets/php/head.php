<head>
    <!-- Global site tag (first including gtag.js) for Google Analytics -->
    <script src="https://www.googletagmanager.com/gtag/js?id=G-1F5GCWHXKX"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', 'G-1F5GCWHXKX', {
            cookie_expires: 0,
            'user_id': 'USER_ID',
            'link_attribution': true
        });
    </script>

    <script src="https://www.google.com/recaptcha/api.js?render=6Ld9QSYaAAAAANgmfvUZkMD8PameSDCr_x3VFa6x"></script>

    <!-- Required meta tags for charset and mobile optimisation -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- the stylesheet as a file import because it loads faster -->
    <link rel="stylesheet" href="<?php if (isset($site_name)) {
        echo "../";
    } ?>assets/css/materialize.min.css" media="print" onload="this.media='all'">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" media="print" onload="this.media='all'">


    <!-- include the latest jQuery and the materialize.min.js -->
    <script src="https://code.jquery.com/jquery-latest.min.js"></script>
    <script src="<?php if (isset($site_name)) {
        echo "../";
    } ?>assets/js/materialize.min.js"></script>
    <script>M.AutoInit(document.body)</script>


    <!-- specific site info-->
    <title>JW29435<?php
        if (isset($site_name)) {
            echo " | " . $site_name;
        } ?></title>
    <meta name="description" content="JW29435 is an acronym. I am a student and hobby programmer. If you have any special requests for any projects send my an email.">
    <link rel="icon" href="https://jw29435.de/assets/img/favicon/jw/favicon.ico" type="image/x-icon"/>

    <!-- get the load time of the page -->
    <script>if (window.performance) {
            let timeSincePageLoad = Math.round(performance.now());
            gtag('event', 'timing_complete', {
                'name': 'load',
                'value': timeSincePageLoad,
                'event_category': 'JS Dependencies'
            });
        }</script>

    <!-- Microsoft Clarity tracking code for bing -->
    <script>    (function (c, l, a, r, i, t, y) {
            c[a] = c[a] || function () {
                (c[a].q = c[a].q || []).push(arguments)
            };
            t = l.createElement(r);
            t.async = 1;
            t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t, y);
        })(window, document, "clarity", "script", "4umpvqv81k");
    </script>

    <?php
    # log the date, URL, IP, Browser (this is a php comment so the user doesn't see it)
    $file = "/var/www/log/ip.log";
    $file = fopen($file, "a");
    $data = "[" . date('d/m/Y G:i:s') . "] " . "user address: [" . $_SERVER['REMOTE_ADDR'] . "] " . "User Browser info: [" . $_SERVER['HTTP_USER_AGENT'] . "]" . PHP_EOL;
    fwrite($file, $data);
    fclose($file);
    ?>

</head>