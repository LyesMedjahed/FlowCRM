

function StatCard({title, value, percentage, icon, color}){
    return(
        <div className="stat-card">
            <div className="stat-top">
                <h4>{title}</h4>
                <div style={{ color }}>
                   {icon}
                </div>
            </div>
            <h2>{value}</h2>
            <p style={{ color }}>{percentage} vs last month</p>
        </div>
    )
}

export default StatCard;