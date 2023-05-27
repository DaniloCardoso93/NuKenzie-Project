import "./money.css"

function Money({ listOperation }) {
    const totalMoney = listOperation.reduce((act, acc) => {
        return act + acc.value
    }, 0)

    return (
        <section className="section__money flex justify-between align-center">
            <h2 className="title3">
                Valor Total
            </h2>
            <p className="headline">R$ {totalMoney.toLocaleString('pt-BR')}</p>

        </section>
    )
}

export default Money