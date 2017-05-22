
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
var exit = false;
exit = init();
console.log("initialized");
//LOAD GAME ON FORM SUMBIT
if (exit === false) {
    wait(1000);
    document.body.querySelector(".nom").textContent = joueur.name;
    // A METTRE DANS FONCTION SPAWN ENNEMY
    //document.body.querySelector(".nomEnnemy").textContent = ennemy.name;
    //var ennemy = new perso;
    document.body.querySelector(".persohidden").className = "personnage";
    document.body.querySelector(".ennemyHealth").style.display = "block";
    document.body.querySelector(".playerHealth").style.display = "block";
    createMap();
    console.log("map created");
    initialPosition(0, 0);
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            map[x][y].addEventListener("click", function (e) {
                console.log("click on : x:" + x + " y:" + y);
                move(joueur, x, y);

            })

        }
    }
}

//

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



function walkright() {
    console.log("right");
    document.body.querySelector(".personnage").className = "personnage walkright";
    setTimeout(function () {
        document.body.querySelector(".personnage").className = "personnage endright";
    }, 2400);

}
function walkupright() {
    console.log("upright");
    document.body.querySelector(".personnage").className = "personnage walkupright";
    setTimeout(function () {
        document.body.querySelector(".personnage").className = "personnage endupright";
    }, 2400);

}


function walkleft() {
    console.log("left");
    document.body.querySelector(".personnage").className = "personnage walkleft";
    setTimeout(function () {
        document.body.querySelector(".personnage").className = "personnage endleft";
    }, 2400)
}

function walkupleft() {
    console.log("upleft");
    document.body.querySelector(".personnage").className = "personnage walkupleft";
    setTimeout(function () {
        document.body.querySelector(".personnage").className = "personnage endupleft";
    }, 2400);

}

function walkup() {
    document.body.querySelector(".personnage").className = "personnage walkup";
    setTimeout(function () {
        document.body.querySelector(".personnage").className = "personnage endup";
    }, 2400);
}

function walkdown() {
    document.body.querySelector(".personnage").className = "personnage walkdown";
    setTimeout(function () {
        document.body.querySelector(".personnage").className = "personnage enddown";
    }, 2400)
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
function walkdirection(xdir, ydir) {

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


function move(character, xpos, ypos) {
    document.body.querySelector(".personnage").style.left = map[xpos][ypos].getBoundingClientRect().left - 35 + "px";
    document.body.querySelector(".personnage").style.top = map[xpos][ypos].getBoundingClientRect().top - 45 + "px";
    //WALK ANIMATIONS
    if (xpos > joueur.x && ypos > joueur.y) {
        walkright();
    }
    else if (xpos < joueur.x && ypos > joueur.y) {
        walkup();
    }
    else if (xpos < joueur.x && ypos < joueur.y) {
        walkleft();
    }
    else if (xpos > joueur.x && ypos < joueur.y) {
        walkdown();
    }
    else if (xpos === joueur.x && ypos > joueur.y) {
        walkupright();
    }
    else if (xpos === joueur.x && ypos > joueur.y) {
        walkupright();
    }
    //WALK ANIMATIONS END
    joueur.position = map[xpos][ypos];
    joueur.x = xpos;
    joueur.y = ypos;
    character.mp = character.mp - 1;
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
        img.onload = function () {
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
function highlight(xplayer,yplayer){
    map[xpos+1][xpos-1].style.opacity = "0.5";
}