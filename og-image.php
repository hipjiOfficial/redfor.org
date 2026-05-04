<?php
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
$shopData = @json_decode(file_get_contents('https://hipjiofficial.github.io/redfor-shop-cache/shop-data.json'), true);
if (!$shopData) { http_response_code(500); exit; }

$cards = [$shopData['pc1'], $shopData['pc2'], $shopData['pc3']];
$skin  = $shopData['skin'];
$cardW = 620; $cardH = 210;
$skinW = 620; $skinH = 515;

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
        $cardImg = @imagecreatefromstring(file_get_contents($cardPath));
        if ($cardImg !== false) {
            imagecopyresampled($img, $cardImg, $cx + $borderT, $panelY + $borderT, 0, 0, $cardW - ($borderT * 2), $cardH, imagesx($cardImg), imagesy($cardImg));
            imagedestroy($cardImg);
        }
    }
}

// skin panel
$sx = $pad + $cardW + $gap;
$sy = $pad;
$skinPanelH = $leftH;

drawBorderedRect($img, $sx, $sy, $rightW, $skinPanelH, $cGold, $cDark, $borderT);

$skinPath = __DIR__ . '/skins/' . $skin . '.png';
if (file_exists($skinPath)) {
    $skinImg = @imagecreatefromstring(file_get_contents($skinPath));
    if ($skinImg !== false) {
        imagecopyresampled($img, $skinImg, $sx + $borderT, $sy + $borderT, 0, 0, $rightW - ($borderT * 2), $skinPanelH - ($borderT * 2), imagesx($skinImg), imagesy($skinImg));
        imagedestroy($skinImg);
    }
}
$footerY    = $pad + $leftH + $gap;
$footerText = 'REDFOR.ORG  --  DAILY SHOP  --  ' . strtoupper($shopData['log_date']);
$textX      = (int)(($totalW - strlen($footerText) * imagefontwidth(3)) / 2);
imagestring($img, 3, $textX, $footerY + 12, $footerText, $cGoldDim);

header('Content-Type: image/png');
imagepng($img);
imagedestroy($img);