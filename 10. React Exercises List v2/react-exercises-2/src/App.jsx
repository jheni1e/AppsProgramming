import { useState } from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard'
import CustomButton from './components/CustomButton'
import ConditionalMessage from './components/ConditionalMessage'
import CustomTitle from './components/CustomTitle'
import ColoredBox from './components/ColoredBox'
import CustomWelcome from './components/CustomWelcome'
import TextboxLabel from './components/TextboxLabel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProfileCard name="Jhenie" age="19" job="Developer"></ProfileCard>
      <ProfileCard name="Leleca" age="18" job="Engineer"></ProfileCard>
      <ProfileCard name="Lasnove" age="17" job="Robert Bosch"></ProfileCard>

      <CustomButton color="blue" text="Azul"></CustomButton>
      <CustomButton color="red" text="Vermelho"></CustomButton>

      <ConditionalMessage isLogged={true}></ConditionalMessage>
      <ConditionalMessage isLogged={false}></ConditionalMessage>

      <CustomTitle text="Título H1" size={1}></CustomTitle>
      <CustomTitle text="Título H2" size={2}></CustomTitle>
      <CustomTitle text="Título H3" size={3}></CustomTitle>

      <ColoredBox width={100} height={50} color="lightseagreen"></ColoredBox>
      <ColoredBox width={50} height={50} color="bisque"></ColoredBox>
      <ColoredBox width={100} height={25} color="thistle"></ColoredBox>

      <CustomWelcome name="Jhenie" hour="manhã"></CustomWelcome>
      <CustomWelcome name="Leleca" hour="tarde"></CustomWelcome>
      <CustomWelcome name="Lasnove" hour="noite"></CustomWelcome>

      <TextboxLabel label="Nome" placeholder="Digite seu nome aqui..."></TextboxLabel>
    </>
  )
}

export default App