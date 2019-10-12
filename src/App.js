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

  noteUpdate = (id, noteObj) => {
    console.log(id, noteObj)
  }

  selectNote = (note, index) => {
    this.setState({
      selectedNoteIndex: index,
      selectedNote: note
    })
  }

  render() {
    const { selectedNote, selectedNoteIndex, notes } = this.state
    return (
      <div className="app-container">
        <Sidebar
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote}
        />
        {
          this.state.selectedNote
            ? <Editor
                selectedNote={selectedNote}
                selectedNoteIndex={selectedNoteIndex}
                notes={notes}
                noteUpdate={this.noteUpdate}
              />
            : null
        }
      </div>
    )
  }
}

export default App;
