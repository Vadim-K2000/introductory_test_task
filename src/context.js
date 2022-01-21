import { useContext, createContext } from 'react';

export const Context = createContext(null);
const useAppContext = () => useContext(Context);

export default useAppContext;
