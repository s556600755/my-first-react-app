function WeatherCard({ weather, isCelsius }) {
  
  if (!weather) {
    return <div className="flex-1 bg-slate-50 p-8 text-slate-800">讀取中...</div>;
  }

  const displayTemperature = isCelsius 
    ? weather.temp 
    : Math.round(weather.temp * 9 / 5 + 32);

  return (
    <div className="flex-1 bg-slate-50 p-8 text-slate-800 flex flex-col justify-between">
      
      {/* 上半部：城市與圖示 */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold m-0">{weather.name}市</h2>
        <span className="text-6xl">{weather.icon}</span>
      </div>
      
      {/* 中半部：大溫度 */}
      <h1 className="text-7xl my-5 font-light">
        {displayTemperature}{isCelsius ? "°C" : "°F"}
      </h1>
      
      {/* 下半部：詳細資訊列 */}
      <div className="flex gap-5">
        <div className="bg-white p-4 rounded-xl flex-1 shadow-sm border border-slate-100">
          <strong className="text-sm text-slate-400 block mb-1">💧 濕度</strong>
          <p className="text-2xl font-bold m-0">{weather.humidity}%</p>
        </div>
        
        <div className="bg-white p-4 rounded-xl flex-1 shadow-sm border border-slate-100">
          <strong className="text-sm text-slate-400 block mb-1">🍃 風速</strong>
          <p className="text-2xl font-bold m-0">{weather.windSpeed} km/h</p>
        </div>
      </div>

    </div>
  );
}

export default WeatherCard;