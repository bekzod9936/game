
import React, { useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';
import { UserContext } from '../../context/Results';
import {nanoid} from 'nanoid' ;
import CheckIcon from '@material-ui/icons/Check';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  useInfo: {
    backgroundColor: 'white',
    padding: '10px',
  }
}));

const UserResults = () => {
  const [stateResult, dispatchResult] = useContext(UserContext);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid xs={12} item className={classes.useInfo}>UserName: {stateResult.username} </Grid>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Level 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ol style={{listStylePosition: 'inside'}}>
            { 
                stateResult.l1.map(v => { return (<li key={nanoid()}>{v.num1}{' '}{v.sign === 1 ? '+' : v.sign === 2 ? '-' : '*'}{' '}{v.num2}={v.answer}{v.answer !== v.userAnswer ? <span style={{ color: 'red' }}>/({v.userAnswer})</span> : <span ><CheckIcon style={{color: 'green'}}  /></span> }</li>)})
            }
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Level 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ol style={{ listStylePosition: 'inside' }}>
              {
                stateResult.l2.map(v => { return (<li key={nanoid()}>{v.num1}{' '}{v.sign === 1 ? '+' : v.sign === 2 ? '-' : '*'}{' '}{v.num2}={v.answer}{v.answer !== v.userAnswer ? <span style={{ color: 'red' }}>/({v.userAnswer})</span> : <span ><CheckIcon style={{ color: 'green' }} /></span>}</li>) })
              }
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Level 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ol style={{ listStylePosition: 'inside' }}>
              {
                stateResult.l3.map(v => { return (<li key={nanoid()}>{v.num1}{' '}{v.sign === 1 ? '+' : v.sign === 2 ? '-' : '*'}{' '}{v.num2}={v.answer}{v.answer !== v.userAnswer ? <span style={{ color: 'red' }}>/({v.userAnswer})</span> : <span ><CheckIcon style={{ color: 'green' }} /></span>}</li>) })
              }
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
    
    </div>
  )
}

export default UserResults





