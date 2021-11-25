import styles from './App.module.css';
import theme from '../../theme/MuiTheme.js'
import { ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import AuthCard from '../AuthCard/AuthCard.js';

import configureStore from '../../store/store.js';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className={styles.App}>
        <ThemeProvider theme={theme}>
            <AuthCard/>
        </ThemeProvider>
      </div>
    </Provider>
  );
}

export default App;
