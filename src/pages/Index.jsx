import React from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="mb-6">This is a basic template for your React page using Shadcn components.</p>
      <Button variant="default">Get Started</Button>
    </div>
  );
};

export default Index;