import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";
const App: React.FC  = () =>  {
  return (
    <div>

    <Router>
      <div>
        <div>
          <NavLink to="/users">Пользователи</NavLink>
          <NavLink to="/todos">Список дел</NavLink>
        </div>
        <Route path={"/users"} exact>
          <UsersPage />
        </Route>
        <Route path={"/todos"} exact>
          <TodosPage />
        </Route>
        <Route path={"/users/:id"}>
          <UserItemPage />
        </Route>
        <Route path={"/todos/:id"}>
          <TodoItemPage />
        </Route>
      </div>
    </Router>
    </div>
  );
}

export default App;
