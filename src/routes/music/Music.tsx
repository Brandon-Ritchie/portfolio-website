import { useEffect } from "react";

export function Music() {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl">Music</h1>
        <p>
          I am a musician and songwriter. I play guitar, bass, and trumpet. I
          also sing and write songs. My music ranges from jazz to pop punk.
        </p>
        <p>
          I have been playing music for over 20 years and have played in various
          bands and projects. My most recent project is a band called Via
          Guillotine, an alternative rock band based in Youngstown, Ohio. You
          can find our Instagram page below, where we post updates about our
          music, shows, and other fun stuff.
        </p>
      </div>

      <div className="flex w-full justify-center">
        <InstagramEmbed />
      </div>
    </div>
  );
}

const InstagramEmbed = () => {
  useEffect(() => {
    // Check if the script is already present
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "//www.instagram.com/embed.js";
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    } else {
      // If script is already loaded, manually reprocess embeds
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/viaguillotine/?utm_source=ig_embed&amp;utm_campaign=loading"
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: "3px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        maxWidth: "540px",
        minWidth: "326px",
        padding: 0,
        width: "99.375%",
      }}
    >
      <div style={{ padding: "16px" }}>
        <a
          href="https://www.instagram.com/viaguillotine/?utm_source=ig_embed&amp;utm_campaign=loading"
          style={{
            background: "#FFFFFF",
            lineHeight: 0,
            padding: "0 0",
            textAlign: "center",
            textDecoration: "none",
            width: "100%",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#F4F4F4",
                borderRadius: "50%",
                height: "40px",
                marginRight: "14px",
                width: "40px",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "4px",
                  height: "14px",
                  marginBottom: "6px",
                  width: "100px",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "4px",
                  height: "14px",
                  width: "60px",
                }}
              ></div>
            </div>
          </div>
          <div style={{ padding: "19% 0" }}></div>
          <div style={{ textAlign: "center", paddingTop: "8px" }}>
            <span
              style={{
                color: "#3897f0",
                fontFamily: "Arial,sans-serif",
                fontSize: "14px",
                fontWeight: "550",
              }}
            >
              View this profile on Instagram
            </span>
          </div>
        </a>
        <p
          style={{
            color: "#c9c8cd",
            fontFamily: "Arial,sans-serif",
            fontSize: "14px",
            lineHeight: "17px",
            marginBottom: 0,
            marginTop: "8px",
            overflow: "hidden",
            padding: "8px 0 7px",
            textAlign: "center",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          @
          <a
            href="https://www.instagram.com/viaguillotine/?utm_source=ig_embed&amp;utm_campaign=loading"
            style={{
              color: "#c9c8cd",
              fontFamily: "Arial,sans-serif",
              fontSize: "14px",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            viaguillotine
          </a>{" "}
          • Instagram photos and videos
        </p>
      </div>
    </blockquote>
  );
};
