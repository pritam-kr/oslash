import './App.css';
import Card from './components/movieCard/Card';
import Nav from './components/nav/Nav';
import { movies } from './data/movies';


function App() {
  return (
    <div className="App">
      <Nav />
      <main className='p-6'>
        <div className='movie-card-wrapper flex flex-wrap gap-2 justify-center'>
          {
            movies.allMovies.map((eachMovies) => <Card eachMovies={eachMovies}/>)
          }
        </div>
      </main>
    </div>
  );
}

export default App;
