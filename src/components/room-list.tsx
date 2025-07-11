import { ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRooms } from '@/http/use-rooms';
import { dayjs } from '@/lib/dayjs';
import { Badge } from './ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

export function RoomList() {
  const { data, isLoading } = useRooms();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Rooms</CardTitle>
        <CardDescription>Quick access to recent rooms</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {isLoading ? (
          <div className="flex items-center justify-center gap-2">
            <Loader2 className="size-4 animate-spin text-muted-foreground" />
            <span className="text-muted-foreground text-sm">
              Loading rooms...
            </span>
          </div>
        ) : (
          data?.map((room) => (
            <Link
              className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/50"
              key={room.id}
              to={`/room/${room.id}`}
            >
              <div className="flex flex-1 flex-col gap-1">
                <h3 className="font-medium">{room.name}</h3>
                <div className="flex items-center gap-2">
                  <Badge className="text-xs" variant="secondary">
                    {dayjs(room.createdAt).fromNow()}
                  </Badge>
                  <Badge className="text-xs" variant="secondary">
                    {room.questionCount} questions
                  </Badge>
                </div>
              </div>
              <span className="flex items-center gap-1 text-muted-foreground text-sm">
                Join
                <ArrowRight className="size-3" />
              </span>
            </Link>
          ))
        )}
      </CardContent>
    </Card>
  );
}
