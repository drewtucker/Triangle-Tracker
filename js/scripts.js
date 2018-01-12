$(document).ready(function(){
  $("#triangleEntry").submit(function(event) {
    event.preventDefault();
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    if (side1 === side2 && side2 === side3) {
      alert("It's Equilateral!")
    }
    else if (side1 === side2 || side2 === side3 || side1 === side3) {
      alert("It's Isosceles!")
    }
    else if (side1 !== side2 || side3) {
      alert("It's Scalene!")
    }
    // else if (side1 + (side2 || side3) <= (side2 || side3) );
    //   alert("That's not a triangle you idiot!")

  });





});
