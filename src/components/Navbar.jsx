const Navbar = ({ list }) => {
  return (
    <div className="NAV">
      {list.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default Navbar;

