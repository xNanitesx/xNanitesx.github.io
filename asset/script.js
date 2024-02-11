$('.tombol').click(function() {
    // animate content
    $('.halaman').addClass('animate_content');
    $('.dalemnya_halaman').fadeOut(100).delay(2800).fadeIn();

    setTimeout(function() {
        $('.halaman').removeClass('animate_content');
    }, 3200);

    //remove fadeIn class after 1500ms
    setTimeout(function() {
        $('.halaman').removeClass('fadeIn');
    }, 1100);

});


$('.tombol2').click(function() {
    // animate content
    $('.halaman').addClass('animate_content');
    $('.dalemnya_halaman').fadeOut(100).delay(2800).fadeIn();

    setTimeout(function() {
        $('.halaman').removeClass('animate_content');
    }, 3200);

    //remove fadeIn class after 1500ms
    setTimeout(function() {
        $('.halaman').removeClass('fadeIn');
    }, 1100);

});


$('.kehome').click(function() {
    setTimeout(function() {
        $('.home').addClass('fadeIn');
    }, 1100);

    PuterLaguPause();
    DenialPause();
});


$('.kehalaman2').click(function() {

    var ifname = document.getElementById("nama").value;
    //console.log(ifname);
    //document.getElementById("tampilnama").innerHTML = ifname;

    if((ifname.search("Tina") != -1)||(ifname.search("TINA") != -1)||(ifname.search("Poopoohead") != -1)||(ifname.search("Wife") != -1)||(ifname.search("Wifey") != -1)) {
    //if(document.getElementById("tampilnama").innerHTML.search("Tina") != -1){
        setTimeout(function() {
            $('.halaman2').addClass('fadeIn');
        }, 1100);

        JalaninTeks();
        PuterLaguPlay();
        //Ambilnama();
    }
    else{
        setTimeout(function() {
            $('.denial').addClass('fadeIn');
        }, 1100);
        DenialPlay();
        console.log("DENIAL PAGE NOW \n");
    }
});

var i = 0;
var txt = "thank you for accepting this bald short boi as your Valentine :') I can't wait to spend my first and all future valentine's day with my favourite talented, kind, pretty, innocent, crackhead girl! I shall pick you up at 4:30pm hehe, lets dress nice!";
//var txt = "Ribuan malam ku termenung sendiri, Menunggu seseorang untuk memelukku, Lewati ratusan mimpi tersimpan dalam sanubari, Sendiri di tengah kegelapan yang semu. Terimakasih engkau telah hadir untukku,\nmenemani kesepianku dan telah menjadi penerang dalam gelapku,  I Love You";
var speed = 50;

function JalaninTeks() {
    if (i < txt.length) {
        document.getElementById("tekss").innerHTML += txt.charAt(i);
        i++;
        setTimeout(JalaninTeks, speed);
    }
};


function DenialPlay() {
    var denialvar = document.getElementById("denialmusic");
    return denialvar.play();
};

function DenialPause() {
    var denialvar = document.getElementById("denialmusic");
    return denialvar.pause();
};

function PuterLaguPause() {
    var lagu = document.getElementById("lagu");
    return lagu.pause();
};

function PuterLaguPlay() {
    var lagu = document.getElementById("lagu");
    return lagu.play();
};

/*
function Ambilnama() {
    var x = document.getElementById("nama").value;
    document.getElementById("tampilnama").innerHTML = x;
};
*/