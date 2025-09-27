import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import "./FacialExpression.css";
import axios from "axios";

export default function FacialExpression({ setSongs, setLoading }) {
  const videoRef = useRef();
  const [mood, setMood] = useState("Unknown");

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
    setLoading(true);
    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
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

    try {
      const response = await axios.get(
        `https://moodio-nq45.onrender.com/songs?mood=${_expression}`
      );
      setSongs(response.data.song);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadModels().then(startVideo);
  }, []);

  return (
    <div className="mood-container">
      <div className="songs-header">
        <h1>
          <span className="highlight">Moodio</span>
        </h1>
        <p className="subtitle">🎵 Music that matches your vibe instantly</p>
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
