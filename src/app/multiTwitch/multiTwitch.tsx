// components/StreamerStatus.tsx
import { useEffect, useState } from "react";
import axios from "axios";

interface StreamerStatusProps {
  streamerName: string;
}

const StreamerStatus: React.FC<StreamerStatusProps> = ({ streamerName }) => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const checkStreamerStatus = async () => {
      try {
        const clientId = "SEU_CLIENT_ID"; // Substitua pelo seu Client ID
        console.log(clientId);
        const response = await axios.get(
          `https://api.twitch.tv/helix/streams?user_login=${streamerName}`,
          {
            headers: {
              "Client-ID": clientId,
            },
          }
        );

        setIsOnline(response.data.data.length > 0);
      } catch (error) {
        console.error("Erro ao obter status do streamer:", error);
      }
    };

    checkStreamerStatus();
  }, [streamerName]);

  return (
    <div>
      <p>
        O streamer {streamerName} está {isOnline ? "online" : "offline"}.
      </p>
    </div>
  );
};

// Comentário especial para indicar que este é um componente do cliente no Next.js
// @ts-ignore
StreamerStatus.__client = true;

export default StreamerStatus;
