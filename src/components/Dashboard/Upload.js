"use client"

export default function FileUploadDemo() {
  return (
    <div className="iframe-container w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg p-6 my-5">
      <iframe
        src="http://skin.test.woza.work/"
        width="100%"
        height="900px"
        style={{ border: "none" }}
        title="Embedded Website"
      ></iframe>
    </div>
  );
}


