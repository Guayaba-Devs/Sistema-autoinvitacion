import ParticleBackground from "./components/Particles";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <ParticleBackground />
      <Card
        orgName={import.meta.env.VITE_ORGNAME}
        token={import.meta.env.VITE_TOKEN}
      />
    </div>
  );
}

export default App;
