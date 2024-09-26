import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import ErrorPage from './routes/error';
import PokemonPage from './routes/PokemonListPage';
import PokemonDetailPage, { loader as pokemonLoader } from './routes/PokemonDetailPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "pokemons/",
        element: <PokemonPage />,
      },
      {
        path: "pokemons/:pokemonId",
        element: <PokemonDetailPage />,
        loader: pokemonLoader,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
