let perso = {
    name: "",
    items: [],
    money: 0,
    hp: 100,
    mp: 5,
}
let walkRight = ["img/player/Walk/walk_10000.png",
    "img/player/Walk/walk_10001.png",
    "img/player/Walk/walk_10002.png",
    "img/player/Walk/walk_10003.png",
    "img/player/Walk/walk_10004.png",
    "img/player/Walk/walk_10005.png",
    "img/player/Walk/walk_10006.png",
    "img/player/Walk/walk_10007.png",
    "img/player/Walk/walk_10008.png",
    "img/player/Walk/walk_10009.png"
];
let mapSquare = {
    rotateX: "60deg",
    rotateY: "0deg",
    rotateZ: "-45deg",
    color: "blue",
    width: "200px",
    height: "200px",
    colors: ["#49b293", "#7df263", "#62f1b4", "#61cff0", "#608eef", "#9960ef"],
    texture: ["img/01.jpg",
        "img/02.jpg",
        "img/03.jpg",
        "img/04.jpg",
        "img/05.jpg"
    ],
    colorpicker: function() {
        return colors[Math.floor((Math.random() * colors.length) + 0)];
    }
};
//FORM
document.body.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    perso.name = document.body.querySelector("#name").value
    document.body.querySelector("#head").style.opacity = 0;
    setTimeout(function() {
        document.body.querySelector("header").remove();
    }, 1000);
    //Load main on submit
    setTimeout(function() {
        document.body.querySelector(".persohidden").className = "personnage";
        document.body.querySelector("#perso").src = walkRight[0];
        setMap();
        document.body.querySelector(".personnage").style.left = "250px";
        document.body.querySelector(".personnage").style.top = "200px";
        let tileClick = document.body.querySelectorAll(".mapBlock");
        for (let i = 0; i < tileClick.length; i++) {
            tileClick[i].addEventListener("click", function(e) {
                walk();
                console.log("div : " + (i + 1) + " clicked");
                console.log("line : " + distance(i)[0] + " column : " + distance(i)[1]);
                let tile = document.body.querySelector("#div" + i);
                console.log(tile.getBoundingClientRect());
                console.log("-------------------------------------------------------------------");
                // TEST
                let personnageInit = document.body.querySelector(".personnage");
                let targetInit = document.body.querySelector("#div" + i);
                let persoX = document.body.querySelector(".personnage").getBoundingClientRect().x;
                let persoY = document.body.querySelector(".personnage").getBoundingClientRect().y;
                let targetX = tile.getBoundingClientRect().x;
                let targetY = tile.getBoundingClientRect().y;

                let positionXdebut = 50;
                let positionYdebut = 50;
                personnageInit.style.x = positionXdebut + "px";
                if (persoX != targetX) { //Si pas sur meme X
                    personnageInit.style.left = (tile.getBoundingClientRect().left + 10) + "px";
                }
                if (persoY != targetY) { //Si pas sur meme Y
                    personnageInit.style.top = (tile.getBoundingClientRect().top - 60) + "px";
                    console.log("changed");
                }
                // TEST
            })
        };
        console.log("Loaded");
    }, 1000);

});
//FORM END


//Math.floor((Math.random() * 10) + 1);
function setMap() {
    for (let i = 0; i < 100; i++) {
        let div = document.createElement("div");
        div.style.height = "50px";
        div.style.width = "50px";
        // div.style.backgroundColor = mapSquare.colors[Math.floor((Math.random() * mapSquare.colors.length) + 0)];

        // let randomTile = mapSquare.texture[Math.floor((Math.random() * mapSquare.texture.length) + 0)];
        // div.style.backgroundImage = "url('" + randomTile + "')";
        // div.style.border = "2px solid white";
        div.className = "mapBlock";
        div.id = "div" + (i + 1);
        document.body.querySelector(".map").appendChild(div);
        setTexture(i + 1);
    }
}

function setTexture(tile) {
    let randomTile = mapSquare.texture[Math.floor((Math.random() * mapSquare.texture.length) + 0)];
    let imgBlock = document.createElement("img");
    imgBlock.src = randomTile;
    imgBlock.className = "imgTexture";
    document.body.querySelector("#div" + tile).appendChild(imgBlock);
}

function distance(tilenum) {
    let line = Math.floor(tilenum / 10);
    let column = (tilenum - 10 * line);
    return [line, column];
}

function walk() {
    for (let b = 0; b < walkRight.length; b++) {
        setInterval(function() {
            document.body.querySelector("#perso").src = walkRight[b];
        }, 300)
    }
}