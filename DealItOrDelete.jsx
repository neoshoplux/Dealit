
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from 'uuid';

const mockProducts = [
  {
    id: "1",
    name: "Samsung Galaxy S24",
    price: "899€",
    image: "https://images.samsung.com/galaxy-s24.jpg",
  },
  {
    id: "2",
    name: "Sony WH-1000XM5",
    price: "379€",
    image: "https://images.sony.com/wh1000xm5.jpg",
  },
];

export default function DealItOrDelete() {
  const [current, setCurrent] = useState(0);
  const [email, setEmail] = useState("");
  const [userId] = useState(uuidv4());
  const [responses, setResponses] = useState([]);
  const [showEmail, setShowEmail] = useState(false);

  const handleResponse = (choice) => {
    const product = mockProducts[current];
    const newResponse = {
      userId,
      email,
      productId: product.id,
      productName: product.name,
      price: product.price,
      choice,
      date: new Date().toISOString(),
    };

    setResponses([...responses, newResponse]);
    if (current + 1 < mockProducts.length) {
      setCurrent(current + 1);
    } else {
      setShowEmail(true);
    }
  };

  const handleEmailSubmit = () => {
    console.log("Final responses:", responses);
    // TODO: send to Google Sheets or database
  };

  if (showEmail) {
    return (
      <div className="flex flex-col items-center gap-4 p-8">
        <h2 className="text-xl font-semibold">Enter your email to save your choices</h2>
        <Input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={handleEmailSubmit}>Finish</Button>
      </div>
    );
  }

  const product = mockProducts[current];

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <h1 className="text-2xl font-bold">Deal It or Delete</h1>
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center gap-4 p-6">
          <img src={product.image} alt={product.name} className="w-48 h-48 object-cover rounded-xl" />
          <h2 className="text-xl font-medium">{product.name}</h2>
          <p className="text-lg text-gray-600">{product.price}</p>
          <div className="flex gap-4">
            <Button onClick={() => handleResponse("deal")}>Deal It</Button>
            <Button variant="destructive" onClick={() => handleResponse("delete")}>Delete</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
