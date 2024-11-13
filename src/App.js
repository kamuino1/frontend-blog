import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;

// function Posts() {
//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Blog</h2>
//       <Outlet />
//     </div>
//   );
// }
// function PostLists() {
//   return (
//     <ul>
//       {Object.entries(BlogPosts).map(([slug, { title }]) => (
//         <li key={slug}>
//           <Link to={`/posts/${slug}`}>
//             {" "}
//             <h3>{title}</h3>{" "}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

// function Post() {
//   const { slug } = useParams();
//   const post = BlogPosts[slug];
//   if (!post) {
//     return <span>The blog post you've requested doesn't exist.</span>;
//   }
//   const { title, description } = post;
//   return (
//     <div style={{ padding: 20 }}>
//       {" "}
//       <h3>{title}</h3> <p>{description}</p>{" "}
//     </div>
//   );
// }

// function Stats({ user }) {
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }
//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Stats View</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
//     </div>
//   );
// }

// function Login({ onLogin }) {
//   const [creds, setCreds] = useState({});
//   const navigate = useNavigate();
//   function handleLogin() {
//     // For demonstration purposes only.
//     if (creds.username === "admin" && creds.password === "123") {
//       onLogin && onLogin({ username: creds.username });
//       navigate("/stats");
//     }
//   }
//   return (
//     <div style={{ padding: 10 }}>
//       {" "}
//       <br />
//       <span>Username:</span>
//       <br />
//       <input
//         type="text"
//         onChange={(e) => setCreds({ ...creds, username: e.target.value })}
//       />
//       <br />
//       <span>Password:</span>
//       <br />
//       <input
//         type="password"
//         onChange={(e) => setCreds({ ...creds, password: e.target.value })}
//       />
//       <br />
//       <br />
//       <button onClick={handleLogin}>Login</button>{" "}
//     </div>
//   );
// }
