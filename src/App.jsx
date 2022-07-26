// App.jsx

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Omikuji } from "./pages/Omikuji";
import { Janken } from "./pages/Janken";
import { BookCreate } from "./pages/BookCreate";
// 🔽 追加
import { NHK } from "./pages/NHK";


const App = () => {
  return (
    <BrowserRouter basename="/">
      <h1>react app</h1>
      <ul>
        <li>
          <Link to="/omikuji">おみくじ</Link>
        </li>
        <li>
          <Link to="/janken">じゃんけん</Link>
        </li>
        <li>
          <Link to="/book-create">投稿する</Link>
        </li>
         {/* 🔽 追加 */}
        <li>
          <Link to="/NHK">ホテルを検索する</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/omikuji" element={<Omikuji />} />
        <Route path="/janken" element={<Janken />} />
        <Route path="/book-create" element={<BookCreate />} />
         {/* 🔽 追加 */}
        <Route path="/NHK" element={<NHK />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;