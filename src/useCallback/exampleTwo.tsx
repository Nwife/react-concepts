import { useEffect, useState, useCallback } from "react";

function ChatRoom({ roomId }: {roomId: string}) {
    const [message, setMessage] = useState<string>('');
  
    const createOptions = useCallback(() => {
      return {
        serverUrl: 'https://localhost:1234',
        roomId: roomId
      };
    }, [roomId]); // ✅ Only changes when roomId changes
  
    useEffect(() => {
      const options = createOptions();
      //@ts-ignore
      const connection = createConnection();
      connection.connect();
      return () => connection.disconnect();
    }, [createOptions]); 
}