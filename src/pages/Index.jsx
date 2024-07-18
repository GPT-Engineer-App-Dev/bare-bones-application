import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const TestPage = () => {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    alert(`You entered: ${inputValue}`);
    setInputValue('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Test Page</h1>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Input Test</CardTitle>
          <CardDescription>Enter some text and submit</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            placeholder="Enter text here"
            value={inputValue}
            onChange={handleInputChange}
            className="mb-4"
          />
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TestPage;