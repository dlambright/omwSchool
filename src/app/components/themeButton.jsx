export const ThemeButton = ( props ) => {
  const { text, rightIcon } = props;
  return (
    <button
      // {...props}
      style={{
        backgroundColor: '#FC5922',
        padding: '12px 24px',
        fontSize: '1.1rem',
        color: 'white',
        border: 'none',
        borderRadius: '90px',
        cursor: 'pointer',
        fontFamily: 'var(--font-geist-sans)',
        transition: 'background-color 0.3s ease',
        border: '1px solid white'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
        <span>{text}</span>
        {rightIcon}
      </div>
    </button>
  );
};