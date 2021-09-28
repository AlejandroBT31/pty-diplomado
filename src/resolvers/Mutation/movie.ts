import { MovieCreateInput } from "../../generated/prisma-client";
import { Context } from "../../utils";


export default{
    //Create Movie
    createMovie: (parent, { data }: { data: MovieCreateInput }, ctx: Context) => ctx.prisma.createMovie(data),

    //update Movie
    updateMovie: (parent, args: { data: any, where: any }, ctx: Context) => ctx.prisma.updateMovie(args),
    
    //Delete Movie
    deleteMovie: (parent, args: { where: any }, ctx: Context) => ctx.prisma.deleteMovie(args.where)   
}