import "./style.css";

export default function Header() {
  return (
    <header>
        <div className="title">
            <h1>Kanban</h1>
        </div>
        <div className="search-container">
          <input type="text" placeholder="search"/>
          <button>Criar</button>
        </div>
        <div>
          <i className="fa-regular fa-bell"></i>
          <i className="fa-solid fa-question"></i>
          <i className="fa-regular fa-user"></i>
        </div>
    </header>
  );
}
