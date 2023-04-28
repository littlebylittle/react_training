import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [message, setMessage] = useState('')

  function findErrors() {
    const errors = []
    if (!email || !password || !passwordConfirm) {
      errors.push('All fields must be filled in')
    }
    if (email.split('').filter(i => i === '@').length !== 1) {
      errors.push('An email must have exactly one @ sign')
    }
    if (password.length <= 8) errors.push('Passwords must be 8 characters or longer')
    if (password !== passwordConfirm) {
      errors.push('Passwords must match');
    } else {
      console.log('equals')
    }

    return errors
  }

  function handleSubmit(event) {
    console.log(event);
    window.aaa = event; //debug remove me some
    event.preventDefault()

    const errors = findErrors()
    console.log(errors)
    window.errors = errors;
    if(errors.length) {
      setMessage(errors.join(', '))
    } else {
      setMessage('User created!')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        placeholder="your@email.com"
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        placeholder="pazzword"
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        placeholder="password-confirm"
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      {/* just text here  */}
      {message} 
      <input id='sumbitId' type='submit' value='Submit' />
    </form>
  )
}
