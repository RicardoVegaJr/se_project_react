import "./itemCard.css";

function ItemCard({ item }) {
  return (
    <div className="card__container">
      <div className="card__title-container">
        <h2 className="card__title">{item.name}</h2>
      </div>
      <img className="card__image" src={item.link} alt={item.name} />
    </div>
  );
}

export default ItemCard;
