import React , { useState, useRef, useEffect }from 'react';
import './style/home.css';
import h from './imageheadphones.fbd401d9.png';
import s from './imagespeakers.bbb1a70b.png';
import e from './imageearphones.6e8830d4.png';
import szx from './speakerzx.153cd899.png';
import { Link } from 'react-router-dom';
import d from './download.jpg';
import m from './gearimage.4d4a28e9.jpg';
import { ReactComponent as Face } from './icon-facebook.e9773e52.svg';
import { ReactComponent as Insta } from './icon-instagram.8d0df555.svg';
import { ReactComponent as Twit } from './icon-twitter.5dc7711f.svg';

const Item = ({name, number, price, img}) => {
    const [count, setCount] = useState(number);

    function add(a, type) {
        let elem = document.getElementById('total');
        let def = parseInt(elem.innerHTML.replace("$", ""));
        if(type === "i") {
            elem.innerHTML = `$${Math.floor(def) + Math.floor(a)}`;
        }else if(type === "d" && count !== 1){
            elem.innerHTML = `$${Math.floor(def) - Math.floor(a)}`;
        }
    }

    useEffect(() => {
        window.localStorage.setItem(name, [price, count, img]);
    }, [count]);

    return <>
    <div className="w-100 d-flex flex-wrap border-bottom border-dark my-2">
        <img src={require(`./${img}`).default} alt={name} className="w-25"/>
        <p className="w-50 a m-0 d-flex align-items-center">{name}</p>
        <div className="bg-secondary w-25 d-flex justify-content-around align-items-center h-25">
            <button className="border-0 bg-secondary fs-5"
            onClick={() => {setCount((count - 1) > 0 ? count - 1: count ); add(price, "d")}}>-</button>
            <span>{count}</span>
            <button className="border-0 bg-secondary fs-5"
            onClick={() => {setCount(count + 1); add(price, "i")}}>+</button>
        </div>
        <strong className="w-75 py-2">${price}</strong>
    </div>
    </>
}


const ShoppingCart = ({show}) => {
    const div = useRef(null);

    const data2 = [];
    var myTotal = 0;
    const [p, setP] = useState(data2);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        for(var i = 0 ; i < window.localStorage.length; i++) {
            var name = window.localStorage.key(i),
                number = window.localStorage.getItem(name).split(",")[0],
                price = window.localStorage.getItem(name).split(",")[1],
                img = window.localStorage.getItem(name).split(",")[2]
            data2.push([
                name,
                number,
                price,
                img
            ]);
            myTotal += Number(number) * Number(price);
        }
        setP(data2);
        setTotal(myTotal);
    }, [show]);

    if(show){
        return (
            <div className="s-c bg-white position-absolute rounded" ref={div}>
                <div className="w-100 row py-3">
                    <h3 className="col-6 text-center">
                        CART (
                        {document.getElementById('count').innerHTML}
                        )
                    </h3>
                    <button className="btn col-6 text-end"
                    onClick={() => {window.localStorage.clear(); 
                    setP([]);
                    document.getElementById('count').innerHTML = window.localStorage.length;
                    setTotal(0);
                    document.getElementById('total').innerHTML = "$0"}}>
                        <ins>Remove all</ins>
                    </button>
                </div>
                <section className="w-100 border-bottom my-3 py-3 items px-3"
                    id="items">
                    {
                        p.map((a, index) => {
                            return <>
                            <Item key={index}
                            name={a[0]}
                            number={Number(a[2])}
                            price={Number(a[1])}
                            img={a[3]}
                            />
                            </>
                        })
                    }
                    {p.length === 0 && "Cart Is Empty"}
                </section>
                <div className="w-100 d-flex justify-content-around pb-2 flex-wrap">
                    <h5 className="w-50 text-center">TOTAL</h5>
                    <strong className="fs-5 w-50 text-center"
                    id="total">${Math.floor(total)}</strong>
                    {total !== 0 &&
                    <Link to="/checkout" className="b border-0 text-white w-75 fs-5 py-1
                    text-decoration-none text-center">CHECKOUT</Link>
                    }
                </div>
            </div>
        )
    }else {
        return null;
    }
}

