import React from "react";
import Logo from "../wrappers/Logo";

function Loading() {
  return (
    <section className="w-full h-screen flex-center flex-col">
        <Logo imageUrl="/assets/img/logo.png" logoClass="logo" />
    </section>
  );
}

export default Loading;
