export function Input({ id, value, onChange, type = "text", placeholder }) {
    return (
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="input w-full border rounded p-2"
        placeholder={placeholder}
      />
    );
  }
  