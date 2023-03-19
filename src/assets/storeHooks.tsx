import React from 'react'
import { create } from 'zustand'


interface hooked{
    page: string;
    subPage: string;
    privatePage: string;
    auth: Boolean;
    creds: Object;
    setPage: (val: string) => void;
    setSubPage: (val:string) => void;
    setPrivatePage: (val: string) => void;
    setAuth: () => void;
    setCreds: (val:Object) => void;
}

export const StoreHooks= create<hooked>((set)=>({
        page: 'home',
        subPage: 'all',
        privatePage: 'dashboard',
        auth: false,
        creds: {
            name: '',
            email: '',
            token: '',
            id:''
        },

        setPage: (val:string)=> set((state) => ({...state, page: val})),
        setSubPage: (val:string)=> set((state) => ({...state, subPage: val})),
        setPrivatePage: (val:string)=> set( (state) => ({...state, privatePage: val})),
        setAuth: () => set( state => ({...state, auth: !state.auth})),
        setCreds: (val:Object) => set(state => ({ ...state, creds: val }))

    }));