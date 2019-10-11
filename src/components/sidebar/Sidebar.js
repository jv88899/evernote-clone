import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import List from '@material-ui/core/List'
import { Divider, Button } from '@material-ui/core'
import SidebarItem from '../sidebarItem/SidebarItem'

class Sidebar extends Component {
    state = {
        addingNote: false,
        title: null
    }

    deleteNote = () => {
        console.log('delete note')
    }

    newNoteBtnClick = () => {
        this.setState({
            addingNote: !this.state.addingNote,
            title: null
        })
        console.log('NEW BTN CLICKED')
    }

    newNote = () => {
        console.log(this.state)
    }

    selectNote = () => {
        console.log('select note')
    }

    updateTitle = txt => {
        this.setState({ title: txt })
    }

    render() {
        const { notes, classes, selectedNoteIndex } = this.props

        if (notes) {
            return (
                <div className={classes.sidebarContainer}>
                    <Button
                        className={classes.newNoteBtn}
                        onClick={this.newNoteBtnClick}
                    >
                        {this.state.addingNote ? 'Cancel' : 'New Note'}
                    </Button>
                    {
                        this.state.addingNote
                            ?
                            <div>
                                <input
                                    type='text'
                                    className={classes.newNoteInput}
                                    placeholder='Enter note title'
                                    onKeyUp={ e => this.updateTitle(e.target.value) }
                                >
                                </input>
                                <Button
                                    className={classes.newNoteSubmitBtn}
                                    onClick={this.newNote}
                                >
                                    Submit
                                </Button>
                            </div>
                            : null
                    }
                    <List>
                        {
                            notes.map( (note, index) => {
                                return (
                                    <div key={index}>
                                        <SidebarItem
                                            note={note}
                                            index={index}
                                            selectedNoteIndex={selectedNoteIndex}
                                            selectNote={this.selectNote}
                                            deleteNote={this.deleteNote}
                                        >
                                        </SidebarItem>
                                        <Divider></Divider>
                                    </div>
                                )
                            })
                        }
                    </List>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default withStyles(styles)(Sidebar)