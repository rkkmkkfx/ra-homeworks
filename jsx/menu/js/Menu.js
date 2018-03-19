const Menu = ({items, opened}) => {
  const menuItems = items.map((item, index) => <li><a href={item.href}>{item.title}</a></li>);
  const menu = (<nav><ul>{ menuItems }</ul></nav>);
  return (
    <div className={ "menu" + (opened ? ' menu-open' : '') }>
      <div className="menu-toggle"><span/></div>
      { (opened) ? menu : ''}
    </div>
  )
}