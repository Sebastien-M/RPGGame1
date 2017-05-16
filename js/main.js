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
    height: "200px"

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
        for (let i = 0; i < 10; i++) {
            mapInit("div", mapSquare.rotateX, mapSquare.rotateY, mapSquare.rotateZ, "200px", "200px", "#49b293");

        }

        //END
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