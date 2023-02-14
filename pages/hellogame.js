import React, { Fragment } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function HelloGame() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/HelloGame/Build/HelloGame.loader.js",
    dataUrl: "/HelloGame/Build/HelloGame.data",
    frameworkUrl: "/HelloGame/Build/HelloGame.framework.js",
    codeUrl: "/HelloGame/Build/HelloGame.wasm",
  });

  return (
    <Fragment>
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity className="min-w-full min-h-screen"
        unityProvider={unityProvider}
        style={{ visibility: isLoaded ? "visible" : "hidden" }}
      />
    </Fragment>
  );
}