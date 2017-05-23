var tour = 0;
preloadImages(["img/player/Walk/walk_00000.png",
    "img/player/Walk/walk_00001.png",
    "img/player/Walk/walk_00002.png",
    "img/player/Walk/walk_00003.png",
    "img/player/Walk/walk_00004.png",
    "img/player/Walk/walk_00005.png",
    "img/player/Walk/walk_00006.png",
    "img/player/Walk/walk_00007.png",
    "img/player/Walk/walk_00008.png",
    "img/player/Walk/walk_00009.png",
    "img/player/Walk/walk_10000.png",
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
    "img/player/Walk/walk_20000.png",
    "img/player/Walk/walk_20001.png",
    "img/player/Walk/walk_20002.png",
    "img/player/Walk/walk_20003.png",
    "img/player/Walk/walk_20004.png",
    "img/player/Walk/walk_20005.png",
    "img/player/Walk/walk_20006.png",
    "img/player/Walk/walk_20007.png",
    "img/player/Walk/walk_20008.png",
    "img/player/Walk/walk_20009.png",
    "img/player/Walk/walk_30000.png",
    "img/player/Walk/walk_30001.png",
    "img/player/Walk/walk_30002.png",
    "img/player/Walk/walk_30003.png",
    "img/player/Walk/walk_30004.png",
    "img/player/Walk/walk_30005.png",
    "img/player/Walk/walk_30006.png",
    "img/player/Walk/walk_30007.png",
    "img/player/Walk/walk_30008.png",
    "img/player/Walk/walk_30009.png",
    "img/player/Walk/walk_40000.png",
    "img/player/Walk/walk_40001.png",
    "img/player/Walk/walk_40002.png",
    "img/player/Walk/walk_40003.png",
    "img/player/Walk/walk_40004.png",
    "img/player/Walk/walk_40005.png",
    "img/player/Walk/walk_40006.png",
    "img/player/Walk/walk_40007.png",
    "img/player/Walk/walk_40008.png",
    "img/player/Walk/walk_40009.png",
    "img/player/Walk/walk_60000.png",
    "img/player/Walk/walk_60001.png",
    "img/player/Walk/walk_60002.png",
    "img/player/Walk/walk_60003.png",
    "img/player/Walk/walk_60004.png",
    "img/player/Walk/walk_60005.png",
    "img/player/Walk/walk_60006.png",
    "img/player/Walk/walk_60007.png",
    "img/player/Walk/walk_60008.png",
    "img/player/Walk/walk_60009.png",
    "img/player/Walk/walk_70000.png",
    "img/player/Walk/walk_70001.png",
    "img/player/Walk/walk_70002.png",
    "img/player/Walk/walk_70003.png",
    "img/player/Walk/walk_70004.png",
    "img/player/Walk/walk_70005.png",
    "img/player/Walk/walk_70006.png",
    "img/player/Walk/walk_70007.png",
    "img/player/Walk/walk_70008.png",
    "img/player/Walk/walk_70009.png"
]);
var map = [];
var listcharacter = [];

var endgame = false;
var joueur = new perso;
var ennemy = new perso;
joueur.selector = ".personnage";
joueur.absoluteClass = "personnage";
ennemy.selector = ".persoennemy";
ennemy.absoluteClass = "persoennemy";
listcharacter[0] = joueur;
var exit = false;
exit = init();
console.log("initialized");

//LOAD GAME ON FORM SUMBIT
if (exit === false) {

    displayStats();
    document.body.querySelector(".nom").textContent = joueur.name;
    document.body.querySelector(".nomEnnemy").textContent = ennemy.name;
    // A METTRE DANS FONCTION SPAWN ENNEMY
    //document.body.querySelector(".nomEnnemy").textContent = ennemy.name;
    //var ennemy = new perso;
    document.body.querySelector(".personnage").className = "personnage";
    document.body.querySelector(".persoennemy").className = "persoennemy";
    document.body.querySelector(".ennemyHealth").style.display = "block";
    document.body.querySelector(".playerHealth").style.display = "block";
    createMap();
    var previousCase = [0, 0];
    var previousEnnemyCase = [0, 0];
    console.log("map created");
    console.log("----------------------------------------------------------------");
    //initialPosition(joueur, Math.floor((Math.random() * 9) + 0), Math.floor((Math.random() * 9) + 0)); //TO IMPLEMENT AT THE END
    initialPosition(joueur, 4, 4);
    initialPosition(ennemy, 5, 5);
    // PLAYER TURN ON TILE CLICK
    playerTurn();
}

//

