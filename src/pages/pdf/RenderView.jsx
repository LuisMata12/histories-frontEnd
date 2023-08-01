import { PDFViewer } from '@react-pdf/renderer'
import useStoriesStore from '../../hooks/useStoriesStore'
import { DocumentPdf } from './Components/DocumentPdf'
import { PdfView } from './Components/PdfView'
import { useParams } from "react-router-dom"

export const RenderView = () => {
     const {stories}= useStoriesStore();
     const {id} = useParams();
     const storie = stories.filter(tale=>tale.id==id)
    const pdf=false;
    console.log(storie[0].sumary)
  return (
    <>
        {
            pdf
            ?<PDFViewer><DocumentPdf title={storie[0].title} sumary={storie[0].sumary} img={storie[0].img}/></PDFViewer>
            :<PdfView  />
        }
    </>
  )
}
