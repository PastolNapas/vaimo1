var wallpaper = 0, //Wallpaper
    
        wallslide = 0;
    
    function fader() {
    
        setTimeout(fader, 150);
    
        document.getElementById("WallPaper" + wallpaper).style.opacity = 1.0 - Math.abs(100 - wallslide) / 100;
    
        wallslide -= 5;
    
        if(wallslide < 0) {
    
            wallslide = (wallslide + 200) % 200;
    
            wallpaper ++;
    
            if(!document.getElementById("WallPaper" + wallpaper))
    
                wallpaper = 0;
    
        }

    }