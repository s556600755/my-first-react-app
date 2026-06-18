import { useState, useEffect, useRef } from 'react';

function App() {
  // 狀態：控制密碼目前是隱藏 "password" 還是顯示 "text"
  const [passwordType, setPasswordType] = useState("password");
  
  // 1. 宣告一個 ref，用來抓取 HTML 中的 input 元素，初始值給 null
  const inputRef = useRef(null);

  // 2. 宣告一個 ref，用來在後台默默記錄「使用者看了幾次密碼」，初始值是 0
  const viewCountRef = useRef(0);

  // 用 useEffect 確保網頁第一次打開時執行
  useEffect(() => {
    // 3. 超能力二應用：inputRef.current 現在就代表那個真實的 <input> 標籤
    // 網頁一打開，直接呼叫 .focus() 讓游標在裡面閃爍！
    inputRef.current.focus();
  }, []);

  // 切換顯示/隱藏密碼的函式
  function handleTogglePassword() {
    if (passwordType === "password") {
      setPasswordType("text");
      
      // 4. 超能力一應用：秘密更新偷看次數，這行執行時，網頁「不會」大費周章重新渲染
      viewCountRef.current = viewCountRef.current + 1;
      console.log(`🕵️‍♂️ 密室暗號：使用者至今偷看了 ${viewCountRef.current} 次密碼！`);
    } else {
      setPasswordType("password");
    }
  }

  return (
    <div style={{ padding: '30px', maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Day 11：useRef 暗部操控 🔒</h1>
      
      <div style={{ display: 'flex', marginBottom: '15px' }}>
        {/* 5. 重點！使用 ref={inputRef} 綁定，把這個標籤的操控權交給 inputRef */}
        <input 
          ref={inputRef}
          type={passwordType} 
          placeholder="請輸入密碼..."
          style={{ flex: 1, padding: '8px', fontSize: '16px' }}
        />
        <button onClick={handleTogglePassword} style={{ padding: '8px', cursor: 'pointer' }}>
          {passwordType === "password" ? "👁️ 顯示" : "🙈 隱藏"}
        </button>
      </div>

      <p style={{ color: 'gray', fontSize: '14px' }}>
        提示：打開 F12 Console，看看後台默默紀錄的偷看次數。
      </p>
      
    </div>
  );
}

export default App;