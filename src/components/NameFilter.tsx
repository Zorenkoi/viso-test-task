import React, { useEffect, useState } from "react";

interface IProps {
  setName: (name: string) => void;
}

const NameFilter: React.FC<IProps> = ({ setName }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setName(query);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default NameFilter;
