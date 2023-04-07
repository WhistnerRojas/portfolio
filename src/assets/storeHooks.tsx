import React from 'react'
import { create } from 'zustand'

interface hooked{
    subPage: string;
    privatePage: string;
    auth: Boolean;
    creds: Object;
    setSubPage: (val:string) => void;
    setPrivatePage: (val: string) => void;
    setAuth: () => void;
    setCreds: (val:Object) => void;
}

export const StoreHooks= create<hooked>((set)=>({
    subPage: 'all',
    privatePage: 'dashboard',
    auth: false,
    creds: {
        name: '',
        email: '',
        token: '',
        id:''
    },

    setSubPage: (val:string)=> set((state) => ({...state, subPage: val})),
    setPrivatePage: (val:string)=> set( (state) => ({...state, privatePage: val})),
    setAuth: () => set( state => ({...state, auth: !state.auth})),
    setCreds: (val:Object) => set(state => ({ ...state, creds: val }))

}));