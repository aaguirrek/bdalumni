import { defineStore } from 'pinia'

export const useEventStore = defineStore('events', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      events: [],
      tareas:[],
      setTareasKanban:false,
      setTareasViewName:''
    }
  },
})
