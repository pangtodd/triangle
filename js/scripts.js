$(document).ready(function(){
  $("form#dimensions").submit(function(event) {
    event.preventDefault();
    $("#quiz").hide();

    const sideA = parseFloat($("input#sideOne").val());
    console.log(sideA)
    const sideB = parseFloat($("input#sideTwo").val());
    const sideC = parseFloat($("input#sideThree").val());

    if (sideA+sideB<=sideC || sideB+sideC <=sideA || sideC+sideA<=sideB){
      $("#nope").show();
    } else if (sideA === sideB && sideB === sideC) {
      $("#Equilateral").show();
    } else if (sideA === sideB || sideB === sideC) {
      $("#Isosceles").show();
    } else {
      $("#Scalene").show();
    }
  });
});