let perso = {
    name: "",
    items: [],
    money: 0,
    hp: 100,
    mp: 5,
}
let mapSquare = {
    rotateX: "60deg",
    rotateY: "0deg",
    rotateZ: "-45deg",
    color: "blue",
    width: "200px",
    height: "200px",
    colors: ["#49b293", "#7df263", "#62f1b4", "#61cff0", "#608eef", "#9960ef"],
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
    //Load main
    setTimeout(function() {
        console.log("faded");
        console.log("Loading...")


        //CODE
        //END
        setMap();
        let tileClick = document.body.querySelectorAll(".mapBlock");
        for (let i = 0; i < tileClick.length; i++) {
            tileClick[i].addEventListener("click", function(e) {
                console.log("div" + [i] + "clicked");
            })
        };
        console.log("Loaded");
    }, 1000);

});
//FORM END



function mapInit(element, Xrotate, Yrotate, Zrotate, h, w, col) {
    let mapgen = document.createElement(element);
    mapgen.style.height = h;
    mapgen.style.width = w;
    mapgen.backgroundColor = col;
    mapgen.style.transform = "rotateX(" + Xrotate + ") rotateY(" + Yrotate + ") rotateZ(" + Zrotate + ")";
    document.body.querySelector(".map").appendChild(mapgen);
}
//Math.floor((Math.random() * 10) + 1);
function setMap() {
    for (let i = 0; i < 99; i++) {
        let div = document.createElement("div");
        div.style.height = "50px";
        div.style.width = "50px";
        div.style.backgroundColor = mapSquare.colors[Math.floor((Math.random() * mapSquare.colors.length) + 0)];
        div.style.border = "2px solid white";
        div.className = "mapBlock";
        div.id = "block" + i;
        document.body.querySelector(".map").appendChild(div);

    }
}