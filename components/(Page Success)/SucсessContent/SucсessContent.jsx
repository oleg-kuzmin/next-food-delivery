import styles from './SucсessContent.module.scss';

// export default function SucсessContent(props) {
//   const result = {...props.object}
//   console.log(result);
//   return <div className={styles.SucсessContent}>123</div>;
// }

export default function SucсessContent({ className, object }) {
  console.log(object);
  const classElement = className ? ` ${className}` : '';

  const elements = Object.keys(object).map(key => {
    if (key !== 'basket') {
      return (
        <div key={key} className={styles.SucсessContent__Element}>
          <span>{key}:</span>
          <span>{object[key] ? `"${object[key]}"` : '"не заполнено"'}</span>
        </div>
      );
    } else if (key === 'basket') {
      return (
        <div key={key} className={styles.SucсessContent__Basket}>
          <span>basket: &#91; </span>
          {object.basket.map((item, index) => {
            return (
              <div key={index}>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&#123;</span>
                <span>&nbsp;title: {`"${item.title}", `}</span>
                <span>counter: {`"${item.counter}"`}</span>
                <span>&nbsp;&#125;</span>
              </div>
            );
          })}
          <span>&#93;</span>
        </div>
      );
    }
  });

  return (
    <div className={styles.SucсessContent + classElement}>
      <h3 className={styles.SucсessContent__Title}>данные для сервера:</h3>
      {elements}
    </div>
  );
}
