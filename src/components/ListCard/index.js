import deleteImg from "../../assepts/delete.svg";
import "./card.css"

function ListCard({ transaction, listOperation, setListOperation, filter, setFilter }) {

    function deleteCard() {
        setListOperation(listOperation.filter((element => {
            return element !== transaction
        })))
        setFilter(filter.filter((element => {
            return element !== transaction
        })))
    }

    return (
        <li className={transaction.value > 0 ? "list__card__deposit" : "list__card__withdraw"}>
            <div className="flex direction-column gap-16">
                <h2 className="title2">{transaction.description}</h2>
                <p className="text1">{transaction.type}</p>
            </div>
            <div className="test-color flex align-center gap-36">
                <p>R$ {transaction.value.toLocaleString("brl-BR")}</p>
                <img onClick={deleteCard} src={deleteImg} alt="Lixeira" />
            </div>
        </li>
    )
}

export default ListCard