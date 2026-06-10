import UserCard from './UserCard';
function App() {

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>工程團隊成員名單 👥</h1>

      {/* 2. 重複使用組件，並透過自訂屬性（Props）把資料傳進去 */}
      <UserCard name="小明" job="前端實習生" />
      <UserCard name="阿華" job="資深前端工程師" />
      <UserCard name="你" job="未來的前端架構師" />
    </div>
  );
}

export default App;