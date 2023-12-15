import './InfoFlexContainer.scss';

function InfoFlexContainer({ className, children }) {
  return <div className={`infoFlexContainer ${className}`}>{children}</div>;
}

export default InfoFlexContainer;
