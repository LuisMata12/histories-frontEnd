import { Link } from 'react-router-dom'
import './styles/card.css'

export const HistoriesCards = ({img,title,id,fun}) => {
  return (
    <>
        <div className="card-histories-container">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <div className='d-flex'>
                <button className='btn btn-primary m-1'>Download</button>
                <button className='btn btn-danger m-1' onClick={()=>fun(id)}>Delete</button>
                <Link to={`/pdf/${id}`}>
                  <button className='btn btn-primary m-1'>View</button>
                </Link>
            </div>
        </div>
    </>
  )
}
