export default function Input({ className }) {
  const classElement = className ? ` ${className}` : '';
  return (
    <input
      className={classElement}
      name="confirmPersonal"
      value={true}
      id="confirmPersonal"
      type="checkbox"
      autoComplete="off"
    />
  );
}
