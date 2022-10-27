import React, { FC } from 'react';
import './App.scss';
import HeaderPage from "../HeaderPage/HeaderPage";
import NavigationBar from "../NavigationBar/NavigationBar";
import {Route, Routes} from "react-router-dom";
import NewsPage from "../NewsPage/NewsPage";
import AddressPage from "../AddressPage/AddressPage";


const App: FC = () => {

  return (
      <>
        <HeaderPage />
        <main className="container main">
          <NavigationBar />
            <div className="main__content">
              <Routes>
                <Route path="/" element={<NewsPage />} />
                <Route path="/address" element={<AddressPage />}/>
              </Routes>
            </div>
        </main>
      </>
  );
}

export default App;
