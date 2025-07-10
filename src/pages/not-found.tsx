import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="font-bold text-2xl">Page Not Found</h1>

      <Link className="underline" to="/">
        Go to Home
      </Link>
    </div>
  );
}
