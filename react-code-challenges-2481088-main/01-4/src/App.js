import './App.css'
import DadJokes from './04-dog-pics/DogPics'

function App () {
  return (
    <div className='App'>
      <code>- Use the dogceo to fetch a random dog image and display
that image on page load instead ofthe hardcoded one
there now

- When the dog button is clicked, fetch a new dog image
and render it on the UI instead</code>
      <DadJokes />
    </div>
  )
}

export default App
