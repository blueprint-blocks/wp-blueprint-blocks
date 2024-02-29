import { useCallback, useEffect } from "react";
import useBeforeUnload from "./use-before-unload";

function usePreventClose(shouldPreventClose) {
  useBeforeUnload(
    useCallback(
      (event) => {
        if (shouldPreventClose) {
          event.preventDefault();
        }
      },
      [shouldPreventClose],
    ),
  );
}

export default usePreventClose;
