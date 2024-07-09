// Badges.tsx
import "./badges.css";

export function Badges() {
  return (
    <>
      <div className="badges">
        <h4>Subtitle</h4>
      </div>
      <div className="badges-container">
        {Array.from({ length: 35 }, (_, index) => (
          <span key={index} className="badge">
            Badge
          </span>
        ))}
      </div>
      <div className="btn">
        <button id="btn1">Button</button>
        <button id="btn2">Button</button>
      </div>
    </>
  );
}
