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

    function validar() {
        if(email == ""){
            alert('Digite um email válido')
        }
        if(patient == ""){
            alert('Informe o nome do paciente')
        }
        if(peso == ""){
            alert('Informe o peso do paciente')
        }
        if(altura == ""){
            alert('Informe a altura do paciente')
        }
        if(name == ""){
            alert('Informe o nome da mãe do paciente')
        }
        if(surgery == ""){
            alert('Informe o procedimento a ser realizado')
        }
        if(date == ""){
            alert('Informe a data da cirurgia')
        }
    }

    return (
        <S.Form>
            <S.H1>Formulário do Paciente</S.H1>
            <div>
                <S.Input type="email" placeholder="E-mail do paciente" value={email} onChange={(ev) => setEmail(ev.target.value)}/>
                <S.Input type="text" placeholder="Digite o nome do paciente" value={patient} onChange={(ev) => setPatient(ev.target.value)} />
                <S.Input type="number" placeholder="Peso do Paciente" value={peso} onChange={(ev) => setPeso(ev.target.value)} />
                <S.Input type="number" placeholder="Altura do Paciente" value={altura} onChange={(ev) => setAltura(ev.target.value)} />
                <S.Input type="text" placeholder="Nome da Mãe" value={name} onChange={(ev) => setName(ev.target.value)} />
                <S.Input type="text" placeholder="Procedimento a ser realizado" value={surgery} onChange={(ev) => setSurgery(ev.target.value)} />
                <S.Input type="date" placeholder="Data de nascimento" value={date} onChange={(ev) => setDate(ev.target.value)} />
            </div>
            <S.Div>
                <S.Button onClick={validar}>Enviar</S.Button>
            </S.Div>
        </S.Form>
    )
}

export default Form