function perso() {
    this.name = "";
    this.items = [];
    this.money = 0;
    this.hp = 100;
    this.mp = 40;
    this.ap = 1;
    this.position = [0][0];
    this.x = 0;
    this.y = 0;
    this.selector = "";
    this.absoluteClass = "";
    this.canmove = true;
    this.canattack = false;
}
function ennemyTurn() {
    let randomx = Math.floor((Math.random() * 9) + 0);
    let randomy = Math.floor((Math.random() * 9) + 0);
    if (randomx === joueur.x && randomy === joueur.y) {
        let randomx = Math.floor((Math.random() * 9) + 0);
        let randomy = Math.floor((Math.random() * 9) + 0);
        if (randomx === joueur.x && randomy === joueur.y) {
            let randomx = Math.floor((Math.random() * 9) + 0);
            let randomy = Math.floor((Math.random() * 9) + 0);
        }
    }
    move(ennemy, randomx, randomy);//TEST
    previousEnnemyCase = [randomx, randomy];
}
function playerTurn() {
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            map[x][y].addEventListener("click", function (e) {
                console.log("click on : x:" + x + " y:" + y);
                if (x === joueur.x && y === joueur.y) { }
                else if ((x - joueur.x) + (y - joueur.y) > 8) { console.log("more than 2pm"); }
                else {
                    move(joueur, x, y);
                    if (canattack(joueur, ennemy) === true) { console.log("You can attack the ennemy"); } //ATTACK
                    previousCase = [x, y];
                    setTimeout(function () {
                        ennemyTurn();
                        if (canattack(ennemy, joueur) === true) {
                            attack(joueur, ennemy);
                            console.log("Ennemy can attack you");
                        }
                    }, 2400)
                }

            })
        }
    }
}
function attack(character, target) {
        if (target.x > character.x && target.y > character.y) {
            attackright(character.absoluteClass);
        } else if (target.x < character.x && target.y > character.y) {
            attackup(character.absoluteClass);
        } else if (target.x < character.x && target.y < character.y) {
            attackleft(character.absoluteClass);
        } else if (target.x > character.x && target.y < character.y) {
            attackdown(character.absoluteClass);
        } else if (target.x === character.x && target.y > character.y) {
            attackupright(character.absoluteClass);
        } else if (target.x < character.x && target.y === character.y) {
            attackupleft(character.absoluteClass);
        } else if (target.x > character.x && target.y === character.y) {
            attackdownright(character.absoluteClass);
        } else if (target.x === character.x && target.y < character.y) {
            attackdownleft(character.absoluteClass);
        }
        console.log("attacked");
}

