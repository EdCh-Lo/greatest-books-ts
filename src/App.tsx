import { Route, Switch, Redirect } from "react-router-dom";

import AllBooks from "./pages/AllBooks";
import NewBook from "./pages/NewBook";
import BookDetail from "./pages/BookDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/books" />
        </Route>
        <Route path="/books" exact>
          <AllBooks />
        </Route>
        <Route path="/books/:bookId">
          <BookDetail />
        </Route>
        <Route path="/new-book">
          <NewBook />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
