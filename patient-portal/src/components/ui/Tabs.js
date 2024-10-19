export function Tabs({ children, defaultValue, className }) {
  return <div className={className}>{children}</div>;
}

export function TabsList({ children, className }) {
  // Ensure flex and width styling is passed correctly
  return <div className={`flex ${className}`}>{children}</div>;
}

export function TabsTrigger({ value, children, onClick }) {
  return (
    <button
      className="tabs-trigger px-4 py-2 border border-gray-400 outline-none hover:border-blue-500 focus:ring-2 focus:ring-blue-500 hover:outline-none hover:bg-gray-200"
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  );
}


export function TabsContent({ value, activeTab, children }) {
  return activeTab === value ? <div className="tabs-content">{children}</div> : null;
}
