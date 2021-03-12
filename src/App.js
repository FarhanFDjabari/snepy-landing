import { BrowserRouter, Route } from 'react-router-dom';
import './css/App.css';
import Landing from './pages/Landing';
import GlobalStyle from './theme/GlobalStyle';


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Route exact path="/" component={Landing} />
    </BrowserRouter>
  );
}

export default App;
