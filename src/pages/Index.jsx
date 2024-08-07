import React from 'react';
import { Button } from "@/components/ui/button";

const HelloWorldPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Hello, World!</h1>
      <p className="text-lg mb-4">Welcome to your new React page using Shadcn UI components.</p>
      <Button variant="default">Click me!</Button>
    </div>
  );
};

export default HelloWorldPage;