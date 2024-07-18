import * as S from "./inicioStyle.jsx"
import Input from "../Input/input.jsx"

function Inicio() {
    return(
        <S.Inicio>
            <S.Div>
                <Input type="text" placeholderText="Nome do Paciente"></Input>
                <Input type="text" placeholderText="Peso do Paciente"></Input>
                <Input type="text" placeholderText="Nome da Mãe do Paciente"></Input>
                <Input type="text" placeholderText="Peso do Pai do Paciente"></Input>
            </S.Div>
        </S.Inicio>
    )
}

export default Inicio