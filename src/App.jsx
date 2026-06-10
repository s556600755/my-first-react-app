import { useState } from 'react';

function App() {
  // 狀態一：儲存所有的待辦事項（初始值給它兩個預設的事項）
  const [todos, setTodos] = useState([
    { id: 1, text: "學會 React 基礎觀念", isDone: true },
    { id: 2, text: "獨立做出 Todo List 作品", isDone: false }
  ]);
  const [filterStatus, setFilterStatus] = useState("all");
  const unDoneCount = todos.filter(t => !t.isDone).length;

  // 狀態二：紀錄目前輸入框（input）裡打的字
  const [inputValue, setInputValue] = useState("");

  // 功能 1：新增待辦事項
  function handleAddTodo() {
    if (inputValue.trim() === "") return; // 如果沒打字，就不做任何事

    // 建立一個全新的待辦事項物件
    const newTodo = {
      id: Date.now(), // 用當下的時間當作唯一的 ID
      text: inputValue,
      isDone: false
    };

    // 重點！React 改變陣列不能用 todos.push(newTodo)
    // 我們必須用「展開運算子 ...」複製舊陣列，並把新東西塞進去
    setTodos([...todos, newTodo]);

    // 清空輸入框
    setInputValue("");
  }

  // 功能 2：刪除待辦事項
  function handleDeleteTodo(id) {
    // 使用陣列的 filter 篩選出「ID 跟被點擊的那個人不一樣」的所有事項
    // 這樣就等於把點擊的那個人「過濾掉（刪除）」了
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);

  }

  // 功能 3：切換完成狀態（勾選/取消勾選）
  function handleToggleDone(id) {
    // 用 map 遍歷陣列，找到對應的 ID 後，把它的 isDone 反轉
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo; // 不是目標對象就原封不動回傳
    });
    setTodos(updatedTodos);
  }
  const displayTodos = todos.filter(todo => {
    if (filterStatus === "done") {
      return todo.isDone === true;   // 如果是 done 面板，只留 true 的
    }
    if (filterStatus === "undone") {
      return todo.isDone === false;  // 如果是 undone 面板，只留 false 的
    }
    return true;                     // 如果是 all，全部過濾都通過（保留全部）
  });
  // function filterAll(){
  //   const newTodos = todos.filter(()=>{
  //     return todos
  //   })
  //   setTodos(newTodos)
  // }
  // function filterDone(){
  //   const newTodos = todos.filter((todo)=>{
  //     return todo.isDone === true
  //   })
  //   console.log(newTodos)
  //   setTodos(newTodos)
  // }
  // function filterUndone(){
  //   const newTodos = todos.filter((todo)=>{
  //     return todo.isDone === false
  //   })
  //   console.log(newTodos)
  //   setTodos(newTodos)
  // }

  return (
    <div style={{ padding: '30px', maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>Day 7：我的第一個 React 專案 🎉</h2>
      <h3>待辦事項清單</h3>
      <p>還有{unDoneCount}件代辦尚未完成</p>
      {/* --- 輸入區域 --- */}
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="想做點什麼呢？"
          style={{ flex: 1, padding: '8px', fontSize: '16px' }}
        />
        <button onClick={handleAddTodo} style={{ padding: '8px 15px', cursor: 'pointer' }}>
          新增
        </button>
      </div>

      {/* --- 列表渲染區域 --- */}
      <div>
        {displayTodos.map((todo) => (
          <div
            key={todo.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              borderBottom: '1px solid #eee',
              // 條件渲染應用：如果完成了，字體變灰色並加上刪除線，沒完成就是黑色
              textDecoration: todo.isDone ? 'line-through' : 'none',
              color: todo.isDone ? '#aaa' : '#000'
            }}
          >
            {/* 點擊文字區塊，就可以切換完成狀態 */}
            <span
              onClick={() => handleToggleDone(todo.id)}
              style={{ cursor: 'pointer', flex: 1 }}
            >
              {todo.isDone ? "✅ " : "⬜ "}
              {todo.text}
            </span>

            {/* 刪除按鈕 */}
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              style={{ backgroundColor: '#ff4d4d', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer', padding: '3px 8px' }}
            >
              刪除
            </button>
          </div>
        ))}
      </div>
      <button onClick={() => setFilterStatus("all")}>全部</button>
      <button onClick={() => setFilterStatus('done')}>完成</button>
      <button onClick={() => setFilterStatus('undone')}>未完成</button>
    </div>
  );
}

export default App;