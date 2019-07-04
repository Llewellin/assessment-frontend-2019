export const CREATE_INCIDENT = 'CREATE_INCIDENT'

export const createIncident = (title, assignee, status) => ({
  type: CREATE_INCIDENT,
  payload: {
    title,
    assignee,
    status
  }
})

const initialState = {
  incidents: {}
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_INCIDENT:
      const { title, assignee, status } = action.payload
      return {
        ...state,
        incidents: {
          ...state.incidents,
          [title]: {
            title,
            assignee,
            status
          }
        }
      }
    default:
      return state
  }
}
