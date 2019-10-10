import React, { Component } from 'react';
import firebase from 'firebase/app'
import './App.css';

class App extends Component {
  state = {
    selectedNoteIndex: null,
    selectedNote: null,
    notes: null
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map( doc => {
          const data = doc.data()
          data['id'] = doc.id
          return data
        })
        console.log(notes)
        this.setState({ notes: notes})
      })
  }

  render() {
    return (
      <div>
        Hello world
      </div>
    )
  }
}

export default App;
