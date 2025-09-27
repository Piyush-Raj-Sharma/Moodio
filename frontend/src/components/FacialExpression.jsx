import React, { use, useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import "./FacialExpression.css";
import axios from "axios";

export default function FacialExpression({setSongs}) {
  const videoRef = useRef();
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

        let mostProbleExpression = 0;
        let _expression = '';

        if(!detections || detections.length == 0 ){
            console.log("No face detected");
            
        };
        
        for (const expression of Object.keys(detections[0].expressions)){
            if(detections[0].expressions[expression] > mostProbleExpression){
                mostProbleExpression = detections[0].expressions[expression];
                _expression = expression; 
            }
        }
        
        axios.get(`http://localhost:3000/songs?mood=${_expression}`)
        .then(response => {
          console.log(response.data);
          setSongs(response.data.song);
        })
    };

    useEffect(() => {
      loadModels().then(startVideo);
    }, []);
    // videoRef.current &&
    //   videoRef.current.addEventListener("play", handleVideoPlay);

  return (
    <div className="mood-element">
      <video
        ref={videoRef}
        autoPlay
        muted
        className="user-video-feed"
      />
      <button className = "detect-btn" onClick={detectMood}>Detect Mood</button>
    </div>
  );
}

