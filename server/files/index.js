window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);

      const genreColors = {  // using specific colors for genres
                            "Action": "#b83434",
                            "Adventure": "#e8ac4d",
                            "Sci-Fi": "#629390",
                            "Drama": "#3953b8",
                            "Mystery": "#2e3b32",
                            "Comedy": "#6a48a1",
                        };

      function createListSection(title, items) { //creates the name lists without repeating code
                            const nameContainer = document.createElement("section");

                            const listHeading = document.createElement("h2");
                            listHeading.textContent = title;
                            nameContainer.appendChild(listHeading);

                            const namesElement = document.createElement("span");
                            namesElement.textContent = items.join(", ");
                            nameContainer.appendChild(namesElement);

                            return nameContainer;                           
                        }

      for (const movie of movies) {
        
           const movieArticle = document.createElement("article");

           movieArticle.id = movie.imdbID;

                        // Adding the poster
                        const img = document.createElement("img");
                        img.src = movie.Poster;
                        movieArticle.appendChild(img);
                        img.alt = "No poster available";

                        //wraps all the text into a container sitting next to the image
                        const contentDiv = document.createElement("div");
                        contentDiv.classList.add("movie-content");

                        const titleElement = document.createElement("h1");
                        titleElement.textContent = movie.Title;
                        contentDiv.appendChild(titleElement);
                        
                                      
                        //Genres:                                              
                        const genreContainer = document.createElement("div");
                        genreContainer.classList.add("genre-list");

                        for (const genre of movie.Genres) {
                            const tag = document.createElement ("span");
                                tag.textContent = genre;
                                tag.classList.add("genre-tag");
                                
                                const color = genreColors[genre] || "#555555"; // setting grey as a fallback color
                                tag.style.backgroundColor = color;

                                genreContainer.appendChild(tag);
                        }


                        //Create Container for MetaData
                        const metaBar = document.createElement("div");
                        metaBar.classList.add("movie-data");
                        
                        //Released:
                        const releaseElement = document.createElement("time"); //using semantic <time> tag for SEO and screen readers
                        releaseElement.setAttribute("datetime", movie.Released);
                        releaseElement.innerHTML = "<strong>Released: </strong>" + movie.Released;
                        metaBar.appendChild(releaseElement);


                        //Runtime:
                        const runtimeElement = document.createElement("data"); //using semantic <data> tag for machine-readable numbers
                        runtimeElement.value = movie.Runtime;
                        runtimeElement.innerHTML = "<strong>Duration: </strong>" + movie.Runtime + " min";
                        metaBar.appendChild(runtimeElement);

                        metaBar.appendChild(genreContainer);
                        contentDiv.appendChild(metaBar);
                        

                        //Plot:
                        const plotElement = document.createElement("p"); //using paragraph for plot text
                        plotElement.textContent = movie.Plot;
                        contentDiv.appendChild(plotElement);


                        //placing the name lists using the helper function:                            
                        contentDiv.appendChild(createListSection("Directors", movie.Directors));
                        contentDiv.appendChild(createListSection("Writers", movie.Writers));
                        contentDiv.appendChild(createListSection("Actors", movie.Actors));

                        //Ratings:
                        const ratingContainer = document.createElement("div");
                        ratingContainer.classList.add("movie-ratings");

                        const metaScoreSpan = document.createElement("span");
                        metaScoreSpan.innerHTML = "<strong>Metascore: </strong> " + movie.Metascore;
                        ratingContainer.appendChild(metaScoreSpan);

                        const imdbRatingSpan = document.createElement("span");
                        imdbRatingSpan.innerHTML = "<strong>IMDb: </strong> " + movie.imdbRating + "/10";
                        ratingContainer.appendChild(imdbRatingSpan);

                        contentDiv.appendChild(ratingContainer); //placing the ratings


                        //Edit-Button:

                        const editButton = document.createElement("button");
                        editButton.textContent = "Edit";
                        editButton.classList.add("edit-btn"); 

                        editButton.onclick = function() {
                          window.location.href = "edit.html?imdbID=" + movie.imdbID;
                        };

                        contentDiv.appendChild (editButton);
                        
                          // putting the text block into the article
                          movieArticle.appendChild(contentDiv);
                    
                          //putting the whole article onto the page
                          bodyElement.appendChild(movieArticle);

                    }
                
    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
