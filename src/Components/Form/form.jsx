import * as S from "./formStyle.jsx"
import Input from "../Input/input.jsx"
import Button from "../Button/button.jsx"

function Form() {
    return (
        <S.Form>
            <S.H1>Formulário do Paciente</S.H1>
            <div>
                <Input type="text" placeholderText="Digite o nome do paciente"></Input>
                <Input type="number" placeholderText="Peso do Paciente"></Input>
                <Input type="number" placeholderText="Informe seu CPF"></Input>
                <Input type="number" placeholderText="Altura do Paciente"></Input>
                <Input type="text" placeholderText="Nome da Mãe"></Input>
                <Input type="text" placeholderText="Procedimento a ser realizado"></Input>
                <Input type="date" placeholderText="Data de nascimento"></Input>
            </div>
            <S.Div>
                <Button text="ENVIAR" />
            </S.Div>
        </S.Form>
    )
}

export default Form