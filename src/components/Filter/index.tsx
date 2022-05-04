import "./filter.scss"

import { Dispatch, SetStateAction } from "react"

export type filterType = "all" | "incomplete" | "completed"

type filerArrayType = {
  id: number
  title: filterType
}

const filterArray: filerArrayType[] = [
  {
    id: 1,
    title: "all",
  },
  {
    id: 2,
    title: "incomplete",
  },
  {
    id: 3,
    title: "completed",
  },
]

const Filter: React.FC<{ setFilter: Dispatch<SetStateAction<filterType>> }> = ({
  setFilter,
}) => {
  return (
    <ul className="filter__list">
      {filterArray.map((filter) => (
        <li
          key={filter.id}
          className="filter__item"
          onClick={() => {
            setFilter(filter.title)
          }}
        >
          {filter.title}
        </li>
      ))}
    </ul>
  )
}

export default Filter
