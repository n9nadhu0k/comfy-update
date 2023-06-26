import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));

// dev - lexmv8xbbpww2teb.us.auth0.com;

// XSFQ5eXJWLPmAJ45JVqgUJ8xxbWOEMb1;

root.render(
  <Auth0Provider
    domain="dev-lexmv8xbbpww2teb.us.auth0.com"
    clientId="XSFQ5eXJWLPmAJ45JVqgUJ8xxbWOEMb1"
    authorizationParams={{
      redirect_uri: window.location.origin,

    }}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
