import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { TableRow, TableCell } from '@material-ui/core'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow)

export function Incident({ title, assignee, status }) {
  return (
    <Fragment>
      <StyledTableRow key={title}>
        <StyledTableCell component="th" scope="row">
          {title}
        </StyledTableCell>
        <StyledTableCell align="right">{assignee}</StyledTableCell>
        <StyledTableCell align="right">{status}</StyledTableCell>
      </StyledTableRow>
    </Fragment>
  )
}
