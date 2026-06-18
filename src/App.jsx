import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import WeatherCard from './WeatherCard';


function App() {
  const [currentCity, setCurrentCity] = useState("台北");
  const [weatherData, setWeatherData] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    const mockWeatherDatabase = {
      "台北": { name: "台北", temp: 26, humidity: 65, windSpeed: 12, icon: "⛅" },
      "台中": { name: "台中", temp: 29, humidity: 55, windSpeed: 8, icon: "☀️" },
      "高雄": { name: "高雄", temp: 31, humidity: 70, windSpeed: 15, icon: "🌴" },
      "花蓮": { name: "花蓮", temp: 28, humidity: 60, windSpeed: 10, icon: "🌊" }
    };
    setWeatherData(mockWeatherDatabase[currentCity]);
  }, [currentCity]);

  return (

    <div className={"p-4 md:p-10 bg-slate-100 min-h-screen flex flex-col items-center justify-center gap-5"}>
      
      {/* 切換按鈕區 */}
      <div className={"w-full md:w-[800px] flex justify-end"}>
        <button className="px-5 py-2.5 bg-violet-500 hover:bg-emerald-600 text-white font-bold rounded-full cursor-pointer shadow-md transition-colors" onClick={() => setIsCelsius(!isCelsius)}>
          切換為：{isCelsius ? "華氏 °F" : "攝氏 °C"}
        </button>
      </div>

      {/* 主儀表板 */}
      <div className="flex flex-col md:flex-row w-full  md:w-[800px] bg-white shadow-2xl rounded-2xl overflow-hidden">
        <Sidebar currentCity={currentCity} onCityChange={setCurrentCity} />
        <WeatherCard weather={weatherData} isCelsius={isCelsius} />
      </div>

    </div>
  );
}

export default App;