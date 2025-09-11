import { useState } from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard'
import CustomButton from './components/CustomButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProfileCard name="jhenie" age="19" job="developer"></ProfileCard>
      <ProfileCard name="leleca" age="18" job="engineer"></ProfileCard>
      <ProfileCard name="lasnove" age="17" job="robert bosch"></ProfileCard>

      <CustomButton color="blue" text="azul"></CustomButton>
      <CustomButton color="red" text="vermelho"></CustomButton>
      <CustomButton color="green" text="verde"></CustomButton>
    </>
  )
}

export default App
