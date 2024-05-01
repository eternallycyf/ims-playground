import '../../index.less';

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img
          alt="logo"
          style={{ width: 16, height: 16 }}
          src="https://ims-view.site/images/origin.png"
        />
        <span>React Playground</span>
      </div>
    </div>
  );
}
