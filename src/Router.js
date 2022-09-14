import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './component/Header';
import Main from './page/Main';

function Router (){
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Main />}></Route>
    </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
    </>
  )
}
export default Router;