// 接收爸爸傳來的商品名稱，以及爸爸賜給他的「按鈕點擊函式 (onBuy)」
function Product({ name, onBuy , remove}) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '15px 0', borderRadius: '5px' }}>
      <h3>{name}</h3>
      <p>售價：$999</p>
      {/* 當按鈕被點擊，直接觸發爸爸傳進來的函式 */}
      <button onClick={onBuy} style={{ padding: '5px 10px', cursor: 'pointer' }}>
        加入購物車
      </button>
      <button onClick={remove} style={{padding:"5px" ,cursor:'pointer'}}> 從購物車移除</button>
    </div>
  );
}

export default Product;