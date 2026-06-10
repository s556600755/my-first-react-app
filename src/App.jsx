
import { useState } from 'react';
function App() {
  const [input, setInput] = useState('');
  function handleInputChange(e) {
    // 透過 e.target.value 抓到使用者最新輸入的字，並更新狀態
    setInput(e.target.value); 
  }
  function handleClear() {
    setInput('')
  }
  return (
    <div style={{ padding: '30px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Day 4：表單輸入體驗 ✍️</h1>
      
      {/* 3. 建立一個輸入框 */}
      {/* value={text} 讓這個輸入框的值受到 React 的掌控 */}
      {/* onChange={handleInputChange} 當使用者打字時，馬上執行對應的函式 */}
      <input 
        type="text" 
        value={input} 
        onChange={handleInputChange} 
        placeholder="請輸入一些文字..."
        style={{ padding: '10px', width: '100%', fontSize: '16px', marginBottom: '20px' }}
      />

      {/* 4. 即時把狀態（text）渲染到畫面上 */}
      <div style={{ padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <h3>你目前輸入的內容是：</h3>
        <p style={{ color: 'blue', fontSize: '18px', fontWeight: 'bold' }}>
          {input || "（目前尚未輸入任何內容）"}
        </p>
      </div>
      <button onClick={handleClear}>清除</button>
    </div>
  );
}

export default App;