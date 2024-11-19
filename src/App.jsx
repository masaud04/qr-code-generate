import "./App.css";
import QrCodeGenerate from "./components/QrCodeGenerate";

function App() {
  return (
    <div className="relative h-screen pt-32">
      <QrCodeGenerate />

      <div className="absolute bottom-32 w-full">
        <h2 className="author text-2xl md:text-4xl">
          &lt;<span className="text-gradient">masaudAhmod</span> /&gt;
        </h2>
      </div>
    </div>
  );
}

export default App;
