<?php
$shopData = @json_decode(file_get_contents('https://api.redfor.org/shop'), true);
if (!$shopData) { http_response_code(500); exit; }

$cards = [$shopData['pc1'], $shopData['pc2'], $shopData['pc3']];
$skin  = $shopData['skin'];

$cardW = 790; $cardH = 245;
$skinW = 465; $skinH = 515;

$pad     = 24;
$gap     = 12;
$borderT = 3;

$leftH  = ($cardH * 3) + ($gap * 2) + ($borderT * 6);
$rightW = $skinW;

$totalW = $pad + $cardW + $gap + $rightW + $pad;
$totalH = $pad + $leftH + $gap + 40 + $pad;

$img = imagecreatetruecolor($totalW, $totalH);

$cBg      = imagecolorallocate($img, 14,  14,  14);
$cDark    = imagecolorallocate($img, 17,  17,  17);
$cGold    = imagecolorallocate($img, 200, 168, 75);
$cGoldDim = imagecolorallocate($img, 140, 110, 40);
$cGray    = imagecolorallocate($img, 120, 120, 120);

imagefill($img, 0, 0, $cBg);

function drawBorderedRect($img, $x, $y, $w, $h, $borderColor, $fillColor, $borderT) {
    imagefilledrectangle($img, $x, $y, $x + $w, $y + $h, $borderColor);
    imagefilledrectangle($img, $x + $borderT, $y + $borderT, $x + $w - $borderT, $y + $h - $borderT, $fillColor);
}

// playercard panel
$cx = $pad;
$cy = $pad;

foreach ($cards as $i => $name) {
    $panelY = $cy + $i * ($cardH + $gap + ($borderT * 2));

    drawBorderedRect($img, $cx, $panelY, $cardW, $cardH + ($borderT * 2), $cGold, $cDark, $borderT);

    $cardPath = __DIR__ . '/playercards/' . $name . '.png';
    if (file_exists($cardPath)) {
        $cardImg = imagecreatefrompng($cardPath);
        imagecopyresampled($img, $cardImg, $cx + $borderT, $panelY + $borderT, 0, 0, $cardW - ($borderT * 2), $cardH, imagesx($cardImg), imagesy($cardImg));
        imagedestroy($cardImg);
    }
}

// skin panel
$sx = $pad + $cardW + $gap;
$sy = $pad;
$skinPanelH = $leftH;

drawBorderedRect($img, $sx, $sy, $rightW, $skinPanelH, $cGold, $cDark, $borderT);

$skinPath = __DIR__ . '/skins/' . $skin . '.png';
if (file_exists($skinPath)) {
    $skinImg = imagecreatefrompng($skinPath);
    imagecopyresampled($img, $skinImg, $sx + $borderT, $sy + $borderT, 0, 0, $rightW - ($borderT * 2), $skinPanelH - ($borderT * 2), imagesx($skinImg), imagesy($skinImg));
    imagedestroy($skinImg);
}

$footerY    = $pad + $leftH + $gap;
$footerText = 'REDFOR.ORG  --  DAILY SHOP  --  ' . strtoupper($shopData['log_date']);
$textX      = (int)(($totalW - strlen($footerText) * imagefontwidth(3)) / 2);
imagestring($img, 3, $textX, $footerY + 12, $footerText, $cGoldDim);

header('Content-Type: image/png');
header('Cache-Control: public, max-age=3600'); // resets cache every 1h. might change to 24h but idc
imagepng($img);
imagedestroy($img);