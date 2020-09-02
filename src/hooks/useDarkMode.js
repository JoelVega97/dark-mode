import { useLocalStorage } from './useLocalStorage'


export const useDarkMode = (key) => {

    const [dmOn, setDmOn] = useLocalStorage(key)

    const sliderToggle = evt => {
        evt.preventDefault();
        setDmOn(!dmOn);
      };

    return [dmOn, sliderToggle]
}