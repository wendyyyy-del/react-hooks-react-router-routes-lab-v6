import Home from './pages/Home'
import Actors from './pages/Actors'
import Directors from './pages/Directors'
import Movie from './pages/Movie'
import ErrorPage from './pages/ErrorPage';

const routes = [
   {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
   },
   {
    path: "/movie/:id",
    element: <Movie />
   },
   {
    path: "/directors",
    element: <Directors />
   },
   {
    path: "/actors",
    element: <Actors />
   },
  ];

export default routes;