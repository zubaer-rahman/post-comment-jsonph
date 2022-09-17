import './App.css';
import Posts from './components/Posts/Posts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PostDetail from './components/PostDetail/PostDetail';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post" element={<Posts />} />
        <Route path="/post/:post_id" element={<PostDetail />} />
        <Route path="*" element={<NotFound />} />

         
      </Routes>
    </Router>
    </div>
  );
}

export default App;
