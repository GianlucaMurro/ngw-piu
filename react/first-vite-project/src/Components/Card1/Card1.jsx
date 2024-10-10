import "./Card1.css";

export default function Card1({ title, description }) {
  return (
    <div className="card">
      <div className="head">
        <h1 className="title">{title}</h1>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
}
