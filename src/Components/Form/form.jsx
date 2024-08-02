import * as S from "./formStyle.jsx"
import { useState } from "react"

function Form() {

    const [email, setEmail] = useState("");
    const [patient, setPatient] = useState("");
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [name, setName] = useState("");
    const [surgery, setSurgery] = useState("");
    const [date, setDate] = useState("");

    return (
        <S.Form>
            <S.H1>Formulário do Paciente</S.H1>
            <div>
                <S.Input type="email" placeholder="E-mail do paciente" />
                <S.Input type="text" placeholder="Digite o nome do paciente" />
                <S.Input type="number" placeholder="Peso do Paciente" />
                <S.Input type="number" placeholder="Altura do Paciente" />
                <S.Input type="text" placeholder="Nome da Mãe" />
                <S.Input type="text" placeholder="Procedimento a ser realizado" />
                <S.Input type="date" placeholder="Data de nascimento" />
            </div>
            <S.Div>
                <S.Button type="submit">Enviar</S.Button>
            </S.Div>
        </S.Form>
    )
}

export default Form