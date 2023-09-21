"use client";
import Sidebar from "./sidebar";
export default function Home({ searchParams }) {

  const { base, session } = searchParams;
  return (
    <>
      <iframe
        src={`https://work.pecha.tools/${base}/?session=${session}`}
        className="w-screen h-screen"
      />
      <Sidebar>
        <iframe className="h-full" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT5gDbwko0iKrR46GjJgsmMgGQXc6EiC9xBugl8BvV66pPz-czBeyO1DfVsti0jg-EJqTZ7dSUCu_qC/pubhtml?widget=true&amp;headers=false"></iframe>
      </Sidebar>
    </>
  );
}
