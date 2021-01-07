(function() {
    if ( regalo == null || abrirRegalo == null )
        return;

        console.log( regalo );
        
    abrirRegalo.onclick = () => {
        regalo.classList.add("fadeOut");
        abrirRegalo.classList.add("fadeOut");
    }

    regalo.addEventListener("animationend", () => {
        regalo.remove();

        if ( audio === null ) return;
        audio.play();
    }, false);
}());