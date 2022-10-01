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
      <Route path="/detail" element={<div>상세</div>}></Route>
      <Route path="/about" element={<div>about</div>}></Route>
    </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
    </> // Route : 페이지를 의미함.
  )
}
export default Router;