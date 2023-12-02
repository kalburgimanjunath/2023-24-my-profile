import React, { useState, useEffect, Suspense, useRef } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../store/features/audioSlice";
const PdfViewerComponent = React.lazy(
  () => import("../components/PdfViewerComponent"),
);

export default function Lessons() {
  const recorderControls = useAudioRecorder();
  const [audios, setAudios] = useState([]);
  const audio = useSelector((state) => state.audio && state.audio.blob);
  const dispatch = useDispatch();
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    setAudios([...audios, blob]);
    // dispatch("audio/add");
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

  const [documentnewURL, setDocumentURL] = useState(
    "./Resume-manjunathkalburgi85.pdf",
  );
  const refURLDocument = useRef();
  const onChangeFileUpload = () => {
    setDocumentURL(refURLDocument.current.value);
  };
  useEffect(() => {
    if (audios.length < 1) loadAudios();
  }, [audios, documentnewURL]);
  return (
    <div className="m-20 absolute top-0 left-0 w-full">
      <h1 className="text-2xl font-bold text-center align-items-center">
        Lessons
      </h1>
      <div className="grid grid-cols-2">
        <div>
          <div className="border-dotted border-2 h20 text-center align-items-center">
            Upload PDF,PPT,Text Content
            <input
              type="file"
              ref={refURLDocument}
              onChange={onChangeFileUpload}
            />
          </div>
          <div>
            <div className="PDF-viewer">
              <Suspense fallback={<h1>Loading</h1>}>
                <PdfViewerComponent
                  document={documentnewURL ? documentnewURL : "./test.pdf"}
                />
              </Suspense>
            </div>
          </div>
        </div>
        <div className="m-2 p-3 bg-white border-2 rounded-lg">
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
