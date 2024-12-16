"use client";
import { useEffect, useMemo, useRef } from "react";
import { useGetTodosQuery } from "../../../lib/features/todos/todos.slice";
import { resolveSoa } from "dns";
import { BaseQueryFn, TypedUseQueryHookResult } from "@reduxjs/toolkit/dist/query/react";

export function usePromise<A, B, C extends BaseQueryFn, D, T extends TypedUseQueryHookResult<A, B, C, D>>(input: T ) : Promise<T> {

  const promiseAndResolver = useMemo(() => {
    return Promise.withResolvers();
  }, [])

  console.log(input)

  useEffect(() => {

   if(input.isSuccess || input.isError){
     promiseAndResolver.resolve(input);
   }


  }, [input]);

  return promiseAndResolver.promise as Promise<T>;
}
