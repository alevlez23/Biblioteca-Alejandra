export default function Tooltip() {
  return (
    <div className="ui-card">
      <h3 className="component-title">
        <i className="bi bi-chat-dots-fill"></i> Tooltip
      </h3>

      <div className="tooltip">
        Pasa el mouse aquí
        <span className="tip">Este es un tooltip premium</span>
      </div>
    </div>
  );
}
