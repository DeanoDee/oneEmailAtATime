import {h} from 'preact';

import style from './style';

const ZeroHeader = ({
    inboxCount,
    title,
    from,
    to,
    relativeDate,
    onChange
}) => {
    const formatedInboxCount = inboxCount > 99 ? '99+' : inboxCount;
    console.log(to);
    return (
        <div class={style.wrapper}>
            <div class={style.count}>
                <div class={style.number}>{formatedInboxCount}</div>
                to go
            </div>
            <div class={style.headline}>
                <h1>{title}</h1>
                {from && to && (
                    <div>
                        <h3>{relativeDate}</h3>
                        <h2>{from} to {to}</h2>
                    </div>
                )}
                {!from && to && (
                    <h2>To {to}</h2>
                )}
                {!from && !to && (
                    <h2>
                        To <input class={style.input} type="text" name="to" value={to} onChange={onChange} autofocus/>
                    </h2>
                )}
                
            </div>
        </div>
    );
}

export default ZeroHeader;