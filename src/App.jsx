import UserCard from './UserCard';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  function handleAdd() {
    setCount(count + 1); // 告訴 React：請幫我把 count 變成現在的值加 1
  }
  function handleIncrease() {
    setCount(count - 1)
  }
  function reset(){
    setCount(0)
  }
  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h1>Day 3：useState 體驗 🌟</h1>

      {/* 4. 這裡會動態顯示目前的 count 值 */}
      <h2 style={{ fontSize: '48px' }}>{count}</h2>

      {/* 5. 綁定點擊事件 onClick，當按鈕被點擊時，執行 handleAdd 函式 */}
      <button
        onClick={handleAdd}
        style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}
      >
        點我加 1
      </button>
      <button
        onClick={handleIncrease}
        style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}
      >
        點我減 1
      </button>
      <button
        onClick={reset}
        style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}
      >
        點我歸零
      </button>
    </div>
  );
}

export default App;