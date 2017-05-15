let perso = {
    name: "",
    items: [],
    money: 0,
    hp: 100,
    mp: 5,
}
//FORM
document.body.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    perso.name = document.body.querySelector("#name").value
    document.body.querySelector("#head").style.opacity = 0;
    setTimeout(function () {
        document.body.querySelector("header").remove();
    }, 1000);

    console.log("faded");
    console.log("Loading...")
    var iso = new Isomer(document.getElementById("art"));
    // var Path = Isomer.Path;
    // var Shape = Isomer.Shape;
    // var Vector = Isomer.Vector;
    // var Color = Isomer.Color;

    // var iso = new Isomer(document.getElementById("canvas"));

    // var red = new Color(160, 60, 50);
    // var blue = new Color(50, 60, 160);

    // iso.add(Shape.Prism(Point.ORIGIN, 3, 3, 1));
    // iso.add(Shape.Pyramid(Point(0, 2, 1)), red);
    // iso.add(Shape.Prism(Point(2, 0, 1)), blue);
    console.log("Loaded");
});
//FORM END


