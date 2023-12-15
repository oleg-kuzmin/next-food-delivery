import './InfoBlock.scss';

function InfoBlock({ title, paragraph, gapMore }) {
  return (
    <div className={gapMore ? 'infoBlock infoBlock_gapMore' : 'infoBlock'}>
      <h3 className="infoBlock__title">{title}</h3>
      <p className="infoBlock__paragraph">{paragraph}</p>
    </div>
  );
}

export default InfoBlock;
