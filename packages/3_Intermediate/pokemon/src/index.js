import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';

import Layout from './components/Layout';
import AbilityDetailPage from './routes/AbilityDetailPage';
import AbilityListPage from './routes/AbilityListPage';
import ErrorPage from './routes/error';
import ItemDetailPage from './routes/ItemDetailPage';
import ItemListPage from './routes/ItemListPage';
import LandingPage from './routes/LandingPage';
import LocationDetailPage from './routes/LocationDetailPage';
import LocationListPage from './routes/LocationListPage';
import MoveDetailPage from './routes/MoveDetailPage';
import MoveListPage from './routes/MoveListPage';
import PokemonDetailPage, { loader as pokemonLoader } from './routes/PokemonDetailPage';
import PokemonListPage from './routes/PokemonListPage';


import TypeChartPage from './routes/TypeChartPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: "pokemons/",
        element: <PokemonListPage />,
      },
      {
        path: "pokemons/:pokemonId",
        element: <PokemonDetailPage />,
        loader: pokemonLoader,
      },
      {
        path: "moves/",
        element: <MoveListPage />,
      },
      {
        path: "moves/:moveId",
        element: <MoveDetailPage />,
      },
      {
        path: "abilities/",
        element: <AbilityListPage />,
      },
      {
        path: "abilities/:abilityId",
        element: <AbilityDetailPage />,
      },
      {
        path: "items/",
        element: <ItemListPage />,
      },
      {
        path: "items/:itemId",
        element: <ItemDetailPage />,
      },
      {
        path: "locations/",
        element: <LocationListPage />,
      },
      {
        path: "locations/:abilityId",
        element: <LocationDetailPage />,
      },
      {
        path: "type-chart/",
        element: <TypeChartPage />,
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
