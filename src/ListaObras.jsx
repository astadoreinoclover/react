import ItemTabela from "./itemTabela";
import { dados } from "./obras";
import { useEffect, useState } from "react";

function ListaObras() {
    const [obras, setObras] = useState([]);

    useEffect(()=> {
        setObras(dados)
    },[])

    const lista = obras.map(arte => 
        <ItemTabela key={arte.id} arte={arte}/>
    )

    return (
        <div className="container mt-3">
            <h2>Obras Dispononíveis Para Exposição:</h2>
            <div className="d-flex flex-wrap">{lista}</div>
        </div>
    )
}

export default ListaObras;