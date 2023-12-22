import { defineStore } from 'pinia'

export const useQrStore = defineStore('QrStore', {
	state: () => { 
		return {
			code:''
		}
	},
})