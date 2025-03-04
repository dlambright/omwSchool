export const ThemeText = ( props ) => {
  const { text, color = "#111111" } = props;
  return (
    <p
      style={{
        color,
        fontSize: '1.2rem'
      }}
    >
      {text}
    </p>
  )
}
