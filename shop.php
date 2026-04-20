<?php $v = gmdate('Ymd'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:image" content="https://www.redfor.org/og-image.php?v=<?= $v ?>"/>
    <meta property="og:title" content="Daily Shop"/>
    <meta property="og:description" content="Today's shop rotation"/>
    <meta property="og:url" content="https://www.redfor.org/shop"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <title>redfor.org - daily shop</title>
    <link rel="stylesheet" href="/assets/css/global.css">
    <link rel="icon" href="/assets/images/Placeholder Site Logo.webp">
</head>
<audio id="bgm" loop>
  <source src="assets/audio/Bombline Main Theme.mp3" type="audio/mpeg">
</audio>
<script src="/assets/js/audio.js" defer></script>
<script src="/assets/js/core.js" defer></script>
<script src="/assets/js/typing.js" defer></script>
<script src="/assets/js/shop.js" defer></script>
<script src="/assets/js/version.js" defer></script>
<body>
    <header>
        <label class="burger" for="burger">
            <input type="checkbox" id="burger">
            <span></span>
            <span></span>
            <span></span>
        </label>
    <div class="menu-card" id="menu">
        <a href="/">Home</a>
        <a href="/shop">Daily Shop</a>
        <a href="/gallery">Gallery</a>
        <a href="/about">About</a>
        <a href="/support">Support</a>
    </div>
    <h4 class="titlepath" id="typed-text" data-text="agent@framework:/usr/home/dailyshop"></h4>
  </header>
    <div id="down-overlay">
        <div id="down-box">
        <h2>Daily Shop is currently down.</h2>
        <p>I ran out of CU-hrs only 18 days into the month, so the database that the api uses is unavailable.</p>
        <p>I am working on a fix, but I don't know when it will be ready. Sorry.</p>
        </div>
    </div>
    <div class="shop">
        <div class="shop-cards">
            <img id="pc1">
            <img id="pc2">
            <img id="pc3">
        </div>
        <img id="skin">
    </div>
    <div class="shop-timer">
        Next shop in: <span id="countdown">00:00</span>
    </div>
<footer>
    <h5 id="version-number"></h5>
    <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="hipji" data-description="Support me on Buy me a coffee!" data-message="" data-color="#eba61b" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
</footer>
<a href="https://redfor.org/wrongshop" target="_blank">Are we wrong?</a>
</body>