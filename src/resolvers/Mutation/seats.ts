import { SeatsCreateInput } from "../../generated/prisma-client";
import { Context } from "../../utils";

export default{
    //Create Seats
    createSeats: (parent, { data }: { data: SeatsCreateInput }, ctx: Context) => ctx.prisma.createSeats(data),

    //update Seats
    updateSeats: (parent, args: { data: any, where: any }, ctx: Context) => ctx.prisma.updateSeats(args),
    
    //Delete Seats
    deleteSeats: (parent, args: { where: any }, ctx: Context) => ctx.prisma.deleteSeats(args.where)   
}