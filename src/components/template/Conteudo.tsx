interface ConteudoProps{
    children: any
}

export default function Conteudo({children}: ConteudoProps){
    return (
        <div>
            {children}
        </div>
    );
}