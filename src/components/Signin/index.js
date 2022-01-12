
import { FormWrap, Icon, FormButton, FormContent, FormInput, FormH1, FormLabel,Container, Text, Form } from "./SigninElements"

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
            <Icon to="/">dolla</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type="email" required></FormInput>
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type="password" required></FormInput>
                    <FormButton type="submit">Continue</FormButton>
                    <Text>Forgot password</Text>
                </Form>
            </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default SignIn