import axios from "axios";
import { create } from "zustand"
import { persist } from "zustand/middleware";

export const useUserStore = create( persist((set) => ({
    user: null,
    loading: false,
    error: null,

    fetchUser: async () => {
        set({loading: true, error: null});
        try {
            const data = await axios.get("https://dummyjson.com/users/1");
            console.log(data.data)
            set({user: data.data, loading: false})

        } catch(error: any) {
            console.log(error)
            set({error: error.message, loading: false})
        }
    }
}), {name: "Kevin"}))