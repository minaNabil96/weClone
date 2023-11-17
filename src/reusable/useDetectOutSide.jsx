import React, { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const useDetectOutside = (ref, id, event) => {
  const [outside, setOutside] = useState(true);

  useLayoutEffect(() => {
    const detectOutside = (e) => {
      if (
        e.target.id !== id &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setOutside(true);
      } else if (id === e.target.id) {
        setOutside(false);
      }
    };

    document.addEventListener(event, detectOutside);
    return () => {
      document.removeEventListener(event, detectOutside);
    };
  }, [id, ref, event]);

  return outside;
};

export default useDetectOutside;
// openMenu ||
