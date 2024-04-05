import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Manga } from "../interfaces/Manga";

export const mangasApi = createApi({
    reducerPath: "mangasApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.jsonbin.io/v3/b/66106a88acd3cb34a8340646?meta=false"}),
    endpoints: (builder) =>({
        mangas: builder.query<Manga[], void>({
            query: () => ""
        })
    })
})

export const { useMangasQuery } = mangasApi