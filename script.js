function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.toggle('open');
}
function toggleMusic() {
    let music = document.getElementById("bgMusic");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
