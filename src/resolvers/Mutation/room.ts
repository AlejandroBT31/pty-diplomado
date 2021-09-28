import { RoomCreateInput } from "../../generated/prisma-client";
import { Context } from "../../utils";

export default{
    //Create Room
    createRoom: (parent, { data }: { data: RoomCreateInput }, ctx: Context) => ctx.prisma.createRoom(data),

    //update Room
    updateRoom: (parent, args: { data: any, where: any }, ctx: Context) => ctx.prisma.updateRoom(args),
    
    //Delete Room
    deleteRoom: (parent, args: { where: any }, ctx: Context) => ctx.prisma.deleteRoom(args.where)   
}