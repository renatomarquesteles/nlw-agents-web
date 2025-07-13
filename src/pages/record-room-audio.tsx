import { useRef, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';

type RoomParams = {
  roomId: string;
};

export function RecordRoomAudio() {
  const { roomId } = useParams<RoomParams>();
  const [isRecording, setIsRecording] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);

  function stopRecording() {
    if (isRecording && mediaRecorder.current?.state === 'recording') {
      mediaRecorder.current?.stop();
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

    const data = await response.json();
    // biome-ignore lint/suspicious/noConsole: debug
    console.log(data);
  }

  async function startRecording() {
    setError(null);

    try {
      setIsRecording(true);

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      mediaRecorder.current = new MediaRecorder(stream);

      mediaRecorder.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          uploadAudio(event.data);
        }
      };

      mediaRecorder.current.onstart = () => setIsRecording(true);
      mediaRecorder.current.onstop = () => setIsRecording(false);

      mediaRecorder.current.start();
    } catch {
      setIsRecording(false);
      setError('Erro ao acessar o microfone. Verifique as permissões.');
    }
  }

  if (!roomId) {
    return <Navigate replace to="/" />;
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      {isRecording ? (
        <Button onClick={stopRecording}>Parar Gravação</Button>
      ) : (
        <Button onClick={startRecording}>Iniciar Gravação</Button>
      )}

      <p>{isRecording ? 'Gravando...' : 'Não gravando'}</p>

      {error && (
        <p className="max-w-md text-center text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
}
