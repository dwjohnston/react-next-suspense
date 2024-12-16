import type { Metadata } from "next";
import { Suspense } from "react";
import { TodosRq } from "./components/Todos/TodosRq";
import { TodosRqSuspense } from "./components/Todos/TodosRqSuspense";



export default async function IndexPage() {

  return <div style={{display: "flex"}}>

    <div>


      {/* nb. this suspense boundary won't do anything */}
      {/* <Suspense fallback={'rq loading'}>
        <h2>Todos RQ</h2>
        <TodosRq/>
      </Suspense> */}

      <Suspense fallback={'rq loading'}>
        <h2>Todos RQ</h2>
        <TodosRqSuspense/>
      </Suspense>
    </div>
    </div>
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
