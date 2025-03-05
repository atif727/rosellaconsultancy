export function Menubar() {
  return (
    <nav>
      <div className="logo">Brand</div>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#about">Services</a>
        </li>
        <li>
          <a href="#about">Gallery</a>
        </li>
        <li>
          <a href="#">Feedback</a>
        </li>
      </ul>
    </nav>
  );
}
