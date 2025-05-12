import "./Button.css";

export default function Button({ label }) {
  return (
    <button className="my-button">
      {label}
    </button>
  );
}
