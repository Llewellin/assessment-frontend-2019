import React from 'react'
import { Link } from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { Home as HomeIcon, Work as WorkIcon } from '@material-ui/icons'

export function Header() {
  const [value, setValue] = React.useState(0)

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        label="Create"
        icon={<WorkIcon />}
        component={Link}
        to="/create"
      />
    </BottomNavigation>
  )
}
