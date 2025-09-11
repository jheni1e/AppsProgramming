import { useState } from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard'
import CustomButton from './components/CustomButton'
import ConditionalMessage from './components/ConditionalMessage'
import CustomTitle from './components/CustomTitle'
import ColoredBox from './components/ColoredBox'
import CustomWelcome from './components/CustomWelcome'
import TextboxLabel from './components/TextboxLabel'
import CustomCounter from './components/CustomCounter'
import TrafficLights from './components/TrafficLights'
import AvatarStatus from './components/AvatarStatus'

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
      <TextboxLabel label="Email" placeholder="Digite seu e-mail aqui..."></TextboxLabel>
      <TextboxLabel label="Senha" placeholder="Digite sua senha aqui..."></TextboxLabel>

      <CustomCounter start={0} step={1}></CustomCounter>
      <CustomCounter start={10} step={5}></CustomCounter>
      <CustomCounter start={0} step={10}></CustomCounter>

      <div style={{display: 'flex', flexDirection: 'row'}}>
        <TrafficLights currColor="red"></TrafficLights>
        <TrafficLights currColor="yellow"></TrafficLights>
        <TrafficLights currColor="green"></TrafficLights>
      </div>

      <AvatarStatus image="https://preview.redd.it/make-the-comments-look-like-arthur-morgans-book-of-roasts-v0-cc33j20f1lra1.jpg?width=640&crop=smart&auto=webp&s=c083cd528fe3b7032d5d00110ae02b1862fd72fb"
        isOnline={true}></AvatarStatus>
      <AvatarStatus image="https://i.redd.it/jason-lucia-development-like-arthur-morgan-v0-c1ne31bkg56c1.jpg?width=828&format=pjpg&auto=webp&s=f1dffbaed05b6c20b2508aaeac26a2ed6b82c2ff"
        isOnline={false}></AvatarStatus>
    </>
  )
}

export default App