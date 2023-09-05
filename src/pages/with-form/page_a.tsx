import { GetServerSideProps } from "next";
import React from "react";

export const getServerSideProps: GetServerSideProps<any> = (ctx) => {
  return new Promise((resolve, reject) => {
    let buf: any = [];
    ctx.req.on("data", (chunk) => {
      buf.push(chunk);
    });
    ctx.req.on("end", () => {
      const body = Buffer.concat(buf).toString();
      resolve({ props: { body } });
    });
  });
};

const PageA = (props: any) => {
  console.log("🚀 ~ file: page_a.tsx:22 ~ PageA ~ props:", props);
  return (
    <main>
      <h2>Hello, Page A!</h2>
      <div>
        {"We've got "}
        {JSON.stringify(props, null, 2)}
      </div>
    </main>
  );
};

export default PageA;
