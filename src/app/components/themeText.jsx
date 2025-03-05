export const ThemeText = ( props ) => {
  const { text, color = "#111111" } = props;
  return (
    <p
      style={{
        color,
        fontSize: '1.2rem',
        fontFamily: 'var(--font-geist-sans)',
        padding: '0px',
        margin: '0 0 4px 0',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '100%',
      }}
    >
      {text}
    </p>
  )
}
