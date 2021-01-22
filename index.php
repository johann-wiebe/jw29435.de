<!DOCTYPE html>
<html lang="en">

<?php $site_name = null; # no site name set, because that way the title is "JW29435" automatically
include("./assets/php/head.php"); ?>

<body>

<header>
    <nav>
        <div class="nav-wrapper container">
            <a rel="nofollow" href="https://jw29435.de" class="brand-logo"><img src="assets/img/29435-logo.png" alt="29435-logo" height="40" width="82"></a>
            <a href="#" data-target="mobile-sidebar" class="sidenav-trigger"><i class="material-icons">menu</i></a>
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
    <div class="row">
        <div class="col s12 m9 l10">
            <div id="about" class="section scrollspy">
                <h1>JW29435</h1>
                <p>
                    I have little to no experience and want to learn how to do stuff by myself.
                    If you want to see my projects, you can do so by visiting my github page.
                    I also have a gitlab account, but all repositories are archived.
                    Due to the excellent service GitHub Education, I have access to a lot of great tools, for example nearly all JetBrains programms and other programms listed
                </p>
            </div>
            <div id="app" class="section scrollspy">
                <h2>App</h2>
                <p>
                    Even though the app is only available on android right now, an iOS version is already in development
                    and will follow as soon as it's finished.
                    Stay tuned to be one of the first people to see the iPhone app.
                </p>
                <a class="waves-effect btn" href="https://jw29435.de/apps">Show App</a>
            </div>
            <div id="services" class="section scrollspy">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
            </div>

            <?php
            include("./assets/php/contact_form.php");
            ?>


            <div id="projects" class="section scrollspy">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
            </div>
        </div>
        <div class="col hide-on-small-only m3 l2">
            <div class="toc-wrapper pin-top" style="top: 0">
                <ul class="section table-of-contents">
                    <li><a href="#about">Info</a></li>
                    <li><a href="#app">App</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </div>
        </div>
    </div>

    <?php
    include("./assets/php/footer.php");
    ?>
</div>

<script>
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        let toc = $(".toc-wrapper");
        if (scroll >= 50) {
            toc.removeClass("pin-top");
            toc.addClass("pinned");
        } else {
            toc.removeClass("pinned");
            toc.addClass("pin-top");
        }
    });
</script>

</body>

</html>