import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, Paper, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
const risk_priority = ['High', 'Low', 'Moderate']
const risk_severity = ['High', 'Low', 'Moderate']
const risk_type = ['People', 'Quality', 'Schedule']
const internal_external = ['Internal', 'External']
const owners = ['Ajay', 'Kasturi']
const status = ['Open', 'Closed']



export default function AddRisk() {
    const classes = useStyles();
    const [fields, setFields] = useState([{ value: null }]);
    const [datalist, setdatalist] = useState([]);
    const [] = useState([]);

    function handleRemove(i) {
        console.log(i);
        const values = [...fields];
        console.log(fields);
        values.splice(i, 1);
        setFields(values);
        setdatalist(datalist.filter(data => data.temp_id !== i));

    }
    function handleAdd() {

        const values1 = [...fields];
        values1.push({ value1: null });
        setFields(values1);

    }

    return (
        <div>
            <ExpansionPanel
                defaultExpanded

            >
                <ExpansionPanelSummary
                    style={{ background: "rgb(127,127,127)" }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className={classes.heading}>

                    <Typography id="stake"><b>Add New Risk</b></Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
                        {fields.map((field, idx) => {
                            return (
                                <div >
                                    <Paper elevation={idx > 0 ? 5 : 2} style={{ marginTop: "20px", marginBottom: "20px" }}>
                                        <form id="add_form" >
                                            <Grid container spacing={2}>
                                                <Grid item xs={12}>
                                                    <div>
                                                        <TextField
                                                            id="risk_description"
                                                            name="risk_description"
                                                            InputLabelProps={{ shrink: true }}
                                                            type="text"
                                                            style={{ width: 700 }}
                                                            label="Risk_Description"
                                                            variant="outlined"
                                                        />
                                                    </div>
                                                </Grid>

                                                <Grid item xs={4}>
                                                    <div>
                                                        <Autocomplete
                                                            id="risk_type"
                                                            name="risk_type"
                                                            options={risk_type}
                                                            renderInput={params => <TextField {...params} id="t1" label="Risk Type" variant="outlined" InputLabelProps={{ shrink: true }}
                                                            />
                                                            }
                                                        />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <div>
                                                        <Autocomplete
                                                            id="internal_external"
                                                            name="internal_external"
                                                            options={internal_external}
                                                            renderInput={params => <TextField {...params} id="t2" label="Internal/External" variant="outlined" InputLabelProps={{ shrink: true }}
                                                            />}
                                                        />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <div>
                                                        <Autocomplete
                                                            id="owner"
                                                            name="owner"
                                                            options={owners}
                                                            renderInput={params => <TextField {...params} label="Owner" variant="outlined" InputLabelProps={{ shrink: true }}
                                                            />}
                                                        />
                                                    </div>

                                                </Grid>

                                                <Grid item xs={4}>
                                                    <div>
                                                        <Autocomplete
                                                            id="severity"
                                                            name="severity"
                                                            options={risk_severity}
                                                            renderInput={params => <TextField {...params} label="Severity" variant="outlined" InputLabelProps={{ shrink: true }}
                                                            />}
                                                        />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <div>
                                                        <Autocomplete
                                                            id="priority"
                                                            name="priority"
                                                            options={risk_priority}
                                                            renderInput={params => <TextField {...params} label="Priority" variant="outlined" InputLabelProps={{ shrink: true }}
                                                            />}
                                                        />

                                                    </div>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <div>
                                                        <TextField
                                                            id="onboarding_date"
                                                            name="risk_raised_date"
                                                            label="Risk Raised Date"
                                                            InputLabelProps={{ shrink: true }}
                                                            type="date"
                                                            variant="outlined"
                                                        />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <div>
                                                        <Autocomplete
                                                            id="status"
                                                            name="status"
                                                            options={status}
                                                            renderInput={params => <TextField {...params} label="Status" variant="outlined" InputLabelProps={{ shrink: true }}
                                                            />}
                                                        />

                                                    </div>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <div>
                                                        <TextField
                                                            id="age"
                                                            name="age"
                                                            label="Age"
                                                            type="text"
                                                            InputLabelProps={{ shrink: true }}
                                                            variant="outlined"
                                                        />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <div>
                                                        <TextField
                                                            id="mitigation"
                                                            name="mitigation"
                                                            label="Mitigation"
                                                            type="text"
                                                            InputLabelProps={{ shrink: true }}
                                                            variant="outlined"
                                                        />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Button
                                                        id="addRisk"
                                                        style={{
                                                            height: 40, marginTop: "15px",
                                                            marginLeft: "7px"
                                                        }}
                                                        onClick={
                                                            () => handleAdd()
                                                        } >
                                                        <AddIcon></AddIcon>
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Button
                                                        id="removeRisk"
                                                        style={{
                                                            height: 40, marginTop: "15px",
                                                            marginLeft: "7px"
                                                        }}
                                                        onClick={() => handleRemove()} >
                                                        <DeleteIcon></DeleteIcon>
                                                    </Button>
                                                </Grid>
                                            </Grid>

                                        </form>
                                    </Paper>
                                </div>
                            );
                        })}
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}