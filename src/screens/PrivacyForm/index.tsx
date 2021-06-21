import Card from '../../components/card'
import Container from '../../components/container'
import TextInput from '../../components/text-input'
import TextInputLabel from '../../components/text-input-label'

export default function PrivacyForm() {
  return (
    <Container style={{ paddingTop: 40, paddingBottom: 20 }}>
      <Card>
        <TextInputLabel>Name</TextInputLabel>
        <TextInput placeholder='Jane Smith' />
      </Card>
    </Container>
  )
}
