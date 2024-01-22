
import { createContext, useContext } from "react";

export const FriendsContexts = createContext({Friends:[]})

export const FriendsContextsProvider = FriendsContexts.Provider

export const useFriendsList = ()=>(useContext(FriendsContexts))
