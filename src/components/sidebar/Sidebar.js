import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import List from '@material-ui/core/List'
import { Divider, Button } from '@material-ui/core'
import SidebarItem from '../sidebarItem/SidebarItem'

class Sidebar extends Component {
    render() {
        return (
            <div>
                Hello from Sidebar
            </div>
        )
    }
}

export default withStyles(styles)(Sidebar)