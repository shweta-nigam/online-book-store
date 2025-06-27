import React, {useEffect} from "react"
import { useOrderStore } from "@/store/useOrderStore"
import {Loader} from "@/components/Loader"
import{ Card, CardContent} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const OrderPage = () => {
    const {
        fetchUserOrder,
        currentOrder,
        getOrderDetails,
        isLoading, 
    } = useOrderStore()

    useEffect(()=>{
        fetchUserOrder()
    }, [])

    if(isLoading) return <Loader />;

    return(
        <div className="p-6 max-w-5xl mx-auto">
           <h1 className="text-3xl font-bold mb-6">Your Order</h1>

           {!currentOrder ? (
            <p className="text-gray-500">You haven't placed any order yet.</p>
           ): (
               <Card className="mb-4 shadow-lg rounded-2xl">
                  <CardContent className="p-6 space-y-4">
                    <div>
                        <strong>Order ID:</strong> {currentOrder.id}
                    </div>
                    <div>
                        <strong>Book ID:</strong> {currentOrder.quantity}
                    </div>
                    <div>
                        <strong>Quantity:</strong> {currentOrder.id}
                    </div>
                    <div>
                        <strong>Status:</strong> {currentOrder.status}
                    </div>

                    <div className="flex gap-4 mt-4">
                         <Button
                         onClick={()=> getOrderDetails(currentOrder.id)}
                         variant="outline">
                            Refresh Details
                         </Button>
                         <Button
                         onClick={()=> deleteOrder(currentOrder.id)}
                         variant="destructive">
                            Delete Order
                         </Button>
                    </div>
                  </CardContent>
               </Card>
           )}
        </div>
    )
}
 
export default OrderPage;
