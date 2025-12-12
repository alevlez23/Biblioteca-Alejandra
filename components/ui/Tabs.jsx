import { useState } from "react";

export default function Tabs() {
  const [tab, setTab] = useState(1);

  return (
    <div className="ui-card">
      <h3 className="component-title">
        <i className="bi bi-toggle2-on"></i> Tabs
      </h3>

      <div className="tabs">
        <button className={tab === 1 ? "tab active" : "tab"} onClick={() => setTab(1)}>Tab 1</button>
        <button className={tab === 2 ? "tab active" : "tab"} onClick={() => setTab(2)}>Tab 2</button>
        <button className={tab === 3 ? "tab active" : "tab"} onClick={() => setTab(3)}>Tab 3</button>
        <button className={tab === 4 ? "tab active" : "tab"} onClick={() => setTab(4)}>Tab 4</button>
        <button className={tab === 5 ? "tab active" : "tab"} onClick={() => setTab(5)}>Tab 5</button>
      </div>

      <div className="tab-content">
        {tab === 1 ? "Contenido del Tab 1" : tab === 2 ? "Contenido del Tab 2" : tab === 3 ? "Contenido del Tab 3" : tab === 4 ? "Contenido del Tab 4" : "Contenido del Tab 5"}
      </div>
    </div>
  );
}