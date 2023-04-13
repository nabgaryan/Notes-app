const Header = ({ modeHandler }) => {
  return (
    <div className="header">
      <h1>Daily Notes</h1>
      <button onClick={modeHandler}>Toggle Mode</button>
    </div>
  );
};

export default Header;
