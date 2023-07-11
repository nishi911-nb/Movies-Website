import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './App.css'
import Homepage from '../components/Homepage'
import Genre from '../components/Genre'
import MoviesDetails from '../components/MovieDetails'
import usePopular from "../src/hooks/usePopular";
import useTopRated from "../src/hooks/useTopRated";
import useUpcoming from "../src/hooks/useUpcoming";
import NotFound from '../components/NotFound'

function App() {

  const {popular, error, loading} = usePopular();
  const {topRated} = useTopRated();
  const {upcoming} = useUpcoming();

  const allMovies = [...popular, ...topRated, ...upcoming];
  const jsonObject = allMovies.map(JSON.stringify);
  const uniqueSet = new Set(jsonObject);
  const uniqueMovies = Array.from(uniqueSet).map(JSON.parse);

  return (
    <div className="App">
      <>
        <Navbar uniqueMovies={uniqueMovies}/>
        <Routes>
          <Route path='/' element={<Homepage popular={popular} topRated={topRated} upcoming={upcoming} error={error} loading={loading}/>} />
          <Route path='/genrelist/:id' element={<Genre uniqueMovies={uniqueMovies} error={error} loading={loading}/>} />
          <Route path='/moviesdetails/:id' element={<MoviesDetails />} />
          <Route path='/moviesdetails/' element={<MoviesDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </>
    </div>
  )
}

export default App
