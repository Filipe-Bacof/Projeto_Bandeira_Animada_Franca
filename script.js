const flag = document.getElementById('flag');
for (let i = 0; i < flag.offsetWidth; i++) {
    let flag_img = document.createElement('div');
    flag_img.className = 'flag_img';
    flag_img.style.backgroundPosition = -i + 'px';
    flag_img.style.animationDelay = i * 10 + 'ms';
    flag.append(flag_img);
}