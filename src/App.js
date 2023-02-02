import ClientList from "./components/client/ClientList";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const getclient = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
      setClient(res.data);
      setLoading(false);
    } catch (err) {
      console.log("error:", err.message);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getclient();
  }, []);

  if (loading === true) {
    return <div>loading...</div>;
  }

  if (error !== "") {
    return <div>{error}</div>;
  }

  return (
    <div className="card">
      <ClientList client={client} />
    </div>
  );
}

export default App;
