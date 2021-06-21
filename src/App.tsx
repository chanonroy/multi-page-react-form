import React, { useState } from 'react'
import { PrivacyPayload, UserPayload } from './@types'
import DoneStep from './screens/done-step'
import PrivacyForm from './screens/privacy-step'
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
    setFormState((prev) => ({
      ...prev,
      ...payload,
    }))
    setStep('privacy')
  }

  const handlePrivacySubmit = (payload: PrivacyPayload) => {
    setFormState((prev) => ({
      ...prev,
      ...payload,
    }))

    // last round of validation

    // submit payload (log)
    console.log(formState)

    // change step
    setStep('done')
  }

  return (
    <>
      {step === 'user' && <UserStep onSubmit={handleUserSubmit} />}
      {step === 'privacy' && <PrivacyForm onSubmit={handlePrivacySubmit} />}
      {step === 'done' && <DoneStep />}
    </>
  )
}

export default App
