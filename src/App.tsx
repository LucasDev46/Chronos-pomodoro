import { Container } from './components/Container/Index'
import { Logo } from './components/Logo/Index'
import { Menu } from './components/Menu/Index'
import { CountDown } from './components/CountDown/Index'
import { DefaultInput } from './components/DefaultInput'
import { Cycles } from './components/Cycles/Index'
import { DefaultButton } from './components/DefaultButton'
import { Footer } from './components/Footer/Index'
import { PlayCircleIcon } from 'lucide-react'

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
     <Container>
         <form className='form'>
            <div className="formRow">
                <DefaultInput labelText='task' id='meuImput' type='text' placeholder='Digite algo'
                 />
            </div>
            <div className="formRow">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="formRow">
                <Cycles />
            </div>
             <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon />} color='green'/>
            </div>
         </form>
     </Container>
          <Container>
               <Footer />
          </Container>
    
    </>
    )
}
