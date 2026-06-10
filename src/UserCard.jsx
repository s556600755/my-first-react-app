function UserCard({ name, job }) {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            margin: '10px 0',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h2>姓名：{name}</h2>
            <p>職稱：{job}</p>
        </div>
    );
}

export default UserCard;