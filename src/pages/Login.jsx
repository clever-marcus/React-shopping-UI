import styled from 'styled-components';
import Adidas from "../images/adidas.webp";
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5), 
        rgba(255, 255, 255, 0.5)
        ), url("${props => props.background}") center no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: transparent;
    border: 1px solid black;
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    ${mobile({ fontSize: "15px" })}
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
    ${mobile({ fontSize: "15px" })}
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    ${mobile({ fontSize: "15px" })}
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;
const Login = () => {
    return (
        <Container background={Adidas}>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username..." />
                    <Input placeholder="password..." />
                    <Button>LOGIN</Button>
                    <Link>Forgot Password?</Link>
                    <Link>SIGN UP</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login;