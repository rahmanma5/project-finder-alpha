import * as React from 'react';
import '../css/App.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';

class App extends React.Component {
  public render() {
    return (

      <AppBar position="fixed" style={{backgroundColor: "#2196F3"}}>
          <Toolbar>
              <Typography variant="title" style={{color: "white", flex: 1 }} >
              [ x ] Foot in the Door
              </Typography>
              <div style={{alignContent: "right", alignItems: "right", alignSelf: "right"}}>
              <Button style={{alignContent: "right", color: "white"}}>Login</Button>
              </div>
          </Toolbar>
      </AppBar>
      
    );
  }
}

export default App;
