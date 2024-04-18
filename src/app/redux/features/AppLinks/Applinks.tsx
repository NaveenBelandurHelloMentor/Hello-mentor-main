import { apiSlice } from "../../api/rootApi";


export const ApplicationLink = apiSlice.injectEndpoints({
   endpoints:(builder) =>({
    getApplication:builder.query({
        query: () => ({url:'api/application/get-application-link'})
    })
   })
})




export const {useGetApplicationQuery} = ApplicationLink