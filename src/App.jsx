import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState("舊的本地資料");
  const [count, setCount] = useState(0);

  // 【場景 B 實作】：網頁一打開，自動去拿遠端資料
  useEffect(() => {
    console.log("🎬 網頁第一次打開了！觸發 useEffect");

    // 模擬網路連線延遲 2.5 秒
    setTimeout(() => {
      // 2.5 秒後，成功拿到資料，並更新狀態
      setData("✨ 這是從遠端伺服器下載的最新資料！ 🎉");
    }, 2500);

  }, []); // 傳入空陣列，確保這段延遲動作只會執行一次

  // 【場景 C 實作】：緊盯著 count 變數
  useEffect(() => {
    if (count > 0) {
      console.log(`👀 偵測到 count 改變了！目前的值是：${count}`);
    }
  }, [count]); // 只有 count 變了，才會觸發這裡

  useEffect(() => {
    if (count%5===0 ) {
      console.log(`👀 偵測到 count 改變了！目前的值是：${count}`);
    }
  }, [count]); // 只有 count 變了，才會觸發這裡

  return (
    <div style={{ padding: '30px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Day 8：useEffect 基礎體驗 🌐</h1>
      
      <div style={{ padding: '20px', backgroundColor: '#eef2f3', borderRadius: '8px', marginBottom: '20px' }}>
        <h3>資料狀態：</h3>
        <p style={{ fontWeight: 'bold', color: 'blue' }}>{data}</p>
      </div>

      <hr />

      <div style={{ marginTop: '20px' }}>
        <h3>測試計數器（用來觀察依賴陣列）：</h3>
        <p style={{ fontSize: '24px' }}>{count}</p>
        <button onClick={() => setCount(count + 1)}>點我加 1</button>
      </div>
    </div>
  );
}

export default App;