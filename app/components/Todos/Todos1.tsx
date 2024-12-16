"use client"

import { useGetTodosQuery } from "@/lib/features/todos/todos.slice"

export type TodosProps = {
  
}

function exhaustiveCheck(value: never)  : never{

    throw new Error("Exhaustive check reached")
}

export function Todos(props: TodosProps) {

    const todos = useGetTodosQuery({}); 
    console.log("result1", todos)


    if(todos.isLoading || todos.isUninitialized){

        return <div>
            "loading"
        </div>
    }
    if(todos.isError){
        return <div>Error</div>
    }

    if (todos.isSuccess){
        return  <div>
        {todos.data?.map((v) => {
            return <div key={v.id}>
                    {v.title}
                </div>
        })}
    </div>
    }
  

  return exhaustiveCheck(todos);
} 