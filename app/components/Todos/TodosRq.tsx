"use client";

import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

export function TodosRq() {

    const query = useQuery<Array<{id: number, title: string}>>({ queryKey: ['todos'], queryFn: async () => {

        await new Promise((res) => setTimeout(res, 10000));
        const res = await  fetch("https://jsonplaceholder.typicode.com/todos")
        return res.json();
    } })


    return <div>
        {query.data?.map((v) => {
            return <div> 
                RQ
                {v.id} {v.title}
            </div>
        })}
    </div>

}