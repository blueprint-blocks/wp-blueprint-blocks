import { useEffect } from "react";

function useBeforeUnload(callback) {
  useEffect(() => {
    window.addEventListener("beforeunload", callback);

    return () => {
      console.log("removed event listener");
      window.removeEventListener("beforeunload", callback);
    };
  }, [callback]);
}

export default useBeforeUnload;
