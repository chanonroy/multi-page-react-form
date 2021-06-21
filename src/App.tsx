import React, { useState } from 'react'
import { PrivacyPayload, UserPayload } from './@types'
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

    // last round of validation

    // log state
    console.log(newFormState)

    // change step
    setStep('done')
  }

  return (
    <>
      {step === 'user' && <UserStep onSubmit={handleUserSubmit} />}
      {step === 'privacy' && <PrivacyStep onSubmit={handlePrivacySubmit} />}
      {step === 'done' && <DoneStep />}
    </>
  )
}

export default App
