
   

import React, { useState } from 'react'
import MainPage from './pages/MainPage'

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AddForm from './pages/AddForm';
import ListItems from './pages/ListItems';
import HomeIcon from '@material-ui/icons/Home';

let modulCaption="Schooll";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});
function handleModulMenuClick(event) {
    event.preventDefault();
}
export default function SchoolMain() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                    <ListItem button  onClick={()=>openModuleAction("","")}>
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <ListItemText primary={modulCaption} />
                    </ListItem>
            </List>
            <List>
                    <ListItem button  onClick={()=>openModuleAction("new","New Schooll")}>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary={"New Schooll"} />
                    </ListItem>
            </List>
            <List>
                    <ListItem button  onClick={()=>openModuleAction("list","List Schoolls")}>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary={"List Schoolls"} />
                    </ListItem>
            </List>
         </div>
    );
    const [activeModulAction, setActiveModulAction] = useState("");
    const [activeModulActionCaption, setActiveModulActionCaption] = useState("");
    function openModuleAction(actionName, actionCaption) {
        setActiveModulAction(actionName)
        setActiveModulActionCaption(actionCaption)

    }
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
            <Typography color="textPrimary">{modulCaption}</Typography>

                <React.Fragment key={'right'}>
                    <Button onClick={toggleDrawer('right', true)}>Actions</Button>
                    <SwipeableDrawer
                        anchor={'right'}
                        open={state['right']}
                        onClose={toggleDrawer('right', false)}
                        onOpen={toggleDrawer('right', true)}
                    >
                        {list('right')}
                    </SwipeableDrawer>
                </React.Fragment>
                <Typography color="textPrimary">{activeModulActionCaption}</Typography>
            </Breadcrumbs>
            {activeModulAction === "new" && <AddForm pageAction={setActiveModulAction}/>}
           {activeModulAction === "list" && <ListItems pageAction={setActiveModulAction}/>}
            {activeModulAction === "" && <MainPage />}
        </div>

    )
}
