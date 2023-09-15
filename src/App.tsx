import './App.css'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Title } from './components/Title'

function App() {

  return (
    <>
     <Title>learning styled components</Title>
     <Button onClick={()=>console.log('you clicked the button')}>I'm a Button</Button>
     <Checkbox mode='dark'>Hello World</Checkbox>
    </>
  )
}

export default App
