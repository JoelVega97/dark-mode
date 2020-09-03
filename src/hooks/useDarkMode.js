import { useLocalStorage } from './useLocalStorage'


export const useDarkMode = (initalValue) => {

    const [dmOn, setDmOn] = useLocalStorage('darkMode')

    if(dmOn === 'darkMode'){
        return dmOn
    }else {return initalValue}
               
    
}