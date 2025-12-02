export default function Article({article, remove, i}) {
  return (
<li key={i} className='article'>
  <span>
    {article}
  </span>
  <button onClick={remove}>X</button>
</li>
  )
}