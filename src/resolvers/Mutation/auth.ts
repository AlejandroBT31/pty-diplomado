const { ApolloError, } = require("apollo-server");

import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcryptjs'
import { Context, getUserId } from '../../utils'
var jwt = require('jsonwebtoken');

export default {
  async signup(parent, args, ctx: Context) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.prisma.createUser({ ...args, password })
    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET, {expiresIn: "10h"}),
      user,
    }
  },

  async login(parent, { email, password }, ctx: Context) {
    try {
      const user = await ctx.prisma.user({ email });
      if (!user) {
        return new ApolloError('Invalid email or password', 'ERR_AUTH')
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        // throw new Error(`Invalid email or password`);
        return new ApolloError('Invalid email or password', 'ERR_AUTH')
      }
      return {
        token: jwt.sign({ userId: user.id }, process.env.APP_SECRET, {
          expiresIn: "10h",
        }),
        user,

       jwt.verify(token, 'process.env.APP_SECRET', function(err, decoded){
          if(err){
            decoded.status(401).send({
              error: 'Invalid Token'
            })
          }else{
            decoded.send({
              message: 'Valid Token'
            })
          }
        }),
      };  
    } catch (error) {
      return error;
    }
  },
}
function ContextParameters(ctx: any, ContextParameters: any) {
  throw new Error('Function not implemented.');
}

