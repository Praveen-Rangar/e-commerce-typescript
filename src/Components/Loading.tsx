import { ImSpinner9 } from "react-icons/im";

function Loading() {
  return (
    <div className="flex items-center justify-center font-semibold items text-7xl text-red-500">
      <ImSpinner9 className="animate-spin" />{" "}
    </div>
  );
}

export default Loading;
