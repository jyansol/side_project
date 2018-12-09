import React, { Component } from 'react';
import './App.css';
import Avatar from './Avatar';
import Input from './Input';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: null,
      profile: [],
    };
  }

  handleGithub(e) {
    const infos = {};
    const github = `https://api.github.com/users/${userId}`;
    fetch(github)
      .then((blob) => blob.json())
      .then((data) => (infos = data));
    this.setState({
      userId: e.target.value,
    });
  }

  render() {
    return (
      <>
        {/* <Input onChange=/> */}
        <Avatar {...this.props} />
      </>
    );
  }
}

export default App;
