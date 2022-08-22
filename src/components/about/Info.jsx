import 'boxicons';
const Info = () => {
    return (
        <div className="about-info grid">
            <div className="about-box">
                <box-icon name='award'></box-icon>
                <h3 className="about-title">Experience</h3>
                <span className="about-subtitle">0 Years Working</span>
            </div>
            <div className="about-box">
                <box-icon name='briefcase-alt-2' ></box-icon>
                <h3 className="about-title">Completed</h3>
                <span className="about-subtitle">17+ Projects</span>
            </div>
            <div className="about-box">
                <box-icon name='support' ></box-icon>
                <h3 className="about-title">Support</h3>
                <span className="about-subtitle">Online 24/7</span>
            </div>
        </div>
    );
};

export default Info;