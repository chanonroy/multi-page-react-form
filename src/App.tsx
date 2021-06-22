import React, { useState } from 'react'
import { PrivacyPayload, UserPayload } from './@types'
import Container from './components/container'
import { StatusItem, StatusItemContainer } from './components/status-item'
import DoneStep from './screens/done-step'
import PrivacyStep from './screens/privacy-step'
import UserStep from './screens/user-step'

function App() {
  const [step, setStep] = useState<'user' | 'privacy' | 'done'>('user')
  const [formState, setFormState] = useState<UserPayload & PrivacyPayload>({
    name: '',
    role: '',
    emailAddress: '',
    password: '',
    receiveUpdates: false,
    receiveCommunication: false,
  })

  const handleUserSubmit = (payload: UserPayload) => {
    const newFormState = {
      ...formState,
      ...payload,
    }
    setFormState(newFormState)
    setStep('privacy')
  }

  const handlePrivacySubmit = (payload: PrivacyPayload) => {
    const newFormState = {
      ...formState,
      ...payload,
    }

    setFormState(newFormState)

    // in our real app, the server side would also validate this input on submission

    // log state
    console.log(newFormState)

    // change step
    setStep('done')
  }

  return (
    <Container style={{ paddingTop: 40, paddingBottom: 20 }}>
      <StatusItemContainer>
        <StatusItem active={step === 'user'}>User</StatusItem>
        <StatusItem active={step === 'privacy'}>Privacy</StatusItem>
        <StatusItem active={step === 'done'}>Done</StatusItem>
      </StatusItemContainer>
      {step === 'user' && <UserStep onSubmit={handleUserSubmit} />}
      {step === 'privacy' && <PrivacyStep onSubmit={handlePrivacySubmit} />}
      {step === 'done' && <DoneStep />}
    </Container>
  )
}

export default App
