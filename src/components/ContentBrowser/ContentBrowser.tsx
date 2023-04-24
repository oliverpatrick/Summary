import "./ContentBrowser.scss";

const ContentNavigator: React.FC = () => {
  return (
    <div id="content-navigator">
      <input
        id="content-navigator-search-bar-toggle"
        type="text"
        placeholder="Find..."
      />

      {/* <button id="content-navigator-search-bar-toggle" type="button">Find or start a conversation</button>
      <CurrentUserControl />
      <div className="content-navigator-section"> 
        <ContentNavigatorButton>
          <i className="fa-solid fa-person-drowning" />
          <p>Friends</p>
        </ContentNavigatorButton>
        <ContentNavigatorButton>
          <i className="fa-solid fa-fire" />
          <p>Nitro</p>
        </ContentNavigatorButton>
        <DirectMessages />   
      </div> */}
    </div>
  );
};

export default ContentNavigator;
