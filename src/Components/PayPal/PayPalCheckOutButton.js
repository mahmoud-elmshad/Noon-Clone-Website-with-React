import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import UserService from "../../services/UserService";
import { useAuth } from "../../Auth";

const PayPalCheckOutButton = (props) => {
  const { user } = useAuth();
  const [value, setValue] = useState(props.value);
  const [arrKeys, setArrKeys] = useState();

  useEffect(() => {
    setValue(props.value);
    const keys = [];
    console.log(props.value);
    for (var i = 0; i < localStorage.length; i++) {
      if (!localStorage.key(i).includes("__paypal_storage__")) {
        keys.push(localStorage.key(i));
      }
    }
    setArrKeys({ keys });
  }, [props.value]);

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const handleApprove = (orderId) => {
    setPaidFor(true);
  };

  if (paidFor) {
    UserService.updateUserCart(user.uid, arrKeys);
    Swal.fire(
      "Good choice!",
      "Product purchase completed successfully",
      "success"
    ).then(() => window.location.reload());
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        if (key.includes("__paypal_storage__")) {
        } else {
          localStorage.removeItem(key);
        }
      }
    }
  }
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }

  return (
    <>
      <PayPalButtons
        forceReRender={[value]}
        style={{
          color: "gold",
          layout: "horizontal",
          height: 55,
        }}
        onClick={(data, actions) => {
          const hasAlreadyBoughtProduct = false;
          if (hasAlreadyBoughtProduct) {
            setError("You Already Bought This Product");
            return actions.reject();
          } else {
            return actions.resolve();
          }
        }}
        createOrder={(data, actions) => {
          console.log(props, value);
          return actions.order.create({
            purchase_units: [
              {
                description: props.description,
                amount: {
                  value: value,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          handleApprove(data.orderID);
        }}
        onCancel={() => {}}
        onError={(err) => {
          setError(err);
        }}
      />
    </>
  );
};

export default PayPalCheckOutButton;
