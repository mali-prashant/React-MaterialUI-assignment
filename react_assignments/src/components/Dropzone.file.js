import React, { Component } from 'react'
import { DropzoneArea } from 'material-ui-dropzone'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Typography from '@material-ui/core/Typography';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TextField } from '@material-ui/core';
import AddTable from './AddRisk'

export default class DropzoneAreaExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        };
    }
    handleChange(files) {
        this.setState({
            files: files
        });
    }
    render() {
        return (
            <div>
                <div>
                    <ExpansionPanel
                        defaultExpanded>
                        <ExpansionPanelSummary
                            style={{ background: "rgb(127,127,127)" }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography id="stake"><b>Upload Files</b></Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div style={{ height: "50%" }}>

                                <div style={{ display: "inline-flex" }}>
                                    <div>
                                        <DropzoneArea
                                        filesLimit={1000}
                                        acceptedFiles={[]}
                                        maxFileSize={500000000}
                                        showFileNames={true}
                                        style={{ minHeight: "100px" }}
                                            onChange={this.handleChange.bind(this)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <TextField
                                            id="link-comment"
                                            name="link_comments"
                                            label="Link Comments"
                                            InputLabelProps={{ shrink: true }}
                                            margin="normal"
                                            variant="outlined"
                                            style={{ width: 1070 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div><br></br>
                <div>
                    <ExpansionPanel
                        defaultExpanded>
                        <ExpansionPanelSummary
                            style={{ background: "rgb(127,127,127)" }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                        <Typography id="stake"><b>Upload FP Tracker Files</b></Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div style={{ height: "50%" }}>
                                <div style={{ display: "inline-flex" }}>
                                    <div>
                                        <div>
                                            <DropzoneArea
                                            filesLimit={1000}
                                            acceptedFiles={[]}
                                            maxFileSize={500000000000000}
                                            showFileNames={true}
                                            onChange={this.handleChange.bind(this)}
                                            />
                                        </div>
                                    </div>
                                </div><br></br>
                                <div style={{ display: "inline-flex" }}>
                                    <div>
                                        <TextField
                                            id="Baseline Efforts(Hours)"
                                            name="Baseline Efforts(Hours)"
                                            label="Baseline Efforts(Hours)"
                                            InputLabelProps={{ shrink: true }}
                                            margin="normal"
                                            variant="outlined"
                                            style={{ width: 300, marginTop: "16px", marginLeft: "33px" }}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            id="CR Raised(Hours)"
                                            name="CR Raised(Hours)"
                                            label="CR Raised(Hours)"
                                            InputLabelProps={{ shrink: true }}
                                            margin="normal"
                                            variant="outlined"
                                            style={{ width: 300, marginTop: "16px", marginLeft: "33px" }}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            id="Revised Baseline Efforts(Hours)"
                                            name="Revised Baseline Efforts(Hours)"
                                            label="Revised Baseline Efforts(Hours)"
                                            InputLabelProps={{ shrink: true }}
                                            margin="normal"
                                            variant="outlined"
                                            style={{ width: 300, marginTop: "16px", marginLeft: "33px" }}
                                        />
                                    </div>
                                </div>
                                <div style={{ display: "inline-flex" }}>
                                    <div>
                                        <TextField
                                            id="Total Efforts Estimated(hours)"
                                            name="Total Efforts Estimated(hours)"
                                            label="Total Efforts Estimated(hours)"
                                            InputLabelProps={{ shrink: true }}
                                            margin="normal"
                                            variant="outlined"
                                            style={{ width: 300, marginTop: "16px", marginLeft: "33px" }}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            id="% Project Completed"
                                            name="% Project Completed"
                                            label="% Project Completed"
                                            InputLabelProps={{ shrink: true }}
                                            margin="normal"
                                            variant="outlined"
                                            style={{ width: 300, marginTop: "16px", marginLeft: "33px" }}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            id="Earned Value Variance:"
                                            name="Earned Value Variance:"
                                            label="Earned Value Variance:"
                                            InputLabelProps={{ shrink: true }}
                                            margin="normal"
                                            variant="outlined"
                                            style={{ width: 300, marginTop: "16px", marginLeft: "33px" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
                <br></br>
                <div>
                  <AddTable></AddTable>
                </div> 
            </div>
        );
    }
};