import { createContext } from "react";

export const BASE_USER = { address: '0x3CFd9563d4CD5D052F83D50601b2fD1898496410', mnemonic: { phrase: 'dream draft guard border right ghost museum oval wall cherry unfold success' }, privateKey: '0x10444e4c1606b72bfd3618722e50c231033987ae44e2224a1c6be24484e27cda' }

export const UserContext = createContext(BASE_USER);
