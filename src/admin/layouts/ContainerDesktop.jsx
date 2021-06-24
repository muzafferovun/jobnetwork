import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AdminMenu from './AdminMenu';
import { Route } from 'react-router';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';



import Typography from '@material-ui/core/Typography';

import SendIcon from '@material-ui/icons/Send';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SchoolIcon from '@material-ui/icons/School';
import { Link, NavLink, useHistory } from 'react-router-dom';

import MainIndex from '../moduls/main/MainIndex';
import HomeIcon from '@material-ui/icons/Home';
import LanguageIcon from '@material-ui/icons/Language';
import SchoolMain from '../moduls/school/SchoolMain';
import WorkTypeMain from '../moduls/worktype/WorkTypeMain';
import JobPropertieMain from '../moduls/jobPropertie/JobPropertieMain';
import SectorMain from '../moduls/sector/SectorMain';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function ContainerDesktop() {
  const classes = useStyles();

  const [activeModul, setActiveModul] = useState("");
  function openModule(modulname) {
    setActiveModul(modulname)

  }
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <MenuList style={{ width: "100%" }}>
              <MenuItem>
                <HomeIcon fontSize="small" />
                <Typography variant="inherit" style={{ marginLeft: "5px" }} onClick={() => openModule("")}>Home</Typography>
              </MenuItem>
            </MenuList>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography className={classes.heading}>Settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <MenuList style={{ width: "100%" }}>
                  <MenuItem>
                    <SchoolIcon>
                      <SendIcon fontSize="small" />
                    </SchoolIcon>
                    <Typography variant="inherit" style={{ marginLeft: "8px" }} onClick={() => openModule("school")}>Schooll</Typography>
                  </MenuItem>

                  <MenuItem>

                    <LanguageIcon fontSize="small" />

                    <Typography variant="inherit" style={{ marginLeft: "8px" }} onClick={() => openModule("worktype")}>Work Types</Typography>
                  </MenuItem>
                  <MenuItem>

                    <LanguageIcon fontSize="small" />

                    <Typography variant="inherit" style={{ marginLeft: "8px" }} onClick={() => openModule("jobPropertie")}>Job Position Properties</Typography>
                  </MenuItem>
                  <MenuItem>

                    <LanguageIcon fontSize="small" />

                    <Typography variant="inherit" style={{ marginLeft: "8px" }} onClick={() => openModule("sector")}>Sectors</Typography>
                  </MenuItem>
                </MenuList>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            {activeModul === "school" && <SchoolMain />}
            {activeModul === "worktype" && <WorkTypeMain />}
            {activeModul === "jobPropertie" && <JobPropertieMain />}
            {activeModul === "sector" && <SectorMain />}
             {activeModul === "" && <MainIndex />}
          
          </Paper>

        </Grid>
      </Grid>
    </div>
  );
}