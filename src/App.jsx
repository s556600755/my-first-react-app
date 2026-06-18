import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    /* 1. BrowserRouter: 讓整個網站開始支援網址導覽功能 */
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
        
        {/* 全站通用導覽列 */}
        <nav className="bg-white shadow-md p-4 flex justify-center gap-6">
          {/* 💡 注意：在 React Router 中，不要用 <a href="...">，否則會導致網頁重新整理！ 
              請一律改用 <Link to="...">，這樣才能保持 SPA 的滑順換頁體驗。
          */}
          <Link to="/" className="text-lg font-semibold hover:text-sky-500 transition-colors">
            首頁
          </Link>
          <Link to="/about" className="text-lg font-semibold hover:text-sky-500 transition-colors">
            關於我們
          </Link>
        </nav>

        {/* 2. Routes & Route: 定義網址與頁面的對照地圖 */}
        <main className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-sm">
          <Routes>
            {/* 當網址是 / 時，秀出 Home 組件 */}
            <Route path="/" element={<Home />} />
            
            {/* 當網址是 /about 時，秀出 About 組件 */}
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;