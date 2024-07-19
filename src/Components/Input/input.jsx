import * as S from "./inputStyle.jsx"

function Input({type, placeholderText}) {
    return(
        <>
        <S.Input type={type} placeholder={placeholderText} />
        </>
    )
}

export default Input