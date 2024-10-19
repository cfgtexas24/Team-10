export function Card({ children }) {
    return <div className="card bg-white shadow-md p-6">{children}</div>;
  }
  
  export function CardHeader({ children }) {
    return <div className="card-header">{children}</div>;
  }
  
  export function CardTitle({ children }) {
    return <h2 className="text-xl font-bold">{children}</h2>;
  }
  
  export function CardDescription({ children }) {
    return <p className="text-muted-foreground">{children}</p>;
  }
  
  export function CardContent({ children, className }) {
    return <div className={`card-content ${className}`}>{children}</div>;
  }
  
  export function CardFooter({ children }) {
    return <div className="card-footer">{children}</div>;
  }
  