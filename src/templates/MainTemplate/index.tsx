import { Container } from "../../components/Container/Index";
import { Footer } from "../../components/Footer/Index";
import { Logo } from "../../components/Logo/Index";
import { Menu } from "../../components/Menu/Index";


type MainTemplateProps = {
    children: React.ReactNode
}

export function MainTemplate ({children}: MainTemplateProps){

    return (
    <>
        <Container>
            <Logo />
        </Container>
        
        <Container>
            <Menu/>
        </Container>

        {children}

        <Container>
            <Footer />
        </Container>
    
    </>
    )
}
