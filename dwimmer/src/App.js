import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './pages/home';
import Admin from './pages/admin';

function App() {
  return (
    // <ApolloProvider client={client}>
      <Router>
        <div>
          {/* <StoreProvider> */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/admin" element={<Admin />} />
            </Routes>
          {/* </StoreProvider> */}
        </div>
      </Router>
    // </ApolloProvider>
  );
}

export default App;
