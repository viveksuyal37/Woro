"use client"

/**BuiltIn Imports */
import Link from "next/link";
import { useCallback, useState } from "react";

//*External imports */
import { useDropzone } from "react-dropzone";

const page = () => {

  const [paths, setPaths] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      setPaths(acceptedFiles.map((file) => URL.createObjectURL(file)));
    },
    [setPaths]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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

      <div className="grid grid-cols-2 w-full">
        {/* left */}
        <div>Left</div>

        {/* right -file Uploader */}
        <div>
          <div
            {...getRootProps({
              className:
                "rounded-[20px] mt-[34px] cursor-pointer overflow-clip border-dashed bg-white border-[1px] border-black w-[550px] h-[563px] flex items-center justify-center flex-col gap-[14px] bg-[#FAF9FB]",
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
