import Image from 'next/image';
import Accordion from '../Accordion/Accordion';
import './DeliveryTerms.scss';

function DeliveryTerms() {
  return (
    <div className="deliveryTerms">
      <div className="deliveryTerms__column-left">
        <Accordion />
      </div>
      <div className="deliveryTerms__column-right">
        <Image
          className="deliveryTerms__image"
          src="/images/delivery-map/delivery-map.jpg"
          alt="где мы находимся на карте"
          width={1278}
          height={1220}
          priority
        />
      </div>
    </div>
  );
}

export default DeliveryTerms;
