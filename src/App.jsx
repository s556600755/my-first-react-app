// 1. 引入我們剛剛自己寫好的魔法 Hook
import useFetch from './useFetch';

function App() {
  // 2. 一行搞定！直接把網址丟給 useFetch，並解構出我們要的三個狀態
  const {data , isLoading ,error} = useFetch("https://jsonplaceholder.typicode.com/todos");
  
  const todos = data;
  // 3. UI 渲染邏輯（跟昨天完全一樣）
  if (isLoading) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>⏳ 資料載入中...</h2>;
  if (error) return <h2 style={{ textAlign: 'center', color: 'red', marginTop: '50px' }}>❌ 出錯了：{error}</h2>;

  return (
    <div style={{ padding: '30px', maxWidth: '500px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Day 10：Custom Hooks 邏輯抽離 ⚡</h1>
      <h3>遠端聯絡人（使用自訂 useFetch）</h3>
      <hr />

      <div style={{ marginTop: '20px' }}>
        {todos.map((todo) => (
          <div key={todo.id} style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '10px', borderRadius: '6px' }}>
            <h4>👤 {todo.title}</h4>
            <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>📧 Email: {}</p>
            {todo.completed? '✅ 已完成':'未完成'}
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default App;