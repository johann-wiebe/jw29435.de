<!DOCTYPE html>
<html lang="en">

<?php $site_name = null; # no site name set, because that way the title is "JW29435" automatically
include("./assets/php/head.php"); ?>

<body>

<header>
    <nav>
        <div class="nav-wrapper container">
            <a rel="nofollow" href="https://jw29435.de" class="brand-logo"><img src="assets/img/29435-logo.png" alt="29435-logo"></a>
            <a href="#" data-target="mobile-sidebar" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <script>  $(document).ready(function () {
                    $('.sidenav').sidenav();
                });</script>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a class="waves-effect" href="https://jw29435.de/apps">Event Planner</a></li>
                <li><a class="waves-effect" href="#">Services</a></li>
                <li><a class="waves-effect" href="#">Team</a></li>
            </ul>
            <ul class="sidenav" id="mobile-sidebar">
                <li><a class="waves-effect" href="https://jw29435.de/apps">Event Planner</a></li>
                <li><a class="waves-effect" href="#">Services</a></li>
                <li><a class="waves-effect" href="#">Team</a></li>
            </ul>
        </div>
    </nav>
</header>

<div class="container">

    <script>
        $(document).ready(function () {
            $('.scrollspy').scrollSpy();
        });
    </script>

    <div class="row">
        <div class="col s12 m9 l10">
            <div id="app" class="section scrollspy">
                <h2>App</h2>
                <p>
                    Even though the app is only available on android right now, an iOS version is
                    already in development<br>
                    and will follow as soon as it's finished.<br>
                    Stay tuned to be one of the first people to see the iPhone app.
                </p>
                <a class="waves-effect btn" href="https://jw29435.de/apps">Show App</a>
            </div>
            <div id="services" class="section scrollspy">
                <p>Content </p>
            </div>

            <div id="contact" class="section scrollspy">
                <p>Content </p>
            </div>

            <div id="projects" class="section scrollspy">
                <p>Content </p>
            </div>
        </div>
        <div class="col hide-on-small-only m3 l2">
            <ul class="section table-of-contents">
                <li><a href="#app">App</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </div>
    </div>

    <?php
    include("./assets/php/footer.php");
    ?>
</div>

</body>

</html>