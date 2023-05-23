import { useEffect } from 'react';
import connectToDatabase from './mongodb';

export default function Home() {
  useEffect(() => {
    connectToDatabase();
  }, []);

  return (
    <div>
    </div>
  );
}
