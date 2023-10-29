import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

const Whoami = () => {
    return (
        <div className='vid'>
            <iframe
                width={350}
                height={245}
                src="https://www.youtube.com/embed/N4K5BGNRi9E"
                allowFullScreen
                title="Video"
            />
        </div>
    );
};

export default Whoami;