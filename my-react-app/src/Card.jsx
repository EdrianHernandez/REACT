import Pic from './assets/react.svg';

function Card() {
  
  return (
    <div className="card" style={{ width: '18rem' }}>
        <img className="cardImage" src={Pic} alt="panda"></img>
        <h2 className="cardTitle">Panda</h2>
        <p className="cardText">I love programming</p>
    </div>
  );
}

export default Card