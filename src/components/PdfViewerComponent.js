import { useEffect, useRef } from "react";

export default function PdfViewerComponent(props) {
  const containerRef = useRef(null);
  const documentUrl = "https://www.africau.edu/images/default/sample.pdf";
  useEffect(() => {
    const container = containerRef.current;
    let instance, PSPDFKit;
    (async function () {
      PSPDFKit = await import("pspdfkit");
      PSPDFKit.unload(container);
      // const headers = new Headers();
      // const encodedCredentials = btoa(`${username}:${password}`);
      // headers.set("Authorization", ``);
      // Fetch the PDF and read the response as an `ArrayBuffer`.
      // const pdfResponse = await fetch(documentUrl, { headers });
      // const documentBuffer = await pdfResponse.arrayBuffer();
      instance = await PSPDFKit.load({
        // Container where PSPDFKit should be mounted.
        container,
        // The document to open.
        document: props.document,
        disableWebAssemblyStreaming: true,
        // document: documentBuffer,
        // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
        baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100vh" }}></div>
  );
}
