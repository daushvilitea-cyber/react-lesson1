const Navbar = ({ list }) => {
  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default Navbar;

