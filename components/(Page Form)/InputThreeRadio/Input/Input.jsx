export default function Input({ name, value, id, defaultChecked, onChange, className }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <input
      className={classElement}
      name={name}
      value={value}
      id={id}
      defaultChecked={defaultChecked}
      onChange={onChange}
      type="radio"
      autoComplete="off"
    />
  );
}
