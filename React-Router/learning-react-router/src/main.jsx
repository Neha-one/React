import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './router/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreatePost from './component/CreatePost.jsx';
import PostList from './component/PostList.jsx';
import { postLoader } from './component/PostList.jsx';
import { postAction } from './component/CreatePost.jsx';
const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { path: "/", element: <PostList />, loader: postLoader },
      { path: "create-post", element: <CreatePost />, action: postAction }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

