
function Sidebar({ currentCity, onCityChange }) {
  const cities = ["台北", "台中", "高雄", "花蓮"];

  return (
    <div className="w-full md:w-[250px] bg-slate-800 text-white p-5 min-h-auto md:min-h-[400px]flex flex-col gap-4">
      <h3 style={{ margin: 0, color: '#3498db' }}>📍 城市切換</h3>
      
      <div className="flex flex-row md:flex-col gap-2.5 mt-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
        {cities.map((city) => {
          const isSelected = city === currentCity;

          return (
            <button 
              key={city}
              onClick={() => onCityChange(city)} 
              className={`w-full p-3 rounded-lg text-left text-base cursor-pointer transition-colors ${
                isSelected ? 'bg-sky-500 font-bold' : 'bg-slate-700 hover:bg-slate-600'
              }`}
              /* 💡 只有需要動態換顏色的部分留著，其餘都丟到 CSS 檔了 */
              style={{ 
                backgroundColor: isSelected ? '#3498db' : '#34495e',
                fontWeight: isSelected ? 'bold' : 'normal'
              }}
            >
              {city} {isSelected && "👈"}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;