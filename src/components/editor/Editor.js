import React, { Component } from 'react'
import ReactQuill from 'react-quill'
import debounce from '../../helpers'
import BorderColorIcon from '@material-ui/icons/BorderColor'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

class Editor extends Component {
    state = {
        text: '',
        title: '',
        id: ''
    }

    componentDidMount = () => {
        this.setState({
            text: this.props.selectedNote.body,
            title: this.props.selectedNote.title,
            id: this.props.selectedNote.id
        })
    }

    componentDidUpdate = () => {
        if (this.props.selectedNote.id !== this.state.id) {
            this.setState({
                text: this.props.selectedNote.body,
                title: this.props.selectedNote.title,
                id: this.props.selectedNote.id
            })
        }
    }

    update = debounce( () => {
        this.props.noteUpdate(this.state.id, {
            title: this.state.title,
            body: this.state.text
        })
    }, 1500)

    updateBody = async val => {
        await this.setState({ text: val })
        this.update()
    }

    render() {
        const { classes } = this.props
        const { text } = this.state
        return (
            <div className={classes.editorContainer}>
                <ReactQuill
                    value={text}
                    onChange={this.updateBody}
                >
                </ReactQuill>
            </div>
        )
    }
}

export default withStyles(styles)(Editor)