import "./itemCard.css";
import LikeButtonLiked from "../../assets/Icons/LikeButtonLiked.svg";
import LikeButtonUnliked from "../../assets/Icons/LikeButtonUnliked.svg";

function ItemCard({ item, onCardClick, onCardLike, currentUser }) {
  const handleLike = () => {
    const isLiked =
      item.likes &&
      currentUser &&
      currentUser._id &&
      item.likes.includes(currentUser._id);
    onCardLike({ id: item._id, isLiked: isLiked });
    console.log("Liking item:", item.name, "isLiked:", isLiked);
  };
  const isCardLiked =
    item.likes &&
    currentUser &&
    currentUser._id &&
    item.likes.includes(currentUser._id);
  const likeIconClassName = `card__like-icon ${
    isCardLiked ? "card__like-icon_liked" : ""
  }`;

  const currentLikeIcon = isCardLiked ? LikeButtonLiked : LikeButtonUnliked;

  return (
    <div className="card__container">
      <div className="card__title-container">
        <div className="card__title-container-wrapper">
          <h2 className="card__title">{item.name}</h2>
        </div>
        <img
          src={currentLikeIcon}
          alt={isCardLiked ? "Liked button" : "Like button"}
          className="card__like-icon"
          onClick={handleLike}
        />
      </div>
      <img
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
        onClick={() => onCardClick(item)}
      />
    </div>
  );
}

export default ItemCard;
