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

    updateBody = async val => {
        await this.setState({ text: val })
        this.update()
    }

    update = debounce( () => {
        // Come back later
        console.log('UPDATING DATABASE')
    }, 1500)

    render() {
        const { classes } = this.props
        return (
            <div className={classes.editorContainer}>
                <ReactQuill
                    value={this.state.text}
                    onChange={this.updateBody}
                >
                </ReactQuill>
            </div>
        )
    }
}

export default withStyles(styles)(Editor)