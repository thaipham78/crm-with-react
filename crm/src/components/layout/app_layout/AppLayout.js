import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "../../ui_kits/shared/side_bar/SideBar";
import NavBar from "../../ui_kits/shared/nav_bar/NavBar";
import Home from "../../pages/home/Home.js";
import Company from "../../pages/company/Company.js";
import CompanyDetail from "../../pages/company/CompanyDetail.js";
import CreateCompany from "../../pages/company/CreateCompany.js";
import UpdateCompany from "../../pages/company/UpdateCompany.js";
import Contact from "../../pages/contact/Contact.js";
import ContactDetail from "../../pages/contact/ContactDetail.js";
import CreateContact from "../../pages/contact/CreateContact.js";
import UpdateContact from "../../pages/contact/UpdateContact.js";
import User from "../../pages/user/User.js";
import UserDetail from "../../pages/user/UserDetail.js";
import CreateUser from "../../pages/user/CreateUser.js";
import UpdateUser from "../../pages/user/UpdateUser.js";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import PageNotFound from "../../pages/page_not_found/PageNotFound";

export default function AppLayout() {
  return (
    <div className="container-fluid">
      <SideBar />
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path={`/dashboard`}>
            <Home />
          </Route>

          <Route exact path={`/companies`}>
            <Company />
          </Route>
          <Route path={`/companies/detail/:id`}>
            <CompanyDetail />
          </Route>
          <Route path={`/companies/create`}>
            <CreateCompany />
          </Route>
          <Route path={`/companies/update/:id`}>
            <UpdateCompany />
          </Route>

          <Route exact path={`/contacts`}>
            <Contact />
          </Route>
          <Route path={`/contacts/detail/:id`}>
            <ContactDetail />
          </Route>
          <Route path={`/contacts/create`}>
            <CreateContact />
          </Route>
          <Route path={`/contacts/update/:id`}>
            <UpdateContact />
          </Route>

          <Route exact path={`/users`}>
            <User />
          </Route>
          <Route path={`/users/detail/:id`}>
            <UserDetail />
          </Route>
          <Route path={`/users/create`}>
            <CreateUser />
          </Route>
          <Route path={`/users/update/:id`}>
            <UpdateUser />
          </Route>

          <Redirect to="/404" />
        </Switch>
      </main>
    </div>
  );
}
