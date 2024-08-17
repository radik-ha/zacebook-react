import Header from "./components/Header";
import Post from "./components/Post";
import posts from "./meta/posts.json";
import "./styles/App.css";

function App() {
  return (
    <div id="app">
      <Header/>
      {
        posts.map(post=>{
          return <Post key={post.key} imglink={post.imglink} caption={post.caption} alt = ""/>
        })
      }
    </div>
  );
}

export default App;
