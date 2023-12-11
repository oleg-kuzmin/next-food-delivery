export default function Label({ className, htmlFor, text }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <label className={classElement} htmlFor={htmlFor}>
      <span>{text}</span>
    </label>
  );
}
