import * as S from "./inicioStyle.jsx"
import Input from "../Input/input.jsx"

function Inicio() {
    return (
        <S.Form>
            <div>
                <Input type="text" placeholderText="Digite o nome do paciente"></Input>
                <Input type="number" placeholderText="Peso do Paciente"></Input>
                <Input type="number" placeholderText="Informe seu CPF"></Input>
                <Input type="number" placeholderText="Altura do Paciente"></Input>
                <Input type="text" placeholderText="Nome da Mãe"></Input>
                <Input type="text" placeholderText="Procedimento a ser realizado"></Input>
                <Input type="date" placeholderText="Data de nascimento"></Input>
            </div>
        </S.Form>
    )
}

export default Inicio