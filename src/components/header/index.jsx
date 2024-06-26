import Nav from "../Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Jamie Thompson's Portfolio</h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section class="hero">
        <div class="hero-cta">
      

          <h2>Hello There!</h2>
          <p>
            <b><i>Welcome to Jamie Thompson's portfolio built via React. My previous projects will be posted here.</i></b>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;