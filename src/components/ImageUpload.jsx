import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/imageupload.css";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(file);
      setImage(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await axios.post(
        "https://mission-01.cognitiveservices.azure.com/vision/v3.2/analyze?visualFeatures=Categories,Description,Color",
        formData,
        {
          headers: {
            "Content-Type": "application/octet-stream",
            "Ocp-Apim-Subscription-Key": "6575ad332e47482183ef12458b6257d8",
          },
        }
      );
      setResults(response.data);
      setError("");
    } catch (error) {
      console.error("Error analyzing image:", error.response || error.message);
      setError(
        "Error: Request failed to analyze image " +
          (error.response?.status || error.message)
      );
    }
  };

  useEffect(() => {
    if (results) {
      console.log(results);
    }
  }, [results]);
  return (
    <div className="image-container">
      <h1>Upload an Image of your vehicle</h1>
      <div className="buttons-upload">
        <input type="file" name="file" onChange={handleImage} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <br />

      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="image"
          width="50%"
          height="50%"
        />
      )}
      <div className="image-description">
        {image && <p>Image Name: {image.name}</p>}
        {results && (
          <p>Car Description: {results.description.captions[0].text}</p>
        )}
        <p>
          Categories:{" "}
          {results &&
            results.categories.map((category) => category.name).join(", ")}
        </p>
        <p>
          Dominant Colors: {results && results.color.dominantColors.join(", ")}
        </p>
        <p>Tags: {results && results.description.tags.join(", ")}</p>
      </div>
    </div>
  );
}

export default ImageUpload;
