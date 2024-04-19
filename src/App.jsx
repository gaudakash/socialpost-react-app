import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import PostListProvider from "./store/Post-List-store";
import { useState } from "react";

function App() {
  const [SelctedTAb, setSelctedTab] = useState("");
  return (
    <PostListProvider>
      <div className="Main-Container">
        <Sidebar SelctedTAb={SelctedTAb} setSelctedTab={setSelctedTab} />
        <div className="Content">
          <Header />
          {SelctedTAb === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
