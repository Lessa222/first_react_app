export default function Menu() {
    return (    
        <div className="menu">
            <div className="menu__search">
                <i className="fas fa-search"></i>
                <input type="text" className="menu__search-input" placeholder="Search for a country..." />
            </div>
            <div className="menu__filter">  
                <span className="menu__filter-label">Filter by Region</span>
                <select className="menu__filter-select">
                    <option value="">All</option>
                </select>
            </div>
        </div>

    );
}        