const LastAdded = () => {
    return <>
        <section className="last container-fluid">
            <div className="container-md">
            <div className="row">
            <div className="text-white col-lg-6 col-xl-4 col-10">
                <span className="text-muted w-100 text-center text-lg-start">NEW PRODUCT</span>
                <h1 className="py-3 text-center text-lg-start">XX99 MARK II HEADPHONES</h1>
                <p className="pb-4 text-center text-lg-start">Experience natural, lifelike audio and exceptional
                    build quality made for the passionate music
                    enthusiast.</p>
                <Link to="/headphones/2" className="border-0 p-3 text-white text-decoration-none">SEE PRODUCT</Link>
            </div>
            </div>
            </div>
        </section>
    </>
}

const List = () => {
    return <>
    <article className="container my-5 list p-0">
        <div className="row d-flex justify-content-md-between justify-content-center">
        <div className="col-lg-3 d-flex flex-wrap justify-content-center px-lg-5 col-10 col-md-4 p-0 rounded">
            <img src={h} alt="head phones" style={{width: '200px', marginTop: '-70px'}} className="position-absolute"></img>
            <h3 className="text-center pt-5 mt-5 pb-3">HEADPHONES</h3>
            <Link to="/headphones" className="border-0 bg-transparent pb-4 w-100 text-center shop text-decoration-none text-dark">Shop</Link>
        </div>
        <div className="col-lg-3 d-flex flex-wrap justify-content-center px-lg-5 col-10 col-md-3 p-0 my-md-0 my-5 rounded mx-md-1">
            <img src={s} alt="head phones" style={{width: '200px', marginTop: '-70px'}} className="position-absolute"></img>
            <h3 className="text-center pt-5 mt-5 pb-3">SPEAKERS</h3>
            <Link to="/speakers" className="border-0 bg-transparent pb-4 w-100 text-center shop text-decoration-none text-dark">Shop</Link>
        </div>
        <div className="col-lg-3 d-flex flex-wrap justify-content-center px-lg-5 col-10 col-md-4 rounded p-0">
            <img src={e} alt="head phones" style={{width: '200px', marginTop: '-70px'}} className="position-absolute"></img>
            <h3 className="text-center pt-5 mt-5 pb-3">EARPHONES</h3>
            <Link to="/earphones" className="border-0 bg-transparent pb-4 w-100 text-center shop text-decoration-none text-dark">Shop</Link>
        </div>
        </div>
    </article>
    </>
}

const See = () => {
    return <>
    <section className="container">
        <div className="row my-5 py-4 szx justify-content-center align-items-center">
            <img src={szx} alt="speaker" className="col-lg-6 me-lg-5" style={{width: '400px'}}></img>
            <article className="col-lg-6 mt-lg-0 mt-4 ms-lg-5 d-flex flex-wrap text-white align-content-center col-12 col-md-7 justify-content-lg-start justify-content-center">
                <h1 className="text-lg-start text-center">ZX9 SPEAKER</h1>
                <p className="my-4 w-75 text-lg-start text-center">
                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </p>
                <Link to="/speakers/8" className="text-white text-decoration-none bg-dark py-3 px-5 rounded">SEE PRODUCT</Link>
            </article>
            <span></span>
        </div>
        <div className="second-s d-flex flex-wrap align-content-center px-5 mb-5">
            <h1 className="w-100 ms-5">ZX7 SPEAKER</h1>
            <Link to="/speakers/9" className="text-dark text-decoration-none bg-transparent border-dark border p-3 ms-5">SEE PRODUCT</Link>
        </div>
        <div className="row mb-5 justify-content-lg-start justify-content-center">
            <img src={d} alt="head phones" className="col-md-6 col-12"></img>
            <div className="col-md-6 rounded col-11 mt-md-0 mt-4 bg-light d-flex align-content-center flex-wrap p-0 justify-content-center justify-content-lg-start">
            <h1 className="w-100 ms-lg-5 w-100 text-lg-start text-center p-lg-0 p-3">ZX7 SPEAKER</h1>
            <Link to="/earphones/10" className="text-dark text-decoration-none bg-transparent border-dark border p-3 ms-lg-5 m-lg-0 mb-4">SEE PRODUCT</Link>
            </div>
        </div>
    </section>
    </>
}

