import { useLocalStorage } from './useLocalStorage'


export const useDarkMode = (initalValue) => {

    const [dmOn, setDmOn] = useLocalStorage('darkMode')

    const sliderToggle = evt => {
        if(initalValue === 'darkmode'){
          evt.preventDefault()  
          setDmOn(!dmOn);
        }
        else{ return initalValue }
      };
      

    return [dmOn, sliderToggle]
}