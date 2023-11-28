
function tendencyMovie() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWZmNWZlNjE5YTJiNmVhZThhM2VjNmNhZjkxMDk3NSIsInN1YiI6IjY0ZjM3Y2M3NzdkMjNiMDBhZWMwMjIyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yvmwqwRqCLuwWcBwiWIG0gGhohGRPtGygUPL0wVrUrU'
        }
    };

    $.ajax(settings).done(function (response) {
        for (const movie of response.results) {
            $('#movie-slider').slick('slickAdd', `<div class="img-prev">
<img src="https://www.themoviedb.org/t/p/original/${movie.backdrop_path}" alt="" class="image-prev">
<div class="img-prev-info"> 
  <h1>${movie.name || movie.original_title}</h1>
  <h4>${movie.release_date || movie.first_air_date}</h4>
  <h4>${movie.media_type}</h4>
  <h4>Rating ${movie.vote_average}</h4>
</div>
</div>`); 
        }
    });
}

tendencyMovie();


function tendencySerie() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://api.themoviedb.org/3/trending/tv/day?language=en-US',
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWZmNWZlNjE5YTJiNmVhZThhM2VjNmNhZjkxMDk3NSIsInN1YiI6IjY0ZjM3Y2M3NzdkMjNiMDBhZWMwMjIyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yvmwqwRqCLuwWcBwiWIG0gGhohGRPtGygUPL0wVrUrU'
        }
    };

    $.ajax(settings).done(function (response) {
        for (const movie of response.results) {
            $('#tv-slider').slick('slickAdd', `<div class="img-prev">
    <img src="https://www.themoviedb.org/t/p/original/${movie.backdrop_path}" alt="" class="image-prev">
    <div class="img-prev-info"> 
      <h1>${movie.name || movie.original_title}</h1>
      <h4>${movie.release_date || movie.first_air_date}</h4>
      <h4>${movie.media_type}</h4>
      <h4>Rating ${movie.vote_average}</h4>
    </div>
    </div>`);
        }
    });
}

tendencySerie()



function tendencyPeople() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://api.themoviedb.org/3/trending/person/day?language=en-US',
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWZmNWZlNjE5YTJiNmVhZThhM2VjNmNhZjkxMDk3NSIsInN1YiI6IjY0ZjM3Y2M3NzdkMjNiMDBhZWMwMjIyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yvmwqwRqCLuwWcBwiWIG0gGhohGRPtGygUPL0wVrUrU'
        }
    };

    $.ajax(settings).done(function (response) {
        for (const movie of response.results) {
            $('#people-slider').slick('slickAdd', `<div class="img-prev">
    <img src="https://www.themoviedb.org/t/p/original/${movie.profile_path}" alt="">
    
    </div>`);
        }
    });
}

tendencyPeople();

function upadate(e) {
    const inputSearch = document.getElementById('search-input').value;
    console.log(e)
    if (e.key === 'Enter') {
        if (inputSearch === '') {
            const listMovie = document.getElementById('movie-list-search');
            listMovie.remove();
        }else{
            searchMovie();
        }
    }
    
}

function AsearchMovie() {
    const listMovie = document.getElementById('movie-list-search');
    const inputSearch = document.getElementById('search-input').value;
    const option = document.createElement('option');
    option.value = `${inputSearch}`
    datalist.append(option)
    if (inputSearch !== '') {
        // console.log('isicr')
        const settings = {
            async: true,
            crossDomain: true,
            url: `https://api.themoviedb.org/3/search/multi?query=${inputSearch}&include_adult=false&language=en-US&page=1`,
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWZmNWZlNjE5YTJiNmVhZThhM2VjNmNhZjkxMDk3NSIsInN1YiI6IjY0ZjM3Y2M3NzdkMjNiMDBhZWMwMjIyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yvmwqwRqCLuwWcBwiWIG0gGhohGRPtGygUPL0wVrUrU'
            }
        };

        $.ajax(settings).done(function (response) {
            for (const movie of response.results) {
                const li = document.createElement('li');
                li.className = 'movie-prev';
                li.innerHTML =
                    `
                    <div class="image">
                    <img src="https://www.themoviedb.org/t/p/original/${movie.backdrop_path}" alt="">
                    </div>
                    <div class="info">
                      <h1>${movie.name || movie.original_title}</h1>
                      <h4>${movie.release_date || movie.first_air_date}</h4>
                      <h4>${movie.media_type}</h4>
                      <h4>Rating ${movie.vote_average}</h4>
                    </div>
                    <div class="description">
                      <p>${movie.overview}</p>                    
                    </div>
              
                `;
                listMovie.append(li);

            }
        });
    }
}



