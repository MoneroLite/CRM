import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/routes/AppRouter';
import HomePage from './pages/home';
import { store } from './store/store';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
          {/* <HomePage /> */}
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
