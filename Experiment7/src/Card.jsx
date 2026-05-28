function Card({name,branch,marks}) {
  return (
    <div className="card">
        <h2>{name}</h2>
        <h3>Course:{branch}</h3>
        <h3>Marks:{marks}</h3>
    </div>
  )
}
export default Card
