import { FunctionCreateInput } from "../../generated/prisma-client";
import { Context } from "../../utils";

export default{
    //Create Function
    createFunction: (parent, { data }: { data: FunctionCreateInput }, ctx: Context) => ctx.prisma.createFunction(data),

    //update Function
    updateFunction: (parent, args: { data: any, where: any }, ctx: Context) => ctx.prisma.updateFunction(args),
    
    //Delete Function
    deleteFunction: (parent, args: { where: any }, ctx: Context) => ctx.prisma.deleteFunction(args.where)   
}