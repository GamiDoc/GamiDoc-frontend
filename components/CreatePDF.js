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

export default function CreatePDF({ 
  name, 
  behavior, 
  domain, 
  aim ,
  target,
  modality,
  timing,
  context
}) {
  const styles = StyleSheet.create({
    page: {
      //     flexDirection: "row",
      backgroundColor: "white",
      margin: 20,
      lineHeight:2,
    },
    section: {
      margin: 10,
      padding: 10,
      //      flexGrow: 1,
    },
    logo: {
      alignContent:"right",
      alignItems:"right",
      
      width: "20%",
    },
    centerImage: {
      alignContent:"center",
      alignItems:"center",
      alignSelf:"center",
      top:64,
      width: "40%",
    },
    title: {
      fontSize: "20",
      fontWeight: "black",
      alignContent:"center",
      alignItems:"center",
      alignSelf:"center",
      position:"relative",
      top:78,
    },
    tab: {
      fontSize:"18",
      fontWeight:"bold",
    },
    h1: {
      fontSize: "13",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "11",
    },
  });

  const MyDoc = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image
          src="https://i.imgur.com/Y3QF08D.png"
          style={styles.centerImage}
        />
        <Text style={styles.title}>{name}</Text>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.h1}>Behaviors to be encouraged:</Text>
          <Text style={styles.h2}>{behavior}</Text>
          <Text style={styles.h1}>Domain:</Text>
          <Text style={styles.h2}>{domain.name}</Text>
          <Text style={styles.h1}>Aim:</Text>
          <Text style={styles.h2}>{aim.name}</Text>
          <Text style={styles.h1}>Target:</Text>
          <Text style={styles.h2}>{target}</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.h1}>Modality:</Text>
          <Text style={styles.h2}>{modality.mode}</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.h1}>Timing:</Text>
          <Text style={styles.h2}>{timing.frame}</Text>
          <Text style={styles.h1}>Context:</Text>
          <Text style={styles.h2}>{context.text}</Text>
        </View>
      </Page>
    </Document>
  );


  return (
    <div className="w-1/2 flex items-center justify-end" >
      <PDFDownloadLink
        document={<MyDoc />}
        fileName="mockup.pdf"
        className="rounded-xl bg-yellow-gamy p-2 hover:font-bold hover:scale-125"
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
