function consoleStyler( color, background, fontsize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontsize};`;
    console.log(message, style);
}

function celebrateStyler( reason ) {
    var fontStyle = "color: tomato; font-size: 50px";
    if( reason == "birthday"){
        console.log(`%cHappy birthday`, fontStyle);
    }else if( reason == "champions"){
        console.log(`%cCongrats on the title`, fontStyle);
    }else {
        console.log(message, fontStyle);
    }    
        
    
}

 //consoleStyler( "#1d5c63", "#ede6db", "40px", "Felcitaciones!");
//celebrateStyler("champions");

function styleAndCelebrate (color, background, fontsize, txt, reason) {
    consoleStyler(color, background, fontsize, txt);
    celebrateStyler(reason);
}

styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'Lo lograste!', 'champions');


