import { useState } from 'react'
import { PrivacyPayload } from '../../@types'
import Button from '../../components/button'
import Card from '../../components/card'
import CheckboxInput from '../../components/checkbox-input'
import Container from '../../components/container'

export default function PrivacyForm({
  onSubmit,
}: {
  onSubmit: (payload: PrivacyPayload) => void
}) {
  const [receiveUpdates, setReceiveUpdates] = useState(false)
  const [receiveCommunication, setReceiveCommunication] = useState(false)

  const handleSubmit = () => {
    onSubmit({
      receiveUpdates,
      receiveCommunication,
    })
  }

  return (
    <Container style={{ paddingTop: 40, paddingBottom: 20 }}>
      <Card>
        <div style={{ marginBottom: 20 }}>
          <CheckboxInput
            label='Receive updates about tray.io product by email'
            checked={receiveUpdates}
            onChange={setReceiveUpdates}
          />
        </div>
        <div style={{ marginBottom: 40 }}>
          <CheckboxInput
            label='Receive communication by email for other products created by the Tray.io team'
            checked={receiveCommunication}
            onChange={setReceiveCommunication}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </Card>
    </Container>
  )
}
