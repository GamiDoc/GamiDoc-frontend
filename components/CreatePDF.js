import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { getDomainLocale } from "next/dist/shared/lib/router/router";

function CreatePDF({ behavior  }) {
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
  });

  const MyDoc = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{behavior}</Text>
         
        </View>
      </Page>
    </Document>
  );

  return (
    <div>
      <PDFDownloadLink document={<MyDoc />} fileName="mockup.pdf" className="rounded-md  bg-black">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
          // da fare caricamento con icone, oppure rendere il bottone incliccabile :) 
        }
      </PDFDownloadLink>
    </div>
  );
}

export default CreatePDF;
