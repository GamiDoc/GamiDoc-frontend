import Swal from "sweetalert2"
import { useEffect, useState } from "react"
import TextField from "@mui/material/TextField";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import Image from "next/image"
import { useRouter } from "next/router"

function Aesthetics({
  aesthetics,
  setAesthetics,
  images,
  setImages,
  imgUrl,
  setImgUrl,
  saveDraft
}) {
  const router = useRouter()
  useEffect(() => {
    if (images.lenght == 0) return

    let newUrls = []
    images.forEach(img => {
      newUrls.push(URL.createObjectURL(img))
    });
    setImgUrl(newUrls)
  }, [images])

  return (
    <div className="flex flex-col py-4 w-[60em]">
      <label className="mt-4 block text-gray-700  font-bold mb-2">
        <IconButton aria-label="Example">
          <InfoOutlinedIcon sx={{ fontSize: 20 }} onClick={() => {
            Swal.fire({ title: 'Your changes have been saved in a Draft', icon: 'info' })
            saveDraft()
            router.push("documentation#aesthetics")
          }} />
        </IconButton>
        Aesthetics
      </label>
      <h2 className="w-[60em] mt-4 block text-gray-700  mb-2 ">
        Lastly, the aesthetics component contains all the information related to
        the aesthetic part of the software. Aesthetics has a direct relationship
        with the users’ experience: the more beautiful the aesthetic part is,
        the more interesting and compelling the users will find it. Hence, this
        leads to better levels of motivation and engagement. The rationale
        behind this feature comes from several example of game design documents
        we have explored during the design of this tool. Despite this component
        is highly regarded when making video games, it seems to be completely
        neglected when analyzing serious games and gamified solutions. In this
        part, researchers and practitioners have to report decisions and
        examples related to the aesthetic part and decisions on the user
        interface.
      </h2>
      <label className="block text-gray-700   font-bold mb-2" />
      <TextField
        className="  w-full border shadow-md "
        id="username"
        type="text"
        multiline
        placeholder="Aesthetics"
        rows={3}
        value={aesthetics}
        onChange={(e) => setAesthetics(e.target.value)}
      />

      <input
        className="gap-9 w-full border cursor-default rounded-md bg-white py-2 pl-3 pr-10  shadow-md"
        type="file"
        name="myImage"
        accept="image/*"
        multiple
        onChange={
          (e) => {
            setImages([...e.target.files])
          }
        }
      />
      <div className="grid-cols-2 gap-3 mt-5">
        {imgUrl.map((imgURL) => <Image alt="Non caricate/renderizzate" src={imgURL} width={300} height={300} layout="fixed"
          key={imgUrl.id}
        />)}
      </div>
    </div>
  );
}

export default Aesthetics;
