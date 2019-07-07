import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'

import { Incident } from '../components/Incident'
import { connect } from '../lib/react-redux.jsx'

const useStyles = makeStyles(theme => ({
  empty: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1)
  },
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
}))

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

const Home = ({ incidents }) => {
  const classes = useStyles()

  if (Object.keys(incidents).length === 0) {
    return <div className={classes.empty}>no incidents available</div>
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Assignee</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(incidents).map(key => (
            <Incident
              key={`${key}-${incidents[key].title}`}
              title={incidents[key].title}
              assignee={incidents[key].assignee}
              status={incidents[key].status}
            />
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

const mapStateToProps = state => ({
  incidents: state.incidents
})
const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
