

const GlowingButton = () => {
  const buttonStyle = {
    backgroundColor: '#EC3282',
    borderRadius: '60px',
    border: 'none',
    color: '#eeeeee',
    cursor: 'pointer',
    display: 'inline-block',
    fontFamily: 'sans-serif',
    fontSize: '20px',
    padding: '5px 15px',
    textAlign: 'center',
    textDecoration: 'none',
    animation: 'glowing 1300ms infinite'
  };

  const keyframes = `
    @keyframes glowing {
      0% {
        background-color: #EC3282;
        box-shadow: 0 0 7px #8500EB;
      }
      50% {
        background-color: #EC3082;
        box-shadow: 0 0 27px #8500EB;
      }
      100% {
        background-color: #EC2282;
        box-shadow: 0 0 7px #8500EB;
      }
    }
  `;

  return (
    <div>
      <style>
        {keyframes}
      </style>
      {/* <h2>Create flashing/glowing button</h2> */}
      <a href="#" style={buttonStyle}>01324-3972478</a>
      {/* <button type="submit" style={buttonStyle}>Click here!</button> */}
    </div>
  );
};

export default GlowingButton;
