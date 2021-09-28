import { CinemaCreateInput } from "../../generated/prisma-client";
import { Context } from "../../utils";

export default{
    //Create Cinema
    createCinema: (parent, { data }: { data: CinemaCreateInput }, ctx: Context) => ctx.prisma.createCinema(data),

    //update Cinema
    updateCinema: (parent, args: { data: any, where: any }, ctx: Context) => ctx.prisma.updateCinema(args),
    
    //Delete Cinema
    deleteCinema: (parent, args: { where: any }, ctx: Context) => ctx.prisma.deleteCinema(args.where)   
}