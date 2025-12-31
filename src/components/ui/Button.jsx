import "./Button.css";

export default function Button({
  children,
  selected,
  onClick,
  variant,
  disabled,
  title,
}) {
  const className = `button ${variant || (selected ? "selected" : "outline")}`;
  return (
    <button
      disabled={disabled}
      className={className}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
}
