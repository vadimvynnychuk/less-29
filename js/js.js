let playList = [

    {
    
     author: "LED ZEPPELIN",
    
     song:"STAIRWAY TO HEAVEN"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"BOHEMIAN RHAPSODY"
    
    },
    
    {
    
     author: "LYNYRD SKYNYRD",
    
     song:"FREE BIRD"
    
    },
    
    {
    
     author: "DEEP PURPLE",
    
     song:"SMOKE ON THE WATER"
    
    },
    
    {
    
     author: "JIMI HENDRIX",
    
     song:"ALL ALONG THE WATCHTOWER"
    
    },
    
    {
    
     author: "AC/DC",
    
     song:"BACK IN BLACK"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"WE WILL ROCK YOU"
    
    },
    
    {
    
     author: "METALLICA",
    
     song:"ENTER SANDMAN"
    
    }
    
];

let html = '';

playList.forEach(function(ithem,i,arr) {
    html += document.write(`<li>${playList[i].author}  --  ${playList[i].song}`)
})

function OpenWindow(){
    let window = document.querySelector( '.modal' );
    window.classList.remove( 'modal__window--close' );
}

function CloseWindow(){
    let window = document.querySelector( '.modal' );
    window.classList.add( 'modal__window--close');
}