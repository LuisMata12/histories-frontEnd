import { HistoriesCards } from './components/HistoriesCards'
import { useForm } from '../../hooks/useForm'
import useStoriesStore from '../../hooks/useStoriesStore'

import './styles/generate.css'

export const Generate = () => {

  // form driver
  const {form, onChange} = useForm({
    title:'',
    promp:'',
    ege:'',
    genre:'ss',
  })
  const{title, promp, ege, genre}=form;
  
  //hook store
  const {stories,onDeleteStorie,onAddNewStorie} = useStoriesStore();

  const onSubmit=(e)=>{
    e.preventDefault();
    // TODO:Create and save new storie in DB
    // onAddNewStorie()
    console.log(form)
  }


  return (
    <div className='container-generate'>
      <div className='row'>
        <div className='grid-histories flex col-8'>
          <h2 className='text-center'>Your stories</h2>
          <div className='d-flex'>
            {
              stories.map(storie=>(<HistoriesCards key={storie.id} img={storie.img} title={storie.title} id={storie.id} fun={onDeleteStorie}/>))
            }
          </div>
        </div>
        <div className='form-generate col-4 p-4'>
          <h2 className='title-form text-center'>Generate</h2>
          <form className='d-flex flex-column aling-items-center' onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Historie Title</label>
              <input 
                type="text" 
                className="form-control" 
                id="exampleInputEmail1"
                name='title'
                value={title}
                onChange={onChange}
                />
            </div>
            <div className="mb-2">
              <label className="form-label">Ege</label>
              <input 
                type="number" 
                className="form-control"
                name='ege'
                value={ege}
                onChange={onChange}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Genre</label>
              <input 
                type="text" 
                className="form-control"
                name='genre'
                value={genre}
                onChange={onChange}
              />
            </div>
            <div className="mb-2">
              <label className="floatingTextarea2">Decription</label>
              <textarea
                className="form-control"
                name='promp'
                value={promp}
                onChange={onChange}
              />
              <div id="emailHelp" className="form-text">Enter the idea of ​​the story you want, remember that the more specific, the better results.</div>
            </div>
            <button type="submit" className="btn btn-primary mt-2">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
