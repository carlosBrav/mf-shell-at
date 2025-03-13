type Props = {
  title: string;
  source: string;
  ref?: any
  width?: number
  height?: number
  onClick?: () => void
};

export const BoxImage = ({ onClick ,title = "", source = "", ref, width =220, height=230 }: Props) => {
  return (
    <div onClick={onClick} ref={ref} style={{width, height}} className="flex flex-col rounded-md border border-black bg-white flex-shrink-0 cursor-pointer">
      <div className="w-full h-6 flex flex-row justify-center items-center border-b border-b-black">
        <p className={`${localStorage.theme === "dark" ? "text-gray-500" : "text-black"}`}>{title.charAt(0).toUpperCase() + title.slice(1)}</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={source}
          alt="foto"
          style={{
            width: 200,
            height: 200,
            borderRadius: 8,
            objectFit: "fill",
          }}
        />
      </div>
    </div>
  );
};
