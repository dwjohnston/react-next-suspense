"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";

export function RqProvider(props: PropsWithChildren) {
    const [queryClient] = React.useState(
        () =>
          new QueryClient({
            defaultOptions: {
            
              queries: {
                
                // With SSR, we usually want to set some default staleTime
                // above 0 to avoid refetching immediately on the client
                staleTime: 60 * 1000,
              },
            },
          }),
      )

    return <QueryClientProvider client={queryClient}>

        {props.children}
    </QueryClientProvider>
}