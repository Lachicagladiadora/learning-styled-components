import './App.css'
import { Button } from './components/Button'
import { Title } from './components/Title'

function App() {

  return (
    <>
     <Title>learning styled components</Title>
     <Button onClick={()=>console.log('you clicked the button')}>I'm a Button</Button>
    </>
  )
}

export default App
