export default function Input({ className, name, value, id }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <input className={classElement} name={name} value={value} id={id} type="checkbox" autoComplete="off" required />
  );
}
