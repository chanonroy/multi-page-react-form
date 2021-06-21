export const Colors = {
  primary: '#409eff',
  primaryAccent: '#66b1ff',
  danger: '#fc5c65',
  dark: '#403E3D',
  background: '#F1F5FE',
}

export interface UserPayload {
  name: string
  role: string
  emailAddress: string
  password: string
}

export interface PrivacyPayload {
  receiveUpdates: boolean
  receiveCommunication: boolean
}
