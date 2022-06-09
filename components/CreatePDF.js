import React from "react";
import {
  Document,
  Page,
  Text,
  Image,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

function CreatePDF({ behavior, domain , aim}) {
  const styles = StyleSheet.create({
    page: {
      //     flexDirection: "row",
      backgroundColor: "white",
    },
    section: {
      margin: 10,
      padding: 10,
      //      flexGrow: 1,
    },
    image: {
      width: "20%",
      padding: 10,
    },
    centerImage: {
      alignItems: "center",
      flexGrow: 1,
    },
  });

  const MyDoc = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src="https://i.imgur.com/Bz1HHLx.png" style={styles.image} />
          <Text>Behaviors to be encouraged:</Text>
          <Text>{behavior}</Text>
          <Text>Domain:</Text>
          <Text>{domain}</Text>
          <Text>Aim:</Text>
          <Text>{aim}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div>
      <PDFDownloadLink
        document={<MyDoc />}
        fileName="mockup.pdf"
        className="rounded-md  bg-black"
      >
        {
          ({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          // da fare caricamento con icone, oppure rendere il bottone incliccabile :)
        }
      </PDFDownloadLink>
    </div>
  );
}

export default CreatePDF;
