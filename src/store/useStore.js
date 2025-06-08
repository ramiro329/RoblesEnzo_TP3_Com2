import {create} from "zustand"

const useStore = create ((set)=>({
    color: false,




    cambiarColor:()=>set((state)=>({color:!state.color})),    

}))

export default useStore