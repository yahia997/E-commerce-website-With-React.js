import React , { useState, useEffect }from 'react';
import './style/checkout.css';

const Summary = ({name, number, price, img}) => {
    return (
        <div className="summary my-3 border-bottom border-dark">
            <img src={require(`./${img}`).default} alt={name} className="w-25"/>
            <p>{name}</p>
            <span>×{number}</span>
            <strong>${price}</strong>
        </div>
    );
}

const Succ = ({total}) => {
    return (
        <section className="success">
        <div style={{width: '500px'}}
        className="rounded p-4 d-flex flex-wrap">
            <img style={{width: '100px'}}
            className="mb-3"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1NiwwQzExNC44MzMsMCwwLDExNC44MzMsMCwyNTZzMTE0LjgzMywyNTYsMjU2LDI1NnMyNTYtMTE0Ljg1MywyNTYtMjU2UzM5Ny4xNjcsMCwyNTYsMHogTTI1Niw0NzIuMzQxICAgIGMtMTE5LjI3NSwwLTIxNi4zNDEtOTcuMDQ2LTIxNi4zNDEtMjE2LjM0MVMxMzYuNzI1LDM5LjY1OSwyNTYsMzkuNjU5YzExOS4yOTUsMCwyMTYuMzQxLDk3LjA0NiwyMTYuMzQxLDIxNi4zNDEgICAgUzM3NS4yNzUsNDcyLjM0MSwyNTYsNDcyLjM0MXoiIGZpbGw9IiNkODdkNGEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM3My40NTEsMTY2Ljk2NWMtOC4wNzEtNy4zMzctMjAuNjIzLTYuNzYyLTI3Ljk5OSwxLjM0OEwyMjQuNDkxLDMwMS41MDlsLTU4LjQzOC01OS40MDkgICAgYy03LjcxNC03LjgxMy0yMC4yNDYtNy45MzItMjguMDM5LTAuMjM4Yy03LjgxMyw3LjY3NC03LjkzMiwyMC4yMjYtMC4yMzgsMjguMDM5bDczLjE1MSw3NC4zNjEgICAgYzMuNzQ4LDMuODA3LDguODI0LDUuOTI5LDE0LjEzOCw1LjkyOWMwLjExOSwwLDAuMjU4LDAsMC4zNzcsMC4wMmM1LjQ3My0wLjExOSwxMC42MjktMi40NTksMTQuMjk3LTYuNTA0bDEzNS4wNTktMTQ4LjcyMiAgICBDMzgyLjE1NiwxODYuODU0LDM4MS41NjEsMTc0LjMyMiwzNzMuNDUxLDE2Ni45NjV6IiBmaWxsPSIjZDg3ZDRhIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" alt="success"/>
            <h2>THANK YOU FOR YOU ORDER</h2>
            <p>You will receive an email confirmation shortly.</p>
            <strong className="fs-5 w-100">GRAND TOTAL: ${total}</strong>
            <button 
            onClick={() => {window.localStorage.clear();
            window.location.href = '/';
            document.body.style.overflowY = 'auto'}}
            className="text-decoration-none text-white rounded py-2 w-100 text-center my-3 border-0"
            style={{backgroundColor: '#d87d4a'}}>Back To Home</button>
        </div>
        </section>
    );
}

