import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieApiServiceService) {
   }
 

  openDialog(): void {

    const container = document.getElementById('movies');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    button.setAttribute('data-target', '#deleteEmployeeModal');
    container?.appendChild(button);
    button.click();
   

  }

  bannerResult: any = [];
  trendingMovieResult: any = [];
  moviesResult: any = [];

  movieCategory!: string;
  movieCategoryText!: string;

  ngOnInit(): void {
    this.bannerData();
    this.fetchMovie('trending');
  }


  // bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }


  // action 
  fetchMovie(event: any) {
    console.log(typeof(event));
    let category : string;
    let id! : number;
    
    if (typeof(event) == 'string') {
      category = 'trending';
    }else{
      category = event.target.value
    }
    
    
    switch (category) {
      case 'action':
        id = 28;
        this.movieCategory = 'Action';
        this.movieCategoryText = 'Experience the adrenaline-pumping excitement of action-packed films that will keep you on the edge of your seat. Get ready for intense battles, thrilling stunts, and heart-stopping moments of heroism.';
        break;
      case 'adventure':
        id = 12;
        this.movieCategory = 'Adventure';
        this.movieCategoryText = 'Embark on epic adventures filled with breathtaking landscapes, daring quests, and unforgettable journeys. Explore uncharted territories and witness the triumph of the human spirit against incredible odds.';
        break;
      case 'animation':
        id = 16;
        this.movieCategory = 'Animation';
        this.movieCategoryText = 'Immerse yourself in the magical world of animation, where creativity knows no bounds. Enjoy enchanting stories, vibrant characters, and visually stunning animation that captivates audiences of all ages.';
        break;
      case 'comedy':
        id = 35;
        this.movieCategory = 'Comedy';
        this.movieCategoryText = 'Indulge in laughter and joy with our collection of comedy films. From hilarious comedians to witty scripts, these movies promise to tickle your funny bone and lift your spirits with every scene.';
        break;
      case 'documentary':
        id = 99;
        this.movieCategory = 'Documentary';
        this.movieCategoryText = 'Gain profound insights into real-life events, diverse cultures, and impactful stories through our documentary films. Explore the depths of human experiences and broaden your understanding of the world.';
        break;
      case 'science':
        id = 878;
        this.movieCategory = 'Science';
        this.movieCategoryText = 'Embark on a journey of discovery with our science-themed films. Dive into the wonders of the universe, unravel the mysteries of nature, and witness groundbreaking scientific advancements that shape our understanding of the cosmos.';
        break;
      case 'thriller':
        id = 53;
        this.movieCategory = 'Thriller';
        this.movieCategoryText = 'Feel the suspense and excitement in our collection of thrilling films. Brace yourself for plot twists, unexpected turns, and gripping narratives that will keep you guessing until the very end.';
        break;
      case 'trending':
        this.movieCategory = 'Trending';
        this.movieCategoryText = 'Explore the latest and hottest films that are currently trending in the world of cinema. Stay ahead of the curve and discover must-watch movies that everyone is talking about.';
        this.service.trendingMovieApiData().subscribe((result) => {
          this.moviesResult = result.results;
        });
        break;
      default:
        break;
    }
    
    this.service.fetchMovies(id).subscribe((result) => {
      this.moviesResult = result.results;
    });
  }




  // // adventure 
  // adventureMovie() {
  //   this.service.fetchAdventureMovies().subscribe((result) => {
  //     this.adventureMovieResult = result.results;
  //   });
  // }


  // // animation 
  // animationMovie() {
  //   this.service.fetchAnimationMovies().subscribe((result) => {
  //     this.animationMovieResult = result.results;
  //   });
  // }


  // // comedy 
  // comedyMovie() {
  //   this.service.fetchComedyMovies().subscribe((result) => {
  //     this.comedyMovieResult = result.results;
  //   });
  // }

  // // documentary 
  // documentaryMovie() {
  //   this.service.fetchDocumentaryMovies().subscribe((result) => {
  //     this.documentaryMovieResult = result.results;
  //   });
  // }


  // // science-fiction 
  // sciencefictionMovie() {
  //   this.service.fetchScienceFictionMovies().subscribe((result) => {
  //     this.sciencefictionMovieResult = result.results;
  //   });
  // }

  // // thriller
  // thrillerMovie() {
  //   this.service.fetchThrillerMovies().subscribe((result) => {
  //     this.thrillerMovieResult = result.results;
  //   });
  // }

  

}