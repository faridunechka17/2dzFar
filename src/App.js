import React from "react";
import UserPage from "./pages/UserPage/UserPage/UserPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Container from "./pages/UserPage/container/container";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<UserPage/>}/>
            <Route path='/user/:id' element={<Container/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
