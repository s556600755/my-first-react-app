import { useState, useEffect } from 'react';

function App() {
  // 1. 宣告串接 API 必備的三大黃金狀態
  const [users, setUsers] = useState([]);       // 儲存使用者陣列
  const [isLoading, setIsLoading] = useState(true); // 紀錄是否正在載入中，預設是 true
  const [error, setError] = useState(null);       // 紀錄錯誤訊息，預設是 null (沒錯誤)
  console.log(users)
  // 2. 使用 useEffect，確保網頁「只在第一次打開時」去抓資料
  useEffect(() => {
    // 定義一個非同步的抓取函式
    async function fetchUsers() {
      try {
        // 開始抓取前，確保 loading 是開啟的（保險起見）
        setIsLoading(true); 
        
        // 發送請求
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        // 如果伺服器回傳的狀態不是 200 OK（例如 404 找不到網頁）
        if (!response.ok) {
          throw new Error("伺-服-器-連-線-失-敗-！");
        }

        const data = await response.json();
        
        // 成功拿到資料，塞進狀態裡
        setUsers(data);
      } catch (err) {
        // 捕捉所有的不幸意外，並把錯誤訊息記下來
        setError(err.message);
      } finally {
        // 無論成功還是失敗，最後「載入動作」都結束了，關掉 loading
        setIsLoading(false);
      }
    }

    // 呼叫剛剛寫好的函式
    fetchUsers();
  }, []); // 空陣列超重要！沒寫的話會陷入無限連環打 API 的死循環，伺服器會被你打掛

  // 3. 【條件渲染】根據不同的狀態，決定此時此刻要畫出什麼網頁 UI
  
  // 狀況 A：如果還在載入中，就直接攔截，顯示載入畫面
  if (isLoading) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>⏳ 資料載入中，請稍候...</h2>;
  }

  // 狀況 B：如果發生錯誤，也是直接攔截，顯示錯誤畫面
  if (error) {
    return <h2 style={{ textAlign: 'center', color: 'red', marginTop: '50px' }}>❌ 糟糕！出錯了：{error}</h2>;
  }

  // 狀況 C：資料順利抵達（isLoading=false, error=null），才會跑到最下面畫出名單
  return (
    <div style={{ padding: '30px', maxWidth: '500px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Day 9：真實 API 串接實戰 🌐</h1>
      <h3>遠端聯絡人名冊（共 {users.length} 位）</h3>
      <hr />

      <div style={{ marginTop: '20px' }}>
        {users.map(user => (
          <div 
            key={user.id} 
            style={{ 
              border: '1px solid #ddd', 
              padding: '15px', 
              marginBottom: '10px', 
              borderRadius: '6px',
              backgroundColor: '#fdfdfd',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}
          >
            <h4 style={{ margin: '0 0 5px 0', color: '#333' }}>👤 {user.name}</h4>
            <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>📧 Email: {user.email}</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#999' }}>🏢 公司: {user.company.name}</p>
            <p>{user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;