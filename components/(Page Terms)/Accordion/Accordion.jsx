'use client';
import { useState } from 'react';
import './Accordion.scss';

function AccordionItem({ question, answer }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={isVisible ? 'accordionItem accordionItem_show' : 'accordionItem'}>
      <div className="accordionItem__header" onClick={handleClick}>
        <span className="accordionItem__headerText">{question}</span>
        <div
          className={
            isVisible ? 'accordionItem__headericon accordionItem__headericon_rotate' : 'accordionItem__headericon'
          }
        ></div>
      </div>
      <div className={isVisible ? 'accordionItem__body' : 'accordionItem__body accordionItem__body_hidden'}>
        {answer}
      </div>
    </div>
  );
}

function Accordion() {
  return (
    <div className="accordion">
      <AccordionItem
        question="У наших курьеров всегда должна быть сдача!"
        answer="Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам"
      />
      <AccordionItem
        question="Вам что-то не довезли?"
        answer="Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам"
      />
      <AccordionItem
        question="Не понравился продукт?"
        answer="Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам"
      />
      <AccordionItem
        question="Если появились замечания"
        answer="Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам"
      />
      <AccordionItem
        question="Оплата Visa, MasterCard и МИР"
        answer="Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам"
      />
      <AccordionItem
        question="Реквизиты"
        answer="Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам"
      />
    </div>
  );
}

export default Accordion;
