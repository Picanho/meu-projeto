function OutraLista({ itens }) {
  return (
    <>
      <h3>Lista de alguma coisa:</h3>
      {itens.length > 0 ? (
      itens.map((item, index) => ( // map() é um método de array que retorna um novo array
        <p key={index}>{item}</p>
      ))) : (
        <p>Não há itens na lista</p>
      ) }
    </>
  )
}

export default OutraLista
