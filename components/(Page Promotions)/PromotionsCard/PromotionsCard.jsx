import Image from 'next/image';
import './PromotionsCard.scss';

function PromotionsCard({ image, title, text, term }) {
  return (
    <div className="promotionsCard">
      <Image className="promotionsCard__image" src={image} alt={title} width={440} height={180} priority />
      <div className="promotionsCard__content">
        <h3 className="promotionsCard__title">{title}</h3>
        <p className="promotionsCard__paragraph">{text}</p>
        <span className="promotionsCard__term">{term}</span>
      </div>
    </div>
  );
}

export default PromotionsCard;
