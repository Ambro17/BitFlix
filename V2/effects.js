$(document).ready(function(){

	var api_key = "7f76943e1557e33276e0f595c2128f68";
	var baseimg = "http://image.tmdb.org/t/p/w92";
	
		$.getJSON("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&vote_count.gte=3000"+"&api_key="+api_key+"&callback=?",
				function(json) {
					// if json.total_results >0;
					movies = json.results.slice(0,20); // gets 20 movies
					console.log(movies);
					movie = json.results[0];
					// for i,tile in enumerate(tiles):
					// tile.h1 = movie





					for(i in movies){
						var c1 = $("<div/>",{class:"flip-container"})
						var c2 = $("<div/>",{class:"flipper"});

						var c3 = $("<div/>",{class:"front"})
						var c4 = $("<div/>",{class:"back", text:movies[i].title})

						sufijoimg = movies[i].poster_path;
						imgfullpath = baseimg+sufijoimg;
						c3.css("background-image", "url("+imgfullpath+")");

						c4.appendTo(c2);
						c3.appendTo(c2);
						c2.appendTo(c1);
						c1.appendTo(".row");
/*
			<div class="flip-container">
				<div class="flipper">
					<div class="front">
					<!--FADE div -->
					</div>
					<div class="back">
						<h3>Titulo</h3>
						<p>Rating</p>
			    	</div>	
				</div>		
			</div>
*/

					}



					var tiles = document.getElementsByClassName("tile");
					console.log(tiles);
					var i = 0;	
					for (i=0; i< 4; i++){
						$(".row .back").eq(i).find("h3").text(movies[i].title);
						$(".row .back").eq(i).find("p").text(movies[i].vote_average);
						sufijoimg = movies[i].poster_path;
						imgfullpath = baseimg+sufijoimg;
						$(".row .front").eq(i).css("background-image", "url("+imgfullpath+")");
					}
					//	tile.innerHTML = "something new";
					//}

				});
});