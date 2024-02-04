import ParticleBackground from "./components/Particles";
import Card from "./components/Card";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ParticleBackground />
      <Card
        orgName={import.meta.env.VITE_ORGNAME}
        token={import.meta.env.VITE_TOKEN}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
