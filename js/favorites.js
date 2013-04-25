
function listFavorites(x) {
	for(var i = 0; i < x.length; i += 1 ){
	   document.writeln("My #" + (i + 1) + "favorite part of a sandwich is the " + x[i] + "."  );
	}; 
};


var sandwich = ["meat", "cheese", "lettuce", "tomatoes", "grilled eggplant", "seared panini"];


// document.write(triangleArea(triangle.sideA, triangle.sideB, triangle.sideC));

listFavorites(sandwich);