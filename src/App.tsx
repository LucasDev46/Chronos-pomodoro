import { Container } from './components/Container/Index'
import { Logo } from './components/Logo/Index'
import { Menu } from './components/Menu/Index'
import { CountDown } from './components/CountDown/Index'
import './styles/theme.css'
import './styles/global.css'




//component
export function App (){
    return (
    <> 
     <Container>
        <Logo />
     </Container>
     <Container>
        <Menu/>
     </Container>
     <Container>
         <CountDown />
     </Container>
    
    </>
    )
}
