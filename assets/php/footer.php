<footer>
    <h3>Products</h3>
    <ul>
        <li><a href="https://jw29435.de/apps/">Application</a></li>
    </ul>
    <h3>Contact</h3>
    <ul class="con">
        <li><a href="mailto:contact@jw29435.de"><i class="material-icons">email</i> : contact@jw29435.de</a></li>
    </ul>
    Copyright © <?= date("Y") ?>
    <?php if (isset($site_name)) {
        print "<a rel='nofollow' href='https://jw29435.de'>JW29435</a> All Rights Reserved";
    } else {
        print "JW29435 All Rights Reserved";
    } ?>
    <a class="right" href="https://materializecss.com">Designed with materialize</a>
</footer>

<script type="text/javascript" src="<?php if (isset($site_name)) {
    echo "../";
} ?>assets/js/materialize.min.js"></script>
