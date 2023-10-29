import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
// File
import jatayu from '../img/pomosda-logo.png';
import Romo from '../img/bpk.jpg';


const Ngaji = () => {
    return (
    <div className="Bg">
    <div className="col-sm1">
    <div className="col-sm0">
        <a className="navbar-brand">
          <img src={jatayu} height="40" width="40" className="Logo" alt="" />
            kajian Romo kyai tanjung
        </a>
    </div>
      <td>
          <div className = "row">
            <div className = "flex-container fade1">
                <div className="flex-item-left">
                    <iframe width={350} height={245} src="https://www.youtube.com/embed/9eBrQNAVrH8"  allow="fullscreen;" />
                      <h2 className='judulA'>Belajar Agar bebas dari Kedunguan dan pembodohan !</h2>
                </div>
                <div className="flex-item-center">
                <iframe width={350} height={245} src="https://www.youtube.com/embed/xkzt73CVF_E"  allow="fullscreen;" />
                        <h2 className='judulA'>Ciri Orang tidak Tersesat</h2>
                </div>
                <div  className="flex-item-right">
                <iframe width={350} height={245} src="https://www.youtube.com/embed/Hp2eu5_pwTk"  allow="fullscreen;" />
                        <h2 className='judulA'>Nabi Muhammad Bukan keturunan siapapun</h2>
                </div>
            </div>

            <div className = "flex-container fade2">
            <div  className="flex-item-left">
                <video width={350} height={300} controls>
                     {/* <source src={} type="video/mp4" /> */}
                </video> 
                    <h2 className='judulA'>Perwujudan segmen 1</h2>
            </div>
                <div  className="flex-item-center">
                  <video width={350} height={300} controls>
                     {/* <source src={} type="video/mp4" /> */}
                      </video> 
                        <h2 className='judulA'>Perwujudan Segmen 2</h2>
                </div>
                <div  className="flex-item-right">
                  <video width={350} height={300} controls>
                     {/* <source src={} type="video/mp4" /> */}
                      </video> 
                        <h2 className='judulA'>Perwujudan Segmen 3</h2>
                </div>
            </div>
        </div>
      </td>
    </div>
        <div className='bioclass'>
            <div className='content'>
            <article>
                <div className='contHead'>
                    <h2>
                        Romo Kyai Tanjung
                    </h2>
                </div>
                <img src={Romo} />
                <div className='contentXs9'>
                    <h2> Kyai Tanjung </h2>
                </div>
                    <div className='teksCont'>
                        <p><br />
                            Awal segala sesuatu disebut ada kehidupan adalah kenal dan saling mengenal,<br />
                            maka siapapun anda, ENGKAU ADALAH SAUDARAKU. Karena aku mengenal anda dari mana <br /> tubuhmu berasal
                            dan aku kenal anda dari mana ruhmu yang melekat.<br />
                            Dan obatilah Penyakit batinmu dengan memaafkan dan saling mendoakan.
                        </p>
                    </div>
            </article>
        </div>
        </div>
    </div>
    );
}

export default Ngaji