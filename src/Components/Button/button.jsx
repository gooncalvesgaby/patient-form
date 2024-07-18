import * as S from "./buttonStyle.jsx"

function Button(props) {
    return (
        <>
        <S.Button>{props.text}</S.Button>
        </>
    )
}

export default Button