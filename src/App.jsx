import Home from "./pages/Home";
import MusicPlayer from "./components/MusicPlayer";
import { MusicProvider } from "./context/MusicContext";

function App() {
  return (
    <MusicProvider>
      <Home />
      <MusicPlayer />
    </MusicProvider>
  );
}

export default App;