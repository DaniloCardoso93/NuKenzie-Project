function Form({ filter, setFilter, listOperation, setListOperation }) {

    function addOperation(event) {
        event.preventDefault()
        const deposit = {
            description: event.target.descricao.value,
            type: event.target.select__value.value,
            value: event.target.valor.value * 1
        }

        const withdraw = {
            description: event.target.descricao.value,
            type: event.target.select__value.value,
            value: -1 * (event.target.valor.value)
        }

        if (event.target.select__value.value === "entrada") {
            setListOperation([...listOperation, deposit]);
            setFilter([...filter, deposit]);
        } else {
            setListOperation([...listOperation, withdraw]);
            setFilter([...filter, withdraw]);
        }
    }


    return (
        <form onSubmit={addOperation} className="main__form flex direction-column" action="">
            <label className="text1" htmlFor="descricao">
                Descrição
            </label>
            <input
                className="input-1 headline"
                type="text"
                name="descricao"
                id="descricao"
                placeholder="Digite aqui sua descrição"
            />
            <small className="helpText">Ex: Compra de roupas</small>
            <div className="flex gap-36">
                <div className="flex direction-column">
                    <label className="text1">
                        Valor
                    </label>
                    <input className="input-2" type="text" name="valor" id="valor" placeholder="1" />
                </div>
                <div className="flex direction-column">
                    <label className="text1">
                        Tipo de de valor
                    </label>
                    <select className="select__value" name="select__value" id="select__value">
                        <option value="entrada">Entrada</option>
                        <option value="despesa">Despesa</option>
                    </select>
                </div>
            </div>
            <button
                type="submit"
                className="add__value button-primary"
            >
                Inserir Valor
            </button>
        </form>
    )
}

export default Form