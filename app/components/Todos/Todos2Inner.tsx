"use client"
import { use } from "react";

export function Todos2Inner(props: {
    todosPromise: Promise<Array<{
        id: number, 
        title: string
    }>>
}) {



    const data = use(props.todosPromise);


    return <div>
        {data.map((v) => {
            return <div key={v.id}>{v.title} </div>
        }
        )}
    </div>
}