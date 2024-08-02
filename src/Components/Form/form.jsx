import * as S from "./formStyle.jsx"
import Input from "../Input/input.jsx"
import Button from "../Button/button.jsx"
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
                <Input type="email" id="email" placeholderText="E-mail do paciente" value={email} />
                <Input type="text" placeholderText="Digite o nome do paciente" value={patient} />
                <Input type="number" placeholderText="Peso do Paciente" value={peso} />
                <Input type="number" placeholderText="Altura do Paciente" value={altura} />
                <Input type="text" placeholderText="Nome da Mãe" value={name} />
                <Input type="text" placeholderText="Procedimento a ser realizado" value={surgery} />
                <Input type="date" placeholderText="Data de nascimento" value={date} />
            </div>
            <S.Div>
                <Button text="ENVIAR" />
            </S.Div>
        </S.Form>
    )
}

export default Form