import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function Anomalies() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImagePreview, setSelectedImagePreview] = useState(null);
  const [result, setResult] = useState(null);
  const [maxValueIndex, setMaxValueIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const formatPredictions = (result) => {
    if (!result) return "";

    const formattedResult = result
      .toString()
      .split(",")
      .filter((item) => item.trim() !== "" && parseFloat(item) !== 0)
      .join(",");

    return formattedResult || "N/A";
  };

  const calculateMaxValueIndex = (result) => {
    if (!result) return null;

    const filteredValues = result
      .toString()
      .split(",")
      .filter((item) => item.trim() !== "" && parseFloat(item) !== 0)
      .map((item) => parseFloat(item));

    if (filteredValues.length > 0) {
      const maxValue = Math.max(...filteredValues);
      const maxValueIndex = filteredValues.indexOf(maxValue);
      return maxValueIndex;
    }

    return null;
  };

  const getPredictedName = (index) => {
    const names = [
      "Termites",
      "Thrips",
      "Tussock caterpillar",
      "Shoot Borer",
      // Add more names as needed
    ];

    if (index >= 0 && index < names.length) {
      return names[index];
    }

    return "Name not found";
  };

  const content = [
    {
      "Cultural Method":
        "There is no specific cultural method for managing Termites.",
      "Chemical Method":
        "Soil Treatment: Apply termiticides to the soil around a building's foundation.",
      "Wood Treatment":
        "Apply certain chemicals directly to wooden structures.",
      "Biological Method":
        "There is no specific biological method for managing termites.",
    },
    {
      "Cultural Method":
        "Submerge infected crops intermittently for 1-2 days.\n- Drag a wet cloth on the seedlings.\n- Flooding to submerge the infested field for 2 days is effective against rice thrips.\n- Use rice cultivars with known resistance.",
      "Chemical Method":
        "Apply Phosphamidon 40 SL in the nursery stage or main field stage when thrips population exceeds a certain threshold.",
      "Wood Treatment": "",
      "Biological Method":
        "Predatory thrips, coccinellid beetles, anthocorid bugs, and staphylinid beetles are biological control agents that feed on both thrips nymphs and adults.",
    },
    {
      "Cultural Method":
        "There is no specific cultural method for managing Tussock Caterpillars.",
      "Chemical Method":
        "Use Supreme IT Insecticide to treat your yard and ornamentals.",
      "Wood Treatment": "",
      "Biological Method":
        "There is no specific biological method mentioned for managing Tussock Caterpillars in the provided information.",
    },
    {
      "Cultural Method":
        "Remove affected terminal shoots and fruits.\n- Avoid continuous cropping of brinjal crop.\n- Grow varieties with resistance to shoot borer.\n- Encourage the activity of larval parasitoids.",
      "Chemical Method":
        "Use Neem Seed Kernel Extract (NSKE) or other recommended chemicals at specific intervals.",
      "Wood Treatment": "",
      "Biological Method":
        "There is no specific biological method for managing shoot borers.",
    },
  ];

  // const getTextByIndex = (index) => {
  //   const textSuggestions = [
  //     `
  //     Cultural Method: There is no specific cultural method for managing Termites.
  //     Chemical Method: Soil Treatment: Apply termiticides to the soil around a building's foundation.\n- Wood Treatment: Apply certain chemicals directly to wooden structures.
  //     Biological Method: There is no specific biological method for managing termites.
  //     `,
  //     `
  //     Thrips:
  //     Cultural Methods: Submerge infected crops intermittently for 1-2 days.\n- Drag a wet cloth on the seedlings.\n- Flooding to submerge the infested field for 2 days is effective against rice thrips.\n- Use rice cultivars with known resistance.
  //     Chemical Methods: Apply Phosphamidon 40 SL in the nursery stage or main field stage when thrips population exceeds a certain threshold.
  //     Biological Methods: Predatory thrips, coccinellid beetles, anthocorid bugs, and staphylinid beetles are biological control agents that feed on both thrips nymphs and adults.
  //     `,
  //     `
  //     Tussock Caterpillar:
  //     Cultural Method: There is no specific cultural method for managing Tussock Caterpillars.
  //     Chemical Method: Use Supreme IT Insecticide to treat your yard and ornamentals.
  //     Biological Method: There is no specific biological method mentioned for managing Tussock Caterpillars in the provided information.
  //     `,
  //     `
  //     Shoot Borer:
  //     Cultural Methods: Remove affected terminal shoots and fruits.\n- Avoid continuous cropping of brinjal crop.\n- Grow varieties with resistance to shoot borer.\n- Encourage the activity of larval parasitoids.
  //     Chemical Methods: Use Neem Seed Kernel Extract (NSKE) or other recommended chemicals at specific intervals.
  //     Biological Methods: There is no specific biological method for managing shoot borers.
  //     `
  //   ];

  //   return textSuggestions[index] || 'Text not found';
  // };

  const handleSuggestionsChange = (event) => {
    setSelectedIndex(event.target.value);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImagePreview(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData
      );
      setResult(response.data.predictions);
      setMaxValueIndex(calculateMaxValueIndex(response.data.predictions));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <Sidebar /> {/* Import and render the Sidebar component here */}
      <div className="w-[80%] flex flex-col items-center my-16">
        <div>
          <h1 className="outfit-600 text-[28px] text-center">Prediction</h1>
        </div>
        <div className="flex items-center w-[80%] mt-4 mb-8">
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            type="file"
            onChange={handleFileSelect}
          />
          <button
            onClick={handleSubmit}
            className="ml-2 bg-black text-white px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        </div>
        {selectedImagePreview && (
          <div>
            <img
              src={selectedImagePreview}
              alt="Selected Image"
              className="w-96 mt-4"
            />
          </div>
        )}
        <div className="outfit-300 mt-8 px-16">
          <div>
          <span className="outfit-500">Predictions: </span>{" "}
          {formatPredictions(result)}
          </div>
         
       

        {maxValueIndex !== null && (
          <div className="outfit-300 space-y-2 mt-4">
            <h1>
              {" "}
              <span className="outfit-500">Max Value Index: </span>{" "}
              {maxValueIndex}
            </h1>
            <h3>
              {" "}
              <span className="outfit-500">Max Value Name: </span>{" "}
              {getPredictedName(maxValueIndex)}
            </h3>
            <div className="space-y-2">
              <div className="outfit-500">Suggestions</div>
              <div className="whitespace-pre">
                <h1 className="outfit-500">Cultural Method: </h1>
                {content[maxValueIndex]["Cultural Method"]}
              </div>
              <div>
                <span className="outfit-500">Chemical Method: </span>
                {content[maxValueIndex]["Chemical Method"]}
              </div>
              <div>
                <span className="outfit-500">Biological Method: </span>
                {content[maxValueIndex]["Biological Method"]}
              </div>
              {content[maxValueIndex]["Wood Treatment"] !== ""? ( <div>
                <span className="outfit-500">Wood Treatment: </span>
                {content[maxValueIndex]["Wood Treatment"]}
              </div>):("")}
             
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default Anomalies;
