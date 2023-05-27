import "./nav.css"

function Nav({ listOperation, filter, setFilter }) {

    function filterDeposit() {
        setFilter(listOperation.filter((element => {
            return element.type === "entrada"
        })))
        console.log(filter)
    }

    function filterWithdraw() {
        setFilter(listOperation.filter((element => {
            return element.type === "despesa"
        })))
        console.log(filter)
    }

    function filterAll() {
        setFilter(listOperation.filter((element => {
            return listOperation
        })))
        console.log(filter)
    }

    return (
        <div className="box__main">
            <div className="box__nav flex justify-between align-center">
                <h2 className="title3">Resumo Financeiro</h2>
                <div className="nav flex gap-16">
                    <button onClick={filterAll} className="button-secondary nav__btn__all">
                        Todos
                    </button>
                    <button onClick={filterDeposit} className="button-secondary nav__btn">
                        Entradas
                    </button>
                    <button onClick={filterWithdraw} className="button-secondary nav__btn">
                        Despesas
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Nav