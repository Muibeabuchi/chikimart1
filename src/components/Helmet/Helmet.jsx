

function Helmet({title,children}) {

  document.title = 'Chikimart - ' + title;
  return (
    <div className="w-100">{children}</div>
  )
}

export default Helmet