import { useRouter } from "next/router"
import Swal from "sweetalert2"
import axios from "axios"

// React-pdf/renderer
import {
  Document,
  Font,
  Page,
  Link,
  Text,
  Image,
  View,
  StyleSheet,
  BlobProvider,
  // PDFDownloadLink,
} from "@react-pdf/renderer";

// Fonts
import senBold from '../public/fonts/sen.bold.ttf'
import robotoItalic from '../public/fonts/roboto.italic.ttf'

export default function CreatePDF({
  selectedIndex,
  token,
  imgUrl,
  name,
  description,
  draftID,

  behavior,
  discBehavior,
  domain,
  aim,
  domainDescription,
  aimDescription,
  targetAge,
  targetUser,
  targetCategory,

  device,
  deviceDescription,
  modality,
  modalityDescription,
  dynamics,
  personalization,

  timing,
  // timingDescription,
  context,
  contextDescription,

  affordances,
  rules,
  aesthetics,
  url
}) {
  const router = useRouter()
  let requestURL = url + "/paper/new"
  function blobToBase64(blob) {
    return new Promise((resolve, _) => {
      var reader = new FileReader();
      reader.onload = function() {
        var dataUrl = reader.result;
        console.log(dataUrl)
        var base64 = dataUrl.split(',')[1];
        resolve(base64);
      }
      reader.readAsDataURL(blob);
    })
  };

  // Font.register({ family: 'Sen-Bold', src: font })
  Font.register({
    family: "Sen-Bold",
    fontStyle: "normal",
    fontWeight: "normal",
    fonts: [
      {
        src: senBold,
      },
    ],
  });
  Font.register({
    family: "Roboto-Italic",
    fontStyle: "normal",
    fontWeight: "normal",
    fonts: [
      {
        src: robotoItalic,
      },
    ],
  });

  const styles = StyleSheet.create({
    page: {
      alignContent: "center",
      alignItems: "center",
      flexDirection: "col",
      backgroundColor: "white",
      margin: "20",
      lineHeight: "2",
    },
    firstPage: {
      width: "80%",
      flexDirection: "col",
      alignContent: "left ",
      alignItems: "left",
      margin: "10",
      padding: "10",
      gap: "12px",
      top: 116,
    },
    section: {
      flexDirection: "col",
      alignContent: "left ",
      alignItems: "left",
      margin: "10",
      padding: "10",
      gap: "12px",

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
      width: "65%",
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
      color: "#5555dd",
      fontfamily: "Sen",
    },
    h2: {
      fontSize: "12",
      fontfamily: "Sen",
      marginTop: "12"
    },
  });

  // My own <br/>
  const Br = () => "\n";

  // The document
  const MyDoc = () => (
    <Document>

      {/* PAGE ONE  */}
      <Page size="A4" style={styles.page}>
        <Image
          src="https://i.imgur.com/Y3QF08D.png"
          style={styles.centerImage}
          alt="logo"
        />
        <View style={styles.firstPage}>
          <Text style={styles.h2}>
            The following gamification design document, called <Text style={{ fontFamily: "Sen-Bold", fontSize: 12 }}>{name}</Text> was created using GamiDOC, a tool developed by the
            <Link src="https://www.unitn.it/" style={{ color: "#5555dd", fontFamily: "Sen-Bold", fontSize: 12 }}> <Text > University of Trento </Text></Link>{","}
            <Link src="https://www.fbk.eu/it/" style={{ color: "#5555dd", fontFamily: 'Sen-Bold', fontSize: 12 }}> <Text >Fondazione Bruno Kessler </Text ></Link> {" and "}
            <Link src="https://uwaterloo.ca/games-institute/" style={{ color: "#5555dd", fontFamily: "Sen-Bold", fontSize: 12 }}> <Text >the Games Institute </Text ></Link> {". "}
            {"You can visit the website "}<Link src="https://gami-doc-frontend-test-auth.vercel.app/" style={{ color: "#5555dd", fontFamily: "Sen-Bold", fontSize: 12 }}> <Text>Here </Text></Link>{"."}
            <Br /><Br />
          </Text>
          <Text style={styles.h2}>
            The tool{`&#39;`}s aim is to guide designers through the design process and the final evaluation of gamified solutions, taking into account contextual information, such as <Text style={{ fontFamily: "Sen-Bold", fontSize: 13 }}> domain, aim, target user,</Text> and <Text style={{ fontFamily: "Sen-Bold", fontSize: 13 }}>  encouraged behaviors</Text>, and information related to <Text style={{ fontFamily: "Sen-Bold", fontSize: 13 }}> game modality</Text>, and the <Text style={{ fontSize: 13, fontFamily: "Sen-Bold" }}>device</Text> used. Moreover, it allows to select feedback and gamification elements according to the previous selection.
            < Br /><Br />
          </Text>
          <Text style={styles.h2}>
            Then, it provides a control over the goodness of the design through a peer-review process.
            <Br /><Br />
          </Text>
          <Text style={styles.h2}>
            To cite the gamification design model implemented or the tool, please refer to <Text style={{ fontFamily: "Sen-Bold", fontSize: 13 }}> Bassanelli S., & Bucchiarone A.</Text>(2022). GamiDOC: a Tool for Designing and Evaluating Gamified Solutions, In Work in progress of the 2022 Annual Symposium on Computer-Human Interaction in Play (CHI PLAY ’22), November 02-05, 2022, Bremen, Germany. ACM, New York, NY, USA, 10 pages.
          </Text>
        </View>
      </Page >

      {/* PAGE TWO  */}
      < Page size="A4" style={styles.page} >
        <Text style={{ fontFamily: "Sen-Bold", fontSize: 22, top: 35 }}>The Model  <Br /></Text>
        <View style={{
          width: "80%",
          flexDirection: "col",
          alignContent: "left ",
          alignItems: "left",
          margin: "10",
          padding: "10",
          gap: "12px",
        }}>
          <Text style={styles.h2}>
            The gamification model implemented in the tool aims to support the designer through a bottom-up process, taking into account contextual information, the game modality and the device used in order to help in selecting the best-fitting gamification elements and feedback. Then it provides a control over the aesthetic features. It allows designers to list the dynamics wanted and unwanted, and eventually personalization and adaptive framework or strategies.
          </Text>
        </View>
        <Image
          src="/model.png"
          style={{
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            width: "65%",
          }}
          alt="logo" />
      </Page >

      {/* Page THREE */}
      < Page size="A4" style={styles.page} >
        <Text style={{ fontFamily: "Sen-Bold", fontSize: 26 }}> Gamification Design Document <Br /><Br /></Text>
        <Text style={{ fontFamily: "Sen-Bold", fontSize: 22 }}> Context<Br /></Text>
        <View style={{
          width: "80%",
          flexDirection: "col",
          alignContent: "left ",
          alignItems: "left",
          margin: "10",
          padding: "10",
          gap: "12px",
        }}>
          <Text style={styles.h2}>
            Contextual information is of crucial importance in the design of gamified solutions (both digital and analogic) in order to get the expectations. In this part, designers reported their contextual choices.
            <Br /><Br />
            {/* Domain */}
            <Text style={{ fontFamily: "Sen-Bold", fontSize: 14 }}>Domain: </Text> This gamified solution will be used in the <Text style={{ fontFamily: "Roboto-Italic", fontSize: 13 }}>{domain}</Text> domain. Specifically, <Text style={{ fontFamily: "Roboto-Italic", fontSize: 13 }}>{domainDescription} </Text>
            <Br /><Br />
            {/* Aim */}
            <Text style={{ fontFamily: "Sen-Bold", fontSize: 14 }}>Aim: </Text> This gamified solution will be used with a <Text style={{ fontFamily: "Roboto-Italic", fontSize: 13 }}>{aim} </Text> purpouse. That is INSERIRE DESCRIZIONE DELLO SCOPO IN RELAZIONE ALLA SCELTA. Specifically, <Text style={{ fontFamily: "Roboto-Italic", fontSize: 13 }}>{aimDescription} </Text>.
            < Br /> <Br />
            {/* User */}
            <Text style={{ fontFamily: "Sen-Bold", fontSize: 14 }}>Target User: </Text> This gamified solution will be used with <Text style={{ fontFamily: "Roboto-Italic", fontSize: 13 }}>{targetAge}</Text> years-old <Text style={{ fontFamily: "Roboto-Italic", fontSize: 13 }}> {targetCategory}</Text>. {(targetUser != "") ? ("Specifically, " + <Text style={{ fontFamily: "Roboto-Italic", fontSize: 13 }}> {targetUser}</Text>) : ""}
            <Br /><Br />
            {/* Behaviors */}
            <Text style={{ fontFamily: "Sen-Bold", fontSize: 14 }}>Encouraged Behaviors: </Text> This gamified solution will encourage the following behaviors among users: <Text style={{ fontFamily: "Roboto-Italic", fontSize: 13 }}>{behavior}</Text>. In the meantime, it should prevent the following behaviors: <Text style={{ fontFamily: "Roboto-Italic", fontSize: 13 }}>{discBehavior}</Text>.
            <Br /><Br />
          </Text>
        </View>
      </Page >

      {/* PAGE FOUR  */}
      < Page size="A4" style={styles.page} >
        <Text style={{ fontFamily: "Sen-Bold", fontSize: 22 }}> Modality<Br /></Text>
        <View style={{
          width: "80%",
          flexDirection: "col",
          alignContent: "left ",
          alignItems: "left",
          margin: "10",
          padding: "10",
          gap: "12px",
        }}>
          <Text style={styles.h2}>
            The users will engaged in a <Text style={{ fontFamily: "Roboto-Italic", fontSize: 13 }}>{modality}</Text> modality. Specifically, <Text style={{ fontFamily: "Roboto-Italic", fontSize: 13 }}>{modalityDescription} </Text>.
          </Text>
        </View>
        <Text><Br /></Text>
        <Text style={{ fontFamily: "Sen-Bold", fontSize: 22 }}> Device<Br /></Text>
        <View style={{
          width: "80%",
          flexDirection: "col",
          alignContent: "left ",
          alignItems: "left",
          margin: "10",
          padding: "10",
          gap: "12px",
        }}>
          <Text style={styles.h2}>
            The gamified tool will be used with the following device <Text style={{ fontFamily: "Roboto-Italic", fontSize: 13 }}>{device} </Text>. Specifically, <Text style={{ fontFamily: "Roboto-Italic", fontSize: 13 }}>{deviceDescription} </Text>
          </Text>
        </View>
      </Page >

      {/* PAGE FIVE*/}
      < Page size="A4" style={styles.page} >
        <Text style={{ fontFamily: "Sen-Bold", fontSize: 26 }}> Core <Br /><Br /></Text>
        <View style={{
          width: "80%",
          flexDirection: "col",
          alignContent: "left ",
          alignItems: "left",
          margin: "10",
          padding: "10",
          gap: "12px",
        }}>
          <Text style={styles.h2}>
            The core refers to the central part of the design. It collects information about game rules, game dynamics, game mechanics and feedback.
            <Br /><Br />
            {/* Rules*/}
            <Text style={{ fontFamily: "Sen-Bold", fontSize: 14 }}>Game Rules: </Text> <Text style={{ fontFamily: "Roboto-Italic", fontSize: 13 }}>{rules}</Text>
            <Br /><Br />
            {/* Affordances, gamification elements*/}
            <Text style={{ fontFamily: "Sen-Bold", fontSize: 14 }}>Gamification Elements: </Text> In this gamified solution,<Text style={{ fontFamily: "Roboto-Italic", fontSize: 13 }}>{affordances.map((element) => { return (element.type + ", ") })}</Text> will be used as gamification elements.
            Specifically:<Br />  <Text style={{ fontFamily: "Roboto-Italic", fontSize: 13 }}>{affordances.map((element) => { return (element.type + ": " + element.text) + ".\n" })}</Text>
            {/* Feedback*/}
            <Text style={{ fontFamily: "Sen-Bold", fontSize: 14 }}>Feedback: </Text>To provide information to the user, feedback with {timing} timing and with <Text style={{ fontFamily: "Roboto-Italic", fontSize: 13 }}>{context}</Text> content will be used. Specifically, <Text style={{ fontFamily: "Roboto-Italic", fontSize: 13 }}>{contextDescription}</Text>.
            <Br /><Br />
            {/* Dynamics*/}
            {(dynamics) ?
              <Text>< Text style={{ fontFamily: "Sen-Bold", fontSize: 14 }}>Dynamics: </Text>  The interaction between users and the gamified solution could lead to certain unwanted dynamics. Hence, within the interaction, the following dynamics should be taken into consideration: <Text style={{ fontFamily: "Roboto-Italic", fontSize: 13 }}>{dynamics}</Text><Br /><Br /> </Text>
              :
              <Text>< Text style={{ fontFamily: "Sen-Bold", fontSize: 14 }}>Dynamics: </Text>Dynamics are not taken into consideration in the design phase.</Text>
            }
            {/* Personalization*/}
            {(personalization) ?
              <Text>< Text style={{ fontFamily: "Sen-Bold", fontSize: 14 }}>Personalization: </Text>  The gamified solution will provide a personalization according to: <Text style={{ fontFamily: "Roboto-Italic", fontSize: 13 }}>{personalization}</Text> <Br /><Br /> </Text>
              :
              < Text > < Text style={{ fontFamily: "Sen-Bold", fontSize: 14 }}>Dynamics: </Text>Personalization strategies won’t be adopted for this gamified solution.</Text>
            }
          </Text>
        </View>
      </Page >
      {/* PAGE SIX */}
      < Page size="A4" style={styles.page} >
        <Text style={{ fontFamily: "Sen-Bold", fontSize: 26 }}>Aesthetics<Br /><Br /></Text>
        <View style={{
          width: "80%",
          flexDirection: "col",
          alignContent: "left ",
          alignItems: "left",
          margin: "10",
          padding: "10",
          gap: "12px",
        }}>
          <Text style={styles.h2}>
            The aesthetic part is of crucial importance, since it has a direct relationship with the users’ experience: the more beautiful the aesthetic part is, the more interesting and compelling the users will find it. In the developed gamified solution <Text style={{ fontFamily: "Roboto-Italic", fontSize: 13 }}> {aesthetics} </Text> will be used.
            <Br />
            IMMAGINI
          </Text>
        </View>
      </Page>
    </Document >
  );


  return (
    <div className="w-1/2 flex items-center justify-end gap-2" >

      <BlobProvider
        document={<MyDoc />}
      >
        {({ blob, url, loading, error }) => {
          return (name && description) ?
            <>
              <button
                onClick={async () => {
                  let result = await Swal.fire({
                    icon: "question",
                    title: 'Do you want to save the changes?',
                    showCancelButton: true,
                    confirmButtonText: 'Save',
                    confirmButtonColor: "#FFB900",
                    cancelButtonColor: "#374151",
                  })
                  if (result.isConfirmed) {
                    // let time = ""
                    let blobString = await blobToBase64(blob)
                    console.log(blob)
                    console.log(blobString)
                    console.log(draftID)
                    // for (let i; i < timing.lenght; i++) time = time + timing[i]
                    axios.post(requestURL, {
                      title: name,
                      description: description,
                      behavior: behavior + "/" + discBehavior,
                      domain: domain + ": " + domainDescription,
                      aim: aim + ": " + aimDescription,
                      device: device + ": " + deviceDescription,
                      targets: [targetAge, targetUser, targetCategory],
                      modality: modality,
                      dynamics: dynamics,
                      personalization: personalization,
                      timing: timing, // + timingDescription
                      context: context + contextDescription,
                      affordances: affordances,
                      rules: rules,
                      aesthetics: aesthetics,
                      draftID: draftID,
                      pdf: blobString,
                    },
                      {
                        headers: {
                          Authorization: "Bearer " + token
                        }
                      })
                      .then((val) => {
                        Swal.fire({ title: 'Paper Saved!', icon: 'success' })
                        router.push("/")
                      })
                      .catch((err) => {
                        Swal.fire({ title: 'Server Error!', icon: 'error' })
                        console.log(err)
                      })

                  }
                }}
                className={
                  selectedIndex == 8 ?
                    " py-4 inline-block px-8 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-blue-400 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
                    : "invisible"
                }
              >
                Save and Send!
              </button>

              <button
                onClick={async () => {
                  const fileURL = window.URL.createObjectURL(blob);
                  let alink = document.createElement('a');
                  alink.href = fileURL;
                  alink.download = `${name}.pdf`;
                  alink.click();
                }}
                className={
                  selectedIndex == 8 ?
                    " py-4 inline-block px-8 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-blue-400 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
                    : "invisible"
                }
              >
                Download!
              </button>
            </>
            : ""
        }
        }
      </BlobProvider>

      {/* <PDFDownloadLink */}
      {/*   document={<MyDoc />} */}
      {/*   fileName={name + ".pdf"} */}
      {/*   className={ */}
      {/*     selectedIndex == 8 */}
      {/*       ? " py-4 inline-block px-8 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-blue-400 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out" */}
      {/*       : " invisible" */}
      {/*   } */}
      {/* > */}
      {/*   { */}
      {/*     ({ blob, url, loading, error }) => { */}
      {/*       return "Download as a PDF" */}
      {/*     } */}
      {/*   } */}
      {/* </PDFDownloadLink> */}
    </div >
  );
}

