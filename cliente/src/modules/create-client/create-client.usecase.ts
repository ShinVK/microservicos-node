import { prismaClient } from '../../infra/database/prismaClient'
import { kafka } from '../../infra/provider/kafka'

type CreeateClientRequest = {
  name: string,
  password: string,
  email: string,
  document: string,
  phone: string,
}

export class CreateClientUseCase {
  constructor() { }
  
  async execute(data: CreeateClientRequest) {
    console.log("💩  ~ CreateClientUseCase ~ execute ~ data:", data)
    
    const customer = await prismaClient.client.findFirst({
      where: {
        email: data.email
      }
    })


    if (customer) throw new Error('Customer already Exists!')
    const customerCreated = await prismaClient.client.create({
      data: {
        ...data
      }
    })

    kafka.

    return customerCreated
  }
}