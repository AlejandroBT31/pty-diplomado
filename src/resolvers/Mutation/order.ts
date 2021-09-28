import { OrderCreateInput } from "../../generated/prisma-client";
import { Context } from "../../utils";

export default{
    //Create Order
    createOrder: (parent, { data }: { data: OrderCreateInput }, ctx: Context) => ctx.prisma.createOrder(data),

    //update Order
    updateOrder: (parent, args: { data: any, where: any }, ctx: Context) => ctx.prisma.updateOrder(args),
    
    //Delete Order
    deleteOrder: (parent, args: { where: any }, ctx: Context) => ctx.prisma.deleteOrder(args.where)   
}