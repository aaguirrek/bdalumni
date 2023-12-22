import { defineStore } from 'pinia'

export const useCalendarCitasStore = defineStore('allcitas', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      citas:[]
    }
  },
})
