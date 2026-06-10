import { useState } from 'react';
import Navbar from './Navbar';
import Product from './Product';

function App() {
  // 1. 把共享的狀態「提升」到最頂層的父組件
  const [cartTotal, setCartTotal] = useState(0);

  // 2. 定義一個讓商品數量加 1 的函式
  function handleAddToCart() {
    setCartTotal(cartTotal + 1);
  }

  function handleRemoveFromCart() {
    setCartTotal(cartTotal - 1)
  }
  return (
    <div>
      {/* 3. 把狀態傳給 Navbar 顯示 */}
      <Navbar count={cartTotal} />

      <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
        <h2>本日推薦商品</h2>

        {/* 4. 把觸發狀態改變的函式，傳給 Product 組件 */}
        <Product name="極速轉職 React 秘笈" onBuy={handleAddToCart} remove={handleRemoveFromCart} />
        <Product name="極致自律 30 天咖啡豆" onBuy={handleAddToCart} remove={handleRemoveFromCart} />
      </div>
    </div>
  );
}

export default App;