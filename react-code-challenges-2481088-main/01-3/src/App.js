import './App.css'
import FormValidator from './03-form-validator/FormValidator'

function App () {
  return (
    <div className='App'>
      information fits the following requirements:
      <ul>
        <li>The email, password, and password confirmation fields are filled</li>
        <li>The email field must have exactly one @ sign in it</li>
        <li>The password must be eight or more characters long</li>
        <li>The password and password confirmation must be the same</li>
      </ul>
      <FormValidator />

    </div>
  )
}

export default App
