import React from 'react'
import { func } from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { TextField, Button } from '@material-ui/core'

import { connect } from '../../lib/react-redux.jsx'
import { createIncident } from './ducks'
import '../../styles/Create.css'

const IncidentSchema = Yup.object().shape({
  title: Yup.string().required('Title cannot be empty'),
  assignee: Yup.string().required('Assignee cannot be empty'),
  status: Yup.string().required('status cannot be empty')
})

const CreateIncident = ({ doCreateIncident }) => {
  return (
    <div>
      <p>Create Incident form should be here</p>
      <Formik
        initialValues={{ title: '', assignee: '', status: '' }}
        validationSchema={IncidentSchema}
        onSubmit={values => {
          const { title, assignee, status } = values
          doCreateIncident(title, assignee, status)
        }}
        render={props => {
          return (
            <div className="Create">
              <div className="Create-Input">
                <TextField
                  id="standard-name"
                  name="title"
                  label="Title"
                  onChange={props.handleChange}
                  margin="normal"
                />
                {props.errors.title && (
                  <div className="Create-Error">{props.errors.title}</div>
                )}
              </div>
              <div className="Create-Input">
                <TextField
                  id="standard-name"
                  name="assignee"
                  label="Assignee"
                  onChange={props.handleChange}
                  margin="normal"
                />
                {props.errors.assignee && (
                  <div className="Create-Error">{props.errors.assignee}</div>
                )}
              </div>
              <div className="Create-Input">
                <TextField
                  id="standard-name"
                  name="status"
                  label="Status"
                  onChange={props.handleChange}
                  margin="normal"
                />
                {props.errors.status && (
                  <div className="Create-Error">{props.errors.status}</div>
                )}
              </div>
              {/*{props.errors && showErrors(props.errors)}*/}
              <div className="Create-Submit">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={props.handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </div>
          )
        }}
      />
    </div>
  )
}

CreateIncident.propTypes = {
  doCreateIncident: func.isRequired
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  doCreateIncident: (title, assignee, status) =>
    dispatch(createIncident(title, assignee, status))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateIncident)
