var tour = 0;

preloadImages(["img/player/Walk/walk_10000.png",
    "img/player/Walk/walk_10001.png",
    "img/player/Walk/walk_10002.png",
    "img/player/Walk/walk_10003.png",
    "img/player/Walk/walk_10004.png",
    "img/player/Walk/walk_10005.png",
    "img/player/Walk/walk_10006.png",
    "img/player/Walk/walk_10007.png",
    "img/player/Walk/walk_10008.png",
    "img/player/Walk/walk_10009.png",
    "img/player/Walk/walk_50000.png",
    "img/player/Walk/walk_50001.png",
    "img/player/Walk/walk_50002.png",
    "img/player/Walk/walk_50003.png",
    "img/player/Walk/walk_50004.png",
    "img/player/Walk/walk_50005.png",
    "img/player/Walk/walk_50006.png",
    "img/player/Walk/walk_50007.png",
    "img/player/Walk/walk_50008.png",
    "img/player/Walk/walk_50009.png",
]);
var map = [];
var listcharacter = [];
var endgame = false;
var joueur = new perso;
listcharacter[0] = joueur;
var target = new targetcell;
var exit = false;
var ydep = [];
var xdep = [];
var clicTour;
console.log("tebit");
exit = init();
console.log("bitebitebite");
//LOAD GAME ON FORM SUMBIT
if (exit === false) {
    wait(1000);
    document.body.querySelector(".nom").textContent = joueur.name;
    // A METTRE DANS FONCTION SPAWN ENNEMY
    //document.body.querySelector(".nomEnnemy").textContent = ennemy.name;
    //var ennemy = new perso;
    document.body.querySelector(".persohidden").className = "personnage";
    createMap();
    initialPosition(4, 4);
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            map[x][y].addEventListener("click", function(e) {
                console.log("before occupe false");
                /* for (let charac of listcharacter) {
                     if ((charac.x == x) && (charac.y == y)) {
                         occupe = true;
                     }
                 }*/
                target.x = x;
                target.y = y;
                update();
            })

        }
    }
}

//
function update() {
    if (exit === false) {
        if (target.x == joueur.x && target.y == joueur.y) {} else {
            console.log(target.x, joueur.x, target.y, joueur.y)
            path(joueur.x, joueur.y, target.x, target.y);
        }
        if (xdep.length != 0) {
            while (xdep.length != 0) {
                deplacementvers(ydep[tour - clicTour], xdep[tour - clicTour]);
                if (tour - clicTour == xdep.length - 1) {
                    xdep = [];
                    ydep = [];
                }
                tour += 1;
            }
        }


    } else {}
}

function deplacementvers(xxx, yyy) {
    document.body.querySelector(".personnage").remove();
    let create = document.createElement("section");
    create.className = "personnage";
    document.body.querySelector(".game").appendChild(create);
    document.body.querySelector(".personnage").style.left = map[xxx][yyy].getBoundingClientRect().left - 35 + "px";
    document.body.querySelector(".personnage").style.top = map[xxx][yyy].getBoundingClientRect().top - 45 + "px";
    joueur.position = map[xxx][yyy];
    joueur.x = xxx;
    joueur.y = yyy;
}

function perso() {
    this.name = "";
    this.items = [];
    this.money = 0;
    this.hp = 100;
    this.mp = 2;
    this.ap = 1;
    this.position = [0][0];
    this.x = 0;
    this.y = 0;
}

function targetcell() {
    this.position = [0][0];
    this.x = 0;
    this.y = 0;
    this.isfree = true;
}

