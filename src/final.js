import React , {useState, useRef, useEffect}from 'react';
import { useParams } from 'react-router-dom';
import data from './products.json';
import { Link } from 'react-router-dom';
import './style/final.css';

const Su = () => {
    return <>
    <div className="alert alert-success w-100 mt-3 py-2"
    role="alert"
    >
        Item Added To the Cart
    </div>
    </>
}


const Final = function() {
    const { id } = useParams();
    const thiss = data[id-1];
    const [n, setN] = useState(1);
    const [img, setImg] = useState(0);
    const [show, setShow] = useState(false);
    const next = useRef(null);
    const pre = useRef(null);
    const o = useRef(null); 

    useEffect(() => {
        if(thiss.images.length-1 === img) {
            next.current.disabled = true;
        }else if(img === 0) {
            pre.current.disabled = true;
        }else {
            next.current.disabled = false;
            pre.current.disabled = false;
        }
    }, [img]);

    useEffect(() => {
        let children = Array.from(o.current.children)
        children.forEach(child => {
            child.classList.remove("bordered");
        });
        o.current.childNodes[img].classList.add("bordered");
    }, [img]);

    const addToCart = (name, price, number, img) => {
        let count = document.getElementById('count');
        window.localStorage.setItem(name, [price, number, img]);
        count.innerHTML = window.localStorage.length;
    }

    return <>
    <section className="container mb-4">
        <button onClick={() => window.history.go(-1)}
        className="bg-transparent border-0 w-100 py-5 text-start fs-5">Go Back</button>
        <div className="row justify-content-md-start justify-content-center d-flex flex-wrap">
            <div className="col-md-4 col-8">
                <img style={{maxHeight: 'auto', width: '100%'}}  src={require(`./${thiss.img}`).default} alt={thiss.name}></img>
            </div>
            <div className="col-md-8 col-10 d-flex flex-wrap align-content-center">
                {thiss.newp && <span className="new mt-3 w-100">NEW PRODUCT</span>}
                <h3 className="py-2">{thiss.name}</h3>
                <strong className="fs-4 w-100 mb-3">${thiss.price}</strong>
                <div className="bg-secondary d-flex justify-content-around align-items-center me-5 py-1">
                    <button className="border-0 bg-secondary fs-5"
                    onClick={() => setN((n-1) > 0 ? n-1: n)}>-</button>
                    <span className="px-3">{n}</span>
                    <button className="border-0 bg-secondary fs-5"
                    onClick={() => setN(n+1)}>+</button>
                </div>
                <button className="px-3 border-0 add text-white"
                    onClick={() => {addToCart(thiss.name, thiss.price, n, thiss.img);
                    setShow(true);
                    setTimeout(() => setShow(false), 3000)}}>Add to cart</button>
                {show && <Su/>}
            </div>
        </div>
        <ul className="mt-4 col-md-6 col-10 d-flex justify-content-md-start justify-content-center flex-wrap">
            {
                thiss.features.map((f, index) => {
                    return (
                        <li key={index} className="line w-100">{f}</li>
                    )
                })
            }
        </ul>
        <div className="col-12 d-flex justify-content-center mt-4">
            <div className="col-md-8 col-12 images">
                <button className="fs-1 border-0 h-100"
                onClick={() => setImg(img - 1)}
                ref={pre}>{"<"}</button>
                <div>
                    <img style={{height: '275px', marginLeft: '30px', marginRight: '30px'}} 
                            src={require(`./${thiss.images[img]}`).default} 
                            alt="img about product"
                    ></img>
                </div>
                <button className="fs-1 border-0 h-100"
                onClick={() => setImg(img + 1)}
                ref={next}>{">"}</button>
            </div>
        </div>
        <div ref={o} className="d-flex flex-wrap justify-content-center flex-row mt-2"
            style={{height: '25px', width: '100%'}}>
            {
                thiss.images.map((b, index) => {
                    return (
                        <span className="o mx-2"
                        key={index}
                        onClick={() => setImg(index)}></span>
                    )
                })
            }
            </div>
        <section className="mt-5">
            <h2 className="text-center">You May Also Like</h2>
            <div className="row my-4">
                {data.filter(c => c.type === thiss.type && c.id !== thiss.id)
                    .map((d, index) => {
                        return (
                        <div className="card col-md-4 col-6"
                        key={index}>
                            <div className="w-100 d-flex justify-content-center pt-3">
                                <div className="aa">
                                    <img src={require(`./${d.img}`).default} 
                                    alt="you may like it"/>
                                </div>
                            </div>
                            <div className="card-body">
                              <p className="card-text">{d.name}</p>
                              <Link to={`/${d.type}/${d.id}`} 
                              className="btn btn-primary">See product</Link>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </section>
    </section>
    </>
}

export { Final}

