import { useState } from 'react';

function App() {
  // 狀態 1：用來記錄現在是否要「顯示名單」，初始值是 true (要顯示)
  const [showList, setShowList] = useState(true);

  // 資料：模擬從後端拿到的員工陣列（裡面放物件）
  const employees = [
    { id: 101, name: "小明", role: "前端工程師" },
    { id: 102, name: "阿華", role: "資深設計師" },
    { id: 103, name: "小菜", role: "專案經理" }
  ];
  console.log(showList)

  // 切換顯示狀態的函式
  function toggleDisplay() {
    setShowList(!showList); // ! 代表「反轉」布林值。如果是 true 就變 false，反之亦然
  }

  return (
    <div style={{ padding: '30px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Day 5：列表與條件渲染 📋</h1>

      {/* 點擊按鈕，切換顯示/隱藏 */}
      <button 
        onClick={toggleDisplay}
        style={{ padding: '10px', marginBottom: '20px', cursor: 'pointer' }}
      >
        {/* 1. 條件渲染：用三元運算子決定按鈕要顯示什麼文字 */}
        {showList ? "隱藏員工名單" : "顯示員工名單"}
      </button>

      {/* 2. 條件渲染：如果 showList 是 true，才顯示後面的 <div> */}
      {showList ? (
        <div>
          <h2>員工名單：</h2>
          
          {/* 3. 列表渲染：用 map() 把資料逐一轉成 JSX */}
          {employees.map((employee) => {
            return (
              <div 
                key={employee.id} // 重點！React 要求列表中的每個元素都要有唯一的 key
                style={{
                  border: '1px solid #ccc',
                  padding: '10px',
                  margin: '10px 0',
                  borderRadius: '5px',
                  backgroundColor: employee.role === '資深設計師'?'#fff3cd':'#f9f9f9'
                }}
              >
                <strong>{employee.name}</strong> - {employee.role}
              </div>
            );
          })}
        </div>
      ) : (
        // 如果 showList 是 false，就顯示這行提示文字
        <p style={{ color: 'gray', fontStyle: 'italic' }}>名單已被隱藏</p>
      )}
    </div>
  );
}

export default App;