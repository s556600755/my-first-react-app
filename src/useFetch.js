import { useState, useEffect } from 'react';

// 1. 定義一個自訂 Hook，接收一個 url（網址）作為參數
function useFetch(url) {
  // 這裡放昨天的三大黃金狀態
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error("伺服器連線失敗");
        }
        
        const json = await response.json();
        
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]); // 💡 注意：如果網址變了，它會重新抓取資料

  // 2. 重點！把外面組件需要的狀態打包成一個物件，回傳出去
  return { data, isLoading, error };
}

export default useFetch;