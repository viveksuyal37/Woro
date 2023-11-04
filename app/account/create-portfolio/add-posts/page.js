"use client";

/**BuiltIn Imports */
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

//*External imports */
import { useDropzone } from "react-dropzone";
const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

const page = () => {
  const [paths, setPaths] = useState([]);
  const [caption, setCaption] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      setPaths(acceptedFiles.map((file) => URL.createObjectURL(file)));
    },
    [setPaths]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const HandleEmojiClick = (emojiData) => {
    const { emoji } = emojiData;
    setCaption(caption + emoji);
    setShowEmojiPicker(false);
  };

  return (
    <section className="bg-white relative flex flex-col gap-[46px] rounded-xl p-[44px_122px_40px_92px] w-full h-full overflow-auto">
      <h2 className="text-2xl font-bold ">Create portfolio post</h2>
      {/* back btn */}
      <Link
        className="absolute top-[44px] left-[46px]"
        href="/account/create-portfolio"
        title="Back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7.48012 13.0832L13.2911 18.8942L11.7591 20.4263L3.33268 11.9999L11.7591 3.57359L13.2911 5.10564L7.48012 10.9165L20.666 10.9165L20.666 13.0832L7.48012 13.0832Z"
            fill="#242128"
          />
        </svg>
      </Link>

      <div className="grid w-full grid-cols-2 ">
        {/* left */}
        <div className="relative mr-8">
          {/* top profile */}
          <div className="flex font-bold text-[18px] items-center gap-4">
            <Image
              className="rounded-full"
              src="/assets/images/profile.png"
              alt="profile"
              width="50"
              height="50"
            />
            <h3>Bruce Banner</h3>
          </div>

          {/* caption */}
          <textarea
            value={caption}
            maxLength="700"
            onInput={(e) => {
              setCaption(e.target.value);
            }}
            autoComplete="off"
            className="mt-[34px] outline-none resize-none h-[300px] mr-4 text-[18px] w-full"
            placeholder="Write a caption..."
          ></textarea>

          {/* buttons nd emoji*/}
          <div className="flex flex-col w-full gap-[22px]">
            <div className="flex justify-between w-full">
              <svg
                onClick={() => {
                  setShowEmojiPicker(true);
                }}
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <path
                  d="M17.5013 25.5212C20.8992 25.5212 23.7721 23.392 24.9534 20.417H10.0492C11.2159 23.392 14.1034 25.5212 17.5013 25.5212ZM12.3971 16.042C12.9773 16.042 13.5337 15.8115 13.9439 15.4013C14.3542 14.9911 14.5846 14.4347 14.5846 13.8545C14.5846 13.2743 14.3542 12.7179 13.9439 12.3077C13.5337 11.8975 12.9773 11.667 12.3971 11.667C11.817 11.667 11.2606 11.8975 10.8503 12.3077C10.4401 12.7179 10.2096 13.2743 10.2096 13.8545C10.2096 14.4347 10.4401 14.9911 10.8503 15.4013C11.2606 15.8115 11.817 16.042 12.3971 16.042ZM22.6055 16.042C23.1856 16.042 23.742 15.8115 24.1523 15.4013C24.5625 14.9911 24.793 14.4347 24.793 13.8545C24.793 13.2743 24.5625 12.7179 24.1523 12.3077C23.742 11.8975 23.1856 11.667 22.6055 11.667C22.0253 11.667 21.4689 11.8975 21.0587 12.3077C20.6484 12.7179 20.418 13.2743 20.418 13.8545C20.418 14.4347 20.6484 14.9911 21.0587 15.4013C21.4689 15.8115 22.0253 16.042 22.6055 16.042ZM17.5013 29.167C14.4071 29.167 11.4396 27.9378 9.25172 25.7499C7.0638 23.562 5.83464 20.5945 5.83464 17.5003C5.83464 14.4061 7.0638 11.4387 9.25172 9.25075C11.4396 7.06282 14.4071 5.83366 17.5013 5.83366C20.5955 5.83366 23.563 7.06282 25.7509 9.25075C27.9388 11.4387 29.168 14.4061 29.168 17.5003C29.168 20.5945 27.9388 23.562 25.7509 25.7499C23.563 27.9378 20.5955 29.167 17.5013 29.167ZM17.5013 2.91699C9.43672 2.91699 2.91797 9.47949 2.91797 17.5003C2.91797 21.3681 4.45442 25.0774 7.18933 27.8123C8.54352 29.1665 10.1512 30.2407 11.9205 30.9736C13.6898 31.7064 15.5862 32.0837 17.5013 32.0837C21.369 32.0837 25.0784 30.5472 27.8133 27.8123C30.5482 25.0774 32.0846 21.3681 32.0846 17.5003C32.0846 15.5852 31.7074 13.6889 30.9745 11.9195C30.2417 10.1502 29.1675 8.54254 27.8133 7.18835C26.4591 5.83416 24.8514 4.75996 23.0821 4.02708C21.3128 3.2942 19.4164 2.91699 17.5013 2.91699Z"
                  fill="black"
                />
              </svg>
              <p>{`${caption?.length ? caption.length : 0}/700`}</p>
            </div>
            <button
              style={{
                background: "linear-gradient(95deg, #7F1DFE 0%, #FD5C5C 100%)",
              }}
              className="flex items-center justify-center gap-2 h-[48px] text-white bg-woro-blue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 4.4375C15.3462 4.4375 16.4375 3.34619 16.4375 2H17.5625C17.5625 3.34619 18.6538 4.4375 20 4.4375V5.5625C18.6538 5.5625 17.5625 6.65381 17.5625 8H16.4375C16.4375 6.65381 15.3462 5.5625 14 5.5625V4.4375ZM1 11C4.31371 11 7 8.31371 7 5H9C9 8.31371 11.6863 11 15 11V13C11.6863 13 9 15.6863 9 19H7C7 15.6863 4.31371 13 1 13V11ZM4.87601 12C6.18717 12.7276 7.27243 13.8128 8 15.124C8.72757 13.8128 9.81283 12.7276 11.124 12C9.81283 11.2724 8.72757 10.1872 8 8.87601C7.27243 10.1872 6.18717 11.2724 4.87601 12ZM17.25 14C17.25 15.7949 15.7949 17.25 14 17.25V18.75C15.7949 18.75 17.25 20.2051 17.25 22H18.75C18.75 20.2051 20.2051 18.75 22 18.75V17.25C20.2051 17.25 18.75 15.7949 18.75 14H17.25Z"
                  fill="white"
                />
              </svg>
              <p>Create with AI</p>
            </button>
            <button className="flex items-center justify-center gap-2  h-[48px] text-white bg-woro-blue">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.7004 10.6999V2.8999H13.3004V10.6999H21.1004V13.2999H13.3004V21.0999H10.7004V13.2999H2.90039V10.6999H10.7004Z"
                  fill="white"
                />
              </svg>
              <p>Create Post</p>
            </button>
          </div>

          {/* emojiPicker */}
          {showEmojiPicker && (
            <div className="absolute top-0">
              <EmojiPicker onEmojiClick={HandleEmojiClick} />
            </div>
          )}
        </div>

        {/* right -file Uploader */}
        <div className="justify-self-end">
          <div
            {...getRootProps({
              className:
                "bg-[#FAF9FB] rounded-[20px] mt-[34px] cursor-pointer overflow-clip border-dashed  border-[1px] border-black w-[550px] h-[563px] flex items-center justify-center flex-col gap-[14px] ",
            })}
            title="Click to upload"
          >
            {!paths.length && (
              <>
                <input {...getInputProps()} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                >
                  <path
                    d="M9.58333 21.276L13.4167 17.4426L23.9583 27.9843L30.6667 21.276L36.4167 27.026V9.58333H9.58333V21.276ZM7.66667 5.75H38.3333C39.3919 5.75 40.25 6.60813 40.25 7.66667V38.3333C40.25 39.3919 39.3919 40.25 38.3333 40.25H7.66667C6.60813 40.25 5.75 39.3919 5.75 38.3333V7.66667C5.75 6.60813 6.60813 5.75 7.66667 5.75ZM29.7083 19.1667C28.1206 19.1667 26.8333 17.8795 26.8333 16.2917C26.8333 14.7038 28.1206 13.4167 29.7083 13.4167C31.2961 13.4167 32.5833 14.7038 32.5833 16.2917C32.5833 17.8795 31.2961 19.1667 29.7083 19.1667Z"
                    fill="#C1C1C1"
                  />
                </svg>
              </>
            )}
            {isDragActive && !paths.length ? (
              <p>
                <span className="text-woro-blue">Drop </span> here
              </p>
            ) : (
              !paths.length && (
                <p className="max-w-[123px] leading-tight text-center">
                  Drag & drop or{" "}
                  <span className="text-woro-blue">select a file</span>
                </p>
              )
            )}

            {paths.length !== 0 && (
              <img className="w-full h-full" src={paths[0]} alt="img"></img>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
