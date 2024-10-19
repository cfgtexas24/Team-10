export function Tabs({ children, defaultValue, className }) {
    return <div className={className}>{children}</div>;
  }
  
  export function TabsList({ children, className }) {
    return <div className={`tabs-list ${className}`}>{children}</div>;
  }
  
  export function TabsTrigger({ value, children, onClick }) {
    return (
      <button className="tabs-trigger" onClick={() => onClick(value)}>
        {children}
      </button>
    );
  }
  
  export function TabsContent({ value, activeTab, children }) {
    return activeTab === value ? <div className="tabs-content">{children}</div> : null;
  }
  