import React, { useContext, useEffect, useState } from 'react';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import themes from './styles/themes';

class App extends React.Component {
  state = {
    changed: false,
  };

  componentDidMount() {
    console.log('componentDidMount executed');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", {
      currentState: this.state,
      prevProps,
      prevState
    });
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch", { error, info });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentDidUpdate", {
      currentState: this.state,
      nextProps,
      nextState
    });

    return false;
  }

  handleChanged() {
    this.setState((prevState) => ({
      changed: prevState.changed === false ? true : false
    }));
  }

  render() {
    console.log("rendered");

  return (
    <ThemeProvider>


      <ThemeContext.Consumer>
        {({ theme, handleToggleTheme }) => (
          <StyledThemeProvider theme={themes[theme] || themes.dark}>
            {/* <button onClick={handleToggleTheme}>
                Change state
              </button> */}
            <GlobalStyle />
            <Layout />
          </StyledThemeProvider>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
  }
}

export default App;
