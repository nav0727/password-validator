import {useState} from 'react'
import {
  BgContainer,
  Con,
  Para,
  Head,
  Paragraph,
  Input,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, isPasswordSecure] = useState('')
  const onChangePassword = event => isPasswordSecure(event.target.value)

  return (
    <BgContainer>
      <Con>
        <Head>Password Validator</Head>
        <Paragraph>check how strong and secure is your password</Paragraph>
        <Input type="password" value={password} onChange={onChangePassword} />
        {password.length < 8 ? (
          <Para>Your password must be at least 8 characters</Para>
        ) : (
          ''
        )}
      </Con>
    </BgContainer>
  )
}

export default PasswordValidator
