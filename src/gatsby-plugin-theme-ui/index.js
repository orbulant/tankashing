import { future } from "@theme-ui/presets"

const theme = {
  ...future,
  styles: {
    ...future.styles,
  },
  config: {
    useLocalStorage: false,
    initialColorModeName: 'dark',
  },
  colors: {
    text: '#fff',
    background: '#000',
  }
}

export default theme
