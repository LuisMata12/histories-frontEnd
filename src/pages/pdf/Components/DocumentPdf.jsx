import { useParams } from "react-router-dom"
import { Document, Image, Page, Text, View } from "@react-pdf/renderer"


export const DocumentPdf = ({title,sumary,img}) => {

  return (
    <Document>
        <Page size="A4">
            <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Text>{title}</Text>
                <Text>{sumary}</Text>
                <Image src={img} alt="tale" />
            </View>
        </Page>
    </Document>
  )
}