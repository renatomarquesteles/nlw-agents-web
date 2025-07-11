import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateQuestionRequest } from './types/create-question-request';
import type { CreateQuestionResponse } from './types/create-question-response';

export function useCreateQuestion(roomId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ question }: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question }),
        }
      );

      return response.json() as Promise<CreateQuestionResponse>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-room-questions', roomId],
      });
    },
  });
}