const Form = function() {

    const data2 = [];
    var myTotal = 0;
    const [p, setP] = useState(data2);
    const [total, setTotal] = useState(0);

    const [show2, setShow2] = useState(false);

    useEffect(() => {
        setShow2(false);
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
    }, []);

    const [data, setData] = useState({
        name1: "",
        email1: "",
        number1: "",
        address1: "",
        zip: "",
        city: "",
        country: "",
        e_money: true,
        cash: false,
        e_money_number: "",
        e_money_pin: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setShow2(true);
        window.scrollTo(0, 0);
        document.body.style.overflowY = 'hidden';
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value});
    }

    useEffect(() => {
        if(document.getElementsByClassName('hide')[0]) {
            document.getElementsByClassName('hide')[0].click();
        }
    }, []);

    return <>
    <section className="container mt-4">
        <div className="row">
            <form action="./buy.php" onSubmit={handleSubmit}
            className="rounded col-md-8 col-12"
            style={{backgroundColor: '#eee'}}>
                <h6 className="heading fw-bold py-3">BILLING DETAILS</h6>
                <div className="d-flex flex-wrap justify-content-between">
                    <label htmlFor="exampleFormControlInput1" 
                    className="form-label"
                    style={{width: '53%'}}>Name</label>

                    <label htmlFor="exampleFormControlInput2" 
                    className="form-label"
                    style={{width: '47%'}}>Email</label>

                    <input type="text"
                    name="name1"
                    value={data.name1}
                    onChange={handleChange} 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="yahia mahmoud"
                    required
                    style={{width: '47%'}}/>

                    <input type="email" 
                    name="email1"
                    value={data.email1}
                    onChange={handleChange} 
                    className="form-control"
                    required 
                    id="exampleFormControlInput2" 
                    placeholder="name@example.com"
                    style={{width: '47%'}}/>

                    <label htmlFor="exampleFormControlInput3" 
                    className="form-label w-100 mt-2">Phone Number</label>

                    <input type="number" 
                    name="number1"
                    value={data.number1}
                    onChange={handleChange} 
                    className="form-control"
                    required 
                    id="exampleFormControlInput3" 
                    placeholder="+123456789"
                    style={{width: '47%'}}/>
                </div>
                <h6 className="heading fw-bold py-3">SHIPPING INFO</h6>
                <div className="d-flex flex-wrap justify-content-between">
                    <label htmlFor="exampleFormControlInput4" 
                    className="form-label w-100 mt-2">Address</label>

                    <input type="text" 
                    name="address1"
                    value={data.address1}
                    onChange={handleChange} 
                    className="form-control w-100" 
                    required
                    id="exampleFormControlInput4" 
                    placeholder="462 gamal abd elnasser,Alex,Eygpt"/>

                    <label htmlFor="exampleFormControlInput5" 
                    className="form-label mt-2"
                    style={{width: '53%'}}>ZIP</label>

                    <label htmlFor="exampleFormControlInput6" 
                    className="form-label mt-2"
                    style={{width: '47%'}}>City</label>

                    <input type="number" 
                    name="zip"
                    value={data.zip}
                    onChange={handleChange} 
                    className="form-control" 
                    id="exampleFormControlInput5"
                    required 
                    placeholder="27392"
                    style={{width: '47%'}}/>

                    <input type="text" 
                    name="city"
                    value={data.city}
                    onChange={handleChange} 
                    className="form-control" 
                    id="exampleFormControlInput6"
                    required 
                    placeholder="Alex"
                    style={{width: '47%'}}/>

                    <label htmlFor="exampleFormControlInput7" 
                    className="form-label w-100 mt-2">Country</label>

                    <input type="text" 
                    name="country"
                    value={data.country}
                    onChange={handleChange} 
                    className="form-control" 
                    id="exampleFormControlInput7" 
                    required
                    placeholder="Eygpt"
                    style={{width: '47%'}}/>
                </div>
                <h6 className="heading fw-bold py-3">PAYMENT DETAILS</h6>
                <div className="form-check my-3 border border-dark rounded py-3">
                    <input className="form-check-input mx-3" 
                    type="radio" 
                    name="e_money"
                    checked={data.e_money}
                    onChange={() => setData({...data, e_money: true, cash: false})}
                    id="flexRadioDefault8"/>
                        <label className="form-check-label" 
                        htmlFor="flexRadioDefault8">
                        e-Money
                    </label>
                </div>
                <div className="form-check my-3 border border-dark rounded py-3">
                    <input className="form-check-input mx-3" 
                    type="radio" 
                    name="cash" 
                    checked={data.cash}
                    onChange={() => setData({...data, cash: true, e_money: false})}
                    id="flexRadioDefault9"/>
                    <label className="form-check-label" 
                    htmlFor="flexRadioDefault9">
                    Cash on Delivery
                    </label>
                </div>
                    {data.cash && 
                    <div className="row gx-5 px-5 my-3">
                        <img className="col-lg-2 col-4"
                        src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTMwNS40MDkgMTI1LjY0NyAzNS4wODIgMjUuOTU0YzMuOTQ5IDIuOTIxIDEuOTUzIDkuMzg1LTMuMDQgOS40MTZsLTExLjAwOS4wNjdjLS4wMTEgMC0uMDIxIDAtLjAzMiAwLTIuODMyIDAtNS4xNDQtMi4yOTItNS4xNjItNS4xMjQtLjA1MS04LjI4NC02LjgwMy0xNC45NzUtMTUuMDkxLTE0LjkwNy04LjI4NC4wNTEtMTQuOTU4IDYuODA4LTE0LjkwOCAxNS4wOTIuMDk5IDE2LjAwNSAxMC45MzcgMjkuNDY5IDI1LjYyMyAzMy42MTV2LjcyNmMwIDguMjg0IDYuNzE2IDE1IDE0Ljk5OSAxNXMxNC45OTktNi43MTYgMTQuOTk5LTE1di0uNzU3YzUuODQ0LTEuNjIgMTEuMTk0LTQuNzM2IDE1LjU3LTkuMTY4IDYuNjAyLTYuNjg2IDEwLjIwNC0xNS41NDIgMTAuMTM5LTI0Ljk2MXYtLjA5NGMtLjA3NS0xMS4wMDItNS40MDEtMjEuNDc4LTE0LjI0Ny0yOC4wMjJsLTM1LjA4MS0yNS45NTNjLTMuOTg0LTIuOTQ4LTEuODkxLTkuMyAzLjA3Mi05LjNoMTEuMDI2YzIuODQ3IDAgNS4xNjMgMi4zMTMgNS4xNjMgNS4xNTYgMCA4LjI4NCA2LjcxNiAxNSAxNC45OTkgMTVzMTQuOTk5LTYuNzE2IDE0Ljk5OS0xNWMwLTE2LjA4NS0xMC44NjYtMjkuNjczLTI1LjY0MS0zMy44MzV2LS43MjJjMC04LjI4NC02LjcxNi0xNS0xNC45OTktMTVzLTE0Ljk5OSA2LjcxNi0xNC45OTkgMTV2LjcwMmMtMTQuODEgNC4xMzktMjUuNzEgMTcuNzQ0LTI1LjcxIDMzLjg1NS4wMDEgMTEuMDk1IDUuMzI3IDIxLjY1OSAxNC4yNDggMjguMjZ6Ii8+PHBhdGggZD0ibTMzMS44NzEgMjUzLjMxNWM2OS44NTggMCAxMjYuNjktNTYuODE4IDEyNi42OS0xMjYuNjU4cy01Ni44MzMtMTI2LjY1Ny0xMjYuNjktMTI2LjY1Ny0xMjYuNjkgNTYuODE4LTEyNi42OSAxMjYuNjU4IDU2LjgzMyAxMjYuNjU3IDEyNi42OSAxMjYuNjU3em0wLTIyMy4zMTVjNTMuMzE2IDAgOTYuNjkxIDQzLjM2MSA5Ni42OTEgOTYuNjU4cy00My4zNzUgOTYuNjU4LTk2LjY5MSA5Ni42NThjLTUzLjMxNSAwLTk2LjY5MS00My4zNjEtOTYuNjkxLTk2LjY1OHM0My4zNzYtOTYuNjU4IDk2LjY5MS05Ni42NTh6Ii8+PHBhdGggZD0ibTUwMS42ODUgMjg3LjE4NmMtMTYuMjIzLTIwLjg4Ni00NS41MTEtMjQuODE1LTY2LjU5My0xMC4xODlsLTU3LjA3MSAzOC4xODFjLTcuOTMxLTE0Ljc2Ny0yMy41MjUtMjQuODMzLTQxLjQzLTI0LjgzM2gtNDAuNzExYy0yMC41NS0xOS4yNzQtNDcuOTg1LTMwLjIxNy03Ni4yODMtMzAuMjE3LTIxLjIzOSAwLTQxLjkgNi01OS43NDcgMTcuMzUyLTE2LjA4MSAxMC4yMjktMjkuMjM1IDI0LjM1OS0zOC4yNzQgNDEuMDQxbC03LjY0MiA0LjY3My0xLjk4LTUuNzkxYy0yLjY4LTcuODM3LTExLjIwNC0xMi4wMi0xOS4wNDItOS4zNDJsLTgyLjc1OSAyOC4yNzljLTcuODM1IDIuNjc3LTEyLjAyMyAxMS4yMDgtOS4zNDMgMTkuMDQ3bDUwLjA3MyAxNDYuNDYyYzIuNjgxIDcuODQyIDExLjIwOCAxMi4wMTggMTkuMDQyIDkuMzQybDgyLjc1OS0yOC4yNzdjNy4zOTEtMi41MjYgMTIuMjMzLTEwLjU5MyA5LjE3Ny0xOS41MzJsMTMxLjMyMS00LjA2NWMzNS43NjMtLjA0OCA3MC4wNTktMTEuMDMxIDk5LjE5MS0zMS43NjZsOTkuMDMyLTcwLjQ0MmMyMi43MDQtMTYuMTYxIDI3LjM5MS00Ny45MDkgMTAuMjgtNjkuOTIzem0tNDI3LjI2OCAxOTAuNzY3LTQwLjM2OC0xMTguMDc1IDU0LjM3MS0xOC41NzhjNS44NTcgMTcuMTMyIDM0LjMyMyAxMDAuMzkzIDQwLjM2OCAxMTguMDc2em0zOTkuNTk3LTE0NS4yODktOTkuMDMyIDcwLjQ0MmMtMjQuMDkxIDE3LjE0Ny01Mi40NiAyNi4yMS04Mi4wMzggMjYuMjEtLjE1NCAwLS4zMS4wMDItLjQ2NC4wMDdsLTE0MC43NzMgNC4zNTctMjcuODMtODEuNDAzIDE2LjkxNS0xMC4zNDRjLjAwNC0uMDAyLjAwNy0uMDA1LjAxMS0uMDA4IDIuNDktMS41MjQgNC40MzctMy43NjEgNS42MjUtNi4xODIgMTMuODA1LTI4LjEzNyA0MS44NDItNDUuNjE3IDczLjE2OS00NS42MTcgMjIuNjM4IDAgNDMuNjY0IDkuMDYzIDU5LjIwNSAyNS41MTkgMi44NjIgMy4wMzIgNi45NzQgNC42OTcgMTAuOTA1IDQuNjk3aDQ2Ljg4NGM5LjM3MiAwIDE2Ljk5NiA3LjYyIDE2Ljk5NiAxNi45ODcgMCA5LjI2OS03LjQ5NyAxNi45ODctMTYuOTk2IDE2Ljk4N2gtODQuNjI5Yy04LjI4NCAwLTE0Ljk5OSA2LjcxNi0xNC45OTkgMTVzNi43MTYgMTUgMTQuOTk5IDE1aDg0LjYyOWMxMi41NjMgMCAyNC4zNjYtNC44OTIgMzMuMjI1LTEzLjc2NCA2LjE5OC02LjE5NiAxMC40NDUtMTMuODE4IDEyLjQ0OS0yMi4xMjJsNjkuNjIxLTQ2LjU3N2MuMDg0LS4wNTYuMTY3LS4xMTMuMjUtLjE3MSA4LjIxLTUuNzM1IDE5LjU4Mi00LjE3NCAyNS44NjEgMy45MDkgNi42MjEgOC41MiA0LjgxMSAyMC44MTQtMy45ODMgMjcuMDczeiIvPjwvZz48L3N2Zz4=" alt="cash"/>
                        <p className="col-lg-10 m-0 col-8 d-flex align-items-center">
                        The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                    </div>
                    }
                    {data.e_money && 
                    <div className="d-flex flex-wrap justify-content-between my-3">
                        <label htmlFor="exampleFormControlInput8" 
                        className="form-label"
                        style={{width: '53%'}}>E-money Number</label>

                        <label htmlFor="exampleFormControlInput9" 
                        className="form-label"
                        style={{width: '47%'}}>E-money Pin</label>

                        <input type="number"
                        name="e_money_number"
                        value={data.e_money_number}
                        onChange={handleChange} 
                        className="form-control" 
                        id="exampleFormControlInput8" 
                        required
                        placeholder="53392****"
                        style={{width: '47%'}}/>

                        <input type="password" 
                        name="e_money_pin"
                        value={data.e_money_pin}
                        onChange={handleChange} 
                        className="form-control" 
                        id="exampleFormControlInput9"
                        required 
                        placeholder="E-money Pin"
                        style={{width: '47%'}}/>
                    </div>}
                    <button type="submit"
                    className="border-0 rounded text-white w-100 py-2 my-3"
                    style={{backgroundColor: '#d87d4a'}}>CONTINUE &amp; PAY</button>
            </form>
            <span className="col-md-1"></span>
            <div className="col-md-3 col-12 rounded h-auto overflow-auto m-md-0 my-4 sp"
            style={{backgroundColor: '#eee'}}>
                <h5 className="my-3 fw-bold">SUMMARY</h5>
                {p.map((c, index) => {
                    return <Summary name={c[0]}
                    price={c[1]}
                    number={c[2]}
                    key={index}
                    img={c[3]}/>
                })}
                <div className="w-100 d-flex justify-content-between my-2">
                    <span>TOTAL</span>
                    <strong>${Math.floor(total)}</strong>
                </div>
                <div className="w-100 d-flex justify-content-between my-2">
                    <span>SHIPPING</span>
                    <strong>${10}</strong>
                </div>
                <div className="w-100 d-flex justify-content-between my-2">
                    <span>VAT(TAX INCLUDED)</span>
                    <strong>${Math.floor(total / 9)}</strong>
                </div>
                <div className="w-100 d-flex justify-content-between my-2">
                    <span>GRAND TOTAL</span>
                    <strong className="text-danger">${Math.floor(total) + 10 + Math.floor(total / 9)}</strong>
                </div>
            </div>
        </div>
    </section>
    {show2 && <Succ total={Math.floor(total) + 10 + Math.floor(total / 9)}/>}
    </>
}

export { Form }