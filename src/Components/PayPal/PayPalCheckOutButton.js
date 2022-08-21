import React from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { useState } from 'react';
import { useEffect } from 'react';

const PayPalCheckOutButton = (props) => {
    const [value, setValue] = useState(props.value)


    useEffect(() => {
        setValue(props.value)
        console.log(props.value)
    }, [props.value])

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const handleApprove = (orderId) => {
        setPaidFor(true)

    }
    if (paidFor) {
        alert('Thank You For your Purchase')
    }
    if (error) {
        alert(error)
    }

    return (
        <>
            <PayPalButtons
                forceReRender={[value]}
                style={{
                    color: "gold",
                    layout: 'horizontal',
                    height: 55
                }}
                onClick={(data, actions) => {
                    const hasAlreadyBoughtProduct = false
                    if (hasAlreadyBoughtProduct) {
                        setError('You Already Bought This Product')
                        return actions.reject()
                    }
                    else {
                        return actions.resolve()
                    }

                }}
                createOrder={(data, actions) => {
                    console.log(props, value)
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: props.description,
                                amount: {
                                    value: value
                                }
                            }
                        ]
                    })
                }}
                onApprove={async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log(order);
                    handleApprove(data.orderID);
                }}
                onCancel={() => {

                }}
                onError={(err) => {
                    setError(err)
                }}
            />
        </>
    )
}

export default PayPalCheckOutButton