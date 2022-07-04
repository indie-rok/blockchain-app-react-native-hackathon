import { useContext, useState } from "react";
import { UserContext } from "../context/user";

export async function useUser({ children }) {

    const { user, setUser } = useContext(UserContext)

    return { user, setUser }
}