const Header = () => {
  return (
    <header>
      <button
        onClick={async () => {
          const res = await fetch('/api/upload').then((res) => res.json());

          alert(res);
        }}
      >
        request
      </button>
    </header>
  );
};

export default Header;
