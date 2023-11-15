import React, { useState, useEffect } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../store/features/audioSlice";

export default function Lessons() {
  const recorderControls = useAudioRecorder();
  const [audios, setAudios] = useState([]);
  const audio = useSelector((state) => state.audio && state.audio.blob);
  const dispatch = useDispatch();
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    setAudios([...audios, blob]);
    dispatch("audio/add");
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.getElementById("recordaudio").appendChild(audio);
  };
  const loadAudios = () => {
    return audios.map((item) => {
      const url = URL.createObjectURL(item);
      // setAudios([...audios,url]);
      const audio = document.createElement("audio");
      audio.src = url;
      audio.controls = true;
      document.getElementById("recordaudio").appendChild(audio);
    });
  };
  useEffect(() => {
    if (audios.length < 1) loadAudios();
  }, [audios]);
  return (
    <div className="m-20">
      <h1 className="text-2xl font-bold text-center align-items-center">
        Lessons
      </h1>
      <div className="grid grid-cols-2">
        <div>
          <div className="border-dotted border-2 h20 text-center align-items-center">
            Upload PDF,PPT,Text Content
          </div>
        </div>
        <div>
          Record Session
          <button className="bg-pink-300 hover:bg-pink-400 border-2 rounded-md m-2 p-2">
            Audio
          </button>
          <AudioRecorder
            onRecordingComplete={(blob) => addAudioElement(blob)}
            recorderControls={recorderControls}
            audioTrackConstraints={{
              noiseSuppression: true,
              echoCancellation: true,
            }}
            // downloadOnSavePress={true}
            downloadFileExtension="mp3"
          />
          <br />
          <button onClick={recorderControls.stopRecording}>
            Stop recording
          </button>
          <button className="bg-pink-300 hover:bg-pink-400 border-2 rounded-md m-2 p-2">
            Video
          </button>
          <div>
            <div id="recordaudio"></div>
            <div id="recordvideo"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
