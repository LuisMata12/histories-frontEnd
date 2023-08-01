import { PDFDownloadLink } from "@react-pdf/renderer";
import { useParams } from "react-router-dom"
import useStoriesStore from "../../../hooks/useStoriesStore";
import { DocumentPdf } from "./DocumentPdf";


export const PdfView = ({mId}) => {
    const {id} = useParams();
    const {stories} = useStoriesStore();

    // Search Storie
    const storie = stories.filter(tale=>tale.id==id)

  return (
    <div>
        <h1>{storie[0].title} </h1>
        <p>{storie[0].sumary}</p>
        <img src={storie[0].img} alt="tale" />
        <PDFDownloadLink document={<DocumentPdf title={storie[0].title} sumary={storie[0].sumary} img={storie[0].img}/>} fileName="Poema5.pdf">
          <button className="btn btn-primary">Dowland</button>
        </PDFDownloadLink>
    </div>
  )
}