const Footer = () => {
    return <>
    <footer className="container-fluid bg-dark">
        <div className="container justify-content-md-start justify-content-center">
            <div className="row mt-5 pt-5 justify-content-md-start justify-content-center">
                <strong translate="no" className="col-lg-4 col-12  fs-2 justify-content-md-start justify-content-center logo text-white user-select-none d-flex align-items-center">audiopile</strong>
                <ul className="list-unstyled list-inline col-lg-8 col-md-10 col-12 justify-content-md-between d-flex m-0 flex-md-nowrap flex-wrap">
                    <li className="list-inline-item my-3 justify-content-md-start justify-content-center"><Link to="/" className="h link-light text-decoration-none fw-bold text-md-start text-center">HOME</Link></li>
                    <li className="list-inline-item my-3 justify-content-md-start justify-content-center"><Link to="/headphones" className="h link-light text-decoration-none fw-bold text-md-start text-center">HEADPHONES</Link></li>
                    <li className="list-inline-item my-3 justify-content-md-start justify-content-center"><Link to="/speakers" className="h link-light text-decoration-none fw-bold text-md-start text-center">SPEAKERS</Link></li>
                    <li className="list-inline-item my-3 justify-content-md-start justify-content-center"><Link to="/earphones" className="h link-light text-decoration-none fw-bold text-md-start text-center">EARPHONES</Link></li>
                </ul>
            </div>
            <p className="col-12 text-white text-md-start text-center col-md-9 col-lg-6">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
            </p>
            <div className="row pb-5">
                <span className="text-white col-md-10 m-md-0 my-3 text-md-start text-center">&copy;Copyright2021.</span>
                <div className="col-md-2 d-flex justify-content-md-between justify-content-center">
                    <Link to=""><Face/></Link>
                    <Link to="" className="mx-md-0 mx-4"><Insta/></Link>
                    <Link to=""><Twit/></Link>
                </div>
            </div>
        </div>
    </footer>
    </>
}

