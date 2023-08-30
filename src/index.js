import React ,{Children} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelpPage } from './pages/HelpPage';
import TodoList from './components/TodoList';
import TodoItemDetail from './components/TodoItemDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <TodoList />
      },
      {
        path: "/done",
        element: <TodoList isDone ={true}/>
      },
      {
        path: "/done/:id",
        element: <TodoItemDetail/>
      },
      {
        path: "/help",
        element: <HelpPage />
      }

    ]
  }
  
])
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

