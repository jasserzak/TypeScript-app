import React from "react";

// Define prop types using interface
interface GreetingProps {
  name: string;
}

// Convert component to TypeScript
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
