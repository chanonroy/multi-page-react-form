import Button from '../../components/button'
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
          <TextInputLabel>Name *</TextInputLabel>
          <TextInput
            value={nameState.value}
            onChange={(e) => nameState.onChange(e.target.value)}
            onBlur={nameState.onBlur}
            placeholder='Jane Smith'
            error={nameState.showError}
            onEnterKey={handleSubmit}
          />
          {nameState.showError && (
            <ValidationError>{nameState.errorMessage}</ValidationError>
          )}
        </div>

        <div style={{ marginBottom: 20 }}>
          <TextInputLabel>Role</TextInputLabel>
          <TextInput
            value={roleState.value}
            onChange={(e) => roleState.onChange(e.target.value)}
            onBlur={roleState.onBlur}
            placeholder='Software Engineer'
            error={roleState.showError}
            onEnterKey={handleSubmit}
          />
          {roleState.showError && (
            <ValidationError>{roleState.errorMessage}</ValidationError>
          )}
        </div>

        <div style={{ marginBottom: 20 }}>
          <TextInputLabel>Email address *</TextInputLabel>
          <TextInput
            value={emailAddressState.value}
            onChange={(e) => emailAddressState.onChange(e.target.value)}
            onBlur={emailAddressState.onBlur}
            placeholder='jane@me.com'
            error={emailAddressState.showError}
            onEnterKey={handleSubmit}
          />
          {emailAddressState.showError && (
            <ValidationError>{emailAddressState.errorMessage}</ValidationError>
          )}
        </div>

        <div style={{ marginBottom: 40 }}>
          <TextInputLabel>Password *</TextInputLabel>
          <TextInput
            type='password'
            value={passwordState.value}
            onChange={(e) => passwordState.onChange(e.target.value)}
            onBlur={passwordState.onBlur}
            placeholder='Password'
            error={passwordState.showError}
            onEnterKey={handleSubmit}
          />
          {passwordState.showError && (
            <ValidationError>{passwordState.errorMessage}</ValidationError>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button>Submit</Button>
        </div>
      </Card>
    </Container>
  )
}
