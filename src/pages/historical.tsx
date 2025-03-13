import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";

const PageMF2 = React.lazy(() =>
  import("mf2/Page").then((mod) => ({ default: mod.default }))
);

export const Historical = () => {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/principal");
  };
  return (
    <Suspense fallback={<div>Cargando microfrontend...</div>}>
      <PageMF2 back={backToHome} />
    </Suspense>
  );
};
