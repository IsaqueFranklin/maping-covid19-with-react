import './App.css';
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline} from '@material-ui/core'
import GlobalStyle from './commons/styles/global.style'
import Main from './containers/Main/index'

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <div>
        <Main />
      </div>
    </StylesProvider>
  );
}

export default App;
