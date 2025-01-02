import React, { useState } from "react";

function PotatoDiseaseClassification() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setResult(null); // Reset result when a new image is uploaded
  };

  const handleProcess = async () => {
    if (!image) {
      alert("Please upload an image first.");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error predicting:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Potato Disease Classification</h1>
        <p className="text-gray-400 mt-2">
          Upload an image to classify potato diseases.
        </p>
      </header>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-400
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-gray-700 file:text-gray-300
            hover:file:bg-gray-600
          "
        />
        {image && (
          <div className="mt-4">
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="max-w-full rounded-md"
            />
          </div>
        )}
        <button
          onClick={handleProcess}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
        >
          {isLoading ? "Processing..." : "Process"}
        </button>
      </div>

      {result && (
        <div className="mt-6 w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Prediction Result</h2>
          <p className="text-lg">
            <span className="font-bold">Class:</span> {result.class}
          </p>
          <p className="text-lg">
            <span className="font-bold">Confidence:</span> {result.confidence.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}

export default PotatoDiseaseClassification;