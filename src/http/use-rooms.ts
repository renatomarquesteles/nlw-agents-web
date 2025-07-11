import { useQuery } from '@tanstack/react-query';
import type { GetRoomsResponse } from './types/get-rooms-response';

export function useRooms() {
  return useQuery({
    queryKey: ['get-rooms'],
    queryFn: () => {
      return fetch('http://localhost:3333/rooms').then((res) =>
        res.json()
      ) as Promise<GetRoomsResponse>;
    },
  });
}
