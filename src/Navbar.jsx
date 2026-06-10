// 接收爸爸傳來的 count
function Navbar({ count }) {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '15px', 
      backgroundColor: '#333', 
      color: '#fff' 
    }}>
      <h2>我的小商店 🏪</h2>
      {/* 這裡動態顯示數量 */}
      <div style={{ fontSize: '18px' }}>🛒 購物車: <strong>{count}</strong> 件商品</div>
    </nav>
  );
}

export default Navbar;