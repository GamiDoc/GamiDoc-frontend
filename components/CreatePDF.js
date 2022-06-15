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
  selectedIndex,
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
      fontfamily: "Computer Modern",
      top:78,
    },
    tab: {
      fontSize:"18",
      fontWeight:"bold",
      fontfamily: "Computer Modern",
    },
    h1: {
      fontSize: "13",
      fontWeight: "bold",
      fontfamily: "Computer Modern",

    },
    h2: {
      fontSize: "11",
      fontfamily: "Computer Modern",
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
          <Text style={styles.h2}>{domain}</Text>
          <Text style={styles.h1}>Aim:</Text>
          <Text style={styles.h2}>{aim}</Text>
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
        className={
          selectedIndex == 6
            ? " py-4 inline-block px-8 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-blue-400 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
            : " invisible"
        }
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
