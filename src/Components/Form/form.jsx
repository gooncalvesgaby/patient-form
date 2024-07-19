import * as S from "./formStyle.jsx"
import Input from "../Input/input.jsx"
import Button from "../Button/button.jsx"

function Form() {
    return (
        <S.Form>
            <S.H1>Formulário do Paciente</S.H1>
            <div>
                <Input type="email" id="email" placeholderText="E-mail do paciente" />
                <Input type="text" placeholderText="Digite o nome do paciente" />
                <Input type="number" placeholderText="Peso do Paciente" />
                <Input type="number" placeholderText="Altura do Paciente" />
                <Input type="text" placeholderText="Nome da Mãe" />
                <Input type="text" placeholderText="Procedimento a ser realizado" />
                <Input type="date" placeholderText="Data de nascimento" />
            </div>
            <S.Div>
                <Button text="ENVIAR" />
            </S.Div>
        </S.Form>
    )
}

export default Form