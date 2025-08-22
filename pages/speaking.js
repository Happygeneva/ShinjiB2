import { useState, useRef } from "react";

export default function Speaking() {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorderRef = useRef(null);
  const chunks = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = (e) => chunks.current.push(e.data);
    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunks.current, { type: "audio/mp3" });
      setAudioURL(URL.createObjectURL(blob));
      chunks.current = [];
    };
    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>🗣 Speaking</h1>
      <p>お題: 「あなたの趣味について1分間話してください。」</p>
      {!recording ? (
        <button onClick={startRecording}>🎙 録音開始</button>
      ) : (
        <button onClick={stopRecording}>⏹ 停止</button>
      )}
      {audioURL && (
        <div style={{ marginTop: 20 }}>
          <p>録音結果:</p>
          <audio src={audioURL} controls />
        </div>
      )}
    </div>
  );
}
