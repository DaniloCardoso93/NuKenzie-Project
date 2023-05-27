import ListCard from "../ListCard";

import "./list.css";

import NoCard from "../../assepts/NoCard.svg";

function renderCards({ listOperation, setListOperation, filter, setFilter }) {
  return (
    <>
      {
        listOperation.length ? (
          <ul className="ul__card">
            {filter.length ? (
              filter.map((element, index) => (
                <ListCard
                  key={index}
                  transaction={element}
                  listOperation={listOperation}
                  setListOperation={setListOperation}
                  filter={filter}
                  setFilter={setFilter}

                />
              ))
            ) : (
              listOperation.map((element, index) => (
                <ListCard
                  key={index}
                  transaction={element}
                  listOperation={listOperation}
                  setListOperation={setListOperation}
                  filter={filter}
                  setFilter={setFilter}

                />
              )))

            }
          </ul>

        ) : (
          <ul>
            <li className="flex direction-column gap-16">
              <h2 className="title2">Você ainda não possui nenhum lançamento</h2>
              <img src={NoCard} alt="Sem lançamento" />
            </li>
          </ul>
        )
      }
    </>
  );
}

export default renderCards;
