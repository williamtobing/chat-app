import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";

import "./App.scss";

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="106dd690-129f-4805-b52f-8c8976dbdc22"
      userName="william"
      userSecret="william"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
