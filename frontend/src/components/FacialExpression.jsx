import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import "./FacialExpression.css";
import axios from "axios";

export default function FacialExpression({ setSongs }) {
  const videoRef = useRef();
  const [mood, setMood] = useState("Neutral");

  const loadModels = async () => {
    const MODEL_URL = "/models";
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Error accessing webcam: ", err));
  };

  const detectMood = async () => {
    const detections = await faceapi
      .detectAllFaces(
        videoRef.current,
        new faceapi.TinyFaceDetectorOptions()
      )
      .withFaceExpressions();

    if (!detections || detections.length === 0) {
      setMood("No face detected");
      return;
    }

    let mostProbableExpression = 0;
    let _expression = "";

    for (const expression of Object.keys(detections[0].expressions)) {
      if (detections[0].expressions[expression] > mostProbableExpression) {
        mostProbableExpression = detections[0].expressions[expression];
        _expression = expression;
      }
    }

    setMood(_expression);

    axios
      .get(`https://moodio-nq45.onrender.com/songs?mood=${_expression}`)
      .then((response) => {
        setSongs(response.data.song);
        console.log(response.data);
        
      });
  };

  useEffect(() => {
    loadModels().then(startVideo);
  }, []);

  return (
    <div className="mood-container">
      <div className="header">
        <h2>Facial Expression Detector</h2>
      </div>

      <div className="mood-card">
        <video ref={videoRef} autoPlay muted className="user-video-feed" />
        <div className="mood-info">
          <p className="label">Detected Mood</p>
          <p className="value">{mood}</p>
          <button className="detect-btn" onClick={detectMood}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}
