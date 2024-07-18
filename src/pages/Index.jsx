import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our App</h1>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Get Started</CardTitle>
          <CardDescription>Begin your journey with us today!</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Explore our features and discover how we can help you achieve your goals.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Start Now</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;