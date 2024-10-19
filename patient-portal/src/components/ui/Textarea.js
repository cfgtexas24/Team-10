export function Textarea({ id, value, onChange, placeholder, className }) {
    return (
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`textarea w-full border rounded p-2 ${className}`}
      />
    );
  }
  