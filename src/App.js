import React from 'react';
import { Home , NavBar, Footer, List, Man} from './home';
import { HeadPhones } from './headphones';
import { Speakers } from './speaker';
import { Earphones } from './earphones';
import { Final } from './final';
import { Form } from './checkout';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/headphones" exact>
          <HeadPhones/>
        </Route>
        <Route path="/speakers" exact>
          <Speakers/>
        </Route>
        <Route path="/earphones" exact>
          <Earphones/>
        </Route>
        <Route path="/headphones/:id" children={<Final/>}></Route>
        <Route path="/speakers/:id" children={<Final/>}></Route>
        <Route path="/earphones/:id" children={<Final/>}></Route>
        <Route path="/checkout">
          <Form/>
        </Route>
        <Route path="*">
          <div className="w-100 d-flex justify-content-center flex-wrap">
            <img style={{width: '350px'}} src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMyIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDMiPjxyZWN0IGZpbGw9IiNjY2MiIGhlaWdodD0iNTAiIHJ4PSI0IiB3aWR0aD0iNjAiIHg9IjIiIHk9IjciLz48cGF0aCBkPSJtNCAxOWg1NmEwIDAgMCAwIDEgMCAwdjMzYTMgMyAwIDAgMSAtMyAzaC01MGEzIDMgMCAwIDEgLTMtM3YtMzNhMCAwIDAgMCAxIDAgMHoiIGZpbGw9IiNmZmYiLz48cmVjdCBmaWxsPSIjYWEyYjI0IiBoZWlnaHQ9IjIyIiByeD0iMiIgd2lkdGg9IjQ4IiB4PSI4IiB5PSIyNSIvPjxwYXRoIGQ9Im0xMCAyNWEyIDIgMCAwIDAgLTIgMnYxNmg0MGEzIDMgMCAwIDAgMy0zdi0xNXoiIGZpbGw9IiNkMjQwMzQiLz48cGF0aCBkPSJtNTggN2gtNTJhNCA0IDAgMCAwIC00IDR2OGg2MHYtOGE0IDQgMCAwIDAgLTQtNHoiIGZpbGw9IiNhYTJiMjQiLz48cGF0aCBkPSJtNTQgMTZhMyAzIDAgMCAwIDMtM3YtNmgtNTFhNCA0IDAgMCAwIC00IDR2NXoiIGZpbGw9IiNkMjQwMzQiLz48ZyBmaWxsPSIjZmZmIj48Y2lyY2xlIGN4PSI4IiBjeT0iMTMiIHI9IjIiLz48Y2lyY2xlIGN4PSIxNSIgY3k9IjEzIiByPSIyIi8+PGNpcmNsZSBjeD0iMjIiIGN5PSIxMyIgcj0iMiIvPjxyZWN0IGhlaWdodD0iNCIgcng9IjIiIHdpZHRoPSIyMiIgeD0iMjgiIHk9IjExIi8+PC9nPjxwYXRoIGQ9Im00MyA1My0yLTggOCAxLjk5OS00IDIuMDAxeiIgZmlsbD0iI2JjZTRmOCIvPjxwYXRoIGQ9Im01OCA2aC01MmE1LjAwNiA1LjAwNiAwIDAgMCAtNSA1djQyYTUuMDA2IDUuMDA2IDAgMCAwIDUgNWg1MmE1LjAwNiA1LjAwNiAwIDAgMCA1LTV2LTQyYTUuMDA2IDUuMDA2IDAgMCAwIC01LTV6bS01MiAyaDUyYTMgMyAwIDAgMSAzIDN2N2gtNTh2LTdhMyAzIDAgMCAxIDMtM3ptNTIgNDhoLTUyYTMgMyAwIDAgMSAtMy0zdi0zM2g1OHYzM2EzIDMgMCAwIDEgLTMgM3oiLz48cGF0aCBkPSJtOCAxNmEzIDMgMCAxIDAgLTMtMyAzIDMgMCAwIDAgMyAzem0wLTRhMSAxIDAgMSAxIC0xIDEgMSAxIDAgMCAxIDEtMXoiLz48cGF0aCBkPSJtMTUgMTZhMyAzIDAgMSAwIC0zLTMgMyAzIDAgMCAwIDMgM3ptMC00YTEgMSAwIDEgMSAtMSAxIDEgMSAwIDAgMSAxLTF6Ii8+PHBhdGggZD0ibTIyIDE2YTMgMyAwIDEgMCAtMy0zIDMgMyAwIDAgMCAzIDN6bTAtNGExIDEgMCAxIDEgLTEgMSAxIDEgMCAwIDEgMS0xeiIvPjxwYXRoIGQ9Im01NCAyNGgtNDRhMyAzIDAgMCAwIC0zIDN2MThhMyAzIDAgMCAwIDMgM2gyOXYtMmgtMjlhMSAxIDAgMCAxIC0xLTF2LTE4YTEgMSAwIDAgMSAxLTFoNDRhMSAxIDAgMCAxIDEgMXYxOGExIDEgMCAwIDEgLTEgMWgtM3YyaDNhMyAzIDAgMCAwIDMtM3YtMThhMyAzIDAgMCAwIC0zLTN6Ii8+PHBhdGggZD0ibTQ5LjI0MiA0Ni4wMjktOC0yYTEgMSAwIDAgMCAtMS4yMTIgMS4yMTNsMiA4YTEgMSAwIDAgMCAxLjg2NS4ybDEuODUxLTMuNyAzLjctMS44NTFhMSAxIDAgMCAwIC0uMjA1LTEuODY1em0tNC42ODkgMi4wNzZhMS4wMDYgMS4wMDYgMCAwIDAgLS40NDguNDQ4bC0uNzkxIDEuNTgyLS45MzktMy43NjEgMy43Ni45NHoiLz48cGF0aCBkPSJtMjUgNDJ2LTJoMnYtMmgtMnYtN2ExIDEgMCAwIDAgLTEuODQ4LS41M2wtNSA4YTEgMSAwIDAgMCAuODQ4IDEuNTNoNHYyem0tNC4yLTQgMi4yLTMuNTEzdjMuNTEzeiIvPjxwYXRoIGQ9Im00My4yNzYgMzAuMDM5YTEgMSAwIDAgMCAtMS4xMjQuNDMxbC01IDhhMSAxIDAgMCAwIC44NDggMS41M2g0djJoMnYtMmgydi0yaC0ydi03YTEgMSAwIDAgMCAtLjcyNC0uOTYxem0tMS4yNzYgNy45NjFoLTIuMmwyLjItMy41MTN6Ii8+PHBhdGggZD0ibTI4IDM0djRhNCA0IDAgMCAwIDggMHYtNGE0IDQgMCAwIDAgLTggMHptNiAwdjRhMiAyIDAgMCAxIC00IDB2LTRhMiAyIDAgMCAxIDQgMHoiLz48cGF0aCBkPSJtNTYgMTZhMi45NTEgMi45NTEgMCAwIDAgMS4yODUtLjNsMS4wMDggMS4wMDggMS40MTQtMS40MTQtMS4wMDctMS4wMDlhMi45NTEgMi45NTEgMCAwIDAgLjMtMS4yODUgMyAzIDAgMSAwIC0zIDN6bTAtNGExIDEgMCAxIDEgLTEgMSAxIDEgMCAwIDEgMS0xeiIvPjxwYXRoIGQ9Im0zMCAxNmgxOGEzIDMgMCAwIDAgMC02aC0xOGEzIDMgMCAwIDAgMCA2em0wLTRoMThhMSAxIDAgMCAxIDAgMmgtMThhMSAxIDAgMCAxIDAtMnoiLz48L3N2Zz4=" alt="404"/>
            <h1 className="w-100 text-center">Page Not Found</h1>
            <Link to="/"
            className="text-decoration-none text-white btn-dark rounded px-4 py-2">Back To Home</Link>
          </div>
        </Route>
      </Switch>
      <List/>
      <Man/>
      <Footer/>
    </Router>
  );
}

export default App;
