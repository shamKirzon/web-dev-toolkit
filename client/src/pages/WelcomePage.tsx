import { useEffect, useState } from "react";
import { exampleApi } from "@/api/example.api";

const WelcomePage = () => {
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    exampleApi
      .getCustomerCount(7)
      .then(setCount)
      .catch((err: Error) => setError(err.message));
  }, []);

  return (
    <div>
      WELCOME PAGE ITO MGA PARE
      {error && <p>Error: {error}</p>}
      {count !== null && <p>Server connected successfully</p>}
    </div>
  );
};

export default WelcomePage;
