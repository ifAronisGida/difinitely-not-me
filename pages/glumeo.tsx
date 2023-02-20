import React, { Fragment } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Glumeo() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/Glumeo/Build/Glumeo.loader.js",
    dataUrl: "/Glumeo/Build/Glumeo.data",
    frameworkUrl: "/Glumeo/Build/Glumeo.framework.js",
    codeUrl: "/Glumeo/Build/Glumeo.wasm",
  });

  return (
    <>
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        className="min-w-full min-h-screen"
        unityProvider={unityProvider}
        style={{ visibility: isLoaded ? "visible" : "hidden" }}
      />
    </>
  );
}
