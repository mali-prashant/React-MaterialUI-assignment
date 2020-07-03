import React, { useState } from 'react';
import MaterialTable from 'material-table';
import Header from './Header'
import { Button, Paper, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import * as Yup from 'yup';
import { useFormik } from 'formik';




const risk_priority = ['High', 'Low', 'Moderate']
const risk_severity = ['High', 'Low', 'Moderate']
const risk_type = ['People', 'Quality', 'Schedule']
const internal_external = ['Internal', 'External']
const owners = ['Ajay', 'Kasturi']
const status = ['open', 'closed']
const du_list = ['DU-1', 'DU-2', 'DU-3']


export default function MaterialTableDemo() {
    const [fields, setFields] = useState([{ value: null }]);
    const [state, setState] = React.useState({
        columns: [
            // { title: 'ID', field: 'id' },
            { title: 'DU', field: 'du' },
            { title: 'Project_Name', field: 'project_name' },
            { title: 'Risk Type', field: 'risk_type' },
            { title: 'Internal/External', field: 'internal_external' },
            { title: 'Owner', field: 'owner' },
            { title: 'Severity', field: 'severity' },
            { title: 'Priority', field: 'priority' },
            { title: 'Risk_Raised_Date', field: 'risk_raised_date', type: 'date' },
            { title: 'Status', field: 'status' },
            { title: 'Age', field: 'age' }
        ],
        data: [
            {
                // "id": 1,
                "du": "DU1",
                "project_name": "API",
                "risk_type": "People",
                "internal_external": "Internal",
                "owner": "Kasturi",
                "severity": "High",
                "priority": "Low",
                "risk_raised_date": "23/06/2020",
                "status": "open",
                "age": "2"
            },
            {
                // "id": 2,
                "du": "DU1",
                "project_name": "API",
                "risk_type": "Quality",
                "internal_external": "Internal",
                "owner": "Kasturi",
                "severity": "Low",
                "priority": "Low",
                "risk_raised_date": "30-06-20",
                "status": "closed",
                "age": "-"
            },
            {
                // "id": 3,
                "du": "DU2",
                "project_name": "SMAI",
                "risk_type": "Schedule",
                "internal_external": "External",
                "owner": "Ajay",
                "severity": "Moderate",
                "priority": "Moderate",
                "risk_raised_date": "30-06-20",
                "status": "closed",
                "age": "-"
            },
            {
                // "id": 4,
                "du": "DU2",
                "project_name": "-",
                "risk_type": "People",
                "internal_external": "Internal",
                "owner": "Ajay",
                "severity": "High",
                "priority": "Moderate",
                "risk_raised_date": "30-06-20",
                "status": "open",
                "age": "3"
            }
        ],
    });

    const formik = useFormik({
        
        initialValues: {
            du: "",
            project_name: "",
            risk_type: "",
            internal_external: "",
            owner: "",
            severity: "",
            priority: "",
            risk_raised_date: "",
            status: "",
            age: ""
        },
        validationSchema: Yup.object({
            du: Yup.string().nullable()      
              .required('DU Required'),
            project_name: Yup.string().nullable()      
              .required('ProjectName Required'),
            risk_type: Yup.string().nullable()      
              .required('Risk Type Required'),
            internal_external: Yup.string().nullable()      
              .required('Internal External Required'),
            owner: Yup.string().nullable()      
              .required('Owner Required'),
            severity: Yup.string().nullable()      
              .required('Severity Required'),
            priority: Yup.string().nullable()      
              .required('Priority Required'),
            risk_raised_date: Yup.string().nullable()      
              .required('Risk Type Required'),
            status: Yup.string().nullable()      
              .required('Status Required'),
            age: Yup.string().nullable()      
            .required('Age Required'),
            }),   
        onSubmit: values => {
        // handleSubmit()
        },
      });

    const [values, setValues] = useState([]);

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };


    function handleAdd() {
        let element = document.getElementById("add_form")
        element.reset()
   
        let arr=[...state.data]
        let col=[...state.columns]
        arr.push(values)
        
        console.log(values, "..........add new data")
        setState([{columns:col,data:arr}][0])
        let empty=[]
        setValues(empty)
        // setFields(empty)
    }
    

    return (
        <div>
            <Header></Header><br></br>
            <div>
                        {fields.map((field, idx) => {
                            return (
                                <div >
                                    <Paper elevation={idx > 0 ? 5 : 2} style={{ marginTop: "20px", marginBottom: "20px" }}>
                                        <form id="add_form" >
                                            <Grid container spacing={2}>
                                                <Grid item xs={8}>
                                                    <div>
                                                        <TextField
                                                            id="project_name"
                                                            name="project_name"
                                                            InputLabelProps={{ shrink: true }}
                                                            type="text"
                                                            style={{ width: 700}}
                                                            label = "Project Name"
                                                            variant="outlined"
                                                            onChange={handleChange("project_name")}
                                                            onBlur={formik.handleBlur}
                                                            />
                                                             {formik.touched.project_name && formik.errors.project_name ? (
                                                        <div style={{ marginLeft: "45px",marginTop:"9px",color:"red" }}>
                                                        {formik.errors.project_name}
                                                        </div>
                                                    ) : null}
                                                    </div>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <div>
                                                    <Autocomplete
                                                            id="du"
                                                            name="du"
                                                            options = {du_list}
                                                            onChange={(event, du) => {
                                                                formik.setFieldValue('du',du)
                                                                setValues({ ...values, du });
                                                            }}
                                                            onBlur={formik.handleBlur}
                                                            renderInput={params => <TextField {...params} error={formik.touched.du && formik.errors.du} id="t1" label="DU" variant="outlined" InputLabelProps={{ shrink: true }}
                                                            // required={true}
                                                            />
                                                            }
                                                        />
                                                    </div>
                                                    {formik.touched.du && formik.errors.du ? (
                                                        <div style={{ marginLeft: "45px",marginTop:"9px",color:"red" }}>
                                                        {formik.errors.du}
                                                        </div>
                                                    ) : null}
                                                </Grid>

                                                <Grid item xs={4}>
                                                    <div>
                                                        <Autocomplete
                                                            id="risk_type"
                                                            name="risk_type"
                                                            options = {risk_type}
                                                            onChange={(event, risk_type) => {
                                                                formik.setFieldValue('risk_type', risk_type)
                                                                setValues({ ...values, risk_type });
                                                            }}
                                                            renderInput={params => <TextField {...params} error={formik.touched.risk_type && formik.errors.risk_type}  id="t1" label="Risk Type" variant="outlined" InputLabelProps={{ shrink: true }}
                                                            // required={true}
                                                            />
                                                            }
                                                        />
                                                    </div>
                                                    {formik.touched.risk_type && formik.errors.risk_type ? (
                                                        <div style={{ marginLeft: "45px",marginTop:"9px",color:"red" }}>
                                                        {formik.errors.risk_type}
                                                        </div>
                                                    ) : null}
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <div>
                                                        <Autocomplete
                                                            id="internal_external"
                                                            name="internal_external"
                                                            options = {internal_external}
                                                            onChange={(event, internal_external) => {
                                                                formik.setFieldValue('internal_external', internal_external)
                                                                setValues({ ...values, internal_external });
                                                            }}
                                                            renderInput={params => <TextField {...params} error={formik.touched.internal_external && formik.errors.internal_external} id="t2" label="Internal/External" variant="outlined" InputLabelProps={{ shrink: true }}
                                                            />}
                                                        />
                                                    </div>
                                                       {formik.touched.internal_external && formik.errors.internal_external ? (
                                                        <div style={{ marginLeft: "35px",marginTop:"9px",color:"red" }}>
                                                        {formik.errors.internal_external}
                                                        </div>
                                                    ) : null}
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <div>
                                                        <Autocomplete
                                                            id="owner"
                                                            name="owner"
                                                            options = { owners }
                                                            onChange={(event, owner) => {
                                                                formik.setFieldValue('owner', owner)
                                                                setValues({ ...values, owner });
                                                            }}
                                                            renderInput={params => <TextField {...params} error={formik.touched.owner && formik.errors.owner} label="Owner" variant="outlined" InputLabelProps={{ shrink: true }}
                                                            required={true}
                                                            />}
                                                        />
                                                    </div>
                                                    {formik.touched.owner && formik.errors.owner ? (
                                                        <div style={{ marginLeft: "35px",marginTop:"9px",color:"red" }}>
                                                        {formik.errors.owner}
                                                        </div>
                                                    ) : null}
                                                </Grid>

                                                <Grid item xs={4}>
                                                    <div>
                                                        <Autocomplete
                                                            id="severity"
                                                            name="severity"
                                                            options= {risk_severity}
                                                            onChange={(event, severity) => {
                                                                setValues({ ...values, severity });
                                                            }}
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
                                                            options = {risk_priority}
                                                            onChange={(event, priority) => {
                                                                setValues({ ...values, priority });
                                                            }}
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
                                                            onChange={handleChange("risk_raised_date")}
                                                            variant="outlined"
                                                       />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <div>
                                                        <Autocomplete
                                                            id="status"
                                                            name="status"
                                                            options = { status }
                                                            onChange={(event, status) => {
                                                                setValues({ ...values, status });
                                                            }}
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
                                                            onChange={handleChange("age")}
                                                            variant="outlined"
                                                        />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Button
                                                        // disabled={c}
                                                        variant="contained" color="primary"
                                                        id="addRisk"
                                                        style={{height:40, marginTop:"15px",
                                                        marginLeft:"7px"}}
                                                        onClick={
                                                        ()=>handleAdd()
                                                        } >
                                                           Save
                                                    </Button>
                                                </Grid>
                                            </Grid>

                                        </form>
                                    </Paper>
                                </div>
                            );
                        })}
                    </div>
            <MaterialTable
                title="WSR/Project Tab"
                columns={state.columns}
                data={state.data}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.push(newData);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState((prevState) => {
                                        const data = [...prevState.data];
                                        console.log(data, "........data")
                                        data[data.indexOf(oldData)] = newData;
                                        console.log(oldData, ".........oldData")
                                        console.log(data, "............final_data")
                                        return { ...prevState, data };
                                    });
                                }
                            }, 600);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                }}
             />
        </div>

    );
}
