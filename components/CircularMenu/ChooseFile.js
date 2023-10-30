//*Internal imports */
import { useCallback, useEffect, useState } from "react";

//*External imports */
import { useDropzone } from "react-dropzone";

//*redux */
import { useDispatch } from "react-redux";
import { clearSelectedPlatforms } from "@/Redux/slices/CircularMenuSlice";

const ChooseFile = ({ ContentType }) => {
  const [paths, setPaths] = useState([]);
  const dispatch = useDispatch();

  const onDrop = useCallback(
    (acceptedFiles) => {
      setPaths(acceptedFiles.map((file) => URL.createObjectURL(file)));
    },
    [setPaths]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    console.log("paths", paths);
  }, [paths]);

  return (
    <section
      style={{
        background:
          "linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)",
      }}
      className="relative rounded-[20px] p-[34px_65px_65px_65px] w-[846px] h-[704px] shadow-[_0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] "
    >
      {/* back btn */}
      <button
        title="Back"
        onClick={() => {
          dispatch(clearSelectedPlatforms());
        }}
        className="absolute top-[34px] left-[65px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
        >
          <path
            d="M13.7165 23.9864L24.37 34.64L21.5612 37.4487L6.11285 22.0003L21.5612 6.55215L24.37 9.36091L13.7165 20.0142H37.8906V23.9864H13.7165Z"
            fill="#242128"
          />
        </svg>
      </button>

      <h1 className="text-[36px] font-bold text-center">
        Create new {ContentType}
      </h1>
      {/* file uploader */}
      <form>
        <div
          {...getRootProps({
            className:
              "rounded-[20px] mt-[34px] cursor-pointer overflow-clip border-dashed bg-white border-[1px] border-black w-[716px] h-[528px] flex items-center justify-center flex-col gap-[14px]",
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
      </form>
    </section>
  );
};

export default ChooseFile;
