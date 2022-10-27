import Link from 'next/link'

interface MenuItem{
    url?: string,
    texto: string,
    icone: any,
    className?: string
    onCLick?: (evento: any) => void
}

export default function MenuItem(props: MenuItem){

    function renderizarLink(){
        return(            
                <div className={`
                    flex flex-col justify-center items-center
                    h-20 w-full text-gray-600 
                    ${props.className}
                `}>
                    {props.icone}
                    <span className={`text-xs font-light `}>
                        {props.texto}
                    </span>
                </div>  
        )
    }

    return (
        <li 
            className={`
                hover:bg-gray-100
                cursor-pointer
            `}
            onClick={props.onCLick}
        >
            {props.url ? (
                <Link 
                    href={props.url}
                     >
                    {renderizarLink()}
                </Link>

                ):(
                    
                    renderizarLink()
                )}
        </li>
    );
}