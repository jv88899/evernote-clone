import React, { Component } from 'react';
import Editor from './components/editor/Editor'
import Sidebar from './components/sidebar/Sidebar'
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
      <div className="app-container">
        <Sidebar
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
        />
        <Editor />
      </div>
    )
  }
}

export default App;
