import { create } from "zustand"

interface Count {
    count: number
    increment: () => void
    decrement: () => void
}

export const useCounterStore = create<Count>((set) => (
    {
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 }))
    }
)
)