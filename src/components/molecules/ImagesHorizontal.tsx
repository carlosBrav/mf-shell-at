import { JSX } from "react";

type Props = {
  title: string
  children: JSX.Element | null
}

export const ImagesHorizontal = ({
  title = "",
  children = null
}: Props) => {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <p className={`${localStorage.theme === "dark" ? "text-gray-500" : "text-black"}`}>{title}</p>
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
};
