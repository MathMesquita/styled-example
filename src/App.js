import React, { Component } from 'react';

import styled, { ThemeProvider } from 'styled-components';

import Score from './components/Score';
import PasswordInput from './components/PasswordInput';
import Title from './components/Title';
import Button from './components/Button';

import zxcvbn from 'zxcvbn';

const Wrapper = styled.div`
  width: 300px;
  height: 500px;
  margin: 0 auto;
  margin-top: 50px;
`

class App extends Component {
  state = {
    passwordStrength: 0,
    fetchingTheAPI: false
  }

  render() {
    return (
      <ThemeProvider theme={{
        primaryColor: '#248888',
        textColor: '#222',
        button: {
          bgColor: '#F7B733',
          textColor: '#222'
        },
        passwordStrength: [ '#E62739', '#FC4A1A', '#F7B733', '#4ABDAC' ]
      }}>
        <Wrapper>
          <Title>Meu formulário</Title>
          <PasswordInput 
            onChange={e => this.setState({
              passwordStrength: zxcvbn(e.target.value).score
            })}
            showPassword={true}
          />
          <Score score={this.state.passwordStrength} />
          <Button 
            loading={this.state.fetchingTheAPI}
            onClick={this.sendRequest}
          >Enviar</Button>
        </Wrapper>
      </ThemeProvider>
    );
  }

  sendRequest = () => {
    this.setState({
      fetchingTheAPI: true
    })

    setTimeout(() => {
      this.setState({
        fetchingTheAPI: false
      })
    }, 3000)
  }
}

export default App;