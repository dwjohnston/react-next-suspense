"use client"
import { useGetTodosQuery, useLazyGetTodosQuery } from "@/lib/features/todos/todos.slice"
import { Suspense, use } from "react";
import { usePromise } from "../hooks/usePromise";
import { Todos2Inner } from "./Todos2Inner";

export type TodosProps = {
  
}

function exhaustiveCheck(value: never)  : never{

    throw new Error("Exhaustive check reached")
}

const prom2 = new Promise((res) => {
    setTimeout(() => res("hello"), 1000);
})

export function Todos(props: TodosProps) {

    const result = useGetTodosQuery({});

    // console.log("result2", result)
    const prom = usePromise(result);
    // console.log(prom)

    // console.log(data)
   
    return  <div>

            <Todos2Inner todosPromise ={prom}/>
    </div>  

} 