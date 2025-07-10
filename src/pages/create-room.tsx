import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

type GetRoomsAPIResponse = Array<{
  id: string;
  name: string;
}>;

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: () => {
      return fetch('http://localhost:3333/rooms').then((res) =>
        res.json()
      ) as Promise<GetRoomsAPIResponse>;
    },
  });

  return (
    <div>
      {isLoading && <div>Loading...</div>}

      <div className="flex flex-col gap-1">
        {data?.map((room) => (
          <Link className="underline" key={room.id} to={`/room/${room.id}`}>
            {room.name}
          </Link>
        ))}
      </div>

      <Link className="underline" to="/room">
        Access Room
      </Link>
    </div>
  );
}
