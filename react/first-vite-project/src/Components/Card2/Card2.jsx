import "./Card2.css";

export default function Card2({ title }) {
  const API = [
    {
      money: 62343,
      currency: "USD",
    },
    {
      money: 62343,
      currency: "EUR",
    },
    {
      money: 62343,
      currency: "GBP",
    },
  ];
  return (
    <div className="card">
      <div className="head">
        <h1 className="title">{title}</h1>
      </div>
      <div className="info">
        {API.map((info) => {
          <div className="data">
            <p>{info.money}</p>
            <h3>{info.currency}</h3>
          </div>;
        })}
      </div>
    </div>
  );
}
