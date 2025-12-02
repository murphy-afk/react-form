export default function Article({article, remove}) {
  return (
<li className='article'>
  <span>
    {article}
  </span>
  <button onClick={remove}>X</button>
</li>
  )
}