function submit() {
    document.body.querySelector("form").addEventListener("submit", function () {
        while (document.body.querySelector("#name").value === "") {
            document.body.querySelector("#name").id = "nameempty";
            wait(500);
            document.body.querySelector("#nameempty").id = "name";
        }
    });

}
function init() {
    joueur.name = document.body.querySelector("#name").value;
    joueur.name = "PLAYER";
    ennemy.name = "ENNEMY"
    document.body.querySelector("#head").style.opacity = 0;
    wait(1000);
    document.body.querySelector("header").remove();
    return false;
}
//CHECK IF CHARACTER CAN ATTCK OR NOT
function canattack(player, target) {
    if ((Math.abs(player.x - target.x) < 2 && player.y === target.y) || (Math.abs(player.y - target.y) < 2 && player.x === target.x)) {
        return true;
    }
    else if (((target.x === player.x - 1) || (target.x === player.x + 1)) && ((target.y === player.y - 1) || (target.y === player.y + 1))) {
        return true;
    }
    else {
        return false;
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

function move(character, xpos, ypos) {
    //CHECK IF ENOUGH MOVEMENT POINTS
    if (character.mp <= 0) {
        console.log("No more mp");
        character.canmove = false;
    }
    //else if (character.x === xpos && character.y === ypos){}
    else {
        character.mp -= 1;
        displayStats();
        map[previousCase[0]][previousCase[1]].style.border = "2px solid white";
        document.body.querySelector(character.selector).style.left = map[xpos][ypos].getBoundingClientRect().left - 35 + "px";
        document.body.querySelector(character.selector).style.top = map[xpos][ypos].getBoundingClientRect().top - 45 + "px";
        //WALK ANIMATIONS
        if (xpos > character.x && ypos > character.y) {
            walkright(character.absoluteClass);
        } else if (xpos < character.x && ypos > character.y) {
            walkup(character.absoluteClass);
        } else if (xpos < character.x && ypos < character.y) {
            walkleft(character.absoluteClass);
        } else if (xpos > character.x && ypos < character.y) {
            walkdown(character.absoluteClass);
        } else if (xpos === character.x && ypos > character.y) {
            walkupright(character.absoluteClass);
        } else if (xpos < character.x && ypos === character.y) {
            walkupleft(character.absoluteClass);
        } else if (xpos > character.x && ypos === character.y) {
            walkdownright(character.absoluteClass);
        } else if (xpos === character.x && ypos < character.y) {
            walkdownleft(character.absoluteClass);
        }
        //WALK ANIMATIONS END
        if (character === joueur) { map[xpos][ypos].style.border = "2px solid blue"; }
        character.position = map[xpos][ypos];
        character.x = xpos;
        character.y = ypos;

        // console.log(character.position);
        character.canmove = true;
    }
}

function displayStats() {
    document.body.querySelector("#pm").textContent = "MP : " + joueur.mp;
    document.body.querySelector("#health").textContent = "Health : " + joueur.hp;
    document.body.querySelector("#ennemypm").textContent = "MP : " + ennemy.mp;
    document.body.querySelector("#ennemyhealth").textContent = "Health : " + ennemy.hp;
}
function initialPosition(target, xx, yy) {
    target.x = xx;
    target.y = yy;
    document.body.querySelector(target.selector).style.left = map[xx][yy].getBoundingClientRect().left - 35 + "px";
    document.body.querySelector(target.selector).style.top = map[xx][yy].getBoundingClientRect().top - 45 + "px";
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


/*_______________________________________________________ANIMATIONS_______________________________________________________________
  --------------------------------------------------------------------------------------------------------------------------------*/


// WALKING ANIMATIONS
function highlight(xplayer, yplayer) {
    map[previousCase[0] + 1][previousCase[1] - 1].style.opacity = "1";
    map[xplayer + 1][yplayer - 1].style.opacity = "0.5";
}

function walkright(select) {
    document.body.querySelector("." + select).className = select + " walkright";
    setTimeout(function () {
        document.body.querySelector("." + select).className = select + " endright";
    }, 2000);

}

function walkupright(select) {
    document.body.querySelector("." + select).className = select + " walkupright";
    setTimeout(function () {
        document.body.querySelector("." + select).className = select + " endupright";
    }, 2000);

}


function walkleft(select) {
    document.body.querySelector("." + select).className = select + " walkleft";
    setTimeout(function () {
        document.body.querySelector("." + select).className = select + " endleft";
    }, 2000)
}

function walkupleft(select) {
    document.body.querySelector("." + select).className = select + " walkupleft";
    setTimeout(function () {
        document.body.querySelector("." + select).className = select + " endupleft";
    }, 2000);

}

function walkup(select) {
    document.body.querySelector("." + select).className = select + " walkup";
    setTimeout(function () {
        document.body.querySelector("." + select).className = select + " endup";
    }, 2000);
}

function walkdown(select) {
    document.body.querySelector("." + select).className = select + " walkdown";
    setTimeout(function () {
        document.body.querySelector("." + select).className = select + " enddown";
    }, 2400)
}

function walkdownright(select) {
    document.body.querySelector("." + select).className = select + " walkdownright";
    setTimeout(function () {
        document.body.querySelector("." + select).className = select + " enddownright";
    }, 2400)
}

function walkdownleft(select) {
    document.body.querySelector("." + select).className = select + " walkdownleft";
    setTimeout(function () {
        document.body.querySelector("." + select).className = select + " enddownleft";
    }, 2400)
}

//ATTACK ANIMATIONS
function attackright(select) {
    document.body.querySelector("." + select).className = select + " attackright";
    setTimeout(function () {
        document.body.querySelector("." + select).className = select + " endright";
    }, 2000);

}

function attackupright(select) {
    document.body.querySelector("." + select).className = select + " attackupright";
    setTimeout(function () {
        document.body.querySelector("." + select).className = select + " endupright";
    }, 2000);

}


function attackleft(select) {
    document.body.querySelector("." + select).className = select + " attackleft";
    setTimeout(function () {
        document.body.querySelector("." + select).className = select + " endleft";
    }, 2000)
}

function attackupleft(select) {
    document.body.querySelector("." + select).className = select + " attackupleft";
    setTimeout(function () {
        document.body.querySelector("." + select).className = select + " endupleft";
    }, 2000);

}

function attackup(select) {
    document.body.querySelector("." + select).className = select + " attackup";
    setTimeout(function () {
        document.body.querySelector("." + select).className = select + " endup";
    }, 2000);
}

function attackdown(select) {
    document.body.querySelector("." + select).className = select + " attackdown";
    setTimeout(function () {
        document.body.querySelector("." + select).className = select + " enddown";
    }, 2400)
}

function attackdownright(select) {
    document.body.querySelector("." + select).className = select + " attackright";
    setTimeout(function () {
        document.body.querySelector("." + select).className = select + " enddownright";
    }, 2400)
}

function attackdownleft(select) {
    document.body.querySelector("." + select).className = select + " attackdownleft";
    setTimeout(function () {
        document.body.querySelector("." + select).className = select + " enddownleft";
    }, 2400)
}