document.addEventListener('keydown', upadate);



class Movie {
    constructor(title, imageURL, releaseDate, description, rating) {
        this.title = title;
        this.imageURL = imageURL;
        this.releaseDate = releaseDate;
        this.description = description;
        this.rating = rating;

    }

}


class FavList {
    movies = [];

    constructor(movie){
        this.movie = movie;
    }


    render() {
 
        this.movies.push(this.movie)
        $('#vertical-slider-drama').slick('slickAdd', `<div class="img-prev">
        <img src="https://www.themoviedb.org/t/p/original/${this.movie.imageURL}" alt="">
    </div>`);
    }
}

class MovieItem {
    constructor(movie) {
        this.movie = movie;
    }

    addToList() {
        const favlist = new FavList(this.movie);
        favlist.render()
        
    }

    render() {
        const li = document.createElement('li');
        li.className = 'movie-prev';
        li.innerHTML =
            `
                    <div class="a">
                        <div class="image">
                            <img src="https://www.themoviedb.org/t/p/original/${this.movie.imageURL}" alt="">
                        </div>
                        <div class="info">
                            <h1>${this.movie.title}</h1>
                            <h4>${this.movie.releaseDate}</h4>
                            <h4>Rating ${this.movie.rating}</h4>
                          </div>
                        <div class="description">
                            <p>${this.movie.description}</p>                        
                        </div>
                    </div>
                    <div class="b">
                        <button>add</button>
                    </div>
              
                `;
        const addMovieButton = li.querySelector('button');
        addMovieButton.addEventListener('click', this.addToList.bind(this))
        return li;
    }


}

class MovieList {
    constructor(allMovie) {
        this.allMovie = allMovie;
    }

    render() {
        let idx = 0;
        const searchSection = document.getElementById('list-movie-container');
        const listMovie = document.createElement('ul');
        listMovie.id = "movie-list-search";
        listMovie.className = 'search-list';
        for (const movie of this.allMovie) {
            const movieItem = new MovieItem(movie);
            const movieEl = movieItem.render();
            listMovie.append(movieEl);
            idx++;
        }
        searchSection.append(listMovie);
    }
}



function searchMovie() {
    const inputSearch = document.getElementById('search-input').value;
    const option = document.createElement('option');
    option.value = `${inputSearch}`
    datalist.append(option)
    const settings = {
        async: true,
        crossDomain: true,
        url: `https://api.themoviedb.org/3/search/multi?query=${inputSearch}&include_adult=false&language=en-US&page=1`,
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWZmNWZlNjE5YTJiNmVhZThhM2VjNmNhZjkxMDk3NSIsInN1YiI6IjY0ZjM3Y2M3NzdkMjNiMDBhZWMwMjIyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yvmwqwRqCLuwWcBwiWIG0gGhohGRPtGygUPL0wVrUrU'
        }
    };

    $.ajax(settings).done(function (response) {
        // const movies = response.results;
        // console.log('moviesList',movies)
        let movies = []
        for (const movie of response.results) {
            movies.push(new Movie(movie.title || movie.name, movie.backdrop_path, movie.release_date, movie.overview, movie.vote_average))
        }
        const movieList = new MovieList(movies);
        movieList.render()
    })

        ;
}