function path(playerx, playery, tarx, tarz) {
    xdep = [];
    ydep = [];
    console.log(xdep);
    let lTarget = tarx;
    let cTarget = tarz;
    let lPlayer = playerx;
    let cPlayer = playery;
    var distance;
    let deltaL = lTarget - lPlayer;
    let deltaC = cTarget - cPlayer;
    console.log(deltaL);

    let absDL = Math.abs(deltaL);
    let absDC = Math.abs(deltaC);
    var disdiag = Math.min(absDL, absDC);
    var disline;
    if (absDL > absDC) {
        disline = absDL - absDC;
    } else {
        disline = absDC - absDL;
    }
    distance = disdiag + disline;
    for (let j = 0; j <= disdiag + disline; j++) {
        if (j <= disdiag) {
            xdep[j] = cPlayer + j * Math.sign(deltaC);
            ydep[j] = lPlayer + j * Math.sign(deltaL);
        } else {
            xdep[j] = cPlayer + disdiag + (j - disdiag) * Math.sign(deltaC - disdiag);
            ydep[j] = lPlayer + disdiag + (j - disdiag) * Math.sign(deltaL - disdiag);
        }
    }
    clicTour = tour;
    console.log(xdep);
}

function walkright() {
    console.log("right");
    document.body.querySelector(".personnage").className = "personnage walkright";
    wait(2400);
    document.body.querySelector(".personnage").className = "personnage endright";
}

function walkleft() {
    console.log("left");
    document.body.querySelector(".personnage").className = "personnage walkleft";
    wait(2400);
    document.body.querySelector(".personnage").className = "personnage endleft";
}

function walkup() {
    document.body.querySelector(".personnage").className = "personnage walkup";
    wait(2400);
    document.body.querySelector(".personnage").className = "personnage endup";
}

function walkdown() {
    document.body.querySelector(".personnage").className = "personnage walkdown";
    wait(2400);
    document.body.querySelector(".personnage").className = "personnage enddown";
}

function init() {
    //while (document.body.querySelector("#name").value === "") {
    //    document.body.querySelector("#name").id = "nameempty";
    //    wait(500);
    //    document.body.querySelector("#nameempty").id = "name";
    //}
    //joueur.name = document.body.querySelector("#name").value;
    joueur.name = "name";
    document.body.querySelector("#head").style.opacity = 0;
    wait(1000);
    document.body.querySelector("header").remove();
    return false;
}

function setTexture() {
    let texture = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
    let bloc = document.querySelectorAll(".mapBlock");
    for (let i = 0; i < bloc.length; i++) {
        let randomTile = texture[Math.floor((Math.random() * texture.length) + 0)];
        let imgBlock = document.createElement("img");
        imgBlock.src = randomTile;
        imgBlock.className = "imgTexture";
        bloc[i].appendChild(imgBlock);
    }

}


function createMap() {
    for (let x = 0; x <= 9; x++) {
        map[x] = [];
        for (let y = 0; y <= 9; y++) {
            let div = document.createElement("div");
            div.className = "isomap";
            div.style.height = "50px";
            div.style.width = "50px";
            div.className = "mapBlock";
            div.id = "x:" + x;
            map[x][y] = div;
            document.body.querySelector(".map").appendChild(div);
        }
    }
    setTexture();
}

function moveAnim(tilex, tiley, persox, persoy) {
    if (tilex > persox) {

    }
    if (tilex < persox) {

    }
    if (tiley > persoy) {

    }
    if (tiley < persoy) {

    }

}

function move(caseArray) {
    document.body.querySelector(".personnage").style.left = caseArray.getBoundingClientRect().left - 35 + "px";
    document.body.querySelector(".personnage").style.top = caseArray.getBoundingClientRect().top - 45 + "px";
    joueur.position = caseArray;
    joueur.x = target.x;
    joueur.y = target.y;
    // console.log(joueur.position);
}

function initialPosition(xx, yy) {
    joueur.x = xx;
    joueur.y = yy;
    document.body.querySelector(".personnage").style.left = map[xx][yy].getBoundingClientRect().left - 35 + "px";
    document.body.querySelector(".personnage").style.top = map[xx][yy].getBoundingClientRect().top - 45 + "px";
}

function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    let list = preloadImages.list;
    for (let i = 0; i < array.length; i++) {
        let img = new Image();
        img.onload = function() {
            let index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
    console.log("images loaded")
}

function wait(ms) {
    let start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}