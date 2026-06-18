"use client";

import Script from "next/script";

const PLAYER_ID = "vid-6a3301b51d8db4c8e4a68d8d";
const PLAYER_SCRIPT_SRC =
  "https://scripts.converteai.net/aede18a7-d583-4407-85fb-04b064ef8dd8/players/6a3301b51d8db4c8e4a68d8d/v4/player.js";

export default function VturbPlayer() {
  return (
    <>
      <div
        className="w-full h-full"
        dangerouslySetInnerHTML={{
          __html: `<vturb-smartplayer id="${PLAYER_ID}" style="display:block;margin:0 auto;width:100%;height:100%;"></vturb-smartplayer>`,
        }}
      />
      <Script
        src={PLAYER_SCRIPT_SRC}
        strategy="lazyOnload"
        id={`vturb-player-script-${PLAYER_ID}`}
      />
    </>
  );
}