const Ham = ({show}) => {
    if(show) {
        return <>
            <div className="ham-list bg-white">
                <ul className="list-unstyled d-flex flex-wrap">
                    <li className="py-3 w-100 d-flex align-items-end border-bottom">
                        <img className="mx-3" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzA2Ljc3MyAzMDYuNzczIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMDYuNzczIDMwNi43NzM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMzAyLjkzLDE0OS43OTRjNS41NjEtNi4xMTYsNS4wMjQtMTUuNDktMS4xOTktMjAuOTMyTDE2NC42Myw4Ljg5OA0KCQljLTYuMjIzLTUuNDQyLTE2LjItNS4zMjgtMjIuMjkyLDAuMjU3TDQuNzcxLDEzNS4yNThjLTYuMDkyLDUuNTg1LTYuMzkxLDE0Ljk0Ny0wLjY2MiwyMC45MDJsMy40NDksMy41OTINCgkJYzUuNzIyLDUuOTU1LDE0Ljk3MSw2LjY2NSwyMC42NDUsMS41ODFsMTAuMjgxLTkuMjA3djEzNC43OTJjMCw4LjI3LDYuNzAxLDE0Ljk2NSwxNC45NjUsMTQuOTY1aDUzLjYyNA0KCQljOC4yNjQsMCwxNC45NjUtNi42OTUsMTQuOTY1LTE0Ljk2NXYtOTQuM2g2OC4zOTh2OTQuM2MtMC4xMTksOC4yNjQsNS43OTQsMTQuOTU5LDE0LjA1OCwxNC45NTloNTYuODI4DQoJCWM4LjI2NCwwLDE0Ljk2NS02LjY5NSwxNC45NjUtMTQuOTY1VjE1NC4wMjRjMCwwLDIuODQsMi40ODgsNi4zNDMsNS41NjdjMy40OTcsMy4wNzMsMTAuODQyLDAuNjA5LDE2LjQwMy01LjUxM0wzMDIuOTMsMTQ5Ljc5NHoiDQoJCS8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" alt="home"/>
                        <Link to="/" className="h link-dark text-decoration-none fw-bold">HOME</Link></li>
                    <li className="py-3 w-100 d-flex align-items-end border-bottom">
                        <img className="mx-3" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjI4Ny4zODZweCIgaGVpZ2h0PSIyODcuMzg2cHgiIHZpZXdCb3g9IjAgMCAyODcuMzg2IDI4Ny4zODYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4Ny4zODYgMjg3LjM4NjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik02Mi43NDMsMTU1LjQzN3Y5OC40MmMwLDUuODY3LDQuNzQxLDEwLjYwNSwxMC42MDUsMTAuNjA1YzUuODU0LDAsMTAuNjA1LTQuNzM4LDEwLjYwNS0xMC42MDV2LTk4LjQyDQoJCQljMC01Ljg1Ni00Ljc1MS0xMC42MDUtMTAuNjA1LTEwLjYwNUM2Ny40ODQsMTQ0LjgzMiw2Mi43NDMsMTQ5LjU3Niw2Mi43NDMsMTU1LjQzN3oiLz4NCgkJPHBhdGggZD0iTTI5LjQ1NiwyNjQuNTgyaDIzLjM1MXYtMTE2Ljg1YzAuMDY0LTAuNTYsMC4xNjYtMS4xMTksMC4xNjYtMS42OTNjMC01MC40MTIsNDAuNjktOTEuNDIsOTAuNjk4LTkxLjQyDQoJCQljNTAuMDAyLDAsOTAuNjkyLDQxLjAwOCw5MC42OTIsOTEuNDJjMCwwLjc3MSwwLjExMywxLjUxOCwwLjIyOCwyLjI2M3YxMTYuMjhoMjMuMzU0YzE2LjI1NCwwLDI5LjQ0Mi0xMy42NCwyOS40NDItMzAuNDY5DQoJCQl2LTYwLjkzNmMwLTEzLjg3OC04Ljk4OS0yNS41Ny0yMS4yNjEtMjkuMjQ5Yy0xLjEyOS02Ni45NzEtNTUuNjA4LTEyMS4xMjQtMTIyLjQ1LTEyMS4xMjQNCgkJCWMtNjYuODYsMC0xMjEuMzQ3LDU0LjE1OC0xMjIuNDY1LDEyMS4xNUM4Ljk1NiwxNDcuNjM4LDAsMTU5LjMyLDAsMTczLjE4N3Y2MC45MjZDMCwyNTAuOTMyLDEzLjE4NywyNjQuNTgyLDI5LjQ1NiwyNjQuNTgyeiIvPg0KCQk8cGF0aCBkPSJNMjAzLjQ1NCwxNTUuNDM3djk4LjQyYzAsNS44NjcsNC43NDgsMTAuNjA1LDEwLjYwNCwxMC42MDVzMTAuNjA0LTQuNzM4LDEwLjYwNC0xMC42MDV2LTk4LjQyDQoJCQljMC01Ljg1Ni00Ljc0OC0xMC42MDUtMTAuNjA0LTEwLjYwNUMyMDguMTkxLDE0NC44MzIsMjAzLjQ1NCwxNDkuNTc2LDIwMy40NTQsMTU1LjQzN3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" alt="head phones"/>
                        <Link to="/headphones" className="h link-dark text-decoration-none fw-bold">HEADPHONES</Link></li>
                    <li className="py-3 w-100 d-flex align-items-end border-bottom">
                        <img className="mx-3" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zODEuMzU0LDBIMTMwLjY0OGMtMjQuODEzLDAtNDUsMjAuMTg3LTQ1LDQ1djQyMmMwLDI0LjgxMywyMC4xODcsNDUsNDUsNDVoMjUwLjcwNWMyNC44MTMsMCw0NS0yMC4xODcsNDUtNDVWNDUNCgkJCUM0MjYuMzU0LDIwLjE4Nyw0MDYuMTY3LDAsMzgxLjM1NCwweiBNMjU2LjAwMSw3Mi41NDRjMjcuMzUxLDAsNDkuNTIzLDIyLjE3Miw0OS41MjMsNDkuNTIzDQoJCQljMCwyNy4zNTEtMjIuMTcyLDQ5LjUyMy00OS41MjMsNDkuNTIzcy00OS41MjMtMjIuMTcyLTQ5LjUyMy00OS41MjNDMjA2LjQ3OCw5NC43MTYsMjI4LjY1LDcyLjU0NCwyNTYuMDAxLDcyLjU0NHoNCgkJCSBNMjU2LjAwMSw0NDUuNDg2Yy02NS4yMDgsMC0xMTguMjU4LTUzLjA1LTExOC4yNTgtMTE4LjI1N3M1My4wNS0xMTguMjU4LDExOC4yNTgtMTE4LjI1OHMxMTguMjU4LDUzLjA1LDExOC4yNTgsMTE4LjI1OA0KCQkJUzMyMS4yMDksNDQ1LjQ4NiwyNTYuMDAxLDQ0NS40ODZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yNTYuMDAxLDI3Ny4zMzhjLTI3LjUxLDAtNDkuODkxLDIyLjM4MS00OS44OTEsNDkuODkxYzAsMjcuNTA5LDIyLjM4MSw0OS44OSw0OS44OTEsNDkuODlzNDkuODkxLTIyLjM4MSw0OS44OTEtNDkuODkNCgkJCUMzMDUuODkyLDI5OS43MTksMjgzLjUxMSwyNzcuMzM4LDI1Ni4wMDEsMjc3LjMzOHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" alt="speaker"/>
                        <Link to="/speakers" className="h link-dark text-decoration-none fw-bold">SPEAKERS</Link></li>
                    <li className="py-3 w-100 d-flex align-items-end border-bottom">
                        <img className="mx-3" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggZD0ibTI5My45MjYgNDg3Ljc3N2EyMS42OTIgMjEuNjkyIDAgMCAwIDIxLjY2Ny0yMS42Njd2LTQuOTgzaC05LjA4NWE1IDUgMCAwIDEgMC0xMGg5LjA4NXYtMjA3LjU0OGExOC4zNTQgMTguMzU0IDAgMCAxIDE4LjMzMy0xOC4zMzMgNSA1IDAgMCAxIDAgMTAgOC4zNDIgOC4zNDIgMCAwIDAgLTguMzMzIDguMzMzdjE1LjY0NWE3Ny42NjYgNzcuNjY2IDAgMCAwIDkyLjUyOS0zNi43MjQgOC41MzggOC41MzggMCAwIDAgMS4wNjEtNC4wODl2LTY2LjA3YTguNDY1IDguNDY1IDAgMCAwIC0xLjAzNS00LjA0MiA3Ny43ODggNzcuNzg4IDAgMCAwIC02Ny40NDQtNDAuNTEzYy0uMjUgMC0uNSAwLS43NTEgMGE3Ni4zNTMgNzYuMzUzIDAgMCAwIC01My45ODUgMjIuNTEgODAuMTE2IDgwLjExNiAwIDAgMCAtMjMuNzA4IDU2LjUwNHYyNjQuMzI3aDE2LjY4M2E1IDUgMCAwIDEgMCAxMGgtMTYuNjgzdjExLjY1YzAgNS4wMDMgOS4zNjcgMTUgMjEuNjY2IDE1em0xMDAuMzA2LTMxNC4wNzdhMTEuNjY3IDExLjY2NyAwIDEgMSAtMTEuNjY3IDExLjY2NyAxMS42OCAxMS42OCAwIDAgMSAxMS42NjctMTEuNjY3em0tODguOTMyLTI5LjA4OWE3Mi4xMjQgNzIuMTI0IDAgMCAxIDI2LjgzOS0xOC44IDUgNSAwIDAgMSAzLjcgOS4yOTIgNjIuMDQzIDYyLjA0MyAwIDAgMCAtMjMuMDkzIDE2LjE4NiA1IDUgMCAwIDEgLTcuNDQzLTYuNjc5em0tMTIuNTkgMzUuNjM1YTUgNSAwIDAgMSAtMy41MDktNi4xMzkgNzIuNTQ0IDcyLjU0NCAwIDAgMSAzLjIxMS05LjI1NCA1IDUgMCAxIDEgOS4yIDMuOTEgNjIuNTYgNjIuNTYgMCAwIDAgLTIuNzY3IDcuOTc0IDUgNSAwIDAgMSAtNi4xMzkgMy41MDl6Ii8+PHBhdGggZD0ibTQzLjA0NyAyMjIuNWE3Ny42NjYgNzcuNjY2IDAgMCAwIDkyLjUyOSAzNi43Mjl2LTE1LjY1YTguMzQyIDguMzQyIDAgMCAwIC04LjMzMy04LjMzMyA1IDUgMCAwIDEgMC0xMCAxOC4zNTQgMTguMzU0IDAgMCAxIDE4LjMzMyAxOC4zMzN2MjA3LjU0OGg5LjA4NWE1IDUgMCAwIDEgMCAxMGgtOS4wODV2NC45ODNhMjEuNjkyIDIxLjY5MiAwIDAgMCAyMS42NjcgMjEuNjY3YzEyLjMgMCAyMS42NjctMTAgMjEuNjY3LTE1di0xMS42NWgtMTYuNjg0YTUgNSAwIDAgMSAwLTEwaDE2LjY4NHYtMjY0LjMyN2E4MC4xMTMgODAuMTEzIDAgMCAwIC0yMy43MS01Ni41MTMgNzYuMjkzIDc2LjI5MyAwIDAgMCAtNTQuNzM2LTIyLjUwNiA3Ny43ODggNzcuNzg4IDAgMCAwIC02Ny40NDQgNDAuNTEzIDguNDY0IDguNDY0IDAgMCAwIC0xLjAzNCA0LjA0MnY2Ni4wN2E4LjUzOCA4LjUzOCAwIDAgMCAxLjA2MSA0LjA5NHptMTE5LjE1My02MC4yOTRhNSA1IDAgMCAxIDYuNTU3IDIuNjQ3IDcyLjM4OSA3Mi4zODkgMCAwIDEgMy4yMTEgOS4yNTQgNSA1IDAgMSAxIC05LjY0OCAyLjYzIDYyLjU2IDYyLjU2IDAgMCAwIC0yLjc2Ny03Ljk3NCA1IDUgMCAwIDEgMi42NDctNi41NTd6bS0zOS42NTktMzMuNmE1IDUgMCAwIDEgNi40OTQtMi44IDcyLjEyNCA3Mi4xMjQgMCAwIDEgMjYuODM5IDE4LjggNSA1IDAgMSAxIC03LjQ0MyA2LjY3OSA2Mi4wNDggNjIuMDQ4IDAgMCAwIC0yMy4wOTItMTYuMTg1IDUgNSAwIDAgMSAtMi43OTgtNi40OTF6bS01NS42IDQ1LjFhMTEuNjY3IDExLjY2NyAwIDEgMSAtMTEuNjY2IDExLjY2NyAxMS42OCAxMS42OCAwIDAgMSAxMS42NjItMTEuNjczeiIvPjxwYXRoIGQ9Im0zMjguMjQ5IDQwLjYzMWExMDIuOTQyIDEwMi45NDIgMCAwIDEgMTMyLjA3NSA2MC44MjUgNSA1IDAgMSAwIDkuMzgtMy40NjUgMTEyLjk0MiAxMTIuOTQyIDAgMCAwIC0xNDQuOTItNjYuNzQxIDUgNSAwIDEgMCAzLjQ2NSA5LjM4MXoiLz48cGF0aCBkPSJtMzk0LjE1NCA3MS4zMzJhNzEuOTE1IDcxLjkxNSAwIDAgMCAtNTUuMzYxLTIuMTU0IDUgNSAwIDAgMCAzLjQ2NSA5LjM4MSA2Mi4zODYgNjIuMzg2IDAgMCAxIDgwLjE0MiAzNi45MDYgNSA1IDAgMCAwIDkuMzc3LTMuNDY1IDcxLjkxMyA3MS45MTMgMCAwIDAgLTM3LjYyMy00MC42Njh6Ii8+PC9zdmc+" alt="ear phones"/>
                        <Link to="/earphones" className="h link-dark text-decoration-none fw-bold">EARPHONES</Link></li>
                </ul>
            </div>
        </>
    }else {
        return null;
    }
}

