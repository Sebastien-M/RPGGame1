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

let perso = {
    name: "",
    items: [],
    money: 0,
    hp: 100,
    mp: 2,
    position: [0][0],
    x: 0,
    y: 0
}
let mapSquare = {
    colors: ["#49b293", "#7df263", "#62f1b4", "#61cff0", "#608eef", "#9960ef"],
    texture: ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"],
};
let endposition = {
    up: "img/player/Walk/walk_30000.png",
    down: "img/player/Walk/walk_70000.png",
    left: "img/player/Walk/walk_50000.png",
    right: "img/player/Walk/walk_10000.png"
}
let animations = {
    walkright: function walkRight() {
        console.log("right");
        document.body.querySelector(".personnage").className = "personnage walkright";
        setTimeout(function() {
            document.body.querySelector(".personnage").className = "personnage endright";
        }, 2400)
    },
    walkleft: function walkleft() {
        console.log("left");
        document.body.querySelector(".personnage").className = "personnage walkleft";
        setTimeout(function() {
            document.body.querySelector(".personnage").className = "personnage endleft";
        }, 2400)
    },
    walkup: function walkup() {
        document.body.querySelector(".personnage").className = "personnage walkup";
        setTimeout(function() {
            document.body.querySelector(".personnage").className = "personnage endup";
        }, 2400)
    },
    walkdown: function walkdown() {
        document.body.querySelector(".personnage").className = "personnage walkdown";
        setTimeout(function() {
            document.body.querySelector(".personnage").className = "personnage enddown";
        }, 2400)
    }
};
let map = [];

//FORM
document.body.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    if (document.body.querySelector("#name").value === "") {
        document.body.querySelector("#name").id = "nameempty";
        setTimeout(function() { document.body.querySelector("#nameempty").id = "name"; }, 500)
        return;
    }
    perso.name = document.body.querySelector("#name").value
    document.body.querySelector("#head").style.opacity = 0;
    setTimeout(function() {
        document.body.querySelector("header").remove();
    }, 1000);
    //Load main on submit
    setTimeout(function() {
        document.body.querySelector(".nom").textContent = perso.name;
        document.body.querySelector(".persohidden").className = "personnage";
        createMap();
        document.body.querySelector(".personnage").style.left = map[0][0].getBoundingClientRect().left - 35 + "px";
        console.log('left changed');
        document.body.querySelector(".personnage").style.top = map[0][0].getBoundingClientRect().top - 45 + "px";
        let tileClick = document.body.querySelectorAll(".mapBlock");
        // for (let i = 0; i < tileClick.length; i++) {
        //     tileClick[i].addEventListener("click", function (e) {
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                map[x][y].addEventListener("click", function(e) {
                    console.log("x:" + x + " y:" + y);
                    //MOVEMENT
                    if (perso.y > y) {
                        animations.walkleft();
                    }
                    if (perso.y < y) {
                        animations.walkright();
                    }
                    move(map[x][y]);
                    //BLOCK AROUND
                    map[x + 1][y + 1].style.opacity = "0.5";
                    map[x - 1][y - 1].style.opacity = "0.5";
                    map[x][y + 1].style.opacity = "0.5";
                    map[x + 1][y].style.opacity = "0.5";
                    map[x + 1][y - 1].style.opacity = "0.5";
                    map[x - 1][y + 1].style.opacity = "0.5";
                    map[x - 1][y].style.opacity = "0.5";
                    map[x][y - 1].style.opacity = "0.5";
                    setTimeout(function() {
                        map[x + 1][y + 1].style.opacity = "1";
                        map[x - 1][y - 1].style.opacity = "1";
                        map[x][y + 1].style.opacity = "1";
                        map[x + 1][y].style.opacity = "1";
                        map[x + 1][y - 1].style.opacity = "1";
                        map[x - 1][y + 1].style.opacity = "1";
                        map[x - 1][y].style.opacity = "1";
                        map[x][y - 1].style.opacity = "1";
                    }, 5000)
                    perso.x = x;
                    perso.y = y;
                })

            }
        }
        console.log("-------------------------------------------------------------------");


        // TEST
        //DEPALACEMENT



        // let personnageInit = document.body.querySelector(".personnage");
        // let targetInit = document.body.querySelector("#div");
        // let persoX = document.body.querySelector(".personnage").getBoundingClientRect().x;
        // let persoY = document.body.querySelector(".personnage").getBoundingClientRect().y;
        // let targetX = tile.getBoundingClientRect().x;
        // let targetY = tile.getBoundingClientRect().y;
        // let positionXdebut = 50;
        // let positionYdebut = 50;
        // personnageInit.style.x = positionXdebut + "px";
        // if (persoX != targetX) { //Si pas sur meme X
        //     if (persoX < targetX) {
        //         animations.walkright()
        //     }
        //     else if (persoX > targetX) {
        //         animations.walkleft()
        //     }
        //     personnageInit.style.left = (tile.getBoundingClientRect().left + 10) + "px";
        // }
        // if (persoY != targetY) { //Si pas sur meme Y
        //     personnageInit.style.top = (tile.getBoundingClientRect().top - 60) + "px";
        //     console.log("changed");
        // }




        //DEPALACEMENT FIN
        // TEST
        //     })
        // };
        // console.log("Loaded");
    }, 1000);

});
//FORM END

function setTexture() {
    let bloc = document.querySelectorAll(".mapBlock");
    for (let i = 0; i < bloc.length; i++) {
        let randomTile = mapSquare.texture[Math.floor((Math.random() * mapSquare.texture.length) + 0)];
        let imgBlock = document.createElement("img");
        imgBlock.src = randomTile;
        imgBlock.className = "imgTexture";
        bloc[i].appendChild(imgBlock);
    }

}

function distance(tilenum) {
    let line = Math.floor(tilenum / 10);
    let column = (tilenum - 10 * line);
    return [line, column];
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
    perso.position = caseArray;
    // console.log(perso.position);
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