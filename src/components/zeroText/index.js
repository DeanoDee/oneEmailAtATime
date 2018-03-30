import {h} from 'preact';
import style from './style';

const ZeroText = ({
    body
}) => {
    console.log("body", body);
    return (
        <div class={style.wrapper}>
            {body.map(
                (paragraph)=>(<p>{paragraph}</p>)
            )}
        </div>
    )
}

export default ZeroText;