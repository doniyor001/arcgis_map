import { defineStore } from "pinia";

const url = "https://db.ngis.uz/db/rest/services";

export const useMapStore = defineStore("mapStore",{
    state: () => ({
        map:[],
    }),
    actions:{
        async
    }
})