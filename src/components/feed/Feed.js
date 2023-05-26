import Data from '../assets/data.json';
console.log(Data)

const Feed = ({
  araba_modeli,
  uretim_yili,
  araba_markasi,
  araba_kilometresi,
  arabanin_fiyati,
  resim_url,
})=>{
    <div className="card-container">
      <div  className="container">
        <div className="card">
          <div className="intro">
            <h1>{araba_modeli}</h1>
            <h3>{uretim_yili}</h3>
            <h4>{araba_markasi}</h4>
          </div>
        </div>
      </div>
    </div>
}

export default Feed;