const NavBar = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    function all(value1, value2) {
        setShow(value1);
        setShow2(value2);
    }

    return <>
    <header className="container-fluid d-flex justify-content-center bg-dark">
            <nav className="row border-bottom container-md">
                <button className="text-white d-lg-none col-1 bg-transparent border-0 p-0 hamb"
                onClick={() => all(false, !show2)}>
                    {!show2 ? <span>
                    _
                    _
                    _
                    </span> : <div className="c">+</div>}
                </button>
                <strong translate="no" className="col-lg-3 col-10 justify-content-md-start justify-content-center fs-1 logo text-white d-flex align-items-center h-100 user-select-none">audiopile</strong>
                <ul className="list-unstyled list-inline col-lg-6 justify-content-between d-lg-flex m-0 d-none">
                    <li className="list-inline-item my-3"><Link to="/" className="h link-light text-decoration-none fw-bold ">HOME</Link></li>
                    <li className="list-inline-item my-3"><Link to="/headphones" className="h link-light text-decoration-none fw-bold ">HEADPHONES</Link></li>
                    <li className="list-inline-item my-3"><Link to="/speakers" className="h link-light text-decoration-none fw-bold ">SPEAKERS</Link></li>
                    <li className="list-inline-item my-3"><Link to="/earphones" className="h link-light text-decoration-none fw-bold ">EARPHONES</Link></li>
                </ul>
                <span className="col-lg-3 col-1 d-flex justify-content-end align-items-center"
                id="gg">
                    <img style={{width: '30px', cursor: 'pointer'}} onClick={() => {
                        if(window.location.pathname !== '/checkout') {
                            all(!show, false)
                        }}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMDAyNiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTE2NC45NjA5MzggMzAwLjAwMzkwNmguMDIzNDM3Yy4wMTk1MzEgMCAuMDM5MDYzLS4wMDM5MDYuMDU4NTk0LS4wMDM5MDZoMjcxLjk1NzAzMWM2LjY5NTMxMiAwIDEyLjU4MjAzMS00LjQ0MTQwNiAxNC40MjE4NzUtMTAuODc4OTA2bDYwLTIxMGMxLjI5Mjk2OS00LjUyNzM0NC4zODY3MTktOS4zOTQ1MzItMi40NDUzMTMtMTMuMTUyMzQ0LTIuODM1OTM3LTMuNzU3ODEyLTcuMjY5NTMxLTUuOTY4NzUtMTEuOTc2NTYyLTUuOTY4NzVoLTM2Ni42MzI4MTJsLTEwLjcyMjY1Ny00OC4yNTM5MDZjLTEuNTI3MzQzLTYuODYzMjgyLTcuNjEzMjgxLTExLjc0NjA5NC0xNC42NDQ1MzEtMTEuNzQ2MDk0aC05MGMtOC4yODUxNTYgMC0xNSA2LjcxNDg0NC0xNSAxNXM2LjcxNDg0NCAxNSAxNSAxNWg3Ny45Njg3NWMxLjg5ODQzOCA4LjU1MDc4MSA1MS4zMTI1IDIzMC45MTc5NjkgNTQuMTU2MjUgMjQzLjcxMDkzOC0xNS45NDE0MDYgNi45Mjk2ODctMjcuMTI1IDIyLjgyNDIxOC0yNy4xMjUgNDEuMjg5MDYyIDAgMjQuODEyNSAyMC4xODc1IDQ1IDQ1IDQ1aDI3MmM4LjI4NTE1NiAwIDE1LTYuNzE0ODQ0IDE1LTE1cy02LjcxNDg0NC0xNS0xNS0xNWgtMjcyYy04LjI2OTUzMSAwLTE1LTYuNzMwNDY5LTE1LTE1IDAtOC4yNTc4MTIgNi43MDcwMzEtMTQuOTc2NTYyIDE0Ljk2MDkzOC0xNC45OTYwOTR6bTMxMi4xNTIzNDMtMjEwLjAwMzkwNi01MS40Mjk2ODcgMTgwaC0yNDguNjUyMzQ0bC00MC0xODB6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTE1MCA0MDVjMCAyNC44MTI1IDIwLjE4NzUgNDUgNDUgNDVzNDUtMjAuMTg3NSA0NS00NS0yMC4xODc1LTQ1LTQ1LTQ1LTQ1IDIwLjE4NzUtNDUgNDV6bTQ1LTE1YzguMjY5NTMxIDAgMTUgNi43MzA0NjkgMTUgMTVzLTYuNzMwNDY5IDE1LTE1IDE1LTE1LTYuNzMwNDY5LTE1LTE1IDYuNzMwNDY5LTE1IDE1LTE1em0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zNjIgNDA1YzAgMjQuODEyNSAyMC4xODc1IDQ1IDQ1IDQ1czQ1LTIwLjE4NzUgNDUtNDUtMjAuMTg3NS00NS00NS00NS00NSAyMC4xODc1LTQ1IDQ1em00NS0xNWM4LjI2OTUzMSAwIDE1IDYuNzMwNDY5IDE1IDE1cy02LjczMDQ2OSAxNS0xNSAxNS0xNS02LjczMDQ2OS0xNS0xNSA2LjczMDQ2OS0xNSAxNS0xNXptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" alt="shopping cart"/>
                    <span className="count fs-4 fw-bold mx-1" id="count">{window.localStorage.length}</span>
                </span>
            </nav>
            <hr></hr>
            <ShoppingCart show={show}/>
            <Ham show={show2}/>
            {show || show2 ? <div className="hide" onClick={() => all(false, false)}></div> : null}
    </header>
    </>
}

const Man = () => {
    return <>
    <div className="container">
        <div className="row flex-wrap-reverse flex-lg-nowrap justify-content-lg-start justify-content-center">
            <article className="col-lg-5 col-12 d-flex align-content-center flex-wrap m-lg-0 mt-4 justify-content-lg-start justify-content-center">
                <h1 className="fw-bold text-lg-start text-center w-75">BRINGING YOU THE <mark className="best p-0 m-0">BEST</mark> AUDIO GEAR</h1>
                <p className="text-lg-start text-center p-lg-0 px-5 py-3">
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </article>
            <span className="col-lg-1 col-0"></span>
            <img src={m} alt="man" className="col-lg-6 col-12 rounded clip"></img>
        </div>
    </div>
    </>
}

const Home = function () {
    return (<>
        <LastAdded/>
        <See/>
    </>);
}

export { Home , NavBar, Footer, List, Man}