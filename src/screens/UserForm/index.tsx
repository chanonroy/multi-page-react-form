import Card from '../../components/card'
import Container from '../../components/container'
import TextInput from '../../components/text-input'
import TextInputLabel from '../../components/text-input-label'
import ValidationError from '../../components/validation-error'
import useTextInputState from '../../hooks/use-text-input-state'
import { notEmpty, validEmail } from '../../utils/validations'

export default function UserForm() {
  const nameState = useTextInputState({
    validations: [notEmpty('Name is required')],
  })
  const roleState = useTextInputState({})
  const emailAddressState = useTextInputState({
    validations: [
      notEmpty('Email is required'),
      validEmail('Please enter a valid email'),
    ],
  })
  const passwordState = useTextInputState({
    validations: [notEmpty('Password is required')],
  })
  // over 9 chars length
  // has at least one number
  // has at least one upper case
  // has at least one lower case

  const handleSubmit = () => {
    //
  }

  return (
    <Container style={{ paddingTop: 40, paddingBottom: 20 }}>
      <Card>
        <div style={{ marginBottom: 20 }}>
          <TextInputLabel>Name</TextInputLabel>
          <TextInput placeholder='Jane Smith' />
          {nameState.showError && (
            <ValidationError>{nameState.errorMessage}</ValidationError>
          )}
        </div>

        <div style={{ marginBottom: 20 }}>
          <TextInputLabel>Role</TextInputLabel>
          <TextInput placeholder='Software Engineer' />
          {roleState.showError && (
            <ValidationError>{roleState.errorMessage}</ValidationError>
          )}
        </div>

        <div style={{ marginBottom: 20 }}>
          <TextInputLabel>Email address</TextInputLabel>
          <TextInput placeholder='jane@me.com' />
          {emailAddressState.showError && (
            <ValidationError>{emailAddressState.errorMessage}</ValidationError>
          )}
        </div>

        <div style={{ marginBottom: 20 }}>
          <TextInputLabel>Password</TextInputLabel>
          <TextInput placeholder='Password' />
          {passwordState.showError && (
            <ValidationError>{passwordState.errorMessage}</ValidationError>
          )}
        </div>
      </Card>
    </Container>
  )
}
