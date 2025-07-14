import { useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === 'function' &&
  typeof window.MediaRecorder === 'function';

type RoomParams = {
  roomId: string;
};

export function RecordRoomAudio() {
  const { roomId } = useParams<RoomParams>();
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  function stopRecording() {
    setIsRecording(false);

    if (mediaRecorder.current?.state !== 'inactive') {
      mediaRecorder.current?.stop();
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }

  async function uploadAudio(audioBlob: Blob) {
    const formData = new FormData();
    formData.append('audio', audioBlob);

    const response = await fetch(
      `http://localhost:3333/rooms/${roomId}/audio`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('Failed to upload audio');
    }
  }

  function createRecorder(audio: MediaStream) {
    mediaRecorder.current = new MediaRecorder(audio, {
      mimeType: 'audio/webm',
      audioBitsPerSecond: 64_000,
    });

    mediaRecorder.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        uploadAudio(event.data);
      }
    };

    mediaRecorder.current.start();
  }

  async function startRecording() {
    if (!isRecordingSupported) {
      alert('This browser does not support recording');
      return;
    }

    setIsRecording(true);

    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    });

    createRecorder(audio);

    intervalRef.current = setInterval(() => {
      mediaRecorder.current?.stop();

      createRecorder(audio);
    }, 5000);
  }

  if (!roomId) {
    return <Navigate replace to="/" />;
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      {isRecording ? (
        <Button
          className="bg-red-500 text-white hover:bg-red-600"
          onClick={stopRecording}
        >
          Stop Recording
        </Button>
      ) : (
        <Button
          className="bg-blue-500 text-white hover:bg-blue-600"
          onClick={startRecording}
        >
          Start Recording
        </Button>
      )}

      {isRecording ? (
        <p className="max-w-md text-center text-sm">Recording...</p>
      ) : (
        <p className="max-w-md text-center text-sm">Not recording</p>
      )}

      <Link className="text-blue-500 text-sm" to={`/room/${roomId}`}>
        Back to room
      </Link>
    </div>
  );
}
