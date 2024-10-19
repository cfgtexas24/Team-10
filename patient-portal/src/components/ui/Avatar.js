export function Avatar({ children, className }) {
    return <div className={`avatar ${className}`}>{children}</div>;
  }
  
  export function AvatarImage({ src, alt }) {
    return <img className="rounded-full" src={src} alt={alt} />;
  }
  
  export function AvatarFallback({ children }) {
    return <div className="avatar-fallback">{children}</div>;
  }
  