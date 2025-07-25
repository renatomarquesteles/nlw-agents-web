import { useRoomQuestions } from '@/http/use-room-questions';
import { QuestionItem } from './question-item';

interface QuestionListProps {
  roomId: string;
}

export function QuestionList({ roomId }: QuestionListProps) {
  const { data: questions } = useRoomQuestions(roomId);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl text-foreground">
          Questions & Answers
        </h2>
      </div>

      {questions?.map((question) => (
        <QuestionItem key={question.id} question={question} />
      ))}
    </div>
  );
}
