import Link from "next/link";
import { useState } from "react";
import {
  Document,
  Page,
  Text,
  Image,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

let requestURL = (process.env.SECURE) ? "https://" : "http://"
requestURL = requestURL + process.env.BACK_ENDPOINT + "/paper/new"

export default function CreatePDF({
  selectedIndex,
  name,
  description,
  behavior,
  domain,
  aim,
  targetCat,
  targetAge,
  modality,
  timing,
  timingDescription,
  contextDescription,
  context,
  device,
  affordances,
  rules,
  aesthetics,
  token
}) {
  const [pdfBlob, setPdfBlob] = useState()

  const styles = StyleSheet.create({
    page: {
      //     flexDirection: "row",
      backgroundColor: "white",
      margin: 20,
      lineHeight: 2,
    },
    section: {
      margin: 10,
      padding: 10,
      //      flexGrow: 1,
    },
    logo: {
      alignContent: "right",
      alignItems: "right",

      width: "20%",
    },
    centerImage: {
      alignContent: "center",
      alignItems: "center",
      alignSelf: "center",
      top: 64,
      width: "40%",
    },
    title: {
      fontSize: "20",
      fontWeight: "black",
      alignContent: "center",
      alignItems: "center",
      alignSelf: "center",
      position: "relative",
      fontfamily: "Sen",
      top: 78,
    },
    tab: {
      fontSize: "18",
      fontWeight: "bold",
      fontfamily: "Sen",
    },
    h1: {
      fontSize: "13",
      fontWeight: "black",
      fontfamily: "Sen",

    },
    h2: {
      fontSize: "11",
      fontfamily: "Sen",
    },
  });

  const MyDoc = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image
          src="https://i.imgur.com/Y3QF08D.png"
          style={styles.centerImage}
          alt="logo"
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
          <Text style={styles.h2}>{targetAge}</Text>
          <Text style={styles.h2}>{targetCat}</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.h1}>Device:</Text>
          <Text style={styles.h2}>{device}</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.h1}>Modality:</Text>
          <Text style={styles.h2}>{modality}</Text>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.h1}>Timing:</Text>
          <Text style={styles.h2}>{timing}</Text>
          <Text style={styles.h2}>{timingDescription}</Text>
          <Text style={styles.h1}>Context:</Text>
          <Text style={styles.h2}>{context}</Text>
          <Text style={styles.h2}>{contextDescription}</Text>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.h1}>Afforndances:</Text>
          <Text style={styles.h2}>{affordances}</Text>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.h1}>Rules:</Text>
          <Text style={styles.h2}>{rules}</Text>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.h1}>Aestethics:</Text>
          <Text style={styles.h2}>{aesthetics}</Text>
        </View>
      </Page>
    </Document>
  );


  return (
    <div className="w-1/2 flex items-center justify-end gap-2" >
      <PDFDownloadLink
        document={<MyDoc />}
        fileName="mockup.pdf"
        className={
          selectedIndex == 8
            ? " py-4 inline-block px-8 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-blue-400 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
            : " invisible"
        }
      >
        {
          ({ blob, url, loading, error }) => {
            setPdfBlob(blob)
            return "Download now!"
          }
          // da fare caricamento con icone, oppure rendere il bottone incliccabile :)
        }
      </PDFDownloadLink>
      {(pdfBlob) ?
        <button
          onClick={() => {
            axios.post(url, {
              title: name,
              description: description,
              behavior: behavior,
              domain: domain,
              aim: aim + targetCat + targetAge,
              modality: modality,
              timing: timing + timingDescription,
              context: context + contextDescription,
              device: device,
              affordances: affordances,
              rules: rules,
              aesthetics: aesthetics,

            },
              {
                headers: {
                  Authorization: "bearer" + token
                }
              })
          }}
          className=" py-4 inline-block px-8 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-blue-400 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
        >
          Save and Send!
        </button> : ""}
    </div >
  );
}
