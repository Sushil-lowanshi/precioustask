import TodoApp from "./components/TodoApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Info from "./components/Info";
import Task from "./components/Task";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TodoApp />} />
            <Route path="/task" element={<Task />} />
            <Route path="/info" element={<Info />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
