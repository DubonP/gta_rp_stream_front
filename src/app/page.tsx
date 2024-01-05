export default function Home() {
  return (
    <div>
      <iframe
        src="https://player.twitch.tv/?channel=gaules&parent=http://localhost:3000"
        frameBorder="0"
        allowFullScreen={true}
        scrolling="no"
        height="378"
        width="620"
      ></iframe>
    </div>
  );
}
