import { useState } from "react";

const QrCodeGenerate = () => {
  const [qrValue, setQrValue] = useState("");
  const [qrImgSrc, setQrImgSrc] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [preValue, setPreValue] = useState("");

  const handleGenerateClick = () => {
    const trimmedValue = qrValue.trim();
    if (!trimmedValue || preValue === trimmedValue) return;

    setPreValue(trimmedValue);
    setIsGenerating(true);
    setQrImgSrc(
      `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${trimmedValue}`
    );

    // Simulate QR code generation process
    setTimeout(() => {
      setIsGenerating(false);
    }, 500); // A small delay to mimic loading state
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQrValue(value);

    if (!value.trim()) {
      setPreValue("");
      setQrImgSrc("");
    }
  };

    // Function to handle the Enter key
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          handleGenerateClick();
        }
      };
    

  return (
    <div>
      <div className="wrapper max-w-md mx-auto mt-32 p-6 bg-white shadow-lg rounded-lg">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            QR Code Generator
          </h1>
          <p className="text-gray-600 mt-2">
            Paste a URL or enter text to create a QR code
          </p>
        </header>

        <div className="form flex flex-col items-center">
          <input
            type="text"
            spellCheck="false"
            placeholder="Enter text or URL"
            value={qrValue}
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleGenerateClick}
            className={`mt-4 py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none ${
              isGenerating ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isGenerating}
          >
            {isGenerating ? "Generating QR Code..." : "Generate QR Code"}
          </button>
        </div>

        {qrImgSrc && (
          <div className="qr-code mt-6 flex justify-center">
            <img
              src={qrImgSrc}
              alt="QR Code"
              className="w-48 h-48 object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default QrCodeGenerate;
