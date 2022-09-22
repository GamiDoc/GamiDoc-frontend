import { useRouter } from "next/router"
import Link from "next/link";
import { useRef, useState } from "react";
import axios from "axios"
import {
  Document,
  Page,
  Text,
  Image,
  View,
  StyleSheet,
  PDFDownloadLink,
  BlobProvider
} from "@react-pdf/renderer";


export default function CreatePDF({
  selectedIndex,
  token,
  imgUrl,
  name,
  description,

  behavior, domain,
  aim,
  targetAge,

  device,
  modality,
  dynamics,
  personalization,

  timing,
  timingDescription,
  context,
  contextDescription,

  affordances,
  rules,
  aesthetics,
  url
}) {
  const [pdfBlob, setPdfBlob] = useState()
  // let pdfBlob = useRef()
  const router = useRouter()
  let requestURL = url + "/paper/new"

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
        <Text style={styles.h2}>{description}</Text>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.h1}>Behaviors to be encouraged:</Text>
          <Text style={styles.h2}>{behavior}</Text>
          <Text style={styles.h1}>Domain:</Text>
          <Text style={styles.h2}>{domain}</Text>
          <Text style={styles.h1}>Aim:</Text>
          <Text style={styles.h2}>{aim}</Text>
          <Text style={styles.h1}>Target Age:</Text>
          <Text style={styles.h2}>{targetAge}</Text>
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
          <Text style={styles.h1}>Dynamics:</Text>
          <Text style={styles.h2}>{dynamics}</Text>
          <Text style={styles.h1}>Personalization:</Text>
          <Text style={styles.h2}>{personalization}</Text>
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
          <Text style={styles.h1}>Affordances:</Text>
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
        <View style={styles.section}>
          {imgUrl.map((val) =>
            <Image
              key={val.id}
              src={val}
              style={styles.tab}
              alt="logo"
            />
          )}
        </View>
      </Page>
    </Document>
  );


  return (
    <div className="w-1/2 flex items-center justify-end gap-2" >

      <BlobProvider
        // document={MyDoc}
        document={<MyDoc />}
      >
        {({ blob, url, loading, error }) => {
          setPdfBlob(blob)
          return ""
        }}
      </BlobProvider>

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
            return "Download now!"
          }
          // da fare caricamento con icone, oppure rendere il bottone incliccabile :)
        }
      </PDFDownloadLink>
      {(name && description) ?
        <button
          onClick={() => {
            let time = ""
            for (let i; i < timing.lenght; i++) time = time + timing[i]
            axios.post(requestURL, {
              title: name,
              description: description,
              behavior: behavior,
              domain: domain,
              aim: aim + targetAge,
              device: device,
              modality: modality,
              dynamics: dynamics,
              personalization: personalization,
              timing: time + timingDescription,
              context: context + contextDescription,
              affordances: affordances,
              rules: rules,
              aesthetics: aesthetics,
              pdf: pdfBlob.toString("base64")
            },
              {
                headers: {
                  Authorization: "Bearer " + token
                }
              })
              .then((val) => {
                // console.log(val)
                router.push("/")
              })
              .catch((err) => console.log(err))
          }}
          className=" py-4 inline-block px-8 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-blue-400 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
        >
          Save and Send!
        </button> : ""}
    </div >
  );
}
