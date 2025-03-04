import '../globals.css';

export const ThemeHeader = ( props ) => {
  const { text, color = "#2271B1" } = props;
  return (
    <h1 style={{ color, fontFamily: 'Mali', textAlign: 'center' }}>
      {text}
    </h1>
  )
}
