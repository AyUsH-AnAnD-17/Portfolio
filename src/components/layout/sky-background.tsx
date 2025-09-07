export function SkyBackground() {
  return (
    <>
      <div className="sky-background" />
      <div className="celestial-body" />
      <div className="stars" />
      
      {/* Animated Birds */}
      <div className="birds-container">
        <div className="bird bird-1" />
        <div className="bird bird-2" />
        <div className="bird bird-3" />
        <div className="bird bird-4" />
        <div className="bird bird-5" />
      </div>
      
      {/* Animated People */}
      <div className="people-container">
        <div className="person person-walking-1" />
        <div className="person person-walking-2" />
        <div className="person person-walking-3" />
      </div>
      
      {/* Clouds */}
      <div className="clouds-container">
        <div className="cloud cloud-1" />
        <div className="cloud cloud-2" />
        <div className="cloud cloud-3" />
      </div>
      
      {/* Ground/Horizon */}
      <div className="horizon-line" />
      
      {/* Trees/Buildings Silhouette */}
      <div className="silhouette-container">
        <div className="tree tree-1" />
        <div className="tree tree-2" />
        <div className="building building-1" />
        <div className="tree tree-3" />
      </div>
    </>
  );
}