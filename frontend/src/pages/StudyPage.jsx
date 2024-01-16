import {useLocation} from 'react-router-dom';

export default function() {
    const location = useLocation();
    const { title } = location.state;
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
}