import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Contato } from "./pages/Contato";
import { Hobbies } from "./pages/Hobbies";

import { Header, Footer } from "./components/Main";

export const Router = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route path={['/', '/home']} exact component={Home}></Route>
                <Route path='/sobre' component={Sobre}></Route>
                <Route path='/contato' component={Contato}></Route>
                <Route path='/hobbies' component={Hobbies}></Route>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
    )
}