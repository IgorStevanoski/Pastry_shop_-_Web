import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Base from './base/Base';
import Login from './welcome/login/Login';
import Register from './welcome/register/Register';

import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'
import Welcome from './welcome/welcome/Welcome';
import UserPromotions from './user/UserPromotions';
import UserProducts from './user/UserProducts';
import UserContact from './user/UserContact';
import UserAccount from './user/UserAccount';
import UserCakes, { ProductType } from './user/UserCakes';
import dataInit from './data/DataInit';
import UserProduct from './user/UserProduct';
import UserBasket from './user/UserBasket';
import UserMail from './user/UserMail';
import WorkerWelcome from './worker/WorkerWelcome';
import WorkerNewProduct from './worker/WorkerNewProduct';
import WorkerOrders from './worker/WorkerOrders';
import WorkerAccount from './worker/WorkerAccount';

export const enum UserType {
  None = 0,
  User,
  Worker,
}

const router = createBrowserRouter(
  [
    {path: "/", element: <Base element={<Welcome></Welcome>} type = {UserType.None}></Base>},
    {path: "/login", element: <Base element={<Login></Login>} type = {UserType.None}></Base>},
    {path: "/register", element: <Base element={<Register></Register>} type = {UserType.None}></Base>},
    {path: "/userPromotions", element: <Base element={<UserPromotions></UserPromotions>} type = {UserType.User}></Base>},
    {path: "/userProducts", element: <Base element={<UserProducts></UserProducts>} type = {UserType.User}></Base>},
    {path: "/userContact", element: <Base element={<UserContact></UserContact>} type = {UserType.User}></Base>},
    {path: "/userAccount", element: <Base element={<UserAccount></UserAccount>} type = {UserType.User}></Base>},
    {path: "/userCakes", element: <Base element={<UserCakes productType = {ProductType.Cake}></UserCakes>} type = {UserType.User}></Base>},
    {path: "/userCookies", element: <Base element={<UserCakes productType = {ProductType.Cookie}></UserCakes>} type = {UserType.User}></Base>},
    {path: "/userProduct/:id", element: <Base element={<UserProduct></UserProduct>} type = {UserType.User}></Base>},
    {path: "/userBasket", element: <Base element={<UserBasket></UserBasket>} type = {UserType.User}></Base>},
    {path: "/userMail", element: <Base element={<UserMail></UserMail>} type = {UserType.User}></Base>},
    {path: "/workerWelcome", element: <Base element={<WorkerWelcome></WorkerWelcome>} type = {UserType.Worker}></Base>},
    {path: "/workerNewProduct", element: <Base element={<WorkerNewProduct></WorkerNewProduct>} type = {UserType.Worker}></Base>},
    {path: "/workerOrders", element: <Base element={<WorkerOrders></WorkerOrders>} type = {UserType.Worker}></Base>},
    {path: "/workerAccount", element: <Base element={<WorkerAccount></WorkerAccount>} type = {UserType.Worker}></Base>},
  ]
)

function App() {
  dataInit()

  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

// TODO: 
// Da se promocije uzimaju iz baze
// kada se klikne na promociju ide se na pregled promocije
// indeksi za porudzbine se baguju, valjda nece ako je prazna aplikacija

// npx create-react-app <naziv> --template typescript
// npm start
// npm install react-router-dom
// npm install alertifyjs
// npm install react-bootstrap bootstrap