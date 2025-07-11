import { useQuery } from '@tanstack/react-query';
import type { GetRoomQuestionsResponse } from './types/get-room-questions-response';

export function useRoomQuestions(roomId: string) {
  return useQuery({
    queryKey: ['get-room-questions', roomId],
    queryFn: () => {
      return fetch(`http://localhost:3333/rooms/${roomId}/questions`).then(
        (res) => res.json()
      ) as Promise<GetRoomQuestionsResponse>;
    },
  });
}
