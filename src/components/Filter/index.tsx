import "./filter.scss"

const filterArray = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Completed",
  },
  {
    id: 3,
    title: "Incomplete",
  },
]

const Filter: React.FC<{ setFilter: (title: string) => void }> = ({
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
