import * as S from "./inputStyle.jsx"

function Input(props) {
    return(
        <>
        <S.Input type="text" placeholder="Nome do Paciente">{props.text}</S.Input>
        </>
    )
}

export default Input