const Menu = ({items, opened}) => {
  if (opened) {
    const menu = items.map((item, index) => <li><a href={item.href}>{item.title}</a></li>);
    return (
      <div className="menu menu-open">
        <div className="menu-toggle"><span/></div>
        <nav>
          <ul>
            {menu}
          </ul>
        </nav>
      </div>
    )
  } else {
    return (
      <div className="menu">
        <div className="menu-toggle"><span/></div>
      </div>
    )
  }
}