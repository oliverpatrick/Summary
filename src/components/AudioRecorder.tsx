import React, { useState, useEffect, useRef } from "react";
import Button from "./Button/Button";

interface AudioRecorderProps {}

const AudioRecorder: React.FC<AudioRecorderProps> = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [audioDevices, setAudioDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>("");

  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const stream = useRef<MediaStream | null>(null);

  useEffect(() => {
    const getUserDevices = async () => {
      // Check if its supported on the device.
      if(!navigator.mediaDevices) return;

      // Get permission & user devices.
      await navigator.mediaDevices.getUserMedia({audio: true});   
      const devices = await navigator.mediaDevices.enumerateDevices();

      // TODO: Tidy this up, devices.length == 2 even when 0 devices are found
      // this is the reason for the || => I think that works better?
      if(devices.length <= 0 || devices[0].deviceId.length === 0) return;
      
      setAudioDevices(devices);
      setSelectedDeviceId(devices[0].deviceId);  
    };

    getUserDevices();
  }, []);

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: { deviceId: selectedDeviceId } })
      .then((mediaStream) => {
        setIsRecording(true);
        stream.current = mediaStream;
        mediaRecorder.current = new MediaRecorder(mediaStream);
        mediaRecorder.current.addEventListener(
          "dataavailable",
          handleDataAvailable
        );
        mediaRecorder.current.start();
      })
      .catch((err) => console.error("Error recording audio: ", err));
  };

  const stopRecording = () => {
    setIsRecording(false);
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.addEventListener("dataavailable", (event) => {
        setAudioChunks((audioChunks) => [...audioChunks, event.data]);
      });
      mediaRecorder.addEventListener("stop", () => {
        const blob = new Blob(audioChunks, { type: "audio/wav" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "recorded_audio.wav");
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
      mediaRecorder.stop();
    });
  };

  const handleDataAvailable = (event: BlobEvent) => {
    if (event.data.size > 0) {
      setAudioChunks((audioChunks) => [...audioChunks, event.data]);
    }
  };

  // const handleSave = () => {
  //   const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
  //   const audioUrl = URL.createObjectURL(audioBlob);
  //   const audio = new Audio(audioUrl);
  //   audio.play();
  // };

  const handleDeviceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDeviceId(event.target.value);
  };

  return (
    <div>
      <select value={selectedDeviceId} onChange={handleDeviceChange}>
        {audioDevices.map((device) => (
          <option key={device.deviceId} value={device.deviceId}>
            {device.label}
          </option>
        ))}
      </select>
      {isRecording ? (
        <Button
          btnType="button"
          onClick={stopRecording}
          text="Stop Recording"
        ></Button>
      ) : (
        <Button
          btnType="button"
          onClick={startRecording}
          text="Start Recording"
        ></Button>
      )}
      {/* <button onClick={handleSave} disabled={!audioChunks.length}>
        Save Audio
      </button> */}
    </div>
  );
};

export default AudioRecorder;
