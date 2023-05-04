function ItemTabela(props) {
    return (
        <div class="card m-3 d-flex" style={{width:400}}>
            <img class="card-img-top" src={props.arte.foto} alt="Card image" style={{width:400, height:300}}/>
            <div class="card-body align-content-end">
                <h2 class="card-title mb-2">{props.arte.nome}</h2>
                <h3 class="card-title">R$ {props.arte.valor},00</h3>
                <p className="card-text mb-0">Obra de: {props.arte.autor}</p>
                <p className="card-text">Pintada em: {props.arte.ano}</p>
                <p className="card-text">Obra disponivel: {props.arte.exposicao ? "Sim" : "Não"}</p>
                <a href="#" class="btn btn-success">Comprar</a>
            </div>
        </div>
    )
}

export default ItemTabela;