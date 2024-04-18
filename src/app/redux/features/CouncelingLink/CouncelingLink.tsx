import {apiSlice} from '../../api/rootApi'

export const CouncelingLink  = apiSlice.injectEndpoints({
    endpoints:(builder:any) =>({
        getCounceling:builder.query({
            query: () => ({url:'api/counselling/get-counselling-link'})
        })
       })
})





export const {useGetCouncelingQuery} = CouncelingLink