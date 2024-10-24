import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import { useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

// 1. 전체 상품페이지, 로그인, 상품 상세페이지
// 1-1. 네비게이션 바
// 2. 전체 상품페이지: 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품디테일을 눌렀으나, 로그인이 안 되어있을 경우에는 로그인 페이지가 나온다.
// 5. 로그인이 되어있을 경우, 상품디테일페이지를 볼 수 있다.
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 7. 로그아웃이되면 상품 디테일페이지를 볼 수 없다. 다시 로그인 페이지가 나온다.
// 8. 로그인을 하면 "로그아웃", 로그아웃을 하면 "로그인"으로 문구가 바뀐다.
// 9. 상품을 검색할 수 있다.
function App() {
  const [authenticate, setAuthenticate] = useState(false); //true: 로그인o, false: 로그인x
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
