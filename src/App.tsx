import React from 'react'
import { UserPayload } from './@types'
import UserForm from './screens/UserForm'

function App() {
  const handleUserSubmit = (payload: UserPayload) => {
    console.log(payload)
  }
  return <UserForm onSubmit={handleUserSubmit} />
}